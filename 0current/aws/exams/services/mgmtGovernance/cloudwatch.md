# cloudwatch

- CloudWatch Metrics: monitoring & billing, but not observability
- CloudWatch Logs: aggregator

## links

- [cloudwatch logging intro](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)
- [cloudwatch logs export to s3](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/S3Export.html)
- [cloudwatch using metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/working_with_metrics.html)
- [embedded metric format: specification](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format_Specification.html)
- [embeddced metric format: intro](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html)

## my thoughts

- everything starts and ends with cloudwatch

## best practices

- structure logs following the EMF standard
  - cloudwatch logs w2ill autoamtically extract these metric values
- ## be careful about enabling logging full requests in production and leaking sensitive data

### anti patterns

## features

### pricing

- execution logs cost

## terms

## basics

### dashboards

### logs

- execution logging: what occurs during a service action; useful for troubleshooting services
- access logging: whos invoking a service action; fully customizable

#### log groups

- logs are categorized by log groups
- a log group is generally associated with a specific service
  - but a single service can utilize mutiple log groups

#### log insights

### alarms

### metrics

### events

- rules
- event buses

### application monitoring

### insights

### billing

### filters

## considerations

## integration

### lambda

- lambda sends metrics about invocation to cloudwatch
- build graphs and dashboards, set alarams to respond to changes in use, perf or error rates
- metrics
  - ConcurrentExecutions: fns with custom cuncurrency limits: total concurrent invocations for a given fn at a given point in time
  - UnreservedConcurrentExecutions: fns without a custom cuncurrency limit: total concurrent invocations for a given fn at a given point in time

### dynamodb

- common metrics/alarms
  - SuccessfulRequestLatency
  - Throttling Events
  - Capacity Consumption
  - User Errors
  - System Errors

### api gateway

- turn on detailed metrics in stage settings
- monitor and log deployed apis
- common questions
  - how often apis are called
  - number of api invocations
  - latency of api responses
  - 4 vs 5xx errors
  - cache to hit:miss ratio
- common metrics/alarms
  - CacheHitCount: for rest api cache in given period
  - CacheMissCount: for rest api cache in a given period
  - count: total api requests in a period
  - latency: full roundtrip time between api gateway receiving a request and when it returns a response; includes IntegrationLatency + gateway overhead
  - integrationLatency: time between gateway invoking a target and receiving a response
    - latency - integrationLatency = api gateway overhead
  - 4xxError: total client-side errors _captured_ in a specific period
  - 5xxError: total server-side errors _captured_ in a specific period
