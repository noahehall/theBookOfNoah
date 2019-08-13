# books
  - interface oriented design
    - by oops forgot
  - Design Patterns: elements of reusable object-oriented software
    - erich gamma
    - richard helm
    - ralph johnson
    - john vlissides

# links
  - [aspect-oriented programming](httpp://aosd.net)


# terminology
  - polymorphism
    - using the same interface but with potentially different implementations
  - resources
    - time, memory, file handles, db connectdions, threads, etc
  - use case
    - describes an interaction between a user anda  system that fulfills a goal 


# interfaces
  - defs
    - applies to a set of method signatures (names and parameter lists)
    - a set of funtions that apply toa  common concept, such as a set of functions that operate on a file
  - textual interfaces
    - specifies the functions to perform, e.g. the command prompt
    - examples
      - Unix device interface
        - hard drives, displays, printers, keyboards and files all use the same interface
        - is an example of polymorphism in a non-object oriented language
        - to the user, each device has an entry in the file system in the `/dev` dir
      - SMTP, FTP
    - advantages
      - you can store the cmds in a file, which later can be read and executed
  - graphical user interfaces
    -

# interface contracts
  - agreement between users of interfaces and their implementation
  - details what the implementation agrees to do for the caller
  - lists the operations involved in an interface
    - preconditions
    - postconditions
    - parameters nd their types
    - return values
    - errors signaled
      - return codes
      - exceptions


## 3 laws of an interface
  - law 1 - an interfaces implementation shall do what its methods says it does
      - the name of a method should correspond to the operations that the implementation actually performs
      - an implementation should perform the operations intended by the creator of the interface
      - an implementation needs to honor  the meaning of a return value
  - law 2 - an implementation shall do no harm
    - harm - interfering with other modules in a program/other programs
    - an implementation should not hot resources
  - law 3 - if an implementation is unable to perform its responsibilities, it shall notify its caller
    - an implementation should alwayts report problems that are encounted and that it cannot fix itself

## interface design by contract
  - preconditions
    - the user of an interface needs to ensure that certain conditions are met when calling a method
  - postconditions
    - each method in an interface specifies certain conditions that will be true after its invocation is complete
  - class invariants
    - describes the conditions that every object instance must satisfy
    - typically properties of a particular imlementation
  - notes
    - if a precondition is not met, the method will not execute properly
    - if a postcondition is not met, the method did not execute properly
    - any implementation of an interface can have weaker preconditions aand stronger postconditions
      - i.e. the same way a derived class can have weaker preconditions and stronger postconditions than the base class

## contract checking
  - an interface implementation is not required to check the preconditions
    - assume user has met those preconditions and report any failures if they have not
  - an interface that does validate preconditions should use one of the following
    - code embedded within each method to check the conditions
    - use aspects if the environment supports them
    - contract-checking proxy
      - implementation of the interafce the checks the preconditions for each method
      - if all preconditions are met, the proxy calls the corresponding method in the implementation that does the actual work
        - else signals a failure
      - if the corresponding method returns and the postconditions are not met, it could also signal a failure

# interface protocols
  - the set of allowable sequences of method calls
    - the preconditions often imply a sequence, but they may not
    - e.g. you must open a file before you can read it
  - the callbacks that an interface may create
  - events that are generated
  - observers that are called
  -

#  IOD Deliverables
  - sequence diagrams
    - illustrate the logical steps in doing something
  - Interface contracts
    - preconditions
    - postconditions
    - class invariants
  - interface protocols