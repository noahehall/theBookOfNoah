# CQL & CQL Shel

- cql
  - cassandra query language
  - A query language for interacting with the Scylla (or Cassandra) database.
  - almost identical syntax to sql
- cql shell: cli for interacting with scylla through CQL

## links

- [AAA cql getting started](https://docs.scylladb.com/getting-started/cqlsh/)
- [map cpus to scylla shards](https://docs.scylladb.com/kb/map-cpu/)

## quickies

### docker

```sh
# ssh into a sql shell on a scylla cluster at someIp via user/pw
docker run -it --rm --entrypoint cqlsh scylladb/scylla -u scylla -p somepassword some.ip.addr

# run a single node of scylla via docker
docker run --rm --name scylla1 -d scylladb/scylla:4.5.0 --overprovisioned 1 --smp 1
## run another node, and add it to the other making a cluster of 2
## repeat, e.g. to make a cluster of 3
docker run --rm --name scylla2 -d scylladb/scylla:4.5.0 --seeds="$(docker inspect --format='{{ .NetworkSettings.IPAddress }}' scylla1)" --overprovisioned 1 --smp 1


# get the status of a node: you want all nodes to have status UN (Up and Normal)
docker exec -it containerName nodetool status

# ssh into a cql shell
docker exec -it containerName cqlsh
```

### operations

```sql

# change scylla user pw
ALTER ROLE scylla WITH PASSWORD = 'new_password';

# create a keyspace called mykeyspace
CREATE KEYSPACE mykeyspace
WITH replication = {'class': 'NetworkTopologyStrategy', 'AWS_US_WEST_1' : 3}
AND durable_writes = true;

# select the keyspace for use
USE mykeyspace;

# create a table in the keyspace
CREATE TABLE monkeySpecies (
  species text PRIMARY KEY,
  common_name text,
  population varint,
  average_size int
);

# insert some data into a table
INSERT INTO monkeySpecies (
  species, common_name, population, average_size
) VALUES (
  'Saguinus niger', 'Black tamarin', 10000, 500
);

# read from a table
SELECT * FROM monkeySpecies;
```

## basics

### gotchas

- queries failing?
  - check the consistency level (e.g. if ALL) and the replication factor: if nodes are down, and the replication factor isnt met based on the requirements of hte consistency level, then reads/writes will fail

## CQL shell

- interactive cli to interactive with scylla db
- the connection is established to any of the nodes, which is then designated as the coordinate onde for that specific connection

## commands

### bash

- ssh into a bash shell on a node, scylla provides additional cli tools

```sh

# check the number of physical cores on the server
# ^ and how each map to a scylla shard
# ^ @see https://docs.scylladb.com/kb/map-cpu/
./usr/lib/scylla/seastar-cpu-map.sh -n scylla

```

### inspection

```sh
DESCRIBE KEYSPACe somekeyspace;

```

### consistency

- consistency statements set the consistency level
- values
  - any: a r/w must occur with at least one replica in a cluster
    - highest availability with lowest consistency
  - quorum: when a majority of the replicas based on the replication factor (e.g. 2/3) respond 200
  - one: if one response 200
  - local_one: at least on in the local data center
  - local_qurom: a quorum of replicas in the local datacenter
  - each_quorom: a quorum of replicas in all datacenters
  - all: a r/w must occur to all replicas in a cluster
    - provides the lowest availability with highest consitsency

```sh
CONSISTENCY QUORUM
.... # all these statements now have quorum consistency level
```

### keyspaces

#### create

- durable_rights: Boolean;
- WITH REPLICATION object
  - class
    - NetworkTopologyStrategy
    - SimpleStrategy: shouldnt be used in production
  - replication_factor: Int; cant be more than the number of nodes in a cluster

```sh


```

### table

- primary key: defines the column(s) that will be used as the partition key

#### create

- define table columns via `(colName dataType, ..., PRIMARY KEY(colName))`

#### insert

- insert columns via `(colName, ...) values (value, ...)`

#### read

- specify data via `select * from tableName`
