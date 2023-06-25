# service name here

- highly scalable container orchestration service
- its a cluster management platform

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

```jsonc
// list of hella options
{
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

### architecture

#### tasks

- an instance of a task definition
- the atomic unit of deployments
  - limited to a single ec2 host
- one/more tightly coupled containers
- managed by ecs task scheduler
- run once/intervals, optimal for batch jobs

#### services

- multiple tasks with potentially an application load balancer to route traffic between task instances
  - tasks in a service can span ec2 instances
- managed by ecs service scheduler
- can scale in/out and are avability zone-aware
- optimal for long-running applications

## considerations

- task placement: based on the following, ECS will identify the hosts that meet the requirements
  - cluster constraints: CPU, memory, network requirements
  - custom constraints: location, instance type, AMI, etc
  - placement strategies:
    - spread: multiple instances to maximize availability
    - binpack: consolidate into a small number of instances to improve utilization

### fargate

- nearly serverless: 99% of the infrastructure required for the container is managed by ecs
- preferred with unpredictable scaling requirements

### ec2

- your responsible for defining the placement of containers within the ec2 cluster
- preferred with simpler scaling requirements
- clusters: are region specific but can span availability zones for increased resilience

## integrations
