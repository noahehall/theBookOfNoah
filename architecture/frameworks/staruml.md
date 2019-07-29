# star uml

# links
  - [docs](https://docs.staruml.io/user-guide/readme)
  - [agile modeling](http://agilemodeling.com/)
  - [model driven development](https://www.mendix.com/model-driven-development/)
  - [4+1 architectural view model](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model)


# terminology
  - staruml
    - software modeler aimted to support agile and concise modeling
    - target audience
      - agile and small dev teams
      - professionals
      - educational institutes
    - key features
      - multi OS support
      - uml 2.x standard compliant
      - open apis
      - varioous third party extensions
      - asynchronous model validation
      - export to html docs
      - automatic updates
  - agile modeling
    - practice-based methodology for effective modeling and documentation of software-based systems
  - concise modeling
    - ????
  - model driven development
    - aka visual modeling
    - leverages graphical models and pre-built application components so that users can visually construct complex applications
    - core concepts
      - abstraction
        - the software application model is defined on a higher abstraction level and then converted into a working application using automated transformation or interpretations
      - automation
        - leverages model execution at run time
        - the model is autoamtically transformed into a working software application by interpreting and executing the model
          - removing the need to generate or write code
  - diagramming/drawing tools
    - e.g. microsoft visio
  - modeling tools
    - e.g. staruml, rational software architect
  - model/software model
    - description of any aspect of a software system such as structure, behavior, requirement and so on
    - can be represented in textual, mathmatical or visual form
  - model element
    - building block of a software model
    - can have multiple corresponding view elements
    - has its own data e.g. name, stereotype, type, etc
    -
  - diagram
    - visual geometric symbolic representationn of softwaare model
    - can be represented in one or more digrams with different aspects
      - e.g. focus on hierarchy or interaction
  - view elements
    - visual representations of a model element
    - renders the corrosponding model element in a diagram
    - exists multiple times in a diagram or in different diagrams
  - fragment
    - is part of a project saved as a separate file with extensions name .mfj
    - any element can be exported as a frgment,
      - but typically umlpackage, umlmodel and umlsubsystem are the right choices
    - fragments can be used in multiple projects
  - profile
    - using UML for a specific domain or platform
  - extension
    - package which adds new features to staruml
    -


# best practices
  - modeling a software system requires describing multiple models because it is not good enough to describe the system with a single perspective


# models
  - use case model
  - design model
  - component model
  - deployment model
  - etc

# components
## project
  - top level element stored as a single file `.mdj`
  - stores multiple models/views of the a software system
  - should be organized as a set of UMLModels, UMLPAckages or UMLSubsystems
  - components
    - templates
      - UML Minimal
        - single model with uml standard profilie
      - UML conventional
        - use case model, analysis model, design model, implementation model, deployment model
      - 4+1 view model
        - pilippe kruchtens 4+1 architectural view model
        - describes the architecture of software intensive systems bsed on the use of multiple, current views
          - logical view
            - concerned with the functionality that the system provides to end users
              - class diagrams, state diagrams
          - processs view
            - deals with the dynamic aspects of the system, explains the system processes and how thhey communicate and focuses on the runtimem behavior of the system
            - main concerns
              - concurrency
              - distribution
              - integrators
              - performance
              - scalability
            - diagrams
              - activity diagram
          - development view
            - illustrates a system from a pogrammers perspective and is concerned with softwaare management
            - aka implementation view
            - diagrams
              - uses the component diagram to describe system components
              - uses the package diagrams to represent development
          - physical view
            - depicts the system from a systems engineers point of view
            - concerned with the topology of software components on the physical layer as well as the physical connections between these components
              - aka deployment view
              - diagrams
                - deployment diagram
          - scenarios
            - aka use case view
            - description of an architecture is illustrated using a small szet of use cases (scenarios) which become the fifth view
            - describe sequences of interactions between objects and between processes
            - used to identify architectural elements and to illustrate and validate the architecture design
            - serve as a starting point for tests of an architecture prototype
            -


# workflows
