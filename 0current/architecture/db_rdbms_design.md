# books

- database design 2nd edition
  - adrienne watt
  - nelson eng
  - chapter 12 first normal form pg 74

# terminology

- `data redundancy`
  - a situation that occurs in a database when a field needs to be updated in more than one table
  - issues
    - inconsistency in data format
    - same information being kept in several different places
    - problems maintaijning consistency after updates
  - benefits
    - can sometimes lead to performance improvements
      - e.g. in place of a db join to connect data
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
- `insertion anomaly`
  - occurs when you are innserting inconsisten information into a table
- `update anomaly`
  - changing existing information incorrectly
- `deletion anomaly`
  - occurs when you delete a record that kmay contain attributes that shouldnt be deleted
-

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

## integrity rules and constraints

- ensure that users enter valid information and maintain data integrity
- `database constraint`
  - allow a designer to specify the semantics of the data in the database
    - are the rules that force DBMSs to check that data satisfies the semantics
  - a restriction or rule that dictates what can be entered/edited in a table
  - e.g. a postel code using a certain format
- `data type`
  - determines the sort of data permitted in a field
- `data uniqueness`
  - ensures that no duplicates are entered
- `domain integrity`
  - the values of attributes in the relatn and a constrain of the relational model
- `entity integrity`
  - every table have a primary key
- `referential integrity`
  - requires that a foreign key must have a matching primary key or it must be null
  - specified between two tables (parent and child)
  - maintains the correspondonce between rows in these tables
    - i.e. the reference form a row in one table to another table must be valid
  - `orphan record`
    - one whose foreign key value is not found in the corresponding entity
      - the entity where the pk is located
- `forein key` rules
  - what to do with child rows when the record with the PK is deleted or updated
- `enterprise constraints`
  - i.e. semantic constraints
  - are additional rules specified by users or a database administerors and can be based on multiple tables
    - e.g.
    - a class can have a maximum of 30 students
    - a teacher can teadhca maximum of four classes per semester
    - an employee cannot otake part in more than five projects
    - the salary of an employee cannot exceed the salary of the employees manager
- `business rules`
  - obtained from users when gathering equirements
  - requirements need to be verified by the users before tehe database design is built
  - e.g.
  - see `enterprise constraints` examples
  - determines cardinality and connectivity
- `cardinality`
  - describes the relationship between two data tables by expressing the minimum and maximum number of entity occurrences associated with one occurrence of a related entity
- `connectivity`
  - the relationship between two tables
  - e.g.
    - 1:1
    - 1:m

## tables

- a combination of fields
- has a name that is distinct form all other tables in the database
- contains no duplicate records
- entries in columns are atomic; the table does not contain repeating groups or mulitivalued attributes
- entries from columns are from the same domain based on their data type
- operatings combining different data types are disallowed
- each attribute has a distinct name
- the squence of columns is insignificant
- the sequence of rows is insignificant

### attribute types

- simple attributes
  - those drawn from the atomic value domains;
  - single value attributes
  - e.g. firstname, age
- composite attributes
  - composite attributes are those that consist of a hierarchy of attributes
  - e.g. address,
- multivalued attributes
  - have a set of values for each entity
  - e.g. types of degrees (phd, associates, etc)
- derived attributes
  - contain values calculated from other attributes
  - e.g. age derived from birthdate

### keys

- `unique`
  - no two rows in a tablle may have teh same value at any time
- `minimal`
  - every column is necessary in order to attain uniqueness
- `candidate key`
  - simple/composite key that is unique and minimal
- `composite key`
  - composed of two or more attributes, but it must be minimal
- `primary key`
  - a `candidate key` that is selected by the database designer to be used as an identifying mechanism for the whole entity set
  - must be unique, non null
- `secondary key`
  - an attribute used strictly for retrieval purposes
- `alternate key`
  - candidate keys not chosen as the `primary key`
- `foreign key`
  - an attribute in a table that references the primary key in another table or it can be null
  - both foreign and primary keys must be of the same data type

### relationships

