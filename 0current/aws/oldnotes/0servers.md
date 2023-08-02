# Servers

- ec2, AMI (amazon machine images), ec2 launch templates, ec2 instanct connect, lightsale
- for EC2 storage see [storage](./0storage.md)
- for EC2 networking see [networking](./0networking.md)

# TLDR

- everything with bare-metal like access

## links

- [ec2 custom primary private ips](https://aws.amazon.com/premiumsupport/knowledge-center/custom-private-primary-address-ec2/)
- [ec2 instance IP addressing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html)
- [ec2 instant connect](https://docs.amazonaws.cn/en_us/AWSEC2/latest/UserGuide/ec2-instance-connect-set-up.html)
- [ec2 pricing](https://aws.amazon.com/ec2/pricing/)
- [lightsail](https://aws.amazon.com/lightsail/?did=ap_card&trk=ap_card)
- [lightsail docs](https://lightsail.aws.amazon.com/ls/docs/en_us/search?s=What%20is%20Amazon%20Lightsail%3F)
- [nitro](https://aws.amazon.com/ec2/nitro/)

### tuts

- [ami create ami from instance](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/tkv-create-ami-from-instance.html)
- [ami getting started](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html#finding-quick-start-ami)
- [ec2 3 ways to connect to ec2 instances from linux](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html)
- [ec2 key pairs & linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)
- [ec2 prereqs for connecting to an e2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs.html)

## basics

### best practices / gotchas

- always
  - view the dashboards
    - [ec2 global dashboard](https://console.aws.amazon.com/ec2globalview/home)
- sometimes
- never
- gotchas
  - AMIs are region specific
    - so an AMI ID for us-east-1 (nyc) wont work in us-west-2 (oregon)

## ec2

- gotchas
  - you can only associate a custom primary ip at instance creation
  - yopu cant move an ec2 instance across subnets, AZs or VPC after creation
- servers in the cloud
- instance connect: connect to an instance from the browser
- Auto scaling is a great way to have the E2C services change when needed.
- use cases
  - secure; resizable compute capacity in the cloud
  - virtual machines you run in the cloud
  - configure cpu, memory, storage & networking capabilities
  - spot instances: launched via unused e2 capacity at a reduced price
- ami: images containing operating system, applications, configuration
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
- root device: contains all the data for the server, if its an EBS volume, an EBS snapshot will be a copy of this device
- block device:

### ec2 considerations

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
  - placement group: logical group of instances providing low latency & high throughput
  - capacity reservation
  - domain join directory
  - iam role
  - shutdown behavior
  - stop -hiernate behavior
  - termination protection
  - monitoring
  - tenancy
  - elastic inference
  - credit specification
  - file system
  - storage
  - security group
- always change the default user password if using public AMIs

### AMI amazon machine images

- machine configuration, OS, software, patches, kernels, etc
- user data: field to pass a shell script/file that executes on first boot of an EC2
  - remember, this adds to the time it takes for the ec2 to launch and be ready for use!
  - so how important is the initial boot time?
    - long lived instances may not be as critical (e.g. a db instance)
    - but short lived instances (e.g. servers in an autoscale config) need fast boot times
  - anything you can script can be accomplished on startup
  - ^ e.g. software patches, download latest software, etc
  - data scripts run as the root user on linux and only execute on the initial boot
    - are critical for AMIs, as they always contain obsolete software you'll want to update before launching ec2s
- use cases
  - critical for high availability
  - can pass parameters/instructions (e.g. shell script) to the AMI on launch using the user data field (e.g. to specify the versions of arbitrary software thats installed when booting a new EC2 from an AMI)
- considerations
  - what type of AMI? minimal? public? privately bought AMI?
  - whats going to be part of the base AMI used across your stack?
  - how frequently are you going to update the base AMI?
  - what mechanism are you going to use to update the base AMI?
  - how are you going to manage use rdata?
  - are you going to incorporate ansible? chef? system manager? puppet? opswork? etc
  - what are the incplications of onboat and on reboot scripts?

### ec2 launch templates

- templates from which AMIs can be launched
- all about configuring AWS details, security groups, network settings, instance types, storage, etc

### instant connect

- secure way to connect to your Linux instances using Secure Shell (SSH)
- you use Amazon Identity and Access Management (IAM) policies and principals to control SSH access to your instances, removing the need to share and manage SSH keys
- IMO
  - setup a fkn jump box with instant connect
  - and enable the jump box access to other resources
  - dont assign public ips to fkn resources in private subnets

### auto scaling

- scale compute capacity

### spot instances

- run workloads for up to 90% off

## lightsail

- easy-to-use virtual private server instances, containers storage and databases for simple web applications and test environments
- this is their `quick, easy and dirty on AWS` offerring

### lightsale for reasearch

- focused on academics & researchers
