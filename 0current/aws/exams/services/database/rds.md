# RDS

- relational database supporting 7 different RDBMDS's like postgres, mysql, oracle, mariadb and sql server
  - see the aurora file for aurora with postgres/mysql

## my thoughts

## links

- [landing page](https://aws.amazon.com/rds/?did=ap_card&trk=ap_card)
- [high avialability multi az](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)
- [working with read replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)
- [configuration](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_RDS_Configuring.html)
- [snapshots and restoring](https://docs.aws.amazon.com//AmazonRDS/latest/UserGuide/CHAP_CommonTasks.BackupRestore.html)
- [security](https://docs.aws.amazon.com//AmazonRDS/latest/UserGuide/UsingWithRDS.html)

## best practices

- high availability
  - requires replication across atleast two AZs

### anti patterns

## features

### pricing

## terms

## basics

### db instance

- the compute portion of RDS, the EC2 that runs the selected db engine
  - even tho the underlying service is EC2, you manage it via the RDS console
- instance class
  - standard: m; balance of copmute, memory and network resources
  - memory optimized: r and x; for workloads that process large datasets in memory
  - burstable: t; ability to burst beyond the baseline performance

### storage

- the storage portion of RDS uses elastic block store for both data and log storage
- storage classes
  - general purpose ssd: gp2, gp3;
    - workloads running medium-sized db instances for dev and testing environments
  - provisioned iops ssd: io1;
    - i/o intensive workloads requiring low latency and consistent i/o throughput
  - magnetic: standard;
    - for backward compatibility; use one of the other classes

### high availability with Multi-AZ

- multi-az deployments: automates data replication & failover across AZs
- a redundant instance is placed within the same vpc but different subnet and AZ
  - you technically can use the same two subnets in the same AZ, but that defeats the purpose
- your apps connect to a single endpoint, and DNS handles routing to the secondary incase the primary fails
  - you need to ensure your app reconnects on failure with exponential backoff
    - if issues connecting to the secondary: update any cached DNS lookups

### snapshots

- automated backups are enabled by default
  - backups up the entire db instance and transaction logs
  - you need to set the backup window during a time the DB receives the least amount of activity
    - setting the retention period to 0 days disables automated snapshots and delete any existing backups
- manual bsnapshots: you can retain backups for longer than 35 days
- point-in-time recovery: create a new db instance using data restored from a specific snapshot

### security

- it boils down to application security, vpc, NACL, security groups, and IAM
- encryption at rest: can be enabled in configuration
- encryption in transit: enable SSL or TLS

## considerations

- create method
  - standard: set all available configuration options
  - easy: use recommended configuration options
- db instance size: product, dev/test, or free tier
- engine type
- backups: automated vs manual snapshopts

## integrations
