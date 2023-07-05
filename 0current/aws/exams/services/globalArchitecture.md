# Global Architecture

- fundamental AWS architecture

## my thoughts

- become one with the aws CLI and components of IAM and VPC
- protect the king (aws root user) at all costs

## links

- [global infrastructure intro](https://aws.amazon.com/about-aws/global-infrastructure/)
- [well architected framework](https://aws.amazon.com/architecture/well-architected/)
- [pricing calculator](https://calculator.aws/#/)
- [aws service overview (PDF)](https://docs.aws.amazon.com/pdfs/whitepapers/latest/aws-overview/aws-overview.pdf)
- [EU GDPR](https://gdpr.eu/what-is-gdpr/)
- [shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

## best practices

- resiliancy & availability
  - use region-scoped services in a minimum of two availability zones

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
- availability zone: one/more data centers with redundant power & availability
  - e.g. us-east-1a and us-east-1b
- selecting a region
  - compliance: laws/company regulations requiring you to keep data in a specific geography
  - latency: relative to users and other services
  - pricing: AWS isnt for the little guy and varies from region to region
  - service availability: not all aws services are available in all regions

## integrations
