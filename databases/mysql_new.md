# MYSQL in a nutshell russel jt dyer
## TLDR
  - searching
    - # header keyword
      - # table option
      - # table engine
      - etc

..

# needs categorization
  - best practices
    - reserved words should be UPPERCASE
      - everything else lowercase
    -
  - SQL statements can span multiple lines, but they must end with a `;` or `\G`
  - when enclosed in paranetheses, multiple values can usually be specified separated by commas
  - strings and dates must be specified within single//double quotes unlewss a dte is given as a numeric and is part of a date calculation
  - elements of a statements syntax are case insensitive
    - on unix type systems, database and table names as well as file names are case sensitive
  - `mysql cluster` are divided into different node groups in order to let certain nodes manage the data nodes
    - `nodegroup` places a partition in the given node group`
    - `tablespace` specifices the tablespace to be used with a partition
  - `alter database`
  - `alter schema` synonmyous with `alter database`

  - `alter table` change an existing tables structure and other properties
  - NOTES
    - when adding a column
      - by default it will be appended to the end of the table
      - requires alter, create and insert privileges
      - while table is being altered users can `read` but usually not modify/add
      - any insert statements using `delayed` that are not completed will be canceled
    - when changing a column
      - if a columns data type is changed, mysql attempts to adjust the data to suit the new data type
      - if a column width is shortened, mysql truncates the data and generates warning messages for the affected rows
      - indexes related to changed columns will be adjusted automatically for the newe lengths
      - the `modify` clause cannot be used to change a columns name
    - when dropping a column
      - a table must have at least one column, else error is thrown
    - when dropping an index
        - if the primary key is based on a column with auto_increment type
          - you need to change the column definition in the same statement so it is no longer auto_increment
    - partitioning
      - the execution of the partition clauses for alter table is very slow
        - instead
          - lock the table to be partitioned for read-only activities,
          - make a copy
          - partition the copy
          - switch to the new table
          - keep the old table as a backup
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
      - will keep the first unique row found adn drop any duplicate rows
      - otherwise the statement will be terminated and changes will roll back
  - KEYWORDS
    - `first` prepend new column
    - `after` insert new column after some other column

# MYSQLSHOW
  - utility to view entities from the cmd line ?
```sql
  -- show the indexes of the database.table
  mysqlshow
    --user=USERNAME
    --password
    --keys
    DATABASENAME
    TABLENAME
```
# MYSQL SERVER (i.e. mysqld daemon) needs categorization
  - mysqld daemon: listenes for requests on a particular network port by which clients submit queries

## MYSQLD OPTIONS
  - `--updatable_views_with_limit` updates that contain a `limit` clause can update views only if the views contain all of hte columns that are part of the primary keys of the underlying tables
    - 1 = only a warning is returned and updates are not restricted
      - this is the default


# MYSQL CLIENT (i.e. mysql) needs categorization
  - text-based interface:
  - user can login and execute queries from cmd line/within an interface environment
  - accept queries from text files containing queries, and thereby execute them on behalf of the user or other software
  - can be used to import the data from a dump file into mysql
  - OPTIONS
    - `-e CMD` execute CMD then immediately execute

# WRAPPER SCRIPTS needs categorization
## mysqld_safe needs categorization
  - the most common way to start mysqld, becuase the script can restart the daemon if it crashes
    - helps ensure minimal downtime for database services


# UPDATING
  - importing data from file
    - especially importing select fields from a file dynamically


# background needs categorization
  - mysql - open source, multithreaded, relational database management system created by michael monty widenius in 95


# MAILING LISTS
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


# FLAGS
  - `\G` show results vertically; easier to read for small results/screens


# NOTES important


# FILES important
  - `~/.my.cnf` per-user mysql config file
    - e.g. to specify ssl-ca, ssl-key and ssl-cert pem files
  - `db.opt` contains the settings for a database
    - better to use the `alter database` statement vs editing this file directly
    - OPTIONS
      - default-character-set=latin1
      - default-collation=latin
  - tablename.par
    - this table is part of a partition
  - tablename.frm
  - tablename.myd
  - tablename.myi - the index file


# LOCATIONS important
  - mysql servers data directory
    - each database files are located within a subdirectory


# KEYWORDS important
  - `if not exist` suppress an error message when a create statement fails if the entity already exists
    - `table`, `database`, `view`
  - `comment` - attach notes to a table, partition, or a specific column
    - text must be single-quoted
  - `if exists` suppresses an error message if the entity does not already exist
    - `table`, `database`, `view`, `server`


# SQL important
```sql
  -- # get help for a cmd
  \h CMD
  \h 'CREATE USER'

  -- show the results vertically
  select... \G;

  -- inspect the mechanics of a select statement
  explain select...

  -- create
  create database bookstore

  -- select which database is the default
  USE test

  -- see the definition of an entity
  SHOW tables|databases;

