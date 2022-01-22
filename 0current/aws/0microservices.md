# TLDR

- lambda, fargate, Simple Queue Service SQS, Simple Notification Service SNS

## basics

### best practices / gotchas

- always
- sometimes
  - push an event from SNS into an SQS queue

## lamda

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
