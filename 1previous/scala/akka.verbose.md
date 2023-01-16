# akka

- will verify once I start building out some APIs
- use the actor model to greatly simplify distributed and concurrent software applications
- Akka is a toolkit for building highly concurrent, distributed, and resilient message-driven applications for Java and Scala.
- Akka Insights is intelligent monitoring and observability purpose built for Akka.

- todos
  - while this line exists, consider all code to be pseudo-code taken from coursera
  - generally verify the APIs with the akka ref

## links

- akka
  - [website](https://akka.io/)
  - [the reactive manifesto](https://www.reactivemanifesto.org/)
  - [all akka modules: start here](https://doc.akka.io/docs/akka/current/typed/guide/modules.html?language=scala)
  - docs
    - [the actor model and distributed systems](https://doc.akka.io/docs/akka/current/typed/guide/actors-intro.html?language=scala)
    - [akka streams introduction](https://doc.akka.io/docs/akka/current/stream/stream-introduction.html?language=scala)
  - ref
    - [actors](https://doc.akka.io/docs/akka/current/typed/index.html)
- alpakka
  - [website](https://doc.akka.io/docs/alpakka/current/)
- akka insights (costs)
  - [website](https://www.lightbend.com/akka-insights)
- kalix (costs)
  - [website](https://www.kalix.io/)

## gotchas

- stay away from anything labeled `classic Poop`: generally that indicates theres a newer version of that api

## basics

- Up to 50 million msg/sec on a single machine. Small memory footprint; ~2.5 million actors per GB of heap.

## designing reactive applications

- four tenants
  - event driven
  - scalable
  - resilient
  - responsive
- reactive applications need to be non-blocking & event-driven from top to bottom
  - only use async libraries & APIs
    - any blocking code will affect the entire system
- Actors are run by a dispatcher (potentially shared amongst actors) which can also run Futures
- prefer immutable data structures
  - they can be safely shared
  - no issues sending them across thread boundaries
- prefer `context.become` for actor state changes, with data local to the behavior
- do not refer to actor state from code running asynchronously
  - it would break the actor model encapsulation
- impact of network/inter-process communication on system design verse systems that run on the same process
  - distributed computing breaks assuptions made by the synchronous programming model
  - data can only be shared by value (memory cant be shared over the wire)
    - you must serielize before sending, and deserialize on receipt
  - lower bandwidth (has to go over the wire)
  - higher latency (has to wait on network calls)
  - partial failure: entire/part of messages may not be sent/reply may not be received
  - data corruption

```scala

```

### designing actor systems

- basic outline
  - define the problem to be solved
  - split the problem into concrete steps
  - define the actors in the system that will be responsible for each step
    - actors are easily replaceable, and shortlived
    - general types: the names are arbitrary
      - actor actor: conceptually represent the highest level entities, e.g. that initiate a process
      - controller: created by an actor, to act on their behalf
      - getters: created by a controller, to perform an action
  - determine if multiple instances of an actor can parallelize their step into substeps
  - define what messages will be sent between actors
    - optimizing the communication paths are important

#### handling failures

- the Actor Model is anthropomorphic
  - actors work together in teams (systems)
  - individual failures are handled by the team leader
    - instead of sending failures back to the caller, send them as messages to some supervisor/controller etc which should handle all failures for their dependents
- Resilient error handling: containment and delegation of failures
  - containment: failures are isolated and incapable of spreading to other components
  - delegation: failures shouldnt be handled by the failed component
  - manditory parental supervision: handling of failures are delegated to the failed actors supervisor (i.e parent)
    - can stop its subordinates
    - can restart its subordinates
    - can escalate to its supervisor

##### The Error Kernel Pattern

- move important data near the root (top level) of actor hierarchies
- delegate risky behavior to leaves (bottom) of actor hierarchies
- restarts
  - are recursive: child actors and their state are part of the parent actors state: so avoid restarting parents as it forces restarts of all their children (and their children, recursively)
  - restarts are more frequent near the leaves
  - avoid restarting actors with important state

#### persisting & recovering state

- in-place updates: when actor state changes, it pushes the new state to an external db/file/etc
  - recovery of latest state is constant time: you can pull the latest state in one call
  - data volume depends on numbers of records, not their rate of change: i.e. you can recover an actor to a point in time by applying a single upate (rather than replaying a series of events)
- append update calls: push the events that trigger changes to an external db/file etc for replay
  - history can be replayed, audited or restored
  - processing errors can be corrected retroactively
  - insight gained on business processes
  - writing an append-only stream optimizes IO bandwidth
  - changes are immutable and freely replicated
- snapshots: peristing immutable data
  - persist series of events
  - in a second process (offline), periodically apply those events to create a series of immutable snapshots and persist in a db
  - when its time to recover an actors state, you can apply a snapshot (instead of the events) in constant time
    - there may be subsequent events not yet processed, in which you would replay those events after applying the snapshot

#### state persistence patterns

- distinction
  - command: something that will happen in the future
  - events: something that has happened in the past

##### command sourcing:

- ensures an actor doesnt lose any cmds that changes state
- persist the cmd before processing it
  - e.g. msgs sent to an actor are intercepted via a Log actor, saved, and then forwarded to the actor
- persist acknowledgement when processed
  - after actor processes the cmd, it replies to a Channel actor that serializes and persists msgs, then forwards the acknowloedgement to the original sender
- recovery
  - the Channel actor should know that this is a recovery (because its seen this msg before) and does NOT forward the acknowledgement, as that would duplicate downstream affects already applied

##### event sourcing

- generate change requests (i.e. events) instead of modifying local state
  - for each msg that requires a state change, generate an event representing the actual change taking place and send to a Log actor
- persist and apply the events
  - the Log actor persists the event (e.g. to a file, db, etc) and replies to the Actor acknowledgement
  - the Actor now applies the event
    - alternatively the actor could apply the event immediately after sending it, with out waiting for acknowledgement from the Log actor; but dont do this
    - instead the actor should keep a queue of new cmds that are waiting to be persisted & applied, because they havent received acknowledgement that the prevoius event was persisted & subsequently applied
      - that way you get persistent + eventual consistency
      - see akkas `Stash` trait: enables the ability to postpone messages that cant yet be handled
- recovery
  - the actor applies the events saved in the log in order

#### distributed actors

- generally actors are run on different threads (physical CPUs or virtual cores)
  - but could potentially be on different hosts as well
- communication is asynchornous, one-way and not guaranteed
- location transparency: encapsulation makes all actors look the same from the outside, regardless of where they live
  - i.e. the only distinction externally is their actorRef address
- actor paths: the full path to an actor, whether remote/local
  - this is where you send messages
  - contains an authority and path: together they make up the actor path
    - authority: the address of the actor system
      - local system: e.g. `akka://SomeSystemName`
      - remote system: e.g. `akka.tcp://SomeSystemName@10.0.0.2:1234`
    - path: e.g. `/user/someActorName`
- actor Ref: points to an actor which was started. e.g. `s"${actorPath}#12345`
  - this is what you watch

## data model

### Actor

- model for concurrent, parallel programming
  - in scala you can have a couple thousand threads, and millions of actors
  - so NEVER block a thread
- Actor: an object with the following features
  - has an address (i.e. identity, i.e. `self`) through which they can receive messages
  - has behavior through which they modify state & send msgs
  - all interactions via async message passing: the only access to an actor's state/behavior is via messages
    - you reply to a msg receive via the address embedded in the msg
  - completely independent agents of computation: encapsulated & isolated from each other
    - local execution, no notion of gloal synchronization
    - all actors run fully concurrently
    - message-passing primitive is one-way communication
- ActorRef: an address for an Actor
- more on messages: an actor's internal evaluation order
  - internally, actrs are effectively single-threaded computations,
  - messages are received sequentially
  - behavior change is effective _before_ processing the next message
  - processing one message is the atomic unit of execution
  - dead-locking: doesnt occur because there are no syncrhonization methods, instead collaboration is achieved via message queueing
- more on messages: reliability in unreliable circumstances
  - all communication is inherently unreliable
  - delivery of a msg requires eventual availability of channel & recipient
  - patterns for message guarantees
    - at most once: i.e. send and forget; delivers [0,1] times
      - most performant, but 0 guarantees of receipt
    - at least once: i.e. forever retry: resend msg until receiver replies 200: delivers [1, infinte] times
      - good balance: but sender needs to keep the msg in state in order to resend it
    - exactly once: i.e. guaranteed by the receiver; processing only first receiption delivers 1 time
      - most costly: as at least once still applies, + the receiver needs to keep state of ALL messages received
- Actor Lifecycle
  - start: context.actorOf
    - only observable to the parent actor (i.e. the one that creates it)
    - actor context creates a new actor instance, running the constructor of the actor class
    - runs thisActor.preStart: executes before the first msg is processed
  - failure: msg sent to supervisor for what to do
    - restart: reset the actor to a previously known state: all changes are lost
      - not externally visible, but the previous actorRef is still valid, and messages sent while restarting be handled once restart cycle is complete
      - actor local state is trashed, only external actor state can exist beyond restarts
      - runs thisActor.preRestart
      - thisActor is terminated, and a new instance is started
      - runs newActorInstance.postRestart
    - stop: runs stop procedure
  - stop
    - thisActor.postStop
    - thisActor is terminated
  - DeathWatch: Lifecycle Monitoring;
    - not a lifecycle method/eve nt, but helps to externally communicate if an actor is restarting, or stopped
    - register listers via context.watch(thisActor)
    - will receive a Terminated(thisActor) msg when thisActor is stopped

### Cluster

- a set of nodes (actor systems) about which all members are in agreement and therefore can collaborate on a common task
  - cluster membership can change overtime
  - and only those nodes that are in agreement can be considered a cluster
- cluster size
  - 1: a node forming a cluster with itself, this is how a cluster starts
  - n+1: a node sends a request to a cluster; once all nodes in that cluster know about the new node, then it is considered part of the cluster
- gossip protocol: how messages are delivered between nodes in a cluster
  - there is no leader/coordinator; thus no single point of failure
