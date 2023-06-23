# Lambda

- AWS Lambda is an event-driven, serverless (& stateless) compute service that lets you run code without provisioning or managing servers

## my thoughts

- TODO(noah): ensure you add this to every section

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
- [invocation scaling](https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html)
- [operator guide](https://docs.aws.amazon.com/lambda/latest/operatorguide/intro.html)
- [developer guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [security overview (PDF)](https://docs.aws.amazon.com/whitepapers/latest/security-overview-aws-lambda/security-overview-aws-lambda.pdf)

### tools

- [lambda power tuning tool](https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:451282441545:applications~aws-lambda-power-tuning)

## best practices

- always consider the lambda execution environment and context
  - `exports.handler`fn is recreated, but the context parent scope is reused on warm starts
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
  - integrate with AppConfig, Secrets & Systems Manager for configuration data
    - ideal for creds, passwords, licence keys
    - use parameter store to retrieve secrets manager secrets securely
    - use AppConfig to deploy to parameter/document store, s3, etc and source it in your fn
  - Avoid recursive invocations at all costs: could lead to uncontrolled invocations
    - avoid this by also setting a concurrent exeuction limit
  - reuse the execution context by following the guidelines under `- warm starts:`
- aws lambda power tuning: use this tool to find the best lambda configuration
  - tool runs in your AWS account, relies on step functions,
  - supports 3 optimization strategies: cost, speed and balanced
- test test test!
  - simulate peak levels of invocations
  - test integrations: tests should utilize all resources used in production
  - test error handling: push past peak load expectations to verify error handling
- setup dead-letter queues in the lambda console
  - capture application errors that MUST receive a response, e.g. processing a shopping cart
  - see the monitoring section below
- setup concurrency limits (reservations) on appropraite functions
  - manage costs
  - matching lambda speed with the performance of downstream resouces
  - regulating how long it takes to process events

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
  - billing starts AFTER the runtime (not the function) has been initialized,
  - ^ i.e. once lambda is ready to initalialize your packages and dependencies

### pricing

## terms

- blueprint: a base lambda fn used to build out new lambda fns; provided for standard lambda triggers
- event source: a service/endpoint whose change of state creates an event that triggers lambda executions
- initialization code: the code outside of the lambda fn handler
- provisioned concurrency: prepares concurrent execution environments before invocations are required
- cold starts: when a new execution env is required and lambda must start the init phase from scratch
- warm starts: when an existing execution env can be reused
- Customer Master Key: CMK: aws provides one free of charge, or you can provide one (which is charged at the KMS rate)

## basics

### execution context

- the stuff outside of the handler fn

### handler method

- the fn code that processes events and potentially returns a response
- event object: properties depend on the event source
  - includes all of the (meta)data required by your fn
- context object: properties depend on the event source
  - enables the fn to interact with the execution context of the environment
  - AWS requestId: track specific invocations
  - runtime: time iun MS remaining before the fn timeout
  - logging: which amazon cloudwatch logs stream your log statements will be delivered to

## considerations

### invocation models

- synchronous invocation: lambda runs the fn and waits for and returns an immediate response
  - event sources: api gateway; cognito; cloudformation; alexa; lex; cloudfront
- asynchronous invocation: events are queued and the requestor doesnt wait for a response which is instead sent to some destination
  - event sources: sns, s3, eventbridge
  - destinations: can be based on success/failure/alias/fn version/etc
  - lambda will try up to 3 times to invocation the fn before throwing an error
- polling invocation: designed for streaming/queing based services with no code/server management
  - lambda polls (watches) sources for specific events, then executes the associated fn
  - event sources: kinesis, sqs, dynamodb streams
- invocation model error behavior: how each invocation model handles errors
  - sync: no retries
  - async: built in retries thrice or twice
  - polling: depends on event soruce

#### event source mapping

- event sources invoke a lambda fn using one of the above invocation models
- event source mapping: the configuration of services as event triggers that are given IAM permissions to access and trigger lambda fns
  - event sources: dynamodb; kinesis; mq; apache kafka MSK; self maanged apache kafka; sqs

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
- events
  - understanding events that trigger your lambda are critical
  - usually contain everything required for your fn, e.g. s3 bucket names and dynamodb tables for persisting information
- dependencies
  - e.g. the `aws-sdk` can be imported into your fn

### configuring lambda functions

- most important: build and test these main configuration settings in real world scenarios and against peak volumes
  - memory: 128mb - 10 gb
    - lambda allocations CPU and other resources lineraly in proprtion to the amoutn of memory configured
    - any modification of memory triggers and equivalent modification in CPU resources
  - timeout: up to 900 seconds (15 minutes)
    - how long a fn can run before lambda terminates it
    - load test your fn to determine the max/optimum timeout value
    - always fail fast and never wait for the full timeout value
  - concurrency: affects fn performance and ability to scale on demand
    - the number of inflight invocations a fn can run at any given momemt
    - concurrency limit: the max concurrent requests
    - reservation: total reserved instances available top run a fn on demand
    - cuncurrency types
      - unreserved: total instances not allocated to a specific set of fns
        - at least 100
        - can request an increase
      - reserved: guarantees a set of instances for a specific fn
        - not charged, subtracts from the unreserved total
      - provisioned: initializes a specific set of runtime instances for a fn that can respond immediately to requests:
        - costs! subtracts from the unreserved total
      - burst concurrency: quote is not per function, but is applied to all fns in a region
        - 3000: us west (oregon), us east (virginia), euroope (ireland)
        - 1000: asia pacific (tokyo), europe (frankfurt), us east (ohio)
        - 500: all other regions
    - concurrency strategies
      - limit concurrency: limit a fns concurrency to achieve:
        - controlling costs
        - regulate how long it takes to process a batch of events
        - match it with a downstream resource that cannot scale as quickly as lambda
      - reserve concurrency: set a reservation for a fn to achieve:
        - control performance during peak loads
        - address invocation errors during bursts
  - billing: charges are proportional to the memory, duration (GB seconds) and number of invocations
    - you can offset costs from memory by reducing the duration
    - duration tracks and is rounded up to the nearest 1 ms
    - invocations tracks and includes test invocations
    - total cost is the duration of allocated memory GB per second
      - not memory used, but ALLOCATED! remember that
    - free tier: 1 million requests per month and 400,000 gb-seconds of compute time per month
- versions and aliases
  - once a lambda is deployed, it is live immediately, be sure you're versioning and aliasing correctly
  - versions: management function deployments e.g a new version for beta testing
    - a new version is created each time a fn is publishes
      - publishing makes a snapshot copy of the $LATEST version
        - the latest: `arn:Aws:Llambda:aws-region:acct-id:function:some_name:$LATEST`
        - a specific version: `arn:Aws:Llambda:aws-region:acct-id:function:some_name:123`
  - aliases: a pointer to a specific function version
    - each alias has a specific arn
      - a test alias`arn:Aws:Llambda:aws-region:acct-id:function:some_name:test`
    - you can update an alias to point to a specific version number
    - alias routing: you can point an alias to a a maximum of 2 fn versions, e.g. 10% to v1, and 90% to v2
      - both version must:
        - have the same runtime role
        - have the same dead-letter queue configuration, or no dead-letter queue configuration
        - must be published, and the alias cannot be $LATEST
- other settings
  - ephemeral storage: 512mb -> 10gb
  - snapstart: reduces startup time by caching the fn definition
  - triggers
    - which events / event5 sources can initiate exeuction of this fn
  - layers
    - how will you bundle your dependencies
  - destinations
  - code: this is your handler functio
  - function urls: dedicated http endpoint for the function, invocable via browser/curl/etc
    - is always assigned to $LATEST version and cant be reassigned to a different version
    - but you can assign it to an ALIAS (just not a version)
  - environment variables
  - tags
  - vpc
  - code signing
  - db proxies
  - file systems
  - state machines

### monitoring lambda functions

- ensuring you can monitor, trace, debug and troubleshoot lambda fns and applications
- integrations
  - cloudwatch metrics
    - invocations: total function executions that were not throttled/failed to start, success & errors
      - errors: invocations that result in a fn error whether by your fn handler or the lambda runtime (timeouts, configuration issues, etc)
      - throttled: failed invocations becaue of concurrency limits; not counted in invocation totals; lambda rejected executed requests because no concurrency was available
    - duration: total time spent processing events; to calculate billing round up to the nearest millisecond
      - iteratorAge: age of the last record in the event releative to event source mappings that read from streams;
        - the agent is the total duration from when the stream receives the record until the event source mapping sends the event to the fn
    - DeadLetterErrors: for async invocation; number of times lambda attempts to send an event to a dead-letter-queue but fails
    - ConcurrentExecutions: number of function instances that are processing events
      - UnreservedConcurrentExecutions: total events being processed by fns that dont have reservede concurrency
      - ProvisionedConcurrentExecutions: number of fn isntances that are processing events on provisioned concurrency
  - cloudwatch logs
  - x ray traces: lambda fns send trace data to xray for processing
    - see [the markdown file](../devtools/xray.md)
  - lambda insights: cloudwatch extension tailored for system-level monitoring of lambda fns
    - see [the markdown file](../mgmtGovernance/cloudwatch-lambda-insights.md)
  - cloudtrail: tracking deployments
    - see [the markdown file](../mgmtGovernance/cloudtrail.md)
  - codeguru profiles

#### dead-letter queues

- configured in the lambda console
- you move important events that throw errors into the dead letter queue
- you manually have to fix these, e.g. ensuring all shopping cart events are processed
- use cases
  - analyze failures for follow-up or code corrections
  - available for async and non-stream polling events
  - integrate with SNS topic or SQS queue

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

### build and deploy fns

- lambda console editor:
  - simple one-offs that dont require local development or custom packages
  - each save auto creates and deployes a deployment package
    - i.e. always start in TEST account and disable any triggers until ready for prod
- IDE toolkit
- CLI
- SDKs
- deployment packages
  - container images: generally pushed to elastic container registry
  - zip files: generally pushed to an s3 bucket
