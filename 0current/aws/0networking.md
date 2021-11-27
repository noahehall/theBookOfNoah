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

- bastion host: a server that provides access to a private network from an external network (e.g. the internet)

### best practices

- always
  - never use any of the default resources (vpc, subnets, security groups, etc)
    - except the default `dhcp options set`
      - this is the aws dns config
    - go in an and set a name `default-dont-use` to all resources
  - pick the right vpc cidr block (it cant be changed later), e.g. use `192.168.0.0/22` (or another ip, but /22 is good)
  - review the dashboards:
    - vpc: provides a holistic view of all VPC components in all regions
      - can also drill down to a specific region
    - ec2: the deashboard also provides a hostlic view
  - setup new Network ACL on your VPCs to deny traffic on ports your not using, from IPs your not expecting
    - NACLs are the only way to set deny rules, and take precedence over security groups
    - ^ especiialy deny inbound traffic to databases & internal apps
    - you can permit TCP outbound traffic on ports `32768-61000` to catch all linux ephemeral ports
- sometimes
  - enable ssh & ICMP from anywhere while debugging
- never
  - delete the default VPC
    - renders some services unusable
    - if you do, [recreate it via the cli](https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-vpc)

### gotchas

- securing traffic
  - public internet > internet gateway > VPC > NACL > subnet > route table > security group > some resource
- network traffic
  - in a public/private subnet?
  - how are subnet routetables configured?
  - how are network ACLs configured?
  - how are the security group configured?
- subbnets
  - aws reserves the first 3 ips in every subnet for internal routing purposes
  - subnets not explicitly associated with a route table, end up in the VPCs main route table
  - you cannot alter the default route table that allows traffic on the same subnet
    - so any resource to resource connectivity problems must be at the security group level
- security groups
  - are region specific
  - treats internal AWS resources as external resources if the traffic flows on the public internet
    - thus you need to specifically allow other AWS resources (even in the same VPC) access via the security groups
      - do this by adding linking security groups, each attached to the resources you want to connect, add an inbound rule to the one receiving the connection, permitting the security group sending the connection
    - or you can connect them (e.g. via PrivateLink) using the internal AWS network
- vpc peering
  - The IP space cannot overlap.
  - after creating the VPC peer in one VPC, you have to accept the request in the other
  - basic workflow: Configure VPC peering and the appropriate security group/NACL/route table settings.

## security groups

- tool to control inbound & outbound network traffic to resources in AWS
- work at the component level: only apply to the specific resources they are assigned to (e.g. a specific ec2 instance)
- like a virtual firewall for various resources to control inbound/outbound traffic
  - have separate inbound & outbound rules
    - by default
      - all outbound is permitted
      - and all inbound is blocked
  - only suppors allow rules (i.e. you block traffic)
  - are stateful
    - if you send a request from an instance, the response is allowed to flow in regardless of rules
      - so make sure you dont connect to vulnerable hosts
  - performance considerations: the more rules you apply, the greater the impact
    - defaults
      - 2500 security groups per VPC
      - 5 security groups per network interface
      - each security group can have 60 inbound + 60 outbound rules (total 120)
        - caleculated independnetly for ipv4 and ipv6

### security group considerations

- type
- protocol
- port range
- source

- ec2
  - to connect to instances, ensure ssh is enabled

## vpc

- vpc: isolated network within your aws account in a specific region
  - as big as a /16 and as small as a /28
    - the vpc cidr/block is called the `super net`, as it contains all IPs for all subnets, and thus all resources
    - ^ e.g *the 10.0 super net*, or the *198.0 super net*
      - ^ as *192.0.1* would be a specific subnet, and *192.0.1.0* would be a specific host

- subnets: a range (subset) of ips within a vpc
  - the larger the cidr, the smaller the number of ips
  - can contain public/private resources
    - private: for private resources
      - should point to the NAT GATEWAY in the public subnet
    - public: for public resources
      - should point to the internet gateway

- route tables: specify how vpc traffic flows in/out of subnets
  - controls subnet routing directs traffic between subnets
    - e.g. specify how a resource in a private subnet can connect to something in a public subnet
  - default route table: can be modified but not deleted

- internet gateway: allows resources within a VPC access to the public internet
  - redundancy built in
  - highly available (i.e. you only need 1 per vpc)
  - configure subnet route tables to use the internet gateway
  - provides NAT for instances with a public IP

