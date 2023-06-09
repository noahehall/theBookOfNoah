# Common Architecture

## terms

- Dead Letter Queue: DLQ;

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

### Api Gateway + AWS Lambda + Cloudwatch

- Endpoints are created in API Gateway as resources, whose backend targets are various AWS lambda fns

#### use case

#### anti pattern

## event-driven architectures

- events: an observable (change in state) that contains all the information required to take subsequent action
- event producers: entities that create and publish events, e.g. websites, apps, etc to unknown consumers usually through an event-bus like EventBridge
- event router: ingests, filters, and pushes events to known consumers through some other mechanism like SNS
- event consumers: subscribe to receive specific or monitor all events in a stream and act on those they are interested in
