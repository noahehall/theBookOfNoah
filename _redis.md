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
## Links
  - [install and config on mac](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298#.hogmtg3ct)
# commands
## admin
  - sudo service redis-server start|stop
  - redis-server /usr/local/etc/redis.conf #start
  - redis-cli #connect to client
  - redis-cli monitor #see all logs in real time in a new shell
  - shutdown # shutdown server
  - select 0|1|etc # select the db to connect to
  - flushdb #delete all records from your current db
  - flushall #delete all records from all dbs

## setting
### strings
  - set name "noah" #creates/overrites the key name
  - setnx name "noah" #only creates if the key name does not exist, else throws error
### hashes
  - hset user name "noah" #set hash user with key value
    + repeat to set additional keys on hash, e.g. hset user password bloop
  - hmset user name "noah" password "bloop" #set multiple properties on hash at once

## getting
### strings
  - get name #get key
  - strlen name #if name === noah, returns 4
  - mset key value key value key value # set multiple values
  - msetnx key value key value #sets multiple values, fails if any already exist
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

# DATA TYPES
  - string
    + set keys, get values
  - hashes
    + set hash, get hash field values
    + set key with fields, get values
  - lists
    +
