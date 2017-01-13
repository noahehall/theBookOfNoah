# Everything you need to know to become AWS certified
  - [test exams](https://www.webassessor.com/wa.do?page=publicHome&branding=AMAZON)
  - [aws developer associate](https://aws.amazon.com/certification/certified-developer-associate/)
# AWS Global Infrastructure
## Regions, availability zones, edge locations
  - a place in the world where AWS resources exist
    + 14 Regions
      - a geographical area consisting of 2/more availability zones
    + 38 availability zones
      - a single/multiple data centers
    + 66 edge locations: a CDN for cloudfront
      - CDN: a way to cache files media objects (js, html, videos, soundfiles, etc) in the cloud

# AWS Platform
## Networking and Contend Delivery
### VPC
  - virtual private cloud: a virtual datacenter where you can deploy your assets
    + VPCs exist in a region, and different VPCs can be connected
### Route 53
  - DNS service: maps IP addresses to domain names
    + port 53: the DNS port
### cloudfront
  - a cdn comprised of edge locations
### Directconnect
  - a way to connect your physical datacenters to AWS with dedicated hardware lines
    + mostly its for security/reliability

## Compute
### EC2
  - elastic computer cloud: virtual machines in the cloud
### EC2 Container Service
  - Container management service for docker containers, allows you to run applications on a managed cluster of amazon ec2 instances
### Elastic Beanstalk
  - runs your applications in the cloud
### Lambda
  - serverless: upload your code and it will respond to events
    + e.g. you upload your code, and in you point your application to lambda, and lambda will run your code against the events you send it
### lightsail
  - out of the box cloud (e.g. wordpress, drupal, etc)
    + for people who dont know how to use AWS

## storage
### S3
  - object based storage: a virtual disk in the cloud where you can store objects (i.e. any kind of file, think dropbox)
### Glacier
  - archive objects, think S3 for long term storage
  - takes around 3/4 hours to retrieve objects
### EFS
  - elastic file service: block based storage where you can install applications/databases and share them with virtual machines (ec2)
### storage gateway
  - a way to connect S3 to your on premise datacenter
  - you install a Virtual Machine in your computer, and it connects to S3

## databases
### RDS
  - relational database service: mysql, postgressql, mariadb, sql server, oracle, aurora
#### aurora
  - postgress and mysql
### Dynamodb
  - Nosql database:
### Redshift
  - data warehousing for big data so you dont slow down your production db
### elasticache
  - caching your hot data in the cloud:

## migration services
### snowball
  - use to be import/export: you send discs to amazon, and they transfer the content of those disks to S3/EBS/etc
  - now its a briefcase size appliance, you plug in your data, and you send the box back to amazon
    + now you have to upload your own data
  - snowball edge:
    + a piece of amazon web service that you can use on premise
### DMS
  - database migration services: migrate on premise/aws databases to other regions/architectures
    + no downtime during migration
### SMS
  - server migration services: same thing as DMS, but instead targets virtual machines (vm ware specifically)

## Analytics
### Athena
  - run sql series on S3
    + good for anazlying csv/json files stored in s3
### Elastic map reduce
  - used to process large amounts of data, e.g. (log files, web indexes, financial market data, etc) uses hadoop/apache spark/ etc
### cloud search / elastic search
  - create a search engine for your application
  - cloud search: fully managed
  - elastic search: create search capabilities
### kinesis
  - streaming and analzying real time data (financial transactions, social media streams (Sentiment analysis, etc))
    + runs at TB of data per hour
### data pipeline
  - move data from one place to another (e.g. s3 > Dynamodb)
### quick site
  - business analytics tool for creating visualizations and dashboards for data that exist in AWS (s3, redshift, rds, etc)

## Security and Identity
### IAM
  - identiy access management
    + the fundamental component of AWS, how you sign in, authenticate, permissions, groups, etc.
### inspector
  - agent installed on your VM and does security reporting
### certificate manager
  - free SSL certs for your domain names
### directory service
  - way of using active directory from microsoft with AWS
### Web application firewall
  - application level protection to your website
    +  sql injection, cross site scripting, etc.
### artifacts
  - where you get your documentation/compliance certs in the amazon console

## management tools
### cloud watch
  - monitor your AWS performance
### cloud formation
  - a way of turning your infrastructre into code, a document that describes your aws environment allowing you to provision your entire infrastructure via CLI
### cloud trail
  - auditing your AWS resources, tracking changes to your AWS environment
### Opsworks
  - automating deployments using shift
### config manager
  - automatically monitors your environment and gives warnings when something may break your configuration settings
    + you can setup alerts based on changes to your AWS environment
### trusted advisor
  - gives you tips on how to optimize your security and performance of AWS

## application services
### step functions
  - a way of visualizing whats happening inside of your application
### simple workflow service
  - a way of coordinating both automated and human led tasks
    + e.g. an order for a calculator, which includes both programatic and human processes, this coordinates it
### api gateway
  - create, publish, maintain, and secure api's at scale
    + allows your application to access back end services
### appstream
  - streaming desktop applications to your users
### elastic transcoder
  - changes video formats to suits all different devices

## developer tools
### code commit
  - i.e. github, a place to store your code
### code build
  - a way of compiling your code
### code deploy
  - a way of deploying code to ec2 instances
### code pipeline
  - keeping track of your code versions

## mobile services
### mobile hub
  - add, configure, and design features for mobile apps
    + user authentication, data storage, push notification, analytics, etc.
    + it has its own console distinct from aws console
### cognitio
  - users sign in/up to your app
### device farm
  - improve quality of mobile apps by testing them on hundreds of real phones
### mobile analytics
  - collect and analyze app usage data
### pin point
  - understand and engage with application users
    + i.e. google analytics for mobile apps
    + what are users doing, how are they doing it, their behavior, identify those uesrs, and send notifications, track results of notification campaigns,

## business productivity
### work docs
  - storing important work documents in the cloud
### work mail
  - sending and receiving email


## iot
## desktop and app streaming
### workspaces
  - a way of having your desktop in the cloud
### appstream 2.0
  - a way of streaming desktop applications to your users


## artifitial intelligence
### alexa
  - essentially talking to lambda
  - lex: you no longer need an echo to communicate to alexa
### poly
  - advanced text to speech with 47 different voices with 24 different languages
    + send text to service and receive an mp3
### machine learning
  - you give AWs a dataset, you tell it what the outcomes are based on the dataset, and amazon will analyze it and predict outcomes for future decisions
    + a customer comes to site who fits the profile, and amazon predicts the outcome
### rekognition
  - upload a picture and it tells you whats in the picture
  - uses facial recognition so you can compare faces


## messaging
### simple notification services
  - email / text messaging users
### SQS
  - decoupling your applications
  - its a queue system, your application polls SQS for jobs
### Simple Email service
  - send and receive emails using AWS

# cli
## links
  - [node sdk](https://aws.amazon.com/sdk-for-node-js/)
## best practices
## background
  - aws SERVICE COMMAND
    + `aws s3 ls`
  - aws configure #setup your user credentials
    + also located at `~/.aws`
      - contains config and credentials files for you to edit manually
## s3
  - make bucket: `aws s3 mb s3://YOURBUCKETNAME`
  - list all buckets: `aws s3 ls`

# AWS best practices
  - never store your credentials on any resource or in any code
    + instead use roles for managing access
    + you can confirm no user credentials by:
      1.  `ls ~/.aws` if the folder is not empty, that means you added user credentials

# developer exam
  - global infrastructure
  - networking and content Delivery
  - compute
  - databases (dybnamo)
  - storage (s3)
  - IAM
  - management tools (opsworks it uses chef)
  - messaging: SNS, SQS, SES
# Study guide
## notes
  - not all services are available in all regions, so choose your regions wisely
  - IAM operates in the global region
  - EC2: a virtual machine

## IAM: identity access management
### places
  - [signin](https://YOUR-ACCOUNT-ALIAS.signin.aws.amazon.com/console)
  - [aws signin endpoint for saml](https://signin.aws.amazon.com/saml)
  - Dashboard: where you see highlevel IAM settings
### background:
  - manage users and their access to the AWS console
    + centralized controlled to AWS account
    + shared access to AWS account
    + granular permissions
    + identity federation: including active directory, facebook, linkedin, etc
    + multifactor authentication
    + temporary access for users/devices/services
### TERMINOLOGY
  - users: end users, i.e. people
  - Groups: a collection of users under one set of permissions
  - Roles: create roles and assign them to users and/or AWS resources
    1. create a role
    2. assign to a resource
  - Policies: a document that defines one/more permissions that are associated with users, groups, and roles
  - Identity Providers:
  - Account settings
  - Credential report
  - Encryption Keys
  - root account: the email addy you use to signup for aws
    + never login to the root account, even create yourself a new user with the permissions you need
  - SAML: secure assertive markup language, provides a cookie that is set in the browser
  - [web identity federation](https://web-identity-federation-playground.s3.amazonaws.com/index.html): authenticating with AWS via applications like facebook, linkedin, google, etc.
  - ARN: amazon resource name
### users
  - access types:
    + programmatic: CLI/application access
    + management console: the GUI
    + security credentils: provides programmatic access via an access key and secret key
      - cannot be used to log into console
      - you only get these once, make sure to download them or you'll have to regenerate them
    + name and pass: used to login to console
      - cannot be used for programmatic access
### groups
  - can have up to 10 policies attached

### Policies
  - is a json object containing a version and a statement
    + statement has effect and allow
    - IAM policy: i.e. your password policy
#### major Policies
  - administrator access: same access as root account
  - system administrator: level below administrator
### roles
  - allow one AWS service to interact with another
  - Service Roles: specifically for aws resources
    + can only be associated with EC2 resources when you create the EC2
    + if you create a role that provides s3 access > assign it to an EC2 when you create the EC2 > you will be able to automatically access the S3 without supplying credentials
  - cross-account access: allows one aws account to interact with another
  - identity provider access: for linkedin/facebook/etc to interact with aws resources
  - roles can only be give to EC2 instancs when the EC2 is created
    + you can only change the permissinos associated with the role
### active directory federation
  1. browse to some URL (e.g. blah.com/signon.aspx)
  2. user is authenticated against some active directory
  3. user receives cookie that is stored in the browser
  4. browser posts the cooki to AWS signon endpoint for SAML (signin.aws.amazon.com/saml)
  5. user receives signin URL and is redirected to the console
  6. from the user perspective, it happens transparently, he starts at internal signon url and ends up at the AWS management console without ever supplying any AWS credentials

## EC2: [elastic compute cloud](https://aws.amazon.com/documentation/ec2/)
  - the backbone of AWS, its basically a virtual machine
  - web service that provides resizeable compute capacity in the cloud
  - reduces the tie require dto obtain and boot new server instances to minutes
  - allows to quickly scale capacity (up/down) as your computing requirements change
## [links](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html):
  - [historical spot prices](https://ec2price.com/)
  - [setting up with amazon ec2](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html)
  - [getting started with ec2 linux](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)
  - [using amazon ec2 via aws cli](http://docs.aws.amazon.com/cli/latest/userguide/cli-using-ec2.html)
  - [instances and amis](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instances-and-amis.html)
  - [regions and availability zones](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)
  - [instance types](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html)
  - [instance metadata](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)

  - [tagging](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html)
  - [ec2 console](https://console.aws.amazon.com/ec2/.)
## pricing models:
  - on demand: fixed rate, by the hour
    + useful during peak seasons
  - reserve: for 1 / 3 terms, capacity reservation, discounted on the hourly charge for an instance
    + useful for minimum state
  - spot: bid whateve ryou want for instance capacity
    + this is where you can get the most savings
    + the spot can be pulled at any time, amazon will only give you 1 hour before terminating the instance if the market price rises above your spot price
## TERMINOLOGY
  - instances: virtual computing environments
    + EBS backed instance: an EC2 instance whose root volume is EBS
  - Instance types: specific configurations of CPU, memory, storage, and networking capacity
  - instance store volumes: for temporary data thats deleted when you stop/terminate an isntance
  - Amazon EBS volumes: elastic block stores: persistant storage
  - regions and availability zones: physical locations for your ec2 instances and EBS volumes
  - key pairs: securely login (ssh) with public and private keys
    + amazon stores public key
    + you store private key
  - AMI: amazon machine images; preconfigured templates that package the bits you need for a server (e.g. operating system, additional software, etc)
  - security groups: a firewall: enables you to specify protocols, ports, and source IP ranges that can reach your instance
  - Elastic IP addresses: static IPv4 addresses for dynamic cloud computing
  - tags: metadata that you can create and assign to your amazon resources
  - VPCs: virtual private clouds: virtual networks you create that are logically isolated from the rest of the AWS cloud, and can optionally be connected to your own network
  - IOPS: input/output per second
    + a way of measuring how fast a disk is from a read and write perspective
    + more IOPS > better
## instance types
  - T2: lowest cost, general purpuse
    + use case: web servers/small dbs
  - M4: general purpose
    + use case: application servers
  - M3: general purpose
    + use case: application servers
  - C4: compute optimized
    + cuu intensive apps/dbs
  - C3: compute optimized
    + use case: cpu intensive apps/dbs
  - R3: memory optimized
    + use case: memory intensive apps/dbs
  - G2: graphics/general purpose gpu
    + use case:
      - video encoding
      - machine learning
      - 3D application streaming
  - I2: high speed storage
    + use case:
      - nosql dbs
      - data warehousing
      - etc
  - D2: dense storage
    - use case
      - fileservers
      - date warehousing
      - hadoop
  - when to use which EC2 instance type
    - remember this acronym: DIRT MCG
      + D for density
      + I for IOPS
      + R for RAM
      + T for cheap general purpose (i.e. T2 Micro)
      + M for main choice for general purpose apps
      + C for compute
      + G for graphics
## EBS: Elastic Block storage
  - storage volumes that can be associated with EC2 instances
    + can create a file system
    + can run a database
    + or use the storage for anything you would normally use a block device
  - place EBS in a specific availability zone
    + can be automatically replicated to protect you from failure of a single component
  - cannot be attached to more than 1 EC2 at a single time
  - think of EC2 as a computer, and EBS as a harddrive
### EBS Volume (i.e. storage) types
  - GP2: general purpose SSD
    + designed for 99.99% availability
    + ratio of 3 IOPS per GP with 10k IOPS
    + ability to burst to 3k IOPS for short periods for volumes under 1Gib
  - IO1: Provisioned IOPS SSD
    + designed for I/O intensive apps
    + large relational/NoSQL dbs
    + if you need more than 10K IOPS
  - Magnetic (standard)
    + oldschool disks, (think old laptops/comps)
    + lowest cost per GB of all EBS types
    + whenever data is accessed infrequently
    + good for fileservers
## tips and tricks
### using ssh (pem file) to connect to EC2
  1. create ec2 and associate it wiht a pem file
  2. get public ip of ec2
  3. ensure the pem file has correct permissions
    - `chmod 400 udemy.pem`
  4. ssh into server
    -`ssh -i 'udemy.pem' ubuntu@SERVER_PUBLIC_IP`
    - each param can be any order
### specify startup bsh scripts
  - scripts that run when you launch an instance
    1. create an instance
    2. on 'configure instance details' page, click 'advanced details link'
    3. insert your bash script, e.g.
      ```
        #!/bin/bash
        yum update -y
        yum install httpd24 php56 git -y
        service httpd start
        chkconfig httpd on
        cd /var/www/html
        echo "<?php phpinfo();?>" > test.php
        git clone https://github.com/acloudguru/s3
      ```

# USEFUL links
  - [installing aws cli](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
######## KNOWN STUDY questions
# IAM
  1. can you authenticate with active directory?
    - yes, but only with SAML
  2. do you authenticate with active directory first, or do you get temp security credntial first and then authenticate with active directory
    - you authenticate with active directory first, then you receive the temp security credential
    1. navigate to ADFS web server
    2. user signin with their credentials
    3. the browser posts the SAML assertion to AWS SAML endpoint for SAML and the AssumeRoleWithSAML api request is used to requet temporary security credentials
    4. the user is then able to access the AWS console
  3. can you authenticate with applications like google, facebook, etc. ?
    - yes, via web identity federation
  4. how do you authenticate via web identity federation ?
    1. sign into facebook/etc via web identity federation console to receive token from facebook
    2. api call is made via AssumeRoleWithWebIDentity and you receive temp security credentials from AWS
    3. you can now access AWS resources with your token
  5. what does ARN stand for?
    - amazon resource name
  6. can you change the role of an EC2 instance?
    - roles can only be give to EC2 instancs when the EC2 is created
      + you can only change the permissinos associated with the role
  7. what is the name of the API call to request temp security credentials from the AWS platform when federating with active directory?
    - assume role with saml

# EC2
  1. based on some scenario, which ec2 pricing model should you use?
    - spot instances always the cheapest
      - if spot instance is removed by amazon, you wont be charged for partial hour of usage
      - if you terminate, you will be charged
    - if you cant afford any down time, go for on demand
    - on demand: perfect for test/dev envs, supplementing reserve instances during spikes,
      + users that want low cost and flexibility without any up front cost / long term commitment
      + applications with short term, spiky, or unpredictable workloads that cannot be interrupted
      + applications that are being developed/tested on an amazon ec2 for the first time
    - reserved isntances:
      + apps with steady state/predictable useage
        - if you know exactly what you'll need for the next 12 months, always do reserved
      + apps that required reserved capacity
      + users who are able to make upfront payments to reduce their total/long-term computing costs
    - spots:
      + apps that have flexible start/end times
      + apps that are only feasible at very low prices
      + users with urgent computing needs for large amounts of additional capacity
        - if you only need it for a short period of time
  2. What are the 3 types of EBS and when would you use each
    - General purpose SSD (up to 10k iops)
      + **TODO**
    - provisioned IOPS SSD: (more than 10k IOPS)
      + **TODO**
    - magnetic: cheap, infrequently accessed storage
      + **TODO**
  3. how many EC2 instances can 1 EBS volume be mounted to at the same time
    - ONE!!! DUH
  4. How can you connect a single storage volume to more than 1 EC2 at the same time ?
    - use EFS
  5. Should you use user credentials to access EC2?
    - no - the best way to manage access is via roles
  6. how do you get EC2 instance metadata?
    - via cli `sudo curl http://169.254.169.254/latest/meta-data/`
    - returns list of api endponts, see below for example
  7. how do you get EC2 public ip address?
    - via cli `curl http://169.254.169.254/latest/meta-data/public-ipv4`
