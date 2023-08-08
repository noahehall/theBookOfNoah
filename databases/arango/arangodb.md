bookmark

- https://www.arangodb.com/docs/stable/tutorials.html
  - skipped everything and went straight to user management

# arangodb

- ArangoDB is a native multi-model, open-source database with flexible data models for documents, graphs, and key-values.
- this file pertains only to background info and primarily arangod server, for http/aql/etc see sibling files

- todos
  - delete the old arangodb doc

## links

- docs
  - [clustering](https://www.arangodb.com/community-server/cluster/)
  - [administration](https://www.arangodb.com/docs/stable/administration.html)
  - [arangod: options](https://www.arangodb.com/docs/stable/programs-arangod-options.html)
  - [arangodb drivers](https://www.arangodb.com/docs/stable/drivers/)
  - [arangosh: intro](https://www.arangodb.com/docs/stable/programs-arangosh.html)
  - [configuration](https://www.arangodb.com/docs/stable/administration-configuration.html)
  - [data model: concepts](https://www.arangodb.com/docs/stable/data-modeling-concepts.html)
  - [data modeling](https://www.arangodb.com/docs/stable/data-modeling.html)
  - [data model: naming conventions](https://www.arangodb.com/docs/stable/data-modeling-naming-conventions.html)
  - [deployment models](https://www.arangodb.com/docs/stable/deployment.html)
  - [drivers: java](https://github.com/arangodb/arangodb-java-driver#learn-more)
  - [foxx microservices](https://www.arangodb.com/docs/stable/foxx.html)
  - [main docs introduction](https://www.arangodb.com/docs/stable/index.html)
  - [managing users](https://www.arangodb.com/docs/stable/administration-managing-users.html)
  - [transactions](https://www.arangodb.com/docs/stable/transactions.html)
  - [web interface: getting started](https://www.arangodb.com/docs/stable/getting-started-web-interface.html)
  - [web interface](https://www.arangodb.com/docs/stable/programs-web-interface.html)
  - [scaling arango](https://www.arangodb.com/docs/stable/scaling.html)

## basics

- features & use cases
  - can be deployed to a cluster
  - run queries on multiple documents with optional transactional consistency and isolation
  - replication: active failover
  - sharding: spread large datasets across multple services
  - configurable durability: spectrum between more durability / performance
  -

## catchall

```sh

# set the root password after initial installation of arangodb
# has no effect in case of deployments
arango-secure-installation


```

## arangod

- speaks HTTP / REST, and comes with agraphical web interface to keep it simple
- prefer to use a driver with the programming language of your choice vs using the http/rest interface, unless you want to keep it raw

### architecture

- database: sets of collections
- collections: aka tables to store documents
- documents: aka rows, but without the need to define columns (attributes) there will be in advance

#### databases

#### collections

- collection types
  - document
  - ede

#### documents

- attributes
  - system attributes: automatically defined/required
    - `_key[String]`: immutable unique identifier; cant be changed once created; if not supplied when created a random one will be assigned
    - `_id[String]`: `collectionName/docKey`:
    - `_rev[String]`: dunno yet
  - custom attributes: arbitrary fields you set on a document
    - auto: field type inferred by the field value
    - array: ordered collection of values
    - object: unordered set of key-value pairs
    - string: value always returned as a string

### web interface

- http://localhost:8529
