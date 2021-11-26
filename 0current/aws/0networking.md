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

- vpc: isolated network within your aws account in a specific region

- subnets: a range of ips within a vpc
  - the larger the cidr, the smaller the number of ips
  - can contain public/private resources

- route tables: specify how traffic flows in/out of subnets

- internet gateway: allows VPCs access to the public internet

- NAT gateway: enable resources in a private subnet connect to the public internet
  - network address translation

- egress-only internet gateway: allows VPC ipv6 outbound (but denies inbound)

- VPC endpoints: enable private access to other aws services without traversing the internet

- virtual private gateway: enable external resources to connect privately to resources within a vpc

- transit gateway: simplify network management across multiple VPCs &/ local data centers

- peering connection: establish connections between VPCs

- DHCP option set: create your own DHCP options
  - e.g. specify your own DNS servers
  - a VPC can only have 1 DHCP option set

## route 53

- dns & traffic flow management
