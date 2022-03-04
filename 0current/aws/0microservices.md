# TLDR

- lambda, fargate, Simple Queue Service SQS, Simple Notification Service SNS, cloudwatch, Amazon Connect (dunno wherelse to put this), Amazon Kinesis, EKS
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

### serverless

- fully managed approached to execute business logic in the cloud; storage, compute, and networking without provisioning/managing servers/dbs
- reduces operational complexity: processes and tasks that require operational skills no longer required; e.g. provisioning, backups, version management, patching, deploying, etc
- reduces cost
- standardize common tasks: e.g. security, error handling, logging
- serverless components (on aws)
  - compute
  - storage: always S3, but choosing the appropriate S3 storage class is critical
  - data stores
    - RDS: relational data storage
    - key-value
    - in-memory
    - document
    - graph
    - time series
    - ledger
  - API proxies
  - application integration and orchestration
  - analytics
  - developer tools

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

- to manage container infrastructure

## SQS simple queue service

- a polling based queueing service
  - i.e. rabbitMQ

## SNS simple notification service

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

## Kinesis

- manage data in realtime

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
