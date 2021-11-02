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
- [database preview environment](https://us-east-2.console.aws.amazon.com/rds-preview/home?region=us-east-2#)
- [aws simple monthly calculator](http://calculator.s3.amazonaws.com/index.html)

- ref
  - [db instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html)
  - [aws-cli for rds](https://docs.aws.amazon.com/cli/latest/reference/rds/index.html)
  - [db instance billing](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/User_DBInstanceBilling.html)
  - [rds billing](https://aws.amazon.com/rds/pricing)
  - [supported postgres versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions)

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
  - [importing data into postgres on rds](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL.Procedural.Importing.html)
  - [upgrading postgres major/minor versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.PostgreSQL.html)
  - [create a db instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html)
  - [create a VPC for use with a db instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateVPC.html)
  - [scenarios for accessing a DB instance in a vpc](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Scenarios.html)
  - [create an ec2 instance to connect to a db instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html)
  - [local pgadmin connect to rds](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ConnectToPostgreSQLInstance.html)

## basics

- az: availablity zone; distinct data center in a specific region; reach region has at least two AZs
- RDS: web service to setup, operate and scale a relational database in the AWS cloud
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
      - high availability with a primary instance and a sync seocndary instance: failover to secondary when problems occur
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

- db instance class: determines the ocmputation and memory capacity of a db instance oferring different compute, memory and torage capabilities
- NTP: network time protocol is used to sync time on db instances
  - you also use this ubuntu to sync time (e.g. when fkn slack fks up the time you run this)
  - security group: controls access to the db instance by permitting access to IP ranges/ec2 instances you specify

- database preview environment: try out new postrel versions & extensions before they are fully supported by creating a db instance in the database preview environment
  - endpoint for api/cli: `rds-preview.us-east-2.amazonaws.com`

- modules: i.e. postgres extensions
  - see modules available for your current version after logging into psql `SHOW rds.extensions;`

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
        - if db instance is publicly accessible,
          - requires an internet gateway attached to the vpc
          - support DNS resolution, DNS hostnames
            - go to the vpc console > select vpc > actoins > drop through each one
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
    - federal risk & authorization  management program (FedRAMP) security requirements

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
    -
- connect via pgadmin
- connect via psql

## quickies

```sh
  # always set the default profile
    export AWS_DEFAULT_PROFILE=someprofile

  # see supported postgres versions
    aws rds describe-db-engine-versions --default-only --engine postgres

```
