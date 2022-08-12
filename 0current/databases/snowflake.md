# Snowflake

## links

- [views vs tables](https://docs.snowflake.com/en/user-guide/views-introduction.html)
- docs
  - [loading data into snowflake](https://docs.snowflake.com/en/user-guide-data-load.html)
  - [altering a stage](https://docs.snowflake.com/en/sql-reference/sql/alter-stage.html)
  - [date and time input and output](https://docs.snowflake.com/en/user-guide/date-time-input-output.html)
  - [describe stage to get file format, copy and location](https://docs.snowflake.com/en/sql-reference/sql/desc-stage.html)
- errors
  - [query failed with timestamp is not recognized](https://community.snowflake.com/s/article/Query-Failed-With-Error-Timestamp-2020-09-01-is-not-recognized)

```sh

# inspection
select
  current_version();
  current_client();
```

- [manually uploading](https://docs.snowflake.com/en/user-guide-data-load.html)
	- you can upload csv files to your user stage in snowflake
	- then merge/copy that into the appropriate table
- [uploading from local to stage](https://docs.snowflake.com/en/user-guide/data-load-local-file-system.html)
- [uploading from stage to a table]
```sh
# stage a file in an internal user/table stage at a specific path
PUT file:///data/mydata.csv @%t1/United_States/California/Los_Angeles/2016/06/01/11/
# different ways to load the data from stage into a table
## without specifying extension (e.g. mydata.csv)
COPY INTO t1 from @%t1/United_States/California/Los_Angeles/2016/06/01/11/mydata;
## copy specify files/pattern
COPY INTO t1 from @%t1/United_States/California/Los_Angeles/2016/06/01/11/
  FILES=('mydata1.csv', 'mydata1.csv');
COPY INTO t1 from @%t1/United_States/California/Los_Angeles/2016/06/01/11/
  PATTERN='.*mydata[^[0-9]{1,3}$$].csv';
## copying multiple files
COPY INTO load1 FROM @%load1/data1/ FILES=('test1.csv', 'test2.csv', 'test3.csv')

# transforming the data on load from stage to table
## trimming white space & removing quotations
COPY INTO mytable
FROM @%mytable
FILE_FORMAT = (TYPE = CSV TRIM_SPACE=true FIELD_OPTIONALLY_ENCLOSED_BY = '0x22');

# stages
## create a named stage
### specifying the file format options removes the need to do it again when loading from stage to a table
CREATE OR REPLACE STAGE my_stage
  FILE_FORMAT = my_csv_format;
CREATE OR REPLACE STAGE my_stage
  file_format = (type = 'CSV' FIELD_DELIMITER = '|' SKIP_HEADER = 1);
# ^^ set set FORCE = TRUE to override when loading data from stage

## uploading from local to a user stage
### from /data/data.csv on your local to /staged/data.csv
### @~ === user stage
PUT file:///data/data.csv @~/staged;
## uploading from local to a table stage
### @@ === table stage
PUT file:///data/data.csv @%mytable;
## uploading from local to named stage
### @ === named stage
PUT file:///data/data.csv @my_stage;

## inspection
### see files in your user stage
LIST @~;
### in table stage
LIST @%mytable;
### named stage
LIST @my_stage;
```