- used to connect related finformation between tables
- `relationship strength`
  - based on how the primary key of a related entity is defined
  - `weak`
    - non-identifying relationship exits if the preeimary key of the related enteity does not contain a primary key compoent of the parent entity
  - `strong`
    - identifying relationship exists when the primary key of the related entity contains the primary key component of the parent entity
- optional relationship
  - the fk can be null/parent table does not need to have a corresponding table occurence
- mandatory relationship
  - one entity occrrence requires a corresponding entity occurrence
  -
- non-identifying relationship
  - where the PK does not contain the FK
- identifying relationship
  - where the PK contains the FK
- `one-to-many`
  - 1:m
  - department:employees
  - the normal in most relational db design
- `many-to-many`
  - m:n
  - projects:employees
  - cannot be implemented as such in a relational model
  - can be changed into two 1:m relationships
  - involves the implementation of a composite entity
    - must contain at least the primary keys of the original tables
  - creates two/more 1:m relationships
  - steps
    - for each M:N binary relationship, identify two relations
    - A and B represent two entity types participating in R
  - create a new relation S to represent R
  - S needs to contgain the PKs of A and b.
  - these together can be the PK in the S table
- `unary relationship` (recursive)
  - one in which a relationship exists between occurences of the same entity set
  - i.e the primary and foreign keys are the same
    - but they represent two entities with different roles
    -
  - e.g. employee:supervisor
- `ternary relationships`
  - e.g. supplier:(project, part)
  - involes many-to-many between three tables
  - steps
    - for each `n-ary` (>2) relationship, create a new relation to represent the relationship
    - the primary key of the new relation is a combination of the primary key sof hte participating entities that hold the N (many) side
    -

### data types

- `null`
  - either unknown or inapplicable or missing
  - does not mean zero/blank
  - not permitted in primary key
  - a

# security

## access

- `read-only`
- `read and write`

# backup and recovery

# database development process

1.  requirements gathering
    - the db designers interview the customers (database users) to understand the proposed system and obtain an document the data and functional requirements
    - all users must agree as to what persistent data they want to store along with an agreement as to the meaning and interpretation of the data elements
    - `data requirements document`
      - includes the detailed requirements provided by the users
      - used to confirm the understanding of requirements with users
      - should not describe how the data is to be processed
      - should decribe
        - what the data items are
        - what attributes they have
        - what constraints apply and the relationships that hold between the data items

# database design

- `data model`
  - a collection of concepts or notations for describing data, data relationships, data semantics and data constraints
  - most data models also include a set of basic operations for manipulating data in the database
- avoiding anomalies
  - ensure that all tables are normalized by understandinng functional dependencies
- broad outline
  1. ER modelling
     - entity relationship diagrams provide the big picture, or macro view of an organizations data requirements and operations
     - an iterative process that involves identifying relevant entities, their attributes and their relationship
  2. db design
     - normalization
  3. blah
  4. blah
  - notes
    - steps 1 and 2 should happen concurrently

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

### ER modelling

- entity relationship modelling

- `functional dependency`

  - describe how individual attributes are related
  - a kind of constraint among attributes within a relation and constribute to a good relational schema design
  - ensures that all attributes in a table belong to that table
    - eliminates redundancies and anomalies
  - typically is a relationship between the PK and other non-key attributes within a table
    - for any relation R, attribute Y is functionally dependent on attribute X (usually the PK) if for every valid instance of X, that value of X uniquely determines the value of Y
    - **X ----> Y**
    - x = the determinant
    - y = the dependent

- `armonstrongs axioms`

  - set of inference rules used to infer all the functional dependencies on a relational database

  - `axiom of reflexivity`

    - if Y is a subset of X, then X determines Y

  - `axiom of augmentation`
    - if X determines Y, then XZ determines YZ for any Z
    - i.e. partial dependency
      - this is NOT good
      - the tables need to be separated into multiple tables
    - says that every non-key attribute must be fully dependent on the PK
  - `axiom of transitivity`
    - if X determines Y, and Y determines Z, then X must also determine Z
    - this is NOT GOOD
    - because a non-key attribute depends on another non-key attribute
      - whereas all non-key attributes should be dependent on the PK

