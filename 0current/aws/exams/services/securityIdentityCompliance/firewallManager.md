# Firewall Manager

- Centrally configure and manage firewall rules across your accounts

## my thoughts

## links

- [landing page](https://aws.amazon.com/firewall-manager/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- a central administrator account to manage firewall rules across multiple AWS accounts.
- Deploy managed rules, such as pre-configured WAF rules on your applications, across accounts.
- Automatically enforce your defined security policies across existing and newly created resources.
- Centrally deploy baseline security group rules to protect your virtual private clouds (VPCs).
- Enforce a primary set of security group rules with a common security group policy, while also deploying application-specific rules.
- Audit and clean unused or redundant security groups, and audit and control security group rules to identify high-risk rules.
- central visibility of attacks against their Application Load Balancers and Amazon CloudFront infrastructure

### pricing

- depends on the firewall type, generally a monthly fee per region, check the docs
  - WAF
  - shield
  - VPC security groups
  - Network Firewall
  - Route53 resolver DNS firewall
  - 3rd party firewalls
- add an additional cost for aws config

## basics

## considerations

## integrations
