bookmark: chapter 4 availability zone network pg 55 notes

# TLDR

The CLOUD and SERVICES aws provides
after reading this file you should have a robust understanding of what the cloud is and whats available
for implementation details, see the quickies dir

- book1: aws certified cloud practitioner: ben piper, david clinton

## links

## terms

- hypervisor: technology for hosting VMs

- public cloud: using ohter peoples servers to run your digital workloads
  - cost
    - metered payment model: self-serfve system; generally you pay for what you use, by the time & amount you use
    - comparison
      - on premise: capitale + operating expenses
      - in cloud: operating expenses
  - key goals
    - fast deployments
    - avoiding over-provisioning (compute, memory, network, storage resources)
    - highly available & scalable resources
      - multiple layers of redundancy: when one component fails, its workload is automatically & instantly moved to a healthy replacement
      - connect resources in geogrpahically remote locatoins: failure of one complete region could trigger a predifined relocation
      - automated reourting of network requests
    - scalability: services that automatically grow in capacity to match increased demand
    - elasticity: services that automatically reduce capacity to some predefined threshold to save resources

- virutalization model
  - speed: defining, purchasing, provisioning, testing, and launching a new pysical server happens virtually within seconds
  - efficiency: multiple virtual machines can be packed onto a physical server running a hypervisor, and when a server reaches capacity simply move overflow to another machine
- serverless model
  - lol you cant run a compute fucntion with out a server (pun)
  - however, serverless means you dont have to create, configure, or manager the server in which your logic is deployed
  - enables you to
    - run code for seconds/minutes at a time on preconfigured servers
    - design code that reacts to external events
  
- IaaS: infrastructure as a service
  - give you direct access to a providers compute, storage and networking assets
  - you get direct access at the hardware level
  - this is the most advanced level
- PaaS: Platform as a service
  - ssimplify the process of building an application by hiding the complexity of the infrastructure that runs it
  - usually through an interface from which you an define the behavior and environment of an application
- SaaS: software as a service
  - services meant to be accessd by end users

### AWS terminology

- shared responsbility model
  - AWS: responsbile for the cloud: for the underlying networking and compute infrastructure
  - YOU: responsbile for whats IN the cloud
  - as you move from IaaS to SaaS, the cloud provider assumes more of the responsbility

## AWS Accounts

- key goals
  - understanding whats its all going to cost you
    - in case you're wondering, there is no limit to how much they will charge you ;)
    - who has the authoritity to make purchases decisions on your acocunt? activate/deactivate resources, etc
    - understanding how aws services are priced and how to model pricing for complicated cominbations/stacks of resources
    - understanding usage limits AWS places on some services and ohw to raise them
    - tracking your actual account costs

