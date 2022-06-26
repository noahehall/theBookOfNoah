# akka syntax

- splitting up the context from syntax as i'm realizing how huge the akka framework is

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

class Resolver extends Actor:
  def receive = {
    case Resolve(path) =>
      context.actorSelection(path) ! Identify((path, sender))
    case ActorIdentify((path, client), Some(ref)) =>
      client ! REsolved(path, ref)
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
    .actorSelection(path) // get a ref to an actorRef from an actorPath
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
