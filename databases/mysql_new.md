# MYSQL in a nutshell russel jt dyer

# UPDATING
  - importing data from file
    - especially importing select fields from a file dynamically


#  background
  - mysql - open source, multithreaded, relational database management system created by michael monty widenius in 95

## MAILING LISTS
  - lists.mysql.com

# INSTALLATION
  - check the online installation docs for the latest info!
  - which version to install ?
    - GA: (generally available) - best choice - latest stable version
    - newer (than GA) releases: not recommended unless you need some new feature that is contained
      - beta version
      - RC (release candidate)
  - What type of distribution ?
    - source distribution: if you have special configuration requirements that must be set during the installation or at compile time
    - binary distribution: esier and recommended
  - general (albeit old) installation steps
    - create a user and group `mysql`
    - `./configure` the download
        - get the options for this script
        - but definitely set these options
          - `--prefix`
          - `--with-charset`
    - run `make`
    - make sure the `mysql:mysql` user:group owns the `--prefix` path
    - start mysql!
      - you may also choose to start mysql automatically at boot time

## POST INSTALLATION
  - make any required changes tot he config file
  - change the password for the root user
    - newer versions of mysql does not permit changes to root users password
      - authentication versions does not support it
  - add nonadministrative users
  -

# IMPORTANT FILES
  - `~/.my.cnf` per-user mysql config file
    - e.g. to specify ssl-ca, ssl-key and ssl-cert pem files
  - `db.opt` contains the settings for a database
    - better to use the `alter database` statement vs editing this file directly
    - OPTIONS
      - default-character-set=latin1
      - default-collation=latin

# IMPORTANT LOCATIONS
# STORAGE ENGINES
  - storage engine: manages queries and itnerfaces betweena users sql statements and the databases backend storage, is the critical software any database management system


# MYSQL SERVER (i.e. mysqld daemon)
  - mysqld daemon: listenes for requests on a particular network port by which clients submit queries

# MYSQL CLIENT (i.e. mysql)
  - text-based interface:
  - user can login and execute queries from cmd line/within an interface environment
  - accept queries from text files containing queries, and thereby execute them on behalf of the user or other software
  - can be used to import the data from a dump file into mysql
  - OPTIONS
    - `-e CMD` execute CMD then immediately execute

# WRAPPER SCRIPTS
## mysqld_safe
  - the most common way to start mysqld, becuase the script can restart the daemon if it crashes
    - helps ensure minimal downtime for database services

### CMDS - shell
```sh
  # make sure the daemon is restarted in the event that it crashes
  mysqld_safe &


```


## mysqld_multi
  - used to start multiple sessions of mysqld_safe, and thereby multiple mysqld instances
    - for handling rewquests on different ports
    - make it easier to serve different sets of databases or to test different versions of mysql

# UTILITIES
## MYSQLACCESS
  - used for creating user accounts and setting their privileges
  - notes
    - on ubuntu 19.04 `sudo apt install mariadb-client-10.3`
      - check the latest version

## MYSQLADMIN
  - can be used to manage teh mysql server itself from the cmd line
    - checking a servers status
    - information about database and tables

## MYSQLDUMP
  - popular for exporting data and table structures to a plain text file known as a dump file
    - used for backing up data or for manually moving it between servers


# SHELL - basics
  - best practices
    - reserved words should be UPPERCASE
      - everything else lowercase
    -
```sh
  # login locally  - prompting for password
  # initially root user password is unset
  mysql -u USER -p

  # login with password without secondary prompt
  # no space between -p and SOMEPASSWORD
  mysql -u user -pSOMEPASSWORD

  # login remotely
  mysql -h HOST -u USER -p

```


# MYSQL CMDS
  - SQL statements can span multiple lines, but they must end with a `;` or `\G`
  - when enclosed in paranetheses, multiple values can usually be specified separated by commas
  - strings and dates must be specified within single//double quotes unlewss a dte is given as a numeric and is part of a date calculation
  - elements of a statements syntax are case insensitive
    - on unix type systems, database and table names as well as file names are case sensitive
## BASICS
```sql
  -- # get help for a cmd
  \h CMD
  \h 'CREATE USER'
```


## ANALYSIS
```sql
  -- see the definition of an entity
  SHOW tables|databases|TABLENAME|DBNAME|etc;

  -- see something from another
```


