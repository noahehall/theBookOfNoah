# MYSQL in a nutshell russel jt dyer

## TLDR

- todo: not sure in which decade this file was created

## link

- [mysql MUL keys](https://stackoverflow.com/questions/5317889/sql-keys-mul-vs-pri-vs-uni)
- [quick mysql links](https://www.mysqltutorial.org/)

## needs categorization

- best practices
  - reserved words should be UPPERCASE
    - everything else lowercase
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

## FLAGS

- KEYWORDS
  - `first` prepend new column
  - `after` insert new column after some other column

# MYSQLSHOW

- utility to view entities from the cmd line ?
- keywords
  - `--keys`

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
- `--low-priority-updates`
- `--local-infile`

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

# important NOTES

# important FILES

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
- `/var/log/mysql/bin.1234567`
  - mysql binary log files, heavily used in replication
  - each data changing statements contains
    - position identifcation number - a line starting with `# at 12345`
    - a timestamp for slave servers to adjust their updates to match the
    - `use` statement to ensure the slave uses the correct `database`
    - the value of any `insert_id` to ensure the ids match across servers
- `relay.log`
  - the slave appends changes it has made to its relay.log file
  - similar to the masters binlog file
  - a new `relay.log` is created
    - when replication starts ont he slave and when the logs are flusehd (i.e. the `flush logs`)
    - when the current file reaches themaximum size as set with the `max_relay_log_size` or the `max_binlog_size` variable
- `relay-log.info` after each new entry is recorded int he slaves `relay.log` file, the new relay log position id number is recorded in this file through the slaves `sql thread`
- `master.info`
  - used primarily in replication for the slave to remember its position in the masters binary log file even if the slave is rebooted as well as the information necessary to reconnect to he master
  - lines
    - first line contains the number of lines of data in the file
    - second line shows the name of the last binary log file on the master from which the slave received entries
    - third line show sthe position identification number in the masters binary log
    - the next few lines contain the masters host address, the replication username, the password, and the port number
      - the password is not encrypted and stored in clear text
      - you need to keep this file in a secure directory
    - the next to last line lists the number of attempts the slave should make when reconnecting to the master before stopping
    - the last line could be 0 if the sever from which this master information file came does not have teh ssl feature enabled
      - if ssl was enabled on the slave and allowed on the master there would be a value of 1
      - see `show slave status`
  - slaves record their position in the masters `bin.log` file inside of the `master.info` file location on the slaves server
    - see security

# important LOCATIONS

- mysql servers data directory
  - each database files are located within a subdirectory

# important KEYWORDS

- `if not exist` suppress an error message when a create statement fails if the entity already exists
  - `table`, `database`, `view`
- `comment` - attach notes to a table, partition, or a specific column
  - text must be single-quoted
- `if exists` suppresses an error message if the entity does not already exist
  - `table`, `database`, `view`, `server`
- `delayed` indicates the same priority status as `low_priority`

  - but it releases the client so that other queries may be run and so that the connection may be terminated
    - i.e. it will free the client by storing the statement in a buffer for processing when the table is not busy
  - a delayed query that returns without an error message does not guarantee that the isnerts will take place
    - it confirms only that the query is received by the server to be processed
  - user wont be informed of any failures if the server crashes
    - to confirm - you must check the table later for the inserted content
  - `insert`, `replace`, `update`

- `high_priority`
  - overrides a `--low-priority-updates` server option and to disable concurrent inserts
  - gives `select` statements higher priority of `update` statements submitted at the same time by different clients
  - `insert`, `replace`
- `low_priority` instructs the server to wait until there are no queries on the table before operating on rows.
  - when the table is free it is locked for the action and will prevent concurrency
  - `delete`, `insert`, `load data infile`, `replace`
  - opposite of `concurrent`
- `concurrent` take an action even if other clients are reading/writing the given table,
  - opposite of `low_priority`
  - `load data infile`
- `ignore` - applies to all clauses and instructs mysql to ignore any error messages regarding duplicate rows that may occur as a result of a column change
  - will keep the first unique row found and drop any duplicate rows
  - otherwise the statement will be terminated and changes will roll back
  - `insert`, `delete`, `load data infile`, `update`
  - see `show warnings` to review any generated warning messages ignored by this clause
- `no_write_to_binlog`
  - prevent the activities of this statement from being recorded in the binary log file
  - `local` does the same thing

# important SHELL CMDS

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
- `delete`
  - compact a table that has had many rows deleting by using the `optimize table` statement or the `myisamchk` utility
- `explain` to help analyze slow queries
  - when mysql joins/searches tables, find out which index it should use
- `handler` can be faster than select statements when reading large numbers of rows from a table
  - requires `myisam` and `innodb` storage engines
  - specifying a an index when reading can boost performance
- see `optimize table`

# UTILITIES

## mysqldump

- creates a file of sql statements that can later be executed to recreate databases and their contents
- `--extended-insert`
  - creates multiple-row insert statements and thereby makes the resulting dump file smarter
  - allows the backup to run faster
- `--ignore-table`
  - so that the usernames and passwords wont be copied
  - this is a required security precation if the slave will have different users and especially if it will be only used for backups of the master
- `--master-data`
  - locks all of the tables during the dump to prevent data from being changed but permits users to continue reading the tables
  -

```sh
  # create a dump file  (i.e. backup of a server
  mysqldump \
    --user=USERNAME \
    --passowrd=PW \
    --extended-insert \
    --all-databases
    --ignore-table=mysql.users \
    --master-data > /tmp/BACKUPFILENAME.sql

  # execute a dump file and setup the databases and data
  # on the slave server
  mysql --user=USERNAME \
    --password=PW \
    < /tmp/BACKUPFILENAME.sql

```

## mysqlbinlog

- read the contents of mysql bin logs
- contents of a `bin.log` file redirected to a txt file can be used to restore data on the master server to a specific point in time
- `point-in-time` recovery mmethods are an exccelent recourse when you have inadvertently deleted a large amount of data that has been added since your last backup

```sh
  # redirect a binary log file to a txt file
  mysqlbinlog /var/log/mysql/bin.00001 > /tmp/somefile.txt
```

## myisamchk

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

## TABLES

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
- `completion_type` ?

```sql
  set @SOMEVARIABLE = 'some value';

  -- see if mysql server uses query cache by default
  show variables like `query_cache_type`
```

# OPERATORS

```sql
  -- % is a wildcard
  where COLNAME like '%containsThis%'
```

# important ISSUES

## TABLES issues

- the `convert to` clause can cause issues
  - make sure to backup your data first
- renaming a table
  - if a trigger is associated with a table that is renamed and moved toa new database, the trigger will fail when used
    - you wont be warned of this possibility when renaming a table

## REPLICATION issues

- if `start slave` statements fails to start the slave, you have to review the `slave server` error logs
  - no other information will inform you

# important BEST PRACTICES

- IMPORT/EXPORT/MIGRATION
  - generally
    - eah record should be on a separate line
    - each field (column headers and values) should have a common field separator
  - importing
    - you have to alias each column in `text fields(...)`
    - even if you later ignore `SET...`

## DATABASES issues

- special characters in the DB name are encoded int he filesystem names
  - if you upgrade your system to a new version of mysql you may not be able to access the db
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
- `list()` give specific values for distributing data across partitiions
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
  - find which square contains a given point ona cartesian plan (e.g. x=1, y=2)

# SECURITY

- you have to keep the `master.info` file used by the `slave server` for replication in a secure directory as the `master server` password is store in plain text

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
    - global: aplly to all databases on the server
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

## STATEMENTS user administration

- `create user`

  - users can have more than one account
    - i.e. different user & host combinations
  - must be in quotes
    - password
    - username
    - hostname / ip address
    - for accessing mysql loocally use the host of `localhost`
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

- `set password` change the password for an existing user

- `show grants` displays the grant statement for a given user

- `reset` reset certain server settings and log files

  - requires reload privilege
  - OPTIONS
    - master - reset a master used for replication
      - must be executed from the master
      - will start a new binary log file as well as delete the binary log filenames from the index file and delete the contents of the binary log index file
    - slave - reset a slave used for replication
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
    - `des_key_file` - reloads the des encryption file, which is given the --des-key-file option at staartup or int he optinos file
    - `hosts` - clear the hosts cache, which is used to minmize host/ip address lookups
    - `logs` - used to close all of the log files aand reopen them
      - if the server has binary logging enabled it will change the binary log file to the next numeric sequence
    - `master` - deprecated -
      - use `reset master`
    - `privileges` - reloads the grant tables for user privileges
    - `query_cache` - instructs the server to defragment the query cache to improve performance
      - use `reset query cache` to remove queries
    - `slave` - deprecated - use `reset slave` instead
    - `status` - resets the session values and counters for key caches to 0
    - `table` forces the given tables to be closed
    - `tables` - causes all tables to be closed
    - `tables with read lock` - closed all tables and locks them with a global read lock
      - allows users to view the data but not ot update it or insert records
      - the lock will remain in place until `unlock tables` statement is executed
      - this is not logged
    - `user_resources` - resets all user resource values that are calculated on an hourly basis
      - specifically the following columns in `mysql.user`
        - max_questions
        - max_updates
        - max_connections
  - `show privileges` provides a list of privileges availble, along with the context of each one
    - e.g. server administration and a description

## PRIVILEGES user administration

- for `grant` and `revoke`
- `all` - all basic privileges except `grant`
- `alter` - alter tables
- `alter routine`- alter/drop stored routines
  - including alter function|procedure
  - including drop function|procedure
- `create` - create table
- `create routine` - create stored routinges
  - including create function|precedure
- `create temporary tables`
- `create user`
  - including rename user, revoke all privileges, and drop user
- `create view` - create temporary tables
- `delete`
- `drop`
  - including truncate
- `event` create events for the event schedule
  - including alter event and drop event
- `execute` - the execution of stored procedures
- `file` - use of select...into outfile and load data info
  - i.e.e to import/export files
- `with grant option` - grant privileges to users
- `index` - create index and drop index
- `insert`
- `lock tables` - lock statement for tables for which the user has `select` privileges
- `process` - use of the `show full processlist` statements
- `references` - not used?
- `reload` - flush and reset statements
- `replication client` - query master and slave servers for status information
  - see `replication`
  - permits the user to execute the `show master status` and the `show slave status` statements
- `replication slave` - required for users on the master server to be setup replication slave servers
  - allows binary log events to be read from the master server
  - permits the user to connect to the master and to receive updates to the masters binary log
  - see `replication`
- `select`
- `show databases` - `show databases` for all databases
  - be careful with this one!
- `show view` - show create view
- `shutdown` - shutdown option with the `mysqladmin` utility
- `super` - change master, kill, purge master logs and set global statements and the debug option with the cmd line utility `mysqladmin`
- `trigger` - create and drop triggers
- update
- `s` - create a user without privileges or to modify resource limits on an existing user without affecting the existing privileges

## FUNCTIONS user administration

- many use like this `select md5('example function call')`
- AES_DECRIPT(string, pw)
  - decrypts text that was encrypted using the advanced encryption standard (AES) algorithm with a 128 bit key length, reversing the AES_ENCRYPT() function
- AES_ENCRYPT(string, pw)

  - encrypts a given string using the AES elgorithm with 128 bit key length

- `DES_DECYPT(string, [key])` decryptss text that was encrypted using the triple data encryption standard algorithm with a 128 bit key length
- `DES_ENCRYPT(string, [key])` returns encrypted text using the triple DES algorithm with a 128 bit key length

  - returns null if error occurs

- `select current_user()` returns the username and the host that were give by the user for the current mysql connection

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
  - `show views`
  - `show table`

    - displays a list of tables and views
    - does not display temporary tables
    - fields
      - `table_type` whether a view/ base table
        - requires `full` clause
      -

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
        - `check_time` the last date and time that the table was checked (not _always_ accurrate)
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

- `alter server` used with the federated storage engine to change the connection parameters of a server created with `create server`
  - requires `super` privileges
  - servers are created with the `create server` statement
- `create server` for use with the federated storage engine to set the connection parameters
  - the values given are stored in the mysql db in the server table in a new row
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
  - first - first table listed in the `union` is used for isnerts
  - last - opposite of `first`
- `union` change the tables that make up a merge table
-

##### BLACKHOLE

##### MYISAM

- if using `fulltext` indexes
  - this table cannot be converted to `InnoDB`
- `pack_keys` see performance

##### INNODB

- use tablespaces instead of individual file for each table
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
- ## `drop view` deletes a view

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

- `not null` column may not be null
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
    - `set null` change thee data contained int he related columns toa NULL value
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
  -- query it
  -- create a table in it
  create server SERVERNAME
    foreign data wrapper mysql
    options (
      user 'USERNAME',
      host 'HOSTNAME|IP-ADDRESS',
      database 'DBNAME',
      PORT ####,
      OWNER 'root'
    );
  select * from mysql.servers
    where server_name = 'SERVERNAME';
  create table TABLENAME (...)
    engine=federated
    connection='SERVERNAME';

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

  -- show tables matching pattern
  -- show views
  show tables from DATABASENAME like '%PATTERN%'
  show full tables where table_type='view'


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

# CRUD

- adding, changing, deleting, and selecting data

## STATEMENTS crud

- `delete`

  - delete rows of data from a given table
    - should always use a `where` clause unless you want to delete all rows
      - deleting all rows with this method is slow
      - see `truncate`
    - only works with engines that permit table locking
      - myisam, memory, merge
  - `quick` can be used with myisam tables to make deletions fatster by not merging leaves in the idnexes tree
  - `ignore` instructs mysql to continue even if it encounters errors

- `do`

  - suppresses the display of an expressions results

- `explain`
  - tells you want mysql does when it executes a give sql statement
    - however it doestn tell you what to do differently to improve performance.
  - display information about the columns of a given table
    - synonmyous with `describe` and `show columns`
  - analyzes the handling of a select statement
    - when multiple tables are queried, the order in which the tables are used
    - see performance
  - fields
    - `possible_keys` lists the indexes that might have been used to find the data
    - `key` indicates the specific index(s) that were actually used
    - `select_type`
      - `simple` indicates a simple select statement with a subquery or a union
      - `primary` when using a subquery this is the mains elect statement
      - `union` when using a union this is not hte first select statement
      - `dependent union` when using a union this is not the first select statement that is dependent on the main query
      - `union result` the result of a union
      - `subquery` the first select stateme nt in a subquery
      - `dependent subquery` the first select statement in a subquery that is dependent on the main query
      - `uncacheable subquery` indicates a subquery in which the results cannot be cached and therfore must be reevaluated for each row of the main query
      - `uncacheable union` the union of a subquery in which the results cannot be cached and therefore must be reevaluated for each row of the main query
- `handler`
  - directions
    - first
    - next
    - prev - select some previous selected rows
    - last - searches for and retrieves rows from the last row of the table
  - provides direct access to a table as opposed to working from a results set
    - requires
      - myisam and innodb tables
      - can only be used by the session (connection thread) that established it
        - the table can change and even be incomplete as the handler performs successive reads
          - if there are other connections updating the table
    - cannot use `order by` clause
      - records are retrieved in the order they are stored in the database
  - see performance
- `help`
  - access built-in documentation
- `insert`
  - add rows of data to a table
  - `default`
    - instructs the server to use the default value for the column
  - `on duplicate key update` tell an `insert` statement how to handle an insert when an index in the table already constains a specified value in a column
    - the statement updates the data in the existing row to reflect the new values in the given column
      - without this clause the statement generates an error
  - see important keywords
- `join`
  - link tables together base don columns with common data for purposes of seelecting, updating or deleting data
  - used by `select`, `update`, `delete`
  - `on` indicate the pair of columns by which the tables are to be joined
  - `using` instead of specifying `on`, specify the column name(s) that each table has in common
    - thus you only need to list the column name once
  - `left`
    - include all columns from the first table listed whether or join they exist in other tables
  - `right`
    - include all columns from the second table listed whether or not htey exist in other tables
  - `natural`
    - use whatever ID column all tables have in common
  - `straight_join`
    - cannot be used with left|right|natural
    - explicity instruct mysql to read the tables as listed from left to right
  - `use index`
    - tell mysql which index it should check first
  - `ignore index`
    - which index to ignore
  - `force index` force it to use a particular index
    - see performance
- `limit`

  - limit the number of rows the server will process to satisfy the given SQL statement
    - `select` it limits the number of rows returned in the result set
    - `update` limits the number of rows changed
    - `delete` limits the number of rows deleted
  - only accepts literal values, not expressions, variables or negative values

- `load data infile`
  - import organized data from a text file into a table in mysql
  - file on server - if you use a bare filename (e.g. input.text) or a relative path, the file is found relative to the directory of the database into which the data is to be imported
    - if the file is located elsewhere, the file permissions must permit all users read access
  - file on client - `local` keyword must be given
    - this feature must be enabled on both the client and server by using the startup option of `--local-infile=1`
  - throws error when importing rows that already exist in the table
    - only the rows that were imported before the error occurs will succeed
  - `lines started by` the character(s) used to start a new line
  - `enclosed by` indicaates the charadter useed int he input file to escape special characters
    - '\' default
  - `ignore lines` omit one/more lines (e.g. headers) at the top of the file
  - see `ignore`
  - see `replace`
- `replace`

  - insert new rows of data and to replace existing rows where the primary key or unique index is the same as the new record being inserted
  - requires insert and delete privs as its potentially a combination of both
  - upserting statements - `load data infile`

- `select`

  - retrieve and display data from tables within a database
    - `all` the default - display all data
    - `distinct` display the first of all occurence i.e. no duplicates
  - only one of the following in a single statement
    - `sql_small_result`
      - cause mysql to use temporary tables, with a key based on the group by clause elemenets, to sort the results and possibly make for faster data retrieval
      - only use when you know the result set will be relatively small
    - `sql_big_result`
      - if you expect results to be large, this will cause mysql to use temporary tables on the filesystem
    - `sql_buffer_result`
      - instruct mysql to use a temporary table to buffer the results
  - `sql_cache`
    - force mysql to use the query cache
  - `sql_no_cache`
    - force mysql NOT to use the query cache
  - `sql_cacl_found_rows` total rows
  - `into`
    - export data from a `select` statement to an external text file/variable
    - file privilege is required
    - counterpart of `load data infile`
    - `escaped by`
      - character used to escape special charadters in the output
        - default `\`
      - `fields enclosed by`
        - character to use before and after each field
          - default no character used
      - `fields terminated by`
        - character with which to separate fields
          - default `\t`
      - `lines starting by`
        - character used to start each line
          - default no character used
      - `lines terminated by`
        - character used to end each lines
  - `into outfile`
    - exports results set into file
  - `into dumpfile`
    - exports onlh one row into an external text file
    - does not permit any field or line terminators like the `into outfile`
  - `group by`
    - group together rows containing the same value for a particular column
    - does its own sorting
      - cannot be used with the `order by` clause
  - `with rollup`
    - display a total of values for all grouped rows at the end of the result set
  - `having`
    - used for conditions returned by aggregate functions
      - see `avg()` `min()` `max()` etc
  - `order by`
    - change the order (by column/expression) of the results set
      - by default are displayed in the order in which the rows of data are found in the table
  - `procedure`
    - send the results of a `select` statement as standard input to a procedure
    - see `analyse()`
  - `lock in share mode`
    - lock the rows that are being selected from a table
    - prevents other clients from changing the data while the select statement is running
  - `for update`
    - instructs mysql to invoke a temporary write lock on the rows being selected

- `set`
  - set a system/user variable for global/session use
    - `@@global`
      - global variables - visible to all users
    - `@@session`
      - session variables - i.e. local - available only to the connection thread that creates the variable
      - system variables are limited to the current session by default
    - `@VARNAME`
      - a user variable
  - `set autocommit`
    - 0 - disable
    - 1 - enable
- `show errors`
  - display error messages for the previous statement that has been executed
  - use `count(*)` to see the total error messages
- `show warnings`
  - display notes, warnings, and error messages for the previous statement
- `truncate`
  - rapidly delete the contents of a table by droppinng the table and then recreating it without data
    - the `auto_increment` values will be lost
    - is not transaction safe
  - faster that deleting all rows via `delete` method
    - however `delete` returns number of rows deleted, this one doesnt
  - requires drop privs
- `union`
  - unites the results of multiple select statements into one results set
  - data from same tables
    - everything is good
  - data from different tables
    - results set generated by each SQL statement should match in column count and the order of column types
    - column names do not need to be the same
      - but the data sent to the respective fields int he results set needs to match
  - compared with
    - `join`/subquery
      - merge columns of data from multiple tables into rows in the results of a select statement
    - `union`
      - merge together the results tables of separate and distinct select statements into one results table
- `update`
  - changes existing rows of data in a table.
  - for `NOT NULL` columns
    - if set to NULL
      - will use default value if available
      - else erro
- `use`
  - sets the default database that mysql is to use for the current session
    - permitting the name of the defaults database to be omitted from statements
- `xa`
  - used for XA distributed transactions
  - transactions in which mulitple, separate transactional resources may be involved in a global transaction
  - only `innodb` tables
  -

# TRANSACTIONS

- a set of sql statements that the server has to execute as a unit
  - either all succeed/fail
    - on success they are entered into mysql but not persisted, to permanently record:
      - issue a `commit` statement
      - start another transaction
      - connection is terminated
    - on failure the server undos any changes made during the transaction
  - supported engines
    - innodb, bdb, and ndb cluster storage engines
  - not supported
    - myisam

## STATEMENTS transactions

- `begin`
  - use `start transaction` instead to avoid confusion with `begin...end` statement
  - start a transaction
    - only supported by innodb, ndb cluster, and bddb storage engine
  - `work`
- `commit`

  - permenantly record a transaction
  - `autocommit` must be disabled for this statement to be meaningful
  - see `set autocommit`
  - `and chain` complete one transaction and start another thus making it unnecessaary to use `start transaction` again
  - `and release` end the current client session after completing the transaction
  - `no` indicate explicitly that a new transaction is not to begin (when used with `chain`) or that the client session is not to end (when used with `release`)
  -

- `release savepoint` instructs the server to release a savepoint named earlier with the `savepoint` statement for the current transaction
  - it does not commit/rollback the transaction to the savepoint
  - instead it merely eliminates the saavepoint as a possible rollback point
- `rollback`
  - for transactional tables to reverse ALL transactions that have not yet been commited
    - unlike `rollback to savepoint` which undos up until the previous savepoint
  - supported engines: `innodb`, `ndb cluster`, `bdb`
  - `autocommit` must be disabled
    - see `set autocommit`
- `rollback to savepoint`
  - instructs the server to reverse sql statements for the current session back to a point marked int he transaction by the `savepoint` statement
    - any transactions made after the savepoint are undone
    - unlike `rollback` which undos ALL uncommited transactions
  - supported engines - `innodb`, `ndb cluster`, `bdb`
- `savepoint`
  - identify a point in a transaction to which sql statements may potentially be undone later
  - if an additional savepoint is issued with the same name it will replace the previous one
  - if a stored function/trigger is used
    - a new savepoint level is setup and the previoius savepoitns are suspended
    - when the stored function/trigger is finished
      - any savepoints it created are released and the original savepoint level resumes
  - see `rollback to savepoint`
  - see `release savepoint`
- `set transaction`

  - only for innodb tables ?
  - set an isolation level for
    - `session` set the level for the current transaction
    - `global` to set it for all subsequent transactions (not existing ones)
    - else a transaction about to be started
  - `transaction isolation level`
    - `read uncommitted`
      - i.e. a dirty read - because seleect statements are executed in a nonlock maneer
        - thus queries by one transaction can be affected by ongoing, uncommitted updates in another transaction or old data may be used
    - `read commited`
      - more consistent read
      - however changes that are committed in one transaction will be visible to another
        - i.e. the same query in the same transaction could return different results
    - `repeatable read`
      - the default - makes all reads consistent for a transaction
    - `serializable`
      - the safest level
      - changes are not permitted in other transaction sif a transaction has executed a simple select statement
        - i.e. queries are performed with `lock in share mode`

- `start transaction`
  - purpose of a transaction is the ability to undo sql statements if need be
  - forces `autocommit` to be disabled
    - but is re-enabled with
      - the execution of the `commit` statement
      - ending of the current session
      - and several other statements that imply that commit is desired
  - `with conssitent snapshot` initiates a consistent read without changing the current transaction isolation level
    - i.e. provides consistent data only if the current isolation levels permits consistent reading
      - see `repeatable read`
      - see `serializable`
  - see `commit`
  - see `and chain`
  - see `and release`
  - see `no`
    - only necessary when the sysstem variable `completion_type` is set to soemthing other than the default setting
  - only for `innodb`, `ndb cluster`, `bdb` engines

### FUNCTIONS transactions

- `analyse()`
  - returns an analysis of a results take from a select statement
  - only used with `procedure` clause
  - param1 - max number of unique values that may be analyzed for each column
    - default 256
  - param2 - the max memory that should be allocated for each column during analysis
    - default 8,192 bytes (8mb)
- `benchmark()`
  - used to evaluate the performance of a mysql serer
    - param1 - number of times to run the expression
    - param2 - expression to run
- `database()`
  - returns the name of the database currently in use for the session
  - if no database is selected/set as default `null` is returned
  - `schema()` does the same thing
- `found_rows()`
  - use this function in conjunction with the `sql_calc_found_rows` option of a `select` statement to determine the number of rows an sql statement using a `limit` clause would have generated without the limitation
- `last_insert_id()`
  - returns the ID number of the last row inserted using the mysql connection
    - ID numbers that are set manually when rows are inserted without `auto_increment` option wont register and therefore wont be returned
  - the ID number for rows inserted by other clients will not be returned
- `row_count()`
  - returns the number of rows changed by the previous sql statement executed
  - see `insert`, `update`, `delete`
    - and any other statement that modifies records
- `schema()` see `database()`
-

```sql
  begin;
    ...
  commit;

  start transaction;
    lock tables TABLENAME write;
    ... -- your create/update statement
    select... -- verify results
    commit; -- persist transaction upon success
    rollback; -- undo changes upon error
    unlock tables;

  -- release a savepoinnt after verifying its results
  -- the select statement is used to verify the
  -- previous import
  start transaction;
    lock tables TABLENAME write;
    insert1...;
    savepoint SAVEPOINTNAME1;
    insert2... ;
    savepoint SAVEPOINTNAME2;
    select...;
    release savepoint SAVEPOINTNAME2;

  -- transaction with rollback
  start transaction;
    lock tables TABLENAME write;
    some CRUD statement...
    select... -- verificaiton of crud statement
    rollback; -- undo CRUD
    unlock tables; -- release tables for other clients


  -- need concrete example
  -- appears to take the same syntax as `start transaction`
  xa start ALIASNAME
    ...


  delete low_priority from TABLENAME
    where...

  -- the table listed after DELETE
  -- will have records deleted (table1)
  -- but you can use other tables to help
  delete TABLE1 from TABLE1, TABLE2
    where TABLE1.blah = TABLE2.blah;

  -- delete records from table1 and table2
  delete TABLE1, TABLE2 from TABLE1, TABLE2
    ...

  -- the preferred syntax as it is clear
  -- from which tables records will be deleted
  delete from TABLE1 using TABLE1, TABLE2
    ...

  -- suppresses the results
  do (set @SOMEVVAR = 'somevalue');

  -- using a handler
  handler TABLENAME as HANDLERALIAS; -- open
  handler HANDLERALIAS read FIRST; -- read first row
  handler HANDLERALIAS read NEXT; -- read next 1 row
  handler HANDLERALIAS read NEXT limit 2000; -- read next X
  handler HANDLERALIAS read NEXT
    where... -- with a where clause
  handler HNDLENAME read INDEXNAME FIRST|PREV|LAST;
  handler HANDLERALIAS close; -- close the handlerf

  -- insert a single row
  -- updates an existing row if duplicate exists
  insert into TABLENAME set
    COL1=VALUE,
    etc...
    on duplicate key update
  --
  insert into TABLENAME
    (COL1, etc...)
    VALUES
    ( VAL1, etc... ),
    ( VAL1, etc... )

  -- insert multiple rows based on data
  -- retrieved from a select statement
  insert into TABLENAME
    (COL1, etc...)
    select COLNAME1, etc...
      from OTHERTABLE
      where...

  -- upsert multiple rows into a table
  replace into TABLENAME
    (COL1, COL2, etc...)
    values
      (VAL1, etc...),
      (VAl2, etc...);

  -- upsert one row into a table
  replace into TABlENAME
    set COL1 = VALUE1, etc...


  -- upsert into table based on data retrieved
  -- fromm another table
  replace into TABLENAME
    (COL1, etc...)
    select COLNAME...
    from TABLENAME
    where...

  -- join two tables on specific columns
  select... as SOMEALIAS
    from TABLE1
    join TABLE2
      on SOMEALIAS.COL1 = TABLE2.COL1
    where...
    group by SOMECOL

  -- join two tables specifying column(s) they both share
  select... as SOMEALIAS
    from TABLE1
    join TABLE2
      using COL1
    where...

  -- join two tables on whatever ID column they both share
  select... as SOMEALIAS
    from TABLE1
    natural join TABLE2
    where...

  -- join two tables on whatever ID column they both share
  select... as SOMEALIAS
    from TABLE1
    left|right join TABLE2...

  -- SUGGEST to mysql which index to use for the join
  -- the use index and using statement can be different cols
  select...
    from TABLE1
    join TABLE2
    use index for join (COLNAME)
    using(SOMECOL)
    ...

  -- FORCE mysql to use a specific index
  -- however other indexes could be used if required
  select...
    from TABLE1
    join TABLE2
    force index for join (COLNAME)
    ...

  ...I
  -- FORCE mysql to ignore a specific index
  select...
    from TABLE1
    join TABLE2
    ignore index for join (COLNAME)
    ...

  -- create then export results into variable
  set @SOMEVAR = 0
  select sum(COLNAME) as ALIASNAME
    into @SOMEVAR

  -- export results into file/path.txt
  select * from TABLENAME
    into outfile 'file/path.txt'
    fields termianted by 'SYMBOL'
    lines terminated by 'SYMBOL'
    escaped by 'SYMBOL'

  -- export an object into file/path.jpg
  select SOMEIMAGE
    into dumpfile 'file/path.jpg'
    from TABLENAME

  -- add a final sum for COLNAME2
  -- at the end of the result sets
  select...
  group by COLNAME1, COLNAME2 with rollup

  -- select the row having the max COLNAME value
  -- max() can be any aggregate function
  select...
    group by...
    having max(COLNAME)

  -- order the results set by an expression
  -- or by specifi column(s)
  select...
    order by COLNAME1 * COLNAME2 DESC
    order by COLNAME1, COLNAME2 ASC

  -- retrieve the first 5 records
  -- or skip the first 10 records, and retrieve the next 5
  select...
    limit 5;
    limit 10, 5;

  -- send the results to the specified procedure
  select...
    procedure analyse(10, 255);

  -- run pi() 1000 times
  select benchmark(1000, PI())

  -- merge two tables
  select...
    from TABLENAME...
    union
      select...
      from OTHERTABLENAME...
    order by... -- good to have

  -- limit the first select statement to 10 records
  -- the second select statement is unlimited
  (
    select...
    limit 10
  )
    union
  ( select... )
    order by...

  -- retrieve a set of records limited by some number
  -- then issue found_rows()
  -- to get the total if there was no limit clause
  select sql_calc_found_rows
    COL1, COLX...
    limit..;
  select found_rows();

  -- retrieve the identification number assigned to the last entered row
  select last_insert_id();

  -- total number of records modified
  -- by the last executed statement
  select row_count();

  -- update every column
  update TABLENAME
    set COLNAME = 'value',

  -- single column
  update TABLENAME
    set COLNAME = 'value'
    where COLNAME = 'value';-- update a record in a table

  -- update table1
  -- data from table2 is used to determine which record
  update TABLE1 join TABLE2 using (COLNAME)
    set SOMECOL = SOMEVAL
    where OTHERCOL = OTHERVAL;

  -- create a user variable
  -- use it as a column in a results set
  -- increments by 1 for each record
  set @SOMEVAR = 0;
  select @SOMEVAR := @SOMEVAR + 1 as row
    ...

  -- set the transaction environment
  set session transactioin isolation level read committed;
  start transaction;
  ...


  -- import from file
  load data infile 'path/to/file.txt'
    into table TABLENAME
    fields terminated by '|' -- could be a comma/anything
    lines terminated by '\n' -- could be \n\r/anything

  -- import from file
  -- with low priority and ignoring errors/warnings
  -- ignores the first line in the file
  -- specify columns at the end
  load data low_priority infile 'path/to/file.txt' ignore
    into table TABLENAME
    fields terminated by '|'
    ignore 1 lines
    lines terminated by '\n'
    (colname1, etc...)

  -- use a variable to set the value of some other column
  load data low_priority infile 'path/to/file.txt' ignore
    into table TABLENAME
    fields terminated by '|'
    ignore 1 lines
    lines terminated by '\n'
    (colname1, @somecol etc...)
    set @somecol = @somecol * 2


  -- analyze a select statement
  explain select...

  -- for the last executed statement
  show count(*) errors; -- total errors
  show warnings; -- warnings

  -- get help for a cmd
  \help -- see all cmds
  \h CMD
  \h 'CREATE USER'
```

# SERVER/TABLE ADMINISTRATION

## STATEMENTS server/table administration

- `alter server`
  - see `database and table schema`
- `analyze table`
  - stores information that can be useful later when the mysql optimizer chooses the order for consulting indexes during a query
  - equivalent to using `myisamchk analyze`
  - for `innodb`
    - places a write lock on tables
  - for `myisam`
    - places a read lock on tables
  - `no_write_to__binlog` | `local`
    - do not record this statement in the binlog
    - else this statement will also be executed on slave servers if replication is enabled
  - fields
    - `table` the database and table name
    - `msg_type` status|error|info|warning
    - `msg_text` depends
  -
  - requires `select` and `insert` privs
- `backup table`
  - deprecated
  - does not work reliably
- `cache index`
  - tells mysql to cache the given table indexes to a specific index cache, which can be created with the `set global` statement
  - see `key_buffer_size`
  - as long as the cache exists all queries by al users will use this cache
  - used only on `myisam` tables
- `check table`
  - check tables for errors
  - supports `myisam`, `innodb`, `archive`, `csv` engines
  - `changed`
    - checks only tables tht have been changed since the last check
  - `quick`
    - checks tables for errors but wont scan individual rows for linking problems
  - `fast`
    - checks only tables that have not been closed properly
  - `medium`
    - deterimes the key checksum for the rows and compares the results against the chedcksum for the keys
      - this option also checks rows to ensure that links were deleted properly
  - `extended`
    - thoroughly cheecks each row for errors
      - takes a long time to complete
  - `for upgrade`
    - checks a table against the version of mysql in use
      - if table created from an earlier version of mysql and there have been changes to the current version that make the table incompatible
        - only then will it execute an extended check for errors
        - if successful
          - it will mark the table as checked and future scans will not recheck the table
- `checksum table`
  - returns a `myisam` tables live checksum value
    - the value can be optionally maintained to improve a tables repairability
      - see `create table` or `alter table` setting `checksum` to 1
  - `quick`
    - if available, the live checksum table will be returned
    - if not, null will be returned
    - use this when the table is probably fine
  - `extended`
    - instructs the server to check each row
    - use this option only as a last resort
  - the `checksum` value can be different if the row format changes which can happen between versions of mysql
- `create server`
  - see `database & table schema`
- `flush` see `user administration`
- `kill`
  - flag a connection/connections running query for termination
  - see `show processlist` to obtain a connection thread identifier for us in this statement
  - `connection` terminate the connection
  - `query` terminate the query associated with a given `connection`
  - never
    - `kill` a `repair table` or `optimize table` query
      - it could corrupt a `myisam` table
- `load index into cache`

  - preload a tables index into a given key cache for a `myisam` table

- `lock tables`
  - lock the given tables for exclusive use by the current connection thread
  - `read` allows the lock tables to be read by all threads
    - does not allow writes to the tables even by the thread that locked them
  - `read local` allows all threads to read the tables that are locked while the locking connection can execute insert statements
    - direct data manipulation by cmd line utilies should be avoid until the lock is released
  - `write`
    - prohibits other threads from reading fromm or writing to locked tables
      - reads and writes by the locking thread are permitted
    - has priority of `read` locked tables
  - giving a locked table an alias forces all SQL queries by the lockign thread to use the alias
- `optimize table`
  - optimize the data contained the table
  - it temporarly locks the tables involved while optimizing
  - see `no_write_to__binlog`
  - useful when
    - many rows have been deleted from a table
    - to repair some row problems and sort indexes
  - run this statement periodically for tables with several variable-character-width columns
    - `varchar` `blob` `text`
  - supported by `myisam` `bdb` and `innodb`
    - may work with other tables if `--skip-new` of `--safe-mode` are set when `mysqld` is started
  - see `no_write_to_binlog`
- `repair table`
  - use this statement to repair corrupted `myisam` tables
  - before using this statement make a backup of the table
    - if the table coontinues to havve problems there may be other problems (e.g file system issues) that you should consider
  - see `no_write_to_binlog`
  - `quick` isntructs mysqlk to repair the table indexes only
  - `extended` rebuilds the indexes one row at a time
    - takes longer but is more effective especially with rows containing duplicate keys
    -
- `reset`
  - see `user administration`
- `restore table`
  - restores a table that was saved to a filesystem by the `backup table` statement
    - the absolute path to the directory containing the backup files must appear within quotes
    - if the tables already exist in the database an error will be genreated and the restore will fail
    - if successful the indexes willl automatically be rebuilt
      - ths is necessary because the `backup table` statement doesnt backup the index files
- `set`
  - see `crud`
- `show engine`
  - display the details of the status of given storage engine
  - provides information on the table and record locks for transactions, waiting locks, prending requests, buffer statistics, and logs related to the engine
  - supports `innodb` `ndb` `ndbcluster`
  - `mutex` option only supported by `innodb`
  - `ndb` returns empty results set if thhere are no operations at the time
- `show engines`
  - lists the table types or storage engines available for the version of mysql running on the server
- `show open tables`
  - display a list of tables that are open, i.e. that are in the table cache.
    - does not include anyt emporary tables
    - `like` used to limit the tables displayed by a naming pattern
    - `where` used to refine the results set
- `show plugins`
  - display a list of plugins on the server
- `show processlist`
  - displays a list of connection threads running on the mysql server
  - requires the `super` privs to be able to see all threads
    - else only threads related to the current connection are shown
    -
- `show status`
  - displays status information and variables from the server
- `show table status`
  - see databas & table schema
- `show variables`
  - see database & table schema
- `unlock tables`
  - unlock tables that were locked by the current connection with the `lock tables` statement or by `flush tables with read lock`
  - implicitly commits any active transactions if any tables were lunlock tables locked with `lock tables`e

## FUNCTIONS server/table administration

- `connection_id()`
  - returns the mysql connection/thread id number for the mysql session
- `get_lock()`
  - attempts to get a lock by name for a number of seconds
  - on success returns 1
  - on failure
    - due to timeout returns 0
    - due to error returns null
  - see `release_lock()`
  - a lock is released via `release_lock()` or issuing another `get_lock()`
- `is_free_lock()`
  - determine whether the name of the lock given in parantheses is free and available as a lock name
  - if the lock name is in use, it returns the connection identifier of the client holding the lock
  - returns 1 if the lock name is freen
  - returns 0 if its not (because its in use by another client)
  - returns null if there is an error
- `is_used_lock()`
  - determines whether the name given is already in use as a lock name
  - if th elock name is in use returns the connection identifier of the client holding the lock
  - returns null if its not in use
- `release_lock()`
  - releases a lock created by `get_lock()`
  - returns 1 if successfull
  - returns 0 on failure
  - returns null if the specified lock does not exist
- `uuid()`
  - returns a uuid, a 128-bit number composed of five hexadecimal numbers
  - it is unique per invocation and is based ont he values that are borth temporal and spatial
- `version()`
  - returns the mysql server version

```sql
  -- get information about a table
  analyze table TABLENAME;

  -- create a new cache
  -- then use it to cache an existing index
  set global NEWCACHENAME.key_buffer_size = 100*1024;
  cache index INDEXNAME in NEWCACHENAME;

  -- check the table for medium type errors
  check table TABLENAME medium;

  -- retrieve a tables live checksum
  checksum table TABLENAME;

  -- retrieve an ID then kill it
  show processlist \G;
  kill query 1234;

  -- preload table(s)index(es) into cache
  load into cache TABLENAME;

  -- lock multiple tables
  -- table1 no writing
  -- table2 no reading or writing
  -- table3 no writing except by the current connection
  lock tables
    TABLENAME1 read,
    TABLENAME2 read local,
    TABLENAME3 as POOP low_priority  write;

  -- optimize tabless
  optimize local table TABLENAME1, TABLENAME2

  -- repair a table
  repair table TABLENAME quick extended;

  -- restore a table
  restore table TABLENAME1, TABLENAME2 from 'file/path'

  -- list all engines
  show engines \G;

  -- list of tables matching wildcard
  show open tables
  from DATABASENAME like '%POOP%'

  -- list all plugins
  show plugins;

  -- list all plugins/variables matching poop
  show status like '%poop%'

  -- retrieve the mysql connection/thread ID
  -- for the current mysql session
  select connection_id();

  -- attempt to create lock for 10 seconds
  select get_lock('SOMENAME', 10)

  -- see if a lock name is free/not in use
  select is_free_lock('SOMENAME')

  -- see if a lock name is in use
  select is_used_lock('SOMENAME')

  -- release a given lock
  select release_lock()
  do release_lock('SOMENAME') -- same thing

  -- create a UUID
  select uuid();

  -- retrive the ysql server version
  select version();
```

# REPLICATION

- see important files
- see security
- replication notes
  - primarily a matter of configuring mulitple servers to the one where users submit their queries
  - physically setup a `slave server` and configure mysql on boht servesr appropriately to begin replication
  - supports
    - data backups making clean backups without having to bring the down server
    - load balancing
    - resiliency
- what not to do
  - performing a backup while a server is running can slow down a system
  - backups made on active servers can result in inconsistent data because a related table may be changed while another is being copied
  - taking down the eserver ensures consistency of data but interrupts syql service to users
- `master server`

  - houses the data and handles clietn requests
  - the server logs all data changes toa binary log, locally
  - the master in turn informs another mysql server (the `slave server`)

- `slave server`

  - see `important files`
  - see `security`
  - contains a copy of the masters databse and of any additions to its binary
  - the slave in turns makes the same changes to its databases
  - the slave can either reexecute the masters sql statements locaally or just copy over changes to the masters database
  - slave process
    - listens for communications from the master than through an I/O thread for new entries in the masters binary log indicating changes to the masters data
      - the master does not transmit data unless requested by the slave
      - instead after each update to the master, the master will
        - it looks to see whetether any salves are connected and waiting fo rupdates
        - the master then pokes the slave to let it know that an entry has been made to its binary log in case its interested
      - the slave will ask the master to send entries starting froom the position identification number of the last log file entry the slave processed
      - when the slave compares the entries in the `relay.log` to the data in its databases
        - if comparison reveals any inconsistency the replication process is stopped and an error message is recorded in the slaves error log `error.log`
          - the slave will not restart until it is told to do so
          - after you have resolved the discrepancy you can isntruct the slave to resume replication
  - never makes direct changes to its data
    - instead it uses an sql thread to execute the new sql statements recorded in the `relay.log`

- backup method
  - setup a separate server to be a slave, and then once a day/e.g. turn off replication to make a clean backup of the slave servers database
  - when complete replication can be restarted and the slave willa utomatically query the master for changes to the masters data that the slave missed while it was offline

## PROCESS replication

- steps
  - create replication user accounts
  - configure servers
  - load the backup-databases onto the slave servers
  - start replication
- sql statements that change data are recorded in a binary log (`bin.log`) on the master server as it executes them
  - data-changing statements e.g.
    - `insert` `update` `delete`
  - schema-manipulation statements e.g.
    - `create table` `alter table` `drop table`
- the master records a log position id number used to determine which log entries the master should relay to the slave
  - planned downtime for making a backup of the slave
  - slave has difficulty staying connected to the master du eot networkign problems
  - slave falls behind because the master has a heavy load of updates in a short period of time
- slave retrieves updates and records those updates in its `relay.log` file
- after issueing statements in the `relay.log` file, records its new position ID number in the `master.info` file

### REPLICATION STATES replication

- recommended to develop a script to check that repliation is running on the slave not stalled and to notify you if its not running
- see `show processlist`

  - use on the master and slave
  - at least one line will be related to replication

  - `command` column
    - `binlog dump` master binlog dump thread states
      - indicates a binary log thread on the master server
        - the binary log thread is only for providing information about the binary log to the slave
    - `connect` slave i/o thread states
      - value on the slave server indicates an i/o thread

#### BINLOG DUMP THREAD STATES replication

- `has sent all binlog to slave; waiting for binlog to be updated`
  - most common status for a slave connection on the master
  - the master is doing nothing regarding replication
    - it has already sent all entries jrequested and is now waiting for another even t to occur that wil lcause its binary log to be updated
- `sending binlog event to slave`
  - after the binary log has been updated the master informs the slave that one or more new entries have been made
    - if the slave then requests thoses entries the master enters this state
- `finished reading one binlog; switching to next binlog`
  - if a slave has been offline for awhile the master may have flushed its log in the interim and start a new one
    - when a slave requests log entries that span more tha one log file as the master switches from one file to the next it enters this state
- `waiting to finalize temrination`
  - once the master has completed the process of updating a slave the master shows this status as its closing the binary log file and winding down the communication with the slave

#### SLAVE I/O THREAD STATES replication

- `connecting to master`
  - indicates that the slave i/o thread is attempting to conenct to the master
    - if it cant connect it may stay in this state for a while as it retries
- `checking the master version`
  - after the slave connects to the master it compares versions of mysql with the maste rto ensure compatibility
- `registering slave on the master`
  - after the slave conencts to the master it registers itself with the master as a replication slave server
    - during this process the `binlog dump` state will be `has sent all binlog to slave; waiting for binlog to be updated`
- `requesting binlog dump`
  - enters this state
    - when the slave has been informed of changes to the master binary log it enters this state to request the new entries
    - when it first connects to a server either for the first time or having been disconnected for awhile
  - on the master side youll see `sending binlog even tot slave`
- `waiting to reconnect after a failed llg binlog dump request`
  - if the request for new entries fails to be received from the master the slave enters this state as it waits to be able to connect to the master periodically
    - the timeout is configured via `--master-connect-retry`
      - default is 60 seconds
- `reconnecting after a failed binlog dump request`
  - if the slave failed to stay conencted tot he master while trying to retrieve entries to the masters binary log this state indicates that the slave is trying to reconnect
  - if it fails to connect again it will go the previous state and wait to retry
  - by default it will try 60 times before stopping
    - see `--master-connect-retry`
- `waiting for master to send event`
  - the most common state, unless yoru server is very busy
  - the `sql thread` is currently connected to the master and is waiting for the master to send it binary log updates
  - if there is noa ctivity for awhile the connection will time out
  - the number of seconds that will elapse is determined by `slave_net_timeout`
  - a timeout is considered a lost connection for the slave
- `queueing master event to the relay log`
  - occurs whenn the slave i/o thread has received changes to hte masters binary log form the master is writing the sql statements and the related information to the slaves `relay.log`
  - once its done the slave sql thread will read the relay log and execute the new sql staements writtent to the log
  - on the sql thread this is the `reading event formm the relay log`
- `waiting to reconnect after a failed master event read`
  - if the connection to the slave failed while reading an event (represented by an entrhyy int he masters binary log) the slave will wait in this state for a certain amount of time before attempting to recconect to the master
  - the number of seconds that slave will wait before retrying is found in the `master-connect-retry` variable
- `reconnecting after a failed master event read`
  - this state ocurs after the slave i/o thread loses its connection to the master while receiving an entry from the master binary log
- `waiting for the slave sql thread to free enough relay log spave`
  - if the sql thread isnt processing the entries int he relay log fast enough and the backlog has caused the relay log files to become too large the io thread will enter this state
- `waiting for slave mutex on exit`
  - when the io thread has been terminated, it enters this state as it closes
  - `mutex` standards for muttual exclusion
  - the sql thread gets the `mutex` to prevent any other slave replication activities so that replication can be shut down without loss of data or file corruption

#### SLAVE SQL THREAD STATES

- `has read all relay log; waiting for the slavei/o thread to updaate it`
  - common state for the slave sql thread unless you have a very busy database system with data constantly being updated
  - this state indicates that the slaves sql thread has read all of the entries in its relay log and has executed all of the sql statements that it contains
  - it is waiting for the slaves i/o thread to add more entries to the relay log file
- `reading event from the relay log`
  - when an entry has been made to the relay log by the slaves io thread, the slaves sql thread enters this state
  - in this state it is reading the current relay log file and is executing the new sql statements that it contains
    - i.e. the sql thread is busy updating the slaves databases
- `waiting for slave mutex on exit`
  - when th sql thread has finished updating hte slaves databases it enters this state while it is closing the relay log file and terminating communications with the slave server
  - the sql thread getrs the mutex to prevent any other slave replication activities so that replication can be shut down without loss of data or file corruption
  - this state is displayed _SO THAT YOU KNOW THE THREAD IS LOCKED_
    - if yu see this state you may want to run `myisamchk`, a similar utility, or `repair table` statement on the tables thatg accessed at the time of the lockup

### USER ACCOUNT replication

    - setup a user account(s) dedicated to replication on both the master and the slave
      - best not to use ane xisting account for security reasons

### CONFIGURING SERVERS replication

- add the following lines to the mysql configuration file on the master and slave servers
  - `my.cnf` or `my.ini`
  - `server-id` abritrary number used to identify the master server in the `bin.log` and in communications with `slave server`
    - do not use 0
    - a unique number should be assigned to each slave
  - `log-bin` instructs mysql to perform binary logging to the path and file given
    - the directory must exist and the user `mysql` is the owner, or atleast has permission to write to the cirectory
    - to use defaults, give the `log-bin` option without the equals sign and without the file pathname
  - see sh block below for example

### COPYING DATABASES replication

- with an existing server that already contains data
  - make an initial backup of the databases and copy the backup to the slave server
    - create a server snapshot - you need to shutdown the server and make a copy of the data
  - see `mysqldump`

### STARTING REPLICATION replication

```sql
  -- connect to the master and get the changes it missed since the last backup
  start slave

  -- only start the sql_thread
  -- specify exact master log file and the log position
  -- useful for debugging issues
  -- reverting to a particular position in a log file
  -- to undo some changes causinng errors
  -- until clause is ignored if sql_thread is already running
  -- thus until clause must be executed with --skip-slave-start
  -- in the slave configuration file
  start slave SQL_THREAD
  until master_log_file  'relay.123456'
  master_log_post = 123;
```

### BACKUPS replication

- make a backup of data via a `slave server`

```sql
  -- stop the slave server from replicating
  stop slave
```

## STATEMENTS AND FUNCTIONS replication

- `change master to`

  - set variables on the slave server related to its connection with the master
    - not recommended to set these variables in the configuration file (even tho you can)
      - the `slave server` will read the file only the first time you start up the slave for replication via the `master.info` file
      - the only time it changes the `master.info` file is when you expclitity tell it to via `change master to`
  - you should issue `stop slave` if the `slave server` is currently running before issueing this statement
  - cert options
    - `master_ssl_verify_server_cert`
      - `--ssl-verify-server-cert`
  - slave options
    - `master_host`
    - `master_port`
    - `master_user`
    - `master_password`
    - `master_Connect_retry`
  - log file options
    - `master_log_file`
    - `master_log_pos`
    - `relay_log_file`
    - `relay_log_pos`

- `load data from master`
  - deprecated
- `load table...from master`

  - deprecated

- `master_pos_wait()`

  - useful to synchronize mysql master and slave server loging
  - causes the master to wait until the `slave server` has read and applied all updates to the position it he master log
  - returns the number of log entries that were made by the slave while the master was waiting

- `purge master logs`

  - deletes the binary logs from a `master server`
  - keyword `master` is `synonmyous` with `binary` and either can be used
  - make sure to backup the log files before running this statement via `show slave status` on each slave and `show binar logs` on the master

- `reset master`
  - deletes all the `bin.log` files on the master server and will begin numbering the nuew file at `000001`
    - the `bin.log` files are located in the directory indicated by the value of the `--log-bin` option of `mysqld`
    - see `show master logs` to get a list of log files
- `reset slave`

  - use this statement within or after the `reset master statement that sets the `binlog` index back to 1

- `set global sql_slave_skip_counter`

  - skips the given number of events from the master
  - it is used for fine tuning a recovery
  - it returns an error if the slave thyread is running

- `set sql_log_bin`

  - enables/disables binary logging of sql statements for the current connection
    - it does not affect logging for the activites of other threads and is reset to the default value when the connection is closed
      - 0 - disable binary logging
      - 1 - enable binary logging

- `show slave status`
  - displays information (list of vars) on the slave thread
  - if any slave is reading the oldest file in the returned list, you may want to purge it
  - see `expire_logs_day` to shorten the amount of time logs are kept before being purge
- `show binlog events`
  - displays the events in a binary log file
  - `in` spcify a particular log file
    - else the current log file is used
  - this statement is very slow on medium-to-large log files and can be very resource-intensive on the server
    - use the `from` and `limit` clause to specify the exact range
  - see `show master logs` to get a list of all binary log files
  - see `mysqlbinlog` for a more robust alternative
- `show binary logs`
  - displays a list of binary logs created by the master msql server int he filesystem directory
  - synonymous with `show master logs`
- `show master logs`
  - see `show binary logs`
- `show master status`
  - displays information on the status of the binary log file that is being used currenlty on the msyql server
- `show slave host`

  - displays a list of slave servers for the master server
  - slaves must be started with the `--report-host=slave` option in order to be shown
  - fields
    - `server_id` the server id number for the slave server which is set by the `--server-id` option preferably in the slaves options file
    - `host` the hostname of the slave server which is set by the `--report-host` option on the slave
    - `port` the port on which the slave is listening for replication this defaults to 3306 but can be set with the `chaange master to` statement
    - `master_id` the server id number of the master its set ont he master with teh `--server-id` and converselhy on the slave with the `change master to` option

- `start slave`

  - connect to master and get changes since last backup
    - starts both the i/o thread and the execution thread
  - the slave should thereafter stay current and continuously interact with the master
  - requires `super` privs
  - on success
    - no message is returned, yay!
  - on failure
    - slave-to-master connection may fail
    - sql thread processing entries received from master may fail
    - no message is returned, WTF?!?!?!
      - the client that started the slave will not be informed
        - of the failure
        - nor of the subsequent termiantion of the `slave server` thread
        - you have to read the slave server logs
  - initiating threads
    - `sql_thread` start the sql thread
      - reads the relay log file and then executes the statements
    - `io_thread` start the i/o thread
      - reads sql queries from the `master server` and records them in the relay log file
    - default is to start both unless one of the above is given
  - `master_log_pos`
    - limits the reading of the threads to a specific point
  - `master_log_file`
    - specifies the log file to retrieve statements from
  - `relay_log_file`
    - specifies the relay log file to retrieve statements from

- `stop slave`
  - stops a `slave server` thread from replicating
    - the slave knows the position where it left off in the binary log of the `master server` and will record that information in the `master.info` file
  - if the slave also supports handling user requests for load balancing it will redirect those requests back to the master or to other slaves
  - `io_thread` stop the i/o thread
  - `sql_thread` stop the sql thread
  - requires super privs

```sh
  # configure replication
  # add to both master and slave server `my.cnf` files
  # the innodb lines resolve problems that can occur
  # with transactions and binary logging
  [mysqld]
  server-id = 1
  log-bin = /var/log/mysql/bin.log
  innodb_flush_log_at_trx_commit = 1 # only for innodb
  sync-binlog = 1 # only for innodb

  # configure replication
  # add to each slave server
  [mysql]
  server-id = 2
  # set logs and related index files
  # starts binary logging like on the master server
  log-bin = /var/log/mysql/bin.log
  log-bin-index = /varlog/mysqllog-bin.index
  log-error = /var/log/mysql/error.log
  # defines relay log that records each entry
  # in the master servers binary log
  relay-log = /var/log/mysql/relay.log
  # records the most recent position in the masters bin.log
  # that should be executed next
  relay-log-info-file = /var/log/mysql/relay-log.info
  relay-log-index = /var/log/mysql/relay-log.index
  # necessary only if you expect the load data infile
  # to be executed on the server
  # specifies the temp directory for these files
  slave-load-tmpdir = /var/log/mysql
  # prevents the slave fromm replicating until you are ready
  skip-slave-start
  ...

```

```sql
  -- user account for replication
  -- enter identical statements on the master and slave(s)
  -- only changing the hostname for each
  -- replicate slave - priv for a user to replicate a server
  grant replication slave,
    replication client on *.*
    to 'replicant'@'slave_host' identified by 'somepw'

  change master to master_host = 'HOSTNAME or IP'
  change master to masteR_prot = 3306
  change master to master_user = 'replicant'
  change master to master_password = 'SOMEPW'

  -- force the master to wait for the slave to finish updating
  select master_post_wait(LOG_FILENAME, LOG_POSITION, TIMEOUT)

  --- delete all log files up to the one indicated
  purge master logs to 'log-bin.123456'

  -- delete all log files up until but not including
  purge master logs before '2019-11-11 7:00:00'

  -- reset the master and slave server
  reset master, slave

  -- skip 100 events from the master
  set global sql_slave_skip_counter = 100;

  -- disable binary logging
  set sql_log_bin = 0;

  -- from whatever the current file is
  show binlog events;
  -- display events in this particular log file
  show binlog events in 'log-bin.123456' \G
  -- show binlog events starting at a particular position
  -- and limited to a number of lines
  show binlog events in 'PATH/TO/LOGFILE'
    from POS_NUMBER limit 10,100

  -- list of binary logs
  show binary logs;

  -- information on the status of the bin.log file
  -- currently in use by the master
  show master status;

  -- list of slave servers for the master server
  show slave hosts

  -- list of vars for the slave thread
  show slave status;
```

# ROUTINES

- sets of sql statements stored in the database for easier and more consistent use
- build your own functions based on existing sql statements and built in functions allowing a user to pass values to these user defined functions as well as receive values in return
- `events` internal methods to schedule th eexecution of sql statements or stored procedures

## STATEMENTS routines

- `alter event`
  - alter an existing scheduled mysql event
  - change the time when the schedule sql statement will execute or other aspects of its upcoming execution
  - `event` the name of a previously scheduled event but has yet to be completed, or was completed but preserved by the server
    - to change the name of the event drop it then create it
      - see `drop event`
      - see `create event`
      - see `show create event`
  - `definer` change the mysql user and host through which mysql executes the event
  - `on schedule at` change the time and data that form the basis for running the event
    - timestamp format - yyy-mm-dd hh:mm:ss
      - can be a string, time function, or just `current_timestamp`
    - `interval` specify a relative time
      - see `create event` for allowable intervals
    - `every` make a recurring event
      - `starts` specify a start time
      - `ends` specify an end time
- `alter function`
- `alter procedure`
- `alter trigger`
- `begin...end`
- `call`
- `close`
- `cretae event`
- `create function`
- `create procedure`
- `create trigger`
- `declare`
- `delimiter`
- `drop event`
- `drop function`
- `drop prepare`
- `drop procedure`
- `drop trigger`
- `execute`
- `fetch`
- `open`
- `prepare`
- `show create event`
- `show create function`
- `show create procedure`
- `show events`
- `show function code`
- `show function status`
- `show procedure code`
- `show procedure status`
- `show triggers`
