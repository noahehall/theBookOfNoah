# CQL

- cassandra query language
- query languaged for scylla: enables you to perform basic CRUD ops
- almost exact syntax as sql

## links

- [AAA cql getting started](https://docs.scylladb.com/getting-started/cqlsh/)

## quickies

### docker

```sh
# ssh into a sql shell oo a scylla cluster at someIp via user/pw
docker run -it --rm --entrypoint cqlsh scylladb/scylla -u scylla -p somepassword some.ip.addr

# run a single instance of scylla via docker
docker run --rm --name scyllaU -d scylladb/scylla:4.5.0 --overprovisioned 1 --smp 1

# get the status of a node
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

### terms

- coordinator node: manages the request path and response back to the client for a specific connection

## CQL shell

- interactive cli to interactive with scylla db
- the connection is established to any of the nodes, which is then designated as the coordinate onde for that specific connection

## commands

### keyspaces

#### create

- durable_rights: Boolean;
- WITH REPLICATION object
  - class
    - NetworkTopologyStrategy
    - SimpleStrategy: shouldnt be used in production
  - replication_factor: Int;

```sh


```

### table

#### create

- define table columns via `(colName dataType, ..., PRIMARY KEY(colName))`

#### insert

- insert columns via `(colName, ...) values (value, ...)`

#### read

- specify data via `select * from tableName`
