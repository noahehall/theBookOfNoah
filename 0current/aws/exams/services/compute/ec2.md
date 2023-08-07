# EC2

- virtual machine

## my thoughts

- factoring in savings plans & spot instances, ec2 pricing can be competitive with container services & serverless

## links

- [landing page](https://aws.amazon.com/ec2/?did=ap_card&trk=ap_card)
- [instance types](https://aws.amazon.com/ec2/instance-types/)
- [AMI: intro](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)
- [AMI: with EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html)
- [pricing: reserved instances](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/)
- [pricing: savings plans](https://aws.amazon.com/savingsplans/)
- [pricing: spot instances](https://aws.amazon.com/ec2/spot/?did=ap_card&trk=ap_card)
- [hibernation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html)
- [instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html)
- [networking: elastic ips](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)
- [networking](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-networking.html)
- [networking: network interface best practices](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/best-practices-for-configuring-network-interfaces.html)

## best practices

- pick the right pricing structure
  - ondemand
    - no upfront payment/longterm commits
    - short-term, spike/unpredictable workloads
    - new applications with unknown workloads
  - savings plans
    - preferred over reserved instances
    - workloads with a consistent and steady-state usage
    - you can make monetary commitment for an ec2 over a 1 or 3 year term
  - spot instances
    - workloasds with flexible start & end times
    - requiring the lowest possible price
    - fault tolerant/stateless workloads
  - reserved instances
    - see the pricing section, it all depends on
      - if reserving in a recurring time window
      - need to increase instance capacity
  - dedicated hosts
    - if you need the entire server for yourself
    - but you can also reserve a dedicated host for cost saving
- dont forget about the user data script
- high availability requires at least 2 ecs across distinct availability zones
- pick the right block storage type
  - ephemeral storage: use instance store
  - persistent storage: use ebs

### anti patterns

## features

### pricing

- billed for running instances & any data stored on EBS volumes

#### on demand

- pay for compute capacity per hour/second depending on instance type
- no longterm commitments/upfront payments

#### spot instances

- run EC2 for up to 90% off
- set a limit for the max you would pay per hour
  - you get an instance if your max price > current spot price + capacity exists

#### savings plans

- save up to 72% to base price for a 1 or 3 year term
- applied across EC2, lambda and fargate

#### reserved instances

- save up to 75% vs on demand
- either all/partial/no upfront for a 1 or 3 year commitment
- reservation types
  - standard reserved instances: up to 72% off; best suited for steady-state workloads
  - convertible reserved instances: up to 54% off; best suited for steady-state workloads
    - you can change instance attributes if it results in an instance of equal/greater value
  - scheduled reserved instances: available to launmch within time windows you reserved
    - match capacity reservation to apredictable recurssing schedule
      - e.g. fraction of a day, week or month

#### dedicated hosts

- you need the entire server for yourself
- can save up to 70% if you reserve for a commitment

## basics

- termination protection: protects against accidental termination

### ec2 console

- a bunch of services are actually located in the ec2 web console
  - instances: of course
  - AMIs
  - elastic block store
  - security groups
  - elastic ips
  - key pairs
  - placement groups
  - network interfaces
  - elastic load balancers
  - auto scaling groups

### instance lifecycle

- launch
- pending: booting
  - AWS performs ops like copying AMI content to the root device, allocation networking components, etc
- running: you start incurring charges
- reboot
  - the instance keeps its public DNS name and private & public ipv4 & ipv6 addresses as well as any data stored in volumes
- stop
  - regular stop request:
    - you can restart a stopped instance if it has an EBS volume as its root device
    - it retains its private ipv4 and v6 addresses
    - phases
      - stopping phase
      - stopped: like powering down a laptop; starting up again requires initiating the boot phase
        - data in RAM is lost
  - hibernate stop request
    - phases
      - stopping phase: you are still being charged here
      - stopped: the VM goes into hibernation (suspend to disk)
        - the state of the machine is saved in memory
        - only instances with hibernation turned on can use this type
- terminate request
  - phases
    - shutting down phase
    - terminated: like selling your laptop on ebay
- stopped state for both stop and stop-hibernate
  - you can modify some instance attributes like the instance type
  - you stop incurring EC2 usage charges, but still charged for any data in EBS volumes

### instance (hardware) types

- determines the blend of hardware capabilities:
  - compute
  - memory
  - network resources
- optimizations
  - general purpose: balanced hardware capabilities
    - apps that use resources in equal/dynamic proportions e.g. a webserver
  - compute: high perf processors
    - anything compute intensive, e.g. batch processing, media, web servers, machine learning, etc
  - memory: processing large data sets in memory
    - e.g. databases, in memory caches, real-time data anlytics
  - accelerated: use hardware accelerators (co-processors)
    - e.g. scientific computing, finance, graphics processing, pattern matching, etc
  - storage: high performance R/W to large data sets on local storage
    - e.g. nosql dbs, in-memory databases, transactional dbs, data warehousing, search, analytics
  - HPC: high performance computing
    - e.g. large/complex simulations and deep learning workloads
- instance family abreviations, e.g. t#, c#, m#, etc
  - #: indicates the generation of the instance
  - m: memory
  - g: graphics
  - c: compute

### instance size

- determines the capacity and blend of hardware capabilities

### security groups

- [see markdown file](../networkingContentDelivery/securitygroups.md)

### Instance Store

- storage used as an internal, directly attached ephemeral data volume; e.g. a laptops internal harddrive
  - see storage/elasticblockstore.md for persistent ec2 storage
- positives
  - i/o is faster than attaching an ebs volume due to the close proximity of the physical storage to the physical ec2 server
  - applications that replicate data across ec2 instances, e.g. anything in a cluster
    - you need the fastest i/o for replication
  - temporary storage for frequently changed data: buffers, caches, scratch data, etc
- negatives
  - its lifecycle is tied to the lifecycle of the ec2 instance; once the ec2 is down, the data on the instance store is lost

### launch templates

- standardizes instance configuration in a template to quickly launch ec2 instances
- can be used with ec2 autoscaling
- uses an AMI as the base configuiration

### Networking

- configured with a primary network interface: a logical virtual network card
- primary private ip addr from the ipv4 addr of the subnet
  - the ip addr is assigned to the primary network interface

#### Elastic IPs

- associated with an instance or a network interface.
- can move it from one instance to another as needed
- For cost optimization, ensure that your elastic IP addresses are attached to your EC2 instances.
- You can get significantly higher packet per second (PPS) performance using enhanced networking.

## considerations

- key pair: if you dont plan on sshing into a server a keypair isnt required
  - you can always use the cloud shell via the console
- storage: every EC2 needs block storage
  - use cases: bootvolume for the operating system, attachable data volume
  - internal storage: ec2 Instance Store
  - external storage: ebs volume

### configuration

- if you an existing EC2 with appropriate configuration, you can select it > actions > image & templates > launch more like this
- hardware: CPU, memory, network, storage
- software: network location, firewall rules, authentication, operating system

### AMI

- root volume template
- operating system
- applications to install on boot
- launch permissions
- block device mapping
- instance type: hardware type
- instance size

### user data

- a script that executes on instance boot

### security groups

- instance level firewall

## integrations

### elastic block storage

- [see markdown file](../Storage/elasticblockstore.md)

### ec2 autoscaling

- [see markdown file](./ec2-autoscaling.md)
