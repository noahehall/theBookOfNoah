# Databases
  - [next up](https://technet.microsoft.com/en-us/library/ms187099(v=sql.105).aspx)
  - [designing nosql databases](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)
  - [great links on db design](https://www.kidscodecs.com/database-design/)
## NoSQL

## Relational
### useful links
  - [microsoft database tutorial](https://support.office.com/en-us/article/Database-design-basics-1eade2bf-e3a0-41b5-aee6-d2331f158280)

### Best Practices
  - limit redundant data: duplicate data may cause errors and inconsistencies

### terms
  - table: list of rows and columns
    1. each table stores data about a single entity(noun)
  - row: a record containing multiple fields about a single entity
  - columns: a field containing a single item of information
  - redundant data: duplicate data
  - junction/intermediary table: used in many-to-many relationships to join two tables without include redundant data in either table
    + each side of the many-to-many relationship has a one-to-many relationship with the intermediary table
  - supplementary table: for one-to-one relationships to store infrequently accessed or sparse data
    + the link from one table to another is only kept on the supplementary table

### processes
#### Design process
  1. determine the purpose of your Database
    - how do you expect to use it? who will use it and with what frequency?
  2. find and organize the information required/requested
    - start with the information at hand, then include any new information
    - think about who will be using consuming the data and what they will be using it for, you may need to add additional fields/metadata/tables to support each use case
  3. divide the information into tables based on nouns/subjects
  4. decide what information to keep in each table
    - be sure to break down each piece of information into its logical parts, e.g. a name should be firstName and lastName, while a number can be areaCode and Number
    - dont include calculated data
  5. specify primary key(s) that uniquely identifies each record
    - primary keys must always have a value in the table; if the value could possibly be unknown/unassigned, do not use it as a primary key
  6. setup table relationships
    - figure out how each table is related to another, and add fields/create new tables to clarify the relationships
    - one-to-many: a primary key from one table is included as foreign key in another table
    - many-to-many: create a third table that
    - one-to-one: for supplementary info that is rarely needed or only applies to few records in the table should be stored in a supplementary table
  7. refine your design: remove any errors or enhance the design as necessary
    - did you forget any columns?
    - did you include any unnecessary columns?
    - does redundant data exist?
    - does each field represent a fact about the table's subject?
  8. apply the data normalization rules to see if your tables are structured correctly
