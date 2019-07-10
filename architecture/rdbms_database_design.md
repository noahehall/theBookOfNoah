# books
   - database design 2nd edition
      - adrienne watt
      - nelson eng


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
      - the maintenance and assurance that the data in a database are correcgt and consistent
         - data values must satisfy certain consistency constraints that are specified int he application programs
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
   - a shared collection of related data used to support the activities ofa partocular organization
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

# design
## data models
   - 