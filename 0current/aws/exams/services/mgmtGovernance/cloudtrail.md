# cloudtrail

- helps audit applications by recording all API actions made against the application

## my thoughts

- all api actions are recorded in cloudtrail, become one with cloudtrail

## links

- [event history](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events.html)
- [user guide intro](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)
- [concepts](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html)
- [sending trail events to cloudwatch logs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html)

## best practices

- careful with custom trails: some are high volume (e.g. lambda invocations) and can incur major costs

### anti patterns

## features

- create a trail for captured events and store in s3/cloudatch log/events
- enables governance, compliance, operational auditing and risk auditing of an aws account
- log, monitor and retain account activity related to actions across aws infrastructure
- event history of actions taking through the management console / sdks / clis / etc
- simplify security analysis, resource change tracking and troubleshooting

### pricing

## terms

## basics

- you create a trail that delivers log files to an s3 bucket/cloudwatch logs

### events

- provides a viewable, searchable, and downloadable record of the past 90 days of CloudTrail events

### trails

- the delivery of CloudTrail events to an Amazon Simple Storage Service (Amazon S3) bucket, Amazon CloudWatch Logs, and Amazon CloudWatch Events
- automatically keeps 90-day history of events; create your own trail to maintain a longer history.

#### insights

- configure CloudTrail Insights on your trails to identify and respond to unusual activity associated with write API calls
  - tracks your normal patterns of API call volume and generates Insights events when the volume is outside normal patterns.

## considerations

## integrations

### cloudwatch

- its all about setting alarms when changes are made against production resources

### athena

- for running deeper analysis on trails saved to s3

### lambda

- the default logging: is for control plane (mgmt) events
- optional logging: can turn on data event logging for tracking every time lambda fns are invoked
- You can invoke a Lambda function based on CloudTrail events emitted to CloudWatch Logs and have the function take desired actions.

### api gateway

- captures all api calls as events whether originating from console / code

### Key Management Service (KMS)

- usage of managed keys are recorded in cloudtrail
- inspect whos making teh request, services used, actions performed, parameters for the action and response elements returned

### s3

- can track object level data events, e.g. uploads to a bucket
