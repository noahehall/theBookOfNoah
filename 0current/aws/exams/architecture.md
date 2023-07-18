# Common AWS Architecture

- TODO: bunches of things
  - sections are very service specific: you should flip the sections to be generic in form and explicit in detail

## links

- [localstack](https://github.com/localstack/localstack)
- [aws serverless](https://aws.amazon.com/serverless/)
- [serverless multi-tier architectures (PDF)](https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf)
- [aws service search](https://aws.amazon.com/products/)
- [well architected framework: serverless application lens](https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/wellarchitected-serverless-applications-lens.pdf?810a2056-c993-4832-af32-11286cad694c)
- [10 things serverless architects should know](https://aws.amazon.com/blogs/architecture/ten-things-serverless-architects-should-know/)
- [aws blog: api gateway category](https://aws.amazon.com/blogs/compute/category/application-services/amazon-api-gateway-application-services/)
- [aws serverless express (check examples dir)](https://github.com/vendia/serverless-express)
- [aws builders library](https://aws.amazon.com/builders-library/?cards-body.sort-by=item.additionalFields.sortDate&cards-body.sort-order=desc&awsf.filter-content-category=*all&awsf.filter-content-type=*all&awsf.filter-content-level=*all)
- [well architected framework](https://aws.amazon.com/architecture/well-architected/)
- [aws service overview (PDF)](https://docs.aws.amazon.com/pdfs/whitepapers/latest/aws-overview/aws-overview.pdf)
- [aws whitepapers](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html)
- [cloud computing concepts](https://aws.amazon.com/what-is)

### service categories

- [databases](https://aws.amazon.com/products/databases/)
- [data lakes and analytics](https://aws.amazon.com/big-data/datalakes-and-analytics/)
- [application integration](https://aws.amazon.com/products/application-integration/)
- [compute](https://aws.amazon.com/products/compute/)
- [migration & transfer](https://aws.amazon.com/products/migration-and-transfer/)
- [security, identity and compliance](https://aws.amazon.com/products/security/)
- [storage](https://aws.amazon.com/products/storage/)
- [networking and content delivery](https://aws.amazon.com/products/networking/)
- [management and governance](https://aws.amazon.com/products/management-and-governance/)
- [frontend and mobile](https://aws.amazon.com/products/frontend-web-mobile/)

### best practices

- code/repo organization
  - instead of focusing on organizing functions, focus on organizing services
  - perhaps a repo per service, with the service broken down into multiple fns and their resource dependencies
- prod vs developer cloud environments
  - ci/cd should be in place whichever route you take
  - prod should always be isolated
  - most flexible: separate accounts for each developer
    - requires technical maturity to handle the security and cost implications
  - least flexible: single shared account for all develoeprs
    - as long as everyone is using immutable and isolated stacks, you should be fine
- serverless
  - 12 factor app (say this twice)
  - dont assume local storage exists, but code for ephemeral storage & stateless services
  - instantiate expensive objects outside event handler
  - ensure you can test locally
  - end-to-end integration testing as early as possible in the dev cycle
  - profile your app for bottle necks
- serverless architecture
  - dont `architect` for serverless, but bring your best practices with you
    - if you abstract away your business logic to a single entrypoint
      - you should be able to repurpose it for deployment to a lambda OR a container
  - refrain from putting app/biz logic in the api GW layer
  - dont implement workflows in lambdas, use stepfunctions
  - dont implement long running processes in lambdas, use containers
- integration
  - understand your component timeouts, e.g. api gateway and lambda have different hard limits

## terms

- Dead Letter Queue: DLQ;

## localstack

- pretty sure we have a localstack.md somewhere in this repo

## compute

- VMs: ec2s
- containers: ECS (ec2 launch type) + ECR
- serverless: lambda or ECS (fargate launchtype) + ECR

### dynamodb local

- [get the docker image](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)

## event-driven architectures

- events: an observable (change in state) that contains all the information required to take subsequent action
- event producers: entities that create and publish events, e.g. websites, apps, etc to unknown consumers usually through an event-bus like EventBridge
- event router: ingests, filters, and pushes events to known consumers through some other mechanism like SNS
- event consumers: subscribe to receive specific or monitor all events in a stream and act on those they are interested in

## Serverless

- includes a number of fully managed services that are tightly integrated

### core stack

- api gateway: micrservice APIs
- compute: lambda, ecs, ecs, eks
- storage: dynamodb, documentdb
- sns: messaging/decoupling
- sqs: queueing/decoupling
- kinesis: streaming
- cloudwatch: monitoring & logs
- cloudfront: cache for static resources and api gateway
- sam cli: test, build and deploy
- sqs & sns
- s3 (objects), ebs (compute-persistence), ec2 instance store (compute-ephemeral), efs (file system)

#### other tools

- appsync
- athena: analytics
- step functions: orchestration/workflow management
- eventbridge: event bus

### testing

- testing: you generally need a test account that mirrors the production account
  - but you should also invest time in setting up localstack
- local tests within the dev environment
  - unit tests focusing on business logic
  - cloud native code is generally more difficult to test locally (see localstack)
- integration tests: targeting remote test accounts with prod parity
- automated integration and accepted tests against other envornments providing gates for production deployments

### ci/cd

- tools
  - cloudformation
  - sam
  - codecommit
  - codebuild
  - codedeploy
  - codepipeline
- general process
  - build the code
  - package and deploy to s3
  - iam execution roles and resource policies
  - creating lambda functions and integrating with backend resources
  - update lambda functions and backend integrations

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
