- bookmark:
  - https://university.scylladb.com/courses/scylla-essentials-overview/lessons/architecture/topic/shard/
  - https://manager.docs.scylladb.com/stable/docker/index.html#

# Scylladb

- nosql, big data realtime wide-column db
- written in c++
- peer to peer distributed database, designed to handle big-data without having a single point of failure.
  - Even if a hardware or network failure occurs, the system provides high Availability.

## links

- [AAA getting started](https://docs.scylladb.com/getting-started/#)
- [AAA scylla monitoring stack](https://monitoring.docs.scylladb.com/stable/)
- [scylla university](https://university.scylladb.com/)
- [scylla cloud for scylla enterprise](https://cloud.scylladb.com/)
- docs
  - [AAA scylla architecture](https://docs.scylladb.com/architecture/)
  - [AAA scylla docker](https://manager.docs.scylladb.com/stable/docker/index.html)
  - [authorization](https://docs.scylladb.com/operating-scylla/security/authorization/)
  - [drivers](https://docs.scylladb.com/using-scylla/drivers/)
  - [admin: nodetool](https://docs.scylladb.com/operating-scylla/nodetool/)

## basics

- characteristics
  - fully compatible dropin replacement for apache cassandra with lower node count but still increased perf
    - cassandra API, drivers & use cases all apply to scylla
    - also integrates with presto, spark, k8s,
  - API compatible with dynamodb (need more info)
  - autotuning: provides enhanced performance with minimal config; picks up hardware-level characteristics (cores, i/o throughput, network throughput) and adjusts its runtime config
  - high availability: global deployments, narivw multi dc (region), scale out to 100x clusters
  - big data: terabytes to patabytes
  - realtime: consistent sub millisecond read/write
  - high performance: millions requets per sec per scylla node; 1 mill r/w operations per node
- use cases
  - replace cassandra + redis deployments (redis as cache layer fronting cassandra) clusters
  - metadata storage
  - redis replacement (yea right)
  - real time user tracking/interactions/reacting

### terms

- partition: subset of a data that is stored on a node and replicated across nodes
- partition key: identifies a set of rodes that comprise a partition, and locates the specific node within a cluster that contains the data
- partitioner: the partition hash function: determines which node stores a specific of data within a cluster
- coordinator node: manages the request path and response back to the client for a specific connection

### consistency

- consistency level: determines how many replicas in a cluster must acknownledge a read/write operation before it is considered successfuly
- tunable consistency: you can specify the consistency per operation/query in CQL, depending on the context of what you're doing
  - this will override the default set at the keyspace/data center level
  - i.e. enabling unique, per-query, Consistency Level setting

### availability

- hash ring: in a scylla cluster all nodes are equal: there are no master/slave/replicate sets and r/w can occur on any node
- replication occurs automatically
- replication factor: defines the total number of nodes in a cluster that contains replica data
  - data will always be replicated to the # of nodes set by this value; regardless of the consistency level
- replications strategy: determines how data is replicated in a cluster across nodes
  - strategy Y:
  - strategy X:

#### replication strategies

## architecture

### nodes

- basic unit of organization comprised of a scylla db instance and software

### clusters

- a collection (usually 3 to hundreds) of nodes to store data which is automatically replicated across the nodes based on the replication factor defined in the keyspace
- node ring: nodes are logically distributed like a ring, based on a hash fn
  - each node in a cluster will contain a portion of the clusters content and several independent shards
  - each node is responsible for a range of tokens, and each value is attached to a token using a partition key:
  - when nodes are added (to increase storage/processing power) or rmeoved (decommisioned/failure) the cluster reconfigures itself automaticaly
- communication
  - internal between nodes is peer-to-peer: there is no single point of failure
  - external (e.g. client to cluster r/w request): the client request can go to any node, which will then be designated the coordinate for that request

### data model

- data storage: stores data in a set of rows organized as tables (i.e. each row is a table with columns)
  - each row has a primary key that identifies it
  - the data is partitioned and retrieved by the primary key
- data model
  - keyspaces: the highest level of the data model
    - a collection of tables with attributes that define how data is replicated on nodes.
    - define several option sthat apply to all tables, most importantly the replication strategy
    - best practice to have a single keyspace per application/cluster
  - tables: how scylla stores data and can be thougt of as a set of rows and columns
  - columns: defines the data structure in the table
    - each column has a defined data type

#### keyspaces

- top-level container that stores tables with attributes that define how data is replicated on nodes
- defines a number of options that apply to all the tables in the keyspace
  - replication strategy
  - replication factor

#### tables

#### columns

- partition key: one/more columns thar are responsible for distribution data across the nodes in a cluster
  - determines in which node a given row is located

## tools

### nodetool

- status: e.g. UN = up and normal
  - U: up
  - N: normal