- [free tier](https://aws.amazon.com/free/)
  - a variety of services are free to use for the first 12 months after opening a new account
  
## monitring and controlling costs

- each service has its own dedicated pricing page
- and cost can vary between AWS regions
- links
  - [s3](https://aws.amazon.com/s3/pricing)
  - [ec2](https://aws.amazon.com/ec2/pricing)
    - on-demand instances
    - spot instances
    - reserve instances
    - dedicated hosts
  - [ebs](https://aws.amazon.com/ebs/pricing)
- monitoring tools
  - [simple monthly calculator](http://calculator.s3.amazonaws.com/index.html)
    - helps you understand what running any combination of AWS resources will cost you
    - it isnt connected/nor does it retrieve any data form your aws account
    - has templates to prepopulate with common resources
  - [total cost of ownership calculator](https://aws.amazon.com/tco-calculator)
    - compare current cost of on-presmises servers with similar workloads running on AWS
    - enter the configuration specifications of your current onpremis/colocation deployment, and it will automatically estimate the cost of a comparable aws cloud deployment
- billing dashboard
  - available through the account drop-down menu at the top of the AWS managmeent console
  - visual spend summary: costs month over month
  - month to date spend by dserver: itemized breakdnown of your current spending
  - links to pages wher eyou can set payment methods and orgnaization tax information
  - payment history: records of previous transactions
- [AWS budget](https://console.aws.amazon.com/billing/home#/budgets#/home)
  - tool for tracking a specified set of events, and when a preset threshold is approached/passed, an alert is triggered
  - cost budget: monitor costs being incurred against your acocunt
  - usage budget: track particular categories of resource consumption
  - reservation budget: understand the status of any active ec2, rds, redshit, or elasticache reserve instances
  - budget setup process
    - set the terms of your budget, i.e. what it is youre tracking
    - define how and when you want alerts sent
- [cost explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer)
  - build graphs to visualize your accounts historical and current costs
  - provides precondigured views
  - can create customizable views to filter account cost events by date, region, avialability zone, isntance type, platform, etc
  - can save report views
- cost and usage reports
  - accessed via the reports link on the billing dashboard
  - can configure reports to be created that include the full range of acivity on your account:
    - resources that are running and how uch their costin gyou
    - control the level of detail and enable support for redshift/quicksight
- cost allocation tags
  - tags: metadata identification elements representing a resource and its actions
  - can be used to organize and track resources
    - visualize and better understand how resources are being used
  - two types (that have nothing to do with each other)
    - resource tags: often used to help quickly identify the urpose and owner of a particular running resource
    - cost allocation tags: meant to interact with billing tools and wont show up in the context of any other aws resource or process
      - help you identify resources, but only for the purpose of tracking your account spending
      - aws-generated cost allocation tags: AWS automatically generates when resources are created
      - user defined cost allocation tags
- aws organizations
  - formerly known as consolidated billing
  - allow you to cerntralize the administration of multiple aws acocunts owned/controlled by a single company
  - ability to control the allocation of resource permissions, security and spending from a single pane of glass
    - often a single company will own more than one account, or share AWS resources with vendors and clients
  - security is even more important when linking accounts
    - a security breach of any one linked account runs the risk of sprading the vulnerability to everything running in any linked account

- [service limits](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html)
  - aws imposes limits on the scope of resources you can use
  - ensures all classes of services are not over-provisioned and avialable to all users (yea right)
  - soft limits: can be increased by contacting support
  - hard limits: cannot be increaed

## AWS platform architecture

- key goals
  - undersand how AWS itself organizes its hardware, networking and security infrastructure
  - map out AWS infrastructure
  - understand how AWS globally distributed data centers are divided into regions, and regions devidied into availability zones
    - and how to design applications to take advantage of these divisions
  - understand how AWS can extend the network reach of your applications through its globally distribute dedge loaltions that make up the frontend of cloudfront
  - understand the AWS shared responsbility model
  - understand the AWS aceptable use policy

- [aws global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure)
  - landing page for most things in this section
- AWS shared responsibility model
- AWS acceptable use policy

### AWS REGIONS

- when you request an instance of an AWS service, the underlying hardware of that instance be in ONE AND ONLY ONE region
  - think about it, everything needs a physical computer, and that physical computer in AWS will be located in a region
- you need to be cognizant of what region you're currently in when provisioning new services
  - else mutally dependent application components wont be able to find each other
  - can cause your application to fail
- benefits of regions
  - locate your infrastructure geogprahically closer to your users with the lowest possible latency
  - locate your infrastrucutre within national borders to meet regulatory compliance with legal and banking rules
  - isolate groups of resources from each other and from larger networks to allow the greatest possibility of security
- globally based services
  - the rsources are technically still running on hardware within a single region
  - but they are accessed in the global region within the AWS console
  - services
    - IAM: Identity and Access Management
      - managing the way access to your account resources by way of users and groups
    - Cloudfront: CDN for lowering access latency to your account resources by caching versions of frequently requested data at AWS edge locations
- [service endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html)
  - helps identity:
    - which region a particular service is located in
    - connect via to the service shell scripts, sdks, and application code
  - SERVICE.REGION.amazonaws.com
    - regions contain multiple availability zones
    - e.g us-east-1a, us-east-1b, etc.

### AWS AVAILABILITY ZONES

- each AWS region encompasses at least two availability zones connected to each other with low-latency network links
- each availability zone is isolated from the other with an independent data center built on isolated hardware
- benefits
  - if one AZ loses power/suffers whatever the fk the chances of it spreading to a secon AZ in the same region is minimal
  - assume that no two AZs will ever share resources froma single physical data center
- impact
  - before launching many services, you need to specify a network subnet associated with an AZ
    - its this AZ/subnet combination that will be the service instance host environment

### AWS EDGE LOCATIONS
