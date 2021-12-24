# Modeling

modeling languages and their syntax

- heavy focus on UML
- however im not a big fan of OOP, so
  - the UML is system-level focused
  - im more interested in component-based development (CBD)

- bookmark: component diagram

## links

- [latest OMG UML spec](https://www.omg.org/spec/UML)
- [plantuml](https://plantuml.com/starting)
- [nomnoml](https://nomnoml.com/)
- [use drawio and move on with your life](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)

## basics

### terminology

- model: partial abstract representation of a real-world system
  - analyze, communiate, test and document your understanding of a system

- types
  - computational: computer simulations representing time-varying behavior of a system
    - weather forecasting models: simulating future weather patterns
    - car racing games: simulating real world cars

  - analytical: mathematical models of relationships among variables in a system
    - banking formulas: how much interest you pay if you take loan X for Y years

  - nonanalytical/descriptive: describe components and their relationships in a system
    - qualitative in nature
    - easy to build, intuitive to understand

- CASE tools: computer aided software engineering tools
  - help in various tasks throughout the software dev life cycle
  - modeling, code generation, reverse engineering, analyzing code complexity, etc

#### nonanalytical descriptive models

- application models: describe the application that works on data
  - UML: focus on modeling the logic and structure of software applications and the software application data

  - SysML: system modeling language
    - like UML, but more general purpose and focused on systems engineering

  - BPMN: business process model & notation
    - for modeling business processes & workflows
    - targets business statekholders who focus on biz domain knowledge & organizational systems

- data models: describe data
  - relational
  - network
  - hierachical
  - object-oriented

## best practices / gotchas

- always
  - start rough and refine it as needed
    - iterate through models to ensure your understanding of the system reflects the complexity of the system
    - focus on what you are modeling, and not the model itself

- sometimes
  - model selectively: dont draw all the models to develop a system
    - its just a means to an end, so do enough to successfuly analyze, document, and test
  - model collaboratively: use models to think, share, learn and understand together with your team

- never

## UML

- unified modeling language: family of grpahical notatins to describe & design software systems
- based on standards controlled by Object Management Group (OMG)

- use case specification: detailed explanation that lists each specific use case and scenarios in which that use case exists
  - identify all nouns: these will be the classifiers (i.e. objects) in your class diagrams
    - becareful, because some nouns can actually be attributes, and not first-class citizens
  - identify all attributes: these are the features (i.e. attributes) of classifiers in your class diagrams
  - identify all verbs: these are the verbs relations (sometimes methods) of classifiers in your class diagrams
    - the verbs here are like confirms, creates, aproves, refers to, etc
    - sometimes a verb will also indicate a method,
      - e.g. I poop in toilet and flush
        - 2 classes: I and toilet
        - 1 relationship: poop indicates I depend on toilet
        - 1 methods: poop indicates something I do, and flush indicates something I do
  - class diagrams: rely heavily on the nouns attributes & verbs
  - sequence diagrams rely heavily on the nouns and verbs

- diagram types
  - you generally want to iterate between structural & behavior diagrams
    - the modeling activities in each informs the other

  - structure: represents staic view of the system and its components
    - class: static view of all classes created to build the system
    - component
    - object
    - composite structure
    - package
    - deployment

  - behavior: dynamic view of the system and its components, over time
    - use case
    - activity: the systems logical workflow
    - state machine
    - interaction: interactions among components of the system/between system and external actors
      - sequence
      - communication
      - timing
      - interaction overview

### common notations

- `rectangle` nonhuman thing
- `<< stereotype >>` stereotyping common things, e.g. a database, used as a title/label for a component
  - `<< nosql DB >>`
  - `<< rest api >>`

### structure diagrams

#### component diagrams

#### class diagram

- model the type of objects & relationships among them over time
- the most granular level of diagram showing a static view of a system
- most used by developers when designing a system

- key elements
  - classifiers: the types of entities in the system
    - Classifiers other than a regular class are often the result of applying design patterns, and hence surface mostly during design time.
    - i.e. supertypes/metaclass of your system entities
    - types: active/concrate/generic/association classes, enumeration, interfaces
      - everything usually is a generic concrete class, until you further develop, design and identify system entities
      - association class: models relationships between classes.
        - helps decouple two mutually interdependent classes by creating a third class that contains their dependencies

  - features: structural & behavior characteristics of classifiers
    - i.e. the properties & methods

  - relationships: how classifiers are related to each other, e.g. dependency, inheritance, or implementations
    - associations:
      - i.e. one class is contained in another
      - association links: when one class (source) uses an instance of another class (target)
        - indicated by a line with a diamond, the diamond is next to the source
        - aggregations: when source class has shared ownership of target with other source classes
          - i.e. the target may be belong to other source instances
          - e.g. a guest can be part of multiple events
          - the diamon is not filled in
        - compositions: when source class has full ownership of target class
          - i.e. the target class only belongs to the single source class
          - .e.g a ticket will only belong to a single event
          - the diamon is filled in

    - generalizations:
      - inheritance (e.g. child extends parent) relationship between two classifiers
      - indicated by a line with an unfilled arrow at the parent class

    - dependency
      - a compile time dependency: supplier/client relatoinship between two classifiers
      - Dependency exists when ClassY is used in some way in ClassX,
      - e.g. class implements interface
      - indicated by a line with a filled arrow at the interface/supplier

##### domain diagram

- similar to a class diagram
- but displays classes, attributes, and associations without methods

##### design diagram

- similar to class diagrams
- but extend domain diagrams by also displaying methods on each class

#### object diagrams

- aka instance diagrams
- depicts snapshots of instances of objects in a system at a point in time
  - i.e. to visual the state of a system at a specific point in time
  - as opposed to modeling classes, interfaces, etc, you are modeling specific manifestations of these objects
- only represent the structural aspect of instances
  - thus you shouldnt list any methods when detailing the slots/attributes

- key elements
  - objects
    - indicated by name:parentClassOrWhatever with an underline
  - slots/attributes + values
    - only list the slots + values of those attributes that are important at that point in time
    - ^ no need to relist everything from the class diagram
  - relationships amongs other instances at a specific point in time
    - same notation as class diagrams, but again, focused specifically at that point in time

### behavior diagrams

- ideally where you will identify & scope the methods of your system

#### use case diagrams

- precursor to use case specifications
- use cases are supposed to offer value, so not every workflow is a usecase, some are just prerequisites to use cases
  - e.g. Login functionality, whats its value? its really a burden/cost for some other use case
  - use cases fit this threshold: `users come to the system to do X and receive Y`
    - they never come to your system to ONLY login, they come to do something else, and logging in is a prereq to do that other thing

- goals
  - captures high-level functionality of a system using notations for
  - developed by biz analysts to depict the summary of all use cases in a system
  - link to detailed specification docs

- key elements
  - use cases
  - systems
    - defines the system boundary
    - all use cases must exist within a systems boundary
  - actors
    - represents a users role with respect to the system
      - an external NOUN that participates in the use case
      - may be a human/another system
    - types
      - primary: whose goal is fullled by the use case
      - secondary: is involved in the use case
        - often an external system, e.g. an API
  - associations
    - between actor & use case
    - between use cases
      - include: for usecases that are repeated & included in other use cases, e.g. Login functionality
        - dashed line with an arrow pointing from the base usecase to the included use case
      - extend: for optional use case behavior
        - the base case is independent of the optional behavior
        - helps keep the base use case unchanged while adding more speifics/conditional changes
      - generalizations: when one use case is a specialized case of another more general use case
        - e.g. `view event schedule` is a general use case, `view my schedule` is a specialized form of it
        - from mostSpecialized > mostGeneral
      - generalizations between actors: depict genralization/specialization/inheritance between actors
        - when a use case for actorX is dependent on a usecase for actorY
          - e.g. a regular userX that can join events, depends on another userY to create an event
            - userY > create event
            - userX > join event
    - between actors

#### activity diagrams

- used for workflow & process modeling
- similar to flow charts but with parallel behavior and multiple actors
- used by users, biz analysts, and devs to capture their requirement understanding

- key elements
  - start & end nodes: scope of the diagram
  - actions: verbs that take place within the activity
  - flows: the sequence in which actions are conducted
  - fork and join: model parallel flows
    - fork: first horizontal bar modeling the activity splitting into two parallel tracks
      - always has one incoming flow, and atleast 2 outgoing flows
    - join: second horizontal bar modeling the activity synchronizing into a single track
      - always has at least 2 imcoming flows, and 1 outgoing flow
  - decision and merge: model conditional flows
    - decision: diamond with a question as text
      - always has one inflow, and multiple outflows for each mutually exclusive logical branch
    - merge: diamong with no text
      - always has multiple inflows, and a single outflow
  - swimlanes: model who is doing the actions in an activity diagram
    - Swimlanes represent different actors involved in the activity workflow.
    - each actor gets a single swimlane
  - swimlanes multidimensional: model the actors & actor types in an activity diagram
    - each actor gets a single swimlane on one axes
    - each actor type gets a single swimlane on the other axes

#### interaction diagrams

- to model collaboration/behavior among objects in a system

##### sequence diagrmas

- most common interaction diagram
- capture the sequence of interactions/behavior, among two/more entities within a scenario
- to understand the behavior you need to implement in code
  - this details the runtime behavior of objects in specific scenarios
  - thus requiring use case specifications

- key elements
  - participants: the objects in the scenario
    - indicated by a named box
    - are live objects
  - lifelines
    - indicatd by dashed lines extending from each participant when the object is alive
    - go from top to bottom indicating the flow of time
  - interaction messages: between participants
    - connect two objects life lines
    - there are different kinds of msgs, with different indicators, you need to research
    - e.g. a request & response would be two line-arrows indicating the direction
      - request: solid line arrow
      - response: dashed line arrow
  - activation/execution specification (on lifelines)
    - indicated by a rectangle on the lifeline of the responder interpreted as hypothetical activity
  - fragments: modeling conditions & loops
    - conditions
      - opt: (optional) if statement that doesnt have an else
      - alt: (alternatives) if statements with an else/if
      - loops: a block of msgs that continue as long as the condition is true

##### communiation diagrams

- similar to sequence diagrams, but without lifelines
- the focus on links & communiation between objects
  - without focusing on the specific runtime (i.e. lifeline) environment
- the sequence of messages are indicated by labeling each msg with a number, (1, 2, 3, etc)
  - requests indicated by a solid line arrow
  - responses indicated by a dashed line arrow

#### state machine diagrams

- aka state transition diagrams, state chart diagrams

- models different states of an entity within a system
  - details how specific entities transition from one state to the next

- types: both use basically the same key elements & concepts
  - protocol state diagrams: model interaction sequences, big emphasis on the sequence of the state transitions
  - behavioral state diagrams: model event-driven behavior of an object, used more than protocol state diagrams

- key elements (research the rest)
  - state: represents a single state of an entity
    - indicated by rounded cornered rectangle
      - name of the object/instance above the box
      - state name as title within the box
      - internal behaviors & transitions in the main box body: 2 different formats
        - someAttribute [boolean condition] / affectOnStateOrActivity
          - nextAction / affectOnStateOrActivity
        - someAttribute conditionOrTrigger / affectOnStateOrActivity
          - nextAction / affectOnStateOrActivity
    - simple state: lowest level

    - composite/super state: contains multiple internal (usually simple) states
      - to model hierarchy of states by nesting states within a higher abstraction state
      - e.g. a moving playing state, which contains playing, paused and finished nested states

    - submachine state: an entity modeled within a state diagram of a larger system
      - e.g. modeling a movie theater, in which the state of a movie player was being modeled, then the movie player would be a submachine
    - pseudo states: apply to all three simple, composite/super, and submachine states
      - dont really represent a state, but just a path to a state
      - indicated by a green/red circle, with the line going into an actual state

  - transitions
    - to model an entity moving/transition from one state to another
    - indicated by an arrow from source state to target
      - label: trigger [guard]/ activity
        - triggers are events that occur outside the entity, but cause a sideffect to the state
        - guard: is the boolean condition that must occur before the activity can take place
        - activity: the activity that takes place when the transition happens

  - vertices: nodes that are the source/target of transitions

  - regions: fragments of state diagrams that run concurrently, i.e. modeling parallel processes within states
    - indicated by fragments within a composite state to model two/more things happening at the same time
    - e.g. when a movie player is in the isBeingUsed composite state
      - fragment 1: movieIsPlaying state (actually playing the movie)
      - fragment 2: movieTimer state (showing progress of move)
