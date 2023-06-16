# CloudWatch Lambda Insights

- monitoring and troublehsooting solution for serverless applications running on lambda
- uses a cloudwatch lambda extension provided as a lambda layer

## links

## best practices

### anti patterns

## features

- collects, aggregates and summarized system-level metrics
- summarizes diagnostic information such as cold starts, worker shutdowns
- collects system-level metrics and emits a single performance log event for every fn invocation
- all events use the embedded metric format for extracting metrics from log events

## terms

- multi-function view: aggregates the runtime metrics for lambda fns in the current account & region
- single-function view: runtime metrics for a single lambda fn

## basics

- use the multi function view for:
  - identify over/under utilized lambda fns
- use the single function view for:
  - troubleshoot individual requests

## considerations

### performance monitoring

- function cost
- duration
- invocations
- errors
- memory usage
- network usage
