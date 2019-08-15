# books
  - wtf is the name of this book?
    - bookOfNoah/books/mongodb

# links
  - [install mongodb ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
  - [mongodb production notes](https://docs.mongodb.com/manual/administration/production-notes/)
  - [mongodb ulimit](https://docs.mongodb.com/manual/reference/ulimit/)
  - [mongodb configuration file options](https://docs.mongodb.com/manual/reference/configuration-options/#conf-file)
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
    - binary JSON
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
          - deleintg a row in a one-to-many relationship should also delete the many rows joined to it
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
  - schemaless database
    - the db does not enforce a particular structure on documents in a collection
  -  idempotence
    -  a property of certain operations whereby they can be applied multiplie times without changing the result beyond the initial action
      -  e.g.
        -  a property is transitioned from `started` to `completed`
        -  once in `completed` state, no matter how many times you apply this action nothing changes as its already in the `completed` state
  -  operational intelligence
    -  the techniques of converting transactional data to actional information ina business setting
      -  the starting point is getting the raw transactional data into your data store
      -  next is generating actional reports on the data, ideally in real time with data import itself
      -  oft times you need batch operations to transform the data into a meaningful form

# mongodb vs relational architecture
  - retrieving data from relational dbs is more difficult and resource heavy
    - any join will have a performance hit
      - its oftern required to denormalize the model (increase redudancy) to improve performance by reducing joins
      - if dbs are scaled across servers then you are forced to do distributed joins
    - data retrieved from magnetic disks pose lookup issues
      - data can be sparsely located, and magnetic disks must spin/search sequentially to aggregate all data
        - over 99% of the time is spent seeking the location of the data on the magnetic disk
  - mongodb lacks multidocument transactions
    - difficult to guarantee atomocity
  - mongodb lacks
    - joins
      - share the document.id to support references
    - multidocument transactions
      - issue two non-atomic updates
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
  - documents
    - data is stored in documents
    - documents are modeled after JSON, and are stored as BSON
    - is a dictionary of  key-value pairs where the value may be one of the following
      - primitive JSON types
        - number, string, boolean, etc
      - primitive BSON types
        - datetime, objectid, uuid, regex
      - array of values
      - other objects
      - null
  - collections
  - relations
    - there are no native joins in mongodb
    - to get referential data youll need to pull the first collection, then make a second trip to get the referenced data

## important notes, files and directories
## notes
  - by default mongodb runs using hte `mongodb` user account
    - if you change the user account
      - update the permission to the data and log directories
      -
## files directories
  - data directory
    - /var/lib/mongodb
  - log directory
    - /var/log/mongodb
  - configuration file
    - /etc/mongod.conf

## data types
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
    -  is genreally used for languages that use a specific type
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
      - these are generally slow, and can hamper performance of done against a live DB
    - at the application level you can have queries that request old and new style documents, as you slowly migrate in off-hours

  - when designing the structure of documents
    - pay attention to the data types availlable for use in BSON
      - choosing the correct data type can have significant impact on the performance and capability of the system
      - storing a string date vs UTC date
        - string date (28+ bytes) vs UTC date (8 bytes), including
        - types of quering capability increases with UTC date
      - storing numeric data as strings vs numbers
        - storing numbers as strings requires more space ans is more difficult to query
    - pay attention to the size of
## polymorphic schemas
  - when all the documents in a  collection are similar but not identically structured
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
          - mongodb database cases frequently accessed documents in RAM, and the larger those documents are, the fewer that will fit
          - the fewer documents in RAM, the more likely the server is to page fault to retrieve documents
            - page faults lead to random disk i/o
      - large document sizes
        - growing documents must eventually be copied to larger spaces
          - since each document is stored contiguously
            - larger documents eventually need to be copied to larger spaces as the document grows
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
  - create a transaction document containing collections that store the state of all outstanding actions
    - collection fields
      - `state` indicates the step in the transaction
      - `id` ID of the transaction
      - the remaining fields should contain all the data required to recreate, commit, and rollback the transaction
    - documents consuming the transaction document
      - each collection should contain a reference to the transaction collection to monitor success/rollback
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


# statements
## databases
  - `use database`
    - if there is no existing database, it will create then return it
    - else it will return it
  - `db`
    - show the currently selected database
  - `show dbs`
    - show all the databases
  - `db.dropDatabase()`
    - drop the currently selected database and delete all associated data files

## collections
  - `db.createCollection(name, options)`
    - name - name of the collection
    - options - document type, specifies the memory size and indexing of the collection
      - capped
        - boolean
        - if true
          - caps the collection at a fix size that auotmatically overwrites its oldest entries when it reaches its maximum size
          - requires the size parameter to be specified
      - autoindexID
        - if true
          - automatically creates index on ID field
      - size
        - specifies a maximum size in bytes for a capped collection
      - max
        - specifies the maximum number of documents allowed in the capped collection
  - `show collections`
  - `db.COLLECTION_NAME.drop()`
    - drop a collection from a database
    - it completely removes a collection from the database and does not leave any indexes associated with the dropped collections
    - returns true if successful
    - returns false when there is no existing collection to drop

## CRUD
### best practices
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
  -
### insert
  - `db.COLLECTION_NAME.insert(document)`
    - add/insert new documents into a collection
    - pass an array of documents to insert multiple
  - `db.COLLECTION_NAME.save()`
    - see update
  - `db.COLLECTION_NAME.update()`
    - add new documents through an upsert
  - bulk operations
    1. intialize a bulk opeartion builder for the collection
      - `var bulk = db.collectionName.initializeUnorderedBulkOp()`
    2. specify your bullk actions
      - `bulk.insert(), .update(), etc.`
    3. execute your operation
      - `bulk.execute()`
### update
  - `db.collectionName.update(selection criteria, updated data)`
    - .update({ firstName: 'noah', }, { $set: { firstName: 'kenoah'}})
### delete
  - `db.collectionName.remove(deletion criteria)`
    - used to delete documents from a collection
    - `justOne`
      - if true removes only one document
      -