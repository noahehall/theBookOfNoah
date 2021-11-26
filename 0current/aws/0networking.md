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

## basics

### best practices / gotchas

- always
  - create your own vpc
- sometimes
- never
- gotchas

## vpc

- vpc: isolated network within your aws account in a specific region

- subnets: a range of ips within a vpc
  - the larger the cidr, the smaller the number of ips
  - can contain public/private resources
    - private: for private resources
      - should point to the NAT GATEWAY in the public subnet
    - public: for public resources
      - should point to the internet gateway

- route tables: specify how traffic flows in/out of subnets
  - i.e. a router: directs traffic between subnets
    - e.g. specify how a resource in a private subnet can connect to something in a public subnet

- internet gateway: allows resources within a VPC access to the public internet

- NAT gateway: enable resources in a private subnet to initiate & connect to the public internet
  - network address translation
  - has to be contained in a public subnet

- egress-only internet gateway: allows VPC ipv6 outbound (but denies inbound)

- VPC endpoints: enable private access to other aws services without traversing the internet
  - uses the AWS internal network
    - e.g. to allow a public facing S3 bucket to connect to an app server in a private VPC subnet without using the public internet

- virtual private gateway: enable external resources to connect privately to resources within a vpc

- transit gateway: simplify network management across multiple VPCs &/ on premise data centers
  - Transit Gateway connects on-premises resources to VPCs using a centralized hub. VPC Peering connects VPCs with each other, DirectConnect provides dedicated bandwidth, and a site-to-site VPN is a software approach for securing traffic.

- customer gateway: CG: on premise; physical networking appliance, to which all aws bound network traffic is anchored
  - you buy it from like cisco
  - it creates the IPsec tunnel

- virtual private gateway: VPG: the virtual counterpart to a customer gateway; resides in aws; the anchor point for all customer gateway network traffic

- site-to-site vpn: enables machines in a local data center (e.g. within a customer gateway) to connect to aws resources (e.g. via a virtual private gateway)
  - network traffic flows securely over a vpn tunnel

- IPsec tunnel: internet protocol security vpn tunnel
  - needs an anchor configured on both sides to work
    - within aws: use a VPG and attach it to resources within AWS
    - on premise: use a CG:
    - the traffice is routed over the public internet

- direct connect: alternative to the IPsec tunnel architecture
  - purchased from AWS
  - dedicated network connection to AWS
  - establishes a physical link from the router you own, and an AWS direct connect router
    - the traffic is routed over AWS network (not the public)

- peering connection: establish connections between VPCs

- vpc peering: connect privately between AWS VPCs within different organizations
  - doesnt need a gateway/vpn connection
  - makes use of internal AWS routing infrastructure
  - connections can span regions

- DHCP option set: create your own DHCP options
  - e.g. specify your own DNS servers
  - a VPC can only have 1 DHCP option set

### default VPC

- components
  - vpc cidr block: `172.31.0.0/16` 65k ips
    - for all default vpcs in all regions
  - creates a subnet in each availability zone in its each region
    - has a cidr of `/20` 4k usable ips
  - internet gateway
  - route table:
    - single rule that sends all outband traffic to the internet gateway
  - security group:
  - network ACL: allows all in/out traffic

- use cases: where all ec2 instances get dumped if they arent assigned to a vpc

## route 53

- dns & traffic flow management
- name address resolution: nirv.ai > 123.123.123.123

- DNS failover: can detect website outage and redirect requests to a different IP
  - sends people to regionA, when it detects traffic failure, it can reroute to regionB

- global traffic management: create traffic policies that optimize network flow
  - weighted round robin: i.e send 60% of traffic to regionA, and 40% to regionB
  - latency-base routing: each DNS query will take the originating IP into account, compare the latency to available regions, and direct traffic to the one with the lowest latency
  - geolocation (geo dns) routing: route traffic to regions based on the originating IP
    - you have to configure a `default record resource set`
    - e.g. make application inaccessible from a specific country.

- private DNS for within AWS VPC
- cloudfront as the zone apex within route53
  - zone apex: a root domain (e.g. www.mycompany.com)
- s3 as the zone apex
- ELB as the zone apex
  - route53 will handle the health checks for each instance behind the ELB
