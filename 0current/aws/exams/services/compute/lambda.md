# Lambda

- AWS Lambda is an event-driven, serverless (& stateless) compute service that lets you run code without provisioning or managing servers

## links

- [AAAAA best practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
- [cloudwatch logs for lambda](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions-logs.html?icmpid=docs_lambda_help)
- [creating and sharing layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)
- [developer guide intro](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [env vars](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html)
- [execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html)
- [function aliases](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html)
- [function urls](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html?icmpid=docs_lambda_help)
- [function versions](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html)
- [integrating with efs](https://docs.aws.amazon.com/lambda/latest/dg/services-efs.html)
- [invocation: async](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html)
- [invocation: event source mapping](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html)
- [invocation: sync](https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html)
- [logging](https://docs.aws.amazon.com/lambda/latest/dg/python-logging.html)
- [monitoring and troubleshooting](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html?icmpid=docs_lambda_help)
- [monitoring and troubleshooting](https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting.html)
- [object: context](https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-context-object.html)
- [object: event](https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-event-object.html)
- [permissions](https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html)
- [runtimes: custom](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html)
- [runtimes: provided](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)
- [s3 event triggers (tut)](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html)
- [scaling and (provisioned) concurrency](https://docs.aws.amazon.com/lambda/latest/operatorguide/scaling-concurrency.html)
- [snapstart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html)
- [testing lambda functions in the console](https://docs.aws.amazon.com/lambda/latest/dg/testing-functions.html?icmpid=docs_lambda_help)
- [using lambda insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights.html?icmpid=docs_lambda_help)
- [x-ray: integration with lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html?icmpid=docs_lambda_help)

## best practices

- always consider the lambda execution environment
  - logic within `exports.handler` is recreated, but the parent scope is reused
- utilize the Test tab to create fake events, which will reveal errors that are normally hidden
- lambda is prime for event-driven architectures, where known events trigger your fns
- optimize performance by reducing latency and increasing throughput
  - cold starts: reduce cold starts by preventing the following
    - environment is not already initalized
    - the fn hasnt been used for some time
    - more concurrent invocations are required
    - you pass an update fn
  - warm starts: promote warms starts by implementing the following
    - store and reference dependencies locally
    - limit re-initialized of varibles
    - add code to check for and reuse existing connections
    - use tmp space as transient cache
    - check that bg processes have completed
- fn design
  - separate core business logic from the handler event
    - you should be able to run unit tests WITHOUT knowing how the fn is configured
  - create moduler functions with single responsibilities
    - i.e. decompose your fns into discrete lambdas
  - ensure your fns are stateless and keep state in a store
    - dynamodb: state that scales horizontally
    - elasticache: faster than dynamodb especially if the lambda is within a vpc
    - s3: the least expensive option, but with lower throughput and for state that doesnt change rapidly
  - build for low memory & storage space
    - bundling & treeshaking
    - minimize dependencies and deployment size
- code patterns
  - include logging statements: are automatically written to cloudwatch
  - always return the appropriate response to indicate success/failure
  - use env vars for operational params and senstive vars reducing the need for redeployments
    - lambda encrypts the env with the CMK provided to your account for free, or provide your own

### anti patterns

## features

- execute functions in response to upstream activities, e.g. other aws resources / via api endpoints
  - triggers can be created/attached from within the lambda console
- deep integration into other aws services
- capacitity provisining and auto scaling in response to events, memory settings, network and i/o throughput
- code monitoring & logging via cloudwatch
- flexible permissions using IAM to grant/limit access with fine-grained controls as to how your functions can be invoked
- 0-configuration high availability and fault tolerance
- pay to play and what you consume, billed in 1ms increments
  - billing starts AFTER the runtime has been initialized,
  - ^ i.e. once lambda is ready to initalialize your packages and dependencies

## terms

- blueprint: a base lambda fn used to build out new lambda fns; provided for standard lambda triggers
- event source: a service/endpoint whose change of state creates an event that triggers lambda executions
- initialization code: the code outside of the lambda fn handler
- provisioned concurrency: prepares concurrent execution environments before invocations are required
- cold starts: when a new execution env is required and lambda must start the init phase from scratch
- warm starts: when an existing execution env can be reused
- Customer Master Key: CMK: aws provides one free of charge, or you can provide one (which is charged via KMS)

## basics

### execution environment

- the stuff outside of the handler method

### handler method

- the fn code that processes events and potentially returns a response
- event object: properties depend on the event source
  - includes all of the (meta)data required by your fn
- context object: properties depend on the event source
  - enables the fn to interact with the execution environment
  - AWS requestId: track specific invocations
  - runtime: time iun MS remaining before the fn timeout
  - logging: which amazon cloudwatch logs stream your log statements will be delivered to

## considerations

### invocation models (event sources)

- synchronous invocation: lambda runs the fn and waits for and returns an immediate response
  - event sources: api gateway; cognito; cloudformation; alexa; lex; cloudfront
- asynchronous invocation: events are queued and the requestor doesnt wait for a response which is instead sent to some destination
  - event sources: sns, s3, eventbridge
  - destinations: can be based on success/failure/alias/fn version/etc
- polling invocation: designed for streaming/queing based services with no code/server management
  - lambda polls (watches) sources for specific events, then executes the associated fn
  - event sources: kinesis, sqs, dynamodb streams
- event source mapping: the configuration of services as event triggers that are given IAM permissions to access and trigger lambda fns
  - event sources: dynamodb; kinesis; mq; apache kafka MSK; self maanged apache kafka; sqs
- invocation model error behavior: how each invocation model handles errors
  - sync: no retries
  - async: built in retries twice
  - polling: depends on event soruce

### creating lambda functions

- Function Type:
  - author from scratch:
  - use a blueprint
  - container image
- runtime: e.g. nodejs
- architecture: x86/64 vs arm64
- permissions
  - what services is this fn allowed to interact with
- execution role
  - new role
  - existing role
  - new role from aws policy templates

### configuring lambda functions

- memory: 128mb -> 10240mb
- ephemeral storage: 512mb -> 10gb
- snapstart: reduces startup time by caching the fn definition
- triggers
  - which events / event5 sources can initiate exeuction of this fn
- layers
  - how will you bundle your dependencies
- destinations
- code: this is your handler function
- timeout:
- function urls: dedicated http endpoint for the function, invocable via browser/curl/etc
  - is always assigned to $LATEST version and cant be reassigned to a different version
  - but you can assign it to an ALIAS (just not a version)
- environment variables
- tags
- vpc
- concurrency
- asynchronous
- code signing
- db proxies
- file systems
- state machines

### monitoring lambda functions

- metrics:
- logs
- traces
- integrations
  - cloudwatch logs
  - x ray traces
  - lambda insights
  - codeguru profiles

### managing the execution environment

- execution environment: a secure and isolated environment that
  - manages the resources required to run a lambda fn
    - this is entirely based on the configuration settings (e.g. memory, cpu, max time, etc)
  - provides lifecycle support for the fns runtime and exeternal extensions
    - processes that run within the execution environment
    - perms, resources, creds and env vars are shared between the fn and extensions
- lifecycle
  - init phase: create/unfreeze the execution env with the configured resources, downloads the fn code and all layers, runs initialize code (outside the handler); happens during the first invocation/before fn invocation if provisioned concurrency is enabled
    - extension init: start all extensions
    - runtime init: bootstraps teh runtime
    - function init: runs the fns static code
  - invoke phase
    - invoke the fn handler
    - prepare for future invocations
  - shutdown phase: if no new invocation events are received, shutdown initiates and once complete the entire environment is removed
    - runtime shtudown
    - extension shutdown

### security and permissions

- permission scopes: bounded to how you integrate lambda with IAM
  - permission to invoke lambda fns:
    - IAM resource-based policies: controls who can invoke the lambda
  - permission for lambda fns to invoke actions
    - IAM execution role: lambda assumes this role during execution, controls accesss to and behavior with other serivces
      - the lambda must have a trust policy with `AssumeRole`
      - the creator must have `iam:PassRole`
      - must be created/selected when CREATING the fn
- VPC resources
  - requires additional VPC configuration info, like the VPC subnet ID and security group IDs
  - execution role: for modifying VPC resources
  - private connections: requires an interface VPC endpoint powered by AWS PRivateLink
    - enables private access to Lambda APIs without an internet gateway, NAT device, VPN connection or Direct Connect connection
    - instances in the VPC dont require a public ip addr to communicate with lambda apis
    - traffic between the VPC and lambda does not leave the aws network
