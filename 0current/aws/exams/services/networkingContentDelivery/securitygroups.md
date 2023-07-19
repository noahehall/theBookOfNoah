# Security groups

- stateful firewall at the resource level: you enable ingress traffic and egress is autoamatically allowed
- catchall for wherever they might be used (ec2, vpcs, etc)

## links

- [vpc: intro](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)

## basics

- enable one/more port & ip range per security group
- by default denies all ingress

## integrations

### ec2

- security groups are required for EC2 instances

### vpc

- every VPC has a default security group

### RDS

- control which IP ranges or EC2 instances can connect to a db instance

### ELB

- every application load balancer requiests at least one security group
  - else the VPCs default security group will be used