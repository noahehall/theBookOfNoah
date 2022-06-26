# akka syntax

- while this line exists, all code should be considered pseudo
- bookmark
  - https://www.coursera.org/learn/scala-akka-reactive/lecture/mVLWq/lecture-4-1-actors-are-distributed-part-1
  - ^ about 24 minutes in
  - where it starts at `class Customer` which in this file is named `class ClusterManager`

## akka api

### ActorSystem

- todo
- user Actor: the high level actor for all actors created by users

```scala

val system = ActorSystem("PoopWorld")
val actorRef = system.actorOf(Props[Poop], "poop")

```

### Actor

```scala
import akka.actor.{Actor, Props, Identify, ActorIdentity}
import akka.event.LoggingReceive

// example actor
class Poop extends Actor
  def receive = { ??? } // partial for handling (match) messages
  def unhandled(message: Any): Unit = ??? // handle (match) messages not caught in receive()
  override def postStop(): Unit = ???

// supervisor strategies:
// ^ strategyName(maxNrOfRestarts = 10, withinTimeRange = 1.minute)
// ^ after 10 restarts, if within 1 minute, subsequent restarts == stop
// streategies
// OneForOneStrategy: deals with each child in isolation
// AllForOneStrategy: a failure in any is handled like a failure in all
// ^ allow a fineite number of restarts
// ^ allow a finite number of restarts in a time window
// ^ if restriction violeted then stop instead of restart
class Manager extends Actor with ActorLogging:
  override val supervisorStrategy = OneForOneStrategy() {
    case _: DBException => SupervisorStrategy.Restart // reconnect to DB
    case _: ActorKilledException => SupervisorStrategy.Stop // someActor ! kill throws this err
    case _: ServiceDownException => SupervisorStrategy.Escalate // manager escalates to its supervisor
  }

// actor with persistence and eventual consistency
// akka Stash: used for defering handling of messages for eventual consistency
class PoopProcessor extends Actor with Stash:
  var state: State = ???
  def receive = {
    ???
  }
  def waiting(n: Int): Receive = {
    case e: Event =>
      state = state.updated(e)
      if (n == 1) { context.unbecome(); unstashAll() }
      else context.become(waiting(n - 1))
    case _ => stash()
  }

// resolving an actor Path
case class Resolve(path: ActorPath)
case class Resolved(path: ActorPath, ref: ActorRef)
case class NotResolveD(path: ActorPath)

// actor paths dont need to be a full path, but can be relative
// grand-child: context.actorSelection("child/grandchild")
//^ doesnt have a beginning forward slash to indicate start from the current actor
// sibling: context.actorSelection("../sibling)
// from the local root: context.actorSelection("/user/app")
// using wildcards: context.actorSelection("/user/controllers/*")
class Resolver extends Actor:
  def receive = {
    // try to find to obtain an ActorRef from an ActorPath
    case Resolve(path) =>
      context.actorSelection(path) ! Identify((path, sender))
    // on success you get a Some(ref)
    case ActorIdentify((path, client), Some(ref)) =>
      client ! Resolved(path, ref)
    // on failure you get a None
    case ActorIdentity((path, client), None) =>
      client ! NotResolved(path)
  }
// ActorRef api
actorRef
  .path // akka://PoopWorld/user/poop#123456

// actor API
somePoop
  // life cycle hooks: can be overridden as usual
  .preStart
  .preRestart
  .postRestart
  .postStop // run cleanup, e.g. unsubscribing from all events
  // API
  .receive
  .sender
  .! // send an actor a msg: e.g. somePoop | poop
  .tell // see !
  .context
    .actorOf(props, name) // create a child actor with a unique name
    .actorSelection(path) // get an actorREf from an actorPath
    .become(nextState()) // transition to a new state, usually defined as a def
    .child(name) // Option[ActorRef] // get the address of a specific child
    .children // Iterable[ActorRef] // all children
    .parent // the actor that created this actor
    .stop(actorRef | self) // often applied to self, so an actor can stop itself
    .system // has .eventStream, see # EventStream
    .unbecome
    .unwatch(actorRef) // stop listening for termination events
    .watch(actorRef) // listen for Termination events: True == stopped, False = never started


```

### Scheduler

- a timer service optimized for high volume, short duration tasks and frequent cancelletion
- use case
  - sending a msg to an Actor at a future point in time

