# Common AWS Architecture

## links

- [localstack](https://github.com/localstack/localstack)
- [aws serverless land](https://aws.amazon.com/serverless/)
- [serverless multi-tier architectures (PDF)](https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf)
- [aws service search](https://aws.amazon.com/products/)

## terms

- Dead Letter Queue: DLQ;

## localstack

- pretty sure we have a localstack.md somewhere in this repo

## Serverless

- includes a number of fully managed services that are tightly integrated
  - compute
    - lambda
  - orchestration
    - step functions
  - storage
    - s3
  - data stores
    - dynamodb
  - event bus
    - eventbridge
  - interprocess messaging
    - sns
    - sqs
  - api integration
    - api gateway
    - appsync
  - developer tools
    - CDK
    - serverless application model (SAM)
- testing: you generally need a test account that mirrors the production account
  - but you should also invest time in setting up localstack

### core stack

- api gateway: micrservice interfaces
- lambda: compute
- s3: object storage
- dynamodb: operational data
- sns: messaging
- sqs: queueing/decoupling
- step functions: workflow management
- kinesis: streaming
- athena: analytics

### Api Gateway + Lambda + Cloudwatch

- Endpoints are created in API Gateway as resources, whose backend targets are various AWS lambda fns

#### use case

#### anti pattern

## event-driven architectures

- events: an observable (change in state) that contains all the information required to take subsequent action
- event producers: entities that create and publish events, e.g. websites, apps, etc to unknown consumers usually through an event-bus like EventBridge
- event router: ingests, filters, and pushes events to known consumers through some other mechanism like SNS
- event consumers: subscribe to receive specific or monitor all events in a stream and act on those they are interested in

### dynamodb + lambda + kinesis

- kinesis firehose can read dynamodb streams and trigger lambda fns

### dynamodb + SQS + lambda

- DAX can help with read caching, but not write caching
  - enter SQS: add an sqs queue at the application level
    - application writes to an sqs queue which triggers a lambda to write to dynamodb
      - this will smooth out and buffer spikes in write load

### dynamodb + S3

- index s3 items in dynamodb
  - store large json docs in s3 and keep a reference to that item in a dynamodb
    - this keep yours dynamodb items at the recommended size (under 4kb) which reduces costs (s3 < dynamodb)
