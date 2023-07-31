# Common AWS Architecture

## links

- [10 things serverless architects should know](https://aws.amazon.com/blogs/architecture/ten-things-serverless-architects-should-know/)
- [blog: api gateway category](https://aws.amazon.com/blogs/compute/category/application-services/amazon-api-gateway-application-services/)
- [blog: apis at scale](https://aws.amazon.com/blogs/architecture/how-to-architect-apis-for-scale-and-security/)
- [builders library](https://aws.amazon.com/builders-library/?cards-body.sort-by=item.additionalFields.sortDate&cards-body.sort-order=desc&awsf.filter-content-category=*all&awsf.filter-content-type=*all&awsf.filter-content-level=*all)
- [CICD on AWS](https://docs.aws.amazon.com/whitepapers/latest/cicd_for_5g_networks_on_aws/cicd-on-aws.html)
- [cloud computing concepts](https://aws.amazon.com/what-is)
- [distributed data management](https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/distributed-data-management.html)
- [elasticache for redis vs memorydb for redis](https://cloudwellserved.com/amazon-elasticache-for-redis-vs-amazon-memorydb-for-redis/)
- [high availability whitepaper](https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/high-availability-and-scalability-on-aws.html)
- [implementing microservices on AWS](https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/microservices-on-aws.pdf)
- [localstack](https://github.com/localstack/localstack)
- [security, identity & compliance best practices](https://aws.amazon.com/architecture/security-identity-compliance/?cards-all.sort-by=item.additionalFields.sortDate&cards-all.sort-order=desc&awsf.content-type=*all&awsf.methodology=*all)
- [serverless express (check examples dir)](https://github.com/vendia/serverless-express)
- [serverless multi-tier architectures (PDF)](https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf)
- [serverless](https://aws.amazon.com/serverless/)
- [service overview (PDF)](https://docs.aws.amazon.com/pdfs/whitepapers/latest/aws-overview/aws-overview.pdf)
- [service search](https://aws.amazon.com/products/)
- [well architected framework: serverless application lens](https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/wellarchitected-serverless-applications-lens.pdf?810a2056-c993-4832-af32-11286cad694c)
- [well architected framework](https://aws.amazon.com/architecture/well-architected/)
- [whitepapers](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html)

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
- [securing enterprise grade serverless apps video](https://www.youtube.com/watch?v=tYhUWbDZ4-8)

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
- serverless architecture: thinking in terms of patterns and applications, rather than in terms of individual functions or resources
  - migration strategies
  - types of compute and data stores you can select
  - application architecture patterns you can use
- application design: choose services and patterns that suit your workloads based on characteristics such as
  - expected throughput
  - service limits
  - cost
  - SLO, SLAs
- cost comparisons with other architecture models
  - infrastructure cost to run workloads: e.g. server provisioning vs invocation costs
  - upfront development cost: dev effort to plan, architect and provision resources
  - maintainence cost:
- value comparisons with other architecture models
  - increased speed and agility: of course this comes after the initial learning curve
  - cost allocation: much easier to allocate costs to customers and events vs to servers
    - i.e. the costs occur when events occur

### core stack

- APIs: API Gateway, appsync
- compute: lambda, ecs, eks,
- dbs: dynamodb, neptune, timestream, qldb
- messaging: sns, sqs, kinesis, eventbridge
- events: cloudwatch
- analytics: cloudwatch, cloudtrail, xray
- networking: cloudfront, route53
- dev tools: SAM cli,
- storage: s3, efs
- orchestration: step functions
- athena: analytics

### migration strategies

- two broad domains: how do you
  - implement compute infrastructure:
    - capacity processes and cost models: reflects the three general ways of operating infrastructure
      - server based
      - containerized
      - APIs and microservices
  - approach application dev and deployment: operational processes and development models
    - simple move to the cloud: but lacks flexible build and deploy processes
    - api driven microservice-based applications with the most flexibility but requires the most rewrite of legacy tech stac
- migration patterns
  - leap frog: from legacy on-premise monoliths straight to serverless cloud architecture
  - organic: migration with a lift-and-shift approach
    - e.g. servers to EC2s, perhaps some ECS/lambdas thrown in, but limited rewrites
    - the goal is to get things into the cloud, and experiment with serverless & microservices
  - strangler: incrementally and systematically decomposes monolithic applications by creating APIs and building event-driven components that gradually replace components of the legacy application.
    - Distinct API endpoints point to old and to new components and safe deployment options (such as canary deployments) let you point back to the legacy version with very little risk.
- considerations: its all about documentatoin, planning and strategy
  - what does each application do and how are the components organized
  - how can you break up data based on CQRS? you have to strangle the database along with the microservices
    - what belongs to the control plane?
    - what belongs to the data plane?
    - once the data is distributed, which set of db engines match the throughput, consistency, access patterns, etc reqirements
  - how does the application scale, and which components drive the capacity you need?
    - should you migrate leaf components first? or those with the most demanding capacity requirements
  - do you have scheduled based tasks?
  - do you have workers listening to a queue?
  - where can you refactor/enhance functionality without impacting the current implementing
    - perfect for load balancers and API gateway

### application architecture patterns

- think through how to observe and react to events in your distributed services
  - each component should scale independently
  - implement circuit breakers to restrict the blast radius of failed services
- become familiar with
  - the multitude of cloudwatch events
  - optimizing lambda and integration with SNS, SQS and eventbridge
  - consuming streams (kinesis/dynamodb) effectively
  - orchestration (happy path + rollbacks) with step functions

### scaling

- strategize for thes current scale requirements in addition to the anticipated growth
  - know the capabilities and service limits of the services that you’re integrating
    - especially the service limits, e.g. api gateay 10mb vs SQS 256kb
  - select patterns that optimize your application for the scale you need to support
    - timeouts, retry behavior, throughput, payload size

#### scale in demand

- both compute + data
- organic
- merger and acquitision: increased dramatically within a short period

#### scale in complexity

- management
- performance
- security

#### scaling reliably with testss

- increased need for more effective load tests since you can scale/tweak the perf of individual components
  - you need to have a solid understanding of peak load capacity
- best practices
  - load test with authentic data with appropriate volumes that exercise each integration point with production access patterns
  - spin a production like environment, never load test locally
  - identify the bottlenecks/failure points, modify perf characteristcs and iterate
    - this may move the bottleneck to other integration points
      - you need to know where the bottleneck is most appropriate, based on your workload and business requirements
  - choose a percentile that reflects the business need when monitoring
    - build in error handling logic to handle failures that are outliers
  - dont mock services you cant control
    - when you're load testing, you need the real beef

#### managing scale through monitoring

- components should output appropriate signals
- monitor by percentile, and not just avg/raw numbers
- log efficiently and effectively

### deploying

- strategy for deploying new application versions and infrastructure are equally important
- QA, qa, Qa, qA ;)~
- standardization and optimation
- auditing and reacting to changes
- halt/rollback mechanisms
- managing configuration changes
  - similar in terraform how you can consume deployed artifacts (e.g. ARN, ips, etc)
    - bake it into the deployment package: refrain from this as much as possible
    - 12factor it: the easiest, but should atleast be encrypted; however its difficult to share/update across nodes
    - load at runtime from some secrets manager: the most robust (and complex) option

#### strategies

- all at once: 100% of traffic goes to the new version
- traffic shifting strategies
  - canary deployment: e.g. 20% goes to new versio for 20 mins, and then once validated 100% goes to new version
  - linear deployment: e.g. 10% of traffic goes to new version every 20 minutes until 100% is shifted

### testing

- testing: you generally need a test account that mirrors the production account
  - but you should also invest time in setting up localstack
- local tests within the dev environment
  - unit tests focusing on business logic
  - cloud native code is generally more difficult to test locally (see localstack)
- integration tests: targeting remote test accounts with prod parity
- automated integration and accepted tests against other envornments providing gates for production deployments

### ci/cd

- tools: cloudformation, sam, codecommit, codebuild, codedeploy, codepipeline

### compute

- a combination of lambda, ECS/fargate, with step functions for orchestration

### data

- match the data store to the business need and the type of transactions it needs to support
- refrain from having a single, shared general purpose db
- model your data stores into transactional vs query needs using concepts from CQRS to design for the type of work the db needs to do
- using multiple dbs requires
  - managing distributed transactions/partial execution failures with business logic/step functinos
  - source of truth is scatterred across data stores and must be shared with other domains
  - embrace eventual consistency
  - choose the right ETL pattern
    - real time analysis: kinesis data streams/dynamodb streams
    - historical trends: batch, AWS glue + s3 > athena/redshift spectrum
