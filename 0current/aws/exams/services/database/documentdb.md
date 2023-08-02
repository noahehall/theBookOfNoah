# DocumentDB (with mongodb compatibility)

- fully managed document db for mongodb workloads where the storage and compute are decoupled, allowing each to scale independently.

## my thoughts

## links

- [landing page](https://aws.amazon.com/documentdb/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- run the same application code and use the same drivers and tools that you use with MongoDB.

### pricing

- based on 4 dimensions
  - on demand instances: amount of compute instances for a cluster; price per second with 10-minute minimum
  - db i/o: amount of i/o used for R/W; price per million i/os
  - db storage: data stored in clusters storage volume; price per gb/month
  - backup storage: amount of backup stored used in excess of clusters db storage usage; price per gb/month

## terms

## basics

- entities
  - table: collection
  - row: document
  - column: field
  - primary key: object id
  - nested table/object: embedded document

## considerations

## integrations
