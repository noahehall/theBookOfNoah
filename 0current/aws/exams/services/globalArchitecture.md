# Global Architecture

- fundamental AWS architecture

## my thoughts

## links

- [global infrastructure intro](https://aws.amazon.com/about-aws/global-infrastructure/)
- [pricing calculator](https://calculator.aws/#/)
- [EU GDPR](https://gdpr.eu/what-is-gdpr/)
- [shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [aws repost: user community forum](https://repost.aws/)
- [well architected framework](https://aws.amazon.com/architecture/well-architected/)
- [top 10 security items](https://aws.amazon.com/blogs/security/top-10-security-items-to-improve-in-your-aws-account/)
- [tags: conventions and rules](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html)
- [tags: best practices](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html)
- [tags: resource tagging strategy](https://aws.amazon.com/blogs/mt/implement-aws-resource-tagging-strategy-using-aws-tag-policies-and-service-control-policies-scps/)
- [billing and cost management](https://docs.aws.amazon.com/account-billing/index.html)
- [billing: user guide](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html)
- [billing: consolidated](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

### tools

- [WAT: well architected tool](https://aws.amazon.com/well-architected-tool/)
- [WAT: user guide](https://docs.aws.amazon.com/wellarchitected/latest/userguide/wellarchitected-ug.pdf)

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

## basics

- Security: the practice of protecting your intellectual property from unauthorized access, use, or modification

### shared (security) responsibility model

- a good metaphor is an partment building
  - they are responsibile for the building, you are responsible for everything inside your apartment
- you: security **IN** the cloud:
  - securing your data, operating systems, networks, platforms, and other resources that you create
    - protecting the confidentiality, integrity, and availability of your data and for meeting any specific business or compliance requirements for your workloads.
  - requires you to monitor and manage the env at the operating system and higher layers
  - customer data
  - platform, applications, IAM
  - operating system, network and firewall configuration: e.g. patching and upgrades
  - customer-side data encryption and data integrity authnz
  - server-side encryption: file sytem/data
  - networking trafic protection: encryption, integrity identity
- aws: security **OF** the cloud:
  - protecting the global infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure comprises the hardware, software, networking, and facilities that run AWS services.
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
- edge location: an endpoint for AWS that is used for caching content
- regional edge caching

### region & availbility zones

- region: geographical area that consists of two or more Availability Zones.
  - e.g. us-east-1
  - currently 3 region classifications: standard region,s china regions, and AWS GovCloud (US)
- availability zone: one or more interconnected data centers with redundant power, networking, connectivity, and so on.
  - e.g. us-east-1a and us-east-1b
- selecting a region
  - compliance: laws/company regulations requiring you to keep data in a specific geography
  - latency: relative to users and other services
  - pricing: AWS isnt for the little guy and varies from region to region
  - service availability: not all aws services are available in all regions

### Service Resiliency

- Globally-resilient services: operates globally with a single database
  - data is then replicated across AWS Regions
  - on failure, the service continues to operate because its replicated to other regions
- Regional-resilient services: operate in one Region with one set of that data in that Region
  - data is then replicated to multiple Availability Zones in that Region
  - if a single AZ fails, the other one picks up
  - if the region fails, your SOOL
- zone-resilient services: run in a single Availability Zone
  - if that AZ fails, your SOOL

### Tags

- the best practice is to tag everything, then you can use those tags for various other things, e.g. access control
- think about
  - job function/project attributes/cost allocation
  - account/team/organization/etc
  - ABAC/RBAC

## well architected framework

- helps you understand the pros and cons of decisions you make while building systems on AWS
- best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud

### Operational Excellence

- running and monitoring systems to deliver business value and continually improving processes and procedures
- Define your metrics, set target goals, define and enforce your tagging strategy

### security

- the ability to protect data, systems, and assets while delivering business value through risk assessments and mitigation strategies
- dimensions: All AWS security services can be categorized by these five domains
  - identity and access management: ensure only authorized and authenticated users can access resources and do so as intended
  - detective controls: identify a potential security threat or incident
  - infrastructure protection: ensures systems and services within your workload are protected against unauthorized/unintended access and vulnerabilities
  - data protection: at rest and in transit via ecryption methods and access control and classifying data based on levels of sensitivity
  - incident response: processes in place to respond to and mitigate the impact of security incidents
- key goals
  - prevention: Define user permissions and identities, infrastructure protection, and data protection measures
  - detection: visibility into your organization’s security posture with logging and monitoring services
    - who has access
    - who executed
    - when and from where
    - evidence of
  - respond: Automate incident response and recovery to help shift the primary focus of security teams from responding to analyzing the root cause
  - remediate: event-driven automation to quickly remediate and secure your AWS environment in near-real time
    - ensure high availability
    - deploy apps with security and compliance-related configuration
    - apply security checks in a reproducible manner
- design principles
  - strong identity foundation built on the principles of least privilege
    - grant access only to those who need it
    - deny everything by default, and slowly open up based on roles, not specific users
  - enable tracability: monitor, alert and audit actions and changes in real time
  - apply security at all layers via defense in depth
    - network
    - application
    - data store
  - automate security best practices via APIs
    - identity management
    - network and data security
    - monitoring/observability capabilities
  - protect data in transit and at rest
    - creating and controlling the encryption keys used to encrypt your data
    - selecting appropriate encryption methods
    - validating integrity
  - minimize your attack surface
  - prepare for security events
    - processes to respond to and mitigate the potential impact of security incidents
    - tools and access in place ahead of a security incident
    - practice incident response through game days

#### CIA Triad

- Confidentiality: limiting information access and disclosure to authorized users (the right people) and preventing access by unauthorized people.
- Integrity: maintaining the consistency, accuracy, and trustworthiness of data over its entire life cycle
- Availability: the readiness of information resources. a system that is not available when you need it is almost as useless as not having a system in the first place

### reliability

- ability to prevent and quickly recover from failures to meet demand

### performance efficiency

- using IT and compute resources efficiently

### Cost Optimization

- measure and monitor your infrastructure and ensure cost-allocations are accurate
  - tagging is critical: use cost allocation tags
- data transfer charges are often overlooked
  - no charge for inbound data transfer across all services in all Regions
  - data transfer from AWS to the internet is charged per service, with rates specific to the originating Region.

### sustainability

- recommendations and strategies to use when designing cloud architectures that maximize efficiency and reduce waste

### Well architected tool

- free self-service tool to review AWS workloads, potential risks in your architectures and identify steps for improvement.
- general process
  - define your workload by answering a series of architectural questions
  - the tool evaluates your responses against the 6 pillars of the well architected framework
  - provides an improvement plan with:
    - prioritized list of issues/recommendations
    - links to videos and documentation concerning best practices
    - generated report that summarizes your workload review
