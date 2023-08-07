# good stuff

- swagger jackin AWS nomenclature and terminology to reuse elseware in bookofnoah as I speedrun my aws certifications

## links

- [api: fan out/in integration pattern](https://dzone.com/articles/understanding-the-fan-out-fan-in-api-integration-p)
- [api: rest](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- [api: restful api best practices](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [microservice architecture patterns and best practices](http://microservices.io/index.html)
- [noisy neighbor antipattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/noisy-neighbor/noisy-neighbor)
- [serverless framework](https://github.com/serverless/serverless)
- [state of devops 2021 (PDF)](https://services.google.com/fh/files/misc/state-of-devops-2021.pdf)
- [networking: intro](https://web.stanford.edu/class/cs101/network-1-introduction.html)
- [networking: ip address & cidr range visualizer](https://cidr.xyz/)
- [learning domain driven design](https://dddcommunity.org/learning-ddd/)
- [TCO: serverless vs traditional clouds](https://pages.awscloud.com/NAMER-field-GC-Deloitte-TCO-whitepaper-2019-learn.html)
- [OWASP quick reference](https://www.owasp.org/images/0/08/OWASP_SCP_Quick_Reference_Guide_v2.pdf)
- [networking: Address Allocation for Private Internets](http://www.faqs.org/rfcs/rfc1918.html)
- [networking: understanding ip addressing](https://www.ripe.net/about-us/press-centre/understanding-ip-addressing)

### ISO standards

- [popular ISO standards](https://www.iso.org/popular-standards.html)
- [iso 31000 risk management framework](https://www.iso.org/iso-31000-risk-management.html/)

### tools

- [bpftrace: inspect syscalls](https://github.com/iovisor/bpftrace)

## multi-cloud with cloudnative and open source

- cloudnative: seek managed services offered by your cloud provider
  - 12factor is always a good approach, but even more so with cloudnative apps
  - its difficult to implement a multicloud architecture if using proprietary managed services
    - architecture your apps to be infrastructure agnostic is very important in the event you need to pivot to different cloud providers
- opensource: you'll retain ownership of:
  - configuring VMS
  - updating operating systems
  - install application runtime
  - build and deploy apps
  - scaling and load balancing
  - monitor and observe apps
  - data storage
- multicloud: depending on how open vs cloudnative/propertiary you are, this could be an uphill battle

### cloudnative migration patterns

- refactor/migration: service by service is moved to the cloud into a new architecture
- lift and shift: aka rehost; copy pasta legacy into cloud services to save on hosting costs
  - the idea is you take the entire legacy set of applications and move it into the cloud
  - the core benefit is reducing infrastructure costs (no more on premise) while taking advantage of cloud compute reliability & availability
- replatform: lift and shift then replacement/refactor
  - this is more incremental then a pure lift and shift
  - you will need to connect the remaining legacy services with the new cloud services until everything is fully migrated

### server-based vs serverless architectures

- cost aside, its all about
  - where you want to spend your time
  - level of server/host/application customization/control required to fulfill business needs
  - technical maturity of team and access to subject matter experts

#### server based

- you manage all aspects of scalability, availablility, fault-tolerance, softare maintenance and host configuration
- use cases/considerations
  - predictable, consistent workloads with long-running/intensive computations
  - custom host configurations or software implementations
  - ability to manage, configure and maintain the underlying software

#### serverless

- serverless: opposite of server based
- use cases/considerations
  - purpose driven architectures and application flexibility
  - quick to market

## APIs

### best practices

- in any API-based application is to capture and retry a call whenever possible and to handle errors gracefully when a call fails

### REST

- Representational state transfer (REST) refers to architectures that follow six constraints:
  - Separation of concerns via a client-server model.
  - State is stored entirely on the client and the communication between the client and server is stateless.
  - The client will cache data to improve network efficiency.
  - There is a uniform interface (in the form of an API) between the server and client.
  - As complexity is added into the system, layers are introduced. There may be multiple layers of RESTful components.
  - Follows a code-on-demand pattern, where code can be downloaded on the fly (in our case implemented in Lambda) and changed without having to update clients.
- API-First strategy: where each service within their stack is first and always released as an API

## high availability

- horizontal scaling: in/out; increasing the total number of load balanced resources
- vertical scaling: up/down; increasing perf characteristics of existing resources
- availability is expressed as a percentage of uptime in a given year or as a number of nines
  - one nine: 90% uptime, 36.53 downtime
  - two nines: 99% uptime, 3.65 days downtime
  - three nines: 99.9% uptime, 8.77 hours downtime
  - 3 1/2 nines: 99.95% uptime, 4.38 hours downtime
  - 4 nines: 99.99% uptime, 52.60 minutes downtime
  - 4 1/2 nines: 99.995% uptime, 26.30 minutes downtime
  - 5 nines: 99.999% uptime, 5.26 minutes downtime
- availbility types
  - active-passive: one of two resources are considered the primary, the other secondary and becomes primary if the current one fails
    - challenges:
      - statefulness: acceptable since theres only one primary
      - availability: if failover fails, your resources wil be unreachable
      - scalability: since only one resource is considered primary, it will bear the brunt of the load
        - since the passive resource doesnt share the load; you need _vertical scaling_ to accomodate increased demand
        - stop the passive resource > resize and restart > make primary and shift traffic> stop, resize and restart the new secondary
          - you repeat this process when demand decreases
  - active-active: more than one of many resources are considered primary
    - challenges
      - statefulness: managing state across resources can be difficult and should generally be stateless
        - push state into a load balancer that fronts the fleet of resources
      - scalability: since multiple resources share load you need _horizontal scaling_
        - automation is key; adding and removing resources should match demand in near real-time
- redundancy: strategy for increasing availability
  - its all about duplicating data & servers across infrastructure in isolated geographic locations
  - challenges
    - replication process: keeping data, configuration, etc in sync across primary and secondary resources
    - failover: redirecting traffic from primary to secondary on failure
      - DNS strategy: updating an IP addr to point to a different DNS record
        - be careful of DNS caching and the time it takes to propagate DNS changes
      - Load balancing strategy: the IP points to a load balancer that routes requests to health checked resources

## databases

- OLTP workloads: online transactional processing
  - focus on recording Update, Insertion, and Deletion data transactions
- OLAP workloads: online analytical processing focusing on read operations, e.g. a data warehouse
  - store historical data that has been input by OLTP
  - can extract information from a large database and analyze it for decision-making
- command query respnsibility segregation: aka polyglot persistence
  - having a single big db instance thats queried by analytics services to provide `views` into the data for specific microservices/consumers
- sharding: enables horizontal scaling
  - the entire dataset is partitioned amongst multiple db instances
  - items stored in a particular partition is based on a hash of a partition key
- no/newsql
  - all about minimizing CPU time relative to data storage and i/o
  - data storage is now much cheaper than cpu time, hence the popularity of nosql dbs
  - does have higher i/o costs as generally you have to retrieve duplicated data at each trip
  - provides greater flexibilty in structuring your data, since your not concerned with normalization
  - OLTP with known request patterns
    - live/interactive applications
    - hot/active data
    - smaller documents
    - known query patterns

### best practices

- sharding use cases: all about scaling horizontally
  - distribute your data volume across multiple db instances for storage flexibility
  - serve increased request rates
- consistency patterns: all about ensuring previous writes are reflected in future reads
  - strongly consistent: i.e. read after write; all writes are always reflected
  - eventually consistent: previous writes may NOT be reflected
  - always design around eventually consistency
    - strongly consistency means you received the latest, but subsequent writes it may be stale whenever based on previous reads
- use purpose built dbs instead of general purpose
  - purpose built DBS excel in as peicfic domain with unmatched performance relative to general purpose dbs
  - deploy mulitple DB engines for specific needs and run analytics across a data warehouse

### purpose built databases

- data stores that solve specific data needs
  - READ heavy
  - WRITE heavy
  - scalability, faol-tolerence, availability
  - ACID, CAP-thereom
  - data structure

### data sources

- structured: stored as a series of data values in related tables for complex queries and analysis
- unstructured: stored as files (e.g. media, video, documents, etc), thus querying requires specialized tools to catalog and query
- semistructured: stored in json/xml files that are loaded at runtime; the structure is highly flexible enabling some querying and analysis but not at the level of structured data

### db architectures

#### relational

- structured, normalized schemas
- all about minimizing data storage via normalization
- this strict requirement on deduplication causes some queries to be cumbersome/cpu intensive
- either OLTP or OLAP, anything with unknown query patterns
  - only normalized data can efficiently respond to unknown queries
- Normalized relational or dimensional data warehouse
- Optimized for storage
- best scaled vertically
- referential integrity, ACID transactions, schema-on-write

#### Non Relational

- NoSQL: un/semistructured, lacking the ACID mechanisms of relational dbs
- NewSQL: un/semistructured, gaining traction on the ACID mechanisms of relational DBs
- Denormalized document, wide column, or key-value
- Optimized for compute
- best scaled horizontally
- OLTP web/mobile apps

##### document

- store semi/unstructured data as some type of file

##### graph

- for traversing multi-layered relationships and highly connected datasets purposely built for semi/un/structured data
- In a graph data model, relationships are first-class citizens, and the data is modeled as nodes (vertices) and links (edges)
- Nodes: are usually a person, place, or thing
- links: how nodes are all connected

##### key value

- optimized to store and retrieve unstructured non-relational data in key-value pairs in large volumes and in milliseconds
- high throughput, low latency reads/writes, endless scale

##### in memory

- used for read-heavy and compute intensive applications that require low latency access to semi/structured data
- performance is improved because data is retrieved from in-memory data stores instead of waiting on databases and disk I/O.
- cache types
  - built in:
  - application
  - centralized: stores data externally from the database in a remote non-relational key-value database
- cache strategies
  - lazy: reactive. Data is put into the cache the first time it is requested
  - write through: proactive. Data is put into the cache at the same time it is put into the database.

##### Vector

##### time series

- collect, store and process data by sequences by time

##### ledger

- complete, immutable and verifiable history of data changes

##### data warehouses

- designed and used as repositories for analytical data
- store and maintain aggregate values generated from relational databases.
- data is stored in columns instead of rows
  - and is indexed in a way that matches the way analytical queries are written.

### migration planning

- homogenous migrations: migrating from/to the same db engine
- heterogeneous migrations: migration from/to different db engines

## virtualization

- container: a standard unit of software; the highest level of abstraction
  - the container runtime shares the hardware OS kernel
  - you create isolation via file system layers
  - provides the best utilization of the underlying hardware
    - you can share OS libraries and software, or isolate them
- hypervisor: soft/firmware that enables sharing physical hardware resources across one/more virtual machines
- virtual machine: emulates a physical server; virtualize the operating system and better utilize resources
  - each application can now be isolated from other applications at the VM level
  - the virtualization layer is still heavy as it requires a complete operating system
    - which is potentially redundant as isolation requires redundant copies of OS, and OS libraries
- baremetal: the most inefficient; hardware costs are the same regardless of resource utilization
  - applications fight for the same set of resources
  - libraries are generally shared across applications and require synchronization
- from baremetal, vms to containers in increasing levels of abstractions
  - baremetal
    - server hardware
  - vms
    - operating system
  - containers
    - containerization platform
    - libraries
    - applications
- syscall: inspect api calls made at the namespace level
- OOM killer: out of memory killer: algorithm for finding the oldest & largest process in the system, and kills it to freeup memory for the other processes
  - its difficult to find out which process has been killed by the OOM killer algorithm
  - stopping a process doesnt freeup the memory allocated to it, you have to kill it
- cgroup: control groups; deals with CPU and Memory
- orchestration: service that coordinates container deployment, placement strategy, failure, and resource utilization across mutiple hosts
  - scheduling and placement of containers
  - automatic scaling in/out based on some strategy
  - self-healing services by autoamtically removing unhealthy containers and deploying new ones
  - integration with cloud and other services, e.g. networking and persistence
  - security, monitoring and logging for the fleet

### best practices

- dont install openssh/etc in a container
  - instead log into a parent namespace and start a shell
  - openssh: bypasses PEM modules, user-management, cert & key management is a whole-nother issue, etc
- forking (executing) too many small processes that run then die can eat up cpu time becasue the scheduler cant keep up with the start/stop
- PIN CPUs to a namespace to provide a clear boundary at the container level
  - this is difficult to get right, google it
- stay away from page swapping for performance reasons
  - instead focus on proper memory management
- always thinka bout the container architecture
  - user-space: where your app lives: full container isolation
  - kernel: shared space: all containers in the system share these resources; be aware of noisy neighbors
    - dont believe all the continer isolation stuff, its still possible for a container to break out of this boundary into kernel land
    - all isolation occurs at the kernel level, protect the king
  - platform: this is the physical hardware
- consider which containers share a network namespace
  - sharing network namespace increases perf (no need to go through all the tcp handshakes and things)
  - ^ but also reduces your security posture (you dont go through all the tcp handshakes and things)
- managing users from the user-namespace is possible, but difficult to get right
- in general
  - small containers, and always start from scratch
    - starting from scratch forces you to choose your syslibraries wisely to match the needs of your application
  - nologin from the outside world (no openssh, always exec sh for access)
  - north-side communication must be guarded
  - container technology !== network encryption: always implement e2e encryption at the application level

### container security

- risk process frameworks
  - ISO 31000: risk management
- risk mitigation: considering which containers are on the same platform (hardware) & use the same namespaces
- risk assessment: isolation, segmentation and management of apps in containers, the containers themselves, and the system (kernel) and platform (hardware)
  - confidentiality: its all about segregation of communication
    - container to container
    - process to process
    - container to outside
  - access
    - Who/When/Where
    - Logging
    - Start/Stop
    - Content of the container image
  - integrity
    - kernel 2: cgroups & namespaces
    - kernel 3 and 4: namespaces v2 (you should focus here)
  - availability
    - Resource Usage: cpu, memory, data compression
      - memory management is handled globally; you need to ensure a container doenst consume all of the systems memory
    - Noisy Neighbor effect: in multitenant systems with shared resources, the activity of one tenant can negatively impact another tenant's share of resources
- namespaces: you need to use the clone systemcall to create a namespace for a container
  - types
    - PID-namespace: isolated process namespaces per PID
      - each process has a global and local PID
      - the root namespace can see a child processes global and local pid
      - inside a container only the processes local PID is visible
      - the first process in a namespace has local id PID0, and its incremented by 1 and linked
        - killing a process kills its process tree
    - CPU/Memory-namespace (cgroup): its all about memory management and CPU scheduler
      - policy-based scheduling: kernel system scheduler has a policy for executing tasks on a specific cpu
      - CPU Affinity: pins a task to a specific CPU, instead of using policy-based scheduling
      - memory limitation: Out-of-memory OOM killer; do you kill processes that exceed their specified memory limit?
      - dirty/used/empty pages
      - context: memory is attached directly to a specific CPU, switching/migration takes time
        - context switching: the cpu scheduler moves from one cpu to another
        - context migration: the cpu scheduler decides a process needs to move from one cpu to another cpu
          - the memory used by a container IS NOT migrated with the process, so this impacts performance
      - cpu threads
    - Network-namespace: can be shared across PID-namespaces for communication across processes
      - puts network intefaces into namespaces: processes in a namespace can only use the available interfaces for connectivity
        - all processes in the network-namspace can talk to the inteface
      - kernel responsibilities: occurs at the kernel level, and thus global to all containers in the system
        - routing/fowarding/filters/bridging still happens in the kernel
        - TCP/UDP/ICMP stacks
    - User-namespace: allows containers to have their own user-ids, which are mapped to global userids
      - mapping table for users for local and global context
    - FS/Mount-namespace: the filesystem namespace
      - mapping table for filesystem paths
        - from the container perspective: it looks like a local path
        - from the kernel perspective: its an overlay to a system path
          - use syscall for open to inspect it
    - IPC-namespace: system file/inter-process communication; two containers shouldnt use IPC for comms, theres always a better way
    - UTS-namespace: allows a container to have its own hostname
  - organization: a tree structure; processes of different namespace-tree-branches cant see other branches
    - root > child x..y > a child can create a child
      - but a child does not have visibility into a cousin, e.g. cousin X cant kill cousin Y

## event driven architectures

- uses events to communicate between and evoke decoupled services
  - state and code are decoupled
  - integration through a messaging layer enabling asynchronous connections
- events: an observable (change in state) that contains all the information required to take subsequent action
- event producers: entities that create and publish events, e.g. websites, apps, etc to unknown consumers usually through an event-bus like EventBridge
- event router: ingests, filters, and pushes events to known consumers through some other mechanism like SNS
- event consumers: subscribe to receive specific or monitor all events in a stream and act on those they are interested in
- messages vs streaming
  - streaming
    - core entity is the stream: a collection of messages for a specific period of time
    - data remains in the stream for a period of time; each consumer must maintain a pointer
    - messages in streams are reprocessed until success/timeout; you need to build logic into the consumer to skip corrupted messages
  - messaging
    - core entity is the message which varies
    - messages are deleted once consumed
    - configure retries and dead letter queues

### streaming

### messaging

- allows components of distributed systems to communicate with each other

### microservices

- decentralized, evolutionary design
  - each service is paired with the appropriate programming language and technology
  - each component/system can evolve separately
- smart endpoints, dumb pipes
  - there is no enterprise service bus
  - data is not transformed when going through pipes, but each endpoint should transform as needed
- independent products, not projects
- designed for failure
  - services are resilient, redundant, and integration failure
- disposable and transient
  - immutable services and infrastructure with graceful shutdowns
  - start fast, and fail fast and release all file handles
- development and production parity
- microservice architecture: an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. take a large, complex system and break it down into independent, decoupled services that are easy to manage and extend.
- serverless: abstracts away the infrastructure layer so you can focus on developing your core product

#### service mesh

- networking boundary for communication between services
  - dedicated infrastructure layer using an array of lightweight network proxies deployed as sidecars into containers
  - its all about abstracting away the network configuration from the application code
- service to service communication: east-west
  - dynamically configuring how services are connected
- observability
  - determining how services are performing end-to-end
  - as a request falls through multiple service boundaries, are there bottle necks?
- security & traffic management: authNZ
  - securing comms between services
  - controlling how packets are routed through the nextwork in terms of policies, prioritization and resilience

#### Communication

- client polling: provide a message ID on the initial request, and a status and getResults to check the status/get results of the request
  - perhaps the most wasteful pattern
- webhooks: user defined http callbacks; the client is responsibile for providing the endpoint to be notified when work is complete instead of having to poll
  - trusted: when you own both sides of the integration and can create a secure connection
  - untrusted: when you only own one side of the integration
- websockets: create persistent connections between client and server
  - ideal for streaming/requests that require more than one response

## devops

- combination of cultural philosophies, practices anbd tools that increases an orgs ability to deliver applications and services at high velocity
  - evoling and improving products at a faster pace than organizations using trfaditional software dev and infrastructure mgmt processes
  - cultural philosophies: removng barriers and sharing end-to-end responsibility
  - processes: developed for speed and quality
  - tools: align with processes and automate repeatable tasks and focusing on efficiency and reliability
- technical maturity: often associated with increased levels of abstractions; a first principle of devops
- devops infinity loop
  - dev: the people and processes that create software; code, build, test
    - change quick, release often, measure success by rate of delivery
  - ops: teams and processes that deliver & monitor software: deploy, operate, monitor
    - driven by maintaining stability of the application
    - hence dev & ops have competing goals of releasing fast, and keep stability
  - test & security: plan, release

### practices

- communication & collaboration:
  - transparency of information
  - cross-functional teams own and eveluate their work
- monitor and observability
  - assess the effectiveness of changes
  - monitor performance
  - short feedback loops help teams react, learn, plan and improve
  - observable systems genreates enough data from all resources, apps and services in the form of logs, metrics and traces
    - gain system-wide opreational visibility
    - logs report on discrete events
    - metrics capture health and performance
    - traces report on transactrions and the flow of data across a distributed system
- continuous integration: regularly merging code changes into a central repo, which trigger automated builds and tests
- continous
  - delivery: every code change is built, tested and deployed to a non production testing/staging environment
    - requires manual deployment to prod
  - deployment: delivery + automatic deployment to a production environment
    - deploy to prod is automated
- microservices architecture: build an application as a set of loosely coupled services
- infrastructure as code: IaC: infrastructure is provisioned and managed using code and softwaqre dev techniques like CI and git

### pipeline

- a set f stages that mov es code from source to production
- code > build > test > release > deploy > monitor
  - code: develop and PRs
  - build: compile, lint & units, static analysis, dependency management, build images
  - test: functional, integration, regression, acceptance, load, security
  - release: prepare and package with a specific verison number
  - deploy: release to target environments e.g. test, staging, prod, etc
  - monitor

### tools

- cloud: on demand environments using AWS, GCP, IBM, cloudflare, etc
- development: IDEs, SDKs, code repositories
- CI/CD
  - build: jenkins, travis, codebuild, etc
  - deploy:
  - pipeline automation
- infrastructure
  - automation: terraform, cloudformation
  - configuration mgmt: chef, puppet
- containers and serverless
- monitoring and observability

## networking

- CSMA: carrier-sense multiple access

### Protocols

- IP: address denoting a specific computer on the internet
  - first part: network; used to identify the network part within the network
  - last part: host; used to specify a specific host within that network.
- IPv4: a 32bit ip address converted to decimal format: 4 octets, each representing 8 bits (0-255)
  - public:
    - Class A starts at 0.0.0.0 and ends at 127.255.255.255
    - Class B starts at 128.0.0.0 and ends at 191.255.255.255
    - Class C, starts at 192.0.0.0 and ends at 223.255.255.255
    - there are also Class D and Class E IP ranges
  - private: The default Amazon VPC in AWS is configured using a Class B range.
    - Class A is 10.0.0.0 - 10.255.255.255 providing one single Class A IP addresses.
    - Class B is 172.16.0.0 - 172.31.255.255 providing 16 Class B IP addresses.
    - Class C is 192.168.0.0 - 192.168.255.255 providing 256 Class C IP addresses.
    - for private IPs to connect with the public internet, they have to use Network Address Translation
- IPv6: 128bit ip address represented in hexadecimal rather than the dotted decimal like IPv4 addresses

#### Network Communication

- determine the formats and rules used to transfer data over the network
- handle authentication and error detection, syntax, synchronization, and semantics for both hardware and software
- examples
  - HTTP
  - TCP: defines how to establish and maintain a network conversation by which applications can exchange data
  - UDP: primarily used to establish low-latency and loss-tolerating connections between applications on the internet
  - IRC

#### Network Management

- define the policies and procedures used to monitor, manage, and maintain your network
  - Troubleshoot connections between host and client devices.
  - connection's status, availability, packet or data loss, and so on related to the health of your network connection.
  - ensures stable communication and optimal performance of the network
- can be applied to all devices on your network (computers, switches, routers, and servers).
- examples
  - SNMP: monitor and manage network devices
  - ICMP: used for diagnostic purposes, send error messages and inspect connectivity issues between devices

#### Network Security

- define how the network secures data from malicious attacks
  - protects the data from unauthorized users, services, or devices that access your network data
  - rely on encryption and cryptography to secure data.
- examples
  - SSL
  - SFTP
  - HTTPS

#### Network design and configuration

- a combination of network management, communication, and security protocols.

### CIDR notation

- classless inter-domain routing; enables expressing a rangte of ip addresses
- provides a numerical representation of a network that describes its characteristics and mask length which determines the usable addresses, including the start and end addresses
- addresses are represented by the starting IP address of the network, called the network address, and the prefix, which is a forward slash and a number that represents the size of the network.

#### Subnetting

- the process of dividing a network into smaller logical networks that exist within a single Class A, B, or C network to isolate groups of hosts together
  - each data link on a network must have a unique sub/network ID.
    - with every node on that data link being a member of the same network (or subnet)
    - Any device, or gateway, that connects N sub/networks has N distinct IP addresses, one for each sub/network that it interconnects.
  - improve routing efficiency, network management control, and network security
    - network traffic can travel a shorter distance without passing through unnecessary routers to reach its destination
- subnet: i.e. sub-network; a logical organization of connected network devices
- subnet mask: important for IPv4 addresses because the IP address doesn't give any information on the network size
  - for internal usage within a network to determine if a host is on the local or remote subnet
    - e.g. 205.0.125.100
    - class A: network 205, host 0.125.100
    - class B: network 205.0, host 125.100
    - class C: network 205.0.125, host 100

```sh
# a single ip
192.168.1.0

# a range of ips in which the first 24 are fixed, and the last 8 are flexible
# 32 - 24 = 8; the remaining 8 bits can be assigned to the 0 in 0/24
# the flexible bits can be either a 0 or 1, 2 choices for each of the 8 bits
## 32 - 24 = 8; 2^8 = 256 total ip addresses
## netmask: 255.255.255.0
## cidr base ip: 192.168.0.0
## broadcast ip: 192.168.0.255
## first useable: 192.168.0.1
## last usable: 192.168.0.254
192.168.0.0/24
# same as above, except
## 32 - 16 = 16; 2^16 = 65526 total ip addresses
## netmask: 255.255.0.0
## broadcast ip: 192.168.255.255
## last usable: 192.168.255.254
192.168.0.0/16

# 1024 ip addresses
192.168.0.0/22
```

### routing

- Routing is how your data moves:
  - across your network from device to device and provides the path to deliver network packets from the source to the destination
  - across the internet from your local network
- Global networking: moves your data across the internet through many interconnected networks
- Local networking: takes that data that is broken up into multiple pieces for reliable transport.

### OSI Model

- Open Systems Interconnect Model: a logical model and it was designed to describe the functions of the communication system by dividing the communication procedure into smaller and simpler components

#### Media Layers

- define how our data moves between point A and point B
  - Point A could be in your local network, and point B too, or maybe point B is across the internet.

##### Physical (layer 1)

- helps the devices on the network communicate and provides transmission and reception of raw bit streams over a physical medium
- eventually physical cables are used to transmit unstructured data

##### Data Link (layer 2)

- provides reliable transmission of data frames between two nodes connected by a physical layer
- adds more function and intelligence and to provide device-to-device communication
  - frames: format for sending information and data over a layer 2 network
  - mac addresses: unique hardware addresses for identifying devices on the network
  - controlled access to the layer 1 physical medium
  - collision detection: CD; reduces collisions along with improvements CSMA

##### Network (layer 3)

- responsible for moving the data from the source to the destination
- has no reliable method for ensuring packet delivery
- adds
  - IP: assigns cross network address to devices on the network
    - defines how computers send packets of data to each other
    - once addresses are assigned, it uses routing to communicate across networks
    - packets: containers that encapsulate the raw data being sent
    - routes: move packets of data through networks by reviewing and checking route tables
    - route tables: help the transmission for the routesrs to forward packets

#### Host Layers

- where your data is broken up for transport and then reassembled when it reaches the destination

##### Transport (layer 4)

- adds the functionality to support the networking used on the internet
- structuring and managing of the network: addressing, routing, and traffic control
  - ports:
  - segments:
  - error correction: sequence number to ensure the order of segments are maintained
  - retransmmission: if a packet is lost in transit, it can be resubmitted
  - flow control and a connection oriented architecture:
    - ensures you can create a connection between a client and sever using a three-way handshake
- adds protocols
  - TCP
  - UDP: primarily used to establish low-latency and loss-tolerating connections between applications on the internet
- stateless firewalls: do not understand the state of a connection
  - outbound traffic: leaving the client
  - inbound/response traffic: leaving the server

##### Session (layer 5)

- manages communiation sessions between two nodes
- stateful firewalls: understand the state of a connection & tcp segments
  - outbound traffic: leaving the client, if accepted, automatically accepts the response from the server
  - inbound/response traffic
  - can create bidirectional communication between client & sever or any two devices

##### Presentation (layer 6)

- adds features for the delivery and formatting of the information and further processing/display to layer 7
  - separation of different data representation
  - encryption
  - transforms the data to & from an application format and a network format
- sometimes presentation features can be performed in the application layer
  - hence the presentation layer can sometimes be skipped

##### Application (layer 7)

- supports communications for end-user processes and applications
- handles the presentation of data for user-facing software applications
- generally all application-specific functionality
  - identifying communication partners and the quality of service between them
  - determining resource availability, privacy and user authentication
  - synchronizing communication
  - connects this layer to lower layers in the OSI model
- common protocols: http, smtp, ftp, web browsing, top level API calls (e.g. REST)

### TCP/IP

- Transmission Control Protocol/Internet Protocol: designed for standard protocols and is a subsection of the OSI model
  - aka the internet protocol suite.
  - set of rules and procedures that function as an abstraction layer between internet applications and the routing and switching.
    - specifies how data is exchanged over the internet: how data should be broken into packets, addressed, transmitted, routed, and received at the destination
- It combines the seven layers of the OSI model into four layers

#### Link (Layer 1)

- Defines the networking methods within the scope of the local network link on which hosts communicate without intervening routers.
- a combination of the data link and physical layer of the OSI model
- features
  - Hardware Addressing: MAC Addresses
  - Protocols present to allow the physical transmission of data
- Protocols: that only operate on a link
  - Ethernet
  - ARP: Address Resolution Protocol

#### Internet (Layer 2)

- responsibility for sending packets across network boundaries.
- covers the functions of the network layer in the OSI model
- Establishes basic data channels that applications use for task-specific data exchange.
- defines protocols responsible for the logical transmission of data over the entire network
- connectins independent network and transports packets across network boundaries
- protocols
  - IPv4/6
  - ICMP
  - ARP

#### Transport (Layer 3)

- Establishes basic data channels that applications use for task-specific data exchange.
- covers the functions of the transport layer of the OSI model
- features
  - handles to end-to-end communication
  - provides flow control
  - ensures reliability with error-free delivery of data
- protocols
  - TCP
  - UDP

#### Application (Layer 4)

- Provides end user service, like exchanging application data over the network connections established by the lower level protocols.
- covers layer 5, 6 and 7 of the OSI model
- features
  - provides standardized data exchange
  - handles node-to-node communications
  - controls user-interface specifications
- protocols
  - HTTP
  - ssh: cryptographic network protocol for operating network services securely over an unsecured network.
  - NTP
  - ftp
  - POP: post office protocol
  - SMTP
  - SNMP

### Software Defined Networks (SDN)

- an approach to networking that uses software based controllers/APIs to communicate with underlying infrastructure and direct traffic
- a group of software services working together to create a network construct

### Network design documents

- documents and diagrams visualize the components of a network, including routers, firewalls, and devices
- show how those components interaca
-

#### network gateways

- network gateway: device or node that connects networks with different transmission protocols and performs protocol conversions to translate communications
- has a network interface card with inputs, outputs, and software for this translation of network protocols.
- serve as an entry and exit point for a network
- gateways vs routers: are usually separate devices, but modern routers can function as gateways
  - gateways connect networkers
  - router deliver data within a network

## Storage

- R/W patterns
  - Worm: write once, read many: for data with heavy reads

### storage types

#### block storage

- raw storage in which the hardware storage device or drive is a disk or volume that is formatted and attached to the compute system for use
- splits data into chunks (aka blocks; each with distinct addresses) and stores them on disk, subject to fragmentation over time
- its more efficient when changing a piece of the data, as only the chunk needs to be updated
- R/W pattern: WORM
- examples: HDDs, SSDs, NVMe, SAN systems
- use cases: transactional workloads, containers, virtual machines, i/o intensive apps, operating systems, databases, big data analytics engines
  - used by the operating system or an application that has the capabilities to manage block storage directly

#### file storage

- built on top of block storage, typically serving as a file share or file server.
- treats data as atomic units (e.g. a file) but also organized in a tree structure, like your filesystem
  - ideal when you require centralized access that must be easily shared and managed by multiple host computers
  - if changing a piece of data, you need to replace the entire file
- examples:
  - Server Message Block: SMB;
  - Network File System: NFS;
- use cases: web servers, analytics, media, file systems

#### object storage

- built on top of block storage: created using an operating system that formats and manages the reading and writing of data to the block storage devices
- treats data as atomic units (e.g. a file) and stores it on disk in a flat hierarchy, not subject to fragmentation over time
  - if changing a piece of the data, you need to replace the entire object
- uses cases: data archiving, backup and recovery, rich media; systems requiring file versioning, file tracking, and file retention.

### Onpremise capacity calculations

- raw: what you pay for and used calculate the operating costs and data center requirements.
  - The net usable capacity will vary by manufacturer and by individual system.
- formatted: raw capacity - hardware failure protection overhead, drive formatting, and operating system overhead.
  - Hardware failure protection overhead: aka hardware or software redundant array of independent disks (RAID)
    - protects the data if hardware or a drive fails by creating checksum protection for the data
    - Depending on the protection level, this can amount 15%–50% overhead
  - Formatting and operating system overhead: The operating system is then added to the system, which further reduces the available capacity 1%–5%
- allocated: formatted capacity - data protection services, such as snapshots, and add space for performance overhead
  - Snapshots can consume more space than your actual data
  - systems require additional space for operation overhead, especially for write operations.
- actual: business requirements + allocated:

## analytics

- key domains
  - customer experience
  - performance over time: system, costs, etc
  - trends
  - troubleshooting and remediation: identification, isolation and resolution
  - learning and improvement: detecting and preventing problems

### monitoring

- all about metrics, logging and tracing
  - processes must be in place to capture logs and other useful artifacts
  - captured logs and artifacts must be stored in a durable, searchable location
  - alerts and automation
- monitoring: The act of collecting, analyzing, and using data to make decisions or answer questions about your IT resources and systems
- monitoring tools: collects data generated by systems
- metrics: a datapoint consisting of a name and value
- dimensions: qualities that describe the context of a metric, consisting of a name and value
- statistics: metrics monitored over time
- logs: collect and aggregate files fomr resources and filterout actionable insights from background noise
- tracing: follow the path of a request as it passes through different services
  - investigate how apps and their underlying services are performing
  - important for troubleshooting the root cause of performance issues and errors

### observability

- the extent to which a system can be monitored
- you observe a system through metrics, logs and traces (see monitoring)
- considerations
  - storage costs
  - data overload
  - ensuring your system is outputting the correct data

## security

- the practice of protecting your intellectual property from unauthorized access, use, or modification
- Confidentiality: limiting information access and disclosure to authorized users (the right people) and preventing access by unauthorized people
- practices
  - audit system for changes, unusual access and errors
  - protect API endpoints
    - validate request bodies
    - throttle/rate limits
  - defense in depth: multiple layers of redundant security

### access control

- authnz
  - authentication: who you are
  - authorization: what you can do, e.g. via policies or roles
- north south: into and out of your service boundary
- east west: within your service boundary

#### ABAC

- attribute-based access control
- authorization strategy that defines permissions based on attributes
- helpful in environments that are growing rapidly and helps with situations where policy management becomes cumbersome

#### RBAC

- role based access control
- permissions are defined based on a person's job function

### end-to-end encryption

- be careful not to leak secrets, e.g. via logging
- encrypt data before processing
- protect data
  - at rest: any data you persist/store for any duration
    - client side: encrypt before you send it
    - server side: encrypt after you receive it
  - in transit: any data that gets transmitted from one system to another
    - SSL/TLS
    - public/private certificates

### principle of least privilege

- giving a user or system only those privileges that are essential to perform its intended function
- grant access as needed, and for no longer
- centralizing privilege management
  - Set expectations on how authority will be delegated down from admins to front line users
  - avoid long term credentials and prefer temporary creds with expiration
- enforce separation of duties: with appropriate authorization for each interaction with resources

### Security Monitoring

- starts by answering the following questions
  - what are the KPIs?
  - how should you measure them?
  - what are the thresholds for these metrics?
  - what is the escalation process
