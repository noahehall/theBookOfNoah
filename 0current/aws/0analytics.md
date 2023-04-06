# analytics

- cloudtrail, cloudwatch, amazon eventbridge (cludwatch events) VPC flow logs, log insights, log groups, xray, budgets
- everyting analytics & cost management

## TLDR

- abc

## links

- [audit manager](https://aws.amazon.com/audit-manager/?did=ap_card&trk=ap_card)
- [artifact](https://aws.amazon.com/artifact/?did=ap_card&trk=ap_card)
- [athena](https://aws.amazon.com/athena/?did=ap_card&trk=ap_card)
- [aws cost management tools](https://aws.amazon.com/aws-cost-management/)
- [all billing reports](https://console.aws.amazon.com/cost-management/home?#/reports/overview)
- [aws xray](https://aws.amazon.com/xray/)
- [cost and usage reports](https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/)
- [cost explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/)
- [distro for opentelemtry](https://aws.amazon.com/otel/?c=mg&sec=srv)
- [aws observability introduction](https://catalog.workshops.aws/observability/en-US/intro)
- [compute optimizer](https://aws.amazon.com/compute-optimizer/?did=ap_card&trk=ap_card)
- [quicksight](https://aws.amazon.com/quicksight/?did=ap_card&trk=ap_card)

## basics

- monitoring: process of observing systems in the present tense
- analytics: turning data into insights
- diagnostics: process of figuring out whats going wrong
- observability: properties of a system that can be monitored and provided as data for analytics

  - a measure of how well internal states of a system can be inferred from knowledge of its external outputs

- protocols
  - tcp = 6

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

## cloudtrail

- cloudtrail vs cloudwatch logs

  - cloudtrail
    - captures events from all services
    - requires no configuration to view events
    - CloudTrail Event History shows events from the past 90 days.
  - cloudwatch logs
    - only a few services publish to cloudwatch logs
    - requires log group configuration

- track user activity and API usage for actions performed through:
  - aws management console
  - aws sdks
  - command-line tools
  - other AWS services
- identify:
  - who did what
  - to what resources
  - when the action occured
- use cases

  - track changes on resources
  - perform security analysis
  - identify unusual activity
  - troubleshoot issues
  - enabling governance, compliance and risk auditing across your AWS infrastructure
  - create cloudtrails to store events in s3 buckets, cloudwatch logs
    - definitely send to cloudwatch logs to support taking remidiation actions and analyzing trail data on cloudwatch dashboards

- trail: configuration that enables the delivery of cloudtrail events to an s3 bucket, cloudwatch logs

### cloud trail considerations

- trail configuration
  - name
  - all regions? (default)
  - all accounts in organization (for multi account organizations)
  - s3 bucket
  - KMS server side encryption (for sensitive log data)
  - log file validation (via digest files)
  - sns notification (each time a new log is created in an s3 bucket)
  - send to cloudwatch logs?
    - need this to use the trail data to create custom metrics, alarms, dashboards, etc
  - always add tags
    - trail name
    - s3 buckets
  - event types
    - management events: control pane operations, e.g. security, routing, user logging
    - data events: on/within a resource
    - insight events: identify unusually activity by analyzing management events
      - these events defer significantly from normal usuage patterns

## cloudwatch

- cloudwatch vs aws health

  - cloudwatch
    - monitor at the resource level
  - aws health
    - monitor at the service level

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

- basics

  - monitor resources and applications
  - enables you to view data from all AWS services in a single console
  - data from different services are organized into namespaces
    - is a repository of resource metrics for each AWS ervice
    - can create your own metrics
  - integrates with IAM
    - but its all or nothing
    - ^ i.e. a user has to have access to ALL of cloudwatch, or none (cant limit to specific resources)
  - only has visibility at the instance level,
    - use a cloudwatch agent to get system & application level data

- cloudwatch alarms: notifications when critical metrics breach predefined thresholds

  - post to sns topics
  - trigger lambda fns
  - supports automated elasticity
  - billing alerts
    - have to enable it in IAM

- cloudwatch events: precursor to Amazon EventBridge

  - continuously monitor events patterns
  - trigger remediation actions via lambda fns
  - @see event bridge section

- cloudwatch logs: collect & store logs from aws resources, applications & services in near realtime

  - centralize logs in one place
  - search, sort, filter & query for patterns
  - group by specific fields
  - visualize them in dashboards
  - set a retention period
  - log group
    - a group of log streams that share the same retention & access control settings
    - always create a VPC flow log and point it to a log group
      - this ensures:
        - all ENIs in the VPC will publish to the log group
        - each ENI will have a distinct log stream
  - log streams
    - sequence of log events that share the same source, e.g. the same ec2
  - metric filters: `[field, field, field="value"]`
    - get the field names from aws docs
      - e.g. `${version} ${account-id} ${interface-id} ${srcaddr} ${dstaddr} ${srcport} ${dstport} ${protocol} ${packets} ${bytes} ${start} ${end} ${action} ${log-status}`
      - but remember to convert to camelCase
    - can be used in cloudwatch alarms

- namespace: isolated container for metrics

  - naming convention: AWS/Service, e.g. AWS/EC2

- metrics: variables used to monitor a service

  - are per region
  - cannot be deleted; but are auto-deleted after 15 months of no data
  - must be associated with a timestamp `YYY-MM-DDTHH:MM:SSZ`
  - resolutions
    - standard: one-minute granularity (default)
    - high: one-secon granularity

- data points: metric values

  - cpu utilization of ec2
  - read/write of ebs volumes
  - size of s3 buckets
  - etc

- log insights

  - search and analyze data interactively
  - automatically generates fields form logsand provides ability to query those fields
    - any field prefixed with `@` is auto generated
    - @message: raw unparsed log event
    - @timestamp
    - @ingestionTime: when the event was received
    - @logStream: the name of the stream containing hte event
    - @log: the log group identifier
    - vpc flow logs
      - version
      - accountId
      - interfaceId
      - srcAddr
      - dstAddr
      - srcPort
      - dstPort
      - protocol
      - packets
      - bytes
      - etc
    - lambda
      - @type
      - @requestId
      - @duration
      - @etc

- cloudwatch agents

  - collect metrics from ec2 instances & on-premsise servers
  - stored in `CWAgent` namespace
  - you have to install the agent on your servers manually

- cloudwatch dashboards
  - unified view for selected metrics & alarms
  - assess the health of resources & application across one/more regions
  - are global and no limit on how many to create
  - dashboard source code can be copied and recreated (useful to use as templates)
    - actions > copy source or something like that

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
      - > |>=|<=|<
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

- metric filters

  - query fields & values
  - metric name
  - namespace (group of metrics)
  - metric value (usually you want 1 here)
  - dimension name & value

- cloudwatch agent

  - operating system
  - iam role
  - metrics to capture
  - method of instlaling & configuring agent on each server
    - you want to automate this in autoscaling scenarios

- cloudwatch dashboards
  - name of dashboard
  - add widgets (types of graphs)
  - namespaces (type of data, e.g. ec2, billing, etc)
    - metrics
      - color, label, statistic type (e.g. average, sum), sampling period

## aws health (personal health)

- [home page](https://phd.aws.amazon.com/phd/home#/dashboard/open-issues)
- monitor health at the service level
- continuous visibility into resource performance & availability of aws services
- publish events about how service & resource changes might affect your applications
- requires no configuration

## eventbridge

- [homepage](https://console.aws.amazon.com/events/home?region=us-east-1#/rules)

- serverless event bus service that connects your applications with data from different sources
- use cases
  - connect sources: custom apps, sass apps, or other AWS services to data within AWS
  - routes sources to AWS Lambda, amazon kinesis, or another event bus
  - build decoupled applications
  - allow operations teams to respond quickly to changes and take corrective actions
- events: changes in an environment
  - AWS resource
  - external SaaS product
  - or your application
- rules: matches incoming events and routes them to targets for processing
  - a single rule could route to multiple targets in parallel
- targets: responsible for processing events
  - lambda fns
  - sns topics
  - kinensis data stream
  - SQS Queue
- Event Bus: receives events
  - after creating a rule, you associate it with an event bus, and the rule only processes events with that event bus

### eventbridge considerations

- event bus
  - never use the default
- rules
  - name
  - description
  - pattern type
    - event pattern: for things that can happen anytime
      - matching pattern
        - service provider: e.g. aws
        - service name: e.g. ec2
        - event type: e.g. state change (i.e. stopped)
        - resource
          - specific instance
          - any instance
    - schedule: for things with schedules

### eventbridge considerations

- source
  - type
    - event pattern
    - schedule
  - service name
  - event type
  - (service level)
    - any service
    - specific services
  - (event level)
    - any event type category
    - specific event type category
      - e.g. service issues
  - target: e.g. lambda fn, sns topic, sqs queue

## xray

- Analyze and debug production, distributed applications
- service that collects data about requests that your application serves, and provides tools that you can use to view, filter, and gain insights into that data to identify issues and opportunities for optimization.

## budgets

- planning and cost control with budgeting & forecasting

## distro for opentelemetry

- instruction applications and send metrics and traces to multiple AWS monitoring tools

## compute optimizer

- identify optimal aws compute resources for EC2, EBS, ECS and lambda
- AWS Compute Optimizer analyzes your resources and utilization data
- opt in: must have [iam:CreateServiceLinkedRole](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html) permission

## athena

- query data in s3/other storage services using sql/python
- analyze petabyte-scale data where it lives

## quicksite

- unified business intelligence

## artifact

- access AWS and ISV security and compliance reports

## audit manager

- audit AWS usage for risk and compliance assessment
