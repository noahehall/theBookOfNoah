# cloudwatch

- centralized solution to monitor resources and applications on AWS, on premise and other clouds with dataviz, alarms and automation actions
- CloudWatch Metrics: monitoring & billing, observability
- CloudWatch Logs: aggregator

## links

- [logging intro](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)
- [logs export to s3](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/S3Export.html)
- [using metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/working_with_metrics.html)
- [embedded metric format: specification](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format_Specification.html)
- [embedded metric format: intro](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html)
- [getting started](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/GettingStarted.html)
- [logs: intro](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)
- [eks: pushing logs to container insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-EKS-logs.html)
- [container insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html)
- [metrics: lambda](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions-metrics.html)
- [metrics: api gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-metrics-and-dimensions.html)
- [metrics: sns](https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html)
- [metrics: kinesis](https://docs.aws.amazon.com/streams/latest/dev/monitoring-with-cloudwatch.html)
- [metrics: sqs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-available-cloudwatch-metrics.html)
- [metrics: step functions](https://docs.aws.amazon.com/step-functions/latest/dg/procedure-cw-metrics.html)
- [metrics: by service](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)
- [using metric math](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html)
- [log insights](https://aws.amazon.com/blogs/aws/new-amazon-cloudwatch-logs-insights-fast-interactive-log-analytics/)
- [lambda: analyzing behavior](https://aws.amazon.com/blogs/mt/understanding-aws-lambda-behavior-using-amazon-cloudwatch-logs-insights/)

### api

- [AAA all actions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Operations.html)
- [AAA api landing page](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/Welcome.html)
- [getMetricData](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html)

### tools

- [cloudwatch with grafana](https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/)

## my thoughts

- everything starts and ends with cloudwatch
- cloudwatch is the gateway integration to SNS, SQS and lambda (etc) for automated response and remediation patterns

## best practices

- structure application-level logs following the EMF standard
  - instruct CloudWatch Logs to automatically extract metric values that are embedded in structured log events.
- be careful about enabling logging of full requests in production and leaking sensitive data
- alarms
  - the time period should be for a sustaind amount of time, and not short bursts/temporary spikes in metrics

### anti patterns

## features

- collect, assess and analyze resource and application data using visualization tools
- improve operational performance using alarms and automated actions at predetermined thresholds
- integrate with 70+\_ aws services for a centralized solution
- troubleshoot operational problems with actionable insights derived from logs and metrics
- monitor application performance, perform root cause analysis, optimize resources

### pricing

- the free tier is pretty good
  - basic monitoring: visibility into aws resources without any extra costs
    - resources automatically send metrics to cloudwatch for free at a rate of 1 data point per metric per 5-minute interval
- the paid tier: your best bet is to use the aws calculator
  - depends on the region and is split out by feature
    - logs
    - metrics
    - dashboards
    - alarms
    - events
    - contributor insights
    - canaries
    - evidently
    - rum
    - metrics insights
    - cross-account observability
    - internet monitor

## terms

## basics

- general workflow
  - most resources automatically/require minimumal configuration to publish to cloudwatch
    - for application-level metrics, you'll need to do this yourself
  - once log data is in cloudwatch
    - setup a metric filter
    - define an alarm
    - define an action

### architecture

#### failure management

- its all about monitoring and alarms
- ensure your services are persisting logs to cloudwatch logs
  - managed services: stdout is automatically posted to cloudwatch
- exponential backoff and retry logic needs to be included in your application logic
  - utilize the aws sdk for defaults

### metrics

- custom metrics enable you to post application-level metrics to cloudwatch
- you can run `math metrics` across metrics, e.g. errors/invocations

### dashboards

- customizeable home pages configured for one/more metrics through widgets pulled from one/more regions

### logs

- centralized place for logs to be stored, queried and analyzed
- execution logging: what occurs during a service action; useful for troubleshooting services
- access logging: whos invoking a service action; fully customizable
- log event: record of activity consisting of a timestamp and an event message
- log stream: sequences of log events that all belong to the same resource
- log group: composed of log streams that all share the same retention and permissions settings

#### metric filters

- how cloudwatch turns log data into numerical cloudwatch metrics that you can graph and use on dashboards

#### log agent

- runs on EC2 to automatically send log data to cloudwatch logs

#### log insights

- interactively search and query and analyze log data in Cloudwatch Logs
- will automatically extract fields from structured logs
- use prebuilt or custom queries on your logs to provide aggregated views and reporting

### alarms

- automatically initiate actions based on sustained state changes of metrics
- are invoked when it transitions from one state to another
  - ok: the metric wis within the defined threshold
  - alarm: the metric is outside the defined threshold
  - insufficient_data: alarm has just started, metric is not available, or not data to determine alarm start
- you configure when alarms are invoked and the action that is peformed
  - metric: to be monitored
  - threshold: when events breach this number, cloudwatch starts the countdown
  - time period: once the metric exceeds the threshold for this duration, the alarm is triggered

### events

- rules
- event buses

### application monitoring

### insights

#### container insights

- creates automatic dashboards, and are also viewable in the cloudwatch console

#### lambda insights

- a special monitoring and troubleshooting solution for serverless applications running on Lambda
- uses a CloudWatch Lambda extension, which is provided directly at the Lambda layer. When you install this extension on your Lambda function, it collects system-level metrics and emits a single performance log event for every invocation of that Lambda function.

#### contributor insights

#### application insights

### actions

- abcd
- getMetricData: retrieve cloudwatch metric values

## considerations

## integration

- all AWS services automatically report some information to cloudwatch
- there are 3rd party tools to help analyze this information
- common goals across all integrations
  - operational issues: overutilization, application flaws, misconfiguration or security-related events
  - cost optimization: underutilization
  - scaling, alarms, status checks
  - resource optimization: network utilization, response times, traffic i/o, storage/diskspace consumption/data throughput

### SNS

- integration SNS with alarms that trigger notifications is a foundational pattern in AWS

### vpc

- abc

### lambda

- lambda sends metrics about invocation to cloudwatch
  - including anything sent to stdout
- build graphs and dashboards, set alarams to respond to changes in use, perf or error rates
- metrics
  - invocations: total function executions that were not throttled/failed to start, success & errors
    - errors: invocations that result in a fn error whether by your fn handler or the lambda runtime (timeouts, configuration issues, etc)
    - throttled: failed invocations becaue of concurrency limits; not counted in invocation totals; lambda rejected executed requests because no concurrency was available
  - duration: total time spent processing events; to calculate billing round up to the nearest millisecond
    - iteratorAge: age of the last record in the event releative to event source mappings that read from streams;
      - the agent is the total duration from when the stream receives the record until the event source mapping sends the event to the fn
  - DeadLetterErrors: for async invocation; number of times lambda attempts to send an event to a dead-letter-queue but fails
  - ConcurrentExecutions: fns with custom cuncurrency limits: total concurrent invocations for a given fn at a given point in time
  - UnreservedConcurrentExecutions: fns without a custom cuncurrency limit: total concurrent invocations for a given fn at a given point in time
  - ProvisionedConcurrentExecutions: number of fn isntances that are processing events on provisioned concurrency

### dynamodb

- common metrics/alarms
  - SuccessfulRequestLatency
  - Throttling Events
  - Capacity Consumption
  - User Errors
  - System Errors

### api gateway

- turn on detailed metrics in stage settings fora extract cost
- monitor and log deployed apis, enabled per stage
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

### ecs

- cloudwatch logs: make sure specify `awslogs` as the logConfiguration.driver
- cloudwatchEvents: captures task state changes
- service cpu/memory utilization metrics: enables you to scale in/out

### MQ

- broker utilization, queue and topic metrics
- alarms and autoscaling based on metrics

### ec2

- common metrics
  - CPUUtilization
  - NetworkinIn
  - NetworkOut
- detailed monitoring: apps running on EC2 can post metrics every minute (instead of every 5 with basic monitoring)

### RDS

- common metrics
  - DatabaseConnections

### ACM

- automate and response to ACM events, e.g. change in certificate state or renewal

### EKS

- container insights can be configured to collect, aggregate and visualize metrics and logs
- also provides diagnostic information, e.g. container restart failures
- general workflow
  - a log collector with a cloudwatch plugin (e.g. fluentd/fluentbit) runs as a DaemonSet on every node
  - the cloudwatch agent runs as a daemonset on each worker node
    - collects and ships metrics data to cloudwatch for processing
  - collect EKS control plane metrics by turning on control plane logging for an EKS cluster
    - cloudwatch collects metrics info from this logs that can be viewed in Log Insights
  - metrics are viewable in Container Insights and Log Insights
- common metrics
  - standard: CPU, memory, disk and network
  - diagnostic metrics: container restart failures

### kinesis

- common metrics
  - iteratorAge: when it increases (lambda consumer) likely means you need to reshard
