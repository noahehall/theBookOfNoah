- stateful vs stateless interfaces pg 45
  - lol i think i photocopied the remainder of this book somewhere
  - check the books repo

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
- object oriented software engineering
  - ivar jacobson
- structured design
  - IBM Systems journal Vol 13 No 2 1974
  - by W.P. stevens, G.J. Meyers, L.L. Constantine
- dealing with complexity
  - Robert Flood and Ewart Carons 1988

# links

- [aspect-oriented programming](httpp://aosd.net)
- [writing effective use cases](http://www.sysflow.com/blog/5-rules-for-writing-effective-use-cases/)

# terminology

- polymorphism
  - using the same interface but with potentially different implementations
  - e.g. when multiple classes that all implement the same set of methods
- resources
  - time, memory, file handles, db connections, threads, etc
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
  - uses knowledge of the code to devise tests
  - typically tests that check performance and robustness
- observer pattern
  - ???
- interface
  - applies to a set of method signatures (names and parameter lists)
  - a set of funtions that apply to a common concept, such as a set of functions that operate on a file
  - implementers of an interface are required to provide all the methods of the interface
  - the relationship between modules (implementers) and interfacers are referred as 'provides-a' or 'implements-a'
- inheritance
  - in OOP, one class extending another class to gain methods and properties
  - i.e. a derived class receives the attributes and methods of a base class
  - the relationship between the derived and base class is referred to as 'is-a' or 'is-a-kind-of'
  -
- cohesion
  - how closely one thing relates to another one
- coupling
  - measures how one module depends on the implementation of another module
  - tight coupling
    - a method that depends uon the internal implementation of a class is tightly coupled to that class
      - if the implementation changes, then you have to alter the method
      - this leads to brittle systems that are hard to extend and maintain
  - loose coupling
    - allows you to vary the implementatino of the called interface without having to hcange the code that calls it

# best practices

## gotchas

- creating an inheritance hierarchy prematurely can cause extra work when you eventually forced to untangle it
  - refactoring into an inherriance hierarchy is far easier than refactoring out of an existing hierarchy
- interfaces and class-inheritance are often two different ways to do the same thing
  - method perspective
    - this - a base class provides a set of methods, and derived classes inherit implementations of some methods and contain their own implementations of other methods
    - that - mutiple classes each implement all the methods in an interface
- dont duplicate code across interfaces

  - this - create a helper class and delegate operations to it
  - or that -
    - create a class that implemented the interface and provided code for many, if not all of the methods
    - then inherit from this class instead of implementing another interface

-

## measuring interfaces

- minimal vs complete interfaces
  - minimal/sufficient interface has just the methods that a caller needs to perform their work case
    - easier to implement and test with fewer methods
    - however user must code their particuar functionality and may wind up with duplicated code for same functionality
  - complete interface has more methods than required to perform their work
    - user has all needed methods
    - may be harder to understand an interface with numerous methods
- simplicity vs complexity
  - simple interfaces do not allow for customizations or indepth configuration
    - easier for the user to perform common functions
    - variations must be coded as new methods
  - complex interfaces give maximum capabilities to the user
    - users have flexibility to do it their way
    - may be harder for users to understand

## 3 laws of an interface

- law 1 - an interfaces implementation shall do what its methods says it does
  - the name of a method should correspond to the operations that the implementation actually performs
  - an implementation should perform the operations intended by the creator of the interface
  - an implementation needs to honor the meaning of a return value
- law 2 - an implementation shall do no harm
  - harm - interfering with other modules in a program/other programs
  - an implementation should not hog resources
- law 3 - if an implementation is unable to perform its responsibilities, it shall notify its caller
  - an implementation should alwayts report problems that are encounted and that it cannot fix itself

## interface method cohesiveness

- methods in an interface should be cohesive
- i.e. provide services that revolve around a common concept
- deciding the level of cohesion is an artform
  - cohesiveness is a spectrum from functional cohesion to coincidental cohesion
- you can have a huge base interface, in which all methods are part of a single interface
  - e.g. i-do-everything-printer-interface
- you can have multiple interfaces which together provide the capabilities of a concept
  - e.g. color-printer-interface vs black-n-white-printer-interface

## interface-implementation coupling

- always decouple the implementation by using an interface and hiding the implementation
- this allows for loosely coupled interfaces

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
  - semantic contracts that include the preconditions and postconditions
  - performance contracts for real-time sytems
  - quality of service contracts that are hard to quantify
    - test for resource usage, reliability, scalability, and other 'ilities'

## interface design by contract

- preconditions
  - the user of an interface needs to ensure that certain conditions are met when calling a method
- postconditions
  - each method in an interface specifies certain conditions that will be true after its invocation is complete
- class invariants
  - describes the conditions that every object instance must satisfy
    - e.g. nonfunctional aspects such as performance/quality of implementation
  - typically properties of a particular implementation
- notes
  - if a precondition is not met, the method WILL not execute properly
  - if a postcondition is not met, the method DID not execute properly
  - objects that cannot exist in an invalid state can make it easier to check the pre/postconditions
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
  - with more services being provided remotely you likely will not have access to the code therefore you can test only to the interface
- advantages
  - you can find ambiguities or unclearness in the
    - contract obligations
    - method definitions
    - protocol
  - if you find an interface is hard to test, its likely hard to use

# interface types

- an interface can be more than one type
- each type lies on a spectrum
- all interface types should consider the following

  - having many methods vs not-many methods

    - less methods are easier for the implementer but require more error checking
    - more methods are safer/more specific functionality but require more implementation

  - stateful interfaces

    - methods operate differently based on the current state
    - current state is changed by the sequence of method invocations
    - advantages
      - there is less chatter to get the same amount of work done
      - the order of the method calls does not matter (can check state)

  - stateless interfaces

    - the behavior is not dependent on the history of method invocations
      - there may be internal state to improve performance but the callers of the interface do not reply upon that fact or even know it
    - advantages
      - a small number of operators can service many requests
      - parameter lists are short

  - sequential vs random retrieval
    - iterator interface
      - allows access to a single element in a collection at a particular time
      - requires less resources
    - random-access iterator
      - allows random access to any element in the set
      - requires more memory to make all elements readily available
  - pull vs pushing data

## textual interfaces

- specifies the functions to perform, e.g. the command prompt
- examples
  - Unix device interface
    - hard drives, displays, printers, keyboards and files all use the same interface
    - is an example of polymorphism in a non-object oriented language
    - to the user, each device has an entry in the file system in the `/dev` dir
  - SMTP, FTP
- advantages
  - you can store the cmds in a file, which later can be read and executed

## graphical user interfaces

## data interfaces

- when the methods correspond to those in a class that contains mostly attributes
- the methods in the interface typically set/retrieve values of the attributes
- implementations of data interfaces have state which consists of the set of values of all attributes in the class
- e.g.
  - data transfer object (DTO)
  - methods refer only to attributes of the object

## service interfaces

- a module whoose methods that act on the parameters pased to it rather than the attributes of the implementation
- typically consist of mostly methods and little if any attributes outside of those associated with providing the service,
- e.g.

  - command interface
    - usually contain only service mmethods

-

## service provider interfaces

- variation of the service interface
- adds methods to the interface that controls the life cycle of the service provider

## data access interfaces

- interfaces that access data

# IOD Deliverables

- use cases
- Interface contracts
  - preconditions
  - postconditions
  - class invariants
- interface protocols
  - e.g. via sequence or state diagrams
- interface tests
