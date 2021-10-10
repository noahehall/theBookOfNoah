[aws certification hp](https://aws.amazon.com/certification/certification-prep/)

# Everything you need to know to become AWS certified

- [test exams](https://www.webassessor.com/wa.do?page=publicHome&branding=AMAZON)
- [aws developer associate](https://aws.amazon.com/certification/certified-developer-associate/)

# AWS Global Infrastructure

## Regions, availability zones, edge locations

- a place in the world where AWS resources exist
  - 14 Regions: e.g. N. California/  N. Virginia,
    - or can also be called: s-west-1b, us-west-1c
    - a geographical area consisting of 2/more availability zones
  - 38 availability zones:
    - a single/multiple data centers
  - 66 edge locations: a CDN for cloudfront
    - CDN: a way to cache files media objects (js, html, videos, soundfiles, etc) in the cloud

# AWS Platform

## Networking and Contend Delivery

### VPC

- virtual private cloud: a virtual datacenter where you can deploy your assets
  - VPCs exist in a region, and different VPCs can be connected

### Route 53

- DNS service: maps IP addresses to domain names
  - port 53: the DNS port

### cloudfront

- a cdn comprised of edge locations

### Directconnect

- a way to connect your physical datacenters to AWS with dedicated hardware lines
  - mostly its for security/reliability

## Compute

### EC2

- elastic computer cloud: virtual machines in the cloud

### EC2 Container Service

- Container management service for docker containers, allows you to run applications on a managed cluster of amazon ec2 instances

### Elastic Beanstalk

- runs your applications in the cloud

### Lambda

- serverless: upload your code and it will respond to events
  - e.g. you upload your code, and in you point your application to lambda, and lambda will run your code against the events you send it

### lightsail

- out of the box cloud (e.g. wordpress, drupal, etc)
  - for people who dont know how to use AWS

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
  - now you have to upload your own data
- snowball edge:
  - a piece of amazon web service that you can use on premise

### DMS

- database migration services: migrate on premise/aws databases to other regions/architectures
  - no downtime during migration

### SMS

- server migration services: same thing as DMS, but instead targets virtual machines (vm ware specifically)

## Analytics

### Athena

- run sql series on S3
  - good for anazlying csv/json files stored in s3

### Elastic map reduce

- used to process large amounts of data, e.g. (log files, web indexes, financial market data, etc) uses hadoop/apache spark/ etc

### cloud search / elastic search

- create a search engine for your application
- cloud search: fully managed
- elastic search: create search capabilities

### kinesis

- streaming and analzying real time data (financial transactions, social media streams (Sentiment analysis, etc))
  - runs at TB of data per hour

### data pipeline

- move data from one place to another (e.g. s3 > Dynamodb)

### quick site

- business analytics tool for creating visualizations and dashboards for data that exist in AWS (s3, redshift, rds, etc)

## Security and Identity

### IAM

- identiy access management
  - the fundamental component of AWS, how you sign in, authenticate, permissions, groups, etc.

### inspector

- agent installed on your VM and does security reporting

### certificate manager

- free SSL certs for your domain names

### directory service

- way of using active directory from microsoft with AWS

### Web application firewall

- application level protection to your website
  - sql injection, cross site scripting, etc.

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
  - you can setup alerts based on changes to your AWS environment

### trusted advisor

- gives you tips on how to optimize your security and performance of AWS

## application services

### step functions

- a way of visualizing whats happening inside of your application

### simple workflow service

- a way of coordinating both automated and human led tasks
  - e.g. an order for a calculator, which includes both programatic and human processes, this coordinates it

### api gateway

- create, publish, maintain, and secure api's at scale
  - allows your application to access back end services

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
  - user authentication, data storage, push notification, analytics, etc.
  - it has its own console distinct from aws console

### cognitio

- users sign in/up to your app

### device farm

- improve quality of mobile apps by testing them on hundreds of real phones

### mobile analytics

- collect and analyze app usage data

### pin point

- understand and engage with application users
  - i.e. google analytics for mobile apps
  - what are users doing, how are they doing it, their behavior, identify those uesrs, and send notifications, track results of notification campaigns,

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
  - send text to service and receive an mp3

### machine learning

- you give AWs a dataset, you tell it what the outcomes are based on the dataset, and amazon will analyze it and predict outcomes for future decisions
  - a customer comes to site who fits the profile, and amazon predicts the outcome

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

###### study guide ########

# aws javascript cli

## links

- [node sdk](https://aws.amazon.com/sdk-for-node-js/)
- [developer guide](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html)

## background

- aws SERVICE COMMAND
  - `aws s3 ls`
- aws configure #setup your user credentials
  - also located at `~/.aws`
    - contains config and credentials files for you to edit manually

## s3

- make bucket: `aws s3 mb s3://YOURBUCKETNAME`
- list all buckets: `aws s3 ls`

# AWS best practices

- never store your credentials on any resource or in any code
  - instead use roles for managing access
  - you can confirm no user credentials by:
      1. `ls ~/.aws` if the folder is not empty, that means you added user credentials

# IAM: identity access management

### places

- [signin](https://YOUR-ACCOUNT-ALIAS.signin.aws.amazon.com/console)
- [aws signin endpoint for saml](https://signin.aws.amazon.com/saml)
- Dashboard: where you see highlevel IAM settings

### background

- manage users and their access to the AWS console
  - centralized controlled to AWS account
  - shared access to AWS account
  - granular permissions
  - identity federation: including active directory, facebook, linkedin, etc
  - multifactor authentication
  - temporary access for users/devices/services

### TERMINOLOGY

- Identity Providers:
- Account settings
- Credential report
- Encryption Keys
- root account: the email addy you use to signup for aws
  - never login to the root account, even create yourself a new user with the permissions you need
- SAML: secure assertive markup language, provides a cookie that is set in the browser
- [web identity federation](https://web-identity-federation-playground.s3.amazonaws.com/index.html): authenticating with AWS via applications like facebook, linkedin, google, etc.
- ARN: amazon resource name

### users

- access types:
  - programmatic: CLI/application access
  - management console: the GUI
  - security credentials: provides programmatic access via an access key and secret key
    - cannot be used to log into console
    - you only get these once, make sure to download them or you'll have to regenerate them
  - name and pass: used to login to console
    - cannot be used for programmatic access

### groups

- can have up to 10 policies attached

### Policies

- is a json object containing a version and a statement
  - statement has effect and allow
  - IAM policy: i.e. your security policy

#### major Policies

- administrator access: same access as root account
- system administrator: level below administrator

### roles

- allow one AWS service to interact with another
- Service Roles: specifically for aws resources
  - can only be associated with EC2 resources when you create the EC2
  - you can only change the permissions associated with the role
  - if you create a role that provides s3 access > assign it to an EC2 when you create the EC2 > you will be able to automatically access the S3 without supplying credentials
- cross-account access: allows one aws account to interact with another
- identity provider access: for linkedin/facebook/etc to interact with aws resources

### active directory federation

  1. browse to some URL (e.g. blah.com/signon.aspx)
  2. user is authenticated against some active directory
  3. user receives cookie that is stored in the browser
  4. browser posts the cooki to AWS signon endpoint for SAML (signin.aws.amazon.com/saml)
  5. user receives signin URL and is redirected to the console
  6. from the user perspective, it happens transparently, he starts at internal signon url and ends up at the AWS management console without ever supplying any AWS credentials

# EC2: [elastic compute cloud](https://aws.amazon.com/documentation/ec2/)

- the backbone of AWS, its basically a virtual machine
- web service that provides resizeable compute capacity in the cloud
- reduces the time required to obtain and boot new server instances to minutes
- allows to quickly scale capacity (up/down) as your computing requirements change

## [links](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

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

## pricing models

- on demand: fixed rate, by the hour
  - useful during peak seasons
- reserve: for 1 / 3 terms, capacity reservation, discounted on the hourly charge for an instance
  - useful for minimum state
- spot: bid whateve ryou want for instance capacity
  - this is where you can get the most savings
  - the spot can be pulled at any time, amazon will only give you 1 hour before terminating the instance if the market price rises above your spot price

## TERMINOLOGY

- instances: virtual computing environments
  - EBS backed instance: an EC2 instance whose root volume is EBS
- Instance types: specific configurations of CPU, memory, storage, and networking capacity
- instance store volumes: for temporary data thats deleted when you stop/terminate an isntance
- Amazon EBS volumes: elastic block stores: persistant storage
- regions and availability zones: physical locations for your ec2 instances and EBS volumes
- key pairs: securely login (ssh) with public and private keys
  - amazon stores public key
  - you store private key
- AMI: amazon machine images; preconfigured templates that package the bits you need for a server (e.g. operating system, additional software, etc)
- security groups: a firewall: enables you to specify protocols, ports, and source IP ranges that can reach your instance
- Elastic IP addresses: static IPv4 addresses for dynamic cloud computing
- tags: metadata that you can create and assign to your amazon resources
- VPCs: virtual private clouds: virtual networks you create that are logically isolated from the rest of the AWS cloud, and can optionally be connected to your own network
- IOPS: input/output per second
  - a way of measuring how fast a disk is from a read and write perspective
  - more IOPS > better

## EBS: Elastic Block storage

- storage volumes that can be associated with EC2 instances
  - can create a file system
  - can run a database
  - or use the storage for anything you would normally use a block device
- place EBS in a specific availability zone
  - can be automatically replicated to protect you from failure of a single component
- cannot be attached to more than 1 EC2 at a single time
- think of EC2 as a computer, and EBS as a harddrive

### EBS Volume (i.e. storage) types

- GP2: general purpose SSD
  - designed for 99.99% availability
  - ratio of 3 IOPS per GP with 10k IOPS
  - ability to burst to 3k IOPS for short periods for volumes under 1Gib
- IO1: Provisioned IOPS SSD
  - designed for I/O intensive apps
  - large relational/NoSQL dbs
  - if you need more than 10K IOPS
- Magnetic (standard)
  - oldschool disks, (think old laptops/comps)
  - lowest cost per GB of all EBS types
  - whenever data is accessed infrequently
  - good for fileservers

## elastic load balancers

### elb listeners

- a process that checks for connection requests to your load balancer
  - client to load balancer: protocol and port for connections to front-end clients to load balancer
  - load balancer to back-end instance: a protocol and port for connections to back-end instance to load balancer
  - supported ELB protocols: http, https, TCP, SSL
  - ELB supports all ports with EC2 VPC (1-65535)
    - ELB classics only support: 25, 80, 443, 465, 587, 1024-65535
- load balancers should be connected to two public subnets for high availability

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
  - uses cloudfronts globally distributed edge locations.
  - data is transfered over an optimized network path
  - users upload data to EDGE locations, and amazon handles saving that data into your actual buckets

### tiered storage

- S3 standard: 99.999999.. (11 9s)% durability, sotred in multiple places
  - fault tolerance 2 s3s
- S3 IA- infrequently accessed) for data that is accesses less frequenty, but requires rapidaccess when needed
  - cheaper than s3
  - fault tolerance 2 s3s
  - minimum object size 128kb
  - retrieval fee: per gb retrieved
  - first byte latency: milliseconds
- Reduced redundancy storage: designe dfor 99.99% durability (not 11 9s)
  - cheaper than standard
  - good for replaceable files
  - fault tolerance: 1 s3
  - first byte latency: milliseconds
- glacier (not really s3): very cheap, used only for archivl
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

### data consistency model

- new objects: read after write consistency:
  - if you create a new object, you will be able to read that object right away and receive the data
- updates (put/delete) objects): eventual consistency for overwrite puts and deletes (takes time to propagate)
  - if you update an object, and try to read from it immediately after (couple ms), you may get the old data or the new data

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

- transitions for current versions
  - transition to standard infrequent storage classics
    - you specify how many days after object creation date
  - transition to glacier
    - specify how man days after object creation
  - expire objects
    - set the current version to a previous version after X days
- action on previous versions
  - transition to infrequent access storage class X days after object has been a previous version
- archive to glacier
  - transition to glacier X days after object has been a previous version
- permanently delete
  - X days after object has been a previous version

## cloudfront

- can be used to deliver your entire website,
- optimized to work with other amazon web services

-

### Terminology

- web distribution: used for websites
- RTMP distribution: used for media streaming (e.g. adobe flash)
- CDN: content delivery network:
  - system of distributed servers that deliver assets based on the geographical location of the user
- edge location: the location where content will be cached
  - distinct from AWS region/availability zones
- origin: the origin of all files that theCDN will destribute
  - S3 bucket, EC2 instance, Elastic load balancer, Route53
    - usually an S3 bucket/ec2 instance/elastic load balancer with ec2 instances behind it
    - wherever the origin files are
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
  - requires origin access identity:
    - creates a new user for cloudfront to access S3
- Grant read permissions on bucket: automatically updates bucket policy
- origin custom headers: add headers
- path pattern: if you have assets in different paths, e.g. /videos and /images
- viewer protocol policy: http/https, redirect http to https, or https only
  - best to do http to https
- allowed http methods: specify what clients can do
  - you can post to cloudfront, and amazon will manage uploading it to your s3
- forward headers: leave at default
- object caching: click customize to modify TTLs
- Minimum, default and maximum TTL in seconds: the minimum time to live, how long do assets exist in edge locations
  - default ttl: determines how long assets will be cached, and thus when your edge locations will be updated
  - you have to consider the rate of change for your files
  - modify TTLs usually require you to clear the cache, and that costs
- restrict viewer access (use signed urls/cookies): if you want to restrict content to a certain audience, e.g. only users who have paid for a service can access a certain url
- AWS WAF Web ACL: web application firewall, a layer 7 protection.
  - operates at the application layer, prevents sequel injection and Cross site scripting
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
  - instead of uploading directly to s3 bucket, you use a distinct URL to upload directly to an edge location, which will auto transfer that file to s3
  - distinct url: BUCKETNAME.s3-accerlate.amazonaws.com
  - user upload to cloudfront edge location > cloudfront sends to s3
- s3 bucket > properties > transfer acceleration

## Cross Origin Resource Sharing (cors)

- allows one javascript in one s3 bucket to reference code in another s3 bucket
- add the static website URL from one bucket into the index.html of another bucket
- create a CORS file
  - bucket containing file to share > permissions > access control list > cors configuration > insert the static website url your bucket that will be requesting this file
  - you can have anything in a bucket, across different regions, and share them with any s3 bucket

## databases

- RDS: managed relational database service
- DynamoDB: managed nosql database service
- Elasticache: in memory caching engine
- Redshift: Data warehousing service
- DMS: managed database migration service

### relational databases

- think of a traditional spreadsheet:
  - database: the filename of the spreadsheet
  - tables: the different worksheet
  - rows: each row in a worksheet is a record with values for each column
  - fields (columns): each column in the worksheet, it is required to have the same type of data for each row
- relational database types on RDS
  - SQL server
  - oracle
  - Mysql server
  - postgressql
  - aurora
  - Mariadb

### non relational databases

- non relationship database types
  - couchdb
  - mongodb
  - cloudant
  - only one on AWS in DynamoDB
- Describe NoSQL databases
  - are document oriented databases, think of JSON
    - collection = table
    - document = row
    - key value pairs = fields (columns and their values)
    - embedded datastructures: a key whose value is a a hash/array

### database warehousing

- purpose
  - mainly for business intelligence (but i can totally see this for nlp)
  - used to pull in very large and complex data sets
  - used by management to do queries on data (e.g. current performance vs targets)
  - uses different type of architecture both from a database perspective and infrastructure layer perspective
- types of transactions:
  - online transaction processing: OLTP:
    - i want to see a specific row
    - i want specific data from a set of rows
  - online analytics processing: OLAP:
    - I want to analyzie a set of rows
    - I want to compare and run calculations on data within a set of rows
    - you will usually copy your relational database to a data warehousing infrastructure so you can run your analysis separate from your production db

### elasticache

- webservice that makes it easy to deploy, operate, and scale an in0memory cache in the cloud
- types of caches available
  - redis
  - memcached
    - caches the most frequently accessed data

### database migration services

- allows you to migrate your production database to AWS
- AWS manages all the complexities of the migration process like data type transformation, compression, parralell transfer
- ensure data changes to the source db that occur during the migration process are automaticaly replicated to the target
- AWS schema conversion tool: automatically converts the source db schema to a format compatible with the target db
  - take a proprierity database architecture (e.g. oracle) and convert it to an open source db (e.g. mysql)

### Dynamodb

- fast and flexible nosql db service support both document (eg mongo) and key-value (eg redis) data models.
- stored on SSD and spread across 3 geographically distinct data centers
  - data is written in one location, and then replicated to the other two data centers
- data consistency models
    1. eventual consisten reads (Default)
  - consistency across all copies of data is usually reached within a second
  - repeating a read after a short time should return the updated data (best read performance)
    2. strongly consistent reads:
  - a strongly consistent read returns a result that reflects all writes that received a successful response prior to the read
    3. which to use?
  - if your app can wait for up to a second, use eventual consistent reads
  - if your app needs it now: use strongly consistent reads
- great for:
  - mobile, web, gaming, ad-tech, iot, etc.

#### basics

- data model
  - tables contain items and attributes
    - table: collection of items (think worksheet)
    - items: think a row of data
    - attributes: think a column of data in a table
      - you should always list the primary key first
      - can contain 35 different nests, think address.streetname
- pricing
  - provisioned throughput capacity:
    - write throughput: 0.0065 per hour for ever 10 units
      - a write capacity unit can handle 1 write per second
    - read throughtput: 0.0065 per hour for every 50 units

  - storage:
    - first 25gb free
    - after that 0.25 per gb per month
  - how to calculate costs per month:
      1. how many writes per second per day && how many units required?
    - cost per unit *# of units required* hours in a day
    - (0.0065/10) *# of units required* 24
      2. how many reads per second per day && how many units required?
    - cost per unit *# of units required* hours in a day
    - (0.0065/50) *# of units required* 24
      3. cost of storage
    - total storage per month - free storage * cost per gb per month
    - total storage per month - 25 *.25

4. total costs = 30*1 + 30* 2 + 3 + my fee for taking all of these notes
    - 1 and 2 * 30 to get cost per month

#### creating a dynamodb table

- create tables from an ec2 instance
- the instance should have a role that allows it to interact with dynamodb
- steps:
    1. create a role: dynamodb db full access privs
    2. create an ec2 in the correct region and assign the role from #1
    3. he loves to run these php scripts, add instructs for js

#### dynamodb indexes and streams

- primary keys:
  - single attribute: i.e. unique id:
    - partition/hash key: composed of one attribute: e.g. user id
      - dynamodb uses the partiition key's value as input to an internal hash unction
      - no two items can use the same partition key
  - composite: think user id + signup date
    - dynamo db uses the partition key's value as input to an internal hash function, the output from the hash function determines the partition:
      - the partition is simply the physical locatino in which the data is stored
    - partition key + sort/arrange key (hash & range) composed of two attributes
    - allow you to use the partition key multiple times, but **MUST** have different sort keys
      - all items with the same partition key will be stored together, in sorted order by sort key value
- global secondary index:
  - has different partition key and different sort key
  - can be created at table creation/added after
  - can have 5 per table
- local secondary index:
  - has the same partition key, but different sort key
  - can only be created when creating a table, and cannot be removed or modified later
  - can have 5 per table
- streams:
  - used to capture any modification to dynamodb tables for up to 24 hours
  - modifications:
    - if a new item is added, it captuers a snapshot of the entire item and the items attributes
    - if item is updated, it captures snapshot of before and after of item and its attributes
    - if item is deleted, it captures a snapshot of the item and its attributes before it was deleted
  - you can write lambda functions to operate on the streams, e.g. to replicate data to another region, or generate an email with SES (Simple Email Service)

#### dynamodb scan vs queries

- queries: finds items in a table using only primary key attribute values
  - must use partition attribute name and a distinct value to search for:
    - find userid with value 1234
    - can optionally provide a sort key attribute name and value, and use a comparison operator to refine search results
      - find userid with value 1234 with posts timestamps > now() - 10 days
  - queris returns all data attributes for items with the specified primary keys
    - can use ProjectionExpression param so that the query only returns some of the attributes
  - results are always sorted by the sort key in ascending order
    - set ScanIndexForward param to false to sort in descending order
  - queries by default are eventually consistent but can be changed to strongly consistent
- scans: examines every item in the table
  - returns all data attributes for every item
    - use ProjectionExpression param to only return some attributres
- use query vs scan
  - query is quicker and more efficient
    - design your tables in a way that you can use the Query, Get, or BachGetItem APIs
  - scan always scans entire table
    - avoid using scan on a large table with filter that removes many results
    - scans can use up the provisioned throughpt for large table in a single operation
    - design your application to use Scan operations in a way that minimizes impact on your table's request rate

#### web identity providers with dynamodb

- you can authenticate users using web identity providers (e.g. facebook, etc), i.e. any nopen-id connect-compatible identity providers
  - this is setup in the console > dynamodb > click a table > access control tab
- use the AssumeRoleWithWebIDentity API
- steps
    1. create a role specifying the policy document for this web identity provider
  - you can generate the policy document first via console > dynamodb > click a table > access control tab
    2. have a user identity with their web identity provider (e.g. facebook)
    3. their identity provider gives them a web identity token
    4. you hit the AssumeRoleWithWebIDentity request providing their web token, the app id of the provider, and the amazon resource name (ARN) of the role you created in step 1
    5. it hits the AWS security Token Service and gives you a temporary security credential by default lasting 1 hour that consists of
  - access key id
  - secret access key
  - session token
  - expiration (time limit, by default 1 hour)
  - assume role id
  - SubjectFromWebIdentityToken
    - this is th uniue ID that appears in an IAM policy variable for this particular identity provider

#### dynamodb conditional writes

- dynamodb is spread over 3 facilities
- if 2/more users want to update the same item at the same time?
  - you set a conditional write based on the last state of the item
    - if item is 10, both users want to update it
    - before updating check and ensure it hasnt been updated,
    - if item is still 10, update
    - if item is not 10 (updated by someone else), then inform user to refresh
- conditional writes are idempotent: you can send the same conditional write request multiple times, but it will have no further effect on the item after the first time dynamodb performs the specified update

#### atomic counters

- where you use the UpdateItem operation to increment/decrement the value of an existing attribute without interfering with other write requests
- atomic counters are not idempotent, so remember that everytime you use them its going to have an effect (unlike conditional writes)

#### batch operations

- the BatchGetItem api can retrieve:
  - up to 1MB of data
  - contain up to 100 items
  - can retrieve items from multiple tables in a single request

## VPCs: virtual private cloud

- network diagram: read backward s
  - region
    - VPC : define ip address range (e.g. 10.0.0.0/16), always use /16 network for
      - your resources that are connected to your subnets
      - public and private Subnets (SN) containing instances and security groups
        - Security groups: last line of defense before hitting your public and private subnets
        - Network ACL: protect your subnets; your second line of defense after your security groups, send valid requests to your security groups
          - Route tables: decide where your VPG and IG requests go
            - Router: routes your gateway requests
              - Internet Gateway and Virtual Private Gateways access your VPC

### building a VPC from scratch

- *NEVER USE THE WIZARD OR BE LAME FOR LIFE*

  1. VPC > your VPCs > create VPC
  - give it a name
  - CIDR (pronounced cyder) Block: classless interdomain routing
    - specify what your IP address range is
    - usually 10.0.0.0/16

  - Tenancy: weather or not you are going to deploy it on shared/dedicated hardware

  2. subnets > create subnets: create two for the public and private route tables you'll create later
  - name tag: use the address range + availability zone as the name + if you know it will be public/private
    - e.g.: 10.0.#.0 - AVAIL-ZONE - public/private

  - associate it with a VPC
  - pick VPC CIDRs: 10.0.#.0/24
  - pick avilability zone
  - pick IPv4 CIDR Block
  - pick IPv6 CIDR block
  - for your public subnet after you create it
    - select it > click 'subnet actions' > enable auto-assign public ip
      - now every time you deploy an EC2 instance into this subnet it will automatically receive a public IP

  3. create internet gateways
  - attach it to a VPC
  4. update your main route table
  - you should make sure it is private, then leave it alone and create new ones
  5. create a two route tables (private + public) and associate them with your route tables
  - name: e.g. VPC-NAME-public/private
  - edit routes
    - public:
        1. destination: 0.0.0.0/0 (all traffic)
        2. target: choose an internet gateway
    - private:
        1. destination: leave blank, by default its associated with your main route table
        2. target: leave blank
  7. launch ec2s into your public and private subnets
  1. public: make sure to create/associate public security group (needs http/https)
  2. private:
      - make sure to specify CIDR block of your public subnet so your subnet can access it on (e.g. mysql is port 3306, and your public subnet needs to be able access it)
      - update your SSH access on the security to only allow the CIDR block of your public subnet
      - allow ICMP traffic from your public subnet CIDR on your security group: this allows you to ping any private instances associatedd with this security group
  8. ensure you can connect to public and ping your private ec2
  - ssh i 'your pem file' ubuntu@some-public-ip
  - ping some-private-ip
  9. copy your pem file into your public ec2 so you can access your private ec2 server
  1. nano somekeyname.pem and paste in contents of your pem file then save
  2. chmod 0600 somekeyname.pem
  3. test it
      - ssh ubuntu@your-private-ip -i somekeyname.pem

### NAT

- NAT: network address translation:
  - [NAT gateway vs NAT Instance](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-comparison.html)
  - NAT instance: an ec2 instance that acts as a gateway to the internet for a machine without internet access
      1. launch an ec2 > choose community AMI > search for NAT, choose amazon
      2. deploy it in your VPC and put it in your public subnet
      3. add a security and the normal stuff
      4. when it launches > click it > actions menu > networking > enable source/destination check
    - any EC2 instance must be the source/destination of traffic it sends/receives
    - disable it, because you want to modify it so you can connect it to your private instances
    - enable https in the security group attached to your NAT
      5. create a route from your private subnet out through the nat instance to the internet
    - VPC > route table > main route table > add new route
          1. destination : 0.0.0.0/0
          2. target: your NAT instance
      6. test your internet access
      1. login to your public ec2
      2. ssh into your private ec2
      3. try to update it
  - NAT gateway: released in 2016, make it easier and better to use in production because it automatically scales, AWS manages your security, etc
      1. VPCs > internet gateways > create nat gateway
      2. always deploy your NAT gateways into a public subnet
      3. give it an elastic ip
      4. update your VPCs main route table and include a new route
    - destination: 0.0.0.0/0
    - target: your new nat gatway
      5. test your private instances can access the net

### Network Access Control Lists

- NAT vs Bastion servers
    1. bastion host: (i.e. jumpbox) allows you to ssh/rdp into your bastion, and then initiate a private connection over a private network into your private ec2 instances
  - create 1 bastion that you use to ssh and access private instances, without having to create a NAT
  - its simply a public server that can connect to private servers
    2. NAT: used to route internet traffic to ec2 instances in private subnets
- Network ACLs vs Security groups
    0. both can span subnets and availability zones
    1. Defense layer
  - security group: instance level, 1st line of defense
  - ACL: subnet level, 2nd line of defense
    2. rule types
  - sg: allow rules only
  - acl: allow/deny rules
    3. state
  - sg: stateful, return traffic auto allowed
    - i.e., if you open up port 80 in, then port 80 is automatically allowed out
  - acl: stateless, return traffic must be specifically allowed
    4. processing rules
  - sg: evaluate all rules before deciding whether to allow traffic
  - acl: process rules in number order and use the first match
    5. domain
  - sg: only applies to associated instances
  - acl: applies to all instances in associated subnet
- Network ACLs
  - can span availability zones and
- Create a Network ACL
    1. vpc > Network ACLs > create
  - name: whatever
  - VPC: whatever
    2. associate it with a subnet
  - subnet associations > edit > save
    3. create your inbound & outbound rules
  - always create new rules in increments of 100 (i.e. 100, 200, etc)
  - use `0.0.0.0/0` as the destination for the internet
    4. open an ephemeral port as the last rule
  - public facing instances port: 01024-65535
  - type: custom tcp rule

## Elastic Beanstalk

- free service to manage web apps
- but you pay for any resources it uses

### creating elastic beanstalk web app

  1. launch / create environment
    - default environmen = launch, you edit it after its created
  2. environment tier: web app / worker
  3. configuration: e.g. nodejs, php, etc
  4. environment type: single instance / load balancing + auto scaling
  5. batch size: deploy a % of fleet or # instances at a time
  6. additional resources: add an RDS instance and/or specify a VPC
  7. set instance type, key pair
  8. add email address to receive notifications
  9. add health check url: the file to check, to determine if the application is up and running
  10. rolling updates: how changes to the environment instances are propagated
  11. cross zone load balancing: enable load balancing against multiple availability zones
  12. connection draining:
  13. instance profile:
  14. root volume and size: e.g. SSd 8gb

## Cloud formation

- allows you to create scripts to deploy infrastructure
- you deploy cloud formation in stacks:
    1. new stack: create from scratch
    2. cloud former: use your existing aws resources
- Cloudformation is free, but you pay for the resources it creates

### creating a new stack

  1. pick a template thats based on your tech stack
  2. run through the screens and setup your options for each layer in your stack
  3. add an SNS topic to receive notication when the stack has been created
  4. setup rollback on failure: if somethings do you rollback everything? leave it as is? etc

## simple workflow service

- web service that coordinates work across distributed application components
  - design media processing, back ends, business process workflows, analytics pipelines, etc., as a set of tasks
- tasks: invocations of various processing steps in an application which can be performed by executable code, web service calls, human actions, and scripts
  - example: customer order start > verify order > charge card > ship order, update customer records > end
    - each step is backed by a worker/decider, e.g., web service call, human action, script, etc
    - worker: programs that interact with Amazon SWF to get tasks, process received tasks, and return results
    - decider: programs that controls the coordination of tasks, i.e. ordering, concurrency, and scheduling according to the application logic
    - workers and deciders: run on EC2/machines behind firewalls
      - deciders get consisten view into progress of tasks and to initiate new tasks
      - SWF stores tasks, assigns them to workers when they are ready, and monitors their progress
      - SWF ensures that tasks are assigned only once and is never duplicated
      - SWF maintains application state durably
      - workers and deciders never keep track of execution state and run independently
- SWF domains: isolate a set of activity types, workflow executions, and task lists.
  - register a domain by using the AWS console or using the RegisterDomain action in amazon SWF API
  - parameters are specified in JSON format
    - name, description, and workflowExecutionRetentionPeriod (in days)
- execution state: e.g. which steps have completed, which ones are running, etc.

## Simple Queue Service: SQS

- web service providing access to a message queue that can be used to store messages while waiting for a computer to process them
  - a distributed queue system that enables web service applications to quickly queue messages that one component in the app generates to be consumed by aother component
  - used to decouple components of an application so they run independently
  - ensures delivery of each message **at least once**
  - supports multiple readers and writers interacting with the same queue
  - a single queue can be used simultaneously by many distributed application components
- Messages: any component of a distributed application store messages in a fail safe queue
  - you can retrieve the messages programmaticaly using the Amazon SQS API
- Queue: temporary repository for messages that are awaiting processing
  - acts as a buffer between the component producing and saving data, and the component receiving the data for processing
  - the queue resolves issues that arise if:
    - autoscaling: the producer is producing work faster than the consumer can process it, o
    - failover: the producer/consumer are only intermittenly connected to the network
- autoscaling: SQS can autoscaling if the queue gets beyond a certain size
- tradeoffs:
    1. does not gaurantee FIFO delivery of messages; as long as all messages are delivered, the order is not important
  - if message order is requireed, sequencing information can be placed within each message so the app can reorder messages when the queue returns them

## Simple Notification Service: SNS

- web service to setup,operate, and send cloud notifications, email, sms text message from the cloud to any  HTTTP endpoint, Amazon SQS, etc
  - publish messages from an application and immediately deliver them to subscribers/other applications
  - uses PUSH instead of PULL (lik sqs)
  - messages can be pushed to apple, google, fire os, and window and android services,
  - can push to China with Baidu Cloud Push
- Pub Sub paradigm: notifications are delivered to clients using a 'push' mechanism
  - fuck polling
- messages:
  - all messages are stored redundantly across multiple availability zones
- topics: access point for endpoints/recipients to subscribe to identical copies of the same notification
  - each topic can deliver to multiple endpoints (recipients), e.g. ios, android, and SMS
  - SNS automatically formats cpoies of each message
- benefits:
    1. instantaneous pushes (no pulling)
    2. simple APIs
    3. messages delivered over multiple transport protocols
    4. pay as you go model with no up front costs
    5. web based management (console) with point and click interface

### create a topic

- SNS > create topic
  - topics are subjects, and you add subscriptions to each topic
  - anything you publish to a topic will be pushed to your subscriptions
- create subscription: specify the endpoints
  - https, http, email, email + json, amazon sqs, application
  - email: any emails you add as subscriptions will require teh email to confirm they want to receive the email
- set TTL on any messages:
  - if the message is undelivered when the TTL expires, then the message is removed

## Shared Responsibility models

- infrastructure services: e.g. EC2, EBS, VPC, etc. run on top of the AWS global infrastructure
  - AWS responsible for:
    - endpoints, global infrastructure, physically securing data centers (e.g. cameras, fences, etc), foundation services (compute, networking, etc), hardware
  - customers responsible for:
    - customer data, platform/application management, operating system, network/firewall configuration, IAMs
- container services: RDS, elastic map reduce, etc., any managed service
  - AWS responsible for:
    - operating system & network configuration, platform & application management, AWS IAMs
  - customers responsible for:
    - customer data, client side data encryption and data integrity authentication, network traffic protection,  firewall configuration, customer IAMs
- abstracted services: S3, dynamoDB, lambda, etc,
  - aws responsible for:
    - platform and application management, operating system, network and firewall configuration, etc
  - customer responsible for:
    - customer data, client side data encryption, data authentication, data integrity

### TERMINOLOGY

- private address ranges: defined in document RFC 1918 for use around the world
  - 10.0.0.0 - 10.255.255.255 (16/8 prefix)
    - usually for enterprises
  - 172.16.0.0 - 172.31.255.255 (172.16/12 prefix)
  - 192.168.0.0 - 192.168.255.255 (192.168/16 prefix)
    - usually for home networking
- internet gateway: how you connect your VPC to the internet (and vice versa)
  - you can only have one internet gateway per VPC
- virtual private gateway: terminate your VPN connections
- Subnets: can be public / private: 1 to 1 mapping to a availability zone
  - public facing subnet: has internet access (e.g. for webservers)
  - private facing subnet: no internet access (e.g. for databases)
  - set them up like this for easibility
    - 10.0.1.0, 10.0.2.0, etc., always incrementing the 10.0.#.0
  - are mapped directly to an availability zone
  - public: internet accessible, e.g. web servers, bastion hosts / jumpbox,
  - private: no internet access: databases, app servers, etc.
- security groups: can span Subnets and availability zones
  - are stateful, if you give http access out, that means http access in
- subnet network access control lists (ACL): can span subnets and availability zones
  - are stateless: if you give http access in, you have manually allow http access out
- route table: specifies how packets are forwarded between the subnets within a VPC, the internet, and a VPN connection
  - defines wether a subnet is public/private
  - can span subnets and availability zones
- default VPC: are automatically available in every region around the world with no configuration so you can immediately deploy
  - they are all public (internet accessible) subnets
  - each EC2 instance will have a public and private ip address
  - if you delete the default VPC the only way to get it back is to contact AWS
- custom VPC: you create it from scratch
- VPC peering: connect one VPC to another via a direct network routing using private IP addresses
  - i.e. using private ip addresses: means it does not need to go back out into the internet to connect
  - instances behave as if they were on the same private network
  - you can peer VPCs with other AWS accounts
  - are always in a star configuration
    - 1 central VPC peers with 4 others
    - there are NO TRANSITIVE PEERING
      - i.e. you cannot talk to one VPC through another VPC
      - you have to link VPCs directly
- ephemeral ports: An ephemeral port is a short-lived transport protocol port for Internet Protocol (IP) communications allocated automatically from a predefined range by the IP stack software.

-

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

# exam: feb 6 11am

- 80 minutes
- 55 questions
- $150
- conducted online at an approved place
- register at webassessor.com
- dynamoDB is the **MOST IMPORTANT** exam topic
- [study notes from discussion forum](https://acloud.guru/forums/aws-certified-developer-associate/discussion/-KUdI5f2LNbi4wvK7v4I/how_to_pass_aws_certified_deve)

# [MUST KNOW](https://acloud.guru/forums/aws-certified-developer-associate/discussion/-KUdI5f2LNbi4wvK7v4I/how_to_pass_aws_certified_deve)

- dynamodb
    1. provisioned throughput calculations
    1. read eventually consistent: Size of Read Rounded to nearest 4KB Chunk / 4 KB * no of items ) / 2
    2. read strongly consistent: Size of Read Rounded to nearest 4KB Chunk / 4 KB * no of items ) / 1
    3. write: Size of write in KB * no of items
    2. Query
  - Query operation finds item in a table using only primary key attribute values , must provide partition attribute name and the value to search for, you can optionally provide a sort key attribute name and value to refine search results
  - Default Queries are going to be Eventually consistent but can be changed to StronglyConsistent.
    3. Scan
  - Scan operation is basically examines every item - e.g. dumping the entire table, by default Scan returns all the data attributes but we could use ProjectionExpression parameter to only return a selected attributes.
    4. errors
  - When you exceed your maximum allowed provisioned throughput for a table or one or more global secondary index you will get 400 HTTP Status code - ProvisionedThroughputExceededException
    5. writes
  - if data is critical and no margin of error then must use Idempotent conditional write.
- SQS
    1. messages
  - Message can contain upto 256KB of text, billed at 64KB chunks
  - Even though there is one message of 256Kb its basically 4 request for billing since (4 * 64KB)
  - Visibility timeout by default is 30 Seconds up to 12 hour maximum (ChangeMessageVisibility) / maximum visibility
  - Visibility timeout expires that means there is a failure somewhere since that message was polled but not processed and hence not deleted so other some other process will poll the message again and visibility timeout starts again.
  - Maximum long polling timeout 20 seconds
- SNS
    1. billing
  - to HTTP: $0.06 / 100,000 notifications deliveries
  - to EMAIL: $2 / 100,000 notifications deliveries
  - to SMS: $0.75 / 100 notifications deliveries
- SWF
    1. tasks
  - TASK is only assigned ONCE and NEVER DUPLICATED (key difference from SQS where messages can be processed multiple times)
    2. workflows
  - Maximum workflow processing time can 1 year (equivalent seconds) - SQS is 12 hours processing time
- CloudFormation
    1. API
  - Fn::GetAtt - values that you can use to return result for an AWS created resource or used to display in output
- S3
    1. uploads
  - The total volume of data and number of objects you can store are unlimited. Individual Amazon S3 objects can range in size from 1 byte to 5 terabytes.
  - You can use a Multipart Upload for objects from 5 MB to 5 TB in size (Exam question, scenario where more than 5GB file needs to be uploaded)
  - For PUTS of New Objects (Read after Write Consistency), For Overwrite PUTS and DELETE (Eventual Consistency)
    2. storage tiers/classes
  - S3 Standard - Durability (11 9s), Availability (99.99 %) - reliable regular for just about everything
  - S3 IA (Infrequent Access) - Durability (11 9s), Availability (99.9 %) - accessed every 1 month to 6 months or so (infrequent) but rapid access and low retrieval time (few ms)
  - S3 RRS(Reduced Redundant Storage)- Durability (99.99%), Availability (99.99 %) - less durability (data that can easily be regenerated - e.g thumbnails) - cheapest of all s3, less fault tolerant then the other two since you are willing to loose the data, reproducible data
  - Glacier - for archival only (3 to 5 hours restore time)
    3. buckets
  - link: <https://s3-eu-west-1.amazonaws.com/ankittest> <— https
  - Static website hosting: <http://ankittestsite.s3-website-eu-west-1.amazonaws.com> <— http (has to be for static hosting), you can turn it into SSL / https with cloudfront though
    4. versioning
  - once enable you cannot disable versioning / although it can be suspend it , if you want to turn it off delete the bucket and recreate (version id)
  - Once you delete the delete marker, you can get the file back that you have deleted while versioning on
  - every version is stored separately in the bucket for each version / might not be a good choice for cost perspective for large media files., multiple updates use case also not ideal for versioning.
  - Versioning’s MFA Delete Capability can be used to provide additional layer of security.
  - Cross Region Replication - (requires versioning enabled on source and destination buckets)
    5. server side encryption
  - SSE: S3 Server Side Encryption with S3 managed keys, (amazon AES 256 handled for you) - click on the object and encrypt
  - SSE: KMS - AWS Key management services , managed keys - additional charges / audit trail of keys, amazon manage keys
  - SSE: C - Server side encryption with Customer provided keys - you manage encryption keys
    6. client side encryption
  - you encrypt the data on client side and upload to s3
    7. import/export
  - Import / Export Disk
        1. Import to S3, EBS, Glacier
        2. export from S3
  - Import / Export Snowball
        1. Import to S3
        2. Export to S3
    8. transfer acceleration
  - Utilize local edge locations to upload content to S3 - incur extra cost
- VPC
    1. mapping
  - Can span multiple AZ, but can’t span multiple regions
  - One Subnet == one AZ, you can have security group spanning multiple AZ, ACL’s span across AZ (assign sg and ACL to two different subnets)
  - 1 subnet can have 1 routetable
    2. defaults
  - When you create Custom VPC it creates default security group, default network ACL and default route table., it doesn’t create default Subnet
  - when you create internet gateway, by default its detached, attach it to VPC then, only 1 IGW per VPC
    3. flowlogs
  - to capture all the traffic information into logs - logs everything (create IAM role and create cloud watch log group - and log stream)

# AWS

  1. which services are free?
    - usually orchestration services, e.g.: cloudformation, elastic beanstalk, autoscaling, opworks
    - however the resources they create & use are NOT FREE
  2. what does ARN stand for?
    - amazon resource name
  3. are all services provided in all regions?
    - no, so choose your regions wisely
  4. what are regions?
    - different areas of the world, e.g. EU Ireland (eu-west-1) containing resource not connected to other regions
  5. what are availability zones?
    - isolated locations inside of a region to protect against failures in other availability zones within the region
    - e.g. us-east-1b, us-east-1c, us-east-1c
      - notice the change in the last letter
  6. what is IPv4 ?
    - Internet Protocol version 4 i sthe original 32bit addressing scheme
    - the continued growth of the net means that all available IPv4 addresses will be utilized over time
  7. what is IPv6?
    - the new addressing mechanism designed to overcome the global address limitation

# IAM

  0. what should you know about IAM?
    1. what is IAM
    2. about IAM users
    3. about IAM Role
    4. about permissions
    5. about policies
    6. about temporary security credentials
    7. about identity federation
    8. about MFA
  0. what is IAM?
    - use AWS IAM to securely control individual and group access to your AWS resources.
  1. can you authenticate with active directory?
    - yes, but only with SAML
  2. do you authenticate with active directory first, or do you get temp security credentials first and then authenticate with active directory
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
  4. what is identity federation ?
    - external identities are granted secure access to resources in your AWS account without having to create IAM users
    - external identities: microsoft active directory, amazon cognitio,facebook, google, i.e. any OpenID Connect compatible provider
  4. what are federated users?
    - users you manage outside of AWS in your corproate directory, but to whom yo ugrant access to your AWS account using temporary security credentials
  5. what is an IAM role?
    - IAM entity that defines a set of permission for making AWS service requests
    - IAM user, applications, and AWS services can assume these roles
  6. can you change the role of an EC2 instance?
    - roles can only be give to EC2 instancs when the EC2 is created
      - you can only change the permissinos associated with the role
  6. howmany roles can an EC2 instance have?
    - one
  7. what is the name of the API call to request temp security credentials from the AWS platform when federating with active directory?
    - assume role with saml
  8. what kinds of security credentials can IAM users have?
    - a combination of:
    1. AWS access key
    2. ssh key
    3. password for web app logins
    4. MFA device
  9. how do you assume an IAM role?
    - by calling the AWS STS (security token service) AssumeRole API
    - these APIs return a set of temp security credentials that apps can use to sign requests to AWS service APIs
  10. how do you give permissions to users?
    - To grant permissions, you create policy documents that you attach to users, groups, or other entities
  11. what are federated users?
    -  security credentials with configurable expirations for users who you manage in your corporate directory, allowing you to provide your employees and applications secure access to resources in your AWS account without creating an IAM user account for them.
  12. what is a user?
    - a unique identity recognized by AWS services and applications. Similar to a login user in an operating system like Windows or UNIX,
    - can be an individual, system, or application requiring access to AWS services.
  13. what is a role?
    - create roles and assign them to users and/or AWS resources
  14. what are Groups?
    - a collection of users under one set of permissions
      - only purpose is to make it easier to manage user permissions

    - groups cannot belong to other groups
    - groups do not have security credentials and cannot access web services directly
    - roles do not belong to groups

  15. Policies: a document that defines one/more permissions that are associated with users, groups, and roles
  16. How are IAM users managed?
    - create, delete, list IAM users.
    - manage group membership
    - manage user security credentials
    - assign permissions
  17. what are action level permissions ?
    - describe the specific action/actions that are/not permitted in a policy document
    - if a service dos not support actin-level permisions, policies for the service use * in the action element
  18. what are resource level permissions?
    - specifies the object(s) that the policy document statement covers using its ARN (amazon resource name)
    - use * in the resource element if the the resource API does not support resource-level permissions
  19. what are resource-based permissions?
    - specify who can access a resource by including a *Principal* element in the policy document
    - attach policies to a service's resource in addition to IAM user, gorups, and roles
  20. what are tag-based pemrissions?
    - specify conditions for when a permission is/not permitted based on the tags assigned to a resource
    - you test resource tag in the *Condition* element of the policy document
  21. what are temporary security credentials?
    - commonly used in federation scenarios, lets users make requests by calling AWS STS APIs like *AssumeRole* or *GetFederationToken*
    - consist of aws access key, secret access key, and security token
    - commonly referred to as tokens
    - enable employees and applications to securely access AWS service APIs without need to create an AWS identity
  22. what is AssumeRole ?
    - returns a set of temp security crednetials (access key, secret access key, security token) that can be used to access AWS resources
    - typically used for cross-account access or federation
  23. what is GetFederationToken ?
  24. what is AssumeRoleWithSAML ?
    - set of temp security credentials for users who have been authenticated via a SAML authentication response.
  25. what is AssumeRoleWithWebIDentity ?
    - a set of temp security credentials for users who have been authenticated in a mobile/web application with a web identity provider (e.g. amazon cognito, facebook, google, any OpenID Connect provider)
  26. what is GetFederationToken ?
    - set of temp security credentials for a federated user
    - must be called by using the long-term AWS security credentials of an IAM user
  27. what is GetSessionToken ?
    - set of temp credentials for an AWS account/IAM user
    - typically for using MFA to protect programmatic calls to specific AWS APIs
  28. what is AWS STS
    - Amazon Security Token Service: create and provide trusted users with temporary security credentials that can control access to your AWS resources
  29. what are the different STS APIs?
    - AssumeRole, AssumeRoleWithSAML, AssumeRoleWithWebIDentity, GetFederationToken, GetSessionToken
  30. can you define users regionally?
    - no
  31. can IAM users have individual EC2 SSH keys?
    - no, SSH keys must be assigned to EC2 instances on creation, and all users must use that same SSH key to login
  32. can I define a password policy for a user's password?
    - yes: min length, atleast one number, automatic expiration, prevent reuse, password reset on next login
  33. what is the difference between an IAM Role and IAM user?
    - user: has long term credentials
    - role: has no credentials
  35. how many policies can you attach to an IAM role?
    - as many as you want, but the total size cannot exceed:
    - inline policies:
      1. user policy: ~2k characters
      2. role policy: ~10k characters
      3. group policy: ~5k characters

    - managed policies:
      1. up to 10 managed policies for users/roles/groups
      2. max size: ~5m

  36. what are inline policies?
    - policies that you reate and manage, and are embedded directly into a single user, group, or role
  37. what are managed policies?
    - standalone policies that you can attach to multiple users, groups, and roles
    - do not apply to resources (only users, groups and roles)
  38. how many IAM roles can you create?
    - initially 250, then you need to request more
  39. what is the IAM policy simulator?
    - tool to help you understand, test, and validate the effects of your access control policies?

# VPCs

  0. what should you know about VPCs?
    1. what is VPC?
    2. about subnets
    3. about internet gateways
    4. about NAT gateways
    5. about virtual private gateways
    6. abour routers
    7. about peering connections
    8. you must know how to build out a VPC from memory and launch instances into public and private subnets
    9. about VPNs
    10. about IP addressing
    11. about routing and routing topology
    12. about security and filtering
    13. about EC2s relationship to VPC
  0. what is a VPC?
    - a logical datacenter within AWS located in a specific region
    - consists of internet gateways, virtual private gateways, route tables, network access control lists, subnets, and security groups
      - you access your VPC via an Internet Gateway or a Virtual Private Gateway

    - they can span availability zones, but cannot span regions
      + complete control over IP address range, subnets, route table configuration, and network gateways, security groups, network access control lists, etc
    - you can create a Hardware Virtual Private Network (VPN) connection between your corporate data center and your VPC and leverage the AWS cloud as an extension of your corporate data center
      + i.e. a hybrid cloud

  1. what can you do with a VPC?
    - launch instances into a subnet of your choosing
    - assign custom IP address ranges in each subnet
    - configure route tables between subnets
    - create internet gateways and attach it to a VPC
    - better security control over your AWS resources
    - create instance security groups
  2. how many availability zones can be mapped to a single subnet
    - it is a 1 to 1 mapping, i.e. a subnet cannot span availability zones
    - 1 subnet = 1 availability zone
  3. how many internet gateways can you map to a VPC?
    - it is 1 to 1 mapping, only one internet gateway per VPC
  4. can you do transitive peering with VPCs?
    - NO! peering is always in a star configuration (1 central VPC peers with other VPCs)
    - you cannot talk to one VPC via another (transitive)
    - you have to set up the links individually
  5. what is a peering connection ?
    - enables you to route traffic via private IP addresses between two peered VPCs
  6. are security groups stateful or stateless ?
    - stateful: what comes in and go out automatically
  7. are network access control lists stateful or stateless?
    - stateless: what comes in can not go out automatically (you have to allow outbound on the same port)
  8. when you create a VPC - what resources are/not automatically created?
    - yes: main route table, network ACL, default security group,
    - not: subnets, internet gateways,
  9. when you create a subnet, how many ip addresses does AWS reserve by default?
    - 3 : not counting the dot 0s or 255s
      - router: 10.0.0.1
      - dns services: 10.0.0.2
      - for future use: 10.0.0.3
  10. can you boost your internet speeds by attaching multiple internet gateways to a VPC
    - no: you cannot attach multiple internet gateways to a VPC
  11. do you have to disable the source destination check network configuration for NAT instances?
    - yes. because you need to set it up manually in your VPC route table to route traffic to private instances
  12. how do you manage a surge in traffic to your NAT instances (i.e. too much traffic)
    - you scale it up to support larger network requests
    - increase instance size
    - change instance type
  13. should NAT instances be in a public or private subnet?
    - public! because they are used to provide internet access to private ec2 resources
  14. how do you connect a private subnet to the internet via a NAT instance?
    - create a route out of the private subnet to the NAT instance via the VPCs main route table
  15. does a NAT instance require a public ip?
    - YES! how else will it talk to the net?
  16. how much traffic does a NAT instance support?
    - it depends on the instance size and type
  17. how do you create high availability for NAT instances?
    - autoscaling groups
    - multiple subnets in different availability zones (always 1 to 1)
    - create a script to automate failover
  18. do NAT instances require a security group?
    - YES! always
  19. should you use a NAT instance / NAT gateway for enterprise?
    - NAT gateways definitely preferred
  20. What management services does AWS provide for NAT gateways?
    - auto scale up to 10Gbps
    - no need to patch (i.e. update/upgrade)
    - auto assigned public ip
    - AWS manages security (no need to associate security group)
  21. do NAT gateways require security groups?
    - no - AWS manages security
  22. do you have to disable source/destination checks for NAT gateways ?
    - NO! only for NAT instances
  23. do you have to update your route tables when creating a NAT gateway?
    - YES! update your VPCs main route table
      1. destination: 0.0.0.0/0
      2. target: your NAT gateway
  24. can a subnet be associated with more than one Network ACL ?
    - NO! only one, it is 1 to 1
  25. how are rules evaluated in Network ACLs?
    - rules are evaluated in number order
    - rule 1 has precedence over rule 2
  26. do you have to create a Network ACL when you create a VPC ?
    - NO! a Network ACL is created by default allowing all inbound and inbound traffic on all ports
  27. do custom Network ACLs allow all inbound/outbound traffic by default?
    - NO! it denys everything by default
  28. do subnets have to be associated with a network ACL ?
    - YES! by default its the default Network ACL, but you can change it
  29. can you associate Network ACLs with multiple subnets?
    - YES! but you can only associate one subnet with one Network ACL
  30. are network ACLs stateful / stateless ?
    - stateless: you have to specify inbound and outbound rules separately
  31. can Network ACLs allow / deny traffic
    - it can allow or deny
  32. can you block IPs with network ACLs or security groups?
    - network acls: YES!
    - security groups: NO! there is no way to deny traffic to a specific IP, you can only allow/deny ports
  33. how do you make a bastion server highly available?
    - create multiple subnets (at least 2)
  35. can VPCs span regions?
    - NO!
  36. can VPCs span multiple availability zones?
    - YES!
  37. what is required for a NAT instance to work?
    - disable source/destination check on the ec2 instance
    - be in a public subnet
    - have an elastic ip
    - a route out of the private subnet to the NAT must exist
  38. how do you create a generally high resilient network?
    - at least 2 public subnets and 2 priate subnets
    - each subnet should be in a different availability zone
  39. how do you create resiliant bastion hosts?
    - put them behind an autoscaling group with minimum size of 2
    - use route53 (round robin / health check) to automatically failover
  40. how do you create resiliant NAT instances?
    - 1 in each public subnet
    - each with their own public ip
    - write a script to fail over between the two
    - or fuck nat instances and use nat gateways
  41. how many VPCs are allowed per region by default?
    - 5
  42. how many internet gateways can be associated with a VPC?
    - 1
  43. what is a subnet?
    - segment of a VPC's ip address range where you can place groups of isolated resources
  44. what is an internet gateway?
    - Amazon VPC side of a connection to the public internet
    - enables EC2 instances in the VPC to directly access the internet
    - are horziontally scaled, redundant, and highly available with no bandwidth constraints
  45. what is a NAT gateway?
    - managed Network Address Translation (NAT) service for your resources in a private subnet to access the internet
  46. what is a Hardware VPN connection?
    - a hardware-based VPN connection between your amazon VPC and your datacenter, home network, or co-location facility
  47. what are Virtual Private gateways
    - the Amazon side of a VPN connection
  48. what are customer gateways ?
    - your side of a vpn connection
  49. what are the components of a VPN?
    - customer gateway, Router, virutal private gateway, hardware VPN connection
  50. what is a VPC endpoint?
    - enables S3 and DynamoDB access from within your VPC without usin ganinternet gateway or NAT
    - allows you to control the access using VPC endpoint policies
  51. what is an Egress-only Internet Gateway:
    - a stateful gateway to provide egress only access for IPv6 trafic from teh VPC to the Internet
  51. what are the four network architectures you can use when creating a VPC?
    1. VPC with a single public subnet
    2. VPC with public and private subnets
    3. VPC with public and private subnets with hardware VPC access
    4. VPC with private subnet only and hardware VPN access
  52. what are the connectivity options for a VPC?
    1. the internet via an internet gateway
    2. Hardware VPN connection via a virtual private gateway
    3. both Internet gateway and virtual private gateway
    4. other AWS services, e.g. internet gateway, NAT, virtual private gateway, or VPC endpoints
    5. other VPC via VPC peering connections
  53. how do EC2 instances in a VPC access the internet?
    - public: public ip addresses, elastic IP addresses,
    - private: route traffic hrough a NAT gateway/instance, these instances use the public IP of the NAT gateway/instance to traverse the internet
    - VPCs with hardware VPN/direct connction: route traffic through virtual private gateway
  54. how does a hardware VPN connection work with amazon VPC?
    - hardware VPN connection connects your VPC to your datacenter
    - AWS supports IPsec VPN connections
  55. what is IPsec?
    - protocol suite for securing internet protocol (IP) communications by authenticating and encryptin geach IP packet or data stream.
  56. how do you assign IP address ranges to VPCs?
    - via a single CIDR (classless internet domain routing) IP address block when creating a VPC
    - a VPC can be assigned at most one IP address range at any given time
    - multiple VPCs can have overlapping IP address ranges but its not recommended
      - doing so will prohibit you from connecting these VPCs to a common home network via a hardware vpn connection
  57. can i change a VPC's size (i.e. IP address range) ?
    - no, you must terminate and create a new one
  58. whats the minimum size of a subnet?
    - IPv4: blah/28, i.e. 14 ip addresses
    - IPv6: fixed at blah/64
  59. can I use all the IP addresses that I assign to a subnet?
    - no, amazon reserves the first 4 and the last one of every subnet for IP networking purposes
  60. how do you assign private IP addresses to EC2 instances within a VPC?
    - when you launch an EC2 within a vpc, you can specify the primary IP address
    - if you do not specify, amazon autoamtically assigns it one from the IP address range you assign to the subnet
    - you can assign a secondary private IP address when you:
      1. create an EC2 instance within the VPC, when you create
      2. create an elastic network interface
      3. any time after the instance has been launched
  60. can you assign any IP address to an instance?
    - only when it is:
      1. part of the associated subnet's IP address range
      2. not reserved by amazon for IP networking purposes
      3. not currently assigned to another interface
  61. can I assign multiple public and private IPs to an instance?
    - public: yes, but it must be associated with a unique private ip address on the instance
    - private: yes, but only secondary private addresses
  62. what does a VPC router do?
    - enables EC2 instances within subnets to communicate with EC2 instances in other subnets within the same VPC
    - enables subnets, internet gateways, and virtual priate gateways to communicate with each other
  63. how do you secure EC2 instances within a VPC?
    - security groups: control which ports are permitted in and out of the EC2 instance
    - network access control lists: control which ip addresses are permitted in and out of the subnet
  64. can EC2 instances in one VPC/region communicate with another in a different VPC/region?
    - yes, only via public ips
  65. what is an elastic network interface?
    - a virtual network interface that you can attach to an instance in a VPC
    - includes the following atributes:
      1. a primary private IPv4 address
      2. secondary private IPv4 addresses
      3. one Elastic IP address (IPv4) per private IPv4 address
      4. one public IPv4 address
      5. IPv6 addresses
      6. security groups
      7. one MAC address
      8. source/destination check flag
  66. can i attach a network interface in one VPC to an instanc ein another VPC?
    - no, the network interface must be in the same VPC and availability zone
  67. what is a db subnet group?
    - collection of subnets designated specifically for RDS instances in a VPC
    - should hve atleast one subnet for every availability zone
  68. what is a VPC endpoint for S3?
    - logical entity within a VPC that allows connectivity only to S3
    - routes requests to and responses from S3 back to the VpC

# EC2

  0. what should you know about EC2s?
    1. about EC2s
    2. about security
    3. about Elastic IP
    5. about networking
    6. about EBS
    7. about cloudwatch
    8. about autoscaling
    9. about elastic load balancing
    10. instance billing types (i.e. ondemand, spot, reserved)
    11. about instance types
    12. about VM import/export
  1. based on some scenario, which ec2 pricing model should you use?
    - spot instances always the cheapest
      - bid on unused EC2 capacity and run those instances for as long as their bid exceeds the current spot price
      - if spot instance is removed by amazon, you wont be charged for partial hour of usage
      - if you terminate, you will be charged

    - on demand: if you cant afford any down time
      - on demand: perfect for test/dev envs, supplementing reserve instances during spikes,
      + users that want low cost and flexibility without any up front cost / long term commitment
      + applications with short term, spiky, or unpredictable workloads that cannot be interrupted
      + applications that are being developed/tested on an amazon ec2 for the first time
    - reserved isntances:
      + provide a discount on usage of ec2 instances, and a capacity reservation when applied to a specific availability zone
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
      - 99.999% availability, great for boot volumes, small/medium databases, dev/test environments

    - provisioned IOPS SSD: (more than 10k IOPS)
      + designed for i/o intensive applications, e.g. large relational/nosql databases
    - magnetic: cheap, infrequently accessed storage
      + lowest cost, infrequently accessed data

  3. how many EC2 instances can 1 EBS volume be mounted to at the same time
    - ONE!!! DUH, think attaching multiple computers to a single drive
  3. how many volumes can 1 instance have?
    - as many as you want, think attaching multiple drives to a single computer
  4. How can you connect a single storage volume to more than 1 EC2 at the same time ?
    - use EFS
  5. Should you use user credentials to access EC2 from other resources?
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
  12. what is Amazon elastic compute (ec2) cloud ?
    - web service providing resizable copmute capacity in the cloud - designed to make web-scale copmuting easier for developers
  13. what are some useful APIs for programmatically managing your EC2 instances?
    - RunInstances: launch an AMI on an instance
    - DescribeInstances: check on the status of an instance
    - TerminateInstances: umm i have no idea what TerminateInstances might do
    - StopInstances: release the compute resource but preserve the dta on the EBS boot partition
    - StartInstances: restart a stopped instance  
  14. EBS boot vs local instance for storage
    - local storage is part of the EC2 instance, and exists for the life of the instance, behind the scenes it is an S3 bucket
    - EBS boot is distinct from the EC2 instance, and can be attached to any single instance at a given time
  15. what is an AMI ?
    - amazon machine image; packaged environment including all the necessary bits to setup and boot an instance
    - are your unit of deployment, can be composed of building blocks; one configured as a web server, another for app server, another for database, etc
  16. how are you billed for EC2?
    - pricing is per instance-hour, partial hours are billed as full hours
    - for two instances that transfer data, billed for data out AND data in
  17. what are the 5 EC2 instance type categories?
    1. General purpose:
      - suitable for general purpose applications
      - M3, M4: fixed performance
      - T2: burstable performance

    2. Compute optimized:
      - more cpu resources than memory (ram)
      - compute-intensive applications and high performance computing (HPC) workloads
      - C3, C4
    3. Memory optimized
      - more memory (ram) than cpu
      - memory-intensive applications, e.g. database and caching
      - R3, R4
    4. GPU:
      - P2: parallel processing capabilities via NVIDIA Tesla GPUs
      - G2: 3D graphics  for applications using OpenGL and DirectX
      - G2
    5. Storage Optimized
      - I2: low latency i/o capacity using SSD-based local instance storage for i/o intensive applications
      - D2: high storage density and sequential i/o performance for data warehousing, Hadoop, and other data-intensive applications

  17. when do you use which instance type?
    - T2: lowest cost, general purpuse
      - use case: web servers/small dbs

    - M4: general purpose
      + use case: application servers
    - M3: general purpose
      + use case: application servers
    - C4: compute optimized
      + cpu intensive apps/dbs
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

  18. when should you use a public IP vs an elastic IP?
    - when changing the IP of a resource does not matter
  19. when should you use enhanced networking?
    - if your applications benefit from high packet-per-second performance and/or low latency networking
  20. when should you use EBS vs EC2 local storage
    - temporary data: use local instance
    - permanent data: use EBS
  21. what is the minimum time interval granularity for the data that amazon cloudwatch receives and aggregates?
    - metrics are received and aggregated at 1 minute intervals
  22. what is amazon cloudwatch?
    - monitoring service for AWS resources and applications on them
    - collect and track metrics, log files, set alarms, and automaticlly react to changes in AWS resources
    - used with ec2, dynamodb tables, rds db, and custom metrics/log files generated by apps and services
  23. what is auto scaling?
    - scale EC2 capacity up/down according to predefined conditions
    - ensure that you are running the desired number of instances
    - suited for applications that have stable demand patterns/experience hourly, daily, or weekly variability in usage
  24. what is elastic load balancing?
    - automatically distributes incoming application traffic across multiple amazon EC2 instances
    - enables you to achieve fault tolerance in applications
  25. what is classic load balancer?
    - routes traffic based on application/network level information
    - ideal for simple load balancing across multiple ec2 instances
  26. what is application load balancer?
    - routes traffic based on advanced application level information, including the content of the request
    - ideal for applications needing advanced routing capabilities, microservices, and container-based architectures
  27. what is a convertible reserved instance?
    - type of reserved instance with attributes that can be changed during the term of the reservation
  28. what is the reserved instance marketplace?
    - AWS customers can sell their EC2 reserved instances to other AWS customers
  29. what is VM import/export
    - ability to:
      - import VM images in order to create EC2 instances
      - export EC2 instances as VMs
  30. how do you import a VM to an ec2 instance?
    - use the amazon ec2 api tools
    - charged standard s3 data transfer and storage fees for uploading and storing your VM image file
  31. how do you export an ec2 instance as a VM?
    - use the amazon ec2 cli tools
    - charged standard s3 data transfer for storing and downloading your VM image file

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
  2. what is OLTP?
    + online transaction processing
  3. what types of OLTP engines exist?
    - sql, mysql, postgresql, oracle, aurora, mariadb,
  3. what is OLAP ?
    - online analytics processing
  4. what type of OLAP engines exist?
    - redshift
  5. what type of Nosql engines exist?
    - dynamodb
  6. what type of in memory caching (elasticache) engines exist?
    - memcached, redis
  7. what is DMS?
    - database migration services

# dynamodb

  0. what should you know about dynamodb?
    1. about dynamodb
    2. about data models and APIs
    3. about scalability, availability & durability
    4. about global secondary indexes
    5. about local secondary indexes
    6. about security and control
    7. about pricing
    8. about reserved capacity
    9. about cross-region replication
    10. about triggers
    11. about streams
    12. about taggig
  1. what is dynamodb?
    - nosql db providing fast and predictable performance with seamless scalability
    - the prime reason to use is for the managed service and performance
    - prime reason not to use is the limited querying capabilities
    - managed service:
      1. automatically partitions and re-partitions your data
      2. provisions additional server capacity
      3. synchronously replicates data across three facilities in an AWS region (high availability and durability)
  2. what is read consistency?
    - the manner and timing in which the successful write/update of an item is reflected in subsequent read operation of that same item
  3. what are eventual consistency reads?
    - reads that are accurate within a second (default) of writing an item is best read performance and maximizes your read throughput
  4. what are strongly consistent reads?
    - are those reads whose results contain all items that have a successfully response prior to the read
  5. what kind of query functionality does dynamodb support?
    - supports get/put operations using a primary-key, global and local secondary indexes
  6. does dynamodb support conditional operations?
    - ConditionExpression: used to setup the conditional
      - boolean functions: ATRIBUTE_EXIST, CONTAINS, BEGINS_WITH
      - comparison operators: =, <>, BETWEEN, IN
      - logical operators: NOT, AND, OR
  7. does dynamodb support expressions for key conditions, partition, and partition-sort keys?
    - Yes, via KeyConditionExpression parameter
  8. when can you create a local secondary index?
    - when you create a table only
  9. when can you create a global secondary index
    - when you create a table
    - after you create a table
  10. does a local secondary index have a different partition key?
    - no it has the same partition key, but different sort key
  11. does a global secondary index have a different partition key?
    - yes, it has different partition and sort keys
  12. how do you only return some data attributes on items returned from a dynamodb query?
    - use the ProjectionExpression parameter
  13. how do you reverse the default sort on query results?
    - set ScanIndexForward to false
  14. what is a dyanmodb query?
    - finds items in a table using only a primary key attribute value
    - you must provide a partition key attribute name and a distinct value to search for
    - results are always sorted by sort key in ascending order (unless you set ScanIndexForward to false)
    - queries > scan for efficiency
  15. what is a dynamodb scan ?
    - scan operations examines every item in a table
    - returns all data attributes for every item (unless you use ProjectionExpression parameter)
  16. how do you calculate throughput
    - reads
      - size of per read rounded up to nearest 4kb chunk / 4kb * # of items = read throughput
        - rounded up to increments of 4kb in size per read per second
        - for eventually consistent divide the result by 2
        - final result must be an integer, so always round up
      - eventually consistent reads
        - 2 reads per second
        - DO divide final answer by 2
      - strongly consistent reads
        - 1 kb read per second
        - DONT divide final answer by 2

    - writes
      + all writes are 1 kb per second
      + # of items * kb size per second
    - what happens if you exceed your provisioned throughput?
      + you get a 400 http status code: ProvisionedThroughputExceededException

  19. what are the basic steps for identifying with a web identity provider (e.g facebook)
    1. user authenticates with web id provider (e.g. facebook)
    2. they are passed a token by their ID provider
    3. your code calls AssumeRoleWithWebIDentity API providing the web id providers token and the ARN for the IAM role
    4. your app can now access Dynamodb from between 15 > 1 hour (default is 1 hour
  20. when should you use conditional writes vs atomic counters?
    - if you can have some margin of error, use atomic counters
    - if you need absolutely accurate information, use conditional writes
  21. what are atomic updates
    - increment/decrement a numeric attribute, add/remove to sets/lists/maps
  22. what types of primary keys exist?
    - single attribute: think unique ID
      - partition key sometimes called hash

    - composite; think unique id + data range
      + partition key + sort key
      + sort key sometimes called range key

  23. how are partition keys stored?
    - the partition key value is used as an input to an internal hash function, and the output from the ash function determiens the partition
    - the partition determines the physical location where the data is stored
    - no two items can have the same partition key value (for single attribute primary keys)
    - two/more items can have the same partition key but different sort key (from composite primate keys)
  24. what are dynamodb streams?
    - used to capture modifications to dynamodb tables for upto 24 hours
      - edits : capture the before and after
      - deletes: capture the before delete

    - can be used to trigger lambda functions (e.g. to replicate data, or send emails via SNS)

  25. what are batch operations
    - can read multiple items using BatchGetItem api
    - retrieve up to 1 Mb of data
    - retrieve up to 100 items
    - retrieve items from multiple tables
  26. when should you use dynamodb vs rds
    - rds: if you need to join tables/complex transactions
    - dynamodb: performance, scalability
  27. what is the dynamodb data model?
    - table:
      - collection of items, e.g. People containing person items

    - items:
      + collection of attributes, e.g. Noah containing details,
      + composed of a primary/composite key
      + cannot exceed 400kb
    - attributes:
      + collection of values, e.g. specific details about noah

  28. what are the available APIs
    - CreateTable, UpdateTable, DeleteTable, DescribeTable, ListTables, PutItem, BatchWriteiTem, UpdateItem, DeleteItem, GetItem, BatchGetItem, Query, Scan
  29. how does the Scan operation work?
    - once the aggregate size of items scanned for a given Scan API request exceeds a 1mb limit, the givne request will terminate and fetched results will be returned with a LastEvaluatedKey (to continue the scan in a subsequent operation)
  30. how many read capacity units does a scan operation consume?
    - number of bytes fetched rounded to the nearest 4kb, divided by 4kb
    - scanning a table with strongly consistent reads consumes twice the read as eventually consistent (dont divide by 4)
  31. what data types are supported?
    - scalar: number, string, binary, boolean
    - collection: set (number, string, binary), List, Map
    - other: null
  32. what data structures are supported?
    - key-value and document
  33. what is a key value store?
    - database supporting storing, querying and updating collections of objects that are identified using a key and values that contain the actual content being stored
  34. what is a document store?
    - database providing support for storing, querying and updating items in a document format (e.g. json, xml, html)
  35. does dynamodb have a json datatype?
    - no, but you can use  the SDK to automatically map json to the dynamodb map
  36. how would you query JSON data in dynamodb?
    - create a global/local secondary index on any top level json element (not on nested elements)
  37. how would you retrieve a specific nested element from a JSON item?
    - when using GetItem, BatchGetItem, query, or scap APIs, you can define a ProjectionExpression to determine which attributes should be retrieved
  38. can you update a specific element within a deeply nested json item?
    - yes
  39. what is the document sdk?
    - datatypes wrapper for javascript that allows easy interoperability between js and dynamodb datatypes
  40. is there a storage limit?
    - no: dyanamob will automatically spread your data over multiple machines as your storage grows
  41. is there a throughput limit?
    - no, update the throughput setting via AWS console or UpdateTable API
  42. how does dynamodb achieve high uptime and durability?
    - by syncrhonously replicating data across three facilities in a given region
  43. what are secondary indexes?
    - are alternate keys that can be used for querying data from db
      - a duplicate table is created that is auto synced to the base table
      - projected (copied) attributes can be specified, or all attributes will be copied

    - global: contain a partition/partition + sort keys that can be different from the table's primary key
      + 5 max per table
      + can be defined as a non-unique attribute
      + support eventual consistency only
      + provisioned throughput is handled separately from the base table
      + only supports Query and Scan API
      + created via the console/UpdateTable API with the GlobalSecondaryIndexes parm
      + set, list, and map types cannot be used as sort keys
    - local: has the same partition key but different sort key
      + mainly for querying a subset of primary key data by a different value enabling easier filtering
      + must be created when you create the table
      + supports both strong and eventually consistent reads
      + supports the Query API
      + supports up to 20 projected attributes
      + consumes the provisioned capacity of the base table

  44. when should you use global secondary indexes?
    - tracking relationships between attributes that have a lot of different values
  45. what are item collections?
    - any group of items that have the same partition key
  46. what is the size limit of an item?
    - 10gb
  47. what is Fine-Grained Access Control (FGAC) ?
    - table owner specifies who (caller) can access which items/attributes of the table and perform what actions (read/write)
    - used in concert with ADS IAM
    1. application requests security token that authorizes the app to access specific items in a table
    2. incoming credentials are evalauted by dynamodb against IAM to authenticate request and determine which capabilies are permitted
  48. how do you prevent users from accessing specific attributes?
    - follow the principle of least privilege
    - alternately permit everything in concert with a deny policy
  49. how do you prevent users from adding invalid data to a table?
    - use FGAC to specify which items can be changed
  50. how will you be charged?
    - provisioned read-throughput
    - provisioned write-throughput
    - indexed data storage
  51. are you charged per item or % of item for throughput calculations
    - you are charged for the entire size of the item even if you only return a portion
  52. what is cross-region replication?
    - maintain identical copies (i.e replicas) of a table in one/more regions
  53. what cross-region replication modes are supported?
    - one master table and multiple replica tables
  54. what is a trigger?
    - execute custom actions based on item-level updates on a table
    - useful for: sending notifications, updating an aggregate table, syncing to other data sources
  55. what is a stream?
    - time-ordered sequence of item-level changes made to data in a table in the last 24 hours

# rds

  0. what should you know about RDS?
    1. about RDS
    2. about RDS instances
    3. about billing
    4. about hardware and scaling
    5. about security
    6. about configuration
    7. about multi-az deployments and read replicas
    8. about monitoring
  1. what is RDS ?
    - managed service for creating, operating, backing up and scaling relational databases in the cloud
    - amazon aurora, mysql, mariadb, oracle, sql server, postgresql
  2. what is a DB instance?
    - a database env in the cloud with compute & storage resources
    - think an EC2 specifically configured for a database
    - is accessed via an endpoint that you retrieve from the API or console
    - can have up to 40 instances by default
  3. what is enhanced monitoring?
    - provides you with over 50 cpu, memory, file system, and disk metrics
    - can be integrated with external tools/dashboards via exported json payloads
  4. how do you test an existing DB instance before upgrading its version?
    - creating a DB snapshot > create a new DB instance from the snapshot > initiate a version for the new DB instance
  5. what is the cost of RDS?
    - DB instance hours based on the class (micro, m4.large, etc) of the DB instance type
    - storage per gb per month
    - i/o requests per month
    - provisioned iops per month
    - backup storage
    - data transfer
  6. can you modify your DB instance type after creation?
    - yes, changes are applied during the maintenance window' you set, less you specify 'apply-immediately'
  7. where is your your data stored?
    - on EBS volumes for db and logs
  8. what types of storage are available?
    1. general purpose ssd storage
      - suitable for a broad range of db workloads with moderate i/o requirements

    2. provisioned iops ssd storage
      - fast, predictable and consistent i/o performance
      - you specify the iops rate on creaation
      - optimized for i/o intensive, transactional (oltp) db workloads
    3. magnetic storage
      - useful for small db workloads where data is infrequently accessed

  9. what are automated backups?
    - enables point in time recovery of your db instance
    - amazon performs a daily snapshot during the 'preferred backup window' time you specify
    - stored in s3
  10. what are db snapshots?
    - user-initiated backups of your db instance
    - stored in s3
  11. what is a backup window?
    - user-defined period of time during which your db instance is backed up
  12. can you move a DB instance not in a VPC into a VPC
    - yes, via the aws console
  13. can you move a DB instance in a VPC out of the VPC
    - no,
  14. what is an RDS master user account?
     - used within the context of RDS to control access to your DB instances
     - is distinct from AWS user account
  15. what are multi-az deployment?
    - replication designed to increase db availability and guard against outages
    - AWS automatically creates and manages a 'standby' replication a different availability zone
    - available on db creation, or can convert an existing one
  16. what are read replicas?
    - replication designed to scale beyond the capacity restraints of a single db instance for read-heavy db workloads
    - require automatic backups of your db instance with the backup retention period to a value other than 0
    - can have a max of 5 per source db instance
    - can be converted to a 'standalone' db instance with write capabilities
  17. what events would cause RDS to initiate a failover to a replica?
    - loss of availability in primary availability zone
    - loss of network connectivity to  primary
    - compute unit failure on primary
    - storage failure on primary
  18. when should you use an RDS read replica?
    - scaling beyond the compute or i/o capacity of a single db instance for read-heavy db workloads
    - serving read traffic while the source db instance is unavailable
    - business reporting/datawarehousing scenarios

# S3

  0. what should you know about s3?
    1. about s3
    2. billing
    3. security
    4. data protection
    5. s3 standard - infrequent access
    6. glacier
    7. event notifications
    8. static website hosting
    9. storage management
    10. s3 inventory
    11. object tags
    12. cross-region replication
    13. s3 transfer acceleration
    14. s3 and IPv6
  0. what is S3?
    - simple storage service for highly scalable, reliable, and low latency data storage
  1. what is the syntax for bucket URLs ?
    - `https://s3-REGION-NAME.amazonaws.com/BUCKET-NAME`
  2. what status code will be returned on successful file uploads to buckets?
    - http 200
  3. how should you store your files in S3?
    - add a salt to the beginning of the file name so that the objects are stored evenly across S3, instead of grouped together
      - especially for file names that are similar
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
    - S3 (standard):
      - 99.99% availability
      - 99.99999999% durability
      - durable, immediately available, frequently accessed

    - S3 IA:
      + 99.9% availability
      + 99.99999999% durability
      + durable, immediately available, infrequently accessed
      + must be >= 128kb and 30 days after creation date
    - S3 reduced redundancy storage:
      + data that is easily reproducible, e.g. thumbnails
    - Glacier:
      + archival data,  3-5 hours before accessing
      + must be 30 days after S3 IA date
    - Reduced Redundancy Storage: RRS
      + reduce costs by storing noncritical, reproducible data at lower levels of redundancy than S3 standard

  12. what makes up an S3 object?
    - key (name)
    - value (data)
    - version ID
    - metadata
    - subresources:
      - ACL: access contorl list
      - torrent
  13. what is the format for s3 urls?
    - yourbucketname.s3-website-REGION.amazonaws.com
  14. can you remove versioning from a bucket after you enable it?
    - once bucket is turned on, it cannot be removed (but it can be disabled)
  15. what is versioning?
    - preserve, retrieve and restores all versions of an object, even deleted ones
  16. how do you add security to S3 versioning
    - setup versioning's MFA delete capability
  17. can lifecycle management be used with versioning?
    - yes
  18. can lifecycle be applied to current or previous versions?
    - both
  19. what actions can be done with lifecycle management?
    - transition to infrequent access storage class?
      - at lest 128kb and 30 days after creation date

    - archive to storage class
      + 30 days after IA, if relevant
    - permanently delete

  20. what types of encryption are available?
    - in transit: ssl/tls, have to use https,
    - at rest
      - server side encription using S3 managed keys: SSE-S3
        -each object is encrypted with a unique employing strong multifactor encryption with a master key that regular rotates
      - aws key management service: managed keys: SSE-KMS,
      - server side encryption with customer provided keys: SSE-C
        - you manage the keys, and AWS manages the encryption when writing to disk, decryption when reading from disk

    - client side encryption
      + you encrypt data yourself on the client side and uploading to S3 and its saved as encrypted data

  21. what types of storage gateways available on S3?
    - file gateway:
      - for flat files, stored directly on S3

    - volume gateway:
      + stored volumes: entire dataset is stored on site and is asynchronously backed up to s3 (block based storage)
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
  25. what characteristics exist for S3 static websites
    - only static content (no php/.net)
    - useful for websites containing: html, image, video, client-side js
    - serverless
  26. what is CORS
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
  30. how do you delete multiple objects?
    - use Multi-Object Delete to send multiple object keys in a single request to speed up your deletes
  31. how is S3 data organized
    - as a simple key-based object store
    - you assign a unique object key that can be later used to retrieve the data
      - keys can be any string, and constructed to mimic hierarchical attributes
  32. can S3 data be downloaded via the BitTorrent protocol?
    - yes, simply at the ?torrent param at the end of your GET request in the REST API
  33. where is S3 data stored?
    - specify a region when creating an S3 bucket
    - within that region your objects are redundantly stored on multiple devices across multiple facilities
  34. how do you decide which region to store data?
    - near your customers, data centers, or other AWS resources in order to reduce data access latencies
    - remote from other operations for geographc redundancy and disaster recovery purposes
    - enables you to address specific legal and regulatory requirements
    - reduce storage costs by choosing a lower priced region to save money
  35. how much does S3 cost?
    - per gb for storage
    - network transferred in
    - network data out
    - data requests
    - data retrieval
  36. how secure is S3?
    - only the bucket and object owners have access to S3 resources by default
    - supports user authentication
    - bucket policies and access control lists
    - securely up/download via https
    - data access auditing
    - data encryption
  37. how do you get data into S3-IA
    - directly put them there
    - set lifecycle policies to transition from standard to IA
  38. how do you get data into Glacier?
    - use lifecycle rules to automatically archive sets of s3 object to glacier based on lifetime
  39. how long does it take to retrieve objects from Glacier?
    - expedited: 1-5 minutes
    - standard: 3-5 hours
    - bulk: 5-12 hours
  40. how much data can you retrieve for free?
    - 10gb/month
  41. what are S3 event notifications?
    - sent in response to actions (put, post, copy, delete) in S3
    - are sent via SNS, SQS, or Lambda
    - useful for integrations with workflows, alerts, or other actions/triggers e.g. to transcode media files when they are uploaded
  42. does s3 support website redirects?
    - yes, you can set rules on your bucket to enable automatic redirection
    - you can also configure a redirect on an individual s3 object
  43. what is S3 storage class analysis?
    - you can analyze access patterns and transitiont he right data tothe right storage class
    - automatically identifies infrequent access patterns to help you transition storage from standard to IA
    - you use an identified pattern to create lifecycle policy based on the pattern
  44. what is S3 inventory?
    - provides a scheduled alternative to S3 synchronous list api
    - provides a CSV flat-file output of your objects and their corresponding metadata on a daily/weekly basis for an S3 bucket or a shared prefix
    - can be used as a reaady-made input into a big data job/workflow application instead of the syncrhonous S3 list api
  45. what are S3 object tags?
    - key-value pairs applied to S3 objects which can be created, updated, or deleted at anytime during the lifetime of the object
    - enables you to create IAM policies, setup lifecycle policies, and customize storage metrics (cloudwatch)
    - useful for S3 object management
    - costs 0.01/month per 10k tags
  46. what is lifecycle management?
    - ability to define the lifecycle of an object with a predefined policy and reduce your cost of storage
    - as data matures it becomes less critical, less valuable and/or subject to compliance requirements
  47. what is cross-region replication (CRR)
    - every object uploaded is replicated to a destination bucket in a different region that you choose
    - configured at the bucket level
    - can be used with lifecycle rules on the source and destination buckets
  48. what is S3 transfer acceleration
    - enables fast, easy, and secure transfers of files over long distances between your client and amazon s3 bucket
    - leverages cloudfront's globally distributed Edge Locations
    - useful if your app is:
      - uploading to a centralized bucket from eogrpahically dispersed locations
      - regularly transferring  GBs or TBs of data across continents

# Elastic Beanstalk

  0. what should you know about EB?
    1. about EB
    2. databases and storage
    3. security
    4. managed platform updates
    5. billing
    6. support
  1. is elastic beanstalk free ?
    - yes! but you pay for any resources it uses
  2. what platforms come preconfigured when setting up elastic beanstalk?
    - nodejs, php, python, ruby, tomcat, .net, java, go, docker
  3. what is elastic beanstalk ?
    - managed service enabling users to quickly deploy and maangement applications
    - manages deployment, capacity provisioning, load balancing, auto-scaling and health monitoring.
  4. what elements of an application do developers control?
    - operating system, database, storage, ec2 login, availability zones, security, cloudwatch, server setting, server environmental variables, application components (e.g. memory caching), log files
  5. what cloud resources are available?
    - most of AWS
    - amazon linux/windows server 2012 R2 AMI
  6. can you run multiple versions ofyour application?
    - yes, 75 applications and 1k versions, 200 environments
  7. what is required to signup for AWS?
    - phone number AND email
  8. how is my data stored in elastic beanstalk?
    - application and log files are stored in S3
  9. what database can I use with elastic beanstalk?
    - RDS, DynamoDB, Microsoft SQL server, oracle, or anything that can run on an EC2
  10. can i make my application private?
    - yes, by using Amazon VPC to provision a private, isolated section of your app
  11. How can I keep the underlying platform environment up to date?
    - opt-in to having AWS environments automatically updated during a maintenance window you specify
  12. how much does elastic beanstalk cost?
    - nothing, but you pay for the resources it uses

# cloud formation

  0. what you should know about cloudformation
    1. about cloudformation
    2. billing
    3. limits and restrictions
    4. regions and endpoints
  1. is cloud formation free?
    - YES! but you have to pay for the resources it uses
  2. what is the default scripting launguage for cloudformation ?
    - it is a JSON file containing:
      - db name, key pair, ec2 info, outputs, etc
  3. what can you output ?
    - you can ouput the DNS name of a resource and programmatically using the function get attribute
  4. what is the fn::GetAtt?
    - it allows you to programmatically get resource information when creating resources with a cloud formation script/template
  5. what is the default rollback behavior?
    - on error it will rollback automatically and delete all of the resources it created
  6. what is cloudformation?
    - easy way to create a collection of related AWS resources and provision them in an orderly and predictable fashion
  7. how is cloudformation different from elastic beanstalk?
    - beanstalk: deploy and run apps, integrated with developer tools
    - cloudformation: provisioning mechamisn for a broad range of AWS resources supporting the infrasture needs of different types of applicatons
  8. what is a cloudformation template?
    - A json/yaml format describing all the AWS resources you need to deploy your apps
    - contains:
      - list of template params: values supplied at stack creation time
      - list of output values: e.g. complete url to a web application
      - list of data tables: e.g. AMI names
      - list of aws resources and their configuration values
      - template file format version number
  10. what is a cloudformation stack?
    - the set of AWS resources that are created and managed as a single unit when cloudformation instantiates a template
  11. whats the cloudformation workflow?
    1. give the stack a new name
    2. select/create template
    3. specify any params/configuration
    4. create and deploy
  12. can you manage individual AWS resources part of a cloudformation stack?
    -  yes, you regain full control of all elmenets of your infrastructure
  13. can you install software at stack creation time?
    - yes, via a set of application bootstrapping scripts that enable you to install packages, files, and services on your ec2 instances
  14. can you use cloudformationwith chef/puppet?
    - yes
  15. can stack creation wait for your app to start up?
    - yes, through a 'WaitCondition' resource that acts as a barrier, blocking the creation of other resources until a completion signal is received from an external resource (e.g. your app, or management system)
  16. can you update a stack after it's created?
    - yes, you can modify/update the resources in an existing stack in a controlled and predictable way
  17. how much does cloudformation cost?
    - free, but you pay for the services
  18. how many stacks can yo have?
    - by default 200, you can request more though

# Simple Workflow Service: SWF

  0. what should you know about SWF?
    1. about SWF
    2. workers and deciders
    3. SWF functionality
    4.
  1. what is the main difference between SWF and SQS tasks
    - SWF:
      - tasks are only assigned once and never duplicated
      - task-oriented API
      - tasks are tracked at the application level

    - SQS:
      + tasks can be assigned multiple times and duplicated if tasks are not completed in a certain time limit,
      + message-oriented API
      + you have to implement your own application level message tracking, especially if your application uses multiple queues

  2. what is the difference between SWF and SQS workflow lengths?
    - SWF: up to 1 year
    - SQS: up to 12 hours
  3. what is the maximum time a workflow can exist?
    - 1 year and the value is always measured in seconds
  4. when would you use SWF vs SQS?
    - human interaction? use SWF
    - shorter (sub 12 hour) ? use SQS
  5. what is SWF?
    - service for coordinating work across distributed application components
    - manages execution dependencies, scheduling and concurrency in accordance with the logical flow of the application
    - useful for: media processing, backends, business process workflows, analytics pipelines
    - use cases:
      1. video encoding using S3 and EC2
      2. processing large product catalogs using Amazon Mechanical Turk
      3. migrating components from datacenter to the cloud
  6. what are tasks?
    - represent invocatinos of various processing steps n an application which can be performed by executable code, web service calls, human actions, and scripts
  7. what is the AWS Flow Framework?
    - helps developers use asynchronous programming int he development of their applications
    - its an SDK, a programming framework for developing SWF based applications
  8. what are workers?
    - programs that interact with SWF to get tasks, process them, and return their results
    - implements an application processing step
  9. what are deciders?
    - a program that coordinates application execution across workers, i.e. their ordering, concurrency and scheduling according to the application logic
    - handles decision tasks for when a workflow execution has transitions such as an activity task completing/timing out
  10. what is registration?
    - one-time step for each workflow and acitivity
    - provide timeout values and task distribution parameters
  11. what are domains?
    - logical containers for application resources that are created at the AWS account level
    - each application resource, e.g. workflow/activity type and execution belong to exactly one domain
    - can be created for dev, test, and production environmentss
  12. what is a decision task?
    - contains information on the inputs, outputs, and current state of previously initiated activity tasks

# Simple Queue Service (SQS)

  0. what should you know about SQS?
    1. about SQS
    2. billing
    3. FIFO queues
    4. features, functionality, and interfaces
    5. security and reliability
    6. compliance
    7. queue sharing
    8. service access and regions
  1. what is SQS?
    - message oriented hosted queues for storing messages while they travel between appliations/microservices
    - useful for
      1. integration SQS with other SWS services
      2. create work queues with each message being a task to be completed by a process
      3. build a microservice architecture and use message queues to connect your microservices
  2. does SQS provide message ordering?
    - yes: FIFO queues preserve the exact order in which messages are sent and received
  3. does SQS guarantee delivery of messages?
    - standard queues provide at-least-once delivery
    - FIFI queues provide exactly-once processing
  4. how much does SQS cost?
    - costs calculated per request + data transfer charges
  5. difference between standard queues and FIFO queues?
    - FIFO: first in first out, exactly once processing
    - standard: messages are not ordered, and can be processed more than once
  6. can you convert standard queues into FIFO queues?
    - no, type of queue must be set at creation
  7. what are message groups ?
    - messages are grouped into distinct, ordered 'bundles' within a FIFO queue
    - for each message group ID, all messages are sent & received in strict order
  8. what is a visibility timeout?
    - period of during which SQS prevents other consuming components from receiving and processing a message
    - the max visibility is 12 hours
  9. does SQS support message metadata?
    - yes, up to 10 metadata attributes
  10. what is SQS long polling?
    - a way to retrieve messages from SQS queue
    - while regular short polling returns immediately if the queue is empty, long polling doesn't return until a message arrives/the long poll times out
    - max long poll timeout is 20 seconds
  11. how can I fan out identical messages to multiple SQS queues
    1. use SNS to create a topic
    2. create and subscribe multiple SQS standard queues to the SNS topic
    3. whenever a message is sent to the SNS topic, it is distributed/fanned out to all of the SQS message queues
  12. how long can you keep messages in SQS message queues?
    - from 1 to 14 days
    - default is 4 days
    - messages are automatically deleted
  13. what kind of data can I include in a message?
    - can contain up to 256kb of text data
    - including xml, json, and unformatted text
  14. what is Queue sharing?
    - share a queue with naothe AWS user
    - via policy statements: AddPermission, RemovePermission, SetQueueAttributes, GetQueueAttributes
  15. how many and large can messages be?
    - a single message can be 256kb
    - there can be 1 to 10 messages per request up to 256kb
    - a request can return a payload up to 256kb
  16. what is the general flow of SQS?
    - a compponent (e.g. web service) posts messages to queue with a specific Visibility Timeout Clock
    - asynchronously pull task messages from queue
    - process task messages
    - write 'task complete' message to another queue and deletes original message from queue
      - this must happen during the visibility timeout period else another processer will pull the task message (assume its a failure)

    - delete the original task message
    - check for more task messages in the worker queue

  17. do you push or pull messages from the queue?
    - pull!
  18. how do EC2 instances retrieve messages from SQS?
    - polls SQS
  19. what is a task message Visibility Timeout Clock?
    - task message be visible for a default 30 seconds after some processer component retrieves it
    - this is the max time a processer has to complete processing the message before it returns to the queue
  20. how should you design your system to  use SQS?
    - so that processong a message more than once does not create any errors or inconsistencies
  21. how are SQS task messages billed ?
    - each 64kb of message is billed as 1 requesst
      - i.e. a single API call with 256kb payload will be billed as four requests

    - first 1 mill are free
    - .50c per 1 mill SQS request per month

  22. what service uses the term 'decouple' ?
    - SQS! always pick SQS if they say 'decouple' ;)
  23. how many times can a task message be delivered?
    - multiple times, in any order
  24. how would you manage task message priority ?
    - create multiple queues, and check each queue in the order you desire
  25. what is the max Visibility Time Out for a task message ?
    - 12 hours
  26. how do you extend the Visibility Time out
    - use the ChangeMessageVisibility action to specify a new timeout value
    - SQS restarts the timeout period using the new value
  27. what is SQS Long Polling?
    - polls the QUEUE and doesnt end the connection until a message arrives in the queue
  28. what is the maximum Long Poll Time Out?
    - 20 seconds
  29. what is SQS short polling?
    - polls the queue and returns immediately, with/without a message
  30. polling in tight loops burns CPU cycles and encures fees, how do you stop this?
    - setup Long Polling any only poll the task message queue ever 20 seconds
  31. what is fanning out?
    - a way to distribute SNS messages to multiple queues
    - where multiple SQS queue are subscribed to an SNS topic
    - when a message is sent tot he SNS topic, the message will be fanne out to the SQS queues
      - i.e. SNS will deliver the message to all SQS queues that are subscribed to the topic

# Simple Notification Service (SNS)

  1. when should you use SNS/SQS ?
    - SNS: when you need to push messages
    - SQS: when you need to pull messages
  2. what is the difference between SNS and SQS
    - both messaging services in AWS
    - SNS - push
    - SQS = polls
  3. what is SQS pricing ?
    - based on delivery mechanism + total requests
    - .50 per 1 mill SNS requests
    - .06 per 100k notification deliveries over http
    - .75 per 100 notification deliveries over SMS
    - 2.00 per 100 notification deliveries over email
  4. what data format is SNS?
    - JSON
  5. can you add any email as a subscriber to a topic?
    - Yes! but they must confirm they want to receive the email
  6. how long do subscriptions last without confirmation ?
    - recipients have 3 days to subscribe
  7. what type of protocols can be used with Topic Subscriptions?
    + http, https, email, email + json, SQS, SMS text message, application
  8. when do you use SNS?
    - whenever you need PUSH messaging
    - if you ever see 'push', pick SNS
  9. can you customize each message based on the protocol?
    - Yes!

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

# Shared responsibility models

  1. what is shared responsibility models?
    - based on the type of service, who is responsible for which part of the infrastructure layer
  2. what are the shared responsibility models?
    - in order from greatest to least responsibility from the customer perspective
      - infrastructure services: e.g. EC2
      - container services: e.g. RDS
      - abstracted services: e.g. S3
  3. what are all the layers (from top to bottom) in the shared responsibility models:
    - customer data
    - client side data encryption, dta integrity authentication
    - server side encryption
    - network traffic protection
    - platform and application management
    - operating system, network, and firewall configuration
    - configuration services: compute, storage, databases, Networking
    - aws global infrastructure: regions, availability zones, edge locations
  4. what is amazon responsible for in each of the 3 models?
    - infrastructure service:
    - container service: operating system and application level
    - abstracted service: everything except the client side encryption and customer data

# other notes for developer exam

- It is possible to transfer a reserved instance from one Availability Zone to another.
  - yes
- You have an EC2 instance which needs to find out both its private IP address and its public IP address. To do this you need to;
  - retrieve instance metadata from 169.254.169.254/latest-metadata
- where can you retrieve instance metadata (user or instance)
  - 169.254.169.254

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
