
# [basics]
## [administration]
  ```mysql
    # Start server & login
      mysql –u yourUserName –p
    # connect to a database
      mysql –u username –h hostname database-name
    # will list all of the databases
      Show databases;
    # Quit mysql
      cmd quit
  ```
## [syntax]
  ```mysql
    # select syntax
      SELECT
        [ALL | DISTINCT | DISTINCTROW ]
          [HIGH_PRIORITY]
          [STRAIGHT_JOIN]
          [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]
          [SQL_CACHE | SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]
        select_expr [, select_expr ...]
        [FROM table_references
        [WHERE where_condition]
        [GROUP  BY {col_name | expr | position}
          [ASC | DESC], ... [WITH  ROLLUP]]
        [HAVING where_condition]
        [ORDER  BY {col_name | expr | position}
          [ASC | DESC], ...]
        [LIMIT {[offset,] row_count | row_count OFFSET offset}]
        [PROCEDURE procedure_name(argument_list)]
        [INTO  OUTFILE 'file_name'
            [CHARACTER  SET charset_name]
            export_options
          | INTO  DUMPFILE 'file_name'
          | INTO var_name [, var_name]]
        [FOR  UPDATE | LOCK  IN  SHARE  MODE]]
  ```
# research

coalesce
group_concat
group_concat(distinct tracks.title order by tracks.title asc separator ', ')
Mysql workbench
Create a new user:
Server administration
Accounts
Manage users
Click add account
Modify user
Administration roles
Everything is done via terminal
connections


Syntax
syntax

definitions
ALL: the default select
Distinct: unique records based on the combination of columns after the select statement

SQL Statement
Syntax
AND / OR
SELECT column_name(s)
FROM table_name
WHERE condition
AND|OR condition
ALTER TABLE
ALTER TABLE table_name 
ADD column_name datatype
or
ALTER TABLE table_name 
DROP COLUMN column_name
AS (alias)
SELECT column_name AS column_alias
FROM table_name
or
SELECT column_name
FROM table_name  AS table_alias
BETWEEN
SELECT column_name(s)
FROM table_name
WHERE column_name
BETWEEN value1 AND value2
CREATE DATABASE
CREATE DATABASE database_name
CREATE TABLE
CREATE TABLE table_name
(
column_name1 data_type constraint,
column_name2 data_type constraint,
column_name3 data_type constraint,
...
)
CREATE INDEX
CREATE INDEX index_name
ON table_name (column_name)
or
CREATE UNIQUE INDEX index_name
ON table_name (column_name)
CREATE VIEW
CREATE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition
DELETE
DELETE FROM table_name
WHERE some_column=some_value
or
DELETE FROM table_name 
(Note: Deletes the entire table!!)
DELETE * FROM table_name 
(Note: Deletes the entire table!!)
DROP DATABASE
DROP DATABASE database_name
DROP INDEX
DROP INDEX table_name.index_name (SQL Server)
DROP INDEX index_name ON table_name (MS Access)
DROP INDEX index_name (DB2/Oracle)
ALTER TABLE table_name
DROP INDEX index_name (MySQL)
DROP TABLE
DROP TABLE table_name
EXISTS
IF EXISTS (SELECT * FROM table_name WHERE id = ?)
BEGIN
--do what needs to be done if exists
END
ELSE
BEGIN
--do what needs to be done if not
END
GROUP BY
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
HAVING
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
HAVING aggregate_function(column_name) operator value
IN
SELECT column_name(s)
FROM table_name
WHERE column_name
IN (value1,value2,..)
INSERT INTO
INSERT INTO table_name
VALUES (value1, value2, value3,....)
or
INSERT INTO table_name
(column1, column2, column3,...)
VALUES (value1, value2, value3,....)
INNER JOIN
SELECT column_name(s)
FROM table_name1
INNER JOIN table_name2 
ON table_name1.column_name=table_name2.column_name
LEFT JOIN
SELECT column_name(s)
FROM table_name1
LEFT JOIN table_name2 
ON table_name1.column_name=table_name2.column_name
RIGHT JOIN
SELECT column_name(s)
FROM table_name1
RIGHT JOIN table_name2 
ON table_name1.column_name=table_name2.column_name
FULL JOIN
SELECT column_name(s)
FROM table_name1
FULL JOIN table_name2 
ON table_name1.column_name=table_name2.column_name
LIKE
SELECT column_name(s)
FROM table_name
WHERE column_name LIKE pattern
ORDER BY
SELECT column_name(s)
FROM table_name
ORDER BY column_name [ASC|DESC]
SELECT
SELECT column_name(s)
FROM table_name
SELECT *
SELECT *
FROM table_name
SELECT DISTINCT
SELECT DISTINCT column_name(s)
FROM table_name
SELECT INTO
SELECT *
INTO new_table_name [IN externaldatabase]
FROM old_table_name
or
SELECT column_name(s)
INTO new_table_name [IN externaldatabase]
FROM old_table_name
SELECT TOP
SELECT TOP number|percent column_name(s)
FROM table_name
TRUNCATE TABLE
TRUNCATE TABLE table_name
UNION
SELECT column_name(s) FROM table_name1
UNION
SELECT column_name(s) FROM table_name2
UNION ALL
SELECT column_name(s) FROM table_name1
UNION ALL
SELECT column_name(s) FROM table_name2
UPDATE
UPDATE table_name
SET column1=value, column2=value,...
WHERE some_column=some_value
WHERE
SELECT column_name(s)
FROM table_name
WHERE column_name operator value
 WHERE clause operators

