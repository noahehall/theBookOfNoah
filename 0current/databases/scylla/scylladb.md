# Scylladb

- nosql, big data realtime wide-column db
- written in c++

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
  - redis replacement
  - real time user tracking/interactions/reacting

### terms

- partition: subset of a data that is stored on a node and replicated across nodes
- partition key: identifies a set of rodes that comprise a partition, and locates the specific node within a cluster that contains the data
- partitioner: the partition hash function: determines which node stores a specific of data within a cluster

### consistency

- consistency level: determines how many replicas in a cluster must acknownledge a read/write operation before it is considered successfuly
  - any: a r/w must occur with at least one replica in a cluster
    - highest availability with lowest consistency
  - quorum: when a majority of the replicas based on the replication factor (e.g. 2/3) respond 200
  - one: if one response 200
  - local_one: at least on in the local data center
  - local_qurom: a quorum of replicas in the local datacenter
  - each_quorom: a quorum of replicas in all datacenters
  - all: a r/w must occur to all replicas in a cluster
    - provides the lowest availability with highest consitsency
- tunable consistency: you can specify the consistency per operation/query in CQL, depending on the context of what you're doing
  - this will override the default set at the keyspace/data center level

### availability

- hash ring: in a scylla cluster all nodes are equal: there are no master/slave/replicate sets and r/w can occur on any node
- replication occurs automatically
- replication factor: the number of nodes where data (rows & partitions) are replicated
  - data will always be replicated to the # of nodes set by this value; regardless of the consistency level
- replications strategy: determines how data is replicated in a cluster across nodes
  - strategy Y:
  - strategy X:

#### replication strategies

## architecture

### data model

- data storage: stores data in a set of rows organized as tables (i.e. each row is a table with columns)
  - each row has a primary key that identifies it
  - the data is partitioned and retrieved by the primary key
- data model
  - keyspaces: the highest level of the data model
    - contains an arbitrary amount of tables depending on X,Y,Z
  - tables: how scylla stores data and can be thougt of as a set of rows and columns
  - columns: defines the data structure in the table
    - each column has a defined data type

### keyspaces

- top-level container that stores tables with attributes that define how data is replicated on nodes
- defines a number of options that apply to all the tables in the keyspace
  - most importantly is the replication strategy

## tools

### nodetool

- status: e.g. UN = up and normal
  - U: up
  - N: normal
