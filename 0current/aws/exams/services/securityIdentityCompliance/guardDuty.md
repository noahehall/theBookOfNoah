# Guard Duty

- Protect your AWS accounts with intelligent threat detection
- analyzes continuous streams of metadata generated from your account and network activity found in CloudTrail events, Amazon Virtual Private Cloud (Amazon VPC) flow logs, and Domain Name System (DNS) logs
- uses integrated threat intelligence such as known malicious IP addresses, anomaly detection, and machine learning to identify threats more accurately.

## my thoughts

## links

- [landing page](https://aws.amazon.com/guardduty/?did=ap_card&trk=ap_card)
- [benchmark and prioritize security threats](https://aws.amazon.com/blogs/apn/how-to-benchmark-and-prioritize-security-threats-in-amazon-guardduty-using-sumo-logic/)
- [visualize guard duty findings](https://aws.amazon.com/blogs/security/how-to-visualize-amazon-guardduty-findings-serverless-edition/)
- [multi account guardduty youtube](https://www.youtube.com/watch?v=t80i_B-7G1M)
- [integrate with AWS partner network products youtube](https://www.youtube.com/watch?v=DygpSx1e3Dg)

## best practices

### anti patterns

## features

- monitor your AWS accounts, instances, serverless and container workloads, users, databases, and storage for potential threats
- anomaly detection, ML, behavioral modeling, and threat intelligence feeds from AWS and leading third parties.
- Scan Amazon Elastic Block Store (EBS) for files that might have malware creating suspicious
- identify and profile possible malicious or suspicious behavior in container workloads by analyzing Amazon EKS audit logs and container runtime activity.
- Receive findings with context, metadata, and impacted resource details

### pricing

- prices are based on the volume of service logs, events, workloads, or data analyzed.
- pricing tiers include foundational pricing, which is the default level of service coverage, as well as optional protection plans pricing
  - s3
  - eks
  - malware
  - RDS
  - lambda

## basics

- go to the guardduty screen > enable it to grant permissions to monitor your account
  - cloudtrail logs
  - vpc logs
  - dns queries

### common threats it detects

- generally pen testing mechanisms
- port scanning
- brute force attacks
- bitcoin mining
- dns xfiltration
- conecting to malicious sites/downloading maliclious files
- unusual traffic volumes, instance launches, unfamiliar activity
- guard duty consumes feeds from top cyber security sites to continuoully update its db of known attacks
  - crowd strike, tor exit nodes, Proofpoint, and the AWS security teams

### unknown/anomoly threat detetion

- algorithms detect unusual behavior
  - inspecting signal patterns for signatures
  - profiling normal and looking for deviations, suspicious or malicious activity
  - machine learning classifiers

### Findings

- detailed and actional reports on potential concerning activity in your account
- provides a lot of metadata about the threat, whether its inbound/outbound, the specific resources, etc
- you can archive findings when they are no longer relavent

### Accounts

- teams can integrate multiple accounts, with one designated as the Central account
- all member accounts findings can be aggregated with a GuardDuty administrator account
- enables the security team to manage all GuardDuty findings from across the organization in one single account.

## considerations

## integrations

### cloud watch events

- all the findings are pushed to cloudwatch events
- from there you can create and customize reports, alarms and trigger lambda fns for automatica remediation

### IAM

- use AWS Identity and Access Management (IAM) Access Analyzer to identify resources that can be accessed from outside an AWS account.

### Security Hub

### EventBridge
