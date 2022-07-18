# looker

- data (mesh) analysis/viz tool for sql databases
- bookmark
  - https://connect.looker.com/learning
    - lookml dev > creating explorers > creating measures

## links

- [looker user guides](https://connect.looker.com/)
- docs
  - [changing GUI explore menu & field picker](https://docs.looker.com/data-modeling/learning-lookml/explore-menu-and-field-picker)
  - [working with joins](https://docs.looker.com/data-modeling/learning-lookml/working-with-joins)
  - [how looker generates sql](https://docs.looker.com/data-modeling/learning-lookml/how-looker-generates-sql)
  - [filtering & limiting data](https://docs.looker.com/exploring-data/filtering-and-limiting)
  - [creating looker expressions](https://docs.looker.com/exploring-data/creating-looker-expressions)
  - [exploring data](https://docs.looker.com/exploring-data/exploring-data)
  - [using table calculations](https://docs.looker.com/exploring-data/using-table-calculations)
  - [sql runner basics](https://docs.looker.com/data-modeling/learning-lookml/sql-runner)
  - [how to optimize sql with explain](https://community.looker.com/technical-tips-tricks-1021/how-to-optimize-sql-with-explain-30772)
- ref
  - [index](https://docs.looker.com/reference)
  - [dimension filter and parameter types](https://docs.looker.com/reference/field-reference/dimension-type-reference)
  - [filter expressions](https://docs.looker.com/reference/filter-expressions)
  - [lookml syntax basics](https://docs.looker.com/data-modeling/learning-lookml/what-is-lookml)

## basics

- its all about enabling developers to aggregate disparate SQL databses and surface the data mesh to biz for doing their thing
- generates SQL queries and submits them against a database connection
- formulates SQL queries based on a LookML project that describes the relationship between tables and columns in the database

### terms

### limits

- supports 4k rows & unlimited columns
- however you should limit the rows/columns rendered at any given time
- FYI
  - if you reach a row limit, you cannot sort by row totals or table calculations

### Folder

- like an S3 bucket for Looks

#### Looks

- something like a dashboard?

## Marketplace Projects

- dunno

## LookML

- container for projects aswell as the name for Looker's modeling language for working with SQL databases
  - the idea is to overcomxe shortcomings of SQL
  - instead of writing SQL, you write LookML and looker will translate then execute queries against data sources
  - a data file containing queries, explores, views, joins etc
    - kinda like a json DSL with embedded sql
- core components
  - model: specifies the target database
  - explore: populates the `FROM` clause in a query
  - fields: either a dimension/measure, populate the `SELECT` clause in a query
  - filter: expressions applied to fields, populate the `WHERE` and `HAVING` clauses
  - sort order: the fields & type of sort, populate the `ORDER BY` clause

```sql

-- how lookml translates to sql
SELECT
   <dimension>, <dimension>, …
   <measure>, <measure>, …
FROM <explore>
LEFT JOIN <view> ON …
LEFT JOIN <view> ON …
WHERE (<dimension_filter_expression>) AND (<dimension_filter_expression>) AND …
GROUP BY <dimension>, <dimension>, <dimension>, …
HAVING <measure_filter_expression> AND <measure_filter_expression> AND …
ORDER BY <dimension> | <measure>
LIMIT <limit>

```

```jsonc
// example model file

/// model fields
connection: "some_db_connection"
datagroup: some_name {...}
label: "displayed in GUI"
include: "views/to/include/path"
persist_with: dunno

/// list of explores definitions avail in the model
explore: give_me_a_name {...}
```

### Project

- container for models

#### Model

- determines which DB connections are permitted for child explores
- specifies a database connection and the set of Explores that use those connection(s).
- defines the Explores themselves and their relationships to other views.

##### Explores

- a view that users can query, goes in the `FROM` clause in an SQL query
  - can be created from a single view/table, or combine multiple views by using a `join: {...}`
  - the explore technically is the base table + any joins, and looker puts this whole thing into an SQL from clause
- indirect joins: dont join to a base table, but to another view in the explorer
  - causes perf issues as it doesnt join on keys, but on dimensions
- these explores can then be reused across Looks
- creating
  - when a new LookerML project is created, dimensions will automatically be generated for each column in your db table
  - after a project is created, you can click `create view from table` to add additional views for new tables created in the db
- components
  - explorer: some_name; a name for the base view, is used in the `FROM `
  - label: the display name
  - description: displayed in a tooltip on hover
  - fields: limits the scope of fields that are available within an explor/view
  - group_label: combines expores into custom groups
  - join: combine multiple views
    - from: used if you need to alias the base table, e.g. to join the same view twice
    - view_label: the display name for a view
      - can merge multiple views by giving them the same view label name,
    - type: the type of join (right joins not supported)
      - left\_[outer|inner] (default)
      - full_outer
      - cross
    - sql_on: the keys to use in the join
    - relationship: one*to*[one|many], many*to*[one|many]

##### views

- represent actual tables in a database or a derived table (like a CTE)
- atleast ONE dimension in a view needs to be defined as a primarty_key

##### dimensions

- you will spend a chunk of your time in here creating dimensions for biz
  - learn how to setup various dimensions, that will surface a number a different value types for a single db field (e.g. ways to view a date (monthly, quarterly etc))
- a groupable field that can be used to filter query results
  - a column in a table
  - a fact/numerical value
  - a derived value, based on the values of other fields
- types
  - string
  - number
  - yesno: logical condition, e.g. true/false, 0/1, etc
  - tier: buckets a dimension using case statements
    - classic
    - interval
    - integer
    - relational
  - dimension groups: used to create multiple (display type) date/time fields from a single column
    - duration: calcualtes a set of itnerval-based duration dimensions
      - intervals: e.g. second, minute,hour, etc
    - time: for time time fields
      - timeframes: cast a date/timestamp into different forms of time

##### measures

- algebra across multiple rows in a table
  - similar to aggregate fns in SQL e.g. COUNT()
- types
  - sum
  - average
  - count: only counts the primary key of a table, doesnt require a `sql: ...` param
  - count_distinct: can count any dimension, requires an `sql: ${poop}`

##### filters

- basic: drop down selectors
- advanced matches: extended match conditions for a specfic field
- custom filters: are used to create a database query
  - you cannot refer to measures in a custom filter, or use any functions that rely on query results
- FYI
  - filtering on dimensions removes raw data before ANY calculations are made
  - filtering on measures occur after results are calculated

## GUI

- there is a gear icon generally in the top right of every page
  - click it for stuff
  - generally thats where the share/download/etc stuff is

### Develop

- develop > projects > develop dropdown > toggle enable development
  - haha the fkn toggle is in the lower left of the screen too

#### sql runner

- run queries against connected databases
  - you can share/download/save queries
  - great for playing around and learning the schema
  - hover over everything theres stuff hidden everywhere
- sidebar
  - database tab: select connection & Schema, review all tables n things
    - if you have steady hands, if you hover over a table/column name, to the extreme far right (lol) theres a gear icon with pre-written queries
  - model: specifies how views join to Explores
  - history: review/rerun previous queries by clicking them
- main view
  - SQL query box: write queries in the databases language, not lookerml
  - after running a query (click run) you can copypasta the URL to share it

### Explore

- this is where:
  - biz can come to WYSWIG data analysis
  - you can play around with data, and most importantly view the SQL behind looker queries
- model list: with a list of child explores for each, click one to launch the explore
  - main view: shows folders and dashboards
- explore details: after clicking an explore, it will show you a list of fields available to begin your data viz journey
  - main view
    - data tab:
      - click SQL to view what sql
      - click results for a tabular view

### Admin

### dashboards

- are per folder, and based on the Looks within that folder
- viz types
  - categorical data: column, grouped column, bar
  - time series: line, overlay
  - pairs: table
  - relations: scatter plot, heat map
  - distributions: line histogram, colum histogram, scatter plot
  - data composition: donut, pie, area, stacked bar, stacked percent, stacked column
- sharing
  - data delivery
    - snapshot in time
    - snapshot current (i.e. justa link to the dashboard)
    - scheduled

## workflows

- in general
  - enable development mode (sandbox for testing changes)
  - connect to a DB
  - create a LookML Project
  - verify/create dimensions
  - create measures
  - create explores
