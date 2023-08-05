# Lambda

- AWS Lambda is an event-driven, serverless (& stateless) compute service that lets you run code in response to events without provisioning or managing servers
- use cases
  - tasks that run < 15 minutes
  - spike/unpredictable workloads
  - real-time data processing

## my thoughts

- think short quick i/o; else prefer ecs or straight up ec2
- is the primary mechanism for integrating AWS services usually paired with:
  - cloudwatch for events/triggers
  - SNS/SQS for messaging
  - step functions for orchestration

## links

- [faqs](https://aws.amazon.com/lambda/faqs/?da=sec&sec=prep)
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
- [invocation: async + dead letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html)
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
- [sqs: integration](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html)
- [sqs: tutorial](https://aws.amazon.com/serverless/use-sqs-as-an-event-source-for-lambda-tutorial/)
- [retry on errors](https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html)
- [managing lambda reserved concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html)
- [scaling kinesis & dynamodb streams](https://aws.amazon.com/blogs/compute/new-aws-lambda-scaling-controls-for-kinesis-and-dynamodb-event-sources/)
- [lambda error handling for kinesis and dynamodb](https://aws.amazon.com/about-aws/whats-new/2019/11/aws-lambda-supports-failure-handling-features-for-kinesis-and-dynamodb-event-sources/)
- [parallelizing kinesis & dynamodb](https://aws.amazon.com/about-aws/whats-new/2019/11/aws-lambda-supports-parallelization-factor-for-kinesis-and-dynamodb-event-sources/)
- [env vars](https://docs.aws.amazon.com/lambda/latest/dg/env_variables.html)
- [versioning intro](https://docs.aws.amazon.com/lambda/latest/dg/versioning-intro.html)
- [traffing shifting using aliaes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html)
- [security overview whitepaper](https://docs.aws.amazon.com/whitepapers/latest/security-overview-aws-lambda/security-overview-aws-lambda.html)
- [extensions](https://aws.amazon.com/blogs/aws/getting-started-with-using-your-favorite-operational-tools-on-aws-lambda-extensions-are-now-generally-available/)
- [iam: Lambda resource access permissions](https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html)

### tools

- [lambda power tuning tool](https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:451282441545:applications~aws-lambda-power-tuning)

## best practices

- always consider the lambda execution environment and context
  - `exports.handler `fn is recreated, but the parent scope is reused on warm starts
    - this fn should only contain lambda specific code, no business logic
  - reduce the size of the execution context as much as possible to optimize for cold starts
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
    - check that bg processes/callbacks have completed before the code exits
      - else they resume on the next invocation if its a warm start
    - basically everything you want to reuse should be outside the fn handler
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
- ensure you know when to use lambas
  - you can move all of your server side business logic to lambdas, but watch out for costs!

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
- cold starts: when a new execution env is required and lambda must start the init phase from scratch
- warm starts: when an existing execution env can be reused
- Customer Master Key: CMK: aws provides one free of charge, or you can provide one (which is charged at the KMS rate)
- function errors: lambda invokes your function successfuly, but the function timesout/errors
- invocation errors: requests to lambda are rejected before your function receives it; e.g. invalid permissions/throttling

## basics

### high level

- lambda service: polls event services, grabs events in batches, and invokes lambda functions for each event in the batch
  - default batch size of 3; events in the batch become hidden for a default visibility timeout of 30 seconds; on successful processing of the batch the service deletes the batched events
  - if any events in the batch fail, the entire batch becomes visible again; thus a single event could be processed more than once
    - you need to handle this in your function logic, e.g. deleting successful events at the function level
- function: lambda runs instances of your function to process events
- trigger: an event that triggers execution of your function
- event: JSON document that contains data for a lambda function to process
- application environment: a secure and isolated runtime env for a lambda function
- deployment package: a function is deployed to lambda as a zip file or container image
- runtime: language-specific environment inside the application environment
- function handler: the method within a function that specifically processes events

### versions and aliases

- once a lambda is deployed, it is live immediately!
- versions: a new version is created each time a fn is published
  - the current $LATEST becomes the next incremented immutable version;
    - the latest: `arn:Aws:Llambda:aws-region:acct-id:function:some_name:$LATEST`
    - a specific version: `arn:Aws:Llambda:aws-region:acct-id:function:some_name:123`
- aliases: a pointer to a specific function version
  - each alias has a specific arn
    - a test alias`arn:Aws:Llambda:aws-region:acct-id:function:some_name:test`
  - you can update an alias to point to a specific version number
  - alias routing: you can point an alias to a a maximum of 2 fn versions, e.g. 10% to v1, and 90% to v2
    - aka traffic shifting
    - both version must:
      - have the same runtime role
      - have the same dead-letter queue configuration, or no dead-letter queue configuration
      - must be published, and the alias cannot be $LATEST

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

### error handling

- depends on whether the event source is sync (immediate response) or async
  - synchronous event sources that invoke functions, have no built-in retries for a failed or throttled request.
- generally you're either using the:
  - onFailure destination logic to persist the message for processing
  - dead letter queue for human intervention
- function DLQ vs event source DLQ
  - both
    - require logic to redrive messages back to the source for processing
  - function
    - is part of the function and messages that error out after the max retries are moved to the DLQ
  - source:
    - is part of the source policy and specifies the max retries before moving to the DLQ
    - provides insight in the message regardless of the target

#### dead-letter queues

- queues for failed events that require human intervention
  - turn on and create dedicated dead-letter queue resources using SNS/SQS for individual Lambda functions that are invoked by asynchronous event sources.
  - create them separately then reference in the function configuration
- use cases
  - analyze failures for follow-up or code corrections
  - available for async and non-stream polling events
  - integrate with SNS topic or SQS queue

### concurrency

- number of lambda fns that can be executing at the same time before throttling
  - account, service and function limits
    - you may need to implement a multi-account strategy to get around account/service limits
    - function limits pertain to reserved concurrency
  - invocation model
- affects fn performance and ability to scale on demand
  - the number of inflight invocations a fn can run at any given momemt
  - concurrency limit: the max concurrent requests
  - reservation: total reserved instances available top run a fn on demand
- calculation: based on the event source that triggered the lambda
  - a/sync concurrency: request rate X average function duration
    - e.g. 25 reqs/sec X 10s/fn = 250 concurrent invocations
    - sync: no retries
    - async: defualt 2 retries
  - streaming concurrency: limit of 1 lambda invocation per shard/parallized to support more than 1
    - lambda will continue to retry until success/retention period for the record expires
      - carfeful! if one record in a batch fails, the whole batch and therefore the shard fails/held up
        - you need to factor this into your fn design to handle partial failures & poison message scenarios
  - polling event sources: adjust concurrency dependent ont he depth of messages in the queue up to the account/service limit

#### cuncurrency types

- unreserved concurrency: total instances not allocated to a specific set of fns
  - at least 100
  - can request an increase
- reserved concurrency: guarantees a set of instances for a specific fn
  - not charged, subtracts from the unreserved total
- provisioned concurrency: initializes a specific set of runtime instances for a fn that can respond immediately to requests:
  - costs! subtracts from the unreserved total
- burst concurrency: quote is not per function, but is applied to all fns in a region
  - 3000: us west (oregon), us east (virginia), euroope (ireland)
  - 1000: asia pacific (tokyo), europe (frankfurt), us east (ohio)
  - 500: all other regions

#### concurrency strategies

- limit concurrency: limit a fns concurrency to achieve:
  - controlling costs
  - regulate how long it takes to process a batch of events
  - match it with a downstream resource that cannot scale as quickly as lambda
- reserve concurrency: set a reservation for a fn to achieve:
  - control performance during peak loads
  - address invocation errors during bursts
- burst concurrency: how your app responds to a suddent burst of requests
  - even if you havent hit concurrency capacity, it still takes a bit for lambda to scale drastically to a sudden burst
  - immediate concurrency increase: limited by region, then adds 500 requests per minute until it reaches the account limit

#### invocation models

- synchronous invocation: lambda runs the fn and waits for and returns an immediate response
  - event sources: api gateway; cognito; cloudformation; alexa; lex; cloudfront
  - no builtin retry logic
- asynchronous invocation: events are queued and the requestor doesnt wait for a response which is instead sent to some destination
  - 2 default retries
  - event sources: sns, s3, eventbridge
  - destinations: can be based on success/failure/alias/fn version/etc
  - lambda will try up to 3 times to invocation the fn before throwing an error
- polling invocation: designed for streaming/queing based services with no code/server management
  - lambda polls (watches) sources for specific events, then executes the associated fn
  - event sources: kinesis, sqs, dynamodb streams
- error behavior: how each invocation model handles errors
  - sync: no retries
  - async: built in retries configurable 0-2 times
    - up to 6 hours, configurable by the maximum age of event setting
  - polling: depends on event soruce

### event source mapping

- event sources invoke a lambda fn using one of the above invocation models
- event source mapping: the configuration of services as event triggers that are given IAM permissions to access and trigger lambda fns
  - event sources: dynamodb; kinesis; mq; apache kafka MSK; self maanged apache kafka; sqs

### power tuning tool

- optimize on cost, performance or a balance of the two
- it invokes your function with different memory settings, from 128mb to 3gb
  - captures duration + cost

### extensions

- integrate Lambda functions with your favorite tools for monitoring, observability, security, and governance.

## considerations

### creating lambda functions

- Function Type:
  - author from scratch:
  - use a blueprint
    - authorizer: for api gateway requests
  - container image
- runtime: e.g. nodejs
- architecture: x86/64 vs arm64
- permissions/resource policies: which event sources are permitted to trigger this fn
- execution role: what services is this fn allowed to interact with
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
  - memory: 128mb - 10 gb; this is the primary way to configure function performance
    - both CPU and I/O scale linearly with the memory settings
      - you reduce fn duration by increasing memory config (because that will also increase CPU and I/O)
    - lambda allocations CPU and other resources lineraly in proprtion to the amoutn of memory configured
    - any modification of memory triggers and equivalent modification in CPU resources
  - timeout: up to 900 seconds (15 minutes)
    - how long a fn can run before lambda terminates it
    - load test your fn to determine the max/optimum timeout value
    - always fail fast and never wait for the full timeout value
  - concurrency
  - billing: charges are proportional to the memory, duration (GB seconds) and number of invocations
    - you can offset costs from memory by reducing the duration
    - duration tracks and is rounded up to the nearest 1 ms
    - invocations tracks and includes test invocations
    - total cost is the duration of allocated memory GB per second
      - not memory used, but ALLOCATED! remember that
    - free tier: 1 million requests per month and 400,000 gb-seconds of compute time per month
- other settings
  - ephemeral storage: 512mb -> 10gb
  - snapstart: reduces startup time by caching the fn definition
  - triggers
    - which sources and their events
      initiate exeuction of this fn
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
  - cloudwatch metrics
    - see [the markdown file](../mgmtGovernance/cloudwatch.md)
  - cloudwatch logs
  - x ray traces: lambda fns send trace data to xray for processing
    - see [the markdown file](../devtools/xray.md)
  - lambda insights: cloudwatch extension tailored for system-level monitoring of lambda fns
    - see [the markdown file](../mgmtGovernance/cloudwatch-lambda-insights.md)
  - cloudtrail: tracking deployments
    - see [the markdown file](../mgmtGovernance/cloudtrail.md)
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

## integrations (event sources)

- FYI on database connections
  - you dont control when environments are created/destroyed
    - initialize the connection outside the fn handler, and check for existence within
  - you cant close connections because theres no hook to indicate destruction of a lambda environment
    - use database TTL as a fallback to clean up connections
  - session leakage, idle connections, cant share connections across concurrent function invocations
    - you have to manage these types of issues by setting concurrency limits to prohibit the amount of potential db connections
    - the above still sucks
      - you have to find some external mechanism (e.g. a db proxy) that can handle the db connection
      - thus you remove the need to make the connection within the lambda fn
      - e.g. implementing `Dynamic Content Management` pattern

### s3

- event types
  - all object create events

### SQS

- lambda manages polling the queue on your behalf, but you stil control other configuration settings
  - lambda
    - batch size:
    - concurrency limit
      - default 5 parallel processes to retrieve messages from the queue: which requires a matching 5 concurrent lambda invocations
        - you need to ensure the lambda reserve concurrency for the fn is atleast 5
        - if the queue size increases, it will automatically increase the number of invocations, but not the reserved concurrency setting
        - if a fn errors, it will decrease the number of processes polling the queue
    - timeouts
  - SQS queue
    - visibility timeout
    - max receive count
    - redrive policy: determines when to send messages to the DLQ
    - dead letter queue
- error handling (polling a queue as an event source)
  - timeouts: messages become visible to other consumers after the visibility timeout expires.
    - Set your visibility timeout to 6 times the timeout you configure for your function.
  - retries: Use the maxReceiveCount on the queue's policy to limit the number of times Lambda will retry to process a failed execution.
  - error handling: functions should delete each message as it is successfully processed.
    - Move failed messages to a dead-letter queue configured on the source SQS queue.
  - dead letter queues
    - ensure the queue is created on the source queue and not the lambda function
- Queue batch size must allow all the messages in a batch to process within the Lambda timeout.
  - e.g. 3 minutes processing time per message > means (batch size X 3 minutes) < 15 minutes max lambda timeout
- Lambda has a default of five parallel processes to get things off of a queue.
- If the visibility timeout expires before the Lambda function processes the messages, messages will be deleted by the queue.
- If a Lambda function returns errors when processing messages, Lambda decreases the number of processes polling the queue
- If the Lambda service detects an increase in queue size, it will automatically increase how many batches it gets from the queue, each time
  - it will increase the number of concurrent Lambda functions it invokes

### apigateway

- error handling
  - timeouts: 30 seconds
  - retries: no builtin retries
  - error handling: Generate the SDK from the API stage, and use the backoff and retry mechanisms it provides.

### SNS

- error handling
  - timeouts: can be ignored on the SNS side, as async event sources dont wait for responses
  - retries: lambda will automatically retry on if a function execution fails
    - max retry attempts: 0-3
    - maximum event age: up to 6 hours
  - dead letter queues

### kinesis

- error handling (polling a stream as an event source)
  - timeouts: When the retention period for a record expires, the record is no longer available to any consumer.
    - 24 hours by default. You can increase the retention period at a cost.
    - set lambdas Maximum Record Age to skip processing data records
  - retries: Lambda retries a failing batch until the retention period for a record expires
    - configure Maximum Retry Attempts to skip retrying a batch of records upon breaching Maximum Retry Attempts (or it has reached the Maximum Record Age
  - error handling:
    - use onFailure destination to pass additional metadata (shard id, the stream ARN, etc)
    - Use BisectBatchOnFunctionError to split a failed batch into two batches.

### step functions

- error handling
  - use step functions to handle retry and backoff logic

### systems manager

- secret stuff

### secrets manager

- secret stuff that requires rotation/cross account access

### cloudwatch

- all stdout is automatically sent to cloudwatch logs
