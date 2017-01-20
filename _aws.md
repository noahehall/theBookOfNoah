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

# aws javascript cli
## links
  - [node sdk](https://aws.amazon.com/sdk-for-node-js/)
  - [developer guide](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html)
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
## elastic load balancers
### elb listeners
  - a process that checks for connection requests to your load balancer
    + client to load balancer: protocol and port for connections to front-end clients to load balancer
    + load balancer to back-end instance: a protocol and port for connections to back-end instance to load balancer
    + supported ELB protocols: http, https, TCP, SSL
    + ELB supports all ports with EC2 VPC (1-65535)
      + ELB classics only support: 25, 80, 443, 465, 587, 1024-65535

## S3
  - safe place to store files
  - only for object based storage
  - the data is spread across multiple devices and facilities to withstand failure
### basics
  - object based storage, i.e. allows you to upload files
  - files can be from 0-5tb
  - unlimited storage capacity (of course they charge you)
  - files are stored in buckets (i.e. folder)
  - universal name space: i.e. bucket names must be global (all users bucket names must be unique)
  - bucket names are always in the form: `https://s3-REGION.amazonaws.com/BUCKETNAME`
  - has SLA of 99.99% availability guarantee availability and information durability (i.e you wont lose the any files)
  - lifecycle management (move through different storage tiers after certain time period)
  - supports versioning
  - supports encryption (several ways)
  - secure data using access control lists and/or bucket policies
### price structure
  - storage costs
  - requests costs
  - storage management pricing (adding tags to objects)
  - data transfer pricing (data in is free, moving data around s3 costs)
  - transfer acceleration: enables fast, easy, secure transfore of files over long distances between end users and s3 buckets
    + uses cloudfronts globally distributed edge locations.
    + data is transfered over an optimized network path
    + users upload data to EDGE locations, and amazon handles saving that data into your actual buckets
### tiered storage
  + S3 standard: 99.999999.. (11 9s)% durability, sotred in multiple places
    - fault tolerance 2 s3s
  + S3 IA- infrequently accessed) for data that is accesses less frequenty, but requires rapidaccess when needed
    - cheaper than s3
    - fault tolerance 2 s3s
    - minimum object size 128kb
    - retrieval fee: per gb retrieved
    - first byte latency: milliseconds
  + Reduced redundancy storage: designe dfor 99.99% durability (not 11 9s)
    - cheaper than standard
    - good for replaceable files
    - fault tolerance: 1 s3
    - first byte latency: milliseconds
  + glacier (not really s3): very cheap, used only for archivl
    - takes 3-5 hours to restore from glacier
    - low cost: 0.01 per gb per month
    - minimum storage duration: 90 days
    - no sla
    - first byte latency: minutes/hours
### TERMINOLOGY
  - object based storage: objects are things like videos, documents, photos, etc
    - flat files: objects to be stored
  - block based storage: things like operating systems
  - bucket: a folder
### data consistency model:
  - new objects: read after write consistency:
    + if you create a new object, you will be able to read that object right away and receive the data
  - updates (put/delete) objects): eventual consistency for overwrite puts and deletes (takes time to propagate)
    + if you update an object, and try to read from it immediately after (couple ms), you may get the old data or the new data
### S3 objects
  - all s3 objects have:
    1. key: the name of the object
    2. value: the data and is made up of a sequence of bytes
    3. version ID: important for versioning
    4. metadata: data about the data you are storing
      - e.g. the date created/updated/etc
    5. subresources:
      1. access control lists: permissions, who can access this object. fine grained permissions on objects, or buckets
      2. torrent: S3 supports bit torrent protocol
### S3 static website
  1. create bucket and open properties
  2. enable static website hosting
  3. set index.html and error.html as the files
  4. set permission 'open/download'for everyone on both files
### S3 set versioning on bucket
  - once bucket is turned on, it cannot be removed (but it can be disabled)
  - delete a file
  - go into old console (in s3 hmepage)
  - delete the file with the delete marker
  - go back to new console (if you want to)
