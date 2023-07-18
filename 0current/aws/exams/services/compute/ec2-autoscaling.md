# EC2 auto scaling

- horizontially scale compute capacity to meet changing demand based on cloudwatch events, use elastic lastic load balancing to distribute traffic across a fleet of ec2 instances
- this file focuses on autoscaling, check the sibling ec2 file for general ec2 docs

## my thoughts

## links

- [landing page](https://aws.amazon.com/ec2/autoscaling/)

## best practices

### anti patterns

## features

- deploy to EKS managed node group, ECS and EC2 auto scaling groups
- provision amazon ec2 instances
- manage and maintain instance health
- scale and balance capacity across availability zones
- update and replace instances
- simplify code deployment

### pricing

- no direct charge, except for the ec2 and cloudwatch scaling policies

## terms

## basics

- general workflow
  - create an ec2 launch template that specifies instance configuration details
  - create an auto scaling group
    - select a launch template; potentially override launch template configuration
    - specify the VPC, availability zones and subnets
    - configure load balancing:
      - no laud balancer
      - existing load balancer
      - attach a new load balancer to front the autoscaling group
    - setup health checks
    - setup monitoring with cloudwatch
    - configure group size and scaling policies
      - group size:
        - desired capacity: defaults to the min capacity if a value isnt selected
        - minimum capacity
        - maximum capacity
      - scaling policies: define how to scale the capacity of the autoscaling group to meet demand
        - none: disables auto scaling
        - target tracking scaling policy: define a cloudwatch alarm that triggers an autoscaling event
          - scaling policy name
          - metric type: e.g. Average CPU Utilization
          - target value: of the selected metric type that triggers the cloudwatch alarm
          - instances need: how many seconds to wait for instances to be online
            - until the warmup time has expired, the instance is not counted toward the aggregated metrics of the auto scaling group
    - add notifications: are sent to SNS topicx whenever EC@ auto scaling launches/terminates ec2 instances in the auto scaling group
  - test the autoscaling group: use a load testing tool

### auto scaling groups

- defines a logical grouping of instances based on a launch template that scales horizontally to meet demand

### launch configurations

## considerations

- auto scaling groups
- launch configurations

## integrations
