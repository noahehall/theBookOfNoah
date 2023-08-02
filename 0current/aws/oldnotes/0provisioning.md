# Provisioning

- cloudformation, config, autoscaling, codecommit, codepipeline, codedeploy, service catalog, elastic beanstalk

## TLDR

- using many of these services directly restrains multi-cloud architectures
- however knowing they exist and how they work is required for consuming these resources in third-party provisioning tools

### interwebs

- [IBM on ITSM](https://www.ibm.com/topics/it-service-management)
- [IBM on ITIL](https://www.ibm.com/topics/it-infrastructure-library)

## links

- [proton](https://aws.amazon.com/proton/)
- [service management connector](https://aws.amazon.com/service-management-connector)
- [aws provisioning introduction](https://aws.amazon.com/products/management-and-governance/use-cases/provisioning-and-orchestration/)
- [service catalog](https://aws.amazon.com/servicecatalog/)
- [cloud formation](https://aws.amazon.com/cloudformation/)
- [opsworks](https://aws.amazon.com/opsworks/)
- [config](https://aws.amazon.com/config/)
- [elastic beanstalk](https://aws.amazon.com/elasticbeanstalk/?did=ap_card&trk=ap_card)
- [local zones](https://aws.amazon.com/about-aws/global-infrastructure/localzones/?did=ap_card&trk=ap_card)
- [cdk](https://aws.amazon.com/cdk/)
- [codepipeline](https://aws.amazon.com/codepipeline/)
- [codebuild](https://aws.amazon.com/codebuild/)

## best practices

- a deep understanding of your application is the only way to create effective autoscaling configurations & policies
- think deeply about your demand profile when setting up autoscaling policies
- always simulate your autoscaling policy configuration via the web console > scaling policy > actions dropdown > execute
- autoscaling
  - combine load balancing and auto scaling to deliver highly available services
    - that way instances are registered and automatically placed behind the load balancer and added to health checks automatically
  - Simulate a failover by terminating an instance and verifying the other instances have handled the additional processes.

### gotchas

- remember cloud watch alarm metrics are aggregated across the entire autoscaling group, and not for just a specific instances breaching a threshold

## autoscaling (ec2 dashboard)

- core concept in high availability
- scale out/in (up/down) elastic capacity in response to changes in demand for compute resources
- even without scaling, can ensure failed instances are replaced (e.g. in the event of a failed health check)
- cooldown period: a protect time in which a scaling event is occuring so that a threshold being crossed doesnt trigger a scaling action
- launch configuration: similar considerations as starting an EC2; you should use launch templates instead to get the latest/advanced features and better workflow/wizard
  - AMI template
  - EC2 instance type (e.g. a spot instance)
  - user data scripts: actions to perform on boot
  - security group(s) to attach
- launch templates: modern way to specify EC2 instances for an auto scale group; same considerations as setting up a launch configuration
  - recommended over launch configurations
  - main difference being you can
    - have multiple version of a launch template, but only one version of a launch configuration; a dedefault one that starts small instances, and another that starts large instances
    - better workflow/wizard
    - more advanced features and configuration options
- auto scaling group: ASG: uses the launch template (i.e. ec2 template) for creating ec2 instances across subnets & AZs in a VPCs
  - target groups: a group of ec2 resources
  - launch configuration/template
  - number of initial, desired, and maximum instances to have running
    - desired: # you want running, scaling will ensure this is the normal running capacity bar any changes in demand
    - minimum: duh
    - maximum: duh: but think about it, you dont want to set it too high because a DOS attack can trigger unbelievable costs
  - VPC
  - subnets
  - load balancing: will monitor load balancer utilization and scale in/out ec2 resources
    - you need to have previously created an application or classic load balancer
    - for an existing/new auto scaling group click edit and go to the load balancing section
    - gotchas:
      - the '`choose a target group for your load balancer`' option is for application load balancers
      - the '`choose a load balancer`' option is for classic load balancers
    - create a new target group for a CLB/ALB that targets the instances managed by the auto scaling group
    - then go to an existing load balancer and click edit rules on the listeners tab
    - you want to insert a new rule (or modify an existing one) that matches those instances (e.g. path based rule) then sticky (i.e always) forwards to the target group you created in the previous step
    - now your load balancer forwards to the target group that contains the ec2 instances
    - you should return to the auto scaling group, and ensure `ELB` health checks is selected under the health checks section in addition to the EC2 health checks
  - health checks: how long to wait before checking if newly launched instances are healthy
  - cloudwatch: collect group metrics to track changes to the autoscaling group over time
  - sns topics: add notifications when scaling events occur
- scaling polices: define which [cloud watch alarm] metric event thresholds trigger scaling actions; a tool to dynamically control the number of running instances in an autoscaling group
  - autoscaling group > automatic scaling tab
  - scale out: increase capacity
  - scale in: decrease capacity
  - can integrate with cloudwatch: e.g. trigger a scaling event in response to a cloudwatch alarm when average CPU utilization increases 80% for 5 consecutive minutes
  - can be schedule driven: e.g. between 9-5 have 3 instances, but only 1 during other hours
  - policy types
    - target tracking scaling: automatically changes the # of running instances based on some metric
      - e.g. target value of 60% CPU utilization: this policy will ensure that the aggregate of all instance CPU utilization is close to 60%
      - considerations that impact success & cost of target tracking
      - length of time for new instances to start & enter the group
      - frequency of change in demand that can cause rapid changes in scaling in/out
      - cost of unpredicted swings in demand, causing rapid scaling out, and slower scaling in
    - step scaling: greater control over scale in/out events in response to cloud watch alarms; % based scaling that also evaluates during cooldown periods (unlike simple scaling)
      - e.g. target value of 60%, if it goes up by 10%, add 1 additional instance, if its passed by 30%, add 3 instances
      - allows for fine-grained scale adjustments
    - simple scaling: not re-evaluated during cooldown periods; if you experience a huge and sudden change in demand, you may not scale out appropriately
    - Simple Queue Service
- considerations
  - how many subnets & AZs are you using? different AZs have distinct number of subnets
  - scaling policies: should increment servers evenly across AZs and subnets, it will automatically distribute servers to each subnet in each AZ
  - getting the initial, and desired number of instances takes good understanding of your resource load
  - boot time: if you have dramatic & unpredictable shift in demand, ensure your AMIs have quick boot times
  - good understanding of your application performance is necessary to create appropriate cloudwatch alarms that trigger scaling actions
  - spot instances are critical for cost optimization

## cloudformation

- stack
  - resources
  - outputs
- s3
- parameters
- key pairs
- subnets
- vpc
- policy
- rollback configuration

## config

- A summarized view of AWS and non-AWS resources and the compliance status of the rules and the resources in each AWS Region.
- managed service providing an inventory of AWS resources, config history, and change notifcations to
- use cases
  - enable security & governance
  - discover existing aws resources
  - CRUD notifications
  - continuously monitor & record config changes of AWS resources
  - determine how a resource was configured at any point in time
  - define rules for provisioning & configuring AWS resources
    - deviations automatically trigger SNS notifications & cloudwatch events
  - view relationships between resources
  - export complete inventory of AWS resources with all config details
- config items: a point in time view of the various attributes of an aws resource
  - metadata, attributes, relatinships, current config, related events
  - items are created whenever AWS config detects a change to a resource type its recording
- config history: collection of config items for a given resource over any period
  - stored in s3
  - anwers questions like:
    - when was the resource first created
    - how was the resource configured over the last month
    - what configuration changes were made last monday
- config recorder: stores configuration of supported resources as configuration items
  - you must create & start the recorder
- config rules: the desired config settings for AWS resources
  - if a resource violates a rule, aws config flags the resource and the rule as noncompliant
  - rule evaluations occur when:
    - a configuration change occurs
    - periodically based on selected frequency
  - rule types:
    - managed rules: predefined rules you can customize
    - custom: rules you create
- supported resource types
  - ec2, s3, vpc, iam, lambda, cloudformation, cloudwatch, cloudtrail

### config considerations

- resource types: all/specific
  - resource category
  - reource type
- IAM role (use a default provided by aws)
- s3 bucket (to store config items)
- sns topic (to stream config changes & notifications)
- rules (for remediation)
  - custom rules
    - must be associated with an AWS Lambda fn to perform the required actions
  - managed rules
    - search & select one
    - name
    - description
    - trigger
      - type: determines when the eveluation occurs
        - all changes: when any resource is created, changed, deleted
        - resources: when a resource matching the type you specify is created, changd, or deleted
        - tags: when a resource with the specified tag is created, changed or deleted
    - resources
    - parameters: the attributs for which the resources will be evaluated
      - key: get this key
      - value: compare it to this value
- manage remediation (select a rule > actions)
  - type
    - automatic
    - manual
  - action (via AWS Systems Manager Automation)
    - select an action that will bring the resource back into compliance
  - resource ID
  - parameter: the desired value for non compliance resources

## codecommit

- secure, highly scalable, managed source control service that hosts private Git repositories

## codebuild (CI)

- build and test

## Codepipeline (CD)

- fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates. CodePipeline automates the build, test, and deploy phases of your release process every time there is a code change, based on the release model you define.

## codedeploy

- ..

## cloudformation

- aws IaC tool

## service catalog

- create, share, organize and govern currated IaC templates

## opswork

- automate with chef and puppet

## elastic beanstalk

- upload, deploy and scale web apps and services
- upload your code and EBS handles capcitiy provisinoing, load balancing, auto scalaing and health monitoring

## locale zones

- type of infrastructure deployment htat places compute, storage, db and other AWS services close to large population and industry centers

## cdk cloud development kit

- terraform knockoff

## service management connector

- provision, manage and operate AWS resources within ITSM

## proton

- self-service infrastructure templates and provisioning automation
