## common architectures

### elastic load balancing

- use a network load balancer to enable access to resources in a private vpc

### api gateway

- you can generally use api gateway as a frontdoor to any aws service action

### Api Gateway + Lambda + Cloudwatch

- Endpoints are created in API Gateway as resources, whose backend targets are various AWS lambda fns
- use api gateway stages, stage variables and lambda fns so you dont have to hard-code any components
  - lambda: enable versioning and use aliases to reference
  - gateway: use stages for environments
  - point api gateway stage variables at lambda aliases

### Api gateway + cloudfront

- front your api gateway cloudfront, then add an API gateway cache behind that for frequently accessed content

### Api Gateway + SQS

- since api gateway is synchronous, you use an SQS queue as a backend for an endpoint to create async connections with downstream services
- e.g. api gateway > SQS > lambda: provides a sync response to API gateway, and an asyn connection with downstream services

### dynamodb + lambda

- its all about dynamodb streams triggering lambdas for a reliable `at leat once` event delivery
  - any write db write can become a lambda trigger, which can then filter and take actions based on the underlying change

### dynamodb + analytic services

- you can have one big dynamodb instance used by all microservices
- then employ other aws analytics services (kinesis, athena) to query db instance for data specific to a microservice

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

### dynamodb + SNS

- all about queue-based load leveling
- dynamodb costs a FK ton based on provisioned throughput
- you can save on that dramatically by pushing writes to a queue and batch writing from SNS into dynamodb

### ECS + SQS/SNS

- useful for decoupling tasks and services

### ECS + elastic load balancing

- can use classic, application or network load balancers

### ECS + route53

- dns service discovery

### kinesis + dynamodb + lambda

- integrate with dynamodb streams and lambda triggers
  - when change data occurs, use kinesis firehose + lambda to write the data to s3
