# DMS: Database Migration Service

- assess, convert and migrate databse and analytic workloads to AWS

## links

- [landing page](https://aws.amazon.com/dms/?did=ap_card&trk=ap_card)
- [data sources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html)
- [SCT: landing page](https://aws.amazon.com/dms/schema-conversion-tool/?nc=sn&loc=2&refid=ap_card)
- [SCT: user guide](https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html)

## best practices

### anti patterns

## features

- migrate non aws databases to dynamodb, rds, aurora, etc
- maintain high availability and minimal downtime during the migration with multi-az and ongoing data replication and monitoring
- supports hetero/homogeneous db migrations
- Create redundancies of business-critical databases and data stores to minimize downtime and protect against any data loss.
- Build data lakes and perform real-time processing on change data from your data stores.

### pricing

- on demand: pay for
  - replication instances
  - any additional log storage
  - by the hour used
- serverless: pay for
  - capacity that is use

## terms

## basics

- general workflow
  - identify source and target data stores
  - setup configure endpoint connections
  - manually create an EC2 instance, and DMS will configure it with replication software
  - DMS manages and runs replication tasks, providing you with updates
  - DMS/you create the target tables and begins the migration
    - Loads the tables with data without any foreign keys or constraints

### AWS Schema Conversion Tool

- for heterogenous migrations to translate the source schema to the target schema
- Identifies the issues, limitations, and actions for the schema conversion
- Generates the target schema scripts, including foreign keys and constraints
- Converts code such as procedures and views from source to target and applies the code on the target.

## considerations

## integrations
