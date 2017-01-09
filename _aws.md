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


# developer exam
  - global infrastructure
  - networking and content Delivery
  - compute
  - databases (dybnamo)
  - storage (s3)
  - IAM
  - management tools (opsworks it uses chef)
  - messaging: SNS, SQS, SES
