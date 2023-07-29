# Elastic Container Service (ECS)

- highly scalable container orchestration service; shared state, optimistic concurrency system providing flexible scheduling for tasks and containers
- its a cluster management platform for long running stateless services and applications
- use cases
  - lift and shift with minimal work
  - longer running processes/larger deployment packages/memory requirements
  - applications with non http/s listeners
  - run side cars with your service
  - predictable/consistent workloads

## my thoughts

## links

- [landing page](https://aws.amazon.com/ecs/?did=ap_card&trk=ap_card)
- [task definitions](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html)
- [task scheduling](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html)
- [services](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)

## best practices

- pick the right task type
  - tasks: for ondemand workloads that are triggered/run in intervals
  - services: long running applications
  - start here if:
    - special instance type needs
    - ec2 dedicated instances
    - utilizing ec2 reserved instances
    - GPUs
    - windows workloads
- pick the right launch type
  - ec2: you manage the cluster and placement of containers on instances
  - fargate: near serverless experience
    - you should start here, then move to ec2 launch type if you need more control
    - its faster to launch & fully managed, i think its the same costs as well

### anti patterns

## features

- highly scalable and integrates with third party schedulers and aws services
- schedules placement across managed clusters
- (re)start containers with simple api calls
- fetch cluster state from a centralized service
- schedule the placement of containers across ec2 clusters based on resource needs, isolation policies and availability requirements
- managed service discovery: extensible auto service registration with predictable service names, auto updated with healthy ip & port

### pricing

- pay for what you provision
- billed for task level CPU and memory
- per-second billing, one minute minimum

## terms

- ecs agent: required to be installed on the ec2 instance, should be available in any ECS optimize AMI
- ecs backplane: the controlplane for all of your ECS resources, receives all of the telemetry data from every ecs agent

## basics

- general process
  - ecs pulls images from a registry
  - customize the image and setup configuration in ECS
  - select launch type: ec2 vs fargate
  - launch tasks into subnets
    - create an elastic network interface (ENI)
    - ENI is allocated to a private IP in the subnet
    - ENI is attached to the task and uses its private IP
    - optionally assign a public IP for non-vpc comms
- general workflow
  - register task definition
  - create cluster
  - run tasks / create service

### architecture

- container instance: ec2 instance running the ECS agent has registered with a cluster
- container: created as part of a task
- cluster: logical grouping of container instances on which you can place tasks
- task definition: a description of an application containing one/more container definitions
- task: a single instance of a task definition
- service: run and maintain one/more tasks simultaneously
- service scheduler: the method used for placing tasks on container instances; ensures the specified number of tasks are constantly running and optionally registered with elastic load balancer

#### tasks

- an instance of a task definition
- the atomic unit of deployments
  - limited to a single ec2 host
- one/more tightly coupled containers
- managed by ecs task scheduler
- run once/intervals, optimal for batch jobs

```jsonc
// list of options, google the rest, theres too many, most of the docker options are verbatim
{
  "family": "cowboy-bebop",
  "networkMode": "awsvpc", // enables ENI cration & attachment to task
  "taskRoleArn": "arn:aws:iam::abcdefg:role/ECS-TaskRole",
  "executionRoleArn": "arn:aws:iam::abcefg:role/ecsTaskEXecutionRole",
  // add these to make this for FARGATE launch type
  "requiredCompatibilities": ["FARGATE"],
  // fargate resources are controlled at the task level
  // all containerDefinitions share these resources
  "cpu": "256", // 256, 1 vCpu, etc
  "memory": "512", // 512, 2 gb , etc
  // END FARGATE
  // options for both ec2 & fargate
  "volumes": [
    {
      "name": "some-vol"
    },
    {
      "host": {
        "sourcePath": null
      },
      "name": "another-vol"
    }
  ],
  "containerDefinitions": [
    // up to 10; all allocated on the same host
    {
      "name": "my-app", // required
      "image": "nimv2", // image url required
      // ec2 resources are controlled at the container level
      "cpu": 10, // 1024 === 1 full vCPU
      "memory": 300, // in MB
      "memoryReservation": 200,
      "essential": true,
      "command": ["/bin/sh -c \"same as docker\""],
      "logConfiguration": {
        "logDriver": "awslogs", // stdout -> cloudwatch logs
        "options": {
          "awslogs-group": "/ecs/my-app-name", // you should prefix it with /ecs/ for clarity while searching
          "aws-logs-region": "some-aws-region",
          "awslogs-stream-prefix": "my-app-name/container-name" // could also be prefixed with ecs for clarity
        }
      },
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
  "taskDefinition": "my-app:10", // you should postfix the desiredCount for clarity
  "desiredCount": 10,
  "launchType": "FARGATE", // or ec2
  "platformVersion": "LATEST", // use the latest fargate version
  "loadBalancers": [
    // should already exist? dunno
    {
      "targetGroupArn": "arn:aws:elasticloadbalancing:SOME_REGION:abcdefg:targetgroup/abcdefg",
      "containerName": "my-service",
      "containerPort": 80
    }
  ],
  "networkConfiguration": {
    "awsvpcConfiguration": {
      // should already exist? each subnet is in a different AZ
      "subnets": ["subnet-abcdefg", "subnet-hijklmnop", "subnet-qrstuvwxyz"],
      "securityGroups": ["sg-abcdefg"],
      "assignPublicIp": "ENABLED"
    }
  },
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

- task definition
  - application containers
  - image url
  - resource (cpu/memory/etc) requirements
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
- targets
  - load balancer (for services)
  - abc
- cluster
  - infrastructure isolation boundary
  - IAM permissions boundary
- launch type
  - ec2
  - fargate
- storage (EBS)
  - writable layer storage: 10gb per task across all containers, including image layers, data private to each container
  - volume storage: 4gb per task, assign via volume mounts (without sourcePath), data shared across all containers
- IAM permission tiers
  - see [markdown file](../securityIdentityCompliance/iam.md)
- service discovery
  - registration via route53 auto naming: see [markdown file](../networkingContentDelivery/route53.md)

### fargate

- nearly serverless: 99% of the infrastructure required for the container is managed by ecs
  - its the ec2 launch type + ec2 management automation + additional services
- preferred with unpredictable scaling requirements
- task cpu:memory configurations
  - 256(.25 vCPU): 512mb/1gb/2gb
  - 512(.5 vCPU): 1/2/3/4gb
  - 1024 (1 vCPU): 2/3/4/5/6/7/8gb
  - 2048 (2 vCPU): 4 -> 16gb in 1 gb increments
  - 4096 (4 vCPU): 8 -> 30gb in 1gb increments
- some features may only be available for fargate
  - logConfiguration.driver === awslogs
  - task metadata queries for integration with monitoring tools like datadog
    - task level queries
      - some.instance.ip/v2/metadata: JSON metadata for task
      - some.instance.ip/v2/stats: JSON docker states for all containers in task
    - container level queries
      - some.instance.ip/v2/metadata/container-id
      - some.instance.ip/v2/stats/container-id

### ec2

- your responsible for defining the placement of containers within the ec2 cluster
- preferred with simpler scaling requirements
- clusters: are region specific but can span availability zones for increased resilience

## integrations

### EKS

- abcd