WHERE clause examples
WHERE col1 LIKE ‘D%’ #string starts with D
WHERE col1 LIKE ‘%L’ #string ends with L
WHERE col1 LIKE ‘___L’ #a string with 4 characters  before L
Date field extractions
YEAR(dateField) = XXXX
MONTH(dateField) => 3
ORDER BY colName #defaults to ascending
ORDER BY colName DESC #reverse
ORDER BY col1 DESC, col2 ASC #2 level sorting
SELECT col1 FROM tableName ORDER BY col1 DESC, col2 ASC;
LIMIT 5, 10 #get the first 5, then the next 10
SELECT col1 FROM tableName LIMIT 5,10;
SELECT CONCAT(col1, “ “, col2, “ “, col3) AS ‘colName’ # concats & separates with a space and places it in a column named ‘colName’
SELECT CONCAT(firstName, “,“, lastName)  AS ‘Full Name’
Can be used multiple times in a single query
select group_concat(distinct col)
concat duplicates into one field, separated by commas
SELECT DISTINCT col1 FROM tableName
returns distinct records based on col1
SELECT COUNT(*) from tableName WHERE col1 = X
coutns the # of records in table name that match the where clause
SELECT col1, COUNT(*) FROM tableName GROUP BY col1
retrieves the total # of records, grouped by col1
SELECT MONTH(birth_date) AS ‘Month’, COUNT(*) FROM tableName GROUP BY Month ORDER BY Month
the group by && order by use the ‘AS’ column name
SELECT col1, COUNT(col1) AS ‘Amount’ FROM tableName GROUP BY col1 HAVING col 1 > X

SELECT col1 FROM tableName WHERE col1 BETWEEN ‘min’ AND ‘max’
select records where col1 is between the min & max arguments
SELECT col1 FROM tableName WHERE col1 IN (‘val1’, ‘val2’, ‘etc.’)
select records where col1 has a value in the list provided
AGGREGATE
will be columns when returned, can optionally use the AS clause to specify the column name
used to compute against a returned column of numeric data from your select statement
if used in a statement containing no group by clause, it is equivalent to grouping on all rows
MIN(col) AS ‘Minimum Value’
MAX(col)
MAX(col) – MIN(col) #this will give you the range
SUM(col)
AVG(col)

ABS() #absolute value for a variable
ACOS(), ASIN(), ATAN(), ATAN2(), COS(), SIN(), TAN() #trigonometry functions
COUNT()
DEGREES()
EXP() #exponents
FLOOR() #the largest number not greater than the variable passed to it
CEILING() #the smallest number greater than the variable passed to it
LOG() #logarithmic function
MOD() #the remainder from division
PI() #returns the value of pi
RAND() #returns a random number
POWER()
RADIANS()
ROUND()
SQRT()
STD() #standard deviation
TRUNCATE

