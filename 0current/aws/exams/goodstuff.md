# good stuff

- swagger jackin AWS nomenclature and terminology to reuse elseware in bookofnoah

## links

- [serverless framework](https://github.com/serverless/serverless)
- [restful api best practices](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [microservice architecture patterns and best practices](http://microservices.io/index.html)
- [rest](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- [noisy neighbor antipattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/noisy-neighbor/noisy-neighbor)

### ISO standards

- [popular ISO standards](https://www.iso.org/popular-standards.html)
- [iso 31000 risk management framework](https://www.iso.org/iso-31000-risk-management.html/)

### tools

- [bpftrace: inspect syscalls](https://github.com/iovisor/bpftrace)

## terms

- API-First strategy: where each service within their stack is first and always released as an API
- microservice architectural: an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. take a large, complex system and break it down into independent, decoupled services that are easy to manage and extend.
- serverless: abstracts away the infrastructure layer so you can focus on developing your core product
- technical maturity: often associated with increased levels of abstractions; a first principle of devops
- syscall: inspect api calls made at the namespace level
- OOM killer: out of memory killer: algorithm for finding the oldest & largest process in the system, and kills it to freeup memory for the other processes
  - its difficult to find out which process has been killed by the OOM killer algorithm
  - stopping a process doesnt freeup the memory allocated to it, you have to kill it

## REST

- Representational state transfer (REST) refers to architectures that follow six constraints:
  - Separation of concerns via a client-server model.
  - State is stored entirely on the client and the communication between the client and server is stateless.
  - The client will cache data to improve network efficiency.
  - There is a uniform interface (in the form of an API) between the server and client.
  - As complexity is added into the system, layers are introduced. There may be multiple layers of RESTful components.
  - Follows a code-on-demand pattern, where code can be downloaded on the fly (in our case implemented in Lambda) and changed without having to update clients.

## multi-cloud + open source

- to truly leverage any cloud provider, you should seek to retain ownership of the following
  - configuring an instance
  - updating operating systems
  - install application runtime
  - build and deploy apps
  - scaling and load balancing
  - monitor and observe apps
  - data storage

## databases

### best practices

- sharding use cases: all about scaling horizontally
  - distribute your data volume across multiple db instances for storage flexibility
  - serve increased request rates
- consistency patterns: all about ensuring previous writes are reflected in future reads
  - strongly consistent: i.e. read after write; all writes are always reflected
  - eventually consistent: previous writes may NOT be reflected
  - always design around eventually consistency
    - strongly consistency means you received the latest, but subsequent writes it may be stale whenever based on previous reads

### terms

- OLTP workloads: online transactional processing
- OLAP workloads: online analytical processing
- command query respnsibility segregation: aka polyglot persistence
  - having a single big db instance thats queried by analytics services to provide `views` into the data for specific microservices/consumers
- cgroup: control groups; deals with CPU and Memory

### basics

- relational vs noSQL vs graph vs vector vs in memory
  - relational is all about minimizing data storage via normalization
    - this strict requirement on deduplication causes some queries to be cumbersome/cpu intensive
  - sql: is all about minimizing CPU time relative to data storage and i/o
    - data storage is now much cheaper than cpu time, hence the popularity of nosql dbs
    - does have higher i/o costs as generally you have to retrieve duplicated data at each trip
    - provides greater flexibilty in structuring your data, since your not concerned with normalization
  - graph: for traversing multi-layered relationships
  - in memory:
- relational vs nosql workloads
  - relational: either OLTP or OLAP, anything with unknown query patterns
  - nosql OLTP with known request patterns
    - live/interactive applications
    - hot/active data
    - smaller documents
    - known query patterns
- relational vs nosql scaling
  - sharding: enables horizontal scaling for both relational and nosql dbs
    - the entire dataset is partitioned amongst multiple db instances
    - items stored in a particular partition is based on a hash of a partition key

## virtualization

- container: a standard unit of software
- from baremetal, vms to containers in increasing levels of abstractions
  - baremetal
    - server hardware
  - vms
    - operating system
  - containers
    - containerization platform
    - libraries
    - applications
- baremetal: the most inefficient; hardware costs are the same regardless of resource utilization
  - applications fight for the same set of resources
  - libraries are generally shared across applications and require synchronization
- virtual machines: virtualize the operating system and better utilize resources
  - each application can now be isolated from other applications at the VM level
  - the virtualization layer is still heavy as it requires a complete operating system
    - which is potentially redundant as isolation requires redundant copies of OS, and OS libraries
- containers: the highest level of abstraction
  - the container runtime shares the hardware OS kernel
  - you create isolation via file system layers
  - provides the best utilization of the underlying hardware
    - you can share OS libraries and software, or isolate them

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

## microservices

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