- `union rule`
  - suggests that if two tables are separate but the PK is the same, perhaps they should be a single table
    - if X determines Y and X determines Z then X must also determine Y and Z
- `decomposition`
  - oposite of `union rule`
  - if you have a table that appears to contain two entities thhat are detemrined by the same PK, consider breaking them up into two tables
  - if X determines Y and Z, then X determines Y and X determines Z separately
  -

## 2 DB design ???

- the data items, relationships and the constraints are all expressed using the concepts provided by the high-level data model
- useful to ensure all the users requirements are met
- must capture all of the necessary attributes and associations with the minimal amount of stored information and no redundant data

### normalization

- focuses on the characteristics of specific entities and represents the micro view of entities within an ERD
- process of determining how much redundancy exists in a table
- goals
  - be able to characterize the level of redundancy in a relational schema
  - provide mechanisms for transforming schemas in order to remove redundancy
  - make sure that proposed entities meet required normal form before table structures are created
- semantic rules
  - business rules applied to the database
- six `normal forms` (nf)

  - each form involves a set of dependency properties that a schema must satisfy and each normal form gives guarantees about hte presence and/or absence of update anomalies
  - the higher normal forms have less redundancy, and as a result, fewer update problems

  1. first normal form (1NF)
     - only single values are permitted at the intersection of each row and column
     - i.e no repeating groups
     - to normalize a relation that contains aa repating group, remove the repeating group and form two new relations
       - the pk of the new relation is a combination of hte k of the original relation plus an attribute from the newly created relation for unique identification
  2. second normal form (2NF)
     - the relation must be in 1NF
     - the PK comprises a single attribute
     - if the relation has a composite PK
       - each non-key attribute must be fully dependent on the entire PK and not on a subset of PK
         - i.e. there must be no partial dependency augmentation
  3. third normal form (3NF)
     - the relation must be in 2NF
     - all transitive dependencies must be removed
       - a non key attribute may not be functionally dependent on another non key attribute
  4. boyce-codd normal form (BCNF)
     - rarely used
     - is a special case of 3NF
     - a relation is in BCNF if every determinant is a candidate key

-

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
  - represents a real world object such as an employee or a project or a concept
  - defined as tables that hold specific information/data
- `entity strength`
  - weak - when the entities tables are `existence dependent`
    - it cannot exist without a relationship with another entity
    - its primary key is derived from the primary key of the parent entity
    - mandatory foreign key (i.e. cannot be null)
    - used to connect two kernels together
    - many to many relationships
  - strong - when the entities tables can exist apart from all of its related entities
    - `kernels`
      - building blocks of the database
      - the primary key may be simple or composite
      - primary key is not a foreign key
      - do not depend on another entity for their existence
    - a table without a forein key
    - a table that contains a forein key that can contain nulls
- `characteristic entities`
  - provide more information about another table
  - represent multivalued attributes
  - decribe other entities
  - typically have one-to-many relationships
- `attributes`
  - represent properties of an entity
- `relationship`
  - represents an association among entities
  - e.g. an employ works on many projects
- `entity type`
  - defines a collectionn of similar entities
- `entity set`
  - a collection of entities of an entity type at a particular point of time
  - e.g.
    - entity type - employee
    - entity set - list of employes on date X
  -

### relationship/relational model

- represents data as relations/tables
- `relation`
  - table/file - a subset of the cartesian product of a list of domains charactered by a name
  - within a table each row/record/tuple represents a group of related data values
- `domain`
  - the original sets of atomic values used to model data
- `atomic value`
  - each value in the domain is individisble as far ast her elational model is concerned
  - i.e. a set of acceptable values that a column is allowed to contain
  - e.g.
    - the domain of marital status
      - married, single divorced
    - the domain of shift
      - mon, tues, wed...
-

### network model

- represents data as record types

### hierarchical model

- represents data as a hierarchical tree structure
- each branch of the hierarchy represents a number of related records

## Diagrams

- `entity relationship diagram`
  - i.e. ERD
  - a data model describing the database showing tables, attributes and relationship
- `dependency diagram`
  - illustrates the various dependencies that exist in a table
