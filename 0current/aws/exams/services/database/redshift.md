# redshift

- data warehouse: fully managed enterprise-level, petabyte scale column data warehouse
- data lake: Run queries across exabytes of data directly from your data lake built on Amazon Simple Storage Service (Amazon S3) with Amazon Redshift Spectrum.

## links

- [landing page](https://aws.amazon.com/redshift/?did=ap_card&trk=ap_card)
- [spectrum: getting started](https://docs.aws.amazon.com/redshift/latest/dg/c-getting-started-using-spectrum.html)
- [redshift: docs](https://docs.aws.amazon.com/redshift/index.html)
- [resources](https://aws.amazon.com/redshift/resources/)
- [clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html)
- [queries](https://docs.aws.amazon.com/redshift/latest/mgmt/query-databases.html)
- [iam: user management](https://docs.aws.amazon.com/redshift/latest/mgmt/iam-redshift-user-mgmt.html)

## best practices

### anti patterns

## features

- delivers 10 times faster performance than other data warehouses by using machine learning, massively parallel query execution, and columnar storage on high-performance disk, efficient, targeted data compression encoding schemes.
- Automatically create, train, and deploy machine learning models for predictive insights.
- Securely share data among accounts, organizations, and partners while building applications on top of third-party data.
- reports and dashboards using Amazon QuickSight, Tableau, Microsoft PowerBI, or other business intelligence tools.
- simplified data access, ingest, and egress from numerous programming languages and platforms without configuring drivers and managing database connections.
- run queries across your data warehouse and Amazon S3 buckets simultaneously

### pricing

- node types: Each cluster node includes memory, storage, and I/O
- on demand: hourly rate based on type and number of nodes
- spectrum: pay for the number of bytes scanned on Amazon S3.
- concurrency scaling: pay a per-second on-demand rate for usage that exceeds the free daily credits
- reserved instance: save up to 75 percent over On-Demand rates by committing to using Amazon Redshift for a 1- or 3-year term
- data transfers: billed using the standard AWS data transfer rates.
  - no charge for data transferred between Amazon Redshift and Amazon S3 within the same AWS Region for backup, restore, load, and unload operations.
- RMS
- ML

## basics

### architecture

- a collection of computing resources called nodes, which are organized into a group called a cluster. Each cluster runs an Amazon Redshift engine and contains one or more databases.
- cluster: composed of a leader node and one or more compute nodes.
- nodes:
  - leader: responsible for distributing jobs to the compute nodes.
    - creates jobs based on the query logic and sends them in parallel to the compute nodes
    - aggregates the results from all of the compute nodes and sends a report back to the client.
  - compute: find the required data, perform operations, and return results to the leader node
    - Each compute node has its own dedicated CPU, memory, and attached disk storage
    - partition the job into slices. Each slice is allocated a portion of the node's memory and disk space.
    - After the slices have completed their assigned tasks, the results are aggregated and returned to the leader node.
- endpoints: can use any application that uses an industry standard JDBC or ODBC driver for PostgreSQL.
  - leader: Clients access via a SQL endpoint on the leader node

### spectrum

- allows you to query all types of data stored in Amazon Simple Storage Service (Amazon S3) buckets without the need to first load the data into the Amazon Redshift database
- extend the size of your analytical reach well beyond the boundaries of your data warehouse’s local storage.

### concurrency scaling

- support virtually unlimited concurrent users and concurrent queries
- automatically adds additional cluster capacity when you need it to process an increase in concurrent read queries. When the demand decreases, the additional capacity is removed.

### security

- same architecture as the other AWS databases
- IAM: to create and manage credentials
- VPC: network isolation
- ssl/tls for data in transit
- kms data at rest

### query editor

- requires a specific cluster node type, vpc routing and specific IAM permissions

## considerations

- either quick/normal launch
- cluster id
- db name, port (e.g. 5439), master name/pass,
- node type
- cluster type: single/multi node
- number of compute nodes
- cluster parameter group
- encryption type: KMS/HSM
- vpc: subnets, security groups, public access, vpc routing, AZ,
- cloudwatch integration for disk usage
- maintanence
- IAM role for transferring data from s3 into redshift

## integrations

### IAM

### VPC

- A VPC endpoint forces all COPY and UNLOAD traffic between your cluster and your data on Amazon S3 to stay in your VPC.
- the redshift cluster must be in the same region as the S3 bucket

### KMS

### Glue

- ETL from RDS + S3 into redshift

### Kinesis

### Lambda

### S3

### QuickSight

- data viz

### cloudwatch