## DATABASES
```sql
  -- create
  create database bookstore

  -- select which database is the default
  USE test

```

## TABLES
  - reference table: is referenced by another table via a primary key
    - e.g. books table will reference authors table


### COLUMN TYPES
 - enum(key1, keyX)
 - int
 - text
 - varchar(length)
 - text
   - variable data type
   - can hold very large amounts of data, up to 64 kilobytes
   -


### COLUMN OPTIONS
  - auto_increment
  - primary key
  - unique

```sql
  -- CREATE TABLE
  create table NAME (
    add column COLDEF1,
    add column COLDEF2
  );

  -- MODIFY TABLE
  alter table TABLENAME
    change column COLUMNAME NEWCOLDEF,
    add column COLDEF
    ;

  -- INSTPECTING TABLES
  -- list column definitions of a table
  describe DBNAME.TABLENAME;
  describe TABLENAME; -- to use current db
```

# CRUD
  - duplicates: occur only when columns defined as unique contain the same value
## CREATE
```sql
  insert into TABLENAME (
    colname1, colnameX
  ) VALUES (
    colval1, crical value
  sum(COLNAME1olvalX)
  )
```

## READ
```sql
  -- basic
  -- everything
  select * from DBNAME.TABLENAME;
  -- specific columns
  select colname1, colname2 from DBNAME.TABLENAME;
  -- join two columns into one
  select concat(COLNAME1, ' ', COLNAME2) as DISPLAYNAME;


  -- reducing data set
  -- filters
  select...where COLNAME = 'SOME VALUE';
  -- limits
  -- first 20
  select...limit 20;
  -- 11-15
  select...limit 10,5;

  -- get total rows
  select count(*) from...

  -- joining tables
  select COLDEFS..
    from TABLE1
    join TABLE2
    using (COLNAME)
    ...
```

## UPDATE
```sql
  -- update every column
  update TABLENAME
    set COLNAME = 'value';
  -- single column
  update TABLENAME
    set COLNAME = 'value'
    where COLNAME = 'value';


```

## UPSERT
```sql
  replace TABLENAME (
    COLNAME1, COLNAMEX
  ) value (
    COLVALUE1, COLVALUEX
  )
```
## DELETE
```sql
  delete from TABLENAME where...
  delete from TABLENAME where COLNAME1 = (subquery)
```


# functions
```sql
  -- retrieve the identification number assigned to the last entered row
  select last_insert_id();

```

## MATH
```sql
  -- sum a numerical value
  sum(COLNAME1) as 'DISPLAY NAME'
```

## TIME
```sql
  -- 1
  dayofmonth(COLNAME)
  -- 2005
  year(colname)
  -- March
  monthname(colname)

  -- same as above, more efficient
  -- March 1, 2018
  date_format(colname, "%M %d, %Y")
```

# VARIABLES
  - max_used_connections - number of sessions open at any given time
  -
```sql
  set @SOMEVARIABLE = 'some value';
```

# OPERATORS
```sql
  -- % is a wildcard
  where COLNAME like '%containsThis%'
```

# IMPORT/EXPORT/MIGRATION
  - generally
    - eah record should be on a separate line
    - each field (column headers and values) should have a common field separator
  - importing
    - you have to alias each column in `text fields(...)`
    - even if you later ignore `SET...`
```sql
  # import from file
  load data infile 'path/to/file'
    replace into table TABLENAME
    fields temrinated by '|' -- could be ',' e,g, CSV
    lines terminated by '\r\n' -- new line
    text_fields (COLALIAS1, COLALIASX)
    set
      TABLEFIELDNAME = COLALIAS1.
      TABLEFIELDNAME = COLALIASX
    ignore COLALIAS2, colheaderN; -- dont import these columns
```

# SECURITY: USER STATEMENTS AND FUNCTIONS
  - user access and privileges
    - scopes: see `grant`
      - global: aplly to all databases ont he server
      - database specific:
      - table specific
      - column specific
      - functions and procedures
      - number of connections
      - max resources per hour
    - resources: can be controlled in order to prevent monopolization of resources and in the direct denial of service to the other users
  - grant tables: primary information regarding user access and privileges
    - relevant default tables
      - user: global privileges
      - db: database specific privileges
      - table_priv: table specific privileges
      - columns_priv: column specific privileges
  -

