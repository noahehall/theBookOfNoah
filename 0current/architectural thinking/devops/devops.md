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
  - mean time to recover (MTTR) is increased: how quickly a service can recover from a disruption
    - in a failure state, come up with a mitigation action and treat it as any other change in your workflow, build, test, deploy
    - overlay incident timestamps on deploy timestamps, to help narrow down which commit caused the error (requires continuous integration & delivery)
  - Mean Time between failures (MTBF) the average time between service disruptions
  - quality increases exponentially relative to bugs
  - change failure rate goes down
  - limit work in progress
  - shortens lead times for changes: i.e. the number of tasks in flight at once; the software equivalent of work in progress
- immutable infrastructure is the next phase of devops
  - less reliance on configuration management (CM), since its baked into the container
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
- continuous integration
  - always start with a clean env; each build should start with a clean state
  - keep builds fast
  - never commit new code to broken builds, leave the build broken, or remove tests that fail without first troubleshooting
  - use notifications to monitor build progress: code commit, build start, build stage, build complete, deploy, etc
- continous delivery
  - only build artifacts once
  - artifacts should be immutable
  - deployment should go to a copy of production
  - stop deploys if a previous step fails
  - deployments should be idempotent
- testing: critical for the CI/CD pipeline
- feature flags: enables committing of unfinished code, a/b testing, etc
  - branch by abstraction: use feature flags in the code to control cutting over to new areas of code
- choosing your git branching strategy wisely: if your PR lasts for days/weeks, get off that fkn team
  - high performance teams integrate often
  - the mechanism to handle PRs should be small and easy to understand
- commit hooks are useful: ticket numbers in commit messages, linting, unit tests, etc

### gotchas

## basics

### terms

- composability: services tend to rely on multiple components, packaging components into artifacts enables dependency management at component level
- cascading failure pattern: where a failure at one integration point, cascades to cause failures/disruptions throughtout the application stack in a layered architecture
- circuit breaker pattern: a service that watches for failures through systems boundaries, and reroutes requests upon detection
- design: theory & thoughtful planning
- devops: developer operations; the entire service lifecycle, from design > dev > production support
  - a partnership of all the team members involved in software development and operations.
  - The main reason to deploy DevOps in the cloud is to allow infrastructures to be controlled by APIs.
  - the term devops was popularized by Patric Debois
  - developers, QA, sys/network/db admins
  - supporting the entire ecosystem of design, development, and production use cases
  - improves IT and biz outcomes: deploy more frequently with shorter lead times, fewer failures and faster error recovery
- development teams: build stuff
- operations teams: ensure stability
- kaizen: japenese; continuous improvement
  - kaizen is everybody's business
  - good processes bring good results
  - go see for yourself (gemba): go to the actual place where value is created or incidents occur; never depend on reports, etc, but go see for yourself; go to the code, go inside the application, go view the config files, go talk to the people, etc
  - speak with data and manage by facts
  - take action to contain and correct root causes
  - work as a team
  - general process: plan > do > check > act > [repeat]
- the five whys: it generally takes 5 whys to find a root cause: why did X happen, because of Y, why did Y happen, because of Z, ... etc 5 times
  - focus on the underlying causes, not symptoms
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
  - push notifications from your systems & process automation cycles into your chat client
- shadow IT: teams deliberately bypassing processes & formalities just to get shit done
- conways law: melvin conway: organizations which design systems, are constrained to produce designs which are copies of the communication structures of these organizations
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
- data lake: a centralized repository that allows you to store all your structured and unstructured data at any scale; a system or repository of data stored in its natural/raw format, usually object blobs or files
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
    - from concept to cash: the overall flow and lifecycle of conceptualizing, designing, developing, and delivering useful products
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
  - create an environment of continuous improvement
- infrastructure as code: IaC; systems should be treated like code
  - system specs should be reviewed, built and tested
  - create systems from specifications and manage them programatically

### practices: components of devops

