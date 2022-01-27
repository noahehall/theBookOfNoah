# devops

## links

- [devops maturity model](https://romesh-mccullough.github.io/devops-maturity-model/)
- [devops infrastructures wiki & checklist](http://infrastructures.org/)

## best practices

- actualize high intelligence teams
  - with high intelligence teams: its easier to transition to more complex models, tools, systems & architectures
- actualize high performance workflows
  - reduction in time to market is key
  - deployment frequency goes up
  - mean time to recover (MTTR) is increased
    - in a failure state, come up with a mitigation action and treat it as any other change in your workflow, build, test, deploy
    - overlay incident timestmaps on deploy timestamps, to help narrow down which commit caused the error (requires continuous integration & delivery)
  - quality increases exponentionally relative to bugs
  - change failure rate goes down
  - limits work in progress
  - shortens lead times for changes: i.e. the number of tasks in flight at once; the software equivalent of work in progress
- immutable infrastructure is the next phase of devops
  - less reliance on configuration management, since its baked into the container
  - however CM is still critical for the datalayer
- stay away from kitchen sinks, use plug-n-play tools instead, focus on tools that do one thing well, vs try to do everything poorly
- continuous integration
  - the coffee test: all builds should be less than 5 minutes
  - commit small bits
  - never leave the build broken: a broken build should stop all work across all teams
  - use a trunk-based git model: no long running branches
    - branch based: has long running branches, e.g. a dev vs master branch
  - never allow flaky tests: fkn fix or fkn remove
  - every build outputs a status, a log and an artifact for deployment
- continous delivery

  - only build artifacts once
  - artifacts should be immutable
  - deployment should go to a copy of production
  - stop deploys if a previous step fails
  - deployments should be idempotent

- testing: criticall for the CI/CD pipeline

### gotchas

## basics

### terms

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

  - good processes bring good results
  - go see for yourself (gemba): go to the actual place where value is created or incidents occur; never depend on reports, etc, but go see for yourself; go to the code, go inside the application, go view the config files, go talk to the people, etc
  - speak wiht data and manage by facts
  - take action to contain and correct root causes
  - work as a team
  - kaizen is everybody's business
  - general process: plan > do > check > act > [repeat]

- the five whys: it generally takes 5 whys to find a root cause: why did X happen, because of Y, why did Y happen, because of Z, ... etc 5 times
  - focus on the undelrying causes, not symptoms
  - dont accept answers like `not enough time`; we all work under constraints, so try to understand why there wasnt enough time
  - track the forks in the five whys: e.g. Y happened because of X & Z
  - dont accept human error as a root cause: as this always points to a process failure/lack of a process with sufficient safe guards
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

- shadow IT: teams deliberately bypassing processes & formalities just to get shit done
- conways law: melvin conway: organizations which design systems, are constrained to produce designs which are copies fo the communicatoin structures of these organizations
  - i.e. systems align themselves to communication boundaries; sales systems, ops systems, dev systems, biz systems, etc.
- process boundaries: ...

  - Minimum Viable Process: a manager should dictate the outer bounds of processes, and let independent teams adapt to the current env as they evolve
    - more processes is usually never the solution, as it often leads to greater bottlenecks

- ITSM: IT Service Management: service delivery is important to the overall process of software development

- ITIL: information technology infrastructure library; the first ITSM framework

  - a process model based view of controlling and managing services; suitable more for a watefall dev cycle
  - phases
    - service strategy
    - service design
    - service transition
    - service operation

- data warehouse: inventory of all IT assets, and the relationships between them
- cycle: the full commit pipeline, from commit to deploy
- cycle time: the time it takes for a change to be committed to be deployed

## five levels of devops

### values

#### cams

- culture, automation, measurement, sharing; mutually reinforcing values; the WHY behind everything devops
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

#### CALMS

- culture, automation, lean, measurement, sharing

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
    - all about education, understanding and encouragement to be successful
  - devs have to take responsibility for the code they produce
  - QA/operations need to create & manage self-service portals that enable devs to perform ops, and be there to support/guide them and be subject matter experts instead of doing work for other people
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
- service discovery: enable realtime system orchestration

## pillars of devops

- agile infrastructure: the history of devops is rooted in agile, so having a firm grasp of agile principles is core for devops teams

  - extends the agile manifesto to include operations teams (its pure dev focused) and infrastructure (doesnt include anything to do with building & maintaining the underlying infrastructure)

- lean software development: a systematic process for eliminating waste

  - eliminate waste
    - muda: work that absorbs resources, but adds no value
    - muri: unreasonable work imposed on workers & machines
    - mura: work coming in unevenly instead of a constant/regular flow
    - forms of waste: partially done work, extra features, relearning, handoffs, delays, task switching, defects
  - amplify learning
  - decide as late as possible
  - decide as fast as possible
  - empower the team
  - build integrity

- lean startup: the build, measure learn loop; get the product as fast as you can to consumers, and iterate from there

  - build: the minimum viable product
  - measure: the outcome and internal metrics
  - learn: about your problem and your solution
  - repeat: go deep where its needed

- value stream mapping: analyze the entire pathway (concept to cash, idea to realization) of value creation to understand
  - what value is added where
  - how long it takes to add value at each step
  - where waste resides in the process

### infrastructure automation

- infrastructure as code: completely programmatic approach to infrastructure

  - treat systems like code
  - keep everything in source control
  - write unit & integration tests
  - deploy on changes
  - get input from the environment and make decisions at runtime based on state

- define your infrastructure via code, any UI is your enemy

  - confidence that your dev, stage, prod, etc envs are all the same, as they are all built from the same template

- cattle, not pets: dont treat your infrastructure as pets, treat it as cattle

  - pets are something you handle manually
  - cattle is something you herd and process enmasse

- provisioning: making a resource ready for operation, including hardware, OS, system services and network connectivity

  - model driven automation: a declarative model of resources are used to realize resources, e.g. via terraform/aws cloudformation

- deployment: automatically deploying and upgrading resources

  - canary (staged) deployment: upgrade a subset of resources (the canary), and if it works, you upgrade the rest
  - blue/green deployment: duplicate the entire system, test, then swap
  - cluster immune system deployment:
  - immutable deployment: never upgrade software in product at all, but you replace it (my preference)

- orchestration: performing coordinated operations across multiple resources

- configuration management: management of change control for system configuration after initial provisoin; maintaining and upgrading resources and dependencies

  - imperative/procedural configurations: command necessary to produce a desired state are defined and executed
  - declarative/functional configurations: desired states are defined, and the service magically configures the system to match that state
  - idempotent configurations: the ability to reppeatedly execute configurations, achieve the same state
  - self-service configurations: ability for an end usre t oinitiate a process without having to go through other people

- immutable infrastructure (systems), immutable delivery (apps)
  - container based architecture: resources are packaged in a container with just enough OS config & dependencies and deployed to barebones physical infrastructure
    - less reliance on configuration, and instead baking the configuration into the image, and deploying the image instead
    - the container should be the artifact your build and deploy: the OS + config + app all backed in;
      - there shouldnt be a need to change its state via configuration management, once its deployed its immutable
      - when its time for upgrade, you redeploy the artifact

### ci/cd

- resources get automatically get built, unit tests are run, and deployed to the environment on each code commit
  - resources are always in a working state
- key areas
  - version control
  - CI system
  - build
  - test
  - artifact repository
  - deployment

#### testing

- nothing matters without tests & good code hygine: all of the best practices relative to particular environment and test type

- unit tests: the most specific type of test, relative to each line of code
- integration testing: holistic tests across service & resource boundaries
- core test methdologies
  - tdd: test driven development; not a fan, fk your opinion
  - bdd: behavior driven development: base tests on natural language descriptions that model business functionality
  - ATDD: acceptance test driven development: define scenarios from end users perspective where use cases are the basis of automated testing
- infrastructure testing: starting up a new env specifically to test configuration management, system design, and system efficacy
- performance testing: load, stress, soak and spike tests
- security testing

#### continuous integration

- automatically building and unit tesitng the entire service on every commit
- keeping software in a workin state all of the time
- workflow:
  - code commit
  - build
  - unit tests
  - other validation
  - packaging
  - outputs an immutable artifact, build status and log

#### continuous delivery & deployment

- deploying the output of CI to an environment, and performing automating integration & acceptance testing
- continuous deployment: continuous delivery specific to the production environment
  - artifacts shouldnt be rebuilt for production, instead the same artifact should be usuable in all environments
    - the CI pipeline only has write access to the artifact repository
    - the CD pipeline only has read access to artifacts
  - each artifact should have a checksum, to guarantee data integrity

### reliability engineering

- the ability of a resource/service to function under state conditions for a specified period of time
-
