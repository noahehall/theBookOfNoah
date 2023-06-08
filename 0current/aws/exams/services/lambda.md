# Lambda

- AWS Lambda is an event-driven, serverless compute service that lets you run code without provisioning or managing servers

## links

- [best practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
- [configuring environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-config)
- [creating and sharing layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)
- [developer guide intro](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [env vars](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html)
- [execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html)
- [function aliases](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html)
- [function urls](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html?icmpid=docs_lambda_help)
- [function versions](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html)
- [integrating with efs](https://docs.aws.amazon.com/lambda/latest/dg/services-efs.html)
- [logging](https://docs.aws.amazon.com/lambda/latest/dg/python-logging.html)
- [monitoring and troubleshooting](https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting.html)
- [permissions](https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html)
- [s3 event triggers (tut)](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html)
- [snapstart compatibility](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html#snapstart-compatibility)
- [monitoring and troubleshooting](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html?icmpid=docs_lambda_help)
- [cloudwatch logs for lambda](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions-logs.html?icmpid=docs_lambda_help)
- [x-ray: integration with lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html?icmpid=docs_lambda_help)
- [using lambda insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights.html?icmpid=docs_lambda_help)
- [testing lambda functions in the console](https://docs.aws.amazon.com/lambda/latest/dg/testing-functions.html?icmpid=docs_lambda_help)

## best practices

- always consider the lambda execution environment
  - logic within `exports.handler` is recreated, but the parent scope is reused
- utilize the Test tab to create fake events, which will reveal errors that are normally hidden

### anti patterns

## features

- can be trigged via upstream activities, e.g. data received by kinesis, updated ina dynamodb table, etc
  - triggers can be created/attached from within the lambda console

## terms

- blueprint: a base lambda fn used to build out new lambda fns; provided for standard lambda triggers

## basics

- abc

## considerations

### creating lambda functions

- Function Type:
  - author from scratch:
  - use a blueprint
  - container image
- runtime: e.g. nodejs
- architecture: x86/64 vs arm64
- permissions
- execution role
  - new role
  - existing role
  - new role from aws policy templates

### configuring lambda functions

- memory: 128mb -> 10240mb
- ephemeral storage: 512mb -> 10gb
- snapstart: reduces startup time by caching the fn definition
- triggers
- layers
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
