# todo 
  - update this doc to new format

# DOCS
  - [bookmark](https://dictionary.udemy.com/learn-redis/learn/v4/t/lecture/1307174)
  - [all commands](http://redis.io/commands)
  - [pubsub](https://redis.io/topics/pubsub)

## links 
  - [pub sub pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
  - [thisdavej guide to using redis with nodejs](https://thisdavej.com/guides/redis-node/)

# quickies 
```sh 
  # admin
    sudo systemctl start|restart|poop redis-server
    redis-server /usr/local/etc/redis.conf
    redis-cli # tty 
    redis-cli monitor # see all logs in a new shell
    shutdown # shutdown server
    exit 
    quit
    client list #get list of all connected clients

  # dbs
    flushdb #delete all records from your current db
    flushall #delete all records from all dbs
    

  # CRUD
    set someKey 'some string value'
    hmset objName someKey1 someVal1 someKeyX someValX
    get someKey


```



# commands
## authentication
  1. open redis.conf
  2. uncomment the line beginnning with # requirepass
  3. set the master password

## admin
  - sudo service redis-server start|stop|restart
  - redis-server /usr/local/etc/redis.conf #start
    - Config file    : /etc/redis/6379.conf


## [DATA TYPES](https://redis.io/topics/data-types)
  - [string](https://redis.io/commands/#string)
  - [hashes](https://redis.io/commands/#hash)
  - [lists](https://redis.io/commands/#list): array of ordered and possibly duplicated values
  - [sets](https://redis.io/commands/#set): array of unordered unique values
  - [sorted sets](https://redis.io/commands/#sorted_set): array of unique values sorted by score


```sh
    # string examples 
        # creates/overrites the key name
        set name "noah" 
        # only creates if the key name does not exist, else throws error
        setnx name "noah" 
        # set multiple values
        mset key value key value key value 
        # sets multiple values, fails if any already exist
        msetnx key value key value 


    # hash examples
        # set hash user with key value
        hset user name "noah" 
        # set multiple properties on hash at once
        hmset user name "noah" password "bloop" 


    ### Lists
        # create/update a list accounts with 3 values
        # adds items at beginning if already exists
        lpush accounts twitter facebook instagram 
        
        # see lpush 
        # adds item to the end of the array
        rpush accounts blah blah blah

i
```
setting/creating
### strings
### sets
  - sadd colors red blue #creates/updates colors with items
    - returns number of items added
  - sunionstore coloredaccounts colors accounts #creates a new list (coloredaccounts) from the union of the unique values of 2/more sets
  - sdiffstore nocoloraccounts colors accounts #creates a new list (nocoloredaccounts) from the values in colors that are not in accounts
### sorted sets
  - zadd players 1 noah 2 prince # create players sorted set with two fields and values

## getting
### strings
  - get name #get key
  - strlen name #if name === noah, returns 4
  - keys * #retrieve all keys in db
    + keys regexPattern
    + keys na* #retrieve all keys starting with na
  - exists name #returns 1 if key name exists, 0 else
  - type name #the data type of key name
### hash
  - hget user name #returns a specific properties value
  - hmget user
  - hgetall user #returns all properties of hash user
  - hlen user #returns the number of fields set on user
  - hexists user name #true if key user has field name
  - hkeys user #returns all fields set on key user
  - hvals user #returns all values from key user (without the field names)
### lists
  - llen accounts #get number of items in list
  - lrange accounts 0 -1 #get all items in accounts
  - lrange accounts 0 0 #get first item in accounts
  - lpop accounts #returns (and deletes) the first item in accounts
  - rpop accounts #returns (and deletes) the last item in accounts
### sets
  - scard colors #returns # of items in colors
  - smembers colors #returns all items in colors
  - sismember userids THIS_USER_ID #returns 1 or 0 if user id exists
  - spop colors #returns and removes A RANDOM ITEM from colors
  - sunion colors accounts #returns the combined unique values in 2/more sets
  - sdiff colors accounts #returns the values in list 1 that are not in list 2
    + you can check against multiple sets
  - sinter colors accounts #returns the items that are in 2/more lists
### ordered sets
  - zrange players 0 -1 #get all items in players sorted from least to greatest
  - zrange players 0 -1 withscores #get all items with their scores sorted from least to greatest
  - zrevrange players 0 -1 #get all items from greatest to least
    + you can also append withscores to get the items and scores
  - zscore players noah #get a specific items score
  - zrangebyscore players 0 50 #get the items with scores between 0 and 50 (inclusive)
  - zrangebyscore players 0 50 withscores #get the items and their scores, if the item's score is between 0 and 50 (inclusive)
  - zcard players #get the number of items in players set
  - zcount players 0 50 #get the number of players with scores between 0 to 50 (inclusive)

## updating
### strings
  - append name " hall" #name === "noah hall"
  - incr age #increments by 1
  - incrby|decrby age 5
    + if age was 1, now its 6|-4
    + if age was not set or 0|, now its 5|-5
  - rename name fullname #changes the key name to fullname
    + get fullname works, get name does not
  - renamenx blah bloop #rename blah if key blah exists, else throw error
### hashes
  - hincrby user scores 5 #increases users' field scores by 5
### Lists
  - linsert accounts before instagram facebook #insert item facebook before item instagram
  - linsert accounts after instagram facebook #insert item facebook after item instagram
    + linsert throws error if pivot item does not exist
  - lpushx accounts twitter #adds twitter to acocunts if accounts exists, else error
  - sismember accounts facebook #returns 1/0 if facebook exists in accounts
### sets
  - srem stateTHIS_ID SOME_STATE #remove a state


## deleting
### strings
  - del name #delete key name
  - expire name 10000 #delete name 1000 after epoc (1970)
  - pexpire name 10000 #delete name 1000 after now
  - persist name #remove any expirations set on key name
  - ttl name #how many ms key name has before expiring
    + returns -1 if key name never expires
### hash
  - hdel user name
    + delete field name from hash user
    + you can specify multiple fields to delete
### lists
  - lrem accounts 1 facebook #remove the first item whose value is facebook from accounts
    + if there were two facebooks, 1 would still remain
    + use 0 to remove them all matching items
    + use negative values to remove the last X items
    + returns # of items removed
### sets
  - srem colors red #remote item red from colors

# [pubsub]((https://redis.io/commands/#pubsub))
  - system to subscribe to channels, and publish to channels
  - `subscribe` `unsubscribe` and `publish` implement the pub/sub messaging paradigm
  - architecture 
    - subscribers: clients whom subscribe to channel(s)
      - cmds: `subscribe, `psubscribe, `unsubscribe, `punsubscribe, `ping, `quit
      - when subscribing using glob style, you may receive the same message multiple times
    - publishers: clients whom publish to channel(s)
  - best practices 
    - prefix your channels with stuff 
      - news.blah.hello 
      - testing.blah.hello



```sh 
  SUBSCRIBE channelA channelX
  PUBLISH channelName msg
  UNSUBSCRIBE # from all channels 

  PSUBSCRIBE news.* #subscribe to all channels prefixed with news.
  PUNSUBSCRIBE news.*



```
## commands
### subscribe
  - subscribe to/create a client to the general channel
  - the channel is deleted if no one is subscribed
  - psubscribe blah* #subscribe to all existing and future channels that match the pattern blah* (i.e. begins with blah)



### unsubscribe
  - unsubscribe general #unsubscribe from the general channel
  - unsubscribe #unsubscribe from all channels
  - punsubscribe blah* #unsubscribe from all channels that match the pattern blah*

### publish
  - publish general 'Yo G what up' #publish a message to channel general
    + all subscribers receive the string


### pubsub
  - pubsub channels * #publish and subscribe to all channels



# [transactions](https://redis.io/commands/#transactions)
  - usecases
    + insert multiple values that rely on each other
## commands
  - MULTI #starts a transaction
    + all commands sent to redis must succeed or none of them will persist
    + all commands are queued, until you close the transaction
  - EXEC # executes all queued commands in the transaction
    + if any errors occurred since the transaction started, none of the commands will persist
  - DISCARD # delete all queued commands and close the transaction
