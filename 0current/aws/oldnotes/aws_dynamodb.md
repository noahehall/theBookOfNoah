# skipped

- [provisioned throughput](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ProvisionedThroughput.html)
- [partitions and data distribution](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.Partitions.html)
- [sql vs nosql](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.html)
- [limits in dynamodb](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html#limits-attributes)
- [signing aws requests](http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html)

# next up

- [creating indexes](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.Indexes.html)
  - keep clicking next
  - querying and scanning an index
  - modifying data in a table
  - deleting data from a table
  - removing a table
- [setting up dynamodb](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)
- [using the cli](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.CLI.html)
- [programming with dynamodb a d aws sdks](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.html)
- [aws javascript sdk](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
- [improving data access with secondary indexes](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html)
- [nodejs and dynmoab](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.html)

# dynamodb

- [getting started guide](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/quick-intro.html)
- [how dynamodb works](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.html)
- [creating table sand loading sample data](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SampleData.html)
- [difference between local and web service](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/dynamolocal-vs-dynamoservice.html)
- [nodejs and dynamodb](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.html)
- [aws javascript sdk](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
- [improving data access with secondary indexes](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html)

## basics

- dynamodb tables in different regions are considered different tables
  - i.e. a single DB cannot span multiple regions
- dynamodb tables can be replicated across multiple availability zones in a single region
  - when you write data to a table and receive an HTTP 200 response, all copies of the data are updated in all availability zones
- read consistency: there are two types of reads available
    1. eventually consistent reads: reading from a table right after writing to it may return some stale data, i.e. it is 'eventually consistent'
    2. strongly consistent reads: when you read from a table right after writing to it, all the data will be up to date - containing all writes that were successful before the read, i.e. 'strongly consistent'
  - dynamodb by default uses eventually consisten reads
  - read operations (e.g. GetITem, Query, Scan) contain a 'ConsistentRead' parameter
    - set ConsistentRead to true to enforce strongly consistent reads

## [acessing the db](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.Accessing.html)

- before your app can access dynamodb
    1. must be authenticated: ensure that the app is allowed to use the db
  - every request must be accompanied by a cryptographic signature which authenticates the request
    2. must be authorized: specify what actions the app is permitted to perform
  - handled by IAM (identity access management)

## architecture

- tables: collection of data, e.g. People table, or Cars table
  - table requirements:
      1. a name
      2. a primary key: all CRUD requires you to know the ID
  - Items: group of attributes that are distinct from other items, i.e. a row, records, or tuples
    - attributes: fundamental data element, i.e. a column
      - primary key: two kinds:
        - dynamodb uses the partition key's value as input to an internal hash function, the output from the hash function determines the partition where the item is stored
          1. partition/hash key: composed of only one attribute.
        - no two items can have the same partition key
          2. partition/hash and sort/range key: i.e. composite key
        - all items with the same partition key are stored together and sorted by the sort key
        - two/more items with the same partition key CANNOT have the same sort key
      - secondary indexes: allows you to read data from a table without using the primary key
        - the primary purpose of secondary indexes is to query a table without using the primary key, or by using a different sort key
        - every index belongs to a base table
        - dynamodb maintains the indexes automatically
          - any CRUD to the base table automatically reciprocates the CRUD to the index table
        - when you create an index, you must specify which attributed will be copied (projected) to the index table
          - at a minimum the primary key(s) will be projected
          1. global secondary index: an index with a partition and sort key that can be different fro those on the table
        - can have a total of 5 per table
        - [docs](http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GlobalSecondaryIndexUpdate.html)
        - [more docs](http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html)
          2. local secondary index: an index that has the same partition key as the table, but a different sort key
        - can have a total of 5 per table
- streams: captures table data modifications events in the order they occur
  - stream record: the modification; have a lifetime of 24 hours and then are automatically removed from the stream
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
    - TableName: name of table
    - KeySchema: attributes that are used for the primary key
    - AttributeDefinitinos: data types for the key schema attributes
    - ProvisionedThroughput: number of reads and writes per second for this table
    -

    ```
      {
          TableName : "Music",
          KeySchema: [       
              {
                  AttributeName: "Artist",
                  KeyType: "HASH", //Partition key
              },
              {
                  AttributeName: "SongTitle",
                  KeyType: "RANGE" //Sort key
              }
          ],
          AttributeDefinitions: [
              {
                  AttributeName: "Artist",
                  AttributeType: "S"
              },
              {
                  AttributeName: "SongTitle",
                  AttributeType: "S"
              }
          ],
          ProvisionedThroughput: {       
              ReadCapacityUnits: 1,
              WriteCapacityUnits: 1
          }
      }
    ```

  2. DescribeTable: returns info about a table, e.g. primary key schema, throughput settings, index information, etc
    - returns a json object contain the table schema

    ```
      {
          TableName : "Music"
      }
    ```

  3. ListTables: returns the names of all of your tables in a list
  4. UpdateTable: modifies the settings of a table/indexes, creates/remove new indexes on a table, modify stream settings for a table
  5. DeleteTable: removes a table and all of its dependent objects from dynamodb

### [data plane](http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Operations.html)

- CRUD actions on data in a table, and read data from a secondary index
- Creating data
    1. PutItem: writes a single item to a table
  - primary key attributes required

      ```
        {
            TableName: "Music",
            Item: {
                "Artist":"No One You Know",
                "SongTitle":"Call Me Today",
                "AlbumTitle":"Somewhat Famous",
                "Year": 2015,
                "Price": 2.14,
                "Genre": "Country",
                "Tags": {
                    "Composers": [
                          "Smith",
                          "Jones",
                          "Davis"
                    ],
                    "LengthInSeconds": 214
                }
            }
        }
      ```

    2. BatchWriteItem: writes up to 25 items on a table
  - more efficient than doing PutItem multiple times (that would require multiple round trips)
  - can also be used for deleting  multiple items in one/more tables
- Reading data
    1. GetItem: retrieve a single item from a table;
  - primary key required

      ```
        {
            TableName: "Music",
            Key: {
                "Artist": "No One You Know",
                "SongTitle": "Call Me Today"
            }
            # add this to get only specific attributes
            "ProjectionExpression": "AlbumTitle, Year, Price"
        }
      ```

    2. BatchGetItem: retrieve up to 100 items from one/more tables
  - more efficient than GetItem multiple times
    3. Query: retrieves all items that have a specific partition key
  - must specify partition key
  - can retrieve entire items/subset of attributes
  - you can apply condition(s) to the sort key values
    - can also be used on indexes that have partition + sort keys

        ```
          {
              TableName: "Music",
              # return a single song by primary key
                KeyConditionExpression: "Artist = :a and SongTitle = :t",
                ExpressionAttributeValues: {
                    ":a": "No One You Know",
                    ":t": "Call Me Today"
                }
              # return all songs by an Artist
                KeyConditionExpression: "Artist = :a",
                ExpressionAttributeValues: {
                    ":a": "No One You Know"
                }
              # return all songs by an artist matching first part of title
                KeyConditionExpression: "Artist = :a and begins_with(SongTitle, :t)",
                ExpressionAttributeValues: {
                    ":a": "No One You Know",
                    ":t": "Call"
                }
              # return all songs by an artist, with a particular word in the title, but only if the price is less than 1
                KeyConditionExpression: "Artist = :a and contains(SongTitle, :t)",
                FilterExpression: "price < :p",
                ExpressionAttributeValues: {
                    ":a": "No One You Know",
                    ":t": "Today",
                    ":p": 1.00
                }
          }
        ```

    4. Scan: retrieves all items in the specified table/index
  - can retrieve entire items/subset of their attributes
  - can apply filtering condition
  - FilterExpression: discard items you do not want to appear in the results
    - is applied after the entire table is scanned, but before th results are returned to you
      - you are still charged the entire scan, so dont use this shit

      ```
      // Return all of the data in the table
        {
            TableName:  "Music",
            # return all of the values for artist and title
            ProjectionExpression: "Artist, Title"
        }
      ```

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

## naming rules

- all names must be encoded using UTF-8
- names are case sensitive
- table names + indexes
    1. betwee 3 and 255 chars
    2. `a-z, A-Z, 0-9, _, -, .`
- attribute names: between 1-255 chars

## data types

- [attribute type values](http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html)
- when you creeate a table/seconday index, you must specify the names and data types of each primary key attribute (partition and sort key)
  - primary key attributes must be defined as type string, number, or binary
  - other than the primary key attributes, you do not need to define any attributes/data types at table creation time
- an item has a max size of 400kb
- scalar types: represent exactly one value
    1. number: `300`
  - can be position, negative, or zero
  - up to 38 digits precision
  - are variable length: leading and trailing zeroes are trimmed
    2. string: `"Noah"`
  - UTF-8 binary encoding
  - length > 0
  - if you define a primary key attribute as a string type attribute
        1. simple primary key: max length of partition key: 2048 bytes
        2. composite primary key: max length of sort key: is 1024 bytes
    3. binary: `dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk`
  - can store compressed text, encrypte data, or images
  - treats each byte of the binary data as unsigned when comparing binary values
  - primary key binary attributes follow same max size limits as strings
  - your app must encode binary values in base64-encoded format before sending to dynamodb
    4. boolean: `true`
  - either true/false
    5. null: `NULL`
  - an attribute with an unknown or undefined state
- document types: complex structures with nested attributes, e.g. a JSDON document
  - up to 32 levels deep
  - attribute values cannot be an empty string or empty set
    1. list: `["hello", "noah", 1]`
  - similar to a JSON array
    2. map: i.e. a json object
  - unordered collection of name-value pairs
- set types: multiple scalar values
  - all of the elements within a set must be of the same type.
  - of course, all elements must be unique
  - order of elements are not preserved
  - examples

      ```
        ["Black", "Green" ,"Red"]
        [42.2, -19, 7.5, 3.14]
        ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]
      ```

    1. string set
    2. number set
    3. binary set

### commands

- list tables: `aws dynamodb list-tables --endpoint-url http://localhost:8000`
