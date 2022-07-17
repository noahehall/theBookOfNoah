# looker

- data (mesh) viz tool for sql databases

## links

- [looker user guides](https://connect.looker.com/)
- docs
  - [filrering & limiting data](https://docs.looker.com/exploring-data/filtering-and-limiting)
  - [creating looker expressions](https://docs.looker.com/exploring-data/creating-looker-expressions)
  - [exploring data](https://docs.looker.com/exploring-data/exploring-data)
  - [using table calculations](https://docs.looker.com/exploring-data/using-table-calculations)

## basics

- its all about enabling developers to aggregate disparate SQL databses and surface the data mesh to biz for doing their thing

### terms

- dimensions: table columns
- measures: derived values based on dimension data, e.g. count, total, etc
- folder: like an S3 bucket for Looks
- Looks: not quite sure, but i think these are the data sets pulled from data sources

### filtering

- basic: drop down selectors
- advanced matches: extended match conditions for a specfic field
- custom filters: are used to create a database query
  - you cannot refer to measures in a custom filter, or use any functions that rely on query results
- FYI
  - filtering on dimensions removes raw data before ANY calculations are made
  - filtering on measures occur after results are calculated

### limits

- supports 4k rows & unlimited columns
- however you should limit the rows/columns rendered at any given time
- FYI
  - if you reach a row limit, you cannot sort by row totals or table calculations

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

### Explores

- reusable queries written in LookML modeling language
- these explores can then be reused across Looks

### Looks

### LookML

- modeling language for working with SQL databases
  - the idea is to overcome shortcomings of SQL
  - instead of writing SQL, you write LookML and looker will execute queries against data sources
  - a data file containing queries, expors, views, joins etc
- use cases
  - define _reusable_ dimensions, measures, joins etc
  - lookML language abstracts away the underlying SQL used to execute the queries
- sql equivalencies
  - explores: think this grabs data sources
    - `explore: tableName {...}` === `FROM tableName`
    - `join: tableName {...}` === `LEFT JOIN tableName`
    - value types
      - `type: left_outer` === should be a match on any of the SQL join types
      - `sql_on: ${tableName.col} = ${tableName.col}` === `ON tableName.col = tableName.col`
      - `relationship: poop` e.g. many_to_one, etc
  - views: like a table in a database; a view into an explore
    - `view: tableName {...}`
    - `dimension: tableCol {...}`
    - `measure: revenue {...}`
    - value types
      - `sql: ${TABLE}.tableCol ;;`
      - `type: poop` e.g. number, date, sum (for measures), etc
      - `value_format_name: usd` dunno but some sort of field format
      - `html: {{ tableCol._value | capitalize }}` think mustache templates

### Project

- collection of file definitions
  - how to connect to data sources
  - how to query data sources
  - end user UI behavior
- view files: represent tables in a database
- dimensions: represent columns in in tables
- creating
  - when a new LookerML project is created, dimensions will automatically be generated for each column in your db table
  - after a project is created, you can click `create view from table` to add additional views for new tables created in the db

## GUI

### Develop

- projects > develop dropdown > toggle enable development

### Explore

### Admin

## workflows

- in general
  - enable development mode (sandbox for testing changes)
  - connect to a DB
  - create a LookML Project
