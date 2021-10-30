# TLDR

amazon relational database service

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

## basics

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

- **determining db instance requirements**
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