operators
= equal
> greater than
< less than
>= greater than or equal
<= less than or equal
<>, != not equal to
LIKE “%this%”
% is a wildcard, allow any # of chars in its position
%before
after%
OR, ||, AND,  &&, NOT, !, IS NOT NULL, IS NULL,
constraints
constraint: a rule associated with a  column that the data entered into that column must follow
unique #no two records can have the same value
not null #this column cannot be null
primary key #defines a unique identification of each record/row/tuple in a table
data types
Numeric
TINYINT: -128 to 127
SMALLINT -32767 to 32768
MEDIUM INT: -8388608 to 8388608
INT: -2^31 to 2^31
BIGINT: 2^63 both ways
FLOAT: decimal spaces
DOUBLE: even bigger decimal places
number(#)
number(#,#)
#1 = total size
#2 = total # to the right of the decimal
String
CHAR: character string with a fixed length
char(#)
VARCHAR: character string with a length that’s variable
varchar(#)
BLOB: can contain 2^16 bytes of data
ENUM: character string that has a limited number of total values, which you must define
Great for MALE/FEMALE options
SET: a list of legal possible character strings. Unlike ENUM, a SET can contain multiple values in comparison to the one legal value with ENUM
You can pick both MALE & FEMALE as a value, unlike a ENUM which requires you to select either or
Date
DATE: YYYY-MM-DD
TIME: HH:MM:SS
DATETIME: YYYY-MM-DD HH:MM:SS
TIMESTAMP: YYYYMMDDHHMMSS
YEAR: YYYY
column defs
KEY column
PRI: primary key or is one of the columns in a multiple-column primary key
UNI: unique key, the first column of a unique-valued index that cannot contain NULL values
MUL: the column is the first column of a non-unique index in which multiple occurrences of a given value are permitted within the column
Functions
DDL
Create database
CREATE DATABASE databaseName(col1 datatype constraints, col2 datatype constraints);
Use database
USE databaseName;
Show selected databased
SELECT DATABASE();
Destroy a database
DROP DATABASE IF EXISTS databaseName;
Use a database
Use databaseName;
Create a table
CREATE TABLE tableName( columnNameX DataType constraint, columnNameX …etc)
Primary key
PRIMARY KEY(columnNameX, columnNameX)
Use existing columns as the primary key, can be multiple to say ‘both of these values together have to be unique)
Describe a table
DESCRIBE tableName;
Shows you all the columns, and column parameters
Good to see the order in which you need to put data into the table
Change table name
RENAME TABLE table1 to table1NewName, table2 to table2NewName
#can rename 1/multiple tables
Add new column to table
ALTER TABLE tableName ADD columnName dataType AFTER columnName
Inserts a new column after the specified column
BEFORE columnName #instead of AFTER, you can use BEFORE
Change column name in a table
ALTER TABLE tableName CHANGE columName columnNewName columnParameters
modify a column data type
ALTER TABLE tableName MODIFY COLUMN columnName newDataType
remove a column from a table
ALTER TABLE tableName MODIFY COLUMN tableName
Show tables
SHOW TABLES;

users
show privileges;
#shows you the current users privileges
views
a virtual table based on the result-set of an SQL statement
contains rows & columns, like a real table
the fields in a view are fields from one/more real tables in the db
a view always shows up-to-date data; the db engine recreates the data using the view’s sql statement every time a user queries a view
examples
create a view called [Current Product List]
CREATE
    [OR REPLACE]
    [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]
    [DEFINER = { user | CURRENT_USER }]
    [SQL SECURITY { DEFINER | INVOKER }]
    VIEW view_name [(column_list)]
    AS select_statement
    [WITH [CASCADED | LOCAL] CHECK OPTION]
definitions:
view name: name of the view, do not enclose in quotes
select statement: a complete query
column list: a list of names for the view’s columns right after the view name where the names must be unique, the # of names in column list must be the same as the number of columns retrieved by the select statement
create or replace: will create a new view, or replace an existing view if one with the matching name exists
query a view called  [current product list]
SELECT * FROM [Current Product List]
DML (crud)
create
INSERT INTO tableNAme VALUES(val1,val2,valX)
Must be in the exact order of the column names in the table
Strings must be quoted either single/double will work
read

SELECT * FROM tableName;
SELECT col1, col2 FROM tableName;
SELECT col1,col2 from tableName where col=’val’
SELECT col1, col2 FROM tableName where YEAR(datxeCol) = XXXX
SELECT col1, col2 FROM tableName WHERE col1 >= ‘X’ && (col2 =X || col3 = X)
SELECT col1, col2 FROM tableName where col1 IS NULL || col2 IS NOT NULL
SELECT col1, col2 FROM tableName ORDER BY col3
col1 AS ‘colName’, col2 AS ‘colName’
SELECT col1 AS ‘First Name’, col2 AS ‘Last Name’ FROM tableName
SELECT * FROM contacts WHERE created_at BETWEEN DATE_SUB(NOW(), INTERVAL 30 DAY) AND NOW();
return contacts where the created_at field within the last 30 days
update
UPDATE  tableName SET columnName WHERE col = blah

delete
Delete a record from table
DELETE FROM tableName WHERE col = blah
Insert comments into queries
#SINGLE LINE COMMENT,
/* MULTI LINE COMMENT */
JOINS
Inner join: (just join) only retrieves records that exist in both table1 and table 2 that match the ON clause
SELECT table1.col1, table2.col2
FROM table1
INNER JOIN table2
ON table1.col = table2.col

left join: retrieves all records from table1, and any records from table 2 that match the ON clause
SELECT table1.col1, table2.col2
FROM table1
LEFT JOIN table2
ON table1.col2 = table2.col2

right join: retrieves a set of records which matches every entry in the right table regardless of any matching entry in the left table
SELECT tabel1.col1, table2.col2
FROM table1
RIGHT JOIN table2
ON table1.colX = table2.colX
rarely used since this is just a backwards LEFT JOIN

outer join: retrieve all records in both tables regardless of any match, where no match exists the missing side will contain NULL
on MySQL you have to use UNION
SELECT table1.col1, table2.col2
FROM table1
LEFT JOIN table2
ON table1.col2 = table2.col2
UNION
SELECT tabel1.col1, table2.col2
FROM table1
RIGHT JOIN table2
ON table1.colX = table2.colX
valid use of the where clause, notice there are two (one before the union, and one after it)

Subqueries
notes
- A subquery must be enclosed in parentheses.
- Use single-row operators with single-row subqueries, and use multiple-row operators with multiple-row subqueries.
- If a subquery (inner query) returns a null value to the outer query, the outer query will not return any rows when using certain comparison operators in a WHERE clause.
A scalar subquery:
 is a subquery that returns exactly one column value from one row.
A scalar subquery is a simple operand, and you can use it almost anywhere a single column value or literal is legal.
If the subquery returns 0 rows then the value of scalar subquery expression in NULL and if the subquery returns more than one row then MySQL returns an error.
syntax
SELECT col_list
FROM table1
WHERE operator
(select col_list
FROM table2);
#subquery is exected first
#the outerquery is matched against the subquery
#this is an inner join


try these
number 1
select
  a.*,
  COUNT(a.ID) SUMFILL
from
  quizz a
  left join quizz_result countt
    on countt.QUIZZ_ID = a.ID
group by
   a.ID
EXPLAIN yourSelectStatementHere
Make sure that you have indexes on the fields that are in your WHERE statements and ON conditions, primary keys are indexed by default but you can also create indexes manually if you have to.
Double check if you really need LEFT JOINS, if no, use INNER JOINs.
You may also want to consider reducing the load on the database by using caching applications like sphinxsearch and memcached
Check none of your joins are to views rather than actual tables
crazy select statement
SELECT
  u.user_name as user_name,
  u.total_points as total_points,
  u.user_id as user_id,
  (SELECT COUNT(a.id) FROM articles a
   WHERE a.user_id = u.user_id) as user_total_articles_published,
  (SELECT COUNT(r.id) FROM replies r
   WHERE r.user_id = u.user_id) as user_total_replies_published,
  (SELECT COUNT(v.id) FROM votes v
   WHERE v.user_id = u.user_id) as user_total_votes_done
FROM users as u
ORDER BY u.total_points DESC
LIMIT 10
triggers
trigger: code run just before/after an insert, update, or delete SQL event occurs on a particular database table
can verify/modify the incoming data, perform calculations, run futher sql commands
requirements
unique name
table which triggers the event, a single trigger can only monitor a single table
when the trigger occurs: BEFORE / AFTER an INSERT, UPDATE, or DELETE
trigger body: set of SQL commands to run
old.col_name = previous value
new.col_name = new value

http://www.sitepoint.com/how-to-create-mysql-triggers/
events
events: temporal triggers: scheduled by time rather than a table update
database-only cron jobs
http://www.sitepoint.com/how-to-create-mysql-events/
Definitions
Primary key: a unique value for each record
Foreign key: used to reference primary key’s of another table
Can have a different name from the primary key name
Doesn’t have to be unique
Can have the NULL value
Atomic Tables:
Every table should define one thing
Define how to describe that thing
Pull out any descriptions that define something else, e.g.
Student Table should not contain student CLASSES or student TEACHERS, get it?
If a data requires more than ONE COLUMN to describe, it deserves its own table
If your columns end in S, e.g JOBS then it is a good candidate to have its own table
Don’t include multiple values in one cell!
describe & explain
the DESCRIBE and EXPLAIN statements are synonyms. In practice,
the DESCRIBE keyword is more often used to obtain information about table structure,
DESCRIBE is a shortcut for SHOW COLUMNS.
whereas EXPLAIN is used to obtain a query execution plan (that is, an explanation of how MySQL would execute a query).
When you precede a SELECT statement with the keyword EXPLAIN, MySQL displays information from the optimizer about the statement execution plan.
That is, MySQL explains how it would process the statement, including information about how tables are joined and in which order.
columns:
id: the select identifier
select_type: the select type
table: the tablef or the output row
type: the join type
possible_keys: the possible indexes to choose
key: the index actually chosen
key_len: the length of the chosen key
ref: the columns compared to the index
rows: estimate of rows to be examined
extra: additional information
To give a hint to the optimizer to use a join order corresponding to the order in which the tables are named in a SELECT statement, begin the statement with SELECT STRAIGHT_JOIN rather than just SELECT.
If you have a problem with indexes not being used when you believe that they should be, run ANALYZE TABLE to update table statistics, such as cardinality of keys, that can affect the choices the optimizer makes.

Pictures