- NAT gateway: enable resources in a private subnet to initiate & connect to the public internet
  - requires an EIP
    - useful for providing a consistent resource for apps & end users
    - if an ec2/etc fails, you can reassign the IP
  - network address translation
  - has to be contained in a public subnet
  - map multiple private hosts to a single internet routable IP address
  - nat instance
    - you create an ec2 within a public subnet,
    - have to manage the server yourself: updates, patches, security, etc
    - more operational responsbility & flexibility
    - use cases
      - able to specify a private IP
      - supports port forwarding
      - acts as a bastion host
  - nat gateway (the managed service)
    - you dont have to do anything
    - use cases
      - bandwidth can burst up to 456bps
      - aws auto assigns a private IP from the subnet pool
        - your infrastructure design should not be dependent on specific private IPs anyway
      - does not support port forwarding
      - inbound SSH via nat isnt supported
      - more expensive (but think about the time saved too)

- egress-only internet gateway: allows VPC ipv6 outbound (but denies inbound)

- VPC endpoints: enable resources within a VPC to privately access other AWS services without traversing the public internet
  - PrivateLink: uses the internal aws network instead of the public internet
    - per hourly charges
    - per GB charges
  - use cases
    - private access: if one vpc service needs to talk to another service, just use privatelink
    - simplifies network configuration (dont need an internet gateway)
    - improved secuirty posture (less configuration, no public internet)
  - types
    - interface:
      - powered by AWS PriateLink
      - use an elastic interface (ENI) as an entry point for traffice destined to the service
      - typically accessed using public/private dns name associated with the service
    - gateway load balancer
      - powered by AWS PriateLink
      - use an elastic interface (ENI) as an entry point for traffice destined to the service
      - serve as a target for a route in a route table for traffic destined for the service
    - gateway
      - serve as a target for a route in a route table for traffic destined for the service

- virtual private gateway: enable external resources to connect privately to resources within a vpc

- transit gateway: simplify network management across multiple VPCs &/ on premise data centers
  - Transit Gateway connects on-premises resources to VPCs using a centralized hub. VPC Peering connects VPCs with each other, DirectConnect provides dedicated bandwidth, and a site-to-site VPN is a software approach for securing traffic.
  - use cases
    - centralizes & simplifies regional network management for a given region in single hub
      - ^ implements a HUB (the transit gateway) and SPOKE (vpcs, on premise data centers, etc) model
    - everything is connected to the HUB which manages the route configuration
    - works with multiple VPCs to manage traffic between them
    - can be peered across multiple AWS accounts
    - works with multiple VPN connections
    - works with AWS direct connect gateway
    - improved security posture
      - uses AWS internal infrastructure so all connections are private
      - peered connection traffic is encrypted
      - highly available
    - billed per hour, & per gb
      - only use for complex setups

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

- vpc peering: connect privately between AWS VPCs (within same/diff accounts/organizations)
  - doesnt need a gateway/vpn connection
  - makes use of internal AWS routing infrastructure
  - connections can span regions, accounts, organizations

- DHCP option set: dynamic host configuration protocol
  - pass config info to hosts on a TCP/IP network
    - e.g. domain name, domain name server, etc
  - e.g. specify your own DNS servers
  - a VPC can only have 1 DHCP option set

- network ACL: access control lists (pronounced NACL) (are real firewalls unlike security groups)
  - are specific to a single VPC
  - have 1:M relationship with subnets, 1 nacle: many subnets
  - are stateless: rules to allow network traffic must be explicitly configured
    - have allow & deny traffic rules (unlike security groups which only allow)
    - have an implicit deny
      - so for each inbound allow, you may have to create an outbound allow as well (and vice versa)
  - rules are processed in numerical order
    - the first successful rule stops the processing chain
  - default NACL created with a new vpc
    - permit all traffic in both directions (encourages use of security groups)

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

### creating VPCs

- vpc templates: click `launch vpc wizard` on the vpc dashboard
  - `vpc with a single subnet`
  - `vpc with public and private subnets`
  - `vpc with public and private subnets and hardware vpn access`
  - `vpc with a private subnet only and hardware vpn access`

### vpc considerations

- vpc
  - ipv4 cidr block
  - ipv6 cidr block
  - tenancy
  - vpc peering
    - subnet
      - route table
  - private dns (route 53)

- internet gateway
  - vpc

- vpc endpoints
  - type
  - aws service
  - vpc
  - route table
  - subnets
  - policy: what type of permissions do you want to provide to services using this endpoint to have for the AWS service the endpoint is associated with
    - never do the default policy (which is full access)

- route table
  - destination (ip addr range e.g. 0.0.0.0/0)
  - target (resource e.g. internet gateway id)
- network acl (pronounced NACL)
- subnets
  - public
    - internet gateway
    - route table
  - private
    - nat instance|natgateway
    - route table
  - vpc
  - availability zone
  - ipv4 cidr block
    - allocate a section of the VPC cidr
    - you generally need more IPs for private subnets
  - vpc endpoints

- transit gateway
  - attachment: what can be connected
  - route table
    - 1:M with attachment
  - associations
  - route propagation
    - routes dynamically propagated to route tables
    - ^ but vpcs require static routes with transit gateways

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