### EventStream

- enables publication of actor messages to an unknown audience
  - by default, actors can only send messages to actors they know (i.e. if they have an address (actorRef))

```scala

// api
PoopActor.context.system.eventStream
  .subscribe(subscriberRef, classOf[EventType]) // Boolean: listen to poopevents about EventType
  .unsubscribe(subscriberRef, classOf[EventType]) // Boolean: unsubscribe from a specific EventType
  .unsubscribe(subscriberRef) // unsubscribe from all poopevents
  .publish(event)
```

### Cluster

```scala
//////////////////////////////////
// configure the actor system to use the cluster module when creating actors
// all calls to context.actorOf will then be handled by this provider
//////////////////////////////////

// add dependency: make sure to set the correct version and not 1.2.3 ;)~
"com.typesafe.akka" %% "akka-cluster" %% "1.2.3"
// configuration to enable the cluster module
// ^ class path: in application.conf
// ^ or as java system properties: -Dakka.actor.provider=...
akka {
  actor {
    provider = akka.cluster.ClusterActorRefProvider
  }
}
// now you can setup a main program from which all other actors are instantiated
// by defualt this cluster will listen on port 2552 using tcp
class ClusterMain extends Actor:
  val cluster = Cluster(context.system)
  // works the same way as EventStream
  // listen to members joining this cluster
  cluster.subscribe(self, classOf[ClusterEvent.MemberUp])
  // creates a cluster with itself
  cluster.join(cluster.selfAddress)

  def receive = {
    case ClusterEvent.MemberUp(member) =>
      if (member.address != cluster.selfAddress) {
        // someone joined the cluster
      }
  }

// create another node to join a cluster
// it cant be on the same port as the main node (2552)
// ^ i.e. needs configuration akka.remote.netty.tcp.port = 0
// ^ setting it to 0 means pick a random available port
class ClusterWorker extends Actor:
  val cluster = ClusteR(context.system)
  cluster.subscribe(self, classOf[ClusterEvent.MemberRemoved])
  val main = cluster.selfAddress.copy(port = Some(2552))
  cluster.join(main)

  def receive = {
    // stop this node whenever the main node is removed from the cluster
    // i.e. when the main program shutsdown
    case ClusterEvent.MemberRemoved(m, _) =>
      if (m.address == main) context.stop(self)
  }

// create another node for routing msgs
class ClusterRouter extends Actor:
  val cluster = Cluster(context.system)
  // the router needs to know who is & isnt part of the cluster
  cluster.subscribe(self, classOf[ClusterEvent.MemberRemoved])
  cluster.subscribe(self, classOf[ClusterEvent.MemberUp])

  override def postStop(): Unit =
    cluster.unsubscribe(self)
  def receive = awaitingMembers
  val awaitingMembers: Receive = {
    case current: ClusterEvent.CurrentClusterState =>
      val addresses = current.members.toVector.map(_.address)
      val notMe = addresses.filter(_ != cluster.selfAddress)
      if (notMe.nonEmpty) context.become(active(NotMe))
    case MemberUp(member) if member.address != cluster.selfAddress =>
      context.become(active(Vector(member.address)))
    case Get(url) => sender ! Failed(url, "no nodes in cluster")4
  }
  def active(addresses: Vector[Address]): Receive = {
    case MemberUp(member) if member.address != cluster.selfAddress =>
      context.become(active(addresses :+ member.address))
    case MemberRemoved(member, _) =>
      val next = addresses.filterNot(_ == member.address)
      if (next.isEmpty) context.become(awaitingMembers)
      else context.become(active(next))
    case Get(url) if context.children.size < addresses.size =>
      val client = sender
      val address = pick(addresses)
      context.actorOf(Props(new Poop(client, url, address)))
    case Get(url) =>
      sender ! failed(url, "too many parallel queries")
  }

// create another node to superviso workers
class ClusterManager(client: ActorRef, url: String, worker: address) extends Actor:


// cluster api
cluster
  .selfAddress
  .subscribe
  .join

// cluster state api
clusterState
  .members

// ClusterEvent api
ClusterEvent
  .MemberRemoved // emitted when a node leaves a cluster
  .MemberUp // emitted when a node joins a cluster
  .CurrentClusterState // returns cluster state

```
