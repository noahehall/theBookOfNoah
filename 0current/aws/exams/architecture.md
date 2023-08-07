# Common AWS Architecture

- TODOs
  - theres bunches of stuff in here that should be in goodstuff.md
    - which should then go into some other NON aws specific file

## links

- [10 things serverless architects should know](https://aws.amazon.com/blogs/architecture/ten-things-serverless-architects-should-know/)
- [aws samples repo](https://github.com/aws-samples)
- [blog: api gateway category](https://aws.amazon.com/blogs/compute/category/application-services/amazon-api-gateway-application-services/)
- [blog: apis at scale](https://aws.amazon.com/blogs/architecture/how-to-architect-apis-for-scale-and-security/)
- [builders library](https://aws.amazon.com/builders-library/?cards-body.sort-by=item.additionalFields.sortDate&cards-body.sort-order=desc&awsf.filter-content-category=*all&awsf.filter-content-type=*all&awsf.filter-content-level=*all)
- [cloud computing concepts](https://aws.amazon.com/what-is)
- [elasticache for redis vs memorydb for redis](https://cloudwellserved.com/amazon-elasticache-for-redis-vs-amazon-memorydb-for-redis/)
- [incident response plans](https://aws.amazon.com/blogs/publicsector/building-a-cloud-specific-incident-response-plan/)
- [localstack](https://github.com/localstack/localstack)
- [serverless express (check examples dir)](https://github.com/vendia/serverless-express)
- [serverless](https://aws.amazon.com/serverless/)
- [service search](https://aws.amazon.com/products/)
- [youtube: databases on aws](https://www.youtube.com/watch?v=WE8N5BU5MeI&t=9s)

### well architected

- [blue/green dpeloyments on aws](https://d1.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf)
- [CICD on AWS](https://docs.aws.amazon.com/whitepapers/latest/cicd_for_5g_networks_on_aws/cicd-on-aws.html)
- [CICD: best practices on aws](https://docs.aws.amazon.com/whitepapers/latest/practicing-continuous-integration-continuous-delivery/welcome.html)
- [distributed data management](https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/distributed-data-management.html)
- [high availability whitepaper](https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/high-availability-and-scalability-on-aws.html)
- [implementing microservices on AWS](https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/microservices-on-aws.pdf)
- [incident response plan guide pdf](https://d1.awsstatic.com/whitepapers/aws_security_incident_response.pdf)
- [microservices on aws](https://docs.aws.amazon.com/pdfs/whitepapers/latest/microservices-on-aws/microservices-on-aws.pdf)
- [optimizing enterprise economics with serverless architectures](https://docs.aws.amazon.com/pdfs/whitepapers/latest/optimizing-enterprise-economics-with-serverless/optimizing-enterprise-economics-with-serverless.pdf)
- [overview of deployment options on aws](https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/aws-deployment-services.html)
- [running containerized microservices](https://d1.awsstatic.com/whitepapers/DevOps/running-containerized-microservices-on-aws.pdf)
- [security, identity & compliance best practices](https://aws.amazon.com/architecture/security-identity-compliance/?cards-all.sort-by=item.additionalFields.sortDate&cards-all.sort-order=desc&awsf.content-type=*all&awsf.methodology=*all)
- [serverless apps Lens](https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/welcome.html)
- [serverless multi-tier architectures (PDF)](https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf)
- [service overview (PDF)](https://docs.aws.amazon.com/pdfs/whitepapers/latest/aws-overview/aws-overview.pdf)
- [well architected framework: serverless application lens](https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/wellarchitected-serverless-applications-lens.pdf?810a2056-c993-4832-af32-11286cad694c)
- [well architected: landing page](https://aws.amazon.com/architecture/well-architected/)
- [whitepaper: aws vpc connectivity options](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/welcome.html)
- [whitepaper: hybrid networking](https://docs.aws.amazon.com/wellarchitected/latest/hybrid-networking-lens/hybrid-networking-lens.html)
- [whitepapers](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html)

### service categories

- [application integration](https://aws.amazon.com/products/application-integration/)
- [compute](https://aws.amazon.com/products/compute/)
- [cost management](https://aws.amazon.com/aws-cost-management/)
- [data lakes and analytics](https://aws.amazon.com/big-data/datalakes-and-analytics/)
- [databases](https://aws.amazon.com/products/databases/)
- [frontend and mobile](https://aws.amazon.com/products/frontend-web-mobile/)
- [hpc: high performance computing](https://aws.amazon.com/hpc/)
- [machine learning](https://aws.amazon.com/machine-learning/)
- [management and governance](https://aws.amazon.com/products/management-and-governance/)
- [migration & transfer](https://aws.amazon.com/products/migration-and-transfer/)
- [networking and content delivery](https://aws.amazon.com/products/networking/)
- [networking](https://aws.amazon.com/products/networking/)
- [premium support programs](https://aws.amazon.com/premiumsupport/technology-and-programs/)
- [securing enterprise grade serverless apps video](https://www.youtube.com/watch?v=tYhUWbDZ4-8)
- [security, identity and compliance](https://aws.amazon.com/products/security/)
- [storage](https://aws.amazon.com/products/storage/)

### best practices

- code/repo organization
  - instead of focusing on organizing functions, focus on organizing services
  - perhaps a repo per service, with the service broken down into multiple fns and their resource dependencies
- prod vs developer cloud environments
  - ci/cd should be in place whichever route you take
  - prod should always be isolated
  - most flexible: separate accounts for each developer
    - requires technical maturity to handle the security and cost implications
  - least flexible: single shared account for all develoeprs
    - as long as everyone is using immutable and isolated stacks, you should be fine
- serverless
  - 12 factor app (say this twice)
  - dont assume local storage exists, but code for ephemeral storage & stateless services
  - instantiate expensive objects outside event handler
  - ensure you can test locally
  - end-to-end integration testing as early as possible in the dev cycle
  - profile your app for bottle necks
- serverless architecture
  - dont `architect` for serverless, but bring your best practices with you
    - if you abstract away your business logic to a single entrypoint
      - you should be able to repurpose it for deployment to a lambda OR a container
  - refrain from putting app/biz logic in the api GW layer
  - dont implement workflows in lambdas, use stepfunctions
  - dont implement long running processes in lambdas, use containers
- integration
  - understand your component timeouts, e.g. api gateway and lambda have different hard limits
- amazon has a database engine for every occasion, choose wisely

## service & product categories

### compute

- VMs: ec2s
- containers: ECS (ec2 launch type) + ECR
- serverless: lambda or ECS (fargate launchtype) + ECR

### security

- flow of traffic: VPC, NACLs, route tables, security groups
- authnz: IAM policies, resource policies

### storage

- objects: s3
- compute-persistence: ebs
- compute-ephemeral: ec2 instance store
- file system: EFS, FSx
- cache: file cache
- data migration: datasync, snow family
- hybrid cloud storage and edge computing: storage gateway, snow family
- file transfer: transfoer family
- disaster recovery and backup: Elastic Disaster Recover, Backup

### databases

- relational: aurora, rds, redshift
- key-value: dynamodb
- in-memory: elasticache, memorydb for redis
- document: documentdb with mongodb compatibility, dynamodb
- wide column: keyspaces
- graph: neptune
- time series: timestream
- ledger: ledger database services (QLBD)

### cost management

- expenses and usage: AWS Cost Explorer, the AWS Billing and Management Console, AWS Budgets, AWS Trusted Advisor(opens in a new tab)

## Serverless

- abstracting away the compute infrastructure to the point you have no responsibilties for servers on which your code runs
- serverless architecture: thinking in terms of patterns and applications, rather than in terms of individual functions or resources
  - migration strategies
  - types of compute and data stores you can select
  - application architecture patterns you can use
- application design: choose services and patterns that suit your workloads based on characteristics such as
  - expected throughput
  - service limits
  - cost
  - SLO, SLAs
- cost comparisons with other architecture models
  - infrastructure cost to run workloads: e.g. server provisioning vs invocation costs
  - upfront development cost: dev effort to plan, architect and provision resources
  - maintainence cost:
- value comparisons with other architecture models
  - increased speed and agility: of course this comes after the initial learning curve
  - cost allocation: much easier to allocate costs to customers and events vs to servers
    - i.e. the costs occur when events occur

### core stack

- APIs: API Gateway, appsync
- compute: lambda, ecs, eks,
- dbs: dynamodb, neptune, timestream, qldb
- messaging: sns, sqs, kinesis, eventbridge
- events: cloudwatch
- analytics: cloudwatch, cloudtrail, xray
- networking: cloudfront, route53
- dev tools: SAM cli,
- storage: s3, efs
- orchestration: step functions
- athena: analytics

### migration strategies

- two broad domains: how do you
  - implement compute infrastructure:
    - capacity processes and cost models: reflects the three general ways of operating infrastructure
      - server based
      - containerized
      - APIs and microservices
  - approach application dev and deployment: operational processes and development models
    - simple move to the cloud: but lacks flexible build and deploy processes
    - api driven microservice-based applications with the most flexibility but requires the most rewrite of legacy tech stac
- migration patterns
  - leap frog: from legacy on-premise monoliths straight to serverless cloud architecture
  - organic: migration with a lift-and-shift approach
    - e.g. servers to EC2s, perhaps some ECS/lambdas thrown in, but limited rewrites
    - the goal is to get things into the cloud, and experiment with serverless & microservices
  - strangler: incrementally and systematically decomposes monolithic applications by creating APIs and building event-driven components that gradually replace components of the legacy application.
    - Distinct API endpoints point to old and to new components and safe deployment options (such as canary deployments) let you point back to the legacy version with very little risk.
- considerations: its all about documentatoin, planning and strategy
  - what does each application do and how are the components organized
  - how can you break up data based on CQRS? you have to strangle the database along with the microservices
    - what belongs to the control plane?
    - what belongs to the data plane?
    - once the data is distributed, which set of db engines match the throughput, consistency, access patterns, etc reqirements
  - how does the application scale, and which components drive the capacity you need?
    - should you migrate leaf components first? or those with the most demanding capacity requirements
  - do you have scheduled based tasks?
  - do you have workers listening to a queue?
  - where can you refactor/enhance functionality without impacting the current implementing
    - perfect for load balancers and API gateway

### application architecture patterns

- think through how to observe and react to events in your distributed services
  - each component should scale independently
  - implement circuit breakers to restrict the blast radius of failed services
- become familiar with
  - the multitude of cloudwatch events
  - optimizing lambda and integration with SNS, SQS and eventbridge
  - consuming streams (kinesis/dynamodb) effectively
  - orchestration (happy path + rollbacks) with step functions

### scaling

- strategize for thes current scale requirements in addition to the anticipated growth
  - know the capabilities and service limits of the services that you’re integrating
    - especially the service limits, e.g. api gateay 10mb vs SQS 256kb
  - select patterns that optimize your application for the scale you need to support
    - timeouts, retry behavior, throughput, payload size

#### scale in demand

- both compute + data
- organic
- merger and acquitision: increased dramatically within a short period

#### scale in complexity

- management
- performance
- security

#### scaling reliably with testss

- increased need for more effective load tests since you can scale/tweak the perf of individual components
  - you need to have a solid understanding of peak load capacity
- best practices
  - load test with authentic data with appropriate volumes that exercise each integration point with production access patterns
  - spin a production like environment, never load test locally
  - identify the bottlenecks/failure points, modify perf characteristcs and iterate
    - this may move the bottleneck to other integration points
      - you need to know where the bottleneck is most appropriate, based on your workload and business requirements
  - choose a percentile that reflects the business need when monitoring
    - build in error handling logic to handle failures that are outliers
  - dont mock services you cant control
    - when you're load testing, you need the real beef

#### managing scale through monitoring

- components should output appropriate signals
- monitor by percentile, and not just avg/raw numbers
- log efficiently and effectively

### deploying

- strategy for deploying new application versions and infrastructure are equally important
- QA, qa, Qa, qA ;)~
- standardization and optimation
- auditing and reacting to changes
- halt/rollback mechanisms
- managing configuration changes
  - similar in terraform how you can consume deployed artifacts (e.g. ARN, ips, etc)
    - bake it into the deployment package: refrain from this as much as possible
    - 12factor it: the easiest, but should atleast be encrypted; however its difficult to share/update across nodes
    - load at runtime from some secrets manager: the most robust (and complex) option

#### strategies

- all at once: 100% of traffic goes to the new version
- traffic shifting strategies
  - canary deployment: e.g. 20% goes to new versio for 20 mins, and then once validated 100% goes to new version
  - linear deployment: e.g. 10% of traffic goes to new version every 20 minutes until 100% is shifted

### testing

- testing: you generally need a test account that mirrors the production account
  - but you should also invest time in setting up localstack
- local tests within the dev environment
  - unit tests focusing on business logic
  - cloud native code is generally more difficult to test locally (see localstack)
- integration tests: targeting remote test accounts with prod parity
- automated integration and accepted tests against other envornments providing gates for production deployments

### ci/cd

- tools: cloudformation, sam, codecommit, codebuild, codedeploy, codepipeline

### compute

- a combination of lambda, ECS/fargate, with step functions for orchestration

### data

- match the data store to the business need and the type of transactions it needs to support
- refrain from having a single, shared general purpose db
- model your data stores into transactional vs query needs using concepts from CQRS to design for the type of work the db needs to do
- using multiple dbs requires
  - managing distributed transactions/partial execution failures with business logic/step functinos
  - source of truth is scatterred across data stores and must be shared with other domains
  - embrace eventual consistency
  - choose the right ETL pattern
    - real time analysis: kinesis data streams/dynamodb streams
    - historical trends: batch, AWS glue + s3 > athena/redshift spectrum

## Security

- security value chain
  - Identify resources: config, systems manager
  - protect your resourceS: shield, vpc, firewall manager, secreets manager, IAM, IoT device defender, key managment service, WAF
  - detect & monitor: macie, inspector, guard duty
  - automate responses: lambda
  - investigate incidents: cloudwatch, cloud trail
  - recover: ebs snapshots, glacier archives
- maintaining a proper security and compliance posture: security hub
  - collecting findings, aggregate and format into a structure format for processing
  - prioritizing: organize and categorize
  - visualization: across the entire stack

### securing infrastructure

- VPC: network and host level boundaries
  - isolates your compute resources
  - provides multiple layers of defense
  - offers a secure VPN connection AWS
- Inspector: Managing system security configuration and maintenance of running components
  - identify application security issues
  - enforce security best practices
  - generates assessment reports
- IAM/Resource Policies: enforcing service-level protection
  - service endpoint security configuration
  - principle of least privelege
- Shield: protection against DDoS attacks
- WAF: configure rules to protect against web based attacks
- Firewall Manager: configure WAF across AWS accounts

### data at rest & in transit

- key management service
- CloudHSM
- Certificate Manager
- Secrets Manager

### AuthNZ

- Cognito, Directory Service, IAM, Identity Center

### Incident Response

- broad strategies
  - use APIs for automation: automate routine tasks that need to be performed, e.g. isolating resources
  - forensic data analysis: create snapshots of data/configuration to capture the current state for later investigation and before remediation
  - immutable infrastructure: after capturing snapshots, recreate resources with a clean slate and replace all keys, credentials, etc
  - coordination and orchestration: utilize step functions to stitch together workflows with adaptability

## Networking

- Foundational Services
  - VPC
  - Transit Gateway
  - PrivateLink
- Edge Networking
  - CloudFront
  - Route53
  - Global Accelerator
- Network Security
  - Shield
  - WAF
  - Network Firewall
  - Firewall Manager
- Application Networking
  - App Mesh
  - Api Gateway
  - Cloud Map
- Hybrid Connectivity
  - Direct Connect
  - Site-to-Site VPN
  - Client VPN
  - Cloud WAN

### OSI Model in AWS

- Layer 1: physical layer: Direct Connect
- Layer 2: the hypervisor; software that allows the hardware to be consumed
  - you dont have access to the physical hardware, but can use the AWS cli that is layered on top for some layer 2 access
- Layer 3: the management layer; aka software defined networking
  - where you create accounts and start building using the console, cli and APIs
- Layer 4: service layer; s3, lambda, RDS, EC2, VPC, security groups, IAM, etc

### topologies

#### point to point

- private data connection securely connecting two/more locations for private data services
- does not traverse the public internet

#### bus

- in early networks, a single physical cable was used to create connections between locations

#### tree

- share information across a network with many servers
- the network signals transmitted by root nodes hit all computers at the same time

#### hub and spoke

- the network hub is in the middle, and spokes are all the connected devices on the outside
- used in small and large networks
- in AWS
  - VPN connections
  - Direct Connect Gateways
  - VPC Peering
  - transit gateways

#### mesh

- a simultaneous fully connected and partially connected design
- adds fault-tolerance and redundancy for load balancing/WAN requirmeents
- in AWS
  - transit gateway
  - VPC peering connections

#### ring

- will usually have multiple rings for redundancy
- used in Metro Area Networks (MANs)

#### hybrid

- abcd

## Storage

- AWS absorbs and manages the extra capacity requirements but you still need to account for them
  - formatting
  - file system
  - hardware failure protection
  - data protection
  - operating system overhead
- allocated: billed for the capacity you reserve
- consumed: billed for the actual capacity used

### Core Storage Services

#### block storage

- dedicated, low-latency storage for each host; analogous to direct-attached storage (DAS) or a Storage Area Network (SAN)
- provisioned with each virtual server and offer the ultra low latency required for high-performance workloads.
- in AWS
  - EBS

#### file storage

- access shared files and require a file system;often supported with a Network Attached Storage (NAS) server
- in AWS
  - EFS: cloud native file storage; multi-Availability Zone file storage service that uses NFS access protocol.
  - FSx: implement managed files storage using the commonly available file systems for on-premises solutions.
    - FSx for Lustre: high performance computing (HPC) and machine learning (ML) workload
    - FSx for Windows File Server: Microsoft applications and Windows workloads.
    - FSx for NetApp ONTAP: provide both NetApp block and file storage
    - FSx for OpenZFS:
  - create self-managed files shares using EC2 instances with attached EBS volumes.

#### object storage

- in AWS
  - S3: different storage classes or tiers to match your price, access, and availability requirements
  - s3 glacier

### Network Attached Storage (NAS)

- connects to a shared storage device across the entire network
- usually kept in a data center and provides file-level access
- in AWS
  - EFS
  - FSx

### Storage Area Network (SAN)

- adds block-level access
- in AWS
  - Elastic Block Store

### Edge and hybrid cloud storage

- Edge compute and storage solutions
  - remote or disconnected locations
  - hybrid solutions to connect on-premises to storage services in the AWS.

#### Edge: Local compute and storage

- use compute resources and storage services even when disconnected from AWS
- provide a data transfer platform to copy your data in to and out from the AWS
- in AWS
  - Snowball Edge devices: edge computing, data migration, and edge storage device for data collection, ML and processing; Storage for envs with intermittent connectivity or in remote disconnected locations
    - Storage Optimized: highest storage capacity
    - Compute Optimized: more available vCPUs with a lower storage capacity.
  - Snowcone devices: smallest member of the Snow family purpose-built for use outside of a traditional data center.
  - Snowmobile service: exabyte-scale data transfer service used to move large amounts of data to AWS
    - transfer up to 100 PB per Snowmobile, a 45-foot long ruggedized shipping container, pulled by a semitrailer truck

#### Hybrid: onpremise cloud

- in AWS
  - AWS Outposts: offers the same AWS infrastructure, services, APIs, and tools to virtually any data center, colocation space, or on-premises facility
    - built on top of EBS and S3: compute, storage, database, and other services run locally on Outposts

#### Hybrid: onpremise gateway

- connects on-premises users and applications using a software appliance with cloud-based storage
- provides integration between an organization’s on-premises IT environment and the AWS storage infrastructure
- use cases
  - moving backups to the cloud
  - using onpremise file shares backed by cloud storage
  - low-latency access to data in AWS for on-premises applications; Local caching reduces network latency for both read and write activities.
- in AWS
  - S3 file gateway: store application data files and backup images as durable objects in Amazon S3
  - FSx file gateway: optimizes on-premises access to fully managed, highly reliable file shares in Amazon FSx for Windows File Server
  - Volume gateway: cloud-backed iSCSI block storage volumes to your on-premises applications
  - Tape gateway: replace physical tapes on premises with virtual tapes in AWS without changing existing backup workflows

### Data transfer and migration

- copy or transfer on-premises data to/from Storage services in AWS.

#### file transfer

- in AWS
  - AWS Transfer: file transfers in/out of S3/EFS using SFTP, FTPS, FTP

#### data synchronization & online transfer

- in AWS
  - AWS DataSync: online data transfer service moving data between on-premises storage systems and AWS and between AWS services

#### offline data transfer & migration

- in AWS
  - AWS Snow: offers several physical devices and capacity points, most with built-in computing capabilities

#### migration

- in AWS
  - Application Migration Service: MGN; migrating applications to the AWS Cloud, AWS GovCloud (US), and AWS Outposts.
  - CloudEndure Migration: is a highly automated lift-and-shift (rehost) solution

### Data protection

- optional services to meet your data redundancy and disaster requirement needs

#### Backup & Archive

- in AWS
  - AWS Backup: centralize and automate data protection across AWS services

#### Snapshots

#### Replication

#### Disaster Recovery Services
