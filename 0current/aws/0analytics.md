# TLDR

cloudtrail, cloudwatch, amazon eventbridge (cludwatch events) VPC flow logs

## links

- [all billing reports](https://console.aws.amazon.com/cost-management/home?#/reports/overview)

## basics

- monitoring: process of observing systems in the present tense
- analytics: turning data into insights
- diagnostics: process of figuring out whats going wrong
- observability: properties of a system that can be monitored and provided as data for analytics
  - a measure of how well internal states of a system can be inferred from knowledge of its external outputs

## vpc flow logs

- created per VPC
  - viewing: vpc > flow logs tab in middle (not left sidebar) click the destination > click the ENI from the list
  - [good text filter patterns](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html#matching-terms-events)]
    - REJECT
    - ACCEPT
  - creating: vpc > click vpc > actions drop down
- capture all VPC network interfaces at 15 minute intervals
- are stored in cloudwatch
- required an IAM role
- limitations
  - cant be created for peered vpc in external aws accounts
  - flow log configuration can be modified after created
  - only displays the primary IP address
  - doesnt capture requests by internal AWS stuff
- metrics
  - ip addressses
  - ports
  - protocol
  - packet information
  - action (denied/allowed)
  - logging status
- creating a flow log
  - in cloudwatch: create a log group
  - in vpc:
    - create flow log
    - create an IAM policy
      - or select `FlowLogsRole` or something like that if it exists
      - use the one aws creates for you while you go through the workflow

## cloud trail

- track user activity and API usage
- monitor events occuring in AWS services, and keep logs in an s3 bucket
- log and retain account activity enabling governance, compliance and risk auditing across your AWS infrastructure

## cloudwatch

- monitor resources and applications
- enables you to view data from all AWS services in a single console
- data from different services are organized into namespaces
  - is a repository of resource metrics for each AWS ervice
  - can create your own metrics
- cloudwatch alarms: notifications when critical metrics breach predefined thresholds
  - post to sns topics
  - trigger lambda fns
  - supports automated elasticity
  - billing alerts
    - have to enable it in IAM
- cloudwatch events: i.e. Amazon EventBridge
  - continuously monitor events patterns
  - trigger remediation actions via lambda fns
- cloudwatch logs: collect & store logs from aws resources, applications & services in near realtime
  - centralize logs in one place
  - search, sort, filter & query for patterns
  - group by specific fields
  - visualize them in dashboads
  - set a retention period
  - log group
    - a group of log streams that share the same retention & access control settings
  - log streams
    - sequence of log events that share the same source, e.g. the same ec2
- namespace: isolated container for metrics
  - naming convention: AWS/Service, e.g. AWS/EC2
- metrics: variables used to monitor a service
  - are per region
  - cannot be deleted; but are auto-deleted after 15 months of no data
  - must be associated with a timestamp `YYY-MM-DDTHH:MM:SSZ`
  - resolutions
    - standard: one-minute granularity (default)
    - high: one-secon granularity
- integrates with IAM
  - but its all or nothing
  - ^ i.e. a user has to have access to ALL of cloudwatch, or none (cant limit to specific resources)
- data points: metric values
  - cpu utilization of ec2
  - read/write of ebs volumes
  - size of s3 buckets
  - etc

- use cases
  - monitor applications
  - optimize utilization
  - respond to changes
    - send an email via SNS
    - evoke a lambda fn
    - route events to an SQS queue
    - start/stop/terminate ec2 instances
    - initiate ec2 autoscaling actions
    - etc
  - get a unified view
    - billing

### cloudwatch considerations

- alarms
  - type: billing, insufficient data, ok, etc
  - metric name
  - statistic
  - period
  - conditions
    - type
      - static
      - anomaly detection
    - threshold type
      - >|>=|<=|<
      - value
    - datapoints to alarm: i.e. how many times to the condition must be true before the alarm executes
  - actions
    - alarm state trigger: the state of the condition when the alarm should activate
      - in alarm: i.e. condition breached
      - ok: condition is not breached
      - insufficient data: i.e. theres not enough data to calculate the condition expression
    - email endpoints: who receives the alarm, comma separated
    - sns topic
    - auto scaling action
    - ec2 action
    - systems management action
