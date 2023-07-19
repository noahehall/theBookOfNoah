# EC2 auto scaling

- horizontially scale compute capacity to meet changing demand based on cloudwatch events, use elastic lastic load balancing to distribute traffic across a fleet of ec2 instances
- this file focuses on autoscaling, check the sibling ec2 file for general ec2 docs

## my thoughts

## links

- [landing page](https://aws.amazon.com/ec2/autoscaling/)
- [faqs](https://aws.amazon.com/ec2/autoscaling/faqs/)
- [capacity limits](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html)
- [step and simple scaling policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html)
- [target tracking scaling policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html)
- [using launch tempaltes](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-launch-template.html)

## best practices

- always use a launch template and rarely a launch configuration
  - lanch configurations arent reusable

### anti patterns

## features

- simplify deploy to EKS managed node group, ECS and EC2 auto scaling groups
- fleet management: manage and maintain instance health; update and replace instances
- automatic scaling: automatically scale & balance capacity based on demand across availability zones and subnets
- scheduled scaling based on user defined policies
- predictive scaling: use ML to help schedule the optimum number of instances
- integrate insstances with ELB via ELB healthchecks and traffic will automatically be routed to backend targets

### pricing

- no direct charge, except for the ec2 and cloudwatch scaling policies

## terms

## basics

- general workflow
  - launch template configuration: which resources dshould be automatically scaled
    - create an ec2 launch template that specifies instance configuration details
    - select a launch template; potentially override launch template configuration
      - you can modify almost any detail of the selected launch template
      - you can instead use a launch configuration; but they arent reusable
  - create an auto scaling group: where should resources be deployed
    - specify the VPC, availability zones and subnets
    - specify purchase options: either/combination of ondemand and spot intances
    - configure load balancing:
      - no laud balancer
      - existing load balancer
      - attach a new load balancer to front the autoscaling group
    - setup health checks
    - setup monitoring with cloudwatch
  - setup scaling policies: when should resources be added or removed, and how many
    - configure group size and scaling policies
      - group size:
        - desired capacity: the initial amount created; defaults to the min capacity if a value isnt selected
          - when demand decreases the oldest resource is removed first
        - minimum capacity: even if the threshold for lowering capacity is breached, never drop below this amount
        - maximum capacity: even if the threshold for increasing capacity is breached, never provision more than this amount
      - scaling policies: define how to scale the capacity of the autoscaling group to meet demand
        - none: when you want to manually un/provision resources
        - scaling policy configuration
          - scaling policy name
          - metric type: e.g. Average CPU Utilization
          - target value: of the selected metric type that triggers the cloudwatch alarm
          - instances need: how many seconds to wait for instances to be online
            - until the warmup time has expired, the instance is not counted toward the aggregated metrics of the auto scaling group
        - scaling policy types: define cloudwatch alarms that triggers an autoscaling event
          - target tracking scaling policy: automatically creates cloud watch alarms that triggers based on the target value
            - appropriate for scaling based on metrics like cpu utilization, average network traffic, request count, etc
          - simple scaling policy: use a cloudwatch alarm with an action, e.g. un/provision resources, change desired capacity, etc
            - there is a cool down periodafter the scaling policy is invoked and wont respond to additional alarms
          - step scaling policy: can respond to multiple alarms unlike simple scalings cooldown period
            - e.g. add two resources when utilization is above 85%, and 3 more instances if its at 95%
    - add notifications: are sent to SNS topicx whenever EC@ auto scaling launches/terminates ec2 instances in the auto scaling group
  - test the autoscaling group: use a load testing tool

### auto scaling groups

- defines a logical grouping of instances based on a launch template that scales horizontally to meet demand

### launch configurations

## considerations

- auto scaling groups
- launch configurations

## integrations
