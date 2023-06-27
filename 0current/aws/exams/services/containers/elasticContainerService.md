# Elastic Container Service (ECS)

- highly scalable container orchestration service
- a shared state, optimistic concurrency system providing flexible scheduling for tasks and containers
- its a cluster management platform for long running stateless services and applications

## my thoughts

- [prefer nomad unless someones paying you to use ecs](https://developer.hashicorp.com/nomad/intro/vs/ecs)

## links

- [landing page](https://aws.amazon.com/ecs/?did=ap_card&trk=ap_card)

## best practices

- pick the right task type
  - tasks: for ondemand workloads that are triggered/run in intervals
  - services: long running applications
- pick the right launch type
  - ec2: you manage the cluster and placement of containers on instances
  - fargate: near serverless experience

### anti patterns

## features

- highly scalable and integrates with third party schedulers and aws services
- schedules placement across managed clusters

### pricing

## terms

- ecs agent: required to be installed on the ec2 instance, should be available in any ECS optimize AMI
- ecs backplane: the controlplane for all of your ECS resources, receives all of the telemetry data from every ecs agent

## basics

- general workflow
  - ecs pulls images from a registry
  - customize the image and setup configuration in ECS
  - select launch type: ec2 vs fargate

### architecture

- container instance: ec2 instance running the ECS agent has registered with a cluster
- container: created as part of a task
- cluster: logical grouping of container instances that you can place tasks on
- task definition: a service containing one/more container definitions
- task: a single instance of a task definition
- service: run and maintain one/more tasks simultaneously

#### tasks

- an instance of a task definition
- the atomic unit of deployments
  - limited to a single ec2 host
- one/more tightly coupled containers
- managed by ecs task scheduler
- run once/intervals, optimal for batch jobs

```jsonc
// list of options, google the rest, theres too many
{
  "family": "cowboy-bebop",
  // add these to make this for FARGATE launch type
  "requiredCompatibilities": ["FARGATE"],
  // fargate resources are controlled at the task level
  "cpu": "256",
  "memory": "512",
  // END FARGATE
  // options for both ec2 & fargate
  "volumes": [
    {
      "name": "some-vol"
    }
  ],
  "containerDefinitions": [
    {
      "name": "my-app",
      "image": "nimv2",
      // ec2 resources are controlled at the container level
      "cpu": 10, // 1024 === 1 full vCPU
      "memory": 300, // in MB
      "essential": true,
      "command": ["/bin/sh -c \"same as docker\""],
      "portMappings": [
        {
          "hostPort": 80,
          "containerPort": 80,
          "protocol": "tcp"
        }
      ],
      "volumesFrom": [
        {
          "sourceContainer": "another-app-in-this-task-definition"
        }
      ],
      "mountPoints": [
        {
          "containerPath": "/opt/my-app",
          "sourceVolume": "some-vol" // from above
        }
      ]
    }
  ]
}
```

#### services

- multiple tasks with potentially an application load balancer to route traffic between task instances
  - tasks in a service can span ec2 instances
- managed by ecs service scheduler
- can scale in/out and are avability zone-aware
- optimal for long-running applications
- service discovery: integrated into ecs
  - services can automatically be registered with predictable service names in route53

```jsonc
// list of hella options
{
  "cluster": "my-cluster",
  "serviceName": "my-service",
  "taskDefinition": "my-app",
  "desiredCount": 10,
  "placementConstraints": [
    {
      "type": "memberOf",
      "expression": "attribute:ecs.instance-type matches t2.*"
    }
  ],
  "placementStrategy": [
    {
      "type": "spread",
      "field": "attribute:ecs.availability-zone"
    }
  ]
}
// placement constraint types
// memberOf, distinctInstance

// placement strategy examples
// type: sprad, field: memory

// expression examples
// (attribute:ecs.instance-type == t2.small or attribute:ecs.availability-zone != us-east-1d) and some-other-thing
// not=(task:group == somelabel)
// task:group == somelabel
```

#### scheduler

- leverages cluster state informationed retrieved from teh ECS API to make placement decisions
- ensures the requested number of tasks are constantly running
- reschedules tasks on failure
- optionally registers tasks with an ELB load balancer

## considerations

- task placement: based on the following, ECS will identify the hosts that meet the requirements
  - placement constraints: are binding and can prevent task placement
    - cluster constraints: CPU, memory, network requirements
    - custom constraints: location, instance type, AMI, etc
    - distinctInstance: each task must be on a different container instance
    - memberOf: places tasks based on some expression
  - placement strategies: best effort (not guaranteed)
    - random:
    - spread: evenly across instances based on some value, e.g. availability zone
    - binpack: consolidate into a small number of instances to improve utilization based on the least available amount of cpu/memory
      - seeks to minimize the number of isntances
  - scheduling strategies
    - replica scheduling strategy: maintain the optimal level of running tasks across instances per the task placement strategy
    - daemon scheduling strategy: deploys exactly one task to each instance per the task placement strategy
      - only for the ec2 launch type
      - common for sidecars, e.g. logging / monitoring where only one service is required for all tasks in the instance

### fargate

- nearly serverless: 99% of the infrastructure required for the container is managed by ecs
- preferred with unpredictable scaling requirements

### ec2

- your responsible for defining the placement of containers within the ec2 cluster
- preferred with simpler scaling requirements
- clusters: are region specific but can span availability zones for increased resilience

## integrations
