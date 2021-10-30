# TLDR

amazon relational database service

## links

- [user guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)
- tuts
  - [running dbs on AWS](http://aws.amazon.com/running_databases/)

  -

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

  -
