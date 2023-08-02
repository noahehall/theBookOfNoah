# Aurora

- serverless managed mysql/postgresql special built by AWS to take advantage of aws cloud scalability and durability

## my thoughts

## links

- [landing page](https://aws.amazon.com/rds/aurora/?did=ap_card&trk=ap_card)
- [dev resources](https://aws.amazon.com/rds/aurora/resources/)
- [security overview](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Security.html)

## best practices

- 3-5 times faster than mysql/postgres on regular RDS

### anti patterns

## features

- high perf and multi-az availability
- msql/pg compatible relational db built for faster perf at lower cost
- distributed storage for durability, perfromance and fast recovery
- flexible and auto scaling compute: up to 128 tbibytes (TiB) per instance
- low latency, cross region replication
- dropin compatible with mysql/postgres
- high volume & throughput, highly parallized transactional data
- variable/seasonal workloads with aurora serverless

### pricing

- i/o
  - charged for data transfers out to the internet and to other AWS Regions.
- instance types
  - on demand
  - serverless
  - reserved

## terms

## basics

### storage

- uses elastic block store like RDS but with a log structured distributed storage layer.
  - data is stored in cluster volumes: single, virtual volumes that use SSDs
    - data is replicated across 3 availability zones in a single region
  - for non persistent, temporary files local storage is used instead

### serverless

- aurora serverless automatically starts up, scales, and shuts down based on traffic

### high availability

- maintains six copies of your data across three Availability Zones and will automatically attempt to recover the database in a healthy Availability Zone with no data loss
- can create up to 15 read replicas that can serve read-only traffic as well as failover

#### Global Database

- available for Aurora MySQL that allows a single Aurora database to span multiple AWS Regions
- Data is replicated with no impact on database performance
- enables fast local reads in each Region with a typical latency of less than a second and provides disaster recovery from Region-wide outages

### snapshots

- automatically backs up your database to Amazon S3, enabling granular point-in-time recovery

### security

## considerations

- engine type: make sure you select Amazon Aurora

## integrations
