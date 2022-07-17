# db architecture

- there is so much duplication in this repository...

## links
- [data lake vs warehouse](https://www.talend.com/resources/data-lake-vs-data-warehouse/)
- [data mesh vs lake](https://www.dataversity.net/data-mesh-vs-data-lake-which-is-better-for-your-business/)
- [scale up vs scale out](https://packetpushers.net/scale-up-vs-scale-out/)
- [cap theorem](https://en.wikipedia.org/wiki/CAP_theorem)
- [database transactions](https://en.wikipedia.org/wiki/Database_transaction)
- [how to choose the right time series database](https://devopsprodigy.com/blog/chose-the-right-time-series-database/)
- [data driven architecture: choosing the right db](https://sairamkrish.medium.com/choosing-your-database-data-driven-architecture-89d6633cd1e4)
- [shared nothing architecture](https://en.wikipedia.org/wiki/Shared-nothing_architecture)
- [scylladb vs clickhouse UFC Match](https://altinity.com/blog/2020/1/1/clickhouse-cost-efficiency-in-action-analyzing-500-billion-rows-on-an-intel-nuc)
  - [YC discussion](https://news.ycombinator.com/item?id=21970952)

## terms
- data mesh: enables collection, integration and analysis of data from disparate systems concurrently in a single location
  - it connects to disaparate systems, to pull data on the fly
- data lake: allows storing yuuuge amounts of raw, structured, and/or unstructured data in a single repository enabling comprehensive analysis from a single location
  - i.e. you push any and everything into a data lake, whether or not the data has a purpose
  - it doesnt connect to disparate systems, you have to push it into the lake
- data warehouse: allows storing yuuuge amounts of structured, filtered data that has already been processed for a specific purpose (like data already in use by app/biz)
  - i.e. you push filtered data into a warehouse, for later analysis
- high scalability:
  - scale up/vertical: whatever you have now, but optimized for multi-core, multi-cpu, and high capacity storage devices, usually on the fly
  - scale out/horizontal: whatever you have now, but more of it; usually on the fly
- high availability: low latency and remain highly accesible even in the event of hardware/system/network failures
- high performance: run as close to the hardware as possible to deliver low and consistent latency with very high throughput
- low maintenance: incluse ease-of-use features, e.g. automated capabilities & processes without the neeed for high technical expertise
- fault tolerance:
- cap theorem: any distributed data store can only provide 2 of three guarantees: consistency, availability, and partition tolerance; since every DB is susciptible to partition failure, its really a choice between consistency and availability
- consistency: every read receives the most recent write/error
- availability: every request receives a (non-error) response, without the guarantee that it contains the most recent write
  - can be overcome via active replication: in the event of failure just switch to the redundant system
- partition tolerance: the system continues to operate despite an arbitrary number of messages being dropped/delayed by the network between nodes
- network partition failure: forces you to either cancel the operation & decrease availabilty but ensure consistency, or proceed with the operation and thus provide availability but risk consistency
- garbage collection
- compaction: TODO
- node: generally a unit of storage, e.g. a single db instance including all the software running on the hardware
- cluster: a group of nodes that work together; e.g. a 3 node cluster is the minimum for high availability
- replication: the process of replicating data across nodes ina cluster
- replication factor: The total number of replica Nodes across a given Cluster; the number of copies of a set of data, e.g. RF of 1, means theres 1 copy, RF 2 means there 2 identical copies, etc, generally you want 3
- consistency level: how many nodes must validate a READ/WRITE before the request is considered successful
  - e.g. at least 2 nodes must acknowledge an operation/query/whatever for it to be considered 200
- big data: generally the dataset is so huge it cant be contained in a single node, thus a cluster of nodes are required

## sql

- relational, structured
- best for online analytical processing
- scales up

## nosql

- hierarchical, unstructured
- best for online transaction processing at scale
- scales out
- main distinctions are data model driven: e.g. rdbms vs nosql vs wide-column etc
  - the logical structure of the database is design
  - how the data relates to each other
  - how the data is processed and stored inside the system
- secondary distinctions is according to the cap thereom: usually a choice between C and A, as all are susceptible to P (failures)
  - consistency: will every read receive the most recent write
  - availability: will ever request receive a non-error response (but doesnt have to be the most recent write)
  - partition tolerance: will the system operate in the face of network failures/msg loss

### key /val

- long list
  - redis
  - memcached
- data model
  - key value pairs: each key has only one value
  - fast queries, no need for a query language

### document store

- long list
  - mongodb
  - couchbase
  - ravendb
- data model
  - data stored in documents of tagged elements (like a row in rdbms)

### column (oriented)

- long list
  - clickhouse
- data model
- characteristics
  - wheres SQL stores record by record (row by row), column oriented dbs store column by column
  - improves storage and retrieval performance

### wide column store

- long list
  - cassandra
  - dynamodb
  - hbase
  - scylla
- data model
  - store data in columns
  - related columns are grouped into tables (column families)
- characteristics
  - supports large numbers of dynamic columns:
  - aka 2 dimensional key value stores

### graph

- long list
  - neo4j
- data model
  - use nodes & edges to store data

### multi-model

- go for the native multi models, and not the ones enhanced with extensions/plugins/etc (timescale is dope tho)

- longlist
  - arangodb
