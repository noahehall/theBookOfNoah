# SQL

- the ultimate cheatsheet
- wouldnt trust anything in this file while this line exists

## basics

### links

- [database normalization](https://phoenixnap.com/kb/database-normalization)
- [database design process](https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5)
- [sql relationships](https://blog.devart.com/types-of-relationships-in-sql-server-database.html)
- [hierarchical data](https://learnsql.com/blog/how-to-query-hierarchical-data/)
- [oracle has a pretty sql intro](https://docs.oracle.com/en/database/oracle/oracle-database/12.2/sqlrf/JSON_ARRAY.html)
- mysql quickies
  - [data types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)
  - [create procedure and create function](https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html)
  - [copy table with examples](https://www.mysqltutorial.org/mysql-copy-table-data.aspx)

### best practices / gotchas

- table names: TABLE_NAME: all caps, underscore betwen words
- in some DB systems, the word 'order' has a speical purpose; never name a table 'order', instead use 'ORDERS'

### terms

- database: structure that contains different categories of information and the relationships between these categories tables and columns that will comprise a database
- database design: the process of determining the particular
- relational database: a collection of tables in a database that are related to each other
- entity: like a noun: a person, place, thing or event each table in a database is a noun
- attribute: 'fields' || 'columns' a property of an entity; table columns are attributes
- Records: 'relation' || 'tuples': i.e. a two dimensional table in which the entries in the table are single-valued
- repeating groups: multiple entries in a single row

### relationships

- relationship: the association between entities; implement relationships by having common columns in multiple tables reference each other
- one to one
- one to many: a single entity type is related to multiple instances of another entity type
  - e.g. row 1 having 2/more values in a 1/more cells
- many to many
- many to one
- self-referencing

#### functional dependence

- functional dependence: if when given one columns value, you can determine a SINGLE value in another column
  - e.g.: Column B is functionally dependent on another/group of columns
  - if at any point in time a value for A determines a SINGLE value in B: A --> B
    - A functionally determines B
    - B is functionally dependent on A
- All columns are (should be) functionally dependent on the primary key
  - a foreign key MAY/MAY NOT functionally determine another columns value
    - if there is a one to one, from A --> B
    - if there is a one to many, from A --> B
- primary key: the unique identifier for a table, satisfying the following:
  - all columns in the table are functionally dependent on A
  - no subcollection of the columns in A (assuming A is a collection of columns) also satisfies #1
- candidate key: a column/collection of columns on which all the columns in the table are functionally dependent

### normalization

- normalization: identify and fix potential problems in database design
- data duplication/redundancy: wastes space, update anomalies
  - if you need to change the value, you must change it everywhere the value exists since it is listed more than once
  - their will be inconsistent data in the database
- additions: having multiple columns as the primary key
  - when not all columns in the table dependen on all values in the primary key, makes it difficult to add new Records
- deletions: repeating groups

#### first normal form

- a database whose tables do not contain any repeating groups
- solution:
  - remove all repeating groups by creating multiple records

#### second normal form

- a database whose tables contains a single column as the primary key
  - OR if two/more columns are the primary key: all functionally dependent columns require all primary key columns (not just a portion of the columns that make the primary key)
  - i.e. any non-primary key column is dependent on all primary key columns, and NOT just a portion of the primary key columns
- solution:
  - remove each portion of the primary key and create a new table
  - move all dependent columns into each respective table
  - for the dependent columns that depend on multiple determinant columns create a table just for them with multiple columns as the primary key

#### third normal form

- When the only determinant columns a table contains are candidate keys
  - i.e. all columns depend on the primary/candidate keys
- Solution:
  - key the determinant column
  - remove all columns that depend on the determinant column but NOT on the primary key
  - then create a new table that contains the determinant column as the primary key, and the Dependent columns as the dependent columns

#### fourth normal form

#### fifth normal form

### database design process

- get requirements from users
  - identify the entities & their names
- identify the candidates keys for each entity
  - choose one of the candidate keys to be the primary key
- identify the attributes for all entities
- identify the functional dependencies that exist among attributes in a single table
  - e.g. "if you know the value of one column, can you find
  - the value of another SINGLE column in the same row"?
- use the functional dependencies to determine the tables in the database
  - this step may split the entities into multiple tables
    - This will simplify the database
  - use the attribute that functionally determines other attributes as the entities primary key
- identify any relationships between tables

## standard API

### datatypes

- numberic data types
  - INTEGER INT SMALLINT TINYINT MEDIUMINT BIGINT
  - DECIMAL NUMERIC
  - FLOAT DOUBLE
  - BIT
- date and time
  - DATE DATETIME TIMESTAMP
  - TIME
  - YEAR
  - TIMESTAMP DATETIME
- string
  - CHAR VARCHAR
  - BINARY VARBINARY
  - BLOB TEXT
  - ENUM
  - SET
- json
  - JSON

#### TEXT DATATYPES

- CHAR(size) Holds a fixed length string (can contain letters, numbers, and special characters). The fixed size is specified in parenthesis. Can store up to 255 characters
- VARCHAR(size) Holds a variable length string (can contain letters, numbers, and special characters). The maximum size is specified in parenthesis. Can store up to 255 characters. Note: If you put a greater value than 255 it will be converted to a TEXT type
- TINYTEXT Holds a string with a maximum length of 255 characters
- TEXT Holds a string with a maximum length of 65,535 characters
- BLOB For BLOBs (Binary Large OBjects). Holds up to 65,535 bytes of data
- MEDIUMTEXT Holds a string with a maximum length of 16,777,215 characters
- MEDIUMBLOB For BLOBs (Binary Large OBjects). Holds up to 16,777,215 bytes of data
- LONGTEXT Holds a string with a maximum length of 4,294,967,295 characters
- LONGBLOB For BLOBs (Binary Large OBjects). Holds up to 4,294,967,295 bytes of data
- ENUM(x,y,z,etc.) Let you enter a list of possible values. You can list up to 65535 values in an ENUM list. If a value is inserted that is not in the list, a blank value will be inserted.
  - The values are sorted in the order you enter them.
  - You enter the possible values in this format: ENUM('X','Y','Z')
- SET Similar to ENUM except that SET may contain up to 64 list items and can store more than one choice

#### NUMBER DATATYPES

- TINYINT(size) -128 to 127 normal. 0 to 255 UNSIGNED\*. The maximum number of digits may be specified in parenthesis
- SMALLINT(size) -32768 to 32767 normal. 0 to 65535 UNSIGNED\*. The maximum number of digits may be specified in parenthesis
- MEDIUMINT(size) -8388608 to 8388607 normal. 0 to 16777215 UNSIGNED\*. The maximum number of digits may be specified in parenthesis
- INT(size) -2147483648 to 2147483647 normal. 0 to 4294967295 UNSIGNED\*. The maximum number of digits may be specified in parenthesis
- BIGINT(size) -9223372036854775808 to 9223372036854775807 normal. 0 to 18446744073709551615 UNSIGNED\*. The maximum number of digits may be specified in parenthesis
- FLOAT(size,d) A small number with a floating decimal point. The maximum number of digits may be specified in the size parameter. The maximum number of digits to the right of the decimal point is specified in the d parameter
- DOUBLE(size,d) A large number with a floating decimal point. The maximum number of digits may be specified in the size parameter. The maximum number of digits to the right of the decimal point is specified in the d parameter
- DECIMAL(size,d) A DOUBLE stored as a string , allowing for a fixed decimal point. The maximum number of digits may be specified in the size parameter. The maximum number of digits to the right of the decimal point is specified in the d parameter

#### DATE DATATYPES

- datetime From January 1, 1753 to December 31, 9999 with an accuracy of 3.33 milliseconds 8 bytes
- datetime2 From January 1, 0001 to December 31, 9999 with an accuracy of 100 nanoseconds 6-8 bytes
- smalldatetime From January 1, 1900 to June 6, 2079 with an accuracy of 1 minute 4 bytes
- date Store a date only. From January 1, 0001 to December 31, 9999 3 bytes
- time Store a time only to an accuracy of 100 nanoseconds 3-5 bytes
- datetimeoffset The same as datetime2 with the addition of a time zone offset 8-10 bytes
- timestamp Stores a unique number that gets updated every time a row gets created or modified. The timestamp value is based upon an internal clock and does not correspond to real time. Each table may have only one timestamp variable

#### OTHER DATATYPES

- sql_variant Stores up to 8,000 bytes of data of various data types, except text, ntext, and timestamp
- uniqueidentifier Stores a globally unique identifier (GUID)
- xml Stores XML formatted data. Maximum 2GB
- cursor Stores a reference to a cursor used for database operations
- table Stores a result-set for later processing

### constraints

- NOT NULL - Indicates that a column cannot store NULL value
- UNIQUE - Ensures that each row for a column must have a unique value
- PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Ensures that a column (or combination of two or more columns) have a unique identity which helps to find a particular record in a table more easily and quickly
- FOREIGN KEY - Ensure the referential integrity of the data in one table to match values in another table
- CHECK - Ensures that the value in a column meets a specific condition
- DEFAULT - Specifies a default value for a column

### select

- extracts data from a database

```sql

-- basic select
SELECT column_name,column_name
FROM table_name ORDER BY column_name ASC|DESC, column_name ASC|DESC;

-- select distinct
SELECT DISTINCT column_name,column_name FROM table_name;

-- select all
SELECT * FROM Orders WHERE OrderDate='2008-11-11'

-- ALIAS columns or table
SELECT column_name AS alias_name
SELECT column_name FROM table_name AS alias_name;

-- WHERE
WHERE column_name IN (value1,value2,...);
WHERE column_name BETWEEN value1 AND value2;
WHERE ProductName BETWEEN 'C' AND 'M';
WHERE OrderDate BETWEEN #07/04/1996# AND #07/09/1996#;
WHERE Price NOT BETWEEN 10 AND 20;
WHERE Address IS NULL
WHERE Address IS NOT NULL

-- group by: used with aggreagate functions
SELECT column_name, aggregate_function(column_name)
    FROM table_name
    WHERE column_name operator value
    GROUP BY column_name;

-- having: filter group bys
SELECT column_name, aggregate_function(column_name)
    FROM table_name
    WHERE column_name operator value
    GROUP BY column_name
    HAVING aggregate_function(column_name) operator value;

-- LIKE
-- % A substitute for zero or more characters: %blah%
-- _ A substitute for a single character bl_h
-- [charlist] Sets and ranges of characters to match bl[a4]h
-- starting with a,b,c: [a-c]%
-- not starting with a,b,c [!bsp]% or [^bsp]%
select * from TABLE where COLUMN LIKE "pattern"


-- JOINS
-- INNER JOIN: Returns all rows when there is at least one match in BOTH tables
-- LEFT JOIN: Return all rows from the left table, and the matched rows from the right table
-- RIGHT JOIN: Return all rows from the right table, and the matched rows from the left table
-- FULL JOIN: Return all rows when there is a match in ONE of the tables
-- UNION

-- INFORMATION_SCHEMA has a bunch of stuff
SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'STUDENT_INFO';
```

### insert

- inserts new data into a database

```sql
INSERT INTO table_name
  (column1,column2,column3,...)
VALUES
  (value1,value2,value3,...);

```

### update

- updates data in a database

```sql

UPDATE table_name
SET
  column1=value1,
  column2=value2,...
WHERE some_column=some_value;
```

### delete

- deletes data from a database

```sql
DELETE FROM table_name
WHERE some_column=some_value;
```

### create

```sql
-- creates a new database
CREATE DATABASE my_db;

-- create a table
CREATE TABLE table_name (
  column_name1 data_type(size) constraint_name,
  ID int NOT NULL AUTO_INCREMENT,
  CONSTRAINT someNAme UNIQUE (col1,col2) #specify two columns together must be unique
  PRIMARY KEY (ID)
  CONSTRAINT pk_PersonID PRIMARY KEY (P_Id,LastName) #specify multiple columns as the primary key, there can be 1 primary key per table
  FOREIGN KEY (this_col_name) REFERENCES other_table_name(other_col_name) #specify a foreign key that references a table and column from another table
  City varchar(255) DEFAULT 'Sandnes' #set a default value for a column
  CHECK (P_Id>0) #specify that P_id in this table must be greater than 0
);

-- copy existing table + constraints into potentially new table
CREATE TABLE IF NOT EXISTS new_table LIKE existing_table;
INSERT new_table SELECT * FROM existing_table
WHERE conditions; -- add for copying partial table

```

### alter

- modifies a database or table
- you need the FULL column definition for every type of alter statement

```sql
-- add unique contraint
ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);

-- drop a unique constraint from a table
ALTER TABLE Persons DROP INDEX UC_Person

-- drop the existing primary key from table (also for columns)
ALTER TABLE Persons DROP PRIMARY KEY

-- add a foreign key after the table has already been created
ALTER TABLE Orders
    ADD FOREIGN KEY (P_Id)
    REFERENCES Persons(P_Id)

-- remove an index from a table
ALTER TABLE table_name DROP INDEX index_name

-- change a columns data type or add constraint
ALTER TABLE table_name
ADD colName datatype

ALTER TABLE table_name
MODIFY column_name datatype

-- set a default on an existing table
ALTER TABLE Persons
ALTER City SET DEFAULT 'SANDNES'

-- add a check constraint to an existing table
ALTER TABLE Persons
ADD CHECK (P_Id>0)
ADD CHECK (some_col <> '')
```

### drop / truncate

- drop removes the entity
- truncate removes the data in the entity

```sql
DROP TABLE table_name
DROP DATABASE database_name

-- delete the data in a table, but not the table itself
TRUNCATE TABLE table_name

```

### table catchall

```sql
-- copy data from table 1 into a new table
SELECT * INTO newtable
FROM table1;

-- copy the schema of one table into another, 1=0 is what makes this copy just the schema
SELECT * INTO newtable
FROM table1
WHERE 1=0;

-- copies data from table in into an existing table2
INSERT INTO table2
SELECT * FROM table1;

-- create an index on a single table, can specify 1/multiple columns
CREATE INDEX index_name
ON table_name (column_name1, col_name2)
```

### views

- views vs materialized views
  - TODO: add to this file

```sql
CREATE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition

CREATE OR REPLACE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition

DROP VIEW view_name

```

### Dates

- DATE formats
  - DATE - format YYYY-MM-DD
  - DATETIME - format: YYYY-MM-DD HH:MI:SS
  - TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
  - YEAR - format YYYY or YY

```sql
DATE(a.lastlogin) = DATE(NOW())

NOW() -- Returns the current date and time
CURDATE() -- Returns the current date
CURTIME() -- Returns the current time
DATE() -- Extracts the date part of a date or date/time expression
EXTRACT() -- Returns a single part of a date/time
DATE_ADD() -- Adds a specified time interval to a date
DATE_SUB() -- Subtracts a specified time interval from a date
DATEDIFF() -- Returns the number of days between two dates
DATE_FORMAT() -- Displays date/time data in different formats
```

### aggregate functions

```sql
AVG() -- Returns the average value
COUNT() -- Returns the number of rows
FIRST() -- Returns the first value
LAST() -- Returns the last value
MAX() -- Returns the largest value
MIN() -- Returns the smallest value
SUM() -- Returns the sum

```

### scalar functions

```sql

UCASE() -- Converts a field to upper case
LCASE() -- Converts a field to lower case
MID() -- Extract characters from a text field
LEN() -- Returns the length of a text field
ROUND() -- Rounds a numeric field to the number of decimals specified
NOW() -- Returns the current system date and time
FORMAT() -- Formats how a field is to be displayed
FORMAT(Now(),'YYYY-MM-DD')
```

### catchall fns

```sql
IFNULL(UnitsOnOrder,0)
COALESCE(UnitsOnOrder,0)
```

## Routines

- functions should always return values after operating on stuff
  - iunvoked with an expression
- procedures operate on stuff and generally should not return values
  - invoked with call and cannot be embedded in sql statements
  - parameters are input only, output only, or both
    - output parameters allow you to return values
- stored routines (fns and procedures) are associated with a specific db, just like tables or views
  - fns and procecures do not share namespaces, i.e. they can have the same name

### functions

```sql


CREATE FUNCTION func_name ([parameters])
 RETURNS data_type       // diffrent
 [characteristics]
 routine_body
```

### procedure

```sql

CREATE PROCEDURE proc_name ([parameters])
 [characteristics]
 routine_body


```
