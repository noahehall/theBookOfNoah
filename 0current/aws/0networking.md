# TLDR

vpc, gateways, route tables, subnets, load balancers

## links

- route53
  - [making amazon route53 the DNS service for an existing domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html)
  - [making route53 the dns for a domain thats in use](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html)
  - [making route53 the dns for an inactive domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-inactive.html)
- vpc
  - [working with VPCs](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html)
  - [reachability analyzer](https://docs.aws.amazon.com/vpc/latest/reachability/what-is-reachability-analyzer.html)
  - [vpc costs](https://aws.amazon.com/vpc/pricing/)
  - tuts
    - [deleting a VPC](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html#VPC_Deleting)

## vpc

- vpc: isolated network within your aws account
- subnets: a range of ips within a vpc
  - the larger the cidr, the smaller the number of ips
