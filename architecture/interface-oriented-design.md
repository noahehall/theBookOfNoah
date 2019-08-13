# books
  - interface oriented design
    - by oops forgot
  - Design Patterns: elements of reusable object-oriented software
    - erich gamma
    - richard helm
    - ralph johnson
    - john vlissides
    -


# terminology
  - polymorphism
    - using the same interface but with potentially different implementations
  - resources
    - time, memory, file handles, db connectdions, threads, etc


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
  - law 1 - an interfaces implementation shall do what its methods says it does
      - the name of a method should correspond to the operations that the implementation actually performs
      - an implementation should perform the operations intended by the creator of the interface
      - an implementation needs to honor  the meaning of a return value
  - law 2 - an implementation shall do no harm
    - harm - interfering with other modules in a program/other programs
    - an implementation should not hot resources
    -

#  IOD Deliverables
  - sequence diagrams
    - illustrate the logical steps in doing something
  - Interface contracts