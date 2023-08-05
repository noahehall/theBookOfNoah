# cloudtrail

- captures all AWS service API calls as events, including calls from the console, AWS CLI, and API tools

## my thoughts

- become one with cloudtrail

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
- since all actions against your account can be recorded: the primary goal is the effectively analysis of and reaction to those trails
  - who made the request
  - when and from where
  - what happened

### important log fields

- eventTime
- eventType
  - AwsConsolSignin: A user in your account (root, IAM, federated, SAML, or SwitchRole) signed in to the AWS Management Console.
  - AwsServiceEvent: The called service generated an event related to your trail
  - AwsApiCall: A public API for an AWS resource was called
- eventSource: The service that the request was made to; generally the service endpoint
  - e.g. CloudWatch is monitoring.amazonaws.com
- eventName: The requested action, which is one of the actions in the API for that service.
- sourceIPAddress: IP address or DNS name of the calling service is used
- userAgent: The tool or application through which the request was made
  - signin.amazonaws.com – The request was made by an IAM user with the AWS Management Console.
  - console.amazonaws.com – The request was made by a root user with the AWS Management Console.
- errorMessage: Any error message returned by the requested service.
- requestParameters: The parameters that were sent with the API call
- resources: List of AWS resources accessed in the event. This can be the resource's ARN, an AWS account number, or the resource type.
- userIdentity: A collection of fields that describe the user or service that made the call.
  - Root: If the userIdentity type is Root and you set an alias for your account, the userName field contains your account alias.
  - IAMUser
  - AssumedRole: The request was made with temporary security credentials that were obtained with a role via a call to the AWS STS AssumeRole API call.
  - FederatedUser: The request was made with temporary security credentials that were obtained via a call to the AWS STS GetFederationToken API
  - AWSAccount:
  - AWSService: The request was made by an AWS service.

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

### IAM

- particularly useful in seeing why an api called failed
  - which service, action and policy was used

### cloudwatch

- its all about setting alarms when changes are made against production resources

### athena

- for running deeper analysis on trails saved to s3

### lambda

- default logging is for control plane (mgmt) events
- optional logging: can turn on data event logging for tracking every time lambda fns are invoked

### api gateway

### Key Management Service (KMS)

- usage of managed keys are recorded in cloudtrail
- inspect whos making the request, services used, actions performed, parameters for the action and response elements returned

### s3

- can track object level data events, e.g. uploads to a bucket
