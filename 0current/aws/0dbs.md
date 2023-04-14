# TLDR

dynamodb, rds, aurora, elasticache, keyspaces, neptune (graph db), redshift (data swarehouse), documentdb, timestream, qldb

## links

- [aurora serverless](https://aws.amazon.com/rds/aurora/serverless/)
- [documentdb](https://aws.amazon.com/documentdb/)
- [dynamodb local docker setup](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html#docker)
- [lake formation](https://aws.amazon.com/lake-formation/?did=ap_card&trk=ap_card)
- [rds aws-cli](https://docs.aws.amazon.com/cli/latest/reference/rds/index.html)
- [rds billing](https://aws.amazon.com/rds/pricing)
- [rds database preview environment](https://us-east-2.console.aws.amazon.com/rds-preview/home?region=us-east-2#)
- [rds db instance billing](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/User_DBInstanceBilling.html)
- [rds db instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html)
- [rds supported postgres versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions)
- [rds user guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)
- [redshift](https://aws.amazon.com/redshift/)
- [timestream](https://aws.amazon.com/timestream/)

### tuts

- [running dbs on AWS](http://aws.amazon.com/running_databases/)
- [rds & vpc](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html)
- [rds security](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html)
- [rds high availability multi-az](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)
- [rds monitoring db instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Monitoring.html)
- [rds postgres](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html)
- [rds setting up](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html)
- [rds working with a DB instance in a vpc](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html)
- [rds IAM](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAM.html)
- [rds regions, AZ and local zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html)
- [rds importing data into postgres](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL.Procedural.Importing.html)
- [rds upgrading postgres major/minor versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.PostgreSQL.html)
- [rds create a db instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html)
- [rds create a VPC for use with a db instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateVPC.html)
- [rds scenarios for accessing a DB instance in a vpc](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Scenarios.html)
- [rds create an ec2 instance to connect to a db instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html)
- [rds local pgadmin connect](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ConnectToPostgreSQLInstance.html)

## best practices

- storage types
  - provisioned IOPS: when you have high throughput needs
  - general purpose: for everything else
  - storage autoscaling: offload management of increasing db storage capcity to AWS (enable this and move on with your life) but be aware of costs
- simulating DB failure
  - login to the DB and get the host via SQL e.g. `select host_name`
  - go to the RDS/etc config page and reboot instance (ensure with failover is checked)
  - click the log & events tab and check that failover occured
  - log back into the DB and retrieve the hostname, it should be different
- all applications should have DB reconnect logic to manage the scenarios of dbs being replaced and connections being lossed
- managed multi-AZ doubles the cost for each additional instance,
- a single db subnet group can be shared across db services (e.g. aurora, neptune, rds, etc)

### gotchas

- managed DB services
  - dont give you access to all features for every database engine
  - restricted user privileges
  - inability to micropatch (you have to wait for AWS)

### troubleshooting

- if app perf is slow, check the status of DB/cache clusters to see if you need to add additional nodes/read-replicas

## terms

- database resiliency: Resiliency is the ability of resource to recover quickly and continue operating even when there has been an failure/disruption; users of a resilient system never know that a disruption has even occurred.

## aurora

- Amazon Aurora is a MySQL and PostgreSQL compatible enterprise-class database, starting at <$1/day.
- designed for high availability & scalability
  - supports up to 64TB of auto-scaling storage capacity, 6-way replication across three availability zones, and 15 low-latency read replicas
- automatically scalable and distributed by default
- Amazon Aurora Serverless: a fully ondemand version

## rds

- RDS: web service to setup, operate and scale a relational database in the AWS cloud
  - mysql, postgresql, mariadb, oracle, sql server
- managed db service: responsibile for most managmeent tasks
- limitations
  - up to 40 postgresql db instances
  - storage limits (see storage link)
  - max connections: rds requires 3 connections for system maintenance
    - if you set a value for user connections, always `add 3` to account for rds system management connections
- use cases
  - cost-efficient, resizable capacity for industry standard relation db
  - manages common admin tasks
    - backups: automatic (have to turn on) or manual; can be used to restore a db
    - software patching
    - automatic failure detection
    - recovery
    - high availability with a primary instance and a sync secondary instance: failover to secondary when problems occur
    - scalability: use read replicas to increase read scaling
    - security: via IAM (create users access) and provision behind a VPC
  - use commoon db products: mysql, mariadb, postgres, oracle & microsoft sql server
- recommended version: postgres 13.4
  - [all extensions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.FeatureSupport.Extensions.13x)
    - [spi model](https://www.postgresql.org/docs/13/contrib-spi.html)
    - [pgrouting](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL_Partitions.html)
    - [pglogical](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL_Partitions.html)
    - [postgis](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.PostgreSQL.CommonDBATasks.PostGIS.html#CHAP_PostgreSQL.Extensions.PostGIS)
- db instance: isolated DB enviornment in AWS cloud; the basic building block of rds
  - contain one/more user-created dbs
  - access via same tools & apps you would normally
  - create/modify db instances using the cli, rds api, console
- db engines: the specific database product software that runs on the db instance
  - mysql, mariadb, postgresql, oracle, microsfot sql server
- db instance class: determines the computation and memory capacity of a db instance oferring different compute, memory and storage capabilities
- NTP: network time protocol is used to sync time on db instances
  - you also use this on ubuntu to sync time
  - security group: controls access to the db instance by permitting access to IP ranges/ec2 instances you specify
- database preview environment: try out new postgres versions & extensions before they are fully supported by creating a db instance in the database preview environment
  - endpoint for api/cli: `rds-preview.us-east-2.amazonaws.com`
- modules: i.e. postgres extensions
  - see modules available for your current version after logging into psql `SHOW rds.extensions;`
- read-replica considerations
  - support read-only SQL queries
  - requires automatic backups
  - only support asyncrhonous replication
  - can be promoted to standalone independent instances
    - to implement sharding to address scalability
  - add the multi-AZ zone option for automatic replication to another AZ
    - you need to create a subnet group
- multi-AZ deployment RDS
  - create a VPC
  - create a db subnet group for the database in each AZ you want to have a DB instance in
    - you generally want your DBs in private subnets, so only internal resources can access them
  - create a primary RDS instance in one of your previously created subnets
  - you can either:
    - add the multi-AZ at the time of creation
    - come back later an modify it (theres a perf impact and could take the db offline while in process)
- determining db instance requirements
  - resource reqs:
    - memory?
    - cpu?
  - VPC, subnet and security group:
    - security group rules: based on type of VPC and region
      - default VPC: automatically configured to support db instances
        - create a VPC security group that authorizes connection fro the application/service to RDS db instance
        - specify the default DB subnet group
      - user defined VPC: must be created before you setup the DB instance
        - create a VPC security group that authorizes connections from the app/service to RDS db instance
        - configure the VPC to host DB instances
          - atleast 2 subnets each in distinct availablity zones
          - if db instance is publicly accessible,
            - requires an internet gateway attached to the vpc
            - support DNS resolution, DNS hostnames
              - go to the vpc console > select vpc > actoins > drop through each one
        - specify a DB subnet group that defines which subnets in that VPC can be used by the DB instance
  - high availability
    - failover support in production & testing runbooks: a Multi-AZ deployment creates a primary & secondary (standby) db instance in another az for failover support
  - iam policies: ensure you have account policies that grant the permissions needed to perform RDS operations
  - open ports: ensure the TCP/IP port your db uses is accessible through your companies firewall policies
  - AWS region: ensure your DB is provisioned in the region closes to your sers
  - DB disk subsystem: determine the type of storag eyou need
    - magnetic (standard): i.e. disk-based; most cost-effect; ideal for applications with light/burst I/O reqs
    - general purpose (SSD): i.e. gp2; faster access than disk-based
    - provisioned IOPS (PIOPS): the fastest; ideal for I/O-intensive workloads requireing storage performance and consistency in random I/O throughput
- create a VPC security group to provide access to your db instance
  - if youre not using the default VPC, do the following to create a security group for a user-defined VPC
    - go the VPC console > security groups > create
    - give a name, description
    - select the VPC you want to creat eyour DB instance in
    - setup rules
      - inbound (repeat if you need multiple access rules, e.g. for different users/applications)
        - type: custom TCP
        - port range: value for your db instance
        - source: security groupname/ID address range (CIDR value) from where you access the db istance
          - ip address: permits ccess to the db instance from the IP address detected in your browser
      - outbound: default all outbound connections permitted
        - generally you should limit outbound to the set of APIs you'll be providing data too
  - if your using the default VPC, a default subnet group spanning all VPCs subnets is created for you
    - you can select the default VPC to use

```sh
  # example from defualt vpc + subnets
    # default vpc
      ipv4 CIDR: 172.31.0.0/16
      route table: configured
      main network ACL: configured
      DHCP options set: configured
    # 4 subnets
      172.31.0.0/20
      172.31.16.0/20
      172.31.48.0/20
      172.31.320.0/20

  # scenario vpc + 1 pub subnet + 1 priv subnet + db instance
  # ^ generally you want to launch the `vpc wizard` from the vpc dashboard instead of doing it by hand
    # ec2 elastic IP
    # ^ create one and take note of allocation ID
      network border group: default vlaue
      public IPv4 address pool: amazons pool of ipv4 addresses
    # vpc
      ipv4 CIDR: 10.0.0.0/16
      ipv6 CIDR: none
    # pub subnet
      ipv4 CIDR: 10.0.0.0/24
    # priv subnet
      ipv4 CIDR: 10.0.1.0/24
    # any additional subnets
    # ^ ensure any additional priv subnets use the same routing table as the first one above
      ipv4 CIDR: 10.0.2.0/24 # note the incremented value
    # nat gateway (auto created via wizard)
      choose elastic IP Address
      enable DNS hostnames: yes
      hardware tenancy: default
    # public security group: e.g. a web server,
      inbound rule 1: http, :80, 0.0.0.0/0
      inbound rule 2: ssh, :22, your ip (https://checkip.amazonaws.com/)
    # priv security group: e.g. for db instance
      inbound rule 1: PostGreSQL, :5432, the public security group ID
    # create a DB subnet (in the rds console)
    # ^ require either 2 priv or 2 pub, go with 2 priv
    # now you can finally create your db instance as normal
    # then you can create an ec2 server to connect to your db instance
    # ^ make sure the ec2 instance has the correct security group you created earlier (the public one)

```

### postgres on RDS

- managed service running specific version of postgresql
- use cases
  - create db instances & snapshots
  - point-in-time restores & backups
  - multi-az deployments
  - read replicas
  - provisioned IOPS
  - security by provisioning instances within a VPC
  - use SSL to connect to a db instance
  - application types
    - HIPAA-compliance apps to store healthcare related information
    - protected health information (PHI) under a completed business associate agreement (BAA) wth AWS
    - federal risk & authorization management program (FedRAMP) security requirements

#### postgres upgrading major/minor versions

- types of upgrades
  - operating system upgrades: the underlying opreating system of the DB instance for secuirty fixes/OS changes
  - database engine upgrades: moving to a newer version of a database engine
    - major upgrades: usually aren't backward compatible with existing applications
      - must be manually performed
      - RDS will also upgrade all of the in-region read replicas along with the primary db instance
    - minor upgrades: usually are backward compatible with existing applications
      - can be set to `auto` for amazon to handle this
      - if using read-replicas, the read replicas must be upgraded before the primary db instance
    - notes
      - You experience an outage until the upgrade is complete.
      - after the upgrade is complete, you cannot revert to the previous version of the db instance
      - extensions
        - `POSTGIS` pre pg 12
          - upgrade to the most recent minor version, then upgrade to 12, then upgrade to version after 12
        - `pgRouting` pre pg 11
          - drop the extension, then upgrade, then reinstlal the extensions
        - `tsearch2` and `chkpass` arent supported pg >= 11
      - if your backup retention policy > 0
        - amazon takes 2 snapshots during the upgrade process
          - snapshot 1: before the upgrade (so you can rollback if any issues)
          - snapshot 2: after the upgrade completes
        - if it isnt, you should change the backup retention policy by modifying the RDS DB instance
      - if your DB instance is in a Multi-AZ dpeloyment
        - both the primary writer DB instance & stand DB instaces are upgraded (at the same time)

```sh
  # identify valid upgrade targets for a version
    aws rds describe-db-engine-versions \
    --engine postgres \
    --engine-version 10.11 \ # change 10.11 to your current pg version
    --query "DBEngineVersions[*].ValidUpgradeTarget[*].{EngineVersion:EngineVersion}" --output text

```

#### connecting to db instance

- notes
  - rds doesnt permit host access to the DB instance (e.g. via telnet / ssh)
  - restricts access to certain system procedures & tables that requir advanced privileges
  - database authentication schemes
    - password: i.e. database paswords
    - password + IAM database authentication: auth using db password + user creds through AWS IAM users and roles
    - password + kerberos auth: choose a directory in which you want to allow authorized users to authenticate with this DB instance using kerberos authentication
  - instance types
    - standard: m classes; e.g. `db.m6g.large`
    - memory optimized: r & x classes; e.g. `db.r6g.large`
    - burstable: t classes; e.g. `db.t3.micro`
  - storage types
    - megnetic
    - general purpose SSD (gp2)
    - provisioned IPS SSD (io1)
- connect via pgadmin
- connect via psql

## dynamodb

- fully managed highly available & fault tolerant (infrastructure failure) nosql (key-value) db
  - the ease in which you get high availability & fault tolerance cannot be beat
  - however you are fkn stuck on AWS
- DynamoDB Local is available as a download (requires JRE), as an Apache Maven dependency, or as a Docker image.
- designed for a single AWS region
- data is automatically replicated across three independent locations
- dynamodb streams: replicate a dynamodb table to separate region(s)
- global table: automatically replicate a table across multiple aws regions automatically
  - the tables are multi-master, i.e. that can be written to/from any region
  - to convert a regional table to a global table, streams must be enabled & write capacity must be configured as paper-request/auto-scaled (preferred)
- elastic storage: AWS has no limit on the amount of data you can store (up to billions of documents in a single table)
- elastic throughput: can adjust the throughput via an API call to match demand patterns
- considerations
  - table name
  - primary key- sort keys
  - global table: create a regular table > globl tables tab > add a global table region(s) to replicate the table across regions

## elasticache

- for in memory data, supports both redis & memcache
- both
  - completely managed
  - neither service uses the latest version of either engine
- distinction
  - memcache
    - only auto scales vertically (increase instance size), you have to manually scale in/out the # of nodes in a cluster
    - read only cache
  - redis
    - scales auto scales both vertically & horizontally
    - cache is read & write
    - fault tolerance is more complex; ensure you select append only file (AOF) for data durability
    - use replication groups to protect against cluster failure
      - consists of a primary read/write cluster + 5 read only replicas that are updated asynchronously
      - however there is no manual cluster promotion (AWS manages this by creating a new one in the existing AZ)

### memcache

- fully managed multi-AZ protocol compliant adaption of memcache by AWS but not the most current version of memcache
- can modify number of running nodes via api call/web console (up to 100)
- mult node memcache cluster
  - you have to create a cache subnet group (similar workflow to an RDS subnet group)
    - generally you want atleast 2 nodes per subnet in a private cache subnet group in each AZ
    - by defualt, the # of nodes you select in the config screen will be distributed across the subnets in your selected cache subnet group

### redis

- multi AZ capability
  - create cache subnet group in multiple AZs
  - one contains the primary read/write instance
  - other contains the read replicas
  - global datastore enables cross-region read replicas
  - on primary node failure: the read replica with the least amount of replication lag is chosen and promoted to primary read/write
    - internal to elasticache, no change is required
    - but since your application is required to access the read/write via endpoint, you have to update your code to point to the new read/write
    - if you dont setup any read replicas, on failure, you lose everything!
  - cluster mode: the data is distributed across nodes in shards (up to 90) to help guard against any single node being overwhelmed
    - this improves write performance as you can distribute writes to multiple shards
    - each shard stores data independently
    - you generally want at least one (and preferrable 2) read replica per shard to guard against failure
- rebalancing (scaling in/out shards) can take hours depending on instance size, EBS speed, and transaction volume

## keyspaces

- managed compatable apache cassandra nosql database designed to be highly available with no single point of failure
- tables are encrypted by default and spread out 3 times across AZs
- has a 99.99 avaialbility SLA in each region (less than an hour of downtime per year)

## neptune

- a fully managed high-available graph database
  - property graphs using Gremlin
  - knowledge graphs using RDF and SPAWRQL
- vertically scalable: can adjust the instance size of a running instance
- redundant database volumes: each db volume replicated multiple times across 3 availability zones
- supports up to 15 async read replicas; any replica can be promoted to primary in event of failure with automatic DNS name pointing to the new primary during failover
- does not offer cross-region replicas
- after creation of a neptune cluster, you can add a new read replica via the actions dropdown

## redshift

- fully serverless data warehouse solution
- use sql to analyze structued and semi-structued data across data warehouses, data lakes and dbs

## documentdb

- i.e. managed mongodb
- compatible with mongodb at the API level

## timestream

- time series database
- ideal for IoT and telemtry
- can handle trillions of events per day

## QLDB

- quantum ledger DB
- immutable and verifiable transaction log without the need to manage a blockchain network

## memorydb

- redis compatible in-memory db service

## lake formation

- build, manage and secre data lakes