## USER ADMINISTRATION
  - NOTES
    - you can no longer use `grant` to create users, instead user the `create user` statement
    - generally when `joining` two tables make sure the fields used in the join have the same data type
## STATEMENTS
  - `create user`
    - users can have more than one account
      - i.e. different user & host combinations
    - must be in quotes
      - password
      - username
      - hostname / ip address
      - for accessing mysql  loocally use the host of `localhost`
      - `%` permits the user to connect from any host
    - multiple users can be created, separated by commas

  - `grant` assigning privileges for an existing user account
    - REQUIRE
      - ssl: require the user to login via ssl
      - -x509
        - require a validte CA certific
        - mysql client must be started with -ssl-ca --ssl-key ssl-cert
      - cipher: force a specific cipher method
      - issuer: require the user to supply a valid x.509 certificate issued by the given CA
      - subject: require that a x.509 certificated used by a user account have a given subject
    - WITH OPTIONS - default value for all is 0 (unlimited)
      - `max_queries_per_hour X`
        - max number of queriies a user may execute per hour
      - `max_updates_per_hour X`
        - max update statements
      - `max_connections_per_hour X`
      - `max_user_connections X`


  - `revoke` remove privileges

  - `rename user`

  - `set password` change the password  for an existing user

  - `show grants` displays the grant statement for a given user

  - `reset` reset certain server settings and log files
    - requires reload privilege
    - OPTIONS
      - master - reset a master used for replication
        - must be executed from the master
        - will start a new binary log file as well as delete the binary log filenames from the index file and delete the contents of the binary log index file
      - slave -reset a slaaved used for replication
        - must be executed from the slave
        - will start a new relay log file and delete any existing ones as well as delete its notiation of its position in the masters binary log file

  - `drop user` delete an existing user account
    - see `create user`
    - requires the `create user` or `delete user` privilege for the mysql database
    - it will take effect when any sessions opened by the user terminate
      - use the `kill` statement to terminate an open client session for a user that has been dropped

  - `flush` clear and reload cache so any changes take effect immediately (without restart the daemon)
    - requires `reload` privileges
    - cannot be used in stored functions or triggers
    - OPTIONS
      - `local` prevent this statement from writing tot he binary log file
      - des_key_file - reloads the des encryption file, which is given the --des-key-file option at staartup or int he optinos file
      - hosts - clear the hosts cache, which is used to minmize host/ip address lookups
      - logs - used to close all of the log files aand reopen them
      - if the server has binary logging enabled it will change the binary log file to the next numeric sequence
      - master - deprecated -
        - use `reset master`
      - privileges - reloads the grant tables for user privileges
      - query cache - instructs the server to defragment the query cache to improve performance
        - use `reset query cache` to remove queries
      - slave - deprecated - use `reset slave` instead
      - status - resets the session values and counters for key caches to 0
      - table NAME, NAMEX - forces the given tables to be closed
      - TABLES - causes all tables to be closed
      - tables with read lock - closed all tables and locks them with a global read lock
        - allows users to view the data but not ot update it or insert records
        - the lock will remain in place until `unlock tables` statement is executed
        - this is not logged
      - user_resources - resets all user resource values that are calculated on an hourly basis
        - specifically the following columns in `mysql.user`
          - max_questions
          - max_updates
          - max_connections
    - `show privileges` provides a list of privileges availble, along with the context of each one
      - e.g. server administration and a description

## PRIVILEGES (for `grant` and `revoke`)
  - all - all basic privileges except `grant`
  - alter - alter tables
  - alter routine - alter/drop stored routines
    - including alter function|procedure
    - including drop function|procedure
  - create - create table
  - create routine - create stored routinges
    - including create function|precedure
  - create temporary tables
  - create user
    - including rename user, revoke all privileges, and drop user
  - create view- create temporary tables
  - delete
  - drop
    - including truncate
  - event create events for the event schedule
    - including alter event and drop event
  - execute - the execution of stored procedures
  - file - use of   select...into outfile and load data info
    - i.e.e to import/export files
  - with grant option - grant privileges to users
  - index - create index and drop index
  - insert
  - lock tables - lock statement for tables for which the user has `select` privileges
  - process - use of the `show full processlist` statements
  - references - not used?
  -  reload - flush and reset statements
  - repliation client - query master and slave servers for status information
  - replication slaave - required for replication slave servers
    - allows binary log events to be read from the master server
  - select
  - show databases - `show databases` for all databases
    - be careful with this one!
  - show view - show create view
  - shutdown - shutdown option with the `mysqladmin` utility
  - super - change master, kill, purge master logs and set global statements and the debug option with the cmd line utility `mysqladmin`
  - trigger - create and drop triggers
  - update
  - usage - create a user without privileges or to modify resource limits on an existing user without affecting the existing privileges