- incident command systems: identify, surface, share, control and correct failures and other misgivings
- developers oncall: creators should primarily be the support team for their creations; enables a fast feedback loop
- pulic status pages: increases customer satisfaction & trust during service outage; heavy focus on communication so consumers understand whats going on
  - transparent uptime: communicate with consumers as much as possible during an outage
    - admit failure: everyone knows everything fails all of the time
    - sound like a human: dont sound corporaty when shit is fkd up; talk real to your real customers
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
- embedded teams: reduces conflict of interest when responsibilities are internal to the team managing the full breadth of a services lifecycle, thus SERVICE X team should include dev, qa, product, ops, etc; a team should never have to make a request to another team
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

### tools

- devops toolchain: never focus on a single tool, but the ecosystem/series of tools that can be composed into a toolchain and holistically support different aspects of devops practices
  - a tool is only useful to the degree that it supports your entire system
- characteristics of good tools
  - plays well with other tools in the toolchain
  - programmable: should be automation driven
  - verifiable: observability is key; what does it say its done/doing? how can you programmatically prove whats it doing/did?
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
- lean startup: the build, measure, learn, loop; get the product as fast as you can to consumers, and iterate from there
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
  - immutable deployment: never upgrade software in production at all, but you replace it (my preference)
- orchestration: performing coordinated operations across multiple resources
- configuration management: management of change control for system configuration after initial provisioning; maintaining and upgrading resources and dependencies
  - imperative/procedural configurations: commands necessary to produce a desired state are defined and executed
  - declarative/functional configurations: desired states are defined, and the service magically configures the system to match that state
  - idempotent configurations: the ability to repeatedly execute configurations, while achieving the same state
  - self-service configurations: ability for an end user to initiate a process without having to go through other people
- immutable infrastructure (systems), immutable delivery (apps)
  - container based architecture: resources are packaged in a container with just enough OS config & dependencies and deployed to barebones physical infrastructure
    - less reliance on configuration, and instead baking the configuration into the image, and deploying the image instead
    - the container should be the artifact you build and deploy: the OS + config + app all backed in
      - there shouldnt be a need to change its state via configuration management, once its deployed its immutable
      - when its time for upgrade, you redeploy the artifact

### ci/cd

- resources get automatically built, unit tests are run, and deployed to the environment on each code commit
  - resources are always in a working state
- key areas
  - version control
  - CI system
  - build
  - test
  - artifact repository
  - deployment
- empowering teams: the CI/CD pipeline should be a self-service & transparent system
  - changes team dynamics and collaboration to ensure high fidelity is maintained
- reduced cycle times: the duration from code commit to release to production
- better security: the ability to continuously integrate patches and software updates reduces the amount of time needed to mitigate
- more time to be productive: the more you deliver, the more you can see your changes, the more you want to deliver, the more you're motivated to deliver
- build pipeline: sequence of operations and tools that peform them, between source code and the deployed system
  - how you compose your build pipeline and the flow between pipeline elements, is more critical than which exact tool you use
  - each stage (below) is a feedback loop, that lets you incrementally improve each change before continuing to the next phase
  - version control: e.g. github
  - build system: watches the repository for changes and triggers builds, e.g jenkins, bamboo, teamcity, travisCI, circleci
    - build code, run unit tests, provide feedback and visibility into the build process
      - always test in the mode the application runs in (i.e. production mode and never dev mode)
    - build tools: compilation & orchestration tools, e.g. docker, make, bash, etc
      - enables devs to build on the dev machine, as well as in the build env, keeping as much of the build logic stored in version control and out of build UIs (fk UIs)
    - unit & integration tests are critical to be run within the build system
  - artifacts: output of the build system; packages that can be stored, retrieved, and deployed
    - supports reliability, composability, security and sharability
    - ensures what you've tested is exactly whats going to production
  - artifact repo: amazon s3, artifactory, nexus, docker registries,
    - think through the packaging formats to accept and how you will manage (retire) dependencies
  - deployment server: responsible for watching the artifact repo, and deploying new packages to environments
    - deployments should always self validate their state, e.g. via smoke tests
    - deploy the same artifact, the same way, to the same (functionally similar) environment
    - deployments to production should only come from the artifact repository, and the CI system should be the only thing capable of writing to the artifactory repository
    - deployment tools: first deploy to a test/ci/qa/etc environment to run tests, then deploy to prod
    - ci environment: responsible for running integration & e2e tests
      - integration & e2e tests are critical to be run within the test env (e.g. QA/staging)
    - prod env: the same artifacts that passed testing should be deployed to prod
  - other tools: test coverage, linters, performance testing, etc

