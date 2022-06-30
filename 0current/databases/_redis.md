# redis

- Redis is an open-source, networked, in-memory, key-value data store with optional durability. It is written in ANSI C. The development of Redis is sponsored by Redis Labs today; before that, it was sponsored by Pivotal and VMware. According to the monthly ranking by DB-Engines.com, Redis is the most popular key-value store. The name Redis means REmote DIctionary Server.

## links

- [AAA redis insight GUI](https://github.com/RedisInsight/RedisInsight)
- [AAA redis dockerhub](https://hub.docker.com/_/redis)
- good reads
- needs categorization
  - [all commands](http://redis.io/commands)
  - [pub sub pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
  - [thisdavej guide to using redis with nodejs](https://thisdavej.com/guides/redis-node/)
  - [redis data structure use cases](https://scalegrid.io/blog/top-redis-use-cases-by-core-data-structure-types/)
  - [disque message queue, really good readup tho](https://github.com/antirez/disque)
  - [redis for realtime metering applications](https://www.infoworld.com/article/3230455/how-to-use-redis-for-real-time-metering-applications.html)
  - [introduction to sets](https://scalegrid.io/blog/introduction-to-redis-data-structures-sets/)
  - [use redis for content filtering](https://dzone.com/articles/how-to-use-redis-for-content-filtering)
  - [websocket pubsub](https://yeti.co/blog/establishing-a-websocket-pubsub-server-with-redis-and-asyncio-for-the-light-sensor/)
  - [redis config overview](https://redis.io/docs/manual/config/)
- docs
  - [key eviction](https://redis.io/docs/manual/eviction/)
  - [persistence](https://redis.io/docs/manual/persistence/)
  - [auth](https://redis.io/commands/auth/)
  - [command: acl cat](https://redis.io/commands/acl-cat/)
  - [DATA TYPES](https://redis.io/topics/data-types)
  - [hashes](https://redis.io/commands/#hash)
  - [keys](https://redis.io/commands/keys/)
  - [lists](https://redis.io/commands/#list)
  - [pubsub](https://redis.io/commands/pubsub/)
  - [pubsub](https://redis.io/topics/pubsub)
  - [redis indexes](https://redis.io/topics/indexes)
  - [sets](https://redis.io/commands/#set)
  - [sorted sets](https://redis.io/commands/#sorted_set)
  - [string](https://redis.io/commands/#string)
  - [transactions](https://redis.io/commands/?group=transactions)

## put these somewhere

```sh
# set the current db to 0, usually they go from 0-16
select 0

# get the number of dbs
CONFIG GET databases

# list the databases that have data
INFO keyspace

```

## basics

### terminology

- messaging systems
  - permits communication between processes using different queues
  - one process sends a message to a queue, and another process(s) can listen for messages in a given queue

### use cases

- redis can act like a database, cache, or message broker
- data is stored in RAM, thus i/o is lightspeed relative to disk

## admin

- enable auth for default users
  1. open redis.conf
  2. uncomment the line beginnning with # requirepass
  3. set the master password
- enable ACLs
  - set ACL /somepath/ in redis.conf
- basic admin cmds
  - sudo service redis-server start|stop|restart
  - redis-server /usr/local/etc/redis.conf #start
    - Config file : /etc/redis/6379.conf

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

# authentication
# get active ACLs
ACL LIST
# get ACL command categories
ACL CAT
# get the commands in a specific category
ACL CAT dangerous
# authenticate
AUTH <username> <password> # specific user
AUTH <password> # default user: you should disable this via ACL
```

## data types

- strings
  - can contain any data type, are binary safe, max length of 512mb
  - session cache
    - caching html fragments/pages
    - store online store cart info so buyers dont lose their info on login/out/interruptions/etc
  - queues
    - any app dealing with traffic congestion, messaging, data gathering, job management, routing, etc
    - manage que size by rate of arrival and departure for resource distributionn
  - usage and mtered billing
    - realtime metering for consumption-based pricing models
      - e.g. platforms that bill based on usage to meter their customers activity, e.g. per textmsg/minute
- lists
  - contain strings that are sorted by insertion order
  - queues
    - add priority items to head, other items to tail
  - event data
    - when knowing the order of events are important,
      - e.g. social media sites timelines/feeds
    - customize ordered lists with most important at top
  - ranked data
    - e.g. leaderboards, thumbs up/down tracking, etc
- regular sets
  - support intersection and unions
    - do not allow duplicate keys/members
    - regardless of the number of elements stored in a set, will take the same time to add/rmeove items
  - whenever you want to perform an audit and see relationships between various variables
  - scheduling jobs (e.g. cron|other background tasks)
  - analyze ecommerce sales and arbitrary relationship management
    - unions, intersections, subtractions (venn diagrams) to understand custom behavior
    - e.g. patterns between geneders, products, hours of purchases (intersection)
  - ip address tracking
    - analyze ip addresses that visited a specific site/post/etc (ignore the duplicates automatically with sets)
  - inappropriate content filtering
    - basically add bad words to a set, and quickly determine if some TEXT conteains any words in the set
- sorted sets
  - collection of weighted (i.e. score) strings
  - Q&A platforms
    - rank the highested voted answers for each proposed question
  - gaming app scoreboards
    - gaming apps high score lists
      - scores can be repeataed, but the strings which contain the user details cannot
  - task scheduling service
    - rank the priority of tasks in a queue
  - geo hashing
    - index locations based on latitude and longtitude
      - turns multi dimensional data into linear data
- hashes
  - maps string fields to string values
    - containers of unique fields to values
  - user profiles
  - user posts
    - map user photos/posts back to asingle user
  - multi-tenant metrics
    - record and store product/sales metrics in a that that guarnatees solid separation between each tenant

```sh
# string examples
    # CREATE
        # creates/overrites the key name
        set keyName "value"
        # only creates if the key name does not exist, else throws error
        setnx keyName "value"
        # set multiple values
        mset keyName1 value1 keyName2 value2
        # sets multiple values, fails if any already exist
        msetnx keyName1 value keyName2 value
    # READ
        # get the value associated with keyName
        get keyName
        #gets length of value associated with keyName
        strlen keyName
        # retrieve all keyNames in db
        keys *
        # retrieve all keys starting with na
        keys na*
        keys regexPattern
        # returns 1|0 if keyName exists
        exists keyName
        # the data type of keyName
        type keyName
    # UPDATE
        # appends value to current value of keyName
        append keyName " value"
        # increments by 1
        incr keyName
        # if keyName was 1, now its 6|-4
        # if keyName was not set or 0|, now its 5|-5
        incrby|decrby keyName 5
        # uhh wonder what this does
        rename keyName newKeyName
        # throws error if keyName doesnt exist, else does what you think
        renamenx keyName newKeyName
    # DELETE
        # deletes keyName
        del keyName
        # delete keyName 1000 (seconds?) after epoc (1970)
        # double check
        expire keyName 10000
        # deletes keyName 1000 (seconds?) after now
        pexpire keyName 10000
        # remove any expirations set on keyName
        persist keyName
        # how many ms keyName has before expiring
        #returns -1 if key name never expires
        ttl keyName


# hash examples
    # CREATE
        # set hash user with key value
        hset hashName keyName "value"
        # set multiple properties on hash at once
        hmset hashName keyName1 "value" keyName2 " value"
    # READ
        # get value at hashName.keyName
        hget hashName keyName
        # double check this
        # but think it should get multiple key values
        hmget hashName keyName1 keyName2
        # returns all properties of hashName
        hgetall hashName
        # returns the number of fields set on hashName
        hlen user
        # true if keyName exists in hashName
        hexists hashName keyName
        # returns all keyNames set on hashName
        hkeys hashName
        # returns all values from hashName (without the keyNames)
        hvals hashName
    # UPDATE
        # increases hashName.keyName by 5
        hincrby hashName keyName 5
    # DELETE
        # delete keyName from hashName
        # you can specify multiple fields to delete
        hdel hashName fieldName


# Lists
    # CREATE
        # create/update a list accounts with 3 values
        # adds items at beginning if already exists
        lpush listName twitter facebook instagram

        # see lpush
        # adds item to the end of the array
        rpush listName blah blah blah
    # READ
        # get number of items in list
        llen listName
        # get all items in listName (starting to end because of -1)
        lrange listName 0 -1
        # get first item in listName (start stop)
        lrange listName 0 0
        # returns (and deletes) the first item in listName
        lpop listName
        # returns (and deletes) the last item in listName
        rpop listName
    # UPDATE
        # insert newValue before curValue in listName
        # throws error in curValue doesnt exist
        linsert listName before curValue newValue
        # insert newValue after curValue in listName
        # throws error in curValue doesnt exist
        linsert listName after curValue newValue
        # throws error if listName doesnt exist, else does what you think it does
        lpushx listName value
    # DELETE
        # remove the first occurrence of value from listName
        lrem listName 1 value
        # remove all occurences of value from listName
        lrem listName 0 value
        # remove the last 3 occurences of value
        # double check this
        lrem listName -3 value




# regular sets
    # CREATE
        # add items to the colors set
        # returns number of items added
        # creates/updates colors with items
        sadd colors red blue

        # creates a new list (coloredaccounts)
        # from the union of the unique values of 2/more sets
        sunionstore coloredaccounts colors accounts

        # creates a new list (nocoloredaccounts)
        # from the values in colors that are not in accounts
        sdiffstore nocoloraccounts colors accounts

    # READ
        # returns length of setName
        scard setName
        # returns all items in setName
        smembers setName
        # returns 1|0 if value exists in setName
        sismember setName value
        # returns and removes A RANDOM ITEM from setName
        spop setName
        # returns the combined unique values in 2/more sets
        sunion setName1 setName2
        # returns the values in list 1 that are not in list 2
        sdiff setName1 setName2
        # returns the items that are in 2/more lists
        # you can check against multiple sets
        sinter setName1 setName2
    # DELETE
        # remove value from setName
        srem setName value


# sorted sets
    # CREATE
        # create players sorted set with two ranked values
        zadd setName 1 greater 2 smaller

    # READ
        # get all values in setName sorted from least to greatest
        zrange setName 0 -1
        # get all values with their scores sorted from least to greatest
        zrange setName 0 -1 withscores
        # get all values from greatest to least
        zrevrange setName 0 -1
        # see above, but return with scores
        zrevrange setName 0 -1 withscores
        # get a specific values score
        zscore setName value
        # get the values with scores between 0 and 50 (inclusive)
        zrangebyscore setName 0 50
        # see above
        # double check what the withscores does for this cmd
        zrangebyscore setName 0 50 withscores
        # get the number of values in setName
        zcard setName
        # get the number of values with scores between 0 to 50 (inclusive)
        zcount setName 0 50

```

## commands

### pubsub

- system to subscribe to channels, and publish to channels
- architecture
  - subscribers: clients whom subscribe to channel(s)
    - when subscribing using glob style, you may receive the same message multiple times
    - channels are auto deleted if no one is ubscribed
- publishers: clients whom publish to channel(s)

- best practices
  - prefix your channels with stuff
    - news.blah.hello
    - testing.blah.hello

```sh
# subscribing to stuff
    # listen to/create 2 channels
        subscribe channelA channelX
    # subscribe to all existing and future channels that begin with blah
        psubscribe blah*
    # leave all all channels
        UNSUBSCRIBE
    # leave channelName
        unsubscribe channelName
    # leave all channels starting with blah.
        PUNSUBSCRIBE blah.*

# posting msgs
    # post a msg to chnnelName
        PUBLISH channelName msg

# other
    # publish and subscribe to all channels
        pubsub




```

### transactions

- usecases
  - insert multiple values that rely on each other
- MULTI #starts a transaction
  - all commands sent to redis must succeed or none of them will persist
  - all commands are queued, until you close the transaction
- EXEC # executes all queued commands in the transaction
  - if any errors occurred since the transaction started, none of the commands will persist
- DISCARD # delete all queued commands and close the transaction