### S3 lifecycle management
  - manage storage costs by controlling the lifecycle of your buckets/files
  - create rules to transfer your files to infrequent access storage class or glacier
  + transitions for current versions
    - transition to standard infrequent storage classics
      + you specify how many days after object creation date
    - transition to glacier
      + specify how man days after object creation
    - expire objects
      + set the current version to a previous version after X days
  + action on previous versions
    - transition to infrequent access storage class X days after object has been a previous version
  + archive to glacier
    - transition to glacier X days after object has been a previous version
  + permanently delete
    - X days after object has been a previous version


## cloudfront
  - can be used to deliver your entire website,
  - optimized to work with other amazon web services
  -
### Terminology
  - web distribution: used for websites
  - RTMP distribution: used for media streaming (e.g. adobe flash)
  - CDN: content delivery network:
    + system of distributed servers that deliver assets based on the geographical location of the user
  - edge location: the location where content will be cached
    + distinct from AWS region/availability zones
  - origin: the origin of all files that theCDN will destribute
    + S3 bucket, EC2 instance, Elastic load balancer, Route53
      + usually an S3 bucket/ec2 instance/elastic load balancer with ec2 instances behind it
      + wherever the origin files are
  - distribution: the name given to the CDN which consists of a collection of edge locations
### edge location workflow
  1. user makes request to an edge location distribution URL
  2. edge location checks if the asset has been cached at that particular edge location
  3. if yes, it returns it, if not, it retrieves it, caches it, and returns it to the user
    + it caches it for the duration of the TTL
### create a distribution terms
  - oring domain name: prepopulated with all AWS resources, or you can insert a domain name
  - origin path: adding subfolders within the origin
  - origin id: give it anything
  - restrict bucket access: to stop users frm using S3
    + requires origin access identity:
      - creates a new user for cloudfront to access S3
  - Grant read permissions on bucket: automatically updates bucket policy
  - origin custom headers: add headers
  - path pattern: if you have assets in different paths, e.g. /videos and /images
  - viewer protocol policy: http/https, redirect http to https, or https only
    + best to do http to https
  - allowed http methods: specify what clients can do
    + you can post to cloudfront, and amazon will manage uploading it to your s3
  - forward headers: leave at default
  - object caching: click customize to modify TTLs
  - Minimum, default and maximum TTL in seconds: the minimum time to live, how long do assets exist in edge locations
    + default ttl: determines how long assets will be cached, and thus when your edge locations will be updated
    + you have to consider the rate of change for your files
    + modify TTLs usually require you to clear the cache, and that costs
  - restrict viewer access (use signed urls/cookies): if you want to restrict content to a certain audience, e.g. only users who have paid for a service can access a certain url
  - AWS WAF Web ACL: web application firewall, a layer 7 protection.
    + operates at the application layer, prevents sequel injection and Cross site scripting
  - alternate domain names:
  - ssl certs:
### created distribution terms
  - distribution id
  - domain names
  - certs
### created distribution configuration
#### origins
  - a single distribution can have multiple origins/s3 buckets/ec2 instances/ load balancers
  - click a distribution > click the origins tab
#### behaviors
  - modify how the distribution acts based on certain criteria
  - you can have multiple behaviors per distribution
#### error pages
  - custom error code / error pages
#### restrictions
  - geo restriction based on white / black lists for countries
#### invalidations
  - remove objects from cloudfront edge locations to force cloudfront to rehydrate the cache
  - it does costs money
#### tags
  - you can add tags to the distribution
### s3 transfer acceleration
  - utilizes cloudfront edge network to accelerate uploads to s3
    + instead of uploading directly to s3 bucket, you use a distinct URL to upload directly to an edge location, which will auto transfer that file to s3
    + distinct url: BUCKETNAME.s3-accerlate.amazonaws.com
    + user upload to cloudfront edge location > cloudfront sends to s3
  - s3 bucket > properties > transfer acceleration
## Cross Origin Resource Sharing (cors)
  - allows one javascript in one s3 bucket to reference code in another s3 bucket
  - add the static website URL from one bucket into the index.html of another bucket
  - create a CORS file
    + bucket containing file to share > permissions > access control list > cors configuration > insert the static website url your bucket that will be requesting this file
    + you can have anything in a bucket, across different regions, and share them with any s3 bucket

## databases
  - RDS: managed relational database service
  - DynamoDB: managed nosql database service
  - Elasticache: in memory caching engine
  - Redshift: Data warehousing service
  - DMS: managed database migration service
