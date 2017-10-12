# links
  - [postgres cheatsheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)
  - [getting started postgresql server mac osx](https://www.codementor.io/devops/tutorial/getting-started-postgresql-server-mac-osx)
  - [postgresql official docs](http://www.postgresqltutorial.com/)


# research
  - User-defined types
  - Table inheritance
  - Sophisticated locking mechanism
  - Foreign key referential integrity
  - Views, rules, subquery
  - Nested transactions (savepoints)
  -
  - Asynchronous replication
  - Tablespaces
  - Point-in-time recovery

# terminology
  - PostgreSQL: general purpose and object-relational database management system, the most advanced open source database system
    - allows you to add custom functions developed using different programming
    - define your own data types, index types, functional languages, etc.
    - develop a custom plugin to enhance it to meet your requirements e.g., adding a new optimizer.
  - Multi-version concurrency control (MVCC):
    - known as snapshot isolation in Oracle




# cli
  ```bash
    # server
      $ psql -U postgres #connect to local db server
      \x # enable enhanced view for display query results
    # user admin
    # db admin
    # table admin
    \d+ # tablename describe table
    \dt # show tables
  ```
