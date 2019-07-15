# terminology
  - noosql database
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
        - built in replicatin for high availability

# data types
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