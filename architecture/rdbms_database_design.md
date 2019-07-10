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
   - `data independence`
      - refers to the immunity of user applications to changes made in the definition and organization of data
      - `logical schema`
         - i.e. `conceptual schema`
         - a conceptual design of the database
      - `logical data independence`
         - the ability to change the `logical schema` without changing the `external schema` (i.e. user view)
         - i.e. changes tot he logical schema (e.g. alterations to the structure of the database like adding a column/tables) should not affect the function of the application (external views)
      - `physical data independence`
         - refers to the immunity of the internal model to changes in the physical model
         - i.e. the `logical schema` stays unchanged even though changes are made to the file organization/storage structures/storage devices/indexing strategy

# fundamental concepts
## database types
   - based on data model
      - relational (e.g. mysql)
         - table oriented
      - hierarchical
      - network
      - objects (e.g. mongodb)
         - object-oriented
         - combine database capabilities with object-oriented programming language capabilities
   - based on user numbers
      - single-user database
         - only supports one user at a time
      - multiuser database
         - supports multiple concurrent users
   - based on distribution
      - centralized systems
         - the dbms and database are stored at a single site that is used by several other systems too
      - distributed database system
         - the actual database and the dbms software are distributed fromvarious sites that are connected by a computer network
      - homogeneous distributed database systems
         - use the same dbms software from multiple sites to permit data exchange beteween these various sites
         - e.g. buyer and seller using the same DBMS software and interfacing with each others data
      - heterogeneous distributed database systems
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
   - `schema`
      - overall description of a database
      - usually represented by the `entity relationship diagram` i.e. `ERD`
      - items to consider
         - external schemas
         - subschemas: display multiple external views of the data
         - conceptual schemas; there is only one, includes data items, relationships and constraints
            - all represented by an ERD
            - i.e. `logical schema`
         - physical schema
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

## degrees of data abstraction
   - in decreasing levels of abstraction

   - external models
      - represent the user(s) view of the database
         - there will likely be more than one user type (e.g. API, website, or actual users submitting queries)
         - each user type will have different needs
      - contain multiple different external views
         - each view should satisfy a specific users requirements
      - closely related to the real world as perceived by each user
      - requires the designer to subdivide a set of requirements and constraints into functional modules that can be examined within the framework of their external models
         - e.g. HR vs SALES
      - the designer needs to understand all the data so that you can build an enterprise-wide database

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
      - are database independent regardless of the database you will be using
      -

   - internal models (i.e. logical design)
      - dependent on the selected DBMS
      - a representation of the database as seen by the DBMS
      - create all the tables, constraints, keys, rules, etc
      - consider a database as a collection of fixed-size records
      - are closer to the physical level or file structure
      - are a representation of the database as seen by the DBMS
      - require the designer to match the coneptual models characteristics and constraints to those of the selected implementation model
      - involve mapping the entities in the conceptual model the tables in the relational model
      - examples
         - relational data model, network data model, hierarchical data model

   - physical models
      - are the physical representation of the database
      - have the lowest level of abstractions
      - are how the data is stored; dealing with
         - run-time performance
         - storage utlization and compression
         - file organization and access methods
         - data encryption
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
      - where you create all the tables, constrains, keys, rules etc.
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


## Diagrams
   - `entity relationship diagram`
      - i.e. ERD
      - a data model describing the database showing tables, attributes and relationship