- private DNS for a VPC: dns level routing
  - domains can have public, and multiple private hosted zones
    - public: for public internet traffic
    - private: for internal AWS traffic
      - e.g. if you want an alternative version of a site for IPs originating from a VPC
      - a single domain routing requests to multiple VPCs/different resources in the same VPC
      - `enableDnsHostnames` and `enableDnsSupport` must be true in the VPC config
  - use cases
    - setting up prod, dev, staging at the *same* domain
    - let you test new application version without affecting production
  - steps
    - create a private hosted zone that points to a VPC
    - create a simple A record pointing to a **private** IP address within the VPC

- cloudfront as the zone apex within route53
  - zone apex: a root domain (e.g. www.mycompany.com)
- s3 as the zone apex
- ELB as the zone apex
  - route53 will handle the health checks for each instance behind the ELB

- hosted zones: all the domains you managed with route 53
  - SOA: start of authority
  - NS: name records
  - record sets: where should the domain be routed? for what type of request?
    - A: ipv4 address
      - create an EIP
      - associate it with an ec2 instance
      - update the A record(s) to point to this new EIP
      - wait for DNS to propagate
    - CNAME: canonical name
    - MX: mail exchange
    - AAAA: ipv6 address
    - TXT: text
    - PTR: pointer
    - SRV: service locator
    - SPF: sender policy fframework
    - NAPTR: name authority pointer
    - CAA: certification authority authorization
    - NS: name server

- Alias resource record set: aws specific extension to DNS
  - alias cant point to any of the following (quick create record > a record > alias radio button)
    - s3 bucket thats configured to host a static website
    - elastic load balancer: e.g. when you have multiple ec2 instances behind the elb
      - make app level changes, alter azs, incorporate autoscaling groups, etc. without reconfiguring DNS
    - cloudfront distribution
    - elastic beanstalk environment
    - api gateway
    - VPC interface endpoint
  - manage the domain in route53

## elastic ip

- free if used with a running instance
  - you just pay for the instance
- static IP that can be associated with an ec2 instance
- can move eip from one ec2 to another
  - software defined networking (SDN) at its finest
- can be moved across VPCs
  - helpful for blue/green deployments
- cannot be moved across regions

## cloud front

- content delivery network
  - caches resources in AWS global edge network
  - helps make regional resources (e.g. objects in s3) globally available
- use cases
  - low latency performance on a global scale
  - integrated security
    - shield advance + web application firewall
  - edge computing: customize how an application behaves based on location
    - also requires lambda
  - deep integration with other AWS services
  - data from other aws services (e.g. s3 webhosting) into cloud front is at no cost
- origin server: where cloudfront copies source resources (e.g. s3/ec2)
  - but can be external to AWS (but it costs more)
- origin group: a primary + secondary origin servers
- cache policy: how frequently cloudfront checks with the origin server for updates
- price classes: each edge location has different prices
- delivered logs to s3/kinesis data stream

- reporting
  - cache statistics
    - select your cdn
    - good reports
      - total requests
      - percentage of viewer requests by type
  - popular objects
    - select your cdn
    - the right most columns containing the 2xx,3xx, etc are wher eyou hould focuse
  - top referers
    - select your cdn
    - not specified: direct hits (e.g. a curl or typing the domain directly)
  - usage
    - select your cdn
    - number of requests
    - data transfered by protocol
      - (drives cost)
  - viewers section
    - select your cdn
    - devices tab
    - browsers tab
    - locations tab
    - operating systems tab

- blocking requests by location
  - go to a distribution
  - restrictions tab
  - enable geo restriction
    - no additional cost
    - whitelist / blacklist specific countries

### cloudfront considerations

- origin
  - origin domain
  - origin path: e.g. subdir in an s3 bucket
  - name: e.g. an s3 bucket
  - s3 bucket access
  - custom headers
  - origin shield: additional caching layer
  - connection attempts: i.e. to origin server content
  - connection timeout: i.e. to origin server content
  - response timeout
  - keep-alive timeout
- default cache behavior
  - path pattern
  - compress objects automatically
- viewer
  - viewer protocol policy
  - allowed http methods
  - restrict viewer access
- cache key and origin requests
  - cache policy and origin request policy
    - cache policy: e.g. cachingOptmized for s3
    - origin request policy: e.g. cors-s3origin
  - legacy cache settings
    - dont use this one unless necessary
- response headers policy: e.g. cors with preflight + security headers policy
- smooth streaming
- field-level encryption
- realtime logs
- function associations (lambda)
- price class
- amazon WAF web ACL
- alternative domain name
- custom SSL ert
- supported HTTP versions
- default root object: e.g. an index.html
- standard loggin
- ipv6