## FUNCTIONS
  - many use like this `select md5('example function call')`
  - AES_DECRIPT(string, pw)
    - decrypts text that was encrypted using the advanced encryption standard (AES) algorithm with a 128 bit key length, reversing the AES_ENCRYPT() function
  - AES_ENCRYPT(string, pw)
    - encrypts a given string using the AES elgorithm with 128 bit key length

  - `DES_DECYPT(string, [key])` decryptss text that was encrypted using the triple data encryption standard algorithm with a 128 bit key length
  - `DES_ENCRYPT(string, [key])` returns encrypted text using the triple DES algorithm  with a 128 bit key length
    - returns null if error occurs

  - `select current_user()` returns the username and the host that were give  by the user for the current mysql connection

  - `decode(string, pw)` decrypts a given string that was encryted with a given password
    - see `encode()`
  - encode(string, pw) encrypts a given string in binary format and locks it with pw
    - DO NOT use this for the pw column in the user table
      - see `password()`
  - `encrypt(string[, seed])`

  - `md5(string)` uses aa message-digest algorithm 5 128 bit checksum to return a 320character hash value of string from the request for comments (RC) 1321 standard

  - `password(string)` encrypts a password
    - the result cannot be decrypted
      - used for encrypting data in the pw column of the user table

  - `session_users()` returns the username and the hostname for the current mysql connection
    - synonmyous with `system_user()` and `user()`
    - `system_user()`

  - `sha(string)` returns the secure hash algorithm 160-bit checksum for the given string
    - the result is a string composed of 40 hexadecimal digits
  - `sha1(string)` see above

```sql
  -- default tables for managing users and privileges
  show tables from mysql;

  -- USERS
  -- see all users
  select user, host from mysql.user;

  -- create user
  create user 'someuser' identified by 'somepssword';

  -- GRANT
  -- user can only read
  grant select on *.* to 'student'@'localhost' identified by 'somepasswprd';
  -- all basic privileges
  grant all privileges on to...
  -- allow the user the grant permission
  grant ... with grant options;
  -- basic crud on specific db and table
  grant select, insert, update on DATABASENAME.TABLENAME;
  -- users running queries through a web server
  grant select on ... to 'webuser'@'%'
    with masx_queries_per_hour 1000
    max_connections_per_hour 100;
  -- change a users resources without changing the privileges
  grant usage on ...
    with ...

  -- REVOKE
  -- all = all privileges
  -- *.* = all tables in all databases
  revoke all on *.* from 'USERNAME'@'HOSTNAME or IP';

  -- DROP
  drop user 'USERNAME'@'HOSTNAME or IP'

  -- PASSWORDS
  SET PASSWORD FOR <user> = '<plaintext_password>';
  set password = password('undecryptable pw')

  -- see a users grants
  show grants for 'someuser'@'somehost'

  -- see all available privileges + their context
  show privileges;

  -- FLUSH
  flush privileges
```

# DATABASE / TABLE SCHEMA
## ANALYSIS
### STATEMENTS
  - `alter database`
  - `alter schema` synonmyous with `alter database`

  - `alter server` used with the federated storage engine to change the connectino parameters of a server created with `create server`
    - requirs `super` privileges

  - `alter table` change an existing tables structure and other properties
    - ACTIONS
      - add a new
        - column, index, foreign key constraint, table partition
      - change an existing
        - column, table partition
      - delete a
        - column, index
      - set other factors concerning
        - column, index
      - set table-wide options
    - FLAGS
      - ignore - applies to all clauses and instructs mysql to ignore any error messages regarding duplicate rows that may occur as aa result of a column change 
### FUNCTIONS
  - most use `select function()`
  - `databse()` returns the current database name


```sql
  alter database
    character set SOMETHING
    collate SOMETHING

  -- change the value of an existing server
  alter server SERVERNAME
    OPTIONS (user 'USERNAME', password 'PASSWORD', port 'PORT#')
```