```


## SHELL CMDS important
```sh
  # make sure the daemon is restarted in the event that it crashes
  mysqld_safe &

  # login locally  - prompting for password
  # initially root user password is unset
  mysql -u USER -p

  # login with password without secondary prompt
  # no space between -p and SOMEPASSWORD
  mysql -u user -pSOMEPASSWORD

  # login remotely
  mysql -h HOST -u USER -p
```


# PERFORMANCE
  - increasing the size of the `myisam_sort_buffer_size` will sometimes make table alterations go faster
  - limiting the number of characters used in an index makes for a smaller index which will be faster and probably just as accurate as using the complete column widths
    - especially for wide columns
    - speeds up indexing and reduces the size of the files on the filesystem
  - when running a large number of row inserts it can be useful to disable indexing until afterward
    - via the `alter table disable keys` clause
    - make sure to enable it when you're done
  - permanently reordering rows in a table can improve performance for tables that rarely change
  - `avg_row_length`
    - for large tables set this value for better table optimization
    - check the current row length via the `show table status` clause
  - to give the storage engine a hint of the size of the indx key blocks use the `key_block_size` option
    - set it to 0 to use the default value
  - `pack_keys` for small myisam tables primarily used for reading data and rarely updating
    - 1 - make reads faster but updates slower
    - 0 - disable
    - default - pack char and varchar data type columns only
  - `linear` change the algorithm to a linear powers of two algorithm
    - may precede `hash()` or `key()`
    - for extremely large tables of data, the linear hash has higher performance results in processing data
      - however it does not evely spread ata among partitions


# UTILITIES
## mysqld_multi
  - used to start multiple sessions of mysqld_safe, and thereby multiple mysqld instances
    - for handling rewquests on different ports
    - make it easier to serve different sets of databases or to test different versions of mysql


## MYISAMPACK


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


## TABLES
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
  - `max_used_connections` - number of sessions open at any given time
  - `sql_quote_show_create`
    - quote the entity name with backquotes in a `show create`
    - 0 = dont quote, useful for copy and pasting
    - 1 = keep the quotes (default)
  - `--skip-show-database`
    - remove the `show database` privilege requirement for viewing all databases
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
  -- import from file
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

# ISSUES important
## TABLES issues
  - the `convert to` clause can cause issues
    - make sure to backup your data first
  - renaming a table
    - if a trigger is associated with a table that is renamed and moved toa  new database, the trigger will fail when used
      - you wont be warned of this possibility when renaming a table

## DATABASES issues
  - special characters in the DB name are encoded int he filesystem names
    - if you upgrade your system to a new version of  mysql you may not be able to access the db
    - use the mysqlcheck utility to overcome this issue
      - `mysqlcheck --check-upgrade --fix-db-names`


# PARTITIONS
  - the `add partition` clause wont work with a table in which the last partition was given the range `MAXVALUE`
    - you can overcome this issue via the `reorganize partition` clause
      - this takes a very long time
  - following statements do not work with partitioned tables
    - anayze table
    - check table
    - optimize table
    - repair table
    - to overcome this issue, you have to use the aforementioned statements within an `alter table` clause
  - a table that has a primary key must be included in the basis used for partitioning
  - partitions need to be in order, but not sequentially named
    - p0 = 0-400 records
    - p123 = 401-600 records
    - p1 = etc


## PARTITION OPTIONS
  - `hash()` creates a key/value pair that controls which partition is used for saving rows of data and indexing data
  - `linear` see performance
  - `key()` functions the saame as `hash()` except that it accepts only a comma separated list of columns for indexing and distributing data among partitions
  - `list()` give specific  values for distributing data across partitiions
    - the column and values must all be numeric not strings
  - `range()` distribute data among partitions based on a range of values
    - `less than (#)` set limits for each range
    - `less than maxvalue` set the limit of the final partition
  - `comment` see important keywords
  - `data directory` & `index directory`
    - specify file pathnames in order to fix the locations of partitions
    - directories given myst exist and you must have access privileges
  - `nodegroup` see `mysql cluster`
  - `tablespace` see `mysql cluster`
  - `subpartition` only for partitions distributed by `range` and `list` methods
    - each `subpartition` can only use the `hash` or `key` methods
    -


```sql
  -- partition a table by some column
  -- into 4 partitions
  create table...
    partition by key (COLNAME)
    partitions 4;

  -- partition with subpartitions
  -- even though the subpartition uses hash
  -- the subpartitions qqre specified in ranges of values
  -- because its a subpartition of a partition that uses range
  create table...
    partition by range(year(COLNAME1))
    subpartition by hash(to_Days(COLNAME2))
    subpartitions 2 (
      partition P0 values less than (1990),
      partition P1 values less than (2000),
      partition P2 values less than maxvalue
    )

  -- partition with subpartitions
  -- even though the subpartition uses hash
  -- the subpartitions qqre specified in ranges of values
  -- because its a subpartition of a partition that uses range
  create table...
    partition by range... --see above
    subpartition by hash(month(COLNAME))
    subpartitions 4 (
      partition QTR1 values less than (4)
      partition QTR2 values less than (7),
      partition QTR3 values less than (10),
      partition QTR4 values less than maxvalue
    )

  -- partition a table by the hash of months
  -- into 12 partitions
  create table...
    partition by hash(month(COLNAME))
    partitions 12;

  -- distribute data between two partitions
  create table...
    partition by list(COLNAME) (
      partition COLNAME1 values in(100,200,300),
      partition COLNAME2 values in (400, 500)
    )

  -- distribute data among partitions based on COLNAME
  -- each partition can be given a distinct data and index dir
  create table...
    partition by range (COLNAME) (
      partition p0 values less than (500)
        data directory = 'some/dir/data'
        index directory = 'some/dir/index'
        engine = ENGINENAME,
      partition p1 value less thaan (1000),
      partition p3 values less than maxvalue
    )

  -- create a table based on the structure of another
  -- no data is imported from OTHERTABLENAME
  -- in order to create an index
  -- you would first have to import the data over
  create table...
    like OTHERTABLENAME

  -- create a table based on the structure of another
  -- and copy the data over
  -- after the table is created
  -- you can then create an index
  -- however it doesnt make the column a primary key
  -- or an auto_increment one
  -- for that you would need to use alter table instead
  insert into NEWTABLENAME
    select * from OTHERTABLENAME
    where...





  -- split a table into two based on key column quack!
  alter table...
    paritition by key(COLNAME)
    PARTITIONS 2;

  -- p#  (p1, p2, etc) is the number of the partition
  -- add a new partition to a table in which partitions
  -- are determined based on a range of values
  alter table...
    add partition (partition p#)

  -- give a range of values for partitioning
  -- p1 and p2 are arbitrary partition names
  alter table...
    partition by range (PRIMKEYNAME) (
      partition P0 values less than (400)
      partition P1 values less than maxvalue
    )

  -- split a partition in two
  alter table...
    reorganize partition P0 into (
      partition P1 values less than (800),
      partition P2 values less than maxvalue
    )

  -- remove partitioning from a table
  -- shifts data back to one datafile and one index file
  alter table...
    remove partitioning;

  -- eliminate named partitions p1 and p2
  -- deletes the data contained in the dropped partitions
  alter table...
    drop partition P1, P2;

  -- reduce the number of partitions by 1
  -- without data loss
  alter table...
    coalsce partition 1;

  -- only way to use these statements on partitions
  alter table...
    -- read and store the indexes of a partition
    analyze partition P1, P2;
    -- check for corrupted data and idnexes
    check partition...
    -- compact a partition in which the data has changed
    -- signficantly
    optimize partition...
    -- defragments the given partitions
    rebuild partition...
    -- attempts to repair corrupted partitions
    repair partition...
```


## FUNCTIONS
  - most use `select function()`
  - `databse()` returns the current database name
  - `mbrcontains(spatialcol, geofromtext('point(1 2)'))`
    - find which square contains a given point ona  cartesian plan (e.g. x=1, y=2)
  -


  ```sql
    -- retrieve the identification number assigned to the last entered row
    select last_insert_id();

  ```

# SECURITY
## DATABASE security
  - dropping a database|table|server
    - any user privileges specific to the database are not deleted
      - e.g. any privileges listed in the db table of the mysql database
      - if a database is created later with the same name those user privileges will apply to the new db, which is a security risk

## VIEWS security
  - can be useful for improved security
    - but why?...


## USER STATEMENTS AND FUNCTIONS security
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

# DATABASE & TABLE SCHEMA
  - `describe` displays information about the columns of a given table
    - field - the name of each column in the table
    - type - data type of each column
    - null - whether the column in the table may contain a null value
    - default - the default value of the column
    - key - what type of key the column is
      - empty - the column is not indexed
      - PRI - a primary key
      - UNI - a unique index
      - MUL - multiple occurrences, i.e. duplicate values are permitted for this column
        - this is permitted because the column is only one of multiple columns making up an index
    - extra - any extra information about this column
  - `show` retrieve an entity list
    - `show variables`
      - the `\G` flag is particularly useful

    - `show warnings` retrieve `notes` created when errors are suppressed via `if exists` flag

    - `show databases`
      - displays the list of databases on the server
      - `show schemas` same thing
      - `show databases` privilege is required to see all databases

    - `show table`
      - displays a list of tables and views
      
    - `show table status`
      - displays status information on a set of tables from a database
        - fields
          - `name` table name
          - `engine` type of storage engine
          - `version` version number from the tables .frm file
          - `row_format`
            - `innodb` compact | redundant
            - all other dbs - compact compressed dynamic fixed redundant
          - `row` the number of rows contained in the table
          - `avg_row_length` average length of rows in bytes
          - `data_length` the size of the datafile in bytes
            - the same size shown at the filesystem level for the .myd file
          - `max_data_length` the maximum size permitted for the datafile of the table
          - `index_length` size of the index file (.myi file)
          - `data_free` space that has been allocated for the datafile that is not in use at the moment
          - `auto_increment` the value of the column that uses auto_increment for the next row to be created
          - `create_time` the data and time the table was created
          - `update_time` the time the table was last updated
          - `check_time` the last date and time that the table was checked (not *always* accurrate)
          - `collation` the collation used for sorting the tables data
          - `checksum` provides the checksum (if there is one)
          - `create_options` any options
          - `comment` aany comments given when the table was created/altered
    - `show indexes`
        - displays informationa bout the indexes for a given table
        - index, keys, indexes all retrieve the same entity list
        - fields
          - `table` - the table name
          - `non_unique`
            - 0 = is unique
            - 1 = not unique
          - `key_name`: the key | index name
            - for indexes composed of multiple columns, there will be multiple results with the same key_name but different column names
              - they are output in the order they were created
                  - e.g. create... (col1, col2)
          - `column_name`:
          - `collation`
            - a = ascending sort
            - d = descending sort
            - null = not sorted
          - `cardinality` based on the number of unique indexes contained in the column
            - the server consults this information to determine whther to use an index in a join
            - higher the cardinality the more likely it will be used
          - `sub_part` indicates the number of characters of the column that are indexed for partially indexed columns
            - null = if the null column is indexed
          - `packed` indicates how the key is packed
            - null = not packed
          - `null` if the column can contain a null value
            - yes|empty string
          - `index_type` structure of the index
            - btree
            - hash
            - fulltext
            - rtree
            - spatial

    - `show character set` show all of the character sets installed on the server
    - `show create database` displays an SQL statement that can be used to create a database like the one given
    - `show create table` returns the statement needed to recreate the table
      - only method for viewing the options for a table
    - `show create view` display an sql statement that can be used to create a view like the one given
    -



## DATABASES database & table schema
  - the database keyword is synonmyous with `schema`
  - a database name cannot be longer than 64 bytes (not chars)
  - if you want a db name to contain quotes you must enable thee sql `ansi_quotes` mode


### DATABASE OPTIONS database & table schema
  - `create database` creates a new database with the given name
  - `create schema` see create database

  - `drop database` delete a given database along with all of its tables and data
    - requires drop privilege
    - numbr of tables deleted is returned int he rows affected count
      - if the database does not exist or if there are other files int he databases filesystem directory an error message will be displayed
        - the tables will still be deleted if other files exist
        - but the foreign file and the directory for the database wont be removed
          - they will have to be deleted manually
      - if the database is deleted
        - see security
  - `rename database`
    - while a database is being renamed, no other client can interact with the database involved
    - tables that are currently lockied/table part of a transaction in progress cannot be renamed


### SERVERS database & table schema
  - `alter server` used with the federated storage engine to change the connectino parameters of a server created with `create server`
    - requires `super` privileges
  - `create server` for use with the federated storage engine to set the connection parameters
      - the values given are stored int he mysql db in the server table in a new row
      - server name cannot exceed 63 chars
      - if an option is not give, the default`create server` will b ean empty string
  - `drop server` for use with federated storage engines to delet a given server that is created with `create server`
    - see security


## TABLES database & table schema
  - reference table: is referenced by another table via a primary key
    - e.g. books table will reference authors table

  - `type|engine` both are used to specify the engine to be used

  - `create table` create a new table within a database
  - OPTIONS
    - `temporary` create a temporary table that can be accessed only by the current connection thread and is not accessible by other users
  - `drop table` delete a table and its data from a database
    - requires drop privileges
      - unless the `temporary` flag is used
    - will cause a commit of the current transaction except when the `temporary` flag is used
    - `temporary` only temporary tables matching the table names given will be deleted
      - temporary tables
    -


### TABLE OPTIONS
  - all options come after the closing paranthesis of the column definitions

  - `auto_increment` assign a unique identification number automatically to the column in each row added to the table
    - auto_increment = 1000 - starts at 1000 instead of 1
  - `avg_row_length` for large tables set the avg row length for better table optimization
    - avg_row_length = 12638
  - `character set` - sets the character set to use for character data in the table
    - often used with `collate`
  - `collate` - sets the alphabetizing order to use with character data int he table
    - does not affect columns for which the collation and character sets have been set explicity
  - `checksum` - enables/disables a checksum for a table
    - 0 = disable
    - 1 = enable
  - `comment` see important keywords
  - `connection` for tables that use the federated storage engine
    - to federate an existing table with a remote connection you have to alter the table
  - `delay_key_write` delays updates of indexes until the table is closed
    - 1 = enable
    - 0 = disable
  - `engine` see storage engines
  - `insert_method` see table engines, merge
  - `max_rows` & `min_rows`
    - set the max/min rows of a table
  - `rename table`
    - can be renamed and moved to databases on the same filesystem
    - see issues
    - requires
      - alter and drop privs for the table being renamed
      - create and insert privs are needed for the new table and database if the database is being moved
    - multiple renames are executed left to right
      - if any errors are encountered, all of the table name changes are reversed from right to left
      - whiile tables are being renamed, no other client can interact with the tables involed
        - tables that are currently locked/part of a transaction in progress cannot be renamed
    - can be used to rename a view but the view cannot be moved to a different database
  -


#### TABLE ENGINES
  - can be given to a table / partition
  - formaly known as `table type`
  - make a backup of your table and data before converting to a different engine type
    - a table engine cannot be converted to `blackhole` or `merge`
  - manages queries and interfaces betweena users sql statements and the databases backend storage, is the critical software any database management system


##### TABLE ENGINE OPTIONS (for all)
  - `key_block_size` see performance
  - `row_format` instructs the storage engine how to store rows of data
    - myisam tables
      - dynamic - variable length
      - fixed -
      - compressed - requires the utility myisampack
      - redundant - change a compressed myisam to uncompressed
      - see myisampack
    - compact - for innodb tables


##### MERGE
  - create a table based on two/more other tables
  - you have to specify the `insert_method` (first|last)
    - first -  first table listed in the `union` is used for isnerts
    - last - opposite of `first`
  - `union` change the tables that make up a merge table
  -


##### BLACKHOLE


##### MYISAM
  - if using `fulltext` indexes
    - this table cannot be converted to `InnoDB`
  - `pack_keys` see performance


##### INNODB
  - use tablespaces instead of individual file  for each table
  - tablespace - an involve multiple files and can allow a table to exceed the filesystem file limit


##### FEDERATED
  - see `connection`


## VIEWS database & table schema
  - the contents of a view are based on the `select` statement given in the `as` clause
    - users can issue queries and updates tot he view in place of a table
    - updates change the data in the tables that underlie the views
  - a view can be based on other views/tables
  - to label the column names of a views results set
    - give a comma separated list in paranthesis after the view name
  - the name of a view
    - cannot be the same as a table in the database
      - because they share the same tablespace
    - cannot be changed once created
      - instead use the `drop view` statement to delete it, and then create another one
      - or use the `or replace` paramater to upsert a view
  -


### VIEW OPTIONS database & table schema
  - `create view` create a view i.e. a preset query stored in a database
    - see security
  - `drop view` deletes a view
    -

  - `alter view` change a view
    - change the select statement that determines the view
    - change the column names provided by the view queries by providing the new column names in a comma separated list
      - dont include either the old select statement or hte old column names

  - `algorithm` change the algorithmic methods to use for processing a view
    - merge,
    - temptable: prevents the view from being updatable
    - the default value is `undefined` which leaves the choice up to mysql
  - `definer` set the user account considered to be the views creator
    - determines access rights to the columns of the view
    - by default its whoever created the view
  - `sql security` authorize access to the view based on the privileges of either the views creator `DEFINER` or the current viewer `INVOKER`
    - helps to prevent some users from accessing restricted views
  - `with check option` set the restrictions on the updatinng of a view to only rows in which the where clause of the underlying select statement returns true
    - `local` - for views based on another view - this restriction will be limited to the view in which its given and not the underlying view
    - `cascaded` - underlying views will be considered as well
      - this is the default
  -


## INDEXES database & table schema
    - all indexes require `NOT NULL` columns
    - indexes can only be created for myisam, innodb, and bdb engines
    - you can use more than one column for an index
    - a table can contain multiple indexes
    - often combined with `auto_increment`
    - must be unique
    - often used for identifiers that appear as columns
    - `foreign key` and `primary key` also create indexes


### INDEX OPTIONS database & table schema
  - `create index` add an index to a table after it has been created
    - `unique` prevent duplicates
    - `using` specify the type of index
      - btree - default for myisam and innodb
      - rtree
      - `spatial` only for spatial columns in myisam engine
      - `blob`
      - `fulltext` the whole column will be used for each colum index (as opposed to the first few characters)
        - use the `with parser` statement to specify a plugin to use
          - requires the plugin table be loaded in the mysql database
        - are required to use fulltext functionality
          - `match()` and `against()` functions
        - char, text, and varchar column for myisam engines
  - `drop index` deletes a given index from a table
    - see `alter table` drop index


## COLUMNS
  - if a column is indexed `ASC` | `DESC` can be given next to indicate whether indexes should be stored in ascending or descending order


### COLUMN OPTIONS
  - `not null`  column may not be null
  - `default` set the default value
  - `auto_increment` identifies this column as auto increment
    - you cannot have more than one auto_increment column in a table
    - see table options

  - `on delete restrict` do not allow a row forone table to be removed from another table without first removing the foreign key record
  - `on delete cascade` delete the record which contains the reference whenever the referenced record is deleted

  - `foreign key` an index that refers to a key/index in another table
    - creates a constraint in the current table based on a colun in another table
    - links columns in innodb tables
  - `PRIMARY KEY`
    - there can only be one per table
  - `UNIQUE`
    - duplicates: occur only when columns defined as unique contain the same value
  - `references` creates a relationship between an index and another table
    - `match full` requires that the reference match on the full width of each column
    - `match partial` allows the use of partial columns
      - can accelerate indexing when the first few characters of a column determine that a row is unique
    - `match simple`
    - `on delete` react to deletions of matching rows from the foreign table according to the option that follows
      - see the options for `on update`
    - `on update` respond to updates made to the references table according to the options that follow
      - `restrict` not to allow the deletion/update of the rows in the rows in the foreign table if rows in the current table are linked to them
      - `cascade` when deleting/updating the rows referenced in the parent table, delete/update the related rows in the child table
      - `set null` change thee data contained int he related columns toa  NULL value
        - the child table must allow null values for this to work
      - `no action` do not react to deletions/updates
    -


### COLUMN TYPES
  - enum(key1, keyX)
  - int
  - text
  - varchar(length)
  - text
   - variable data type
   - can hold very large amounts of data, up to 64 kilobytes
  - timestamp
    - default values not allowed


```sql
  alter database
    character set SOMETHING
    collate SOMETHING

  -- syntax
  alter table TABLENAME
    change column COLUMNAME NEWCOLDEF,
    add column COLDEF;

  -- change the value of an existing server
  alter server SERVERNAME
    OPTIONS (user 'USERNAME', password 'PASSWORD', port 'PORT#')

  -- add a column after an existing column
  alter table TABLENAME
    add column COLDEF after COLNAME

  -- add new index
  alter table TABLENAME
    add index INDEXNAME

  -- add a fulltext index
  -- based on two existing columns
  alter table...
    add fulltext index INDEXNAME (
      COLNAME1, COLNAMEX
    )

  -- add a spatial index
  alter table...
    add spatial index INDEXNAME (COLNAME)

  -- add foreign key
  alter table...
    add foreign key KEYNAME (COLNAME1)
    references TABLENAME (COLNAME2);

  -- set a default values
  -- modify coldef + specify new character set
  alter table...
    alter column COLNAME set default 'DEFAULT VALUE',
    modify column COLNAME COLDEF character set 'NEW CHAR SET';

  -- remove a column
  -- remove an index
  alter table...
    drop column COLNAME,
    drop index COLNAME2,
    drop primary key, -- cannot be auto_increment, see below
    drop foreign key 'INDEX NAME';

  -- change column type from auto_increment to int
  -- so that we can drop the index
  alter table...
    change COLNAME1 COLNAME1 int,
    drop primary key

  -- convert all data in table
  -- then change the default
  alter table...
    convert to character set CHARSETNAME  collate COLLATENAME,
    default character set CHARSETNAME collate COLLATENAME;

  -- disable|enable keys
  -- requires alter, create, index aand insert privs
  alter table TABLENAME
    disable|enable keys;

  -- for innodb
  alter table...
    import|discard tablespace

  -- permenantly reorder rows in a table
  -- thereafter any additional rows will appended
  alter table...
    order by COLNAME;

  -- rename a table
  -- changes user privs to match the new name of the table
  alter table TABLENAME rename to NEWNAME;

  -- disable checksum for this table
  alter table TABLENAME checksum = 0;

  -- set the max and min rows for a table
  -- and add a comment for the table
  alter table...
    max_rows = 1000,
    min_rows = 50,
    comment = 'this table can hold between 50-1000 records'

  -- federate an existing table with a remote table
  alter table...
    engine = federated
    connection='mysql://USERNAME:PASSWORD:HOSTNAME:PORT/DBNAME/TABLENAME';

  -- change the storage engine to InnoDB
  alter table...
    engine = INNODB

  alter table...
    pack_keys = 1;

  alter view TABLENAME(COLUMNLIST)
    as select SELECTSTATEMENT...

  -- create a unique or fulltext index
  -- using the first two chars of col1
  -- and all chars from COLX
   create unique|fulltext index INDEXNAME
    on TABLENAME(COL1(2), COLX)

  -- create a spatial index\
  -- COLNAME must be a spatial column, ie. POLYGON NOT NULL
  create spatial index INDEXNAME
    on TABLENAME (COLNAME)


  -- create a server
  create server SERVERNAME
    foreign data wrapper mysql
    options (
      user 'USERNAME',
      host 'HOSTNAME|IP-ADDRESS',
      database 'DBNAME',
      PORT ####,
      OWNER 'root'
    )

  -- use an existing server as the connection
  -- see above
  create table TABLENAME (COLDEF...)
    engine = federated connection='SERVERNAME';


  -- basic table
  create table TABLENAME (
    COLDEF...,
    NAME int not null auto_increment primary key,
    NAME char(15) comment 'wTf Yo',
    index INDEXNAME using INDEXTYPE (
      COL1(5), COL2 DESC
    ),
    foreign key (COLNAME)
      references OTHERTABLE(COLNAME)
      on delete cascade
  )
  auto_increment = 1000
  type = innodb;

  -- other options
  create table...
    engine = ENGINENAME
    union = (TABLENAME1, TABLENAME2)
    INSERT_METHOD = LAST|FIRST


  -- create a view
  -- custom definer sql security clause
  create definer = 'USERNAME'@'HOST'
    sql security invoker
    view VIEWNAME(COLNAME1, COLNAMEX...)
    as select...
    from...


  drop database if exists DATABASENAME;

  rename database CURNAME to NEWNAME;

  -- INSPECTING TABLES
  -- list column definitions of a table
  describe DBNAME.TABLENAME;
  describe TABLENAME; -- to use current db
  describe TABLENAM COLUMNAME -- specific column
  describe TABLENAME 'COLNAME%' -- columns matching wildcard

  -- retrieve all variables
  show variables\G;
  -- retrieve character sets
  show character set like 'this%';
  show character set where charset = 'cp932';

  -- see all indexes on a table(s)
  show indexes from TABLENAME;
  show indexes from TABLE1 fom TABLE2;

  -- see all col defs including charset and collation
  show table status;
  show table status [from DATABSENAME]
  show table status [like '%pattern%']

  -- see all coldefs containing  'this'
  show columns from TABLENAME like '%this%';

  -- see full column defs
  show full columns from TABLENAME;

  -- see all views in the current database
  show full tables where table_type='view';

  -- see whos logged in
  show full processlist;

  -- get the create statement for the given view
  show create view VIEWNAME;

  -- get the create statement for the given DB
  show create database DATABASENAME;

  -- sbow the statement for recreating this table
  -- this is the only way to view the table options
  show create table TABLENAME \G;
```
