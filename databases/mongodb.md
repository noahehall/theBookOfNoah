# books
  - wtf is the name of this book?
    - bookOfNoah/books/mongodb

# links
  - [install mongodb ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
  - [atomicity](https://en.wikipedia.org/wiki/Atomicity_(database_systems))
  - [ACID](https://en.wikipedia.org/wiki/ACID)
  - [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem)
  - [DB transactions](https://en.wikipedia.org/wiki/Database_transaction)
  - [isolation](https://en.wikipedia.org/wiki/Isolation_(database_systems))
  - [durability](https://en.wikipedia.org/wiki/Durability_(database_systems))
  -

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
    - each is treated in a coherent and reliable waay independent of other transactions
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
        - etc.
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
  - mongodb lacks joins


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
  - best practices
    - always design schema according to user requirements
    - do join on write operations never on read operations
    - objects you want too use together should be combined into one document
    - optimize your schema for more frequest use cases
    - do complex aggregation in the schema
    - duplicate the data but keep it limited, as disc space is cheaper than compute time

## embedding vs referencing relationships
  - generalities
    - embedded approach
      - query patterns are well known
      - data tends to be accessed in one way (i.e. bulk)
    - referenced
      - adhoc queries
      - slice n dice queries
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