#### testing

- nothing matters without tests & good code hygine: all of the best practices relative to particular environment and test type
- unit tests: the most specific type of test, relative to each line of code
- integration testing: holistic tests across service & resource boundaries
- core test methdologies
  - tdd: test driven development; not a fan, but I understand its importance for enteprise/production applications
  - bdd: behavior driven development: base tests on natural language descriptions that model business functionality
  - ATDD: acceptance test driven development: define scenarios from end users perspective where use cases are the basis of automated testing
- infrastructure testing: starting up a new env specifically to test configuration management, system design, and system efficacy
- performance testing: load, stress, soak and spike tests
- security testing

#### continuous integration

- automatically building and unit tesitng an entire service on every commit
  - but it should also extend to the dev env, so devs arent needless waisting resources by committing unbuildable code
- keeping software in a workin state all of the time
- workflow:
  - code commit
  - build
  - unit tests
  - other validation
  - packaging
  - outputs an immutable artifact, build status and log

#### continuous delivery & deployment

- continuous delivery: the ability to manually deploy code thats been continously integrated at any point in time
- deploying the output of CI to an environment, and performing automating integration & acceptance testing
  - all envs should be as close to production as possible
- continuous deployment: continuous delivery specific to the production environment
  - the automated deployment of code thats been continously integrated
  - artifacts shouldnt be rebuilt for production, instead the same artifact should be usuable in all environments
    - the CI pipeline only has write access to the artifact repository
    - the CD pipeline only has read access to artifacts
  - each artifact should have a checksum, to guarantee data integrity

### reliability engineering

- the ability of a resource/service to function under specific conditions for a specified period of time
- key practices
  - extend delivery to production
  - extend operations feedback to development
  - embed project development knowledge into operations
  - embed operations knowledge into development
- site reliability engineering: product teams support their own services; until it becomes critical enough for oversight; supports a health feedback loop from ops to design

#### design for operation, and operate for design

- design for operation: structure systems to be maximally reliable and maintainable
  - all systems fail: high availability is a losing game; what will you do when it fails?
    - you should understand the behavior of every resource/service in a system, and understand the effect (and what it affects) when it fails
  - application performance management: APM; distributed lightweight profiling across a systems to automatically gather metrics & identify bottlenecks
    - distributed systems are more vulnerable to bottlenecks than outright application failure
- operate for design: push production insights and feedback directly into the design & development workflows
  - increase the feedback loop from operations into design & development
  - observability: monitoring, metrics & logging
    - process
      - instrument your resources
      - measure the metrics of your services over time
      - analyze & learn from your system
      - repeat
    - key areas
      - service performance & uptime: synthetic checks at the highest level/abstraction of the system; answers the question, is the system working holistically?
      - software component metrics: ports & processes located on the host; answers the question, is this resource working?
      - system metrics: time series metrics analyzing cpu, memory, etc; answers the question, is this resource functioning normally?
      - application metrics: telemetry emitted from the application itself during runtime; answers the quesiton, how is the application performing, responding to the environment, and interacting with users/other services
      - performance metrics: all other areas include performance metrics, but you should also specifically focus on it
        - RUM: real user monitoring; captures performance from the end-users perspective
        - APM: application performance management; instrumentation at the code level to monitor function performance
      - security monitoring:
        - key areas
          - system security: TLS/SSL; open ports, configuration issues
          - application security: intrusion detection
          - custom application events: password resets, invalid logins, new account creation
          - anomalies: too many 401s, access attempts from weird IP segments
      - logging:
        - centralized logging: send all logs (especially in a distributed system) to a repository
          - dont collect log data you dont plan to use
          - keep logs for as long as they're useful
          - only alert on what you must respond to
          - clearly define log levels: infos, warnings, errors
            - if an error doesnt require an action, it isnt an error, its a warning
            - there should never be a standard error
        - 5 Ws
          - what happened?
          - when did it happen?
          - where did it happen?
          - who was involved
          - where did that entity come from?
  - how complex systems fail
    - change introduces new forms of failure
    - systems contain changing mixtures of failures latent within them
    - all systems are always running in degraded mode
