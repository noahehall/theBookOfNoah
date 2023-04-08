# security

- new file for security stuff

## links

- [kms pricing](https://aws.amazon.com/kms/pricing/)
- [waf](https://aws.amazon.com/waf/)

## best practices

- ALWAYS
  - define your security groups broadly, so you dont have to manage hundreds/thousands of them per vpc

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

### operations management

- explorer: customizable dashbaord
  - compliance: aggregates and display s ops data for each resource group
  - inventory: collects instance-level (installed software, files, services, etc) specific data
- ops center: view investigate and resolve resource issues
- incident manager: prepare for and resolve availability and perf issues

### application management

- application manager: application-level runtime issue management
- appconfig: deploy app configs
- parameter store: centralized config data (strings and secrets)

### change management

- automation: automate repetitive tasks across regions and accounts
- change manager: request, approve, implmeent and report on ops (config/infra) changes
- maintenance windows: schedule time windows for running instance-level tasks
- state manager: configuration management for EC2 or on-premis servers

### node management

- fleet manager: manage remote servers & edge devices
- session manager: browser-based interactive shell, cli and remote desktop access
- patch manager: select and deploy operating system and software patches
- run command: secure remote access without the ned for bastion hosts, ssh or remote powershell

## Secrets Manager

- [main page](https://aws.amazon.com/secrets-manager/?did=ap_card&trk=ap_card)
- Centrally manage the lifecycle of secrets

## cognito

- authnz: application identity management

## license manager

- manage software licenses and fine-tune licensing costs

## detective

- manage and investigate possibile security issues

## guardduty

- threat detection, mitigation and response

## inspector

- automated vulnerability scanning

## macie

- pattern matching for discovering & protecting sensitive data

## firewall manager

- centrally configure and manage firewall rules across accounts

## certificate manager

- vault knockoff

## KMS

- [main page](https://aws.amazon.com/kms/?did=ap_card&trk=ap_card)
- Create and control keys used to encrypt or digitally sign your data

## secrets manager

- vault knockoff

## WAF web application firewall

- protection against common web exploits and bots
