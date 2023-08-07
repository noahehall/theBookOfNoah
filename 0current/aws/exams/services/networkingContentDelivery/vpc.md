# Virtual Private Cloud (VPC)

- regionally isolated software defined virtual private network

## my thoughts

- everything starts and ends with vpc

## links

- [cidr: prefix lists](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html)
- [default vpc](https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html)
- [DHCP: dns server for VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html)
- [ec2: elastic network interfaces](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ElasticNetworkInterfaces.html)
- [eks: subnet tagging](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html#vpc-subnet-tagging)
- [eks: vpc cni k8s plugin](https://github.com/aws/amazon-vpc-cni-k8s)
- [eks: vpc considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html)
- [fow logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)
- [internet gateways](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Internet_Gateway.html)
- [intro](https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html)
- [landing page](https://aws.amazon.com/vpc/?did=ap_card&trk=ap_card)
- [monitoring](https://docs.aws.amazon.com/vpc/latest/userguide/monitoring.html)
- [nacl: intro](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html)
- [nat gateways](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)
- [peering: intro](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html)
- [route tables: examples](https://docs.aws.amazon.com/vpc/latest/userguide/route-table-options.html)
- [route tables: intro](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)
- [route tables: walkthrough](https://docs.aws.amazon.com/vpc/latest/userguide/WorkWithRouteTables.html)
- [route tables](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html)
- [subnets: intro](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)
- [subnets: pub & priv scenario](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html)
- [traffic mirroring](https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html)

### integrations

- [lambda: access to vpc resources](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html)
- [lambda: vpc endpoints](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc-endpoints.html)

## best practices

- never use the default VPC for anything; its public by default and misconfiguration and be detrimental to various other things
  - a custom pc is private by default, and access is limited to resources within the VPC
- redundancy and fault tolerance requires at least 2 subnets across two availability zones
- saving $ on data transfer charges for NAT gateways
  - high volume GB of traffic:
    - ensure resources are in the same AZ as the nat gateway
    - or create a NAT gateway in each AZ
  - service to service comms
    - use aws resources that support interface/gateway endpoints and use AWS privateLink
- plan for multiple VPCs
  - you cannot create a VPN/Direct Connect/VPC peering connection between two VPCs that have matching or overlapping CIDR range
- you can now resize a VPC using a secondary CIDR range
  - you cannot associate a secondary CIDR from other ranges
  - You can only associate any other CIDR from the same primary CIDR range
- plan for load balancers in your CIDR range
  - make sure that each Availability Zone subnet for your load balancer nodes, has atleast a slash 27 bit mask
- There are tools available on the internet to help you calculate and create IPv4 subnet CIDR blocks

### anti patterns

## features

- secure and monitor connections, screen traffic and restrict instance access
- customize the IP address range, manage subnets and configure route tables
- enforce rules on in/outbound connections
- define network connectivity and restrictions between resources

### pricing

- check the docs
- gateways:
  - nat: each hour that a NAT gateway is available and total GB of data it processes
- peering
  - data transfer that crosses AZs charged at the standard in-Region data transfer rates.
    - data within a single AZ is free

## basics

- general workflow
  - create a vpc in a specific region but spans all the AZs
    - enter CIDR range with enough IPs for available resources across subnets
  - create subnets
    - attach to VPC & pick an AZ:
    - pick a CIDR range thats a subset of the VPC cidr range and doesnt overlap with other subnets or AZs
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

### OSI Model

- layer 3
  - routes and route tables

### Default vs Non-Default VPCs

- Default: created by AWS and are all configured in the same way
  - only one per region
  - one CIDR range that handles all i/o comms
  - one class B subnet per AZ per region
  - A default internet gateway attached to the VPC
  - a default network ACL is created for your default Amazon VPC and is associated with all subnets.
  - default security group for instances launched within the VPC
- non default: created by you; do not allow anything in or out without explicit configuration
  - have a choice for default or dedicated tenancy
    - default: resources provisioned inside your Amazon VPC that are provisioned on shared hardware with others
    - dedicated: hardware is dedicated to you and is much more expensive.
  - have fully provisioned Domain Name Systems (DNS), which uses the Network +2 IP address
    - enableDNSHostnames: resources will be given public DNS names
    - enableDNSSupport: enable DNS resolution in your Amazon VPC.
  - VPC CIDR: between a /16 netmask (65,536 IP addresses) and /28 netmask (16 IP addresses).
    - 10.0.0.0 - 10.255.255.255 (10/8 prefix) e.g. 10.0.0.0/16 or smaller
    - 172.16.0.0 - 172.31.255.255 (172.16/12 prefix) e.g. 172.31.0.0/16 or smaller
    - 192.168.0.0 - 192.168.255.255 (192.168/16 prefix) e.g. 192.168.0.0/20 or smaller
  - subnet CIDR: same as VPC for single subnet, or smaller for multiple subnets
    - allowed blocksize is between a /28 netmask and /16 netmask.
    - CIDR blocks of the subnets cannot overlap.
    - first four & last IP addresses in each subnet CIDR block are reserved for AWS, cant be used
      - first: network address
      - second: VPC router
      - third: something to do with DHCP DNS server for VPC, check the docs
      - fourth: reserved for future use
      - last: network broadcast address (even tho its not supported in VPC)

### subnets

- each subnet is bound to a specific AZ within a VPC and must be associated with a single route table
- a subnet is made public by:
  - associating the subnet with a route table with a route to an internet gateway
    - the destination is the public internet, e.g 0.0.0.0/0
    - the target is an internet gateway
- a private subnet can reach out to the internet by:
  - associated with a NAT gateway where the destination will be 0.0.0.0/0
  - the target will be the NAT gateway
- a private subnet that cant reach out to the internet by:
  - a route table with just the default route which will be the local route
    - allows connectivity between the subnets in the same VPC
  - you can add a VPC endpoint for private connection between your VPC and other AWS services
  - you can have a route for VPC peering connection between your databases and other VPCs so that the traffic just communicates over private IPv4 address.

### Gateways

- horizontally scaled, redundant, and highly available VPC component

#### internet gateway (IGW)

- allows communication between resources in a VPC and the internet.
- features
  - Provide a target in route tables to connect to the internet
  - Perform network address translation (NAT) for resources that have been assigned public IPv4 addresses
- setup
  - each VPC can have a single internet gateway that works across ALL availability zones
    - sits on the edge of your Amazon VPC, the AWS Public Zone, and the internet to manage the traffic between your Amazon VPC, the AWS Public Zone, and the internet
    - makes a subnet public by performing a type of Network Address Translation (NAT) called static NAT
  - a subnet's route table must contain a route that directs Internet-bound traffic to the Internet gateway
    - can scope the route to all destinations not explicitly known to the route table (0.0.0.0/0 for IPv4)
    - can scope the route to a narrower range of IP addresses; e.g. only specific public IPv4 addresses instead 0.0.0.0/0
    - can scope the route to specific IPs of other aws resources outside your VPC

#### Customer Gateway (CG)

- physical/software appliance you own/manage in your onpremise network

#### VPN Gateway (VPNG)

- gateway on the AWS side of a site-to-site VPN connection

#### Direct Connect Gateway (DCG)

- establishes connections that spans VPCs across multiple regions

#### nat gateways (NG)

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

#### Transit Gateway (TG)

- see [markdown file](./transitGateway.md)

#### virtual private gateway (VPG)

- logical edge routing device that sits at the edge of a VPC
- allows resources outside of your mesh network to communicate with resources inside the mesh network
- can be used with DirectConnect and VPNs
  - act as a VPN concentrator on the AWS side of a site-to-site VPN connection
  - create a VPC connection to a private network (e.g your office corporate network) enabling access to vpc resources

### route tables

- the mechanism used for controlling VPC traffic based on its target, destination, remote and local routes
  - routes internet gateway traffic to specific subnets
  - is always connected to a VPC, some type of gateway, and one/more subnets via its route destination configuration
- route: can be applied at the VPC or subnet level
- main route table: created with a VPC; allows all traffic between subnets in a vpc
  - cannot be deleted from the route table
  - implicitly used by all subnets without an explicit route table association
    - once there is an explicit association, the subnet will no longer use the main route table
- destination: where traffic thinks its going
  - CIDR range: generally this means it should match a subnet, and the target should be local
  - 0.0.0.0/0: means this is traffic to/from the internet, and the target should be some type of gateway
- target: where the traffic is actually routed to
  - local: within the VPC, and will automatically route to associated subnets
  - some gateway id
  - etc
- subnet association: this enables the routes of a routetable to be associated with resources in a subnet
  - each subnet must be associated with exaclty one route table
  - but one route table can have multiple subnets

### NACLs: network access control lists:

- stateless firewall that can filter traffic as it enters and leaves a subnet.
  - only manage traffic that is crossing the subnet boundary.
    - i.e. has no impact on resources within the same subnet
  - do not recognize AWS resources like security groups do
    - only support ip, networks and protocols
- rules
  - traffic between nodes are two different streams, so you must edit both ingress & egress traffic
  - by default allows all in/egress traffic: you can then restrict access
  - rules are processed in order from lowest rule number to the highest rule number (ending in `*`)
    - When a rule is matched, an action is taken, and processing stops

### security groups

- control access at the resource level
- see [markdown file](./securitygroups.md)

### Peering

- enables 1:1 encrypted communication between TWO isolated VPCs using their private IP address without traversing the public internet
- peers can span accounts and regions
- use cases
  - sharing resources across two VPCs
  - enabling private access to partners/vendors
  - workflows requiring secured access: e.g. system security audits
  - apps requireing enhanced fault-tolerance and high availability can now span regions

### flow logs

- catpure info about ip traffic and publish to cloudwatch logs, s3 or kinesis

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
- Each instance is configured with a primary network interface; which is a logical virtual network card.
  - receives a primary private IP address from the IPv4 address of the subnet
    - that private IP address is assigned to the primary network interface.
  - can add a public IP address.
    - ephemeral: associated with your instance until it is stopped, rebooted, or terminated
    - static: allocate an elastic IP address for your AWS account and associate that elastic IP address with an instance or a network interface

### Security Groups

- you cant use a security group attached to VPC X with VPC Y

### rds

- db instances require a VPC with two private subnets not connected to an internet gateway
  - you can further protect your db by using NACLs and security groups

### eks

- you either create a new VPC or use an existing one
- generally follow one of three patterns
  - only public subnets: at most 3 public subnets in distinct AZs
    - all worker nodes automatically receive public IPs and can send/receive internet traffic through an internet gateway
    - a security group is deployed that denies all inbound traffic, but allows outbound traffic
  - only private subnets: at most 3 private subnets in distinct AZs
    - all nodes can optionally send/receive internet taffic through a NAT instance or NAT gateway
      - a NAT instance/gateway must be deployed to each AZ
    - a security group is deployed that denies all inbound traffic, but allows outbound traffic
  - public and private subnets: 2 AZs, each with a private and public subnet
    - recommended for all production deployments
    - private subnet: deploy worker nodes
      - dont receive public IPs
        - worker nodes can still communicate with the cluster and other aws services
        - pods can communicate outbound to the internet througha NAT gateway deployed in each AZ
      - a security group is deployed that denies all inbound traffic, but allows outbound traffic
    - public subnet: deploy load balancers for balancing traffic in private subnets
      - all resources automatically receives public IP addrs
      - you must ensure all subnets are tags so k8s knows which are public and private

#### vpc cni plugin

- allows k8s pods to have the same IP addr inside the pod as they do on the VPC network
  - enables interhost communication and allows k8s pods to have the same ip addr inside the pod as they do on the VPC network
- provisions multiple network interfaces to a host instance
  - each network interface has multple secondary ip addrs that get asigned IP addrs from the VPC pool
  - the ip addrs are assigned to pods on the host and connects the network interfac eto the veth port created on the pod
- every pod has a real, routable ip addr from the VPC and can easily communication with other pods, nodes or aws services
- on the host ec2 instance
  - cni modifies both the default routing table and the network interface routing table
    - default routing table: routes traffic to pods
    - network interface: has its own routing table for routing outgoing pod traffic
  - each pod is assigned one of the network interfaces secondary ip addr