### what are relational databases
  - think of a traditional spreadsheet:
    + database: the filename of the spreadsheet
    + tables: the different worksheet
    + rows: each row in a worksheet is a record with values for each column
    + fields (columns): each column in the worksheet, it is required to have the same type of data for each row
  - relational database types on RDS
    + SQL server
    + oracle
    + Mysql server
    + postgressql
    + aurora
    + Mariadb
  - non relationship database types
    + couchdb
    + mongodb
    + cloudant
    + only one on AWS in DynamoDB
  - Describe NoSQL databases
    + are document oriented databases, think of JSON
      - collection = table
      - document = row
      - key value pairs = fields (columns and their values)
      - embedded datastructures: a key whose value is a a hash/array
  - database warehousing
    + used to pull in very large and complex data sets
    + used by management to do queries on data (e.g. current performance vs targets)

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


## VPC
### basics
  - VPC: virtual private cloud: i.e. its just a datacenter
    + a virtual network environment isolated from the other AWS infrastructure
    +
  - are in a region, and can be in multiple availability zones in a single region
  - use security groups and network access control lists for security
### TERMINOLOGY
  - public facing subnet: has internet access (e.g. for webservers)
  - private facing subnet: no internet access (e.g. for databases)
# USEFUL links
  - [installing aws cli](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)


######## KNOWN STUDY questions
# exam
  - 80 minutes
  - 55 questions
  - $150
  - conducted online at an approved place
  - register at webassessor.com

