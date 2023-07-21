# Global Architecture

- fundamental AWS architecture

## my thoughts

- become one with the aws CLI and components of IAM and VPC
- protect the king (aws root user) at all costs

## links

- [global infrastructure intro](https://aws.amazon.com/about-aws/global-infrastructure/)
- [pricing calculator](https://calculator.aws/#/)
- [EU GDPR](https://gdpr.eu/what-is-gdpr/)
- [shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [aws repost: user community forum](https://repost.aws/)
- [six pillar well architected framework](https://aws.amazon.com/architecture/well-architected/)

### guide

- [service endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#cfn_region)
- [service quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html)

## best practices

- resiliancy & availability
  - use region-scoped services in a minimum of two availability zones
- naming/tagging things
  - you generally always want to pre/postfix the resource type to the name of the resource, e.g. ec2-my-silver-server
  - you always want to have a tagging scheme predefined so you can query resources across service boundaries and for billing
- services and regions
  - you should specify a regional endpoint if the service supports it to reduce latency

### anti patterns

## terms

## basics

### shared (security) responsibility model

- a good metaphor is an partment building
  - they are responsibile for the building, you are responsible for everything inside your apartment
- you: security **IN** the cloud
  - customer data
  - platform, applications, IAM
  - operating system, network and firewall configuration: e.g. patching and upgrades
  - customer-side data encryption and data integrity authnz
  - server-side encryption: file sytem/data
  - networking trafic protection: encryption, integrity identity
- aws: security **OF** the cloud
  - aws operates, manage and controls the components from the host operating system and virtualization layer down to the physical security of facilities inw hich services operate
  - software: up to the virtualization layer
    - compute, storage, database, networking
  - hardware / aws global infrastructure: the physical stuff, buildings, servers, private fiber cables, etc
    - regions, avaialbility zones, edge locations

### Console, CLIs and SDKs

- every action taken against an AWS resource is an API call
- SDKs are programming language specific
- in the console there is a new button to launch a cloud shell for using the cli

### global edge networks via cloudfront

- caching data closer to users to reduce latency
  - enables you to store data in a regions but cache them closer to users
- edge locations: copies of content are stored
- regional edge caching

### region & availbility zones

- region: a cluster of AZs
  - e.g. us-east-1
  - currently 3 region classifications: standard region,s china regions, and AWS GovCloud (US)
- availability zone: one/more data centers with redundant power & availability
  - e.g. us-east-1a and us-east-1b
- selecting a region
  - compliance: laws/company regulations requiring you to keep data in a specific geography
  - latency: relative to users and other services
  - pricing: AWS isnt for the little guy and varies from region to region
  - service availability: not all aws services are available in all regions

## integrations
