# basics

## terms

- devops: developer operations; the entire serice lifecycle, from design > dev > production support

  - a partnership of all the team members involved in software development and operations.
  - The main reason to deploy DevOps in the cloud is to allow infrastructures to be controlled by APIs.
  - the term devops was popularized by Patric Debois
  - developers, QA, sys/network/db admins
  - supporting the entire ecosystem of design, development, and production use cases
  - improves IT and biz outcomes: deploy more frequently with shorter lead times, fewer failures and faster error recovery

- development teams: build stuff
- operations teams: ensure stability
- kaizen: japenese; continuous improvement
- feedback loop: any process that recursively uses its own outcome as input when deciding what to do next (subsequent outcomes)

  - work > commit > build > test > release > support
  - effective feedback is what drives any control designed to improve a system

- logistics tail: the idea that everything has an ongoing cost, e.g. each tool in your toolchain requires

  - continued learning
  - patches & upgrades
  - etc

- chat-ops: using your chat client (e.g. slack) as part of your operational system
  - but it must be fkn automated, dont be ADOBE!
  - push notifications from your systems & process automation cycles into your chat client

## five levels of devops

### values

- CAMS: culture, automation, measurement, sharing; mutually reinforcing values; the WHY behind everything devops
- culture: who people are, communicate, socialize, and work; people, process, tools, in that order
  - the wall of confusion: how teams can often have opposing objectives and success criteria at the expense of others
    - teams with opposing goals
      - developers: key metric is throughput of code, new functionality, and moving fast
      - infrastructure teams: generally at odds with developers
        - sysadmins/operations: key metric is reliability, stability, controlling change
        - infosec: key metric is vulnerabilities (new code & lax systems (admins) are harmful to their objectives)
        - network admins
        - db admins
    - the wall of confusion stems from process & team alignment; e.g. what should take 1 hr, could take 1 week if there are unnecessary checks & balances, or misalignment between team objectives & goals
- automation: automated management & control systems and applications
- measurement: exposing the right metrics and analyzing them continuously; stay engaged, focused and in pursuit of goals and objectives
  - mean time to recovery
  - cycle time
  - costs
  - revenue
  - employee satisfaction
- sharing: openness and transparency; the feedback loop that helps continuously improve

### principles

- the three ways
  - systems thinking: focus on the overall outcome of the entire pipeline of the value chain
    - useful perspective when tracking and pursuing outcomes
    - dont overoptimize a component at the expense of the overall system & objectives; unless your optimizing your security posture
    - from concept to cash: the overflow flow and lifecycle of conceptualizing, designing, developing, and delivering useful products
  - amplifying feedback loops: creating, shortening, and disseminating feedback from systems & processes
  - culture of continuous experimentation and learning
    - actively trying out new tools, strategies, to see what works and stay out of analysis paralysis
    - i.e. do stuff: master your skills via repitition of practice
      - working code wins
      - if it hurts do it more
      - fail fast

### methods: devops playbooks

- people over processes over tools

  - people: whose responsible?
  - process: what do they need to do, and how do they need to do it
  - tools: what tools support the people and processes

- continuous delivery: practice of coding, testing and releasing software frequently in small batches to improve the overall quality & velocity

- lean management:

  - work in small teams
  - implement work in process limits
  - amplify feedback loops
  - visualize activity for analysis

- change control: direct correlation between operational success and control of environment changes

  - eliminate fragile artifacts
  - create repeatable build processes
  - manage dependencies
  - create an environment of continous improvement

- infrastructure as code: IaC; systems should be treated like code
  - system specs should be reviewed, built and tests
  - create systems from specifications and manage them programatically

### practices: components of devops

- incident command systems: identify, surface, share, control and correct failures and other misgivings
- developers on call: creators should primarily be the support team for their creations; enables a fast feedback loop
- pulic status pages: increases customer satisfaction & trust during service outage; heavy focus on communication so consumers understand whats going on
  - transparent uptime: communicate with consumers as much as possible during an outage
    - admit failure: everyone knows everything fails all of the time
    - sound like a human: dont sound corporaty when shit is fucked up; talk real to your real customers
    - have a communication channel thats consistently updated & customers know about it
    - be authentic; especially in the heat of the moment
- blameless postmortems: there is generally never a single root cause; nor is human error an appropriate reason for a failure (the buck stops with the CEO); heavy focus on communication so no one feels blamed
  - a meeting to identify, analyse, and strategize: its not about assigning blame, its about ensuring whatever happened doesnt happen again
  - should occur within 48 hours after failures have been identified; find what went wrong fast, and communicate it
  - the people involved with the issue should be part of the meeting, but should NOT run it
  - artifacts
    - create a timeline of events that attributed to the issue; everything should be in UTC time so that system events & human events can be plotted sequentially
    - description of the incident
    - description(s) of the root cause (could be multiple ideas about what caused it)
    - how the incident was/will be resolved/stabilized
    - how customers were affected
    - remediations/corrections/preventions/detections for/of future occurences
- embedded teams: reduces conflict of interest when responsibles are internal to the team managing the full breadth of a services lifecycle, thus SERVICE X team should include dev, qa, product, ops, etc; a team should never have to make a request to another team
  - independent, cross-functionality teams is the only way to have an effective & efficient devops practice
- the cloud: enables an API driven way to create and control infrastructure
- andon cords: halt/upgrade/rollback deployments as soon as bugs/issues are found
- dependency injection: inversion of control; loosely coupled dependencies that are passed into the application at runtime; supports IaC and immutable infrastructure; similar objectives to Service Discovery from a devops perspective
- service discovery: add some notes about this here
- blue/green deployments: after testing the release in a staging environment; deploy to an alternate production environment with a % of your userbase hitting it, once confirmed, you can blue/green prevProd/newProd to greater % of users; definitely need a load balancer for this with a % based route strategy
  - Blue green development requires two identical production environments, where one is online and the other is offline/not accessible to external users
- chaos monkey: system (on a whole) is less dependent on high availability and more on reliability; even in the face of unreliable components

  - a service that depends on a chain of components, each being 99% uptime, will only have 95% uptime (99*99*99*99*99===95%)

  -

### tools

- devops toolchain: never focus on a single tool, but the ecosystem/series of tools that can be composed into a toolchain and holistically support different aspects of devops practices
  - a tool is only useful to the degree that it supports your entire system
- characteristics of good tools
  - plays well with others tools in the toolchain
  - programmable: should be automation driven
  - verifiable: observability is key; what does it say its do/doing? how can you programmatically prove whats it doing/did?
  - well behaved: highly tested, opensource/from a trusted provider
- configuration management tools: supports automation of systems and components
- df

## pillars of devops

### infrastructure automation

### continuous delivery (& integration)

### reliability engineering
