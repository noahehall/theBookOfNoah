# Common AWS Architecture

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
- [high availability whitepaper](https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/high-availability-and-scalability-on-aws.html)
- [elasticache for redis vs memorydb for redis](https://cloudwellserved.com/amazon-elasticache-for-redis-vs-amazon-memorydb-for-redis/)

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
- amazon has a database engine for every occasion, choose wisely

## terms

- Dead Letter Queue: DLQ;

## localstack

- pretty sure we have a localstack.md somewhere in this repo

## service & product categories

### compute

- VMs: ec2s
- containers: ECS (ec2 launch type) + ECR
- serverless: lambda or ECS (fargate launchtype) + ECR

### security

- flow of traffic: VPC, NACLs, route tables, security groups
- authnz: IAM policies, resource policies

### storage

- objects: s3
- compute-persistence: ebs
- compute-ephemeral: ec2 instance store
- file system: EFS, FSx
- cache: file cache
- data migration: datasync, snow family
- hybrid cloud storage and edge computing: storage gateway, snow family
- file transfer: transfoer family
- disaster recovery and backup: Elastic Disaster Recover, Backup

### databases

- relational: aurora, rds, redshift
- key-value: dynamodb
- in-memory: elasticache, memorydb for redis
- document: documentdb with mongodb compatibility, dynamodb
- wide column: keyspaces
- graph: neptune
- time series: timestream
- ledger: ledger database services (QLBD)

## Serverless

- abstracting away the compute infrastructure to the point you have no responsibilties for servers on which your code runs
  - represents a specific set of AWS services that are tightly integrated

### core stack

- APIs: API Gateway
- compute: lambda, ecs, ecs, eks
- dbs: dynamodb, neptune, timestream
- messaging: sns, sqs, kinesis
- analytics: cloudwatch, cloudtrail, xray
- networking: cloudfront, rout53
- dev tools: SAM cli,
- storage: s3
- orchetration: step functions

#### other services

- appsync
- athena: analytics
- step functions: orchestration/workflow management
- eventbridge: event bus
- qldb: ledger

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
