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
- correlate configuration changes with account events
- get a snapshot view of how resources are configured and create rules to enforce a compliant state

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
