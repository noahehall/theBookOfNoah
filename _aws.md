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

## EC2: elastic compute cloud
  - the backbone of AWS, its basically a virtual machine


######## KNOWN STUDY questions
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
