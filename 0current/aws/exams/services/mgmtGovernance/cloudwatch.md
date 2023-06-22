# cloudwatch

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

### anti patterns

## features

## terms

## basics

### dashboards

### logs

#### log groups

#### log insights

### alarms

### metrics

### events

### application monitoring

### insights

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

- monitor and log deployed apis
- common metrics/alarms
  - CacheHitCount: for rest api cache
  - CacheMissCount: for rest api cache
