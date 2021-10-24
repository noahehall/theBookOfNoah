pdf 2
pg 11
schema design

# TLDR
```sh
  # launch mongo container
  docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4

  # connect to it from host
  docker exec -it mongodb bash

  # issueing cmds
  # https://docs.mongodb.com/manual/reference/command/
    db.runCommand(
     {
       find: "restaurants",
       filter: { rating: { $gte: 9 }, cuisine: "italian" },
       projection: { name: 1, rating: 1, address: 1 },
       sort: { name: 1 },
       limit: 5
     }

  # equality vs contains queries
  # use dot nation for contain queries
  # use object notation for exact matches
  db.runCommand(
    # parent document must match fields + field order
      filter: { parent: { key: 1, key: 2}}
    # parent document must contain fields with values
      filter: { 'parent.key': 1, 'parent.key': 2 }
  )
)

```

# TODOs
  - [mongodb transactions](https://docs.mongodb.com/manual/core/transactions/)
  - [aggregate cmd](https://docs.mongodb.com/manual/reference/command/aggregate/#dbcmd.aggregate)
  - [all operators](https://docs.mongodb.com/manual/reference/operator/)
  - [data modeling guide](https://docs.mongodb.com/manual/core/data-modeling-introduction/)
  - [query on embedded/nested documents](https://docs.mongodb.com/manual/tutorial/query-embedded-documents/)


# books
  - wtf is the name of this book?
    - bookOfNoah/books/mongodb

# links
## mongodb specific
  - [mongodb reference landing screen](https://docs.mongodb.com/manual/reference/)
  - [install mongodb ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
  - [mongodb production notes](https://docs.mongodb.com/manual/administration/production-notes/)
  - [mongodb ulimit](https://docs.mongodb.com/manual/reference/ulimit/)
  - [mongodb configuration file options](https://docs.mongodb.com/manual/reference/configuration-options/#conf-file)
  - [mongo javascript shell](https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo)
  - [mongo shell tutorial?](https://docs.mongodb.com/manual/mongo/)
  - [mongos reference](https://docs.mongodb.com/manual/reference/program/mongos/#bin.mongos)
  - [mongoimport reference](https://docs.mongodb.com/manual/reference/program/mongoimport/#bin.mongoimport)
  - [bsondump reference](https://docs.mongodb.com/manual/reference/program/bsondump/#bin.bsondump)
  - [mongodump reference](https://docs.mongodb.com/manual/reference/program/mongodump/#bin.mongodump)
  - [mongoexport reference](https://docs.mongodb.com/manual/reference/program/mongoexport/#bin.mongoexport)
  - [mongofiles reference](https://docs.mongodb.com/manual/reference/program/mongofiles/#bin.mongofiles)
  - [mongorestore reference](https://docs.mongodb.com/manual/reference/program/mongorestore/#bin.mongorestore)
  - [mongostat reference](https://docs.mongodb.com/manual/reference/program/mongostat/#bin.mongostat)
  - [mongotop reference](https://docs.mongodb.com/manual/reference/program/mongotop/#bin.mongotop)
  - [mongod - the daemon](https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod)
  - [mongodb getting started tutorial](https://docs.mongodb.com/manual/tutorial/getting-started/#getting-started)
  - [mongodb nodejs driver docs](https://mongodb.github.io/node-mongodb-native/2.2/)
  - [mongodb glossary](https://docs.mongodb.com/manual/reference/glossary)
  - [mongodb documents](https://docs.mongodb.com/manual/core/document/)
  - [mongodb introduction](https://docs.mongodb.com/manual/introduction/)
  - [mongodb extended json v2 docs](https://docs.mongodb.com/manual/reference/mongodb-extended-json/)
  - [mongodb sharding](https://docs.mongodb.com/manual/sharding/)
  - [CRUD operations](https://docs.mongodb.com/manual/crud/#crud)
  - [database methods](https://docs.mongodb.com/manual/reference/method/js-database/)
  - [aggregation](https://docs.mongodb.com/manual/aggregation/)

### must do
  - [mongo shell methods](https://docs.mongodb.com/manual/reference/method/)
  - [mongo shell quick reference](https://docs.mongodb.com/manual/reference/mongo-shell/)
  - [data modeling](https://docs.mongodb.com/manual/data-modeling/)
  - [operators](https://docs.mongodb.com/manual/reference/operator/)
  - [schema validation](https://docs.mongodb.com/manual/core/schema-validation/)
  - [data model examples and patterns](https://docs.mongodb.com/manual/applications/data-models/)
  - [db koda wack azz support portal](https://dbkoda.useresponse.com/)
  - [database cmds](https://docs.mongodb.com/manual/reference/command/)
  - [admin cmds](https://docs.mongodb.com/manual/reference/command/nav-administration/)
  - [cursor methods](https://docs.mongodb.com/manual/reference/method/js-cursor/)
  - [bulk write operations](https://docs.mongodb.com/manual/core/bulk-write-operations/)
  - [aggregation pipeline reference](https://docs.mongodb.com/manual/meta/aggregation-quick-reference)
  - [mongodb query evaluations](https://docs.mongodb.com/manual/reference/operator/query/#evaluation)
  -

## related technologies
  - [wired tiger storage engine](http://www.wiredtiger.com/)
  - [dbkoda - db dev and admin tool](https://www.dbkoda.com/)
  - [mongdb sample collections](https://medium.com/dbkoda/mongodb-sample-collections-52d6a7745908)
## other
  - [atomicity](https://en.wikipedia.org/wiki/Atomicity_(database_systems))
  - [ACID](https://en.wikipedia.org/wiki/ACID)
  - [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem)
  - [DB transactions](https://en.wikipedia.org/wiki/Database_transaction)
  - [isolation](https://en.wikipedia.org/wiki/Isolation_(database_systems))
  - [durability](https://en.wikipedia.org/wiki/Durability_(database_systems))
  - [idempotence](https://en.wikipedia.org/wiki/Idempotence)

# terminology
  - nosql database
    - non-sql/non relational database
    - provides a mechanism for storage and retrieval of data other than tabular relations used in relational databases
    - doesnt use tables for storing data
    - generally used to store big data and real-time web applications
    - vs relational databases
      - is schema less
      - no complex joins

    - schemaless database
      - the db does not enforce a particular structure on documents in a collection

  - OLAP databases
    - online analytical processing
  - RDBMS
    - relational database management system

  - mongodb
    - nosql database
    - document-oriented database
    - use cases
      - big and complex data
      - mobile and social infrastructure
      - content management and delivery
      - user data management
      - data hub
    - advantages
      - scalability
      - performance
      - high availability
      - scaling from single server deployments to large, complex multi-site architectures
    - features
      - adhoc queries
        - can search by field, range query and also supports regular expression searches
      - indexing
        - can index any field in a document
      - replication
        - supports master-slave replication
        - master can perform reads and writes
        - slave copies data from the master and can only be used for reads or backup (not writes)
      - duplication of data
        - mongodb can run over multiple servers
        - the data is duplicated to keep the system up and also keep it running in conditions of hardware failure
      - load balancing
        - has an automatic load balancing configuration because of data placed in shards
      - supports map reduce and aggregation tools
        - uses javascript instead of procedures
      - is a schema-less database written in C++
      - provides hgh performance
      - stores files of any size easily without complicating your stack
      - easy to administer in case of failures
      - supports
        - json data model with dynamic schemas
        - auto-sharding for horizontal scalability
        - built in replicatin for high

  - JSON
    - javascript object notation
  - BSON
    - binary representation of JSON documents
    - a serialization format used to store documents and make remote procedure calls in mongodb
  - transaction
    - symbolizes a unit of work performed against a DB
    - each is treated in a coherent and reliable way independent of other transactions
    - multi statement transactions
      - atomic groups of transactions to ensure data consistency
      - either all of the statements in a group succeed or all fail
      - in relational databases
        - multi statement transactions are initiated with `BEGIN` and completed with `COMMIT` or `ROLLBACK` for succeed/failure
        - additionally, anywhere you see `casecade` in a table definition behind the scenes is a multi statement transaction
    - two-phase commit protocol
      - for multistatement transaction consistency
      - each server prepares to execute the transaction
        - all the updates are computed and guaranteed to not cause consistency violations within the server
      - once all the servers have executed the `prepare` stepp, each server then applies the updates that are part of the transaction
        - each server generally maintains a set of locks on data to be modified
        - these locks are held until all the other servers have completed their prepare step
          - this can be a lengthy process, and thus introduce performance drawbacks

  - ACID
    - Atomic transactions
      - an indivisible and irreducible series of database operations such that either all occur, or nothing occurs
      - a gaurantee of atomicity prevents updates to the DB occuring only partially
        - partial updates are bad!

    - Consistency
      - any given DB transaction must change affected data only in allowed ways
      - any data written to the DB must be valid according to all defined rules
        - constraints
        - cascades
        - triggers
        - etc. & e.g.
          - deleting a row in a one-to-many relationship should also delete the many rows joined to it
          - adjusting the quantity of a line item on an order should update the order total cost
            - if the cost is stored in the order row itself
          - in a bank account transfer, the debit from the sneding account and the credit into the receiving account should be an atomic operation where boht succeed or both fail

    - Isolation
      - determines how transaction integrity is visible to other users and systems
      - lower isolation levels increases the ability of many users to access the same data at the same time
        - increases the number of concurrency effects
          - e.g. dirty reads or lost updates
      - higher isolation level reduces the types of concurrency effects that users may encounter
        - requires more system resources
        - increases the chances that one transaction will block another

    - Durability
      - guarantees that transactions that have committed will survive permanently
      -

  - CAP Thereom
    - states that it is impossible for a distributed data store to simultaneously provide more than 2/3 of the following guarantees
      - consistency
        - every read receives the most recent write or an error
      - availability
        - every request receives a non-error response - without the guarantee that it contaains the most recent write
      - partition tolerance
        - the system continues to operate despite an arbitrary number of messaages being dropped/delayed by the network between nodes

  - idempotence
    - a property of certain operations whereby they can be applied multiplie times without changing the result beyond the initial action
      - e.g.
        - a property is transitioned from `started` to `completed`
        - once in `completed` state, no matter how many times you apply this action nothing changes as its already in the `completed` state

  - operational intelligence
    - the techniques of converting transactional data to actional information ina business setting
      - the starting point is getting the raw transactional data into your data store
      - next is generating actional reports on the data, ideally in real time with data import itself
      - oft times you need batch operations to transform the data into a meaningful form
  - GridFS
    - a convention for storing large files in a mongodb database
  - oplog
    - a capped collection that stores an ordered history of logical writes to mongodb db
    - the oplog is the basic mechanism enabling replication in mongodb


# mongodb vs relational architecture
  - retrieving data from relational dbs is more difficult and resource heavy
    - any join will have a performance hit
      - its often required to denormalize the model (increase redudancy) to improve performance by reducing joins
      - if dbs are scaled across servers then you are forced to do distributed joins
    - data retrieved from magnetic disks pose lookup issues
      - data can be sparsely located, and magnetic disks must spin/search sequentially to aggregate all data
        - over 99% of the time is spent seeking the location of the data on the magnetic disk
  - mongodb lacks
    - joins
      - share the document.id to support references
    - multidocument transactions
      - difficult to guarantee atomocity
      - alternative: issue two non-atomic updates
        - this can potentially leave dangling items if one of the modifications fail
        - its important to consider the order of the updates
          - i.e. its better to delete the references before the referenced entity
        - create a transaction document to manage multi document transactions

  - mongodb db can be schemaless
  - relational DBS generally define column names and types at the table level,
    - this information isnt duplicated in each row
    - in mongodb this information IS DUPLICATED !!! in each document
      - #fail
      -


# mongodb architecture
## packages
  - mongodb-org
    - metapackage that will automatically install the four component packages
      - server, mongos, shell, and tools
  - mongodb-org-server
    - the mongod damaon
    - init script
    - configuration file
  - mongodb-org-mongos
    - mongos daemon
    - for a sharded cluster, mongos instances provide the interface between the client applications and the sharded cluster
    - route queries and write operations to the shards
    - from the application perspective, mongos instance behaves identiccally to any other mongodb instance
  - mongodb-org-shell
    - the mongo shell
  - mongodb-org-tools
    - mongoimport
      - cli tool, imports content from an extended json, csv, or tsv export created by mongoexport/other third party tools
      -
    - bsondump
      - converts BSON files into human-readable formats, including JSON
      - useful for reading the output of files generated by mongodump
    - mongodump
      - utility for creating a binary export (from mongod/mongos) of the contents of a database
    - mongoexport
      - cmd line tool that produces a JSON/CSV export of data stored in a mongodb instance
    - mongofiles
      - manipulate files stored in your mongodb instance in GridFS objects from the cmd line
      - provides an interface between objects stored in your file system and gridfs
    - mongorestore
      - loads data from either a binary db dump created by mongodump or the standard input into a mongod or mongos isntance
    - mongostat
      - provides a quick overview of the status of a currently running mongod or mongos instance
      - functionality is similar to the unix/linux file system utility vmstat
      - run from the cmd line, not the mongo shell
    - mongotop
      - provides a method to track the amount of time a mongodb isntance (mongod) spends reading and writing data
      - statistics on a per-collection level
      - run from the cmd line, not the mongo shell
## storage
  - database
    - databases hold collections of documents

  - collection
    - mongodb stores documents in collections
    - collections are analgous to tables in a relational databse
    - exists within a single db
        - collections are created when you first store data for that collection via one of the collection API crud methods

  - document
    - a record in a mongodb collection and the basic unit of data in mongodb
    - analogous to JSON objects but exist in the db as BSON
    - data is stored in documents
    - documents are modeled after JSON, and are stored as BSON
    - is a dictionary of key-value pairs where the value may be one of the following
      - primitive JSON types
        - number, string, boolean, etc
      - primitive BSON types
        - datetime, objectid, uuid, regex
      - array of values
      - other objects
      - null

  - relations
    - there are no native joins in mongodb
    - to get referential data youll need to pull the first collection, then make a second trip to get the referenced data

## important notes, files and directories
## notes
  - by default
    - mongodb runs using the `mongodb` user account
      - if you change the user account
        - update the permission to the data and log directories
    - mongodb instances run on part `27017`


## files directories
  - data/database directory
    - /var/lib/mongodb
  - log directory
    - /var/log/mongodb
  - configuration file
    - /etc/mongod.conf
    - if you modify the conf file you must restart any running mongod instances
  -

## data types
  - notes
    - mongodb has extended JSON to preserve type information
    - see the mongodb extended JSON vs documentation
  - string
    - must be UTF 8
    - used to store data
  - integer
    - used to store numeric values
    - can be 32/64 bit depending on the server
  - boolean
    - YES/NO
  - double
    - floating point values
  - min/max
    - compare a value against the lowest/highest bson elements
  - arrays
    - used to store a list/multiple values into a single key
  - object
    - used for embedded documents
  - null
    - store null values
  - symbol
    - is genreally used for languages that use a specific type
  - date
    - stores the current date/time in unix time format
    - makes it possible for you to specify your own date time creating object of date and pass the value of date, month, year into it


# data modelling
  - main challenge is balancing the need of
    - the application
    - the performance characteristics of the database engine
    - the data retrieval patterns
  - always design schema according to user requirements
  - do join on write operations never on read operations
  - objects you want too use together should be combined into one document
  - optimize your schema for more frequest use cases
  - do complex aggregation in the schema
  - duplicate the data but keep it limited, as disc space is cheaper than compute time

  - schema evolution
    - create migration scripts that upgrade the DB from one version of a schema to another
      - these are generally slow, and can hamper performance if done against a live DB
    - at the application level you can have queries that request old and new style documents, as you slowly migrate in off-hours

  - when designing the structure of documents
    - pay attention to the data types availlable for use in BSON
      - choosing the correct data type can have significant impact on the performance and capability of the system
      - storing a string date vs UTC date
        - string date (28+ bytes) vs UTC date (8 bytes), including
        - types of quering capability increases with UTC date
      - storing numeric data as strings vs numbers
        - storing numbers as strings requires more space and is more difficult to query
    - pay attention to the size of


## polymorphic schemas
  - when all the documents in a collection are similar but not identically structured
  - permits you to use the same collection to perform queries
    - on common fields shared by all content nodes
    - only a particular node type
  - in mongodb store all the nodes in the same document, with each node containing their relevant fields
  - e.g. collection 'nodes'
    - includes blog page documents
      - fields: title, url, type, text
    - includes photo documents
      - fields: title, url, type content (binary field)


## embedding vs referencing relationships
  - generalities
    - embedded approach
      - query patterns are well known
      - data tends to be accessed in one way (i.e. bulk)
    - referenced
      - adhoc queries
      - slice n dice queries
    - compromise
      - always review if embedding just the IDs verses the whole document serves your requirements

  - embedding
    - i.e. nesting related documents
    - advantages
      - data locality
        - mongodb stores documents contiguously on disk
        - thus, putting all the data you need into one documents means that youre never need more than one seek away from everything in the document
      - lack of joins
        - whenever two sets of data are cohesively bound, youll want to embed them to reduce the need for multiple round trips to the db
      - atomicity
      - isolation
      - performance
      - consistency
      - many-to-many (M:N) relationships
        - you can retrieve all the related data at the db level
          - does not require application level joins
    - disadvantages
      - queries return the entire document (overload)
        - the larger the document, the more ram required
          - RAM is usually the most critical resource on a mongodb server
          - mongodb database cashes frequently accessed documents in RAM, and the larger those documents are, the fewer that will fit
          - the fewer documents in RAM, the more likely the server is to page fault to retrieve documents
            - page faults lead to random disk i/o
      - large document sizes
        - eventually need to be copied to larger spaces as the document grows
          - since each document is stored contiguously
            - this movement (i.e. update) will be significantly slowed
        - mongodb documents have a hard size limit of 16mb
          - if a document reaches the 16mb cap, updates will fail
          - usually you breach RAM limits before this cap size limit
  - referencing
    - i.e. referencing related documents via some ID
    - advantages
      - flexibility in performing queries
        - adhoc queries for specific documents
      - high-arity relationships
        - when you have one-to-many relationships with very high/unpredictable arity
          - e.g. blog posts with hundreds/thousands comments for each post
    - disadvantages
      - requires additional care to ensure redundant data does not produce invalid data overtime
      - many-to-many (M:R) relationships require application-level joins
        - a priori, there arent any db-level joins


##  emulating two-phase commit protocol transactions
  - create a transaction collection containing documents that store the state of all outstanding actions
    - document fields
      - `state` indicates the step in the transaction
      - `id` ID of the transaction
      - the remaining fields should contain all the data required to recreate, commit, and rollback the transaction
    - documents consuming the transaction document
      - each document should contain a reference to the transaction documents to monitor success/rollback
    - process
      - `new` state
        - may be rolled back if it times out
      - `committed` state
        - will always (i.e.) eventually be retired
      - `rollback` state
        - will always (i.e.) eventually be reversed
      - each transaction should complete with a certain time window
        - based on the alotted time, when it completes, the transaction will be updated to `committed` or `rollback` states
        - you should periodically check the transaction document for any collections requiring transition to `committed` or `rollback` states


## storing log files
  - toodoo boboo


## sharding
  - toodoo boboo


# statements
## administration
```sh
  # uninstall mongodb
  sudo apt-get purge mongodb-org*
  sudo rm -r/var/{log,lib}/mongodb # double check the regex syntax

  # start mongodb
  sudo service mongod start

  # stop mongodb
  sudo service mongod stop

  # restart mongodb
  sudo service mongod restart

  # connect to mongodb via the mongo shell
  mongo # localhost with default port 27017


```

## databases
```js
  // select/create a db to use
  // will return the db instance
    use dbname

  // show the currently selected db
    db

  // show all entities
    show dbs
    show databases
    show collections
    show users
    show roles
    show profile


  // drop the currently selected db
  // deletes all associated data files
    db.dropDatabase()

  // run various commands
  // preferred method to issue db cmds
  // provides a consistent interface between the shell and drivers
    db.runCommand({...})


  // get server information
    db.serverStatus()

    // cursor metadata
      db.serverStatus().metrics.cursor

  // cmd helpers
    db.help()
    db.collection.help()

```


## collections
  - validation
    - occurs during updates and inserts
    - existing documents do not undergo validation checks until modification
    - cannot be specified for collections in the admin, local and config dbs, nor the system.* collections
  - storage engines
    - configuration specified when creating indexes are validated and logged to oplog during replication to support replica sets with members that use different storage engines
  - [needs more indepth study](https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection)
    - pipelines
    - collection
    - write concerns
    - access control
    - resource locking behavior
```js
  // explicitly create a collection with options
    db.createCollection(
      collectionName,
      {
        // if true, size param required
        capped: boolean,

        // deprecated since 3.2
        autoIndexId: boolean,

        // max size in bytes for a capped collection
        // removes older docs when size is breached
        // ignored if capped: false
        // takes precedence over max param
        size: number,

        // max # of docs allowed in a capped collection
        // if using max, make sure size param is sufficient
        // to contain max # of docs
        max: number,

        // available for WiredTiger storage engine
        storageEngine: {...},

        // specify validation rules/expressions
        // uses the same mongodb query operators
        // except $geoNear, $near, $nearsphere, $text, $where
        validator: {...},

        // how stringly mongodb applies validation rules
        // to existing docs during updates
        validationLevel: 'off|strict|moderate',
          // off - no validation for inserts/updates
          // strict - default, apply to all inserts & updates
          // moderate - do not apply rules to existing invalid docs

        // determines whether to error/warn on invalid docs
        validationAction: 'error|warn',
          // error - write fails
          // warn - write succeeds, warning logged

        // default config for indexes when creating a collection
        indexOptionDefaults: {
          'some-storage-engine-name': {...}
        }

        // name of the source collection/view
        // from which to create this view
        // the name is not the full namespace
        // i.e. dont include db name
        // i.e. u ust create views in the same db as the source collection
        viewOn: 'name',

        // TODO
        // https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection
        pipeline: [...],
        collation: {...},
        writeConcern: {...},

      }
    )

  // get collection names
    db.getCollectionNames

  // remove a collection
    db.collection.remove()

  // create a new index on the collection if it doesnt exist
  // if already exists, does nothing
    db.collection.createIndex()

  // return a reference to another db using this same connection
  // allows for cross database queries
    db.getSiblingDB()

  // rename collection
    db.collection.renameCollection('newCollectionName')

  // examples
    // create capped collection
      db.createCollection(
        "log",
        { capped : true, size : 5242880, max : 5000 }
      )

    // document validation
      db.createCollection(
        "contacts", {
          validator: {
            $jsonSchema: {
              bsonType: "object",
              required: [ "phone" ],
              properties: {
                phone: {
                  bsonType: "string",
                  description: "must be a string and is required"
                },
                email: {
                  bsonType : "string",
                  pattern : "@mongodb\.com$",
                  description: "must be a string and match the regular expression pattern"
                },
                status: {
                  enum: [ "Unknown", "Incomplete" ],
                  description: "can only be one of the enum values"
                }
              }
            }
          }
        }
      )


```

### CRUD
  - complex updates in application code
    - dont retrieve an item, update it, save it, then retrieve the value for use
      - issue
        - that can introduce race conditions between the update, save and retrieval
        - whereby the retrieval will not contain the new value
      - solution
        - atomically update the document without doing in the client application code
        - always check the return value of updates
        - as multiple clients could be modifying the same docuemnt simultaneously
  - be wary of application-level two-phase commit protocols
    - its easy to miss a failure scenario in tests
    - there are many opportunties to miss race conditions that introduce inconsistency into the data
  - retrieving data via regex expression queries require a full scan of the collection
    - its best to extract the data into atomic fields while importing, or during a background transformation process
  - using `$in` vs `$or` operators
    - use the `$in` operator when performing equality checks on the same field
  - $or
    - mongodb either performs
      - a collection scan (bad) if any fields are not indexed
      - performs an index scan (good) if all fields are indexed
    - if any clause includes a $text query
      - all clauses in the array must be indexed
      - because $text requires an index
    - if any error is returned, check the fkn docs

#### query selectors
```js
  // comparison
    // $eq equal
    // if field is an array, only a single item needs to match
      { wtf: { $eq: 20 }}
      { wtf: 20 } // same thing
    // $ne not equal
      { qty: { $ne: 20 } }
    // $gt greater than
      { qty: { $gt: 20 } }
    // $gte greater than or equal to
      { qty: { $gte: 20 } }
    // $lt less than
      { qty: { $lt: 20 } }
    // $lte less than or equal to
      { qty: { $lte: 20 } }
    // field value $in array
    // use $in > $or for the same field
      { field: { $in: [<value1>, <value2>, ... <valueN> ] } }
      { tags: { $in: [ /^be/, /^st/ ] } }
    // $nin any NOT in array

  // logical
    // $and must match ALL clauses
    // $and only necessary when repeating the field name
      { $and: [{price: {$ne: 1.99 }},{ price: {$exists: true}}]}
      { price: { $ne: 1.99, $exists: true } }
    // $nor do not match ALL clause
      $nor: [ { <expression1> }, { <expression2> }, ...  { <expressionN> } ]
    // $not do not match query expression
      { price: { $not: { $gt: 1.99 } } }
      { item: { $not: /^p.*/ } } // not start with p
    // $or match ANY clause
    // best performance on indexed fields
      $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ]

  // element
    // $exists documents that have the specified field
    // true: field exists, regardless of field value, e.g. NULL
    // false: field does not exist
      field: { $exists: <boolean> }
    // $type field is of the specified type
      field: { $type: <BSON type> }
      field: { $type: [<BSON type>, ...] } // any type

  // evaluation
    // $expr use aggregation expressions within the query
      $expr: { <expression> }
      // spent field > budget field
        { $expr: { $gt: [ "$spent" , "$budget" ] } }
      // find docs whose price < 5 after the condition is executed
      // if qty >= 100
      // then price / 2
      // else price / 4
        $expr: {
          $lt: [
            {
              $cond: {
                if: { $gte: ["$qty", 100] },
                then: { $divide: ["$price", 2] },
                else: { $divide: ["$price", 4] }
              }
            },
            5
          ]
        }
    // $jsonSchema validate docs against the given schema
    // $mod modulo operation on the value of a field
        // selects docs with a specified result
    // $regex match regex
    // $text text search
    // $where satisfy javascript expression

  // array
    // $all arrays that contain all specified elements
    // $elemMatch element in the array field
        // must match all specified conditions
    // $size array field equals size

  // comment
    // $comment adds a comment to a query predicate

  // project operators
    // $ projects the first element in an array
        // that matches the query condition
    // $elemMatch projects the first element in an array
        // that matches the specified $elemMatch condition
    // $meta projects the documents score assigned
        // during $text operation
    // $slice limits the number of elements projected
        // from an array
        // supports skip and limit slices


  // geospatial
  // bitwise
      // @see https://docs.mongodb.com/manual/reference/operator/query/

```
#### create
  - create/insert operations add new docs to collections
    - docs & collections are created if either dont exist
  - insert operations target a single collection
  - all write operations are atomic on the level of a single document
```js
  // insert
    db.collection.insert()

  // insert a single document
  // will create both db and collection if required
    db.collection.insertOne({...})

  // inserts new documents into the collection
  // returns a document that includees the newly inserted documents `_id` field values
    db.collection.insertMany([...])
```

  - bulk operations
    1. intialize a bulk opeartion builder for the collection
      - `var bulk = db.collectionName.initializeUnorderedBulkOp()`
    2. specify your bullk actions
      - `bulk.insert(), .update(), etc.`
    3. execute your operation
      - `bulk.execute()`
  -

#### read
```js
  // retrieve all documents in a collection
  // returns a cursor to matching documents
    db.collection.find({})

  // project fields to return form a query
  // returns just the name field from matching queries
    db.collection.find({}, { name: true })

  // return fields int he specified sort order
  // sort by the name field in ascending order
  // -1 === descending order
    db.collection.find().sort({ name: 1 })

  // limit matching docs to 5 rows
  // highly recommended for performance
    db.collection.find().limit(1)

  // skip the first 5 results
    db.collection.find().skip(5)

  // get the total documents matching the query
    db.collection.find().count()

  // skip the first
  // retrieve all documents matching a filter
    // exact match
      // if field is an array, then its a contains query
      db.collection.find({ field: 'value' })

      // match an array with exaactly two els
      db.collection.find({ field: ['val1', 'val2'] })

      // embedded document exact match
      db.collection.find({ 'parent.child': 'value' })

    // specify conditions via query operators
    // { field: { op1: val1, ...} }
      // IN operator
        // all docs whose status === this|that
        db.collection.find({
          status: { $in: ['this', 'that' ]}
        })

      // AND operator is indicated by comma on same level
        // all docs whose status === a && wtf < 30
        db.collection.find({
          status: 'a', // <-- comma = AND
          wtf: { $lt: 30 }
        })

      // OR operator indicated by array of conditions
        // all docs status === a OR wtf < 30
        db.collection.find({
          $or: [
            { status: 'a'},
            { wtf: { $lt: 30 }}
          ]
        })


```
##### cursors
  - by default the server will close the cursor
    - after 10 minutes of inactivity
    - or if the client has exhausted the cursor
  - the mongodb server returns the query results in batches
  - the amount of data in the batch will nnot exceed the maximum BSON document size
  - to overide the default size of the batch see `batchSize()` and `limit()`
    - `find()` `aggregate()` `listIndexes` and `listCollections` return a max of 16mb per batch
      - `batchSize()` can enforce a smaller limit, but not a larger one
```js
  var myCursor = db.collection.find();
  // remove the default 10 minute timeout
  // you are now required to call myCursor.close()
  var myCursor = db.collection.find().noCursorTimeout();

  myCursor.hasNext();
  myCursor.next();
  myCursor.forEach();
  myCursor.close();

  // loads all documents into RAM !! be careful
  // exhausts the cursor, i.e. .hasNext() === false
  var documentArray = myCursor.toArray();
  var firstDocument = documentArray[0];

  // retrieve in batches
  var myCursor = db.collection.find();
  // retrieves next batch||null
  var myFirstDocument = myCursor.hasNext() ? myCursor.next() : null;
  // returns number
  myCursor.objectsLeftInBatch();

```
##### iterate a cursor
  - the `db.collection.find()` retuns a cursor
  - if you
    - dont assign the cursor to a var mongoshell will list the first 20 items
    - assign the cursor to a var you need to manually iterate its values
```js
  var myCursor = db.collection.find();

  while (myCursor.hasNext()) {
    print(tojson(myCursor.next()));
    // or this printjson(myCursor.next())
  }
```
#### update
  - update operatins target a single collection
  - all write operations are atomic on the level of a single document
  - filters are the same as read operations
```js
  db.collection.update()

  db.collection.updateOne()

  db.collection.updateMany({
    {...}, // query records
    {...}  // set values
  })

  db.collection.replaceOne()

```
#### delete
  - remove docs from a collection
  - delete operations target a single collection
  - all write operations are atomic on the level of a single document
```js
  db.collection.deleteOne()

  db.collection.deleteMany({...})
```

#### compound operations
```js
  db.collection.findAndModify()
  db.collection.findOneAndDelete()
  db.collection.findOneAndReplace()
  db.collection.findOneAndUpdate()

  // upsert a document
  db.collection.save({...})

```

# Mongoshell
## globals
```js
  print();
  tojson();
  printjson();

```
