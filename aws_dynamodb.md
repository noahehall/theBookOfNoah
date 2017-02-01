# dynamodb
  - [getting started guide](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/quick-intro.html)
  - [how dynamodb works](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.html)
  - [creating table sand loading sample data](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SampleData.html)
  - [difference between local and web service](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/dynamolocal-vs-dynamoservice.html)
  - [nodejs and dynamodb](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.html)
  - [aws javascript sdk](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
  - [improving data access with secondary indexes](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html)
## architecture
  - tables: collection of data, e.g. People table, or Cars table
    + table requirements:
      1. a name
      2. a primary key: all CRUD requires you to know the ID
    + Items: group of attributes that are distinct from other items, i.e. a row, records, or tuples
      - attributes: fundamental data element, i.e. a column
        + primary key: two kinds:
          - dynamodb uses the partition key's value as input to an internal has function, the output from the hash function dtermines the partition where the item is stored
          1. partition/hash key: composed of only one attribute.
            - no two items can have the same partition key
          2. partition/hash and sort/range key: i.e. composite key
            - all items with the same partition key are stored together and sorted by the sort key
            - two/more items with the same partition key CANNOT have the same sort key
        + secondary indexes: allows you to read data from a table without using the primary key
          - the primary purpose of secondary indexes is to query a table without using the primary key, or by using a different sort key
          - every index belongs to a base table
          - dynamodb maintains the indexes autoamtically
            + any CRUD to the base table automatically reciprocates the CRUD to the index table
          - when you create an index, you must specify which attributed will be copied (projected) to the index table
            + at a minimum the primary key(s) will be projected
          1. global secondary index: an index with a partition and sort key that can be different fro those on the table
            - can have a total of 5 per table
          2. local secondary index: an index that has the same partition key as the table, but a different sort key
            - can have a total of 5 per table
  - streams: captures table data modifications events in the order they occur
    + stream record: the modification; have a lifetime of 24 hours and then are automatically removed from the stream
      - name of the table
      - even timestamp
      - other metadata
      -  
    1. new items: captures an image of the inter item + all it's attributes
    2. updated items: captures the before + after image of any attributes that were modified
    3. deleted items: captures an image of the entire item before it was deleted
## dynamodb API
### control plane
  - let you create and manage tables, indexes, streams, an dother objects that are dependent on tables
  1. CreateTable: creates a new table/one/more secondary indexes, and enable streams for the table
  2. DescribeTable: returns info about a table, e.g. primary key schema, throughput settings, index information, etc
  3. ListTables: returns the naes of all of your tables in a list
  4. UpdateTable: modifies the settings of a table/indexes, creates/remove new indexes on a table, modify stream settings for a table
  5. DeleteTable: removes a table and all of its dependent objects from dynamodb
### data plane
  - CRUD actions on data in a table, and read data from a secondary index
  - Creating data
    1. PutItem: writes a single item to a table
      - primary key attributes required
    2. BatchWriteItem: writes up to 25 items on a table
      - more efficient than doing PutItem multiple times (that would require multiple round trips)
      - can also be used for deleting  multiple items in one/more tables
  - Reading data
    1. GetItem: retrieve a single item from a table;
      - primary key required
    2. BatchGetItem: retrieve up to 100 items from one/more tables
      - more efficient than GetItem multiple times
    3. Query: retrieves all items that have a specific partition key
      - must specify partition key
      - can retrieve entire items/subset of attributes
      - you can apply condition(s) to the sort key values
        + can also be used on indexes that have partition + sort keys
    4. Scan: retrieves all items in the specified table/index
      - can retrieve entire items/subset of their attributes
      - can apply filtering condition
  - Updating Data
    1. UpdateItem: modifies (add/modify/remove) one/more attributes in an item
      - must specify primary key
      - can perform conditional updates
      - can implement an atomic counter
  - Deleting Data
    1. DeleteItem: deletes a single item from a table
      - must specify primary key
    2. BatcWriteItem: deletes up to 25 items from one/more tables
      - more efficient than calling DeleteItem multiple times (would require multiple round trips)
      - can also be used for adding multiple items to one/more tables
### dynamodb streams
  1. ListStreams: returns a list of all your streams for a specific table
  2. DescribeStream: returns info about a stream,, e.g. its ARN (amazon resource name)
  3. GetShardIterator: returns a Shard Iterator, which is a data structure that your app uses to retrieve the records from the stream
  4. GetRecords: retrieves one/more stream records using a given shard iterator
### CRUD
  - in order to read data from a table you must provide a primary key, or a secondary indexes if you've created indexes
### commands
  - list tables: `aws dynamodb list-tables --endpoint-url http://localhost:8000`
