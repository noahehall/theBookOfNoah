# TLDR

## links

- ec2
  - [ec2 instance IP addressing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html)
- tuts
  - [3 ways to connect to ec2 instances from linux](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html)
  - [ec2 key pairs & linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)
  - [prereqs for connecting to an e2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs.html)
- ami
  - [getting started](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html#finding-quick-start-ami)

## basic

### use cases

- ec2
  - secure; resizable compute capacity in the cloud
  - virtual machines you run in the cloud
  - configure cpu, memory, storage & networking capabilities

### best practices/gotchas

- gotchas
  - AMIs are region specific
    - so an AMI ID for us-east-1 (nyc) wont work in us-west-2 (oregon)

### terms

- ami: images containing operating system, applications, configuration
- security groups: virtual firewalls

- instance ID: the unique identifier for a specific ec2 instance
- public DNS: the external DNS hostname e.g. `ec2-000-000-00-00.REGION_NAME.compute.amazonaws.com
- ipv6: the ipv6 address of the instance
- username: used to connect to the instance (e.g. via ssh client)
  - use the user name of your user account
  - the default user name for the AMI used to launc your instance
    - amazon AMI : ec2-user
    - centos: centos|ec2-user
    - fedora: fedora|ec2-user
    - rhel: ec2-user|root
    - suse: ec2-user|root
    - ubuntu: ubuntu
    - oracle: ec2-user
    - bitname: bitname

### considerations

- ec2
  - ami
  - type: e.g. micro/nano
  - number of instances
  - spot instances
  - network
  - subnet
  - public ip
  - hostname type
  - dns hostname
  - placement group
  - capacity reservation
  - domain join directory
  - iam role
  - shutdown bheavior
  - stop -hiernate behavior
  - termination protection
  - monitoring
  - tenancy
  - elastic inference
  - credit specification
  - file system
  - storage
  - security group

## workflows

### quickies

```sh


```