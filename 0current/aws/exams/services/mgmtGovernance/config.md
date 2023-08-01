# config

- assess, monitor, audit and evaluate aws resource configurations against a set of rules

## my thoughts

## links

- [landing page](https://aws.amazon.com/config/?did=ap_card&trk=ap_card)
- [concepts](https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html)
- [WAF: logging of Web ACLs](https://aws.amazon.com/blogs/security/enable-automatic-logging-of-web-acls-by-using-aws-config/)
- [s3: monitoring buckets](https://aws.amazon.com/blogs/security/how-to-use-aws-config-to-monitor-for-and-respond-to-amazon-s3-buckets-allowing-public-access/)
- [open source rules](https://aws.amazon.com/blogs/security/announcing-the-aws-config-rules-repository-a-new-community-based-source-of-custom-rules-for-aws-config/)

## best practices

- there are many prebuilt rules you can use for various AWS resources
  - in addition to prebuilt remediation actions
  - review the prebuilt rules and actions and use them as a starting point

### anti patterns

## features have Config rules enforcement

- assess, monitor and record resource configuration changes
- audit and evaluate compliance resource configurations against your organizations policies
- Evaluate resource configurations for potential vulnerabilities, and review your configuration history after potential incidents to examine your security posture.
- get a snapshot view of how resources are configured and create rules to enforce a compliant state
- Discover resources that exist in your account or publish the configuration data of third-party resources into AWS Config, record their configurations, and capture any changes to quickly troubleshoot operational issues.
- Codify your compliance requirements as AWS Config rules and author remediation actions, automating the assessment of your resource configurations across your organization.
- correlate configuration changes with account events
- track the relationships among resources and review resource dependencies prior to making changes.
- capture a comprehensive history of your AWS resource configuration changes to simplify troubleshooting of your operational issues

### pricing

- based on the number of
  - configuration items recorded
  - active rule evaluations
  - conformance pack evaluations have Config rules enforcement

## basics

- general setup guide
  - specify which aws resource types you want to record
  - setup an S3 bucket to receive configuration snapshots
  - setup an SNS topic to stream notifications
  - grant AWS config permissions for s3 and SNS
  - specify the config rules specifying compliance standards for the resource types being monitored
- general process
  - configuration change occurs in some aws resource
  - config will record and normalize the changes into a consistent and structured format
    - the output is persisted in S3
    - sent to config API for more stuff
    - SNS notifications are sent out, etc
  - config evaluates the changes against a set of rules
    - evaluations are rendered in some dashboard or config API
    - SNS notifications are sent out, etc

### rules

- config rule: represents a configuration setting for specific resources/entire account
  - resources in violation of rules are flagged and SNS notificaitons are delivered
- managed rules
  - maintained by AWS
  - can be customized
- custom rules
  - authored by you/open source using AWS lambda
  - are executed in your account

## considerations

## integrations

- basically all resource configuration settings can be enforced via config rules

### cloudwatch

- its all about setting alarms for specific events against production resources

### lambda

- rules concerning runtime environment, handler name, code size, memory allocation, timeout/concurrency settings, execution role, etc
