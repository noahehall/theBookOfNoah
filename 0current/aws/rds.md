# TLDR

amazon relational database service

- todo
  - ondemand db instances <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_OnDemandDBInstances.html>
  - db instance billing <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/User_DBInstanceBilling.html>
  - reserved db instances <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithReservedDBInstances.html>
  - multi-az <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html>
  - regions, avialability, local zones <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html>
  - db instance storage <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html>
  - db instance classes <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html>

## links

- [user guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)
- ref
  - [db instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html)
  - [aws-cli for rds](https://docs.aws.amazon.com/cli/latest/reference/rds/index.html)
  - [db instance billing](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/User_DBInstanceBilling.html)
  - [rds billing](https://aws.amazon.com/rds/pricing)

- tuts
  - [running dbs on AWS](http://aws.amazon.com/running_databases/)
  - [rds & vpc](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html)
  - [security on rds](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html)
  - [high availability multi-az for rds](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)
  - [monitoring RDS db instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Monitoring.html)
  - [postgres on rds](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html)
  - [setting up for RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SettingUp.html)
  - [working with a DB instance in a vpc](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html)
  - [IAM for rds](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAM.html)
  - [regions, AZ and local zones for RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html)

## basics

- az: availablity zone; distinct data center in a specific region; reach region has at least two AZs
- RDS: web service to setup, operate and scale a relational database in the AWS cloud
  - managed db service: responsibile for most managmeent tasks

  - use cases
    - cost-efficient, resizable capacity for industry standard relation db
    - manages common admin tasks
      - backups: automatic (have to turn on) or manual; can be used to restore a db
      - software patching
      - automatic failure detection
      - recovery
      - high availability with a primary instance and a sync seocndary instance: failover to secondary when problems occur
      - scalability: use read replicas to increase read scaling
      - security: via IAM (create users access) and provision behind a VPC
    - use commoon db products: mysql, mariadb, postgres, oracle & microsoft sql server
- db instance: isolated DB enviornment in AWS cloud; the basic building block of rds
  - contain one/more user-created dbs
  - access via same tools & apps you would normally
  - create/modify db instances using the cli, rds api, console
- db engines: the specific database product software that runs on the db instance
  - mysql, mariadb, postgresql, oracle, microsfot sql server

- db instance class: determines the ocmputation and memory capacity of a db instance oferring different compute, memory and torage capabilities
- NTP: network time protocol is used to sync time on db instances
  - you also use this ubuntu to sync time (e.g. when fkn slack fks up the time you run this)
  - security group: controls access to the db instance by permitting access to IP ranges/ec2 instances you specify

## worfklows

### determining db instance requirements

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
      - specify a DB subnet group  that defines which subnets in that VPC can be used by the DB instance
- high availability
  - failover support in production & testing runbooks: a Multi-AZ deployment creates a primary & secondary (standby) db instance in another az for failover support
- iam policies: ensure you have account policies that grant the permissions needed to perform RDS operations
- open ports: ensure the TCP/IP port your db uses is accessible through your companies firewall policies
- AWS region: ensure your DB is provisioned in the region closes to your sers
- DB disk subsystem: determine the type of storag eyou need
  - magnetic (standard): i.e. disk-based; most cost-effect; ideal for applications with light/burst I/O reqs
  - general purpose (SSD): i.e. gp2; faster access than disk-based
  - provisioned IOPS (PIOPS): the fastest; ideal for I/O-intensive workloads requireing storage performance and consistency in random I/O throughput

### create a VPC security group to provide access to your db instance

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

### postgres on RDS

- managed service running specific version of postgresql
- use cases
  - create db instances & snapshots
  - point-in-time restores & backups
  - multi-az deployments
  - read replicas
  - provisioned IOPS
  - security by provisioning instances within a VPC
  - ue SSL to connect to a db instance

#### connecting to db instance

- notes
  - rds doesnt permit host access to the DB instance (e.g. via telnet / ssh)
  - restricts access to certain system procedures & tables that requir advanced privileges
  -
- via pgadmin
- via psql
