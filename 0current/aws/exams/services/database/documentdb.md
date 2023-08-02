# DocumentDB (with mongodb compatibility)

- fully managed document db for mongodb workloads where the storage and compute are decoupled, allowing each to scale independently.

## my thoughts

## links

- [landing page](https://aws.amazon.com/documentdb/?did=ap_card&trk=ap_card)
- [dev: intro](https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html)
- [mongodb shell](https://docs.aws.amazon.com/documentdb/latest/developerguide/getting-started.connect.html)
- [architecture](https://docs.aws.amazon.com/documentdb/latest/developerguide/how-it-works.html)
- [security](https://docs.aws.amazon.com/documentdb/latest/developerguide/security.html)
- [working with documents](https://docs.aws.amazon.com/documentdb/latest/developerguide/document-database-working-with-documents.html)

## best practices

### anti patterns

## features

- run the same application code and use the same drivers and tools that you use with MongoDB.
- JSON documents are a first class object of the database. query and store data in the database using the same JSON data format of the data as it used in the application tier
- flexible indexing, powerful ad-hoc queries, and analytics over collections of documents.
- Storage auto scales from 10GB up to 64TB
- provides automatic, continuous, and incremental backups and point-in-time restore.

### pricing

- on demand instances: amount of compute instances for a cluster
  - 10 minute minimum; per instance-hour or per partial instance-hour consumed from the time you launch an instance until you delete it
- IOPS: amount of i/o used for R/W; per 1 million increments
- Data out: per gigabyte per month
- db storage: data stored in clusters storage volume; price per gb/month
- backup storage: amount of backup stored used in excess of clusters db storage usage; price per gb/month

## terms

## basics

### architecture

- table: collection
- row: document
- column: field
- primary key: object id
- nested table/object: embedded document
- cluster: one or more instances and a cluster storage volume that manages the data for those instances
  - primary instance: handles all writes, can handle reads
  - read-only replicas:
  - volume: stores six copies of your data across three different Availability Zones

### security

- IAM authz for management APIs
- authentication via mongodb drivers enabled by default and cant be disabled
  - configured via mongodb tools and drivers

#### encryption

- data in transit: TLS
- data at rest: AES-256
  - Storage encryption is enabled cluster-wide and is applied to all instances (primary & read) and cluster volume
  - includes cluster’s data, indexes, logs, automated backups (if enabled), replicas, and snapshots.

## considerations

- same DB considerations as all the others

## integrations

### IAM

### KMS
