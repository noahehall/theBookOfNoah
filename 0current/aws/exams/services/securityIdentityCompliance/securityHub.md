# Macie

- Automate AWS security checks and centralize security alerts

## my thoughts

## links

- [AAA best practices](https://aws.amazon.com/blogs/security/nine-aws-security-hub-best-practices/)
- [cloudwatch: automated response and remediation actions](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cloudwatch-events.html)
- [controls reference](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-fsbp-controls.html)
- [landing page](https://aws.amazon.com/security-hub/?did=ap_card&trk=ap_card)
- [security data format](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html)
- [security standards](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html)

## best practices

### anti patterns

## features

- Conduct Cloud Security Posture Management (CSPM)
- simplify compliance management with built in mapping capabilities for common frameworks like CIS, PCI DSS
- Initiate Security Orchestration, Automation, and Response (SOAR) workflows
- data ingestion into your Security Information and Event Management (SIEM), ticketing, and other tools
- automate compliance checks across all of your AWS resources

### pricing

- priced along three dimensions per month
  - quantity of security checks
  - quantity of finding ingestion events
  - quantity of rule evaluations processed
- tiered pricing for AWS organizations

## basics

- its the centralized hub for a security team to operate across the entire stack
  - collect security data
  - organize and prioritize findings
  - visualizations
  - compliance checks
- performs security best practice checks and ingests security findings from AWS security services and partners
- combines the results of the security checks with findings from other services and partner security tools to give you a comprehensive view of your security posture, dashboards that aggregate security findings, and remediation recommendations for identified issues
- general workflow
  - enable security hub in all of your accounts
  - it will ingest and analyze findings from other AWS security services & partner network integrations
  - conducts automated compliance scans and checks
  - provides its findings and prebuild dashboards to you for remediation
- security hub vs SIEM tools
  - security hub only focuses on AWS findings, while SIEM tools have a broader reach
  - security hub has compliance checks
  - multi account integration, multiple child accounts can push to an admin account

### multi account integration

- security hub is regional, so you will need a master security hub in each region
- it doesnt transfer data outside of the master region

### compliance standards

- based on CIS AWS foundation benchmarks
- findings are displayed on the main dashboard
- best practice information is also provided to help mitigate issues

### insights

- findings that are correlated and grouped for prioritizatoin
- more than 100 prebuilt insights
- ability to create your own
- dashboard provides visibility into top insights, which you can click into and drill down

## considerations

## integrations

- generally all of your security related operations should flow into security hub
- most security related services have native security hub integrations even if not listed here

### lambda

- can be triggered to auto fix innappropriate resource configuration

### Cloudwatch

- send security events as custom events to cloudwatch
- cloud watch events + lambda to automate remediation steps for specific findings

### eventbridge

### macie

### inspector

### guardduty

### partner network

- splunk, mcafee, semantic
- internal tools can also publish to security hub

### fireall manager

### IAM

- access analyzer
