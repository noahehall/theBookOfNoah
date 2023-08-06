# Security groups

- stateful firewall at the resource level: you enable ingress traffic and egress is autoamatically allowed
- catchall for wherever they might be used (ec2, vpcs, etc)

## links

- [vpc: intro](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)

## basics

- enable one/more port & ip range per security group
- by default denies all ingress

### OSI Model

- operates at layer 3 and 4
- traffic is filtered based on ip addrs, transport protocols and ports

### inbound rules

- type: the protocol
- source: can grant access to
  - a specific CIDR range,
  - another security group in your VPC or in a peer VPC (requires a VPC peering connection)
    - traffic is allowed from the network interfaces that are associated with the source security group for the specified protocol and port
    - Incoming traffic is allowed based on the private IP addresses of the network interfaces that are associated with the source security group
      - not the public IP or Elastic IP addresses
  - etc

## integrations

### ec2

- acts as a virtual firewall for your instance to control inbound and outbound traffic
- security groups are required for EC2 instances
  - can assign up to 5
-

### vpc

- every VPC has a default security group

### RDS

- control which IP ranges or EC2 instances can connect to a db and ec2 instances
- uses 3 types of security groups
  - VPC
  - database
  - EC2

### ELB

- every application load balancer requiests at least one security group
  - else the VPCs default security group will be used
