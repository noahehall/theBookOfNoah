# TLDR

cloudformation, config, systems manager, autoscaling

## autoscaling

- core concept in high availability
- scale out/in (up/down) elastic capacity in response to changes in demand for compute resources

- launch configuration: similar considerations as starting an EC2

  - AMI template
  - EC2 instance type (e.g. a spot instance)
  - user data scripts: actions to perform on boot
  - security group(s) to attach

- launch templates: modern way to specify EC2 instances for an auto scale group; same considerations as setting up a launch configuration

  - recommended over launch configurations
  - the difference being you can have multiple version of a launch template, but only one version of a launch configuration
  - e.g. one that starts small instances, and another that starts large instances

- auto scaling group: ASG: the details about where EC2 instances get launched

  - the ASG itself should be placed behind a load balancer
  - launch configuration/template
  - number of initial instances
  - VPC
  - subnets

- scaling polices
  - scale out: increase capacity
  - scale in: decrease capacity

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

## systems manager

- view operatoinal data from multiple services & automate operation tasks

  - formerly known as Simple Systems Manager

- use cases

  - centrally define the configuration options & policies for managed instances
  - identify resources that are out of compliance and take corrective action
  - automate variety of maintence tasks (e.g. ec2 patching)
  - create runbook style docs that define the actions to perform on managed instances
  - group AWS resources together using various attributes
  - automatically collect inventory information about amazon EC2 and on-premise managed instances

- systems manager agent: required to be installed on ec2 instances, on-premise servers, or avirtual machine

  - some AMIs have the agent preinstalled

- management types

  - operations managemnet
  - application management
  - change management
  - node management
  - shared resources

- fleet manager: all nodes that include the Systems manager agent

  - click into an instance
    - view file system, performance counters, users and gorups
    - can even log into the instance from the web console (click actions button)

- inventory: basic inventory information about all your instances

- patch manager: auto patch instances

- run command: run a command on an instance via the web console

  - pick one from the list of command documents

- hybrid activations: for installing the systems manager agent in on-premise servers

  - you only need to do this once for each account
  - make sure you have keep the activation code & ID as you only can view it once while creating it

- documents: create your own runbook document

  - in JSON/yaml format

- distributor: enable you to install software on your managed instances

  - software provided by aws
  - software you provide
    - create a package and upload it
    - systems manager will push it to your instance

- state mangaer: manage the state of ec2 & hybrid infrastructure
  - create an association
    - defines the desired state of your targets
    - includes a rundoc that contains
      - the state definition
      - target information
      - schedule

### systems management configuration

- configuration type
  - host management
    - update systems manager agent every two weeks
    - collect inventory from your instances every 30 ins
    - scan instances for missing patches daily
    - install & configure the cloudwatch agent
    - update the agent every 30 days
  - config recording
  - distributor
- targets
  - region
  - all/specific instances
  - resource group/manually select
