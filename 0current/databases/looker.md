# looker

- data (mesh) analysis/viz tool for sql databases
- bookmark
  - https://connect.looker.com/learning
    - The Looker Marketplace
  - https://docs.looker.com/sharing-and-publishing/action-hub
    - all about actions (integrations)
      - enable dev mode > admin > actions
    -  https://github.com/looker-open-source/actions/blob/master/docs/action_api.md


## links

- [looker user guides](https://connect.looker.com/)
- docs
  - [000 best practices](https://help.looker.com/hc/en-us/articles/360001766908-Best-Practice-Create-a-Positive-Experience-for-Looker-Users)
  - [000 how projects work](https://docs.looker.com/data-modeling/getting-started/how-project-works)
  - [000 model & view files](https://docs.looker.com/data-modeling/getting-started/model-development)
  - [000 other project files](https://docs.looker.com/data-modeling/getting-started/other-project-files)
  - [changing GUI explore menu & field picker](https://docs.looker.com/data-modeling/learning-lookml/explore-menu-and-field-picker)
  - [creating looker expressions](https://docs.looker.com/exploring-data/creating-looker-expressions)
  - [exploring data](https://docs.looker.com/exploring-data/exploring-data)
  - [filtering & limiting data](https://docs.looker.com/exploring-data/filtering-and-limiting)
  - [how looker generates sql](https://docs.looker.com/data-modeling/learning-lookml/how-looker-generates-sql)
  - [how to optimize sql with explain](https://community.looker.com/technical-tips-tricks-1021/how-to-optimize-sql-with-explain-30772)
  - [sql runner basics](https://docs.looker.com/data-modeling/learning-lookml/sql-runner)
  - [using table calculations](https://docs.looker.com/exploring-data/using-table-calculations)
  - [working with joins](https://docs.looker.com/data-modeling/learning-lookml/working-with-joins)
- ref
  - [000 index](https://docs.looker.com/reference)
  - [000 lookml syntax basics](https://docs.looker.com/data-modeling/learning-lookml/what-is-lookml)
  - [field reference](https://docs.looker.com/reference/field-reference)
  - [field types](https://docs.looker.com/reference/field-reference/dimension-type-reference)
  - [dimension groups](https://docs.looker.com/reference/field-params/dimension_group)
  - [dimensions](https://docs.looker.com/reference/field-params/dimension)
  - [explore](https://docs.looker.com/reference/explore-params/explore)
  - [filter expressions](https://docs.looker.com/reference/filter-expressions)
  - [measure](https://docs.looker.com/reference/field-params/measure)

## basics

- its all about enabling developers to aggregate disparate SQL databses and surface the data mesh to biz for doing their thing
- generates SQL queries and submits them against a database connection
- formulates SQL queries based on a LookML project that describes the relationship between tables and columns in the database
- fanout problem: when aggregating values after a table join (e.g. one to many) the many side of the table causes duplicate values of the one side of the table in the resulting table, because each row of the many will cause the single row of the one to be listed for each tuple

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
- basic syntax
  - strings can be wrapped in double quotes
  - sql statements end in `;;`
  - generally any object accepts one of:
    - description: displayed in a tooltip on hover and other detail places
    - group_label: combines explores/views/fields into custom groups
    - hidden:
    - label: the display name
    - view_label: for explores/views/joins
      - if given the same name as another entity, the fields of this view will be placed with that other entity in the GUI

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

### Project

- container for models

#### Model

- `some_name.model` file
- determines which DB connections are permitted for child explores
- specifies a database connection and the set of Explores that use those connection(s).
- defines the Explores themselves and their relationships to other views.

```scala
// example model file

/// model fields
access_grant: identifier
case_sensitive: yes or no
connection: "some_db_connection"
datagroup: some_name {...}
explore: identifier
fiscal_month_offset: number
include: "include/these/views/can/use/**/wildcard"
label: "displayed in GUI"
map_layer: identifier
named_value_format: identifier
persist_for: "string"
persist_with: datagroup-ref string dunno
test: identifier
view: identifier
week_start_day: monday or ...
// list of explores definitions avail in the model (see explores)
```

##### Explores

- explore adds an existing view to the Explore menu of Looker. Although an explore can be written inside of a view file, it is almost always best practice to write it within a model file instead.
- a view that users can query, goes in the `FROM` clause in an SQL query
  - can be created from a single view/table, or combine multiple views by using a `join: {...}`
  - the explore technically is the base table (view) + any joins (other views, but actually poop.view files), and looker puts this whole thing into an SQL from clause
- indirect joins: dont join to a base table, but to another view in the explorer
  - causes perf issues as it doesnt join on keys, but on dimensions
- these explores can then be reused across Looks
- creating
  - when a new LookerML project is created, dimensions will automatically be generated for each column in your db table
  - after a project is created, you can click `create view from table` to add additional views for new tables created in the db

```scala
// example explore definition

explore: my_api_name {
  // everything at this level is considered the base view
  label: "my display name"
  view_name: "base view name"
  hidden: no
  discription: "display me as a tooltip on hover"
  group_label: "group me under this label instead of the model label in the GUI"
  fields: [
    explore_name.only_this_field,
    explore_name.and_this.field
   ]

  join: poop {
    // define another view directly on the explore
    // @see # Joins
    ...
  }
}

```

#### views

- `somename.view` declaring LookML + SQL statements for analyzing a particluar sql table, the dimensions, etc
  - represent actual tables in a database or a derived table (like a CTE)
  - atleast ONE dimension in a view needs to be defined as a primarty_key
  - views can be part of multiple models by being included within a model definition
- field picker: the fields (dimensions, measures, etc) listed in the view will be grouped under the View name on the explores detail screen

```scala
// example view file
view: my_api_name {
  label: "overrides view_label in all explores & joins"
  description: "yada yada yada"
  hidden: yes|no // only hides it, but still accessible
  sql_table_name: some_sql_table ;;

  // then a list of dimensions (see dimensions)
}

```

#### fields

- a field can be a dimension, dimension group, measure, filter or Parameter
- type groupings (see field types link)
  - dimenions, field, parameter: date, date_time, number, string, yesno
  - dimensions: bin, distance, location, tier, zipcode, duration
  - dimension group: time
  - parameter: unquoted
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
- symmetric aggregation: lookers automatic solution to the fan out problem with 2 premises
  - must set a primary key(s) in the view
  - correctly specify the relationship between tables in the join
  - how it works
    - count(\*): applies a COUNT(DISTINCT primarykey) clause in the sql
    - SUM|AVG: applies a DISTINCT(SUM (MD5 has to the primary key)) - MD5(primary) in the sql
      - just google both to get the algebra if you're not in looker land

##### dimensions

- you will spend a chunk of your time in here creating dimensions for biz
  - learn how to setup various dimensions, that will surface a number a different value types for a single db field (e.g. ways to view a date (monthly, quarterly etc))
- a groupable field that can be used to filter query results
  - a column in a table
  - a fact/numerical value
  - a derived value, based on the values of other fields

```scala
// example dimensions

// number but same with string
dimension: account_number {
  primary_key: yes
  type: number
  sql: ${TABLE}.account_number ;;
  label: "display name"
  view_label: "put me under the view with this name"
  group_label: "put me under this group instead of anything else"
  group_item_label: "with this name when in a group"
}

// time with dimension group
dimension_group: created {
  type: time
  timeframes: [raw, time, date, week, month, quarter, year]
  sql: ${TABLE}.created_date ;;
}

```

##### measures

- algebra across multiple rows in a table
  - similar to aggregate fns in SQL e.g. COUNT()
- types
  - sum
  - average
  - count: only counts the primary key of a table, doesnt require a `sql: ...` param
  - count_distinct: can count any dimension, requires an `sql: ${poop}`

```scala
// example measures

measure: average_annual_revenue {
  type: average
  sql: ${annual_revenue} ;;
  value_format_name: custom_amount_value_format
}

```

##### filters

- basic: drop down selectors
- advanced matches: extended match conditions for a specfic field
- custom filters: are used to create a database query
  - you cannot refer to measures in a custom filter, or use any functions that rely on query results
- FYI
  - filtering on dimensions removes raw data before ANY calculations are made
  - filtering on measures occur after results are calculated

##### Parameters

#### joins

- can be in an explore/view definition file
- combine multiple views
  - from: used if you need to alias the base table, e.g. to join the same view twice
  - type: the type of join (right joins not supported)
    - left\_[outer|inner] (default)
    - full_outer
    - cross
  - sql_on: the keys to use in the join
  - relationship: one*to*[one|many], many*to*[one|many]
    - the left side is the outer view
    - the right side join: this_view
    - check: [one|many] of outer vew can have [one|many] of inner view

```scala
join: some_other_view {
  view_label: "in the gui"
  ...
}
```

#### Folders

##### dashboards

- are per folder, and based on the Looks within that folder
  - to include in the default dashboard folder, you have to add it via include in the `.model` file of the lookml project
    - generally you include all dashboards at the model level via `include: "*.dashboard.lookml"`
- collection of queries & filters displayed as visualizations
- dashboard types: you can convert between the two
  - user defined: created by devs/end users in the GUI
    - updated: when the dashboard/underlying look is edited
    - persisted: in the users/shared folder
  - lookml: created by devs in a yaml file
    - updated: when the lookml file is updated
    - in git repo that manages the looker project
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
- explore details: after clicking an explore, it will show you a list of views with their child fields (field picker in docs) available to begin your data viz journey
  - main view
    - data tab:
      - click SQL to view what sql
      - click results for a tabular view

### Admin

### dashboards

## workflows

- in general
  - enable development mode (sandbox for testing changes)
  - connect to a DB
  - create a LookML Project
  - verify/create dimensions
  - create measures
  - create explores
