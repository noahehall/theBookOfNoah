# config

- assess, audit and evaluate aws resource configurations against a set of rules

## my thoughts

## links

- [landing page](https://aws.amazon.com/config/?did=ap_card&trk=ap_card)
- [concepts](https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html)

## best practices

- there are many prebuilt rules you can use for various AWS resources
  - in addition to prebuilt remediation actions

### anti patterns

## features

- assess, monitor and record resource configuration changes
- audit and evaluate compliance resource configurations against your organizations policies
- Evaluate resource configurations for potential vulnerabilities, and review your configuration history after potential incidents to examine your security posture.
- operational troubleshooting and change management
- get a snapshot view of how resources are configured and create rules to enforce a compliant state
- Discover resources that exist in your account or publish the configuration data of third-party resources into AWS Config, record their configurations, and capture any changes to quickly troubleshoot operational issues.
- Codify your compliance requirements as AWS Config rules and author remediation actions, automating the assessment of your resource configurations across your organization.
- correlate configuration changes with account events

### pricing

- based on the number of
  - configuration items recorded
  - active rule evaluations
  - conformance pack evaluations

## terms

## basics

- config rule: represents a configuration setting for specific resources/entire account
  - resources in violation of rules are flagged and SNS notificaitons are delivered

## considerations

## integrations

- basically all resource configuration settings can have Config rules enforcement

### cloudwatch

- its all about setting alarms for specific events against production resources

### lambda

- rules concerning runtime environment, handler name, code size, memory allocation, timeout/concurrency settings, execution role, etc
