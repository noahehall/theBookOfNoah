# Virtual Private Cloud (VPC)

- logically isolated virtual network

## my thoughts

- everything starts and ends with vpc

## links

- [landing page](https://aws.amazon.com/vpc/?did=ap_card&trk=ap_card)
- [default vpc](https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html)
- [intro](https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html)
- [nat gateways](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)
- [subnets: intro](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)
- [route tables: intro](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)
- [route tables: examples](https://docs.aws.amazon.com/vpc/latest/userguide/route-table-options.html)
- [route tables: walkthrough](https://docs.aws.amazon.com/vpc/latest/userguide/WorkWithRouteTables.html)
- [nacl: intro](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html)

### integrations

- [lambda: access to vpc resources](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html)
- [lambda: vpc endpoints](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc-endpoints.html)

## best practices

- never use the default VPC for anything; its public
  - a custom pc is private by default, and access is limited to resources within the VPC
- redundancy and fault tolerance requirews at least 2 distinct subnets across two availability zones
- saving $ on data transfer charges for NAT gateways
  - high volume GB of traffic:
    - ensure resources are in the same AZ as the nat gateway
    - or create a NAT gateway in each AZ
  - service to service comms
    - use aws resources that support interface/gateway endpoints and use AWS privateLink

### anti patterns

## features

- secure and monitor connections, screen traffic and restrict instance access
- customize the IP address range, manage subnets and configure route tables
- enforce rules on in/outbound connections
- define network connectivity and restrictions between resources

### pricing

- gateways: each hour that a NAT gateway is avialable and total GB of data it processes

## terms

- customer gateway: a physical device/software app on the customer side that can connect to a virtual private gateway on the AWS side
- aws direct connect: customer internet network is linked to AWS direct connect location over a standard ethernet fiber-opti9c capble
  - allows you to create virtual interfaces directly to public aws service or a VPC

## basics

- general workflow
  - create a vpc
    - enter CIDR range with enough IPs for available resources across subnets
  - create subnets
    - attach to VPC & pick an AZ
    - pick a CIDR range thats a subset of the VPC cidr range and doesnt overlap with other subnets
      - check the goodstuff file for notes and this [cidr visualizer](https://cidr.xyz/)
  - create gateways
    - internet gateway for public subnets
      - attach it to a VPC
    - nat gateway for private subnets
    - virtual private gateway for private access
  - create/adjust route table routes
    - attach to VPC
    - generally you want distinct route tables for public vs private subnets
      - only subnets with the appropriate route table connection & routes can access the internet/other vpc-local resources
      - if a subnet is public/private doesnt technically matter, its all about how the route table routes are configured
  - VPC firewalls
    - create/adjust NACLs
    - create/adjust security groups

### route tables

- routes internet gateway traffic to specific subnets
  - thus a route table is always connected to a VPC, some type of gateway, and one/more subnets via its route destination configuration
- route: can be applied at the VPC or subnet level
- main route table: created with a VPC; allows all traffic between subnets in a vpc
  - cannot be deleted from the route table
  - implicitly used by all subnets without an explicit route table association
    - once theirs an explicit association, the subnet will no longer use the main route table
- destination: where traffic thinks its going
  - CIDR range: generally this means it should match a subnet, and the target should be local
  - 0.0.0.0/0: means this is traffic to/from the internet, and the target should be some type of gateway
- target: where the traffic is actually routed to
  - local: within the VPC, and will automatically route to associated subnets
  - some gateway id
  - etc
- subnet association: this enables the routes of a routetable to be associated with resources in a subnet

### subnets

- provide granular control over access to resources; e.g. public vs private resources
- each subnet is bound to a specific AZ within a VPC

### internet gateway

- connects a VPC to the internet enabling public access

### virtual private gateway

- create a VPC connection to a private network (e.g your office corporate network) enabling access to vpc resources

### nat gateways

- for private subnet resources to initiate contact with services outside a VPC (but not the other way around)
- public nat gateway: can reach out to the internet, but cant be reached from the internet
  - create it in a public subnet and assign an elastic ip
  - internet access: route traffic from the nat gateway to the vpc's internet gateway
  - private access: route traffic from the nat gateway to a transit/virtual private gateway
    - this connects it to other VPCs or on premise networks
- private nat gateway: can reach out to other VPCs/on-premise networks; but not the other way around
  - route traffic from the nat gateway to a transit/virtual private gateway
  - you cannot associate an elastic ip
- public vs private NAT gateways
  - both
    - map the source private Ipv4 address of rsources to the private IPv4 address of the nat gateway
      - public: any associated internet gateway will then map the nat gateways IP address to the associated elastic ip
        - this is why public nat gateways can reach out to the internet, but private nat gateways cant
      - private: any associated internet gateway will drop outbound connections
  - public:
    - can attach an elastic ip
    - can reach out to the internet via an internet gateway
  - private
    - can be attached to an internet gateway, but it will drop outbound internet traffic

### NACLs

- network access control lists: control what kind of traffic can enter and leave the subnet
- stateless firewall at the subnet level: you must edit both ingress & egress traffic
  - by default allows all in/egress traffic: you can then restrict access

### security groups

- see [markdown file](./securitygroups.md)

## considerations

- vpc ip range: 1 primary and up to 4 secondary; the smallest range is 28 (4 ips), the largest is 16 (65,536 ips)
  - 10.1.0.0/16
  - 192.168.0.0/16
- region: should be wherever you plan to launch resources
  - the select ip range are distributed at the region level
- subnets
  - each in a availability zone where you expect to launch resources
  - CIDR range thats a subset of the VPC cidr range
    - you generally increment the third octet choose an appropriate flexbit
      - use the visualizer link in the goodstuff doc

## integrations

### EC2

- on ec2 creation, you can select an existing VPC and subnet to launch an instance into under network settings

### Security Groups

- you cant use a security group attached to VPC X with VPC Y

### rds

- db instances require a VPC with two private subnets not connected to an internet gateway
  - you can further protect your db by using NACLs and security groups
