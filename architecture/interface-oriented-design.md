# books
  - interface oriented design
    - by oops forgot
  - Design Patterns: elements of reusable object-oriented software
    - erich gamma
    - richard helm
    - ralph johnson
    - john vlissides
  - software requirements
    - karl wiegers

# links
  - [aspect-oriented programming](httpp://aosd.net)
  - [writing effective use cases](http://www.sysflow.com/blog/5-rules-for-writing-effective-use-cases/)


# terminology
  - polymorphism
    - using the same interface but with potentially different implementations
  - resources
    - time, memory, file handles, db connectdions, threads, etc
  - use case
    - describes an interaction between a user and a system that fulfills a goal
  - internal use case
    - i.e. work case
    - describes an interaction between a caller and an interface
  - sequence diagram
    - shows a sequence of interactions between modules
  - state diagram
    - ???
  - white box testing
    - uses knowledge of hte code to devise tests
    - typically tests that check performance and robustness
  - observer pattern
    - 


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
  - contract levels
    - basic type contracts,
      - e.g. typed pprogramming languages
        - compiler enforces the type contract
    - semantic contraacts that include the preconditions and postconditions
    - performance contracts for real-time sytems
    - quality of service contracts that are hard to quantify
      - test for resource usage, reliability, scalability, and other 'ilities'


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

# interface testing
  - black box testing
    - testing to an interface, not an implementation
    - i.e. you test an interface without looking inside to see how its coded
    - with more services being provided remotely you likely will not have access to the code therefore yojuj can test only to the interface
  - advantages
    - you can find ambiguities or unclearness in the
      - contract obligations
      - method definitions
      - protocol
    - if you find an interface is hard to test, its likely hard to use
  -
#  IOD Deliverables
  - use cases
  - Interface contracts
    - preconditions
    - postconditions
    - class invariants
  - interface protocols
    - e.g. via sequence or state diagrams
  - interface tests
