# Links
  - [bookmark](https://dictionary.udemy.com/learn-redis/learn/v4/t/lecture/1307174)
  - [all commands](http://redis.io/commands)
# MAC
  - start redis manually: redis-server /usr/local/etc/redis.conf
  - start redis at startup: brew services start redis
  - connect to redis: redis-cli
  - config file: /usr/local/etc
    + daemonize yes
    + bind to a host ip
    + set port
    + how long to keepalive
    + log file
    + number of databases
      - databases are integers (i.e. 0, 1, etc)
    + snapshotting (save db ever X ms)
    + replication
    + master and slaves
    + security
  - get redis info: brew info redis
  - test if redis is running: redis-cli ping
  - start redis with a specific config file: ./redis-server /path/to/redis.conf
# [ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-redis-on-ubuntu-16-04)
  - **note**: you dont need to specify a password for starting the service
  1. follow steps above to install redis
  2. follow steps above to create redis daemon user
  3. start redis `sudo systemctl start redis`
  4. login `redis-cli -a your-pass`
  5. restart check `sudo chmod 770 /var/lib/redis`
  6. if you so choose, enable redis to start at boot: `sudo systemctl enable redis`
  7. [follow these steps to secure redis](https://www.digitalocean.com/community/tutorials/how-to-secure-your-redis-installation-on-ubuntu-14-04)
## Links
  - [install and config on mac](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298#.hogmtg3ct)
# vocab
  - key: these are the variables, everything is stored by key
    + hash: hset KEY fieldname value
    + string: set KEY value
    + lists: lpush KEY value

# need to research
  - [hyperloglog](https://redis.io/commands/#hyperloglog): used to count big data, uses maybe 100x less memory than regular redis data times
    + is a counter
    + cardinality: 98% correctness on counting big data
    + example: I get 20k new subscribers every hour, how many subscribers do I have that joined in the last 12 months?
    + commands begin with pf
      - pfadd, pfcount, pfmerge
  - [GEO](https://redis.io/commands/#geo)
  - [CLUSTER](https://redis.io/commands/#cluster)
  - [KEYS](https://redis.io/commands/#generic)
  - [SCRIPTING](https://redis.io/commands/#scripting)
  - [SERVER](https://redis.io/commands/#server)

# commands
## authentication
  1. open redis.conf
  2. uncomment the line beginnning with # requirepass
  3. set the master password
## [connecting](https://redis.io/commands/#connection)
  - auth yourPassWord # authenticate to a redis server
    + none of the commands work less your authenticated
  - echo blah #redis will echo blah
  - ping #redis will reply pong
  - select 0|1|etc # select the db to connect to
## admin
  - sudo service redis-server start|stop|restart
  - redis-server /usr/local/etc/redis.conf #start
    - Config file    : /etc/redis/6379.conf

  - redis-cli #connect to client
  - redis-cli monitor #see all logs in real time in a new shell
    + redis-server /usr/local/etc/redis.conf
    + redis-cli -a udacity monitor
  - shutdown # shutdown server
  - flushdb #delete all records from your current db
  - flushall #delete all records from all dbs
  - quit #exit redis
### managing clients
  - client list #get list of all connected clients

## [DATA TYPES](https://redis.io/topics/data-types)
  - [string](https://redis.io/commands/#string)
    + set keys, get value
  - [hashes](https://redis.io/commands/#hash)
    + set key and map fields to values
  - [lists](https://redis.io/commands/#list): array of ordered and possibly duplicated values
    + set key, get values
  - [sets](https://redis.io/commands/#set): array of unordered unique values
    + set key, get values
  - [sorted sets](https://redis.io/commands/#sorted_set): array of unique values sorted by score
    + set key and map fields to scores

## setting/creating
### strings
  - set name "noah" #creates/overrites the key name
  - setnx name "noah" #only creates if the key name does not exist, else throws error
  - mset key value key value key value # set multiple values
  - msetnx key value key value #sets multiple values, fails if any already exist
### hashes
  - hset user name "noah" #set hash user with key value
    + repeat to set additional keys on hash, e.g. hset user password bloop
  - hmset user name "noah" password "bloop" #set multiple properties on hash at once
### Lists
  - lpush accounts twitter facebook instagram # create/update a list accounts with 3 values
    + adds items at beginning if already exists
  - rpush accounts blah blah blah #create/update list
    + adds items at the end if already exists
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

## commands
### subscribe
  - subscribe general #subscribe to/create a client to the general channel
    + the channel is deleted if no one is subscribed
  - psubscribe blah* #subscribe to all exiting and future channels that match the pattern blah* (i.e. begins with blah)
    + accepts regex, very powerful


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