# AWS
  1. which servers are free?
    - usually orchestration services, e.g.: cloudformation, elastic beanstalk, autoscaling, opworks
    - however the resources they create & use are NOT FREE

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
  8. [read the iam faq](https://aws.amazon.com/iam/faqs/)

# sdk
  1. [what SDKs are currently available?](https://aws.amazon.com/tools)
    - android, browser, ios, java, .net, node, php, python, ruby, go, c++, aws mobile sdk, aws iot device sdk
  2. what is the default region for sdks who have them?
    - US-EAST-1
  3. which SDKs have default regions?
    - java
  4. which SDKs do not have default regions?
    - node
  5. if you dont set a default region, what will be used?
    - US-EAST-1

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
  8. are elastic load balancers free?
    - no, you are charged by hour per GB of usage
  9. what protocols can you use when setting up an elastic load balancer for EC2?
    - http & https
    - tcp & ssl
  10. what are some common http codes?
    - 200: request success
    - 3xx: request was redirected
    - 4xx: client error (e.g. 404 not found, i.e. somethings wrong with code in browser)
    - 5xx: server error (i.e.something is wrong with server config/code)
  11. how to enable encryption at rest using EC2 and elastick block store?
    - configure encryption when creating the EBS volume
  12. [read the ec2 faq](https://aws.amazon.com/ec2/faqs/)

# S3
  1. what is the syntax for bucket URLs ?
    - `https://s3-REGION-NAME.amazonaws.com/BUCKET-NAME`
  2. what status code will be returned on successful file uploads to buckets?
    - http 200
  3. how should you store your files in S3?
    - add a salt to the beginning of the file name so that the objects are stored evenly across S3, instead of grouped together
      + especially for file names that are similar
  4. what kind of storage is S3 ?
    - S3 is object based storage (i.e upload files)
  5. What size files can S3 hold ?
    - from 0 bytes to 5 TB
  6. how much storage is available on S3 ?
    - unlimited storage
  7. where are files stored in S3 ?
    - in buckets (i.e. files)
  8. What kind of name space is S3 bucket names ?
    - S3 bucket names are universal (i.e. global) namepace, i.e. names must be unique globally across all aws users and must be lowercased
  9. what kind of consistency is for PUTS of new objects?
    - read after write consistency for PUTS
    - immediately available
  10. what kind of consistency for overwrite puts and deletes?
    - eventual consistency
    - takes time to propagate (not immediate)
  11. what kind of storage classes/tiers are available
    - S3 (standard): durable, immediately available, frequently accessed
    - S3 IA: durable, immediately available, infrequently accessed)
      + must be >= 128kb and 30 days after creation date
    - S3 reduced redundancy storage: data that is easily reproducible, e.g. thumbnails
    - Glacier: archival data,  3-5 hours before accessing
      + must be 30 days after S3 IA date
  12. what makes up an S3 object?
    - key (name)
    - value (data)
    - version ID
    - metadata
    - subresources:
      - ACL: access contorl list
      - torrent
  13. what is the format for s3 urls?
    - your.bucket.name.s3-website-REGION.amazonaws.com
  13. [read the S3 FAW](https://aws.amazon.com/s3/faqs/)
  14. can you remove versioning from a bucket after you enable it?
    - once bucket is turned on, it cannot be removed (but it can be disabled)
  15. what is versioning?
    - stores all versions of an object, even deleted ones
  16. how do add security to S3 versioning
    - setup versioning's MFA delete capability
  17. can lifecycle management be used with versioning?
    - yes
  18. can lifecycle be applied to current or previous versions?
    - both
  19. what actions can be done with lifecycle management?
    - transition to infrequent access storage class?
      + at lest 128kb and 30 days after creation date
    - archive to storage class
      + 30 days after IA, if relevant
    - permanently delete
  20. what types of encryption are available?
    - in transit: ssl/tls, have to use https,
    - at rest
      + server side encription using S3 managed keys: SSE-S3
        -each object is encrypted with a unique employing strong multifactor encryption with a master key that regular rotates
      + aws key management service: managed keys: SSE-KMS,
      + server side encryption with customer provided keys: SSE-C
        - you manage the keys, and AWS manages the encryption when writing to disk, decryption when reading from disk
    - client side encryption
      + you encrypt data yourself on the client side and uploading to S3 and its saved as encrypted data
  21. what types of storage gateways available on S3?
    - file gateway: for flat files, sotred directly on S3
    - volume gateway:
      + stored volumes: entire dataset is stored on site and is backed up asynchronously backed up to s3 (block based storage)
      + cached volumes: entire data set is stored on s3 and the most frequenlty accessed data is cached on site
    - gateway virtual tape library (VTL)
      + used for backup and uses popular backup apps like netbackup, backup exec, etc
  22. What types of snowball exists?
    - pure storage, various types of sizes
    - snowball edge: storage + compute capabilities, you can run lambda functions
    - snowmobile: 100PT worth of storage
  23. what is snowball?
    - import and export to s3
  24. who benefits most from S3 transfer acceleration?
    - people in far away locations
  25. what characteristics exist from S3 static websites
    - only static content (no php/.net)
    - serverless
  26. what is cors?
    - cross origin resource Sharing
    - when you have assets in multiple origins/domains
    - need to enable cors on the resources buckdt and state the URL for the origin that will be calling the bucket
  27. what are the bucket urls?
    - static hosting: bucketname.s3-website.REGION.amazonaws.com
    - s3 bucket: s3.REGION.amazonaws.com/bucketname
  28. if you encrypt a bucket on s3, what enryption do aws use?
    - advanced encryption standard (AES) 256
  29. what is the largest size file you can transfer to S3 using a put operation?
    - 5gb, after that you must use multipart upload

# cloudfront
  1. what is an edge location ?
    - the location where content will be cached
  2. what is the origin?
    - origin of all files that the CDN will distribute
    - an s3 bucket, ec2 instance, elastic load balancer, or route53, or not on AWS
  3. what is a distribution
    - the name given to the CDN which consists of a collection of edge locations
  4. what are the types of distributions
    - web distribution: for websites
    - RTMP: used for media streaming
  5. Can you read or write to edge lcoations?
    - you can read or write
  6. how long are objects cached?
    - for the life of the TTL (time to live)
    - you set it on objects
  7. Will you be charged for clearing cached objects?
    - yes
  8. how do you set TTLs ?
    - its all based on the rate of change for your files
  9. how are you going to secure cloudfront/s3 to certain users
    - use restrict viewer access and choose presigned urls/cookies
  10. are invalidations free ?
    - no it costs each time
  11. can you upload or download from cloudfront ?
    - you can do both

# databases
  0. RDS and DynamoDB come up a lot in the exam! read the FAQs!
    - [RDS faq](https://aws.amazon.com/rds/faqs/)
    - [dynamodb faq](https://aws.amazon.com/dynamodb/faqs/)
  1. what type of relational database are on RDS
    + SQL server
    + oracle
    + Mysql server
    + postgressql
    + aurora
    + Mariadb
