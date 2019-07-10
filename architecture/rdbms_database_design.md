# books
   - database design 2nd edition
      - adrienne watt
      - nelson eng
      - chapter 5 data modelling


# terminology
   - `data redundancy`
      -  a situation that occurs in a database when a field needs to be updated in more than one table
      - issues
         - inconsistency in data format
         - same information being kept in several different places
   - `data inconsistency`
      - a situation where various copies of the same data are conflicting
      - issues
         - wastes storage space
         - duplicates efforts
   - `data isolation`
      - a property that determines when and how changes made by one operation become visible to other concurrent users and systems
   - `data integrity`
      - the maintenance and assurance that the data in a database are correct and consistent
         - data values must satisfy certain consistency constraints that are specified in the application programs
         - difficulty in making changes to the application programs in order to enforce new constraints
   - `concurrency`
      - the ability of the database to allow multiple users access/modify the same record without adversely affecting transaction processing
   - `data`
      - factual information such as measurements or statistics about objects and concepts
   - `data element`
      - a single fact/piece of information
   - `metadata`
      - defines and describes the data and relationships between tables in the database

# fundamental concepts
## database
   - a shared collection of related data used to support the activities of a particular organization
   - properties
      - a representation of some aspect of the real world or a collection of data elements(facts) representing real world information
      - is logical, coherent and internally consistent
      - designed, built and populated with data for a specific purpose
      - each data item is stored in a field
      - a combination of fields make up a table
   - database management system (DBMS)
      - collection of programs that enable users to create and maintain databases and control all access to them
      - provide an environment that is both convenient and efficient for users to retrieve and store information
   - integrity constraints
      - ensure that users enter valid information and maintain data integrity
      - `database constraint`
         - a restriction or rule that dictates what can be entered/edited in a table
         - e.g. a postel code using a certain format
      - `data type`
         - determines the sort of data permitted in a field
      - `data uniqueness`
         - ensures that no duplicates are entered
         -
## tables
   - a combination of fields



# security
## access
   - `read-only`
   - `read and write`


# backup and recovery

# database design
   - `data model`
      - a collection of concepts or notations for describing data, data relationships, data semantics and data constraints
      - most data models also include a set of basic operations for manipulating data in the database
### degrees of data abstraction
   - external models
      - represent the users view of the database
      - contain multiple different external views
      - closely related to the real world as perceived by each user
   - conceptual models
      - provide flexible data-structuring capabilities
      - present a community view: the logical structure of the entire database
      - contain data stored in the database
      - show relationships among data including:
         - constraints
         - semantic infomration (e.g. business rules)
         - security and integrity information
      - consider a database as a collection of entities (objects) of various kinds
      - are the basis for identification and high level description of main data objects; they avoid details
   - are databse independent regardless of teh database you will be using
   - 
## 1 data modelling
   - first step in the process of database design
   - i.e. conceptual design
   - objectives
      - identify the business rules
      - describe the data contained in the database
      - describe the relationships between data items
      - describe the contraints on data


## 2 design the database ???
   - the data items, relationships and the constraints are all expressed using the concepts provided by the high-level data model
   - useful to ensure all the users requirements are met

## 3 database implementation and operations/user interfaces
   - `database logical design`
      - defines a database in a data model of a specific DBMS
   - `database physical design`
      - defines the internal database storage structure, file organization or indexing techniques
## data models
   - `high-level conceptual models`
      - provide concepts for presenting data in ways that are close to the way people perceive data
      - examples
         - entity relationship model
   - `record-based logical models`
      - provide concepts users can understand but are not too far from the way data is stored in the computer
      - examples
         - relationship model


### entity relationship model
   - high-level conceptual data model
   - `entity`
      - represents a real world object such as an employee or a project
   - `attributes`
      - represent properties of an entity
   - `relationship`
      - represents an association among entities
      - e.g. an employ works on many projects

### ralationship model
   - represents data as relations/tables


### network model
   - represents data as record types

### hierarchical model
   - represents data as a hierarchical tree structure
   - each branch of the hierarchy represents a number of related records
   -