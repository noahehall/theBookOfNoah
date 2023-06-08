# Common Architecture

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
