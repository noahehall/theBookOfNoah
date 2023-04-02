# TLDR

everything about postgresql

- TODO
  - find the other postgres doc(s) and put it all in here
  - research
    - User-defined types
    - Table inheritance
    - Sophisticated locking mechanism
    - Foreign key referential integrity
    - Views, rules, subquery
    - Nested transactions (savepoints)
    - Asynchronous replication
    - Tablespaces
    - Point-in-time recovery
  - read
    - <https://www.enterprisedb.com/blog/8-cool-interesting-facts-things-postgresql-can-do>
    - <https://talkpostgresql.com/hide-column-values-postgresql-33>
    - <http://blog.codinghorror.com/youre-probably-storing-passwords-incorrectly/>

## links

- postgres
  - ref
    - [managing users and roles](https://aws.amazon.com/blogs/database/managing-postgresql-users-and-roles/)
    - [version 14 docs](https://www.postgresql.org/docs/14/index.html)
    - [insert into](https://www.postgresql.org/docs/14/sql-insert.html)
    - [password authentication](https://www.postgresql.org/docs/14/auth-password.html)
  - tuts
    - [create db examples](https://www.guru99.com/postgresql-create-database.html)
    - [create db if it doesnt exist](https://stackoverflow.com/questions/18389124/simulate-create-database-if-not-exists-for-postgresql)
    - [create table if ot exists](https://stackoverflow.com/questions/1766046/postgresql-create-table-if-not-exists)
- docker
  - [postgres docker docs](https://hub.docker.com/_/postgres)
- categorize the following
  - [accessing a DB](https://www.postgresql.org/docs/current/static/tutorial-accessdb.html)
  - [postgres cheatsheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)
  - [general sql cheatsheet](https://gist.github.com/janikvonrotz/6e27788f662fcdbba3fb)
  - [getting started postgresql server mac osx](https://www.codementor.io/devops/tutorial/getting-started-postgresql-server-mac-osx)
  - [postgresql tut](http://www.postgresqltutorial.com/)
    - todo sections: 4, 5, 6, 9, 10, 11, 12, 13, 14, 15,
  - [setup postgresql on ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
  - [postgres roles and permissions](https://www.digitalocean.com/community/tutorials/how-to-use-roles-and-manage-grant-permissions-in-postgresql-on-a-vps--2)
  - [formatting CLI responses](https://stackoverflow.com/questions/9604723/alternate-output-format-for-psql)
  - [managing db tables](https://www.digitalocean.com/community/tutorials/how-to-create-remove-manage-tables-in-postgresql-on-a-cloud-server)
  - [upsert tut](http://www.postgresqltutorial.com/postgresql-upsert/)

## basics

- if supporting rds on aws, make sure your local postgres version matches the available rds versions

### terminology

- PostgreSQL: general purpose and object-relational database management system, the most advanced open source database system
  - allows you to add custom functions developed using different programming
  - define your own data types, index types, functional languages, etc.
  - develop a custom plugin to enhance it to meet your requirements e.g., adding a new optimizer.
- Multi-version concurrency control (MVCC):
  - known as snapshot isolation in Oracle

### server and db objects

- server service: You can install multiple PostgreSQL servers on a physical server using different ports and having different locations to store data.
- database: container of other objects such as tables, views, functions, indexes, etc
- table: used to store the data
- table inheritance: a table (child table) can inherit from another table (parent table) so when you query data from the child table, the data from parent table is also showing up.
- schema: logical container of tables and other objects inside a database.
  - Each PostgreSQL database may have multiple schemas.
- tablespace: where PostgreSQL stores the data
  - enables you to move your data to different physical location across drivers easily by using simple commands.
  - pg_default: for storing user’s data
  - pg_global: for storing system data.
- view: a virtual table that is used to simplify complex queries and to apply security for a set of records.
  - updatable views:
- function: a block reusable SQL code that returns a scalar value of a list of records
- operator: a symbolic function.
- cast: enable you to convert one data type into another data type.
  - You can also create your own casts to override the default casting provided by PostgreSQL.
- sequence: used to manage auto-increment columns that defined in a table as a serial column.
- extension: wrap other objects including types, casts, indexes, functions, etc into a single unit.
  - The purpose of extensions is to make it easier to maintain.
- subquery: a query nested inside another query, e.g. in the where clause with the in operator

### installing on buntu 18.04

- install commands

```sql
  sudo apt update
  sudo apt install postgresql postgresql-contrib
```

- post install
  - installation process creates a user account called `postgres` that is associated wiht the default postgres role
    - in order to use postgres, you can log into that account

```sql
  -- option 1: switch over to postgres account via intermediary bash shell
    sudo -i -u postgres -- switch to postgres linux user
    psql -- access postgres prompt
    \q -- exit out of postgresql prompt

  -- include flag E
    sudo -i -u postgres psql -E
  -- option 2: accessing postgres prompt without switching accounts via sudo
    sudo -u postgres psql

-- setup formatting so responses fit to the width of the screen
  \x auto
```

## quickies

### general

```sh
  # pgadmin
  # ^ right click everything to see the menus
  # ^ you prolly cant remember where the fk to find
  # ^^ servers > databases > shemas > public > tables > TABLENAME

  # quick docker on postgres for local development
    # get the IP of the running postgres instance
    docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_NAME
    # connect to the running container
    docker exec -it CONTAINER_NAME /bin/bash

    # run a shell script in the running docker container
    docker exec -it CONTAINER_NAME /bin/bash path/to/some/file/in/container/poop.sh
    # specifying options via docker-compose file
      docker compose \
        -f ./somedir/docker-compose.yml \
        --env-file ./.env \
        CMD
        # ^ usefule cmds see # docker compose help
          up # start all services
          start SERVICE_NAME # start a specific servic in the file
```

### psql

```sql
-- quick psql cmds
psql -U somename -d somedb -- connect to db as user
-- once connected
\x -- toggle enhanced view for display query results
\a -- toggle aligned/non aligned column output
\s -- display command history
\s /path/to/file -- save cmd history to file
\i /path/to/file -- execute psql cmds from file
\? -- list all available cmds
\h CMD -- get help on a specific cmd
\timing -- toggle the display of query execution time
\g -- execute previous command


-- quick admin-level cmds
-- user admin
\du -- List users
\du __username__ -- List a username if present.
create role __test1__ -- Create a role with an existing username.
create role __test2__ noinherit login password __passsword__; -- Create a role with username and password.
set role __test__; -- Change role for current session to __test__.
grant __test2__ to __test1__; -- Allow __test1__ to set its role as __test2__.

-- db admin
select version(); -- show postgres version
\c DBNAME -- Connect to a database
\c dbname username -- connect to db as user
\l -- list all dbs
\dn -- list all schema of current db
\df -- list all available functions of current db
create database NAME -- create
alter database dbname rename to newname -- rename db
pg_restore -U USERNAME -d DBNAME -l /path/to/db_data.tar -- load data into a db

-- table admin
-- you generall always want to prefix shiz with schemaName.
select pg_relation_size('dbname'); -- returns the size of the table in bytes, not included indexes or additional objects.
select pg_total_relation_size('dbname'); -- returns the size of the table in bytes, including indexes or additional objects.
SELECT pg_size_pretty (pg_relation_size('actor')); -- convert bytes to kb/mb/gb/tb
\dt -- list all tables in current schema
\dt+ -- extended info
\dt schemaName.*
\d+ -- describe table
\dv -- list all views
```

### sql

```sql
-- copy some file into a table
copy schemaName.TableName (colX, colY) from '/tmp/someFile.csv' with (format csv, delimiter ',', header false);

-- inserts
-- Strings always have to be surrounded by single quotes (');
```

## reference

### tables

- temporary table: exists for the duration of a db session

#### tables: CRUD

- primary key: field(s) used to uniquely identify a record
  - default name is tablename_pk
  - Technically, a primary key constraint is the combination of a not-null constraint and a UNIQUE constraint.
  - A table can have one and only one primary key.
  - good practice to add a primary key to every table.
- foreign key: field(s) in one table record that uniquely identify the primary key of a record in another table
  - default name is tablename_colname_fk
  - referencing/child table: the table that contains the foreign key
  - referenced/parent table: the table whose primary key is referenced by the child table
  - a foreign key constraint maintains referential integrity between child and parent tables
- column keywords:
  - primary key (col1, colX)
    - can be one/more columns
  - not null
- data types: serial, numeric, int,
  - character
    - char(n) - fixed length blank padded
    - varchar(n) variable length
    - text
      - text has unlimited length
  - numeric:
    - integers
      - smallint int serial
        - int4 | int8
        - serial is auto generated & incremented
    - floating point
      - float(n) real float8 numeric numeric(p,s)
        - float(n) where n = number of decimal places
        - numeric(p,s)
          - p = number of digits before the decimal
          - s = number of digits after the decimal
  - temporal/time
    - date time timestamp timestampz interval
      - timestampz = stores both timestamp and timezone
      - interval = periods of time
  - bool:
    - truthy: true, t, yes, y, 1
    - falsy: false, f, no, n, 0
  - arrays: array of other data types, e.g. for storing days of week
  - json: plain json data that requires reparsing later on
  - jsonb: json in binary format for faster processing but slower insert
    - supports indexing
  - uuid: store uuid values defined by RFC 4122
    - guarantee a better uniqueness than serial
    - can be used to hide sensitive data
  - box: rectangular box
  - line: a set of points
  - point: geometric pair of numbers
  - lseg: line segment
  - polygon: closed geometric
  - inet: ip4 address
  - macaddr: a mac address

  ```sql
    -- creating tables
      create table tablename (
        col1 TYPE keyword1 keyword2 keywordX,
        col2 etc,
        col3 primary key, -- default name is tablename_pk
        constraint NAME primary key(col4) -- give the pkey a name
        colX etc,
        foreign key(col1) references othertablename(colid) -- this gives the foreign key a name
        col3 TYPE references othertablename(colid2) -- references keyword defines the foreign key constraint, doesnt give the foreign key a name
        col4 type references othertablename(colid3) ON DELETE RESTRICT -- the parent table record will not be deleted until all references are deleted
        col5 type references othertablename(colid4) ON DELETE CASCADE -- all child records are deleted if the parent record is deleted
        FOREIGN KEY (c2, c3) REFERENCES parent_table (p1, p2) -- group of columns as foreign keys
        unique(col2)
        unique(col3, col4) --unique combination
      );

    -- add primary key to a table without one
      alter table tablename add primary key (colX)
    -- add auto incremented primary key
      alter table tablename add column colx serial primary key
    -- remove primary key
      alter table tablename drop constraint pkname

    -- add foreign key constraint to existing table
      ALTER TABLE child_table ADD CONSTRAINT constraint_name
        FOREIGN KEY (c1) REFERENCES parent_table (p1);

    -- remove a constraint from a table
      ALTER TABLE child_table DROP CONSTRAINT constraint_fkey;
    -- add index based on two columns
      create index indexname on tablename(col1, col2)
    -- add unique index to col1 to table and name the index indexname
      create unique index concurrently indexname
        on tablename (col1)
    -- add a unique constraint to a table using an index name
      alter table tablename
        add constrain contraintname
        unique using index indexname;

    -- create a table with the same schema as another
      create table tablename (like othertablename)

    -- add column to existing table
      alter table tablename add column col1 type;
    -- set default value for column
      alter table tablename alter column col1 set default value
    -- rename column
      ALTER TABLE table_name
      RENAME COLUMN column_name TO new_column_name;

    -- deleting tables
      drop table tablename
      drop table if exists tablename -- dont throw error if table doesnt exist
      drop table cascade -- drop and remove all dependent objects (views, references, etc)
      drop table restrict -- dont drop if any references exist
  ```

#### records: CRUD

```sql
  -- create
  -- ^ not specifying a column will implicitly use the default value
  -- ^ \d+ to describe the table first
    -- separately column names & values separately
      insert into tablename
        (col1Name, col2name, colXName, ...)
      values
        (col1Value, default, colXValue, ...); -- use the default value for the column
    -- specifying values without column names, relying on the column order used when the table was created
      insert into tablename values (col1Value, default, colXValue, ...)

    -- insert and return some cols value e.g. its id
      insert into tablename (col1, colX)
        values(val1, valx)
        returning id

    -- insert rows from another table
      insert into tablename (col1, colX)
      select col2, col3
      from othertablename where CONDITIONS

  -- updating
    update tablename set col1 = val1, colX = valX where CONDITION;
      set col1 = col2 - col3 * col3
  -- update all by not using where clause
    update tablename set col1 = val1;
  -- update one table with values from another table
    -- postgres
      update tablename set col1 = othertablename.col1
        from othertablename
        where tablename.id = othertablename.id
    


  -- upserting
    insert into tablename(col1, colX)
      values(val1, valX)
      on conflict target action
        -- targets
          on (col1)
          on constraint constraintname
          on a where clause with a predicate -- research this
        -- actions
          do nothing -- do nothing if row already exists
          do update set col1 = val1 where CONDITION -- update fields with these values on conflict
  -- upsert: do nothing example
    insert into ... values ...
      on conflict on constraint constraintname
      do nothing

```

#### deleting records

- truncate: remove all data from a large table
  - does not remove any child tables unless you specify `cascade`
- delete: scans the table before deleting records (usually because of where clause)

  ```sql
    delete from tablename where CONDITION
    -- delete based on values from othertablename
      delete from tablename
        using othertablename
        where tablename.id = othertablename.id
      delete from tablename where tablename.id = (
        select id from othertablename
      ) -- same as above
    -- delete all records from tablename
      delete from tablename;

    -- truncate table
      truncate table tablename1, tablename2
    -- truncate and remove reset sequence generator
      truncate table tablename reset identity
    -- truncate table and remove records from all child tables if any
      truncate table tablename cascade

  ```

### admin

```sql
  -- locations
    config file: /etc/postgresql/9.3/main/postgresql.conf
      log_line_prefix = '%t %u %d %a ' -- add executing user to logs
      -- verbosity related
        log_min_messages = debug5
        log_min_error_statement = debug5
        log_min_duration_statement = -1
    log file: tail -f /var/log/postgresql/postgresql-9.3-main.log

  -- service
    sudo service postgresql stop
    sudo service postgresql start
    sudo service postgresql restart
  -- systemct
    sudo systemctl stop postgresql.service -- etc

  -- server
    psql -U username --connect to local db server
      -- default username is postgres
    psql -d databasename -U username -W
      -- connect to local db as user and ask for pw on next line
    psql -h hostname -d databasename -u username -W
      -- connect to remote db
    psql -U username -h hostname "dbname=db sslmode=require"
      -- connect to remote db via SSL
    \q -- Quit/Exit
    \H -- toggle html output format
    \e -- use the program defined by the EDITOR env var to execute a cmd
    \ef functioname -- edit a function with default text editor
```

### roles/users

- roles: handle authentication and authorization
  - similar to unix-style accounts
  - roles do not distinguish between users and groups
    - roles: users that cannot login
    - users: roles with LOGIN permission
  - can be members of other roles, allowing them to take on the permission characteristics of previously defined roles.
  - can also own objects and control access to those object for other roles.

  ```sql
    -- creating a new user (same as role) from the CLI
      -- if logged in as postgres account
        createuser --interactive
      -- if current user has sudo access
        sudo -u postgres createuser --interactive
    -- create a role from psql prompt
      CREATE ROLE new_role_name WITH permission_name;
      CREATE ROLE new_role_name WITH LOGIN; -- same as creating a user
      CREATE USER role_name; --creates a role with login permission

    -- alter roles
      ALTER ROLE role_name WITH permissions

    -- DELETE roles
      DROP ROLE role_name; --errors if role does not exist
      DROP ROLE IF EXISTS role_name;

    -- roles
      \du --view roles
      \h CREATE ROLE -- view role permissions
        --   SUPERUSER | NOSUPERUSER
        -- | CREATEDB | NOCREATEDB
        -- | CREATEROLE | NOCREATEROLE
        -- | INHERIT | NOINHERIT
        --
        -- | LOGIN | NOLOGIN
        -- | REPLICATION | NOREPLICATION
        -- | BYPASSRLS | NOBYPASSRLS
        -- | CONNECTION LIMIT connlimit
        -- | [ ENCRYPTED ] PASSWORD 'password'
        -- | VALID UNTIL 'timestamp'
        -- | IN ROLE role_name [, ...]
        -- | IN GROUP role_name [, ...]
        --
        -- | ROLE role_name [, ...]
        -- | ADMIN role_name [, ...]
        -- | USER role_name [, ...]
        -- | SYSID uid
  ```

### permissions

- when a database or table is created, usually only the role that created it (not including roles with superuser status) has permission to modify it.

  ```sql
    -- grant permission to role for a table
      GRANT permission_type ON table_name TO role_name;

    -- grant one role member of another role
      GRANT some_role TO member_of_this_role;

    -- issue commands as a role you are member of
      SET ROLE role_im_member_of;

    -- automatically have all permissions of all roles you are member of
      ALTER ROLE some_role INHERIT;

    -- reset role to original permissions
      RESET ROLE;

    -- grant full permissions to user
      GRANT ALL ON table_name TO role_name;

    -- grant permissions for every user on system
      GRANT INSERT ON table_name TO PUBLIC;

    -- remove permissions
      REVOKE permission_type ON table_name FROM user_name;

    -- remove all public/super-user permissions from table
      REVOKE INSERT ON table_name FROM PUBLIC|ALL;

    -- view all grant table (all granted permissions)
      \z
  ```

### Authentication

- types of authentication
  - ident: associates postgres roles with a matching unix/linux system account
    - if a role exists within postgress, a unix/linux username with the same name is able to sign in as that role
    - Another assumption that the Postgres authentication system makes by default is that for any role used to log in, that role will have a database with the same name which it can access.
  - accessing database
    - Logging in
      - users are only allowed to login locally if the system username matches the PostgreSQL username.
        - an get around this by either:
          - changing the login type
          - or by specifying that PostgreSQL should use the loopback network interface, which would change the connection type to remote, even though it is actually a local connection.

  ```sql
    -- login with username and pass to a specific DB and IP
      psql -U user_name -d database_name -h 127.0.0.1 -W

    -- passwords
      \password test_user
  ```

### databases and tables

```sql
  -- create a table
    CREATE TABLE demo (
      name varchar(25),
      id serial,
      start_date date
    );

  -- change ownership of table to another role
    ALTER TABLE table_name OWNER TO role_name;

  -- view table relations/ownership
    \d

```

### statements

#### select

- Select distinct rows by using `DISTINCT` operator.
- Filter rows by using `WHERE` clause.
- Sort rows by using `ORDER BY` clause.
- Select rows based on various operators such as `BETWEEN`, `IN` and `LIKE`.
- Group rows into groups using `GROUP BY` clause
- Apply conditions for groups using `HAVING` clause.
- Join a table to other tables using `INNER JOIN`, `LEFT JOIN`, `FULL OUTER JOIN`, `CROSS JOIN` clauses.
- To construct a subquery, we put the second query in brackets and use it in the WHERE clause as an expression

#### retrieval

```sql
  -- basic retrieval
    select * from tablename;
    select col1, col2 from tablename;
    select distint col1 from tablename;
    select distinct col1, col2 from tablename; -- distinct applies to combination of column values
    select distinct on (col1) col2 from tablename order by col1; -- returns first distinct value of each group. order by col must be the distinct on col. the distinct on col value is not returned but you can list it twice
    select distinct on (col1) col1, col2 from tablename order by col1;
    select * from tablename order by col asc|desc;

  -- filtering
    -- basic structure
      select * from tablename where CONDITIONS order by col limit N offset M
        --limit = max records
        --order by = must be used whenever using LIMIT
        --offset = skip X records before selecting
    -- common conditions
      col1 = 'some string' and col2 = 'other thing';
      col1 is null;
      col1 is not null
      col1 NOT BETWEEN low AND high;
      col1 < low OR value > high; -- same as above
      col1 between lowvalue and highvalue;
      col1 >= lowvalue and col1 <= highvalue; --same as above
      col <= 1 or col >= 0;
      col1 in (this, list, of, values)
      col1 not in (this, list, of, values)
      col1 <> (same, as, above)
      col in (select colX from tablename)
    -- common pattern matching conditions
      col like 'blah%'; -- % match any sequence of characters
      col like 'bl_h'; -- match any single character
      col not like 'bl_h';
      first_name LIKE '_her%';
        'foo' LIKE 'foo'; -- true
        'foo' LIKE 'f%'; -- true
        'foo' LIKE '_o_'; -- true
        'bar' LIKE 'b_'; -- false
      first_name ILIKE 'BAR%'; -- case insensitive
```

#### builtin functions

```sql
  select avg (col) from tablename;
```

#### sub queries

- First, executes the subquery.
- Second, gets the result and passes it to the outer query.
- Third, executes the outer query.

  ```sql
    -- basic subquery
      select * from tablename where col > (
        select avg (col2) from othertablename
      );

    -- retrieve rows that return true via the exist operator
      select * from tablename where exists (
        select 1 from tablename where CONDITIONS
      );
  ```

### prepared statements

```sql
  -- create a prepared statement that accepts an argument
    prepare statementname(arg1)
      as select * from tablename where col1 = $1 -- $1 = arg1
  -- execute a prepared statement
    execute statename(val1)
```

### copy pasta

#### debugging

```sql
  -- Query analysis:
    EXPLAIN __query__ -- see the query plan for the given query
    EXPLAIN ANALYZE __query__ -- see and execute the query plan for the given query
    ANALYZE [__table__] --  collect statistics

  -- needs categorization
    SELECT * FROM pg_proc WHERE proname='__procedurename__' -- List procedure/function
    SELECT * FROM pg_views WHERE viewname='__viewname__'; -- List view (including the definition)
    SELECT pg_size_pretty(pg_total_relation_size('__table_name__')); -- Show DB table space in use
    SELECT pg_size_pretty(pg_database_size('__database_name__')); -- Show DB space in use
    show statement_timeout; -- Show current user's statement timeout
    SELECT * FROM pg_indexes WHERE tablename='__table_name__' AND schemaname='__schema_name__'; -- Show table indexes

  -- Get all indexes from all tables of a schema:
    SELECT
       t.relname AS table_name,
       i.relname AS index_name,
       a.attname AS column_name
    FROM
       pg_class t,
       pg_class i,
       pg_index ix,
       pg_attribute a,
        pg_namespace n
    WHERE
       t.oid = ix.indrelid
       AND i.oid = ix.indexrelid
       AND a.attrelid = t.oid
       AND a.attnum = ANY(ix.indkey)
       AND t.relnamespace = n.oid
        AND n.nspname = 'kartones'
    ORDER BY
       t.relname,
       i.relname

  -- Queries being executed at a certain DB:
    SELECT datname, application_name, pid, backend_start, query_start, state_change, state, query
      FROM pg_stat_activity
      WHERE datname='__database_name__';

  -- Currently running queries with process pid:
    SELECT pg_stat_get_backend_pid(s.backendid) AS procpid,
      pg_stat_get_backend_activity(s.backendid) AS current_query
    FROM (SELECT pg_stat_get_backend_idset() AS backendid) AS s;

  -- inner join: get films with a date between two dates
    SELECT
     inventory.film_id
    FROM
     rental
    INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
    WHERE
     return_date BETWEEN '2005-05-29'
    AND '2005-05-30';

  -- get the 5 biggest tables from current database
    SELECT
        relname AS "relation",
        pg_size_pretty (
            pg_total_relation_size (C .oid)
        ) AS "total_size"
    FROM
        pg_class C
    LEFT JOIN pg_namespace N ON (N.oid = C .relnamespace)
    WHERE
        nspname NOT IN (
            'pg_catalog',
            'information_schema'
        )
    AND C .relkind <> 'i'
    AND nspname !~ '^pg_toast'
    ORDER BY
        pg_total_relation_size (C .oid) DESC
    LIMIT 5;
```

#### get foreign key constraints

```sql
-- get specific table foreign key constraints
  SELECT
      tc.table_schema,
      tc.constraint_name,
      tc.table_name,
      kcu.column_name,
      ccu.table_schema AS foreign_table_schema,
      ccu.table_name AS foreign_table_name,
      ccu.column_name AS foreign_column_name
  FROM
      information_schema.table_constraints AS tc
      JOIN information_schema.key_column_usage AS kcu
        ON tc.constraint_name = kcu.constraint_name
        AND tc.table_schema = kcu.table_schema
      JOIN information_schema.constraint_column_usage AS ccu
        ON ccu.constraint_name = tc.constraint_name
        AND ccu.table_schema = tc.table_schema
  WHERE constraint_type = 'FOREIGN KEY' AND tc.table_name='mytable';

-- get all foreign keys
  select *
  from information_schema.key_column_usage
  where position_in_unique_constraint is not null;
-- alter foreign key constraint
alter table TABLE_NAME -- e.g. evens
drop constraint CONSTRAINT_NAME, -- events_host_uuid_fkey,
add constraint CONSTRAINT_NAME -- events_host_uuid_fkey,
   foreign key (COLUMN_NAME) -- host_uuid
   references TABLE_NAME(COLUMN_NAME) -- users(uuid)
   on delete cascade;
```
