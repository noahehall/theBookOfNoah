# EC2

- virtual machine

## my thoughts

- factoring in savings plans & spot instances, ec2 pricing can be competitive with container services & serverless

## links

- [landing page](https://aws.amazon.com/ec2/?did=ap_card&trk=ap_card)
- [instance types](https://aws.amazon.com/ec2/instance-types/)
- [AMI: intro](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)
- [AMI: with EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html)

## best practices

- dont forget about the user data script
- high availability requires at least 2 ecs across distinct availability zones

### anti patterns

## features

### pricing

- billed for running instances

## terms

## basics

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
