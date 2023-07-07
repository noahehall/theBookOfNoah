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

### anti patterns

## features

### pricing

- billed for running instances

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

## terms

- termination protection: protects against accidental termination

## basics

### instance lifecycle

- launch
- pending: booting
  - AWS performs ops like copying AMI content to the root device, allocation networking components, etc
- running: you start incurring charges
- reboot
  - the instance keeps its public DNS name and private & public ipv4 & ipv6 addresses as well as any data stored in volumes
- stop request:
  - you can restart a stopped instance if it has an EBS volume as its root device
  - it retains its private ipv4 and v6 addresses
  - phases
    - stopping phase
    - stopped: like powering down a laptop; starting up again requires initiating the boot phase
      - data in RAM is lost
- stop hibernate request
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

## considerations

### configuration

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
