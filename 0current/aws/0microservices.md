# TLDR

- lambda, fargate, Simple Queue Service SQS, Simple Notification Service SNS, cloudwatch, Amazon Connect, EKS, Step Functions

- lumping serverless into this file

## basics

### best practices / gotchas

- always
  - DNS (route 53) level routing to resources behind a load balancer is critical for microservices
  - for compute resources: there should be an additional load balancer associated with an autoscaling group for high availability and automatic registration in health checks for scale/in events
  - increase the segmentation of business logic via distinct resources that handle specific aspects of your business
    - i.e. dont have one monolithic code base, but use a service oriented architecture where each service can scale out & in and adopt an event driven model utilizing an API gateway that routes requests to each service
  - SQS, SNS, and lambda are critical for event driven architectures
- sometimes

  - push an event from SNS into an SQS queue

- lambda fn vs Fargate
  - lambda is best when logic needs to be run in response to an event, or periodically and can the processing can be complete in ~15 minutes
  - fargate is basest when compute time exceeds 15 minutes of execution time, or memory exceeds 3gb
    - i.e. use fargate whenever you exceed lambda limits

### serverless

- fully managed approached to execute business logic in the cloud; storage, compute, and networking without provisioning/managing servers/dbs
- reduces operational complexity: processes and tasks that require operational skills no longer required; e.g. provisioning, backups, version management, patching, deploying, etc
- reduces cost
- standardize common tasks: e.g. security, error handling, logging
- serverless components (on aws)
  - compute: business logic without the server; code runs on demand and is trigger by events/periodically; generally lambda / farget (for containers)
  - storage: always S3, but choosing the appropriate S3 storage class is critical
  - data stores: relational, key-value, in-memory, document, graph, time series, ledger (blockchain)
  - API proxies: api gateway
  - application integration and orchestration
    - SQS: for polling based messaging
    - SNS: for pub-sub based messaging
    - Step Functions: for coordination among lambda based services by defining state machine styled functions. i.e. workflow automation
  - analytics: kinesis for streaming data
  - developer tools; IDEs, CI, deployment tools, SDKs, and monitoring & logging tools

## lamda

- basically on-demand compute, almost anything you would need an EC2 instance for, you can implement as an AWS Lambda fn
- event drivent, stateless (serverless) business logic
- compute service to run code without managing servers
- use cases
  - target of an event bridge rule
  - cloud watch alarm automation, especially in high availability & failover contexts where you need to spin up new resources and reassign EIPs

### lambda considerations

- fn type
  - author from scratch
  - use a blueprint
  - container image
  - select from serverless app repository
- name
- runtime (e.g. nodejs/python)
- permissions
  - execution role
    - select a predefined role that provides permissions necessary for the fns business logic
- memory (e.g. 256mb)
- timeout (e.g. 10seconds)

## fargate

- fully managed infrastructure for container based applications

## SQS simple queue service

- a polling based queueing service
- fully managed queuing service; both generanl queues and FIFO queues to pass info between services
- core for decoupling of services

## SNS simple notification service

- a pub-sub based service
- push based messaging system
- manages the delivery & sending of msgs to subscribin endpoints & clients
  - app to app|person
- use cases:
  - super useful in cloudwatch alarms, that send msgs to SNS topics which subsequently trigger lambda functions for automating responses (e.g. reosurce failure) to system events
- clients
  - publishers: send async msgs to a topic
    - cloudwatch alarms
  - subscribers: pull msgs from a topic
    - lambda
    - sqs queues
    - http/s endpoints
    - event fork pipelines
    - kinesis data firehose delivery streams
    - mobile apps
    - phone numbers
    - email addrs
- topics: logical access point & communication channel

  - publishers: create topics/get push permissions

- service quotas
  - quotas: resources, actions and items have defined limits
    - breaching a limit will always increase costs or cause components to fail
  - monitor and manage quotas for any AWS service

### sns considerations

- type
  - standard: when msg order & duplication isnt important
  - FIFO: msg order & duplication is important (must use SQS)
- access policy: who can publish & subscribe
  - topic owner
  - everyone
  - specific AWS accounts
  - requests from specific endpoints
- encryption: server side encryption
- delivery retry policy: retry failed deliveries for http/s
- delivery status logging: only for specific protols (lambda, sqs, etc)
- IAM roles

## Connect

- salesforce knockoff + voip

## SageMaker

- ML in the cloud

## Lightsale

- heroku knockoff

## cloudwatch

- check the old docs for this
- monitoring & observability, operational problems

## eks

- elastic kubernetes service

## ECS

- amazon container service

## Step Functions

- workflow automation, e.g. state machines & orchestration between lambda fns
