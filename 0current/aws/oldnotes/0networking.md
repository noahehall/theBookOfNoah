# Networking

- vpc, gateways, route tables, subnets, load balancers (ELB, ALB, NLB), cloudfront, global accelerator, security groups, network acls, route53, elastic ip,

## TLDR

- you generally want to start with Route53 -> VPCs

## links

- [vpn](https://aws.amazon.com/vpn/?did=ap_card&trk=ap_card)
- [elastic load balancer](https://aws.amazon.com/elasticloadbalancing/?did=ap_card&trk=ap_card)
- [transit gateway](https://aws.amazon.com/transit-gateway/?did=ap_card&trk=ap_card)
- [global accelerator](https://aws.amazon.com/global-accelerator/?did=ap_card&trk=ap_card)
- [cloud map](https://aws.amazon.com/cloud-map/?did=ap_card&trk=ap_card)
- [app mesh](https://aws.amazon.com/app-mesh/?did=ap_card&trk=ap_card)
- [cloudfront](https://aws.amazon.com/cloudfront/?did=ap_card&trk=ap_card)
- [ingress vs egress](https://www.dictionary.com/e/ingress-vs-egress/)
- [vpc](https://aws.amazon.com/vpc/?did=ap_card&trk=ap_card)
- [route53](https://aws.amazon.com/route53/?did=ap_card&trk=ap_card)
- [route53 making amazon route53 the DNS service for an existing domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html)
- [route53 the dns for a domain thats in use](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html)
- [route53 the dns for an inactive domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-inactive.html)
- [route53 create a new subdomain](https://aws.amazon.com/premiumsupport/knowledge-center/create-subdomain-route-53/)
- [vpc working with VPCs](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html)
- [vpc reachability analyzer](https://docs.aws.amazon.com/vpc/latest/reachability/what-is-reachability-analyzer.html)
- [vpc costs](https://aws.amazon.com/vpc/pricing/)

### tuts

- [deleting a VPC](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html#VPC_Deleting)
- internet gatway
  - [connect to the net](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)
- route table
  - [configure route tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html#gateway-route-tables)
  - [working with route tables](https://docs.aws.amazon.com/vpc/latest/userguide/WorkWithRouteTables.html)
- network acl
  - [default network acl configuration](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html#default-network-acl)

## basics

- bastion host: a server that provides access to a private network from an external network

### best practices / gotchas

- always
  - use immutable infrastructure
    - never patch/update resources, always create new, and force your architecture & dev cycle to support the dynamic destroying and creation of resources via service discovery
    - put an EIP infront of production services to enable blue/green deployments & failover strategies
  - never use any of the default resources (vpc, subnets, security groups, etc)
    - except the default `dhcp options set`
      - this is the aws dns config
    - go in an and set a name `default-dont-use` to all resources
  - pick the right vpc cidr block (it cant be changed later), e.g. use `192.168.0.0/22` (or another ip, but /22 is good)
  - review the dashboards:
    - vpc: provides a holistic view of all VPC components in all regions
      - can also drill down to a specific region
    - ec2: the dashboard also provides a holistic view
  - setup new Network ACL on your VPCs to deny traffic on ports your not using, from IPs your not expecting
    - NACLs are the only way to set deny rules, and take precedence over security groups
    - ^ important for denying inbound traffic to databases & internal apps
    - you can permit TCP outbound traffic on ports `32768-61000` to catch all linux ephemeral ports
  - for high availability
    - create subnets in different availability zones
    - each subnet containing duplicate resources (e.g. a node application)
    - create a target group pointing to each resource
    - point a load balancer at the target group
- sometimes
  - enable ssh & ICMP (ping) from anywhere while debugging
  - for absolute speed & security, stay off the public internet
- never
  - delete the default VPC
    - renders some services unusable
    - if you do, [recreate it via the cli](https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-vpc)

#### gotchas

- troubleshooting connectivity
  - connecting to AWS resources
    - anything in your local environment? e.g. firewalls, network settings, etc
    - aws resource in a private subnet? you need a bastion host/private tunnel into the private subnet
    - aws resource in a public subnet?
      - does the resouce have a public IP? remember, the internal IP is only for internal AWS resources
      - what type of Public IP? e.g. is it an EIP?
    - what are the security group settings?
      - they have to allow the protocol & port your using
      - also confirm theres an outbound rule thats appropriate
    - what are the NACLs? the nacl has to explicitly allow (both in and out) the protocol and port your using
    - what are the route tables? there needs to be a route whose destination is the public internet & target is an internet gateway
    - load balancer health checks?
  - useful tools
    - vpc flow logs
    - cloudwatch logs (for load balancers)
- securing traffic
  - public internet > internet gateway > VPC > NACL > subnet > route table > security group > some resource
- network traffic
  - in a public/private subnet?
  - how are subnet routetables configured?
  - how are network ACLs configured?
  - how are the security group configured?
- subnets
  - aws reserves the first 3 ips in every subnet for internal routing purposes
  - subnets not explicitly associated with a route table, end up in the VPCs main route table
  - you cannot alter the default route table that allows traffic on the same subnet
    - so any resource to resource connectivity problems must be at the security group level
- security groups
  - are region specific
  - treats internal AWS resources as external resources if the traffic flows on the public internet
    - thus you need to specifically allow other AWS resources (even in the same VPC) access via the security groups
      - do this by adding/linking security groups, each attached to the resources you want to connect, add an inbound rule to the one receiving the connection, permitting the security group sending the connection
    - or you can connect them (e.g. via PrivateLink) using the internal AWS network
- vpc peering
  - The IP space cannot overlap.
  - after creating the VPC peer in one VPC, you have to accept the request in the other
  - basic workflow: Configure VPC peering and the appropriate security group/NACL/route table settings.
- [route53, s3, and cloudfront](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/RoutingToS3Bucket.html)
  - s3 buckets must be configured correctly
  - sometimes you need a CDN in front of the s3 bucket(s) and point route53 to it
- [route53 & cdns](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html)
  - the cdn distribution must contain an alternate domain name matching the one in route53
  - To add an alternate domain name (CNAME) to a CloudFront distribution, you must attach a trusted certificate that validates your authorization to use the domain name

## security groups

- tool to control inbound & outbound network traffic to resources in AWS
- work at the component level: only apply to the specific resources they are assigned to (e.g. a specific ec2 instance)
- like a virtual firewall for various resources to control inbound/outbound traffic
  - by default all inbound traffic is blocked & outbound traffic permitted
  - you have to specifically add allow rules for inbound traffic
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

- gotchases
  - to connect to resources on a private subnet requires a private network using an SSH client or the EC2 Instance Connect CLI
- vpc: isolated network within your aws account in a specific region
  - as big as /16 and as small as /28
    - the vpc cidr/block is called the `super net`, as it contains all IPs for all subnets, and thus all resources
    - ^ e.g the `10.0` super net, or the `198.0` super net
    - ^ `192.0.1` would be a specific subnet, and `192.0.1.0` would be a specific host

### subnet

- a range (subset) of ips within a vpc
- the larger the /cidr, the smaller the number of ips just like a fraction
- can contain public/private resources
  - private: for private resources
    - should point to the NAT GATEWAY in the public subnet for translating a resources private IP into a public one
  - public: for public resources
    - should point to the internet gateway to enable inbound/outbound traffic on the public net

### route tables

- specify how vpc traffic flows in/out of subnets
  - controls subnet routing & directs traffic between subnets
    - e.g. specify how a resource in a private subnet can connect to something in a public subnet
  - default route table: can be modified but not deleted
- internet gateway: allows resources within a VPC access to the public internet
  - redundancy built in
  - highly available (i.e. you only need 1 per vpc)
  - configure subnet route tables to use the internet gateway
  - provides NAT for instances with a public IP

### NAT gateway (managed):

- network address translation; enable resources in a private subnet to initiate & connect to the public internet
  - requires an EIP
    - useful for providing a consistent resource for apps & end users
    - if an ec2/resource fails, you can reassign the IP to another resource
  - has to be contained in a public subnet
  - map multiple private hosts to a single internet routable IP address
  - nat instance (unmanaged)
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

### egress-only internet gateway:

- allows VPC ipv6 outbound (but denies inbound)

### VPC endpoints

- enable resources within a VPC to privately access other AWS services without traversing the public internet
- PrivateLink: uses the internal aws network instead of the public internet
  - per hourly charges
  - per GB charges
- use cases
  - private access: if one vpc service needs to talk to another service, just use privatelink
  - simplifies network configuration (dont need an internet gateway)
  - improved secuirty posture (less configuration, no public internet)
- types
  - interface:
    - powered by AWS PrivateLink
    - use an elastic interface (ENI) as an entry point for traffice destined to the service
    - typically accessed using public/private dns name associated with the service
  - gateway load balancer
    - powered by AWS PrivateLink
    - use an elastic interface (ENI) as an entry point for traffic destined to the service
    - serve as a target for a route in a route table for traffic destined for the service
  - gateway
    - serve as a target for a route in a route table for traffic destined for the service

### transit gateway

- simplify network management across multiple VPCs &/ on premise data centers
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

### customer gateway: CG

- on premise; physical networking appliance, to which all aws bound network traffic is anchored
  - you buy it from like cisco
  - it creates the IPsec tunnel

### virtual private gateway: VPG

- enable external resources to connect privately to resources within a vpc
  - the virtual counterpart to a customer gateway; resides in aws; the anchor point for all customer gateway network traffic

### site-to-site vpn

- enables machines in a local data center (e.g. within a customer gateway) to connect to aws resources (e.g. via a virtual private gateway)
  - network traffic flows securely over a vpn tunnel

### IPsec tunnel:

- internet protocol security vpn tunnel
- needs an anchor configured on both sides to work
  - within aws: use a VPG and attach it to resources within AWS
  - on premise: use a CG:
  - the traffice is routed over the public internet

### direct connect:

- alternative to the IPsec tunnel architecture
  - purchased from AWS
  - dedicated network connection to AWS
  - establishes a physical link from the router you own, and an AWS direct connect router
    - the traffic is routed over AWS network (not the public)

### vpc peering

- connect privately between AWS VPCs (within same/diff accounts/organizations)
- doesnt need a gateway/vpn connection
- makes use of internal AWS routing infrastructure
- connections can span regions, accounts, organizations

### DHCP option set

- dynamic host configuration protocol
  - pass config info to hosts on a TCP/IP network
    - e.g. domain name, domain name server, etc
  - e.g. specify your own DNS servers
  - a VPC can only have 1 DHCP option set

### network ACL

- access control lists (pronounced NACL) (are real firewalls unlike security groups)
  - are specific to a single VPC
  - have 1:M relationship with subnets, 1 nacl has many subnets
  - are stateless: rules to allow network traffic must be explicitly configured
    - have allow & deny traffic rules (unlike security groups which only allow)
    - have an implicit deny
      - so for each inbound allow, you have to create an outbound allow as well (and vice versa)
  - rules are processed in numerical order
    - the first successful rule stops the processing chain
  - default NACL created with a new vpc
    - permit all traffic in both directions (encourages use of security groups)

### default VPC

- NEVER use or modify the default vpc
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
  - private dns (route53)
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

### route tables

- should have their own section here

## route53

- dns & traffic flow management
- can be configured to dynamically reroute traffic to overcome component failure across regions
- name address resolution: nirv.ai > 123.123.123.123
- DNS failover: can detect website outage and redirect requests to a different IP
  - sends people to regionA, when it detects traffic failure, it can reroute to regionB
- global traffic management: create traffic policies that optimize network flow
  - weighted round robin: i.e send 60% of traffic to regionA, and 40% to regionB
    - This option allows administrators to specify where the majority of traffic goes, so they can have more or less weight for each system.
  - latency-base routing: each DNS query will take the originating IP into account, compare the latency to available regions, and direct traffic to the one with the lowest latency
  - geolocation (geo dns) routing: route traffic to regions based on the originating IP
    - you have to configure a `default record resource set`
    - e.g. make application inaccessible from a specific country.
- private DNS for a VPC: dns level routing
  - domains can have public, and multiple private hosted zones
    - public: for public internet traffic
    - private: for internal AWS traffic
      - e.g. if you want an alternative version of a site for IPs originating from a particular VPC
      - a single domain routing requests to multiple VPCs/different resources in the same VPC
      - `enableDnsHostnames` and `enableDnsSupport` must be true in the VPC config
  - use cases
    - setting up prod, dev, staging at the same domain
    - let you test new application versions without affecting production
  - steps
    - create a private hosted zone that points to a VPC
    - create a simple A record pointing to a **private** IP address within the VPC
- cloudfront as the zone apex within route53
  - zone apex: a root domain (e.g. www.mycompany.com)
- s3 as the zone apex
- ELB as the zone apex
  - route53 will handle the health checks for each instance behind the ELB
- hosted zones: all the domains you managed with route53
  - SOA: start of authority
  - NS: name records
  - record sets: where should the domain be routed? for what type of request?
    - A: ipv4 address
      - create an EIP
      - associate it with an ec2 instance
      - update the A record(s) to point to this new EIP
      - wait for DNS to propagate
    - CNAME: canonical name, an alternative name for a domain name, e.g. poop.domain flush.domain
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
- health checks
  - endpoints, calculated health checks, and CloudWatch alarms can be produced using the route53 domain management health checks.
  - latency graph: useful for domains with a global audience
  - invert health check status: useful for a canary page that only appears when an error has manifested
  - failover: when a health check determines a failed resource, you can failover & activate an alternative set of DNS records to route traffic to backup resources
    - active
    - passive
  - 3 types
    - endpoint health check: domain name/ip address
      - based on http with/out string matching/tcp
      - responses
        - tcp: must be received in 10 seconds
        - http/s: must be received in 6 seconds
          - 4s allocated for establishing a connection
          - 2s for receiving a valid status code (2|3)xx
          - string matching: contained within the first 5120 bytes
            - optional
      - failure rates
        - user defined based on regions
        - valid: if > 18% agents evaluate as healthy
    - calculated health check: monitors other health checks
      - a parent health check monitors up to 255 child health checks
      - configurable logic as to what constitutes as a lack of health
        - e.g. an API thats dependent on another external API, you want BOTH apis to be successful
    - cloudwatch alarm: useful when failing over to another resource based on an preconfigured alarm
      - what are the conditions for triggering an unhealthy check?
        - is cloudwatch okay === rute53 health check is okay
        - if cloudwatch alarm === route53 is bad
        - if cloudwatch is insufficient === you can configure if the route53 health check is good/bad
- active routing options: traffic management policies
  - ensure health checks are setup and route53 will auto failover in case of outage
  - ensure autoscaling is configured for the resources to handle the increase load in the event of failover
  - weighted round-robin
    - route traffic to VPCs in different regions based on weights assigned to record sets
    - e.g. route 3:1 us-east:us-west === 3/4 -> useast, 1/4 -> uswest
  - latency based
    - route traffic to VPCs in different regions when response times are dynamic but load times are critical
    - each DNS query will take the originating IP into account, and compare the geo of the IP to the known latency of the regions of each VPC and route to the optimal resources
- geolocation based
  - route traffic based on correlating IP address to physical locations
  - e.g. to comply with EUGDP (data protections) or china, you have to route users in those geos to resources in those regions
    - this time, be sure failover occurs to regions in those geos, else you could be on your way to a big FINE buddy
  - you have to configure a default resource record set
    - otherwise AWS will return a no response in the event it cant map an IP to a physical location in a region

### route53 considerations

- health checks
  - sns: create alarms by posting to an sns topic
- dns records
  - active (route requests here)
  - backup (route requests here if active dns records have bad health checks)

## EIP elastic IP

- static, public IP for use within an AWS Account
- cannot be moved across regions
- use cases
  - critical for high availability
  - use in concert with cloudwatch alarms, SNS (notifications), and lambda (logic) to automate responses to system events and orchestrate event driven failover
- ec2
  - never associate directly to an EC2
    - always with a network interface, then you can move network interface between instances in 1 go and everything moves with it
  - can move eip from one ec2 to another
    - software defined networking (SDN) at its finest
    - the ec2 has to be in a subnet which is publiclly accessible
  - free if used with a running instance
    - you just pay for the instance
- vpc
  - can be moved across VPCs
    - helpful for blue/green deployments
- nat gateway
  - enable private resources to access public internet

## cloudfront

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
  - data from other aws services (e.g. s3 webhosting) into cloudfront is at no cost
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

## global accelerator

- use cases
  - for national/global infrastructure
  - isolate your infrastructure from general internet traffic patterns
  - routes network traffic using AWS global network
  - faster/more consistent network performance
  - you get 2 static IP addresses to direct all your endpoint traffic through
  - pay for access to a limited-access, relatively uncongested network highway
    - a flat hourly fee
    - cost per GB: which every direct has more % traffic
      - outbound traffic
      - inbound traffic
      - per region?
- global accelerator vs cloudfront
  - both
    - use the AWS global network to facilitate speed
  - accelerator
    - uses the aws global network to provide consistent network experience (i.e stable network paths & hops)
    - uses edge locations as an entry point to the AWS internal network.
    - **sends traffic directly to the origin service with no caching**
  - cloudfront
    - caches assets at edge locations
    - CloudFront distributes content via edge locations,
    - **reduces load on the origin service via caching**
- architecture
  - accelerator: basically a load balancer
  - listener: listens to inbound connections to the accelerator
    - specify the ports & protocols
  - endpoint groups: logical container for reosurces behind the accelerator
    - specify the regions where the resources exist
  - endpoints
    - application load balancers
    - elastic load balancers
    - network load balancers
    - eips
    - ec instances

### global accelerator considerations

- name
- type
  - standard
  - custom routing
- ip address type
- listeners
  - ports
  - protocol
  - clientaffinity
  - endpoint groups
    - region
    - traffic dials
  - endpoints
    - endpoint type (i.e. load balancers, ec2, eip)
    - endpoint info
    - weight

## api gateway

- The AWS API Gateway is used as a single point of access to services.
  - homogenous access to resource endpoints
  - facilitates management of API performance
  - route arbitrary (http/https/websocket) inbound requests to arbitrary aws services
  - front serverless (lambda) rest APIs behind an api gateway
  - front EBS behind an api gateway
  - api version management (via stages)
  - caching
  - fault tolerant component to accomodate thousands of concurrent requests
- costs
  - super cheap inbound ($5/millions of requests)
  - pricier for outbound (per gb)
- setup restrictions based on
  - rate limits
  - access controls
  - authorization via api keys
- http
  - query string params
  - request headers
  - json
  - xml
  - etc
- api keys
  - todo
- deploy: every change to API gateway requires the gateway to be redeployed
- resources: an API endpoint that routes to some aws resource. the resources become the API contract for end users
  - after creating a resource, you can add any HTTP method to it
    - the method can be associated with lambda fn, http, mock, aws service, vpc link
- deploy: after deploying, you will receive the endpoint to invoke
  - Missing Authentication Token error: basically means your hitting the wrong endpoint, or using the wrong METHOD
- lambda proxy integration: tells api gateway not to mangle the request details, but to pass the details on to the lambda function (very useful for POST method)
  - it will be available in `event.body`

### api gateway considerations

- api type
  - http api
  - rest api
  - private rest api
  - web socket
- import: use openapi swagger doc
- endpoint type
  - regional
  - edge optimized: for caching & cloudfront
  - private
- configure api gateway endpoint & resource
- stages (e.g. dev, staging, prod) become part of the api endpoint
  - auto deploy
  - very useful in point a specific api gateway stage to a lambda alias
    - you should define stage variables that match your lambda aliases, and use those stage variables as suffixes to your lambda calls
- logging
  - access logging
  - cloudwatch log group
- protect
  - route throttling
  - account throttling
  - both
    - rate limit
    - burst limit
- Route53 health checks

## load balancing (ec2 dashboard)

- load balancer: highly available component (you only need 1)
- mechanism for optimally routing requests to resources through a single service
- resources could be other servers that provide responses, or additional load balancers (e.g. specific to a set of resources)
- key elements
  - always add a route53 health check to your load balancer
  - external ELB for internet facing resources
  - internal ELB for private resources
- use cases
  - critical for high availability, fault tolerance, redundancy, etc
  - offload many uses cases at the ELB
    - SSL/TLS termination
    - certificate management (renewal & deployment)
    - oauth/IAM/firewal related things
    - resource health checks
    - session management via ELB generated cookies (critical for routing requests to the same backend resource that initiallly responded)
    - logging
    - etc

### ALB application load balancer

- operates at [network layer 7](https://avinetworks.com/glossary/layer-7/)

- use cases
  - HTTP/2 SUPPORT: allows multiple requests to be sent on a single connection
    - thus you can create health checks on per-port-basis
  - content-based routing: support multiple services behind a single load balancer via ec2 target groups
  - webscokets support: real time 2 way messaging over a long running tcp connection
  - container support: containers running directly on ec2 or the ec2-container service, can be fronted by an ALB
  - lambda support: specify lambda fns as ALB targets
  - connection draining: based on a configurable timeout, enables an EC2 scheduled for removal to complete any inflight requests without receiving any new ones from the ALB
  - fronting an autoscaling group (see provisioning file)

### NLB network load balancer

- operates at [network (tcp/udp) layer 4](https://www.a10networks.com/glossary/what-is-layer-4-of-the-osi-model/)

- use cases
  - highly scalable relative to ALB as NLB does less work
  - connection based routing: tcp/udp/tls; highly scalable vs ALB as the network layer does less work
    - you create a target group (ec2 dashboard), then add resources to it, then associate the ALB to point to the target group, and when people hit the ALB, it routes to the resources based on some setting
  - static/elastic IP address: by default the NLB provides a static IP per AZ
  - PrivateLink support: for onprem infrastructer with privatelink into AWS; use an NLB to balance TCP/TLS traffic
  - websockets support: same as ALB

### CLB Classic Load Balancer (original ELB)

- the oldest load balancing solution
- use an ALB/NLB for new applications
- use cases
  - support layer 4 and layer 7 but with fewer features than using ALB/NLB directly
  - useful for existing customers who already have ELB implemented

### target groups (ec2 dashboard)

- route to a group of ec2 instances/IP/lambda fns based on host, path, http header, http method, query param, source IP cidr
- perform health checks on the targets

## app mesh

- application-level networking

## cloud map

- service discovery

## elastic load balancing ELB

- automatically distributes incoming application traffic across multiple targets and virtual appliances

### application load balancer

- http 1/2, grpc, websocket load balancer
- for general internet

### gateway load balancer

- layer 4 tcp/upd load balancer

### network load balancer

- layer 4 tcp/udp load balancer
- EIP/static ip routing to EC2 autoscaling groups, eks, farget, ecs, or application load balancer

## vpn

- connect onpremise networks and remote workers to AWS resources
