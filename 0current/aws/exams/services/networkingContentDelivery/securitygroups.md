# Security groups

- stateful firewall at the resource level: you enable ingress traffic and egress is autoamatically allowed
- catchall for wherever they might be used (ec2, vpcs, etc)

## basics

- enable one/more port & ip range per security group
- by default denies all ingress

## integrations

### ec2

- security groups are required for EC2 instances
