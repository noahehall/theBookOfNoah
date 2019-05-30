# MYSQL in a nutshell russel jt dyer

#  background
  - mysql - open source, multithreaded, relational database management system created by michael monty widenius in 95


# STORAGE ENGINES
  - storage engine: manages queries and itnerfaces betweena users sql statements and the databases backend storage, is the critical software any database management system


# MYSQL SERVER (i.e. mysqld daemon)
  - mysqld daemon: listenes for requests on a particular network port by which clients submit queries

# MYSQL CLIENT (i.e. mysql)
  - text-based interface:
  - user can login and execute queries
  - accept queries from text files containing queries, and thereby execute them on behalf of the user or other software

# WRAPPER SCRIPTS
## MYSQLD_SAFE
  - the most common way to start mysqld, becuase the script can restart the daemon if it crashes
    - helps ensure minimal downtime for database services

## MYSQLD_MULTI
  - used to start multiple sessions of mysqld_safe, and thereby multiple mysqld instances
    - for handling rewquests on different ports
    - make it easier to serve different sets of databases or to test different versions of mysql

# UTILITIES
## MYSQLACCESS
  - used for creating user accounts and setting their privileges

## MYSQLADMIN
  - can be used to manage teh mysql server itself from the cmd line
    - checking a servers status
    - information about database and tables

## MYSQLDUMP
  - popular for exporting data and table structures to a plain text file known as a dump file
    - used for backing up data or for manually moving it between servers 