- bookmark: https://developer.hashicorp.com/nomad/docs/drivers/docker#authentication
  - https://developer.hashicorp.com/nomad/docs/job-specification/network
  - [networking docs](https://developer.hashicorp.com/nomad/docs/networking)
    - fix the ADRs that assumed we would need an overlay network for nomad
    - haha it also explains the fkn issue with the docker bridge network we were experiencing
  - [task deps tut](https://developer.hashicorp.com/nomad/tutorials/task-deps)
  - you should run through the client configuration one more time

# nomad

- Nomad is a flexible workload orchestrator to deploy and manage any containerized or legacy application using a single, unified workflow. It can run diverse workloads including Docker, non-containerized, microservice, and batch applications.
- this doc is split into 4 main sections (level 2 headings)
  - architecture: shiz you should read first
  - configuration: client/server/plugins/integrations/etc configuration stanzas
  - jobspec: comprehensive (but brief) dive into jobspec stanzas
  - ui: breakdown of the UI info arch
- you will generally need to switch between client/server confs with jobspecs as there are side effects on how you configure the three and how they work together

## links

- [nomad homagepage](https://www.nomadproject.io)
- [pre + post install](https://developer.hashicorp.com/nomad/tutorials/get-started/get-started-install)
- interwebs
  - [nomad scheduling: secret lives of (raft) data](http://thesecretlivesofdata.com/raft/)
  - [nomad networking blog](https://mrkaran.dev/posts/nomad-networking-explained/)
  - [nomad networking video](https://www.youtube.com/watch?v=wTA5HxB_uuk)
- tuts
  - [nomad ui web interface](https://developer.hashicorp.com/nomad/tutorials/get-started/get-started-ui)
  - [all tuts via nomad portal](https://developer.hashicorp.com/nomad/tutorials)
  - [all tuts via developer portal (i like this one better)](https://developer.hashicorp.com/tutorials/library?product=nomad)
  - [tips and tricks by daniela](https://danielabaron.me/blog/nomad-tips-and-tricks/)
  - [users with exec driver & host volumes](https://developer.hashicorp.com/nomad/tutorials/stateful-workloads/exec-users-host-volumes)
  - [task dependencies](https://developer.hashicorp.com/nomad/tutorials/task-deps)
- upgrading
  - [intro](https://developer.hashicorp.com/nomad/docs/upgrade)
  - [specific versions](https://developer.hashicorp.com/nomad/docs/upgrade/upgrade-specific)
- plugins
  - [container storage plugin](https://github.com/container-storage-interface/spec)
  - [storage csi plugins](https://kubernetes-csi.github.io/docs/drivers.html)
  - [container networking plugins](https://github.com/containernetworking/plugins)
  - [cni nomad docs](https://developer.hashicorp.com/nomad/docs/networking/cni)
  - [cni spec](https://www.cni.dev/docs/spec/)
  - [cni spec on github](https://github.com/containernetworking/cni/blob/main/SPEC.md)
  - [storage plugin docs](https://developer.hashicorp.com/nomad/docs/concepts/plugins/csi)
  - [nomad coredns plugin](https://github.com/mr-karan/coredns-nomad/)
- integrations/drivers
  - [consul](https://developer.hashicorp.com/nomad/docs/integrations/consul-integration)
  - [consul servish mesh](https://developer.hashicorp.com/nomad/tutorials/integrate-consul/consul-service-mesh)
  - [docker](https://developer.hashicorp.com/nomad/docs/drivers/docker)
  - [vault integration docs](https://developer.hashicorp.com/nomad/docs/integrations/vault-integration)
  - [fork/exec](https://developer.hashicorp.com/nomad/docs/drivers/raw_exec)
  - [consul connect](https://developer.hashicorp.com/nomad/docs/integrations/consul-connect)
  - [all nomad tools](https://developer.hashicorp.com/nomad/tools)
  - [damon cli dashboard](https://github.com/hashicorp/damon)
  - [nomad autoscaler](https://github.com/hashicorp/nomad-autoscaler)
  - [autoscaler docs](https://developer.hashicorp.com/nomad/tools/autoscaling)
  - [community task drivers](https://developer.hashicorp.com/nomad/plugins/drivers/community)
- storage (also check csi plugins links)
  - [stateful workloads with host volumes tutorial](https://developer.hashicorp.com/nomad/tutorials/stateful-workloads/stateful-workloads-host-volumes)
- networking (also check cni plugins links)
  - [networking intro](https://developer.hashicorp.com/nomad/docs/networking)
  - [service discovery](https://developer.hashicorp.com/nomad/docs/networking/service-discovery)
  - [service mesh](https://developer.hashicorp.com/nomad/docs/networking/service-mesh)
- variables
  - [interpolation](https://developer.hashicorp.com/nomad/docs/runtime/interpolation)
  - [nomad variables](https://developer.hashicorp.com/nomad/docs/concepts/variables)
  - [runtime vars](https://developer.hashicorp.com/nomad/docs/runtime/environment)
- security
  - [security model](https://developer.hashicorp.com/nomad/docs/concepts/security)
  - [enable tls](https://developer.hashicorp.com/nomad/tutorials/transport-security/security-enable-tls)
  - [encryption tutorials](https://developer.hashicorp.com/nomad/tutorials/transport-security)
  - [secure nomad with access control](https://developer.hashicorp.com/nomad/tutorials/access-control)
  - [nomad secrets engine](https://developer.hashicorp.com/vault/docs/secrets/nomad)
  - [workload identity](https://developer.hashicorp.com/nomad/docs/concepts/workload-identity)
  - [acl policy spec](https://developer.hashicorp.com/nomad/docs/other-specifications/acl-policy)
- provisioning
  - [hashicorp nomad on aws](https://aws.amazon.com/quickstart/architecture/nomad/)
  - [provision nomad clusters in the cloud](https://github.com/hashicorp/nomad/tree/main/terraform)
  - [deploy & manage nomad jobs](https://developer.hashicorp.com/nomad/tutorials/manage-jobs)
  - [operating nomad clusters](https://developer.hashicorp.com/nomad/tutorials/manage-clusters)
  - [monitoring logs](https://developer.hashicorp.com/nomad/docs/commands/monitor)
  - [monitoring nomad](https://developer.hashicorp.com/nomad/docs/operations/monitoring-nomad)
  - [preemption scheduling](https://developer.hashicorp.com/nomad/docs/concepts/scheduling/preemption)
  - [consensus protocol](https://developer.hashicorp.com/nomad/docs/concepts/consensus)
  - [nomad filesystem arch](https://developer.hashicorp.com/nomad/docs/concepts/filesystem)
- agents
  - [status](https://developer.hashicorp.com/nomad/docs/commands/status)
  - [nomad configuration](https://developer.hashicorp.com/nomad/docs/configuration)
  - network
  - [networking](https://developer.hashicorp.com/nomad/docs/job-specification/network)
  - [schedulars](https://developer.hashicorp.com/nomad/docs/schedulers)
- jobs
  - [jobspec](https://developer.hashicorp.com/nomad/docs/job-specification)
  - [accessing logs](https://developer.hashicorp.com/nomad/tutorials/manage-jobs/jobs-accessing-logs)
  - [job init](https://developer.hashicorp.com/nomad/docs/commands/job/init)
  - [run](https://developer.hashicorp.com/nomad/docs/commands/job/run)
  - [stop](https://developer.hashicorp.com/nomad/docs/commands/job/stop)
  - [status](https://developer.hashicorp.com/nomad/docs/commands/status)
  - [parameterized jobs](https://developer.hashicorp.com/nomad/tutorials/job-specifications/job-spec-parameterized)
- tasks
  - [status](https://developer.hashicorp.com/nomad/docs/commands/alloc/status)
  - [logs](https://developer.hashicorp.com/nomad/docs/commands/alloc/logs)
  - [configuring tasks](https://developer.hashicorp.com/nomad/tutorials/manage-jobs/jobs-configuring)
- stanzas
  - [affinity](https://developer.hashicorp.com/nomad/docs/job-specification/affinity)
  - [artifact](https://developer.hashicorp.com/nomad/docs/job-specification/artifact)
  - [change_script](https://developer.hashicorp.com/nomad/docs/job-specification/change_script)
  - [check_restart](https://developer.hashicorp.com/nomad/docs/job-specification/check_restart)
  - [check](https://developer.hashicorp.com/nomad/docs/job-specification/check)
  - [client (agent conf)](https://developer.hashicorp.com/nomad/docs/configuration/client)
  - [connect](https://developer.hashicorp.com/nomad/docs/job-specification/connect)
  - [constraint](https://developer.hashicorp.com/nomad/docs/job-specification/constraint)
  - [csi_plugin](https://developer.hashicorp.com/nomad/docs/job-specification/csi_plugin)
  - [device](https://developer.hashicorp.com/nomad/docs/job-specification/device)
  - [dispatch_payload](https://developer.hashicorp.com/nomad/docs/job-specification/dispatch_payload)
  - [env](https://developer.hashicorp.com/nomad/docs/job-specification/env)
  - [ephemeral_disk](https://developer.hashicorp.com/nomad/docs/job-specification/ephemeral_disk)
  - [expose](https://developer.hashicorp.com/nomad/docs/job-specification/expose)
  - [gateway](https://developer.hashicorp.com/nomad/docs/job-specification/gateway)
  - [group](https://developer.hashicorp.com/nomad/docs/job-specification/group)
  - [job](https://developer.hashicorp.com/nomad/docs/job-specification/job)
  - [lifecycle](https://developer.hashicorp.com/nomad/docs/job-specification/lifecycle)
  - [logs](https://developer.hashicorp.com/nomad/docs/job-specification/logs)
  - [meta](https://developer.hashicorp.com/nomad/docs/job-specification/meta)
  - [migrate](https://developer.hashicorp.com/nomad/docs/job-specification/migrate)
  - [network](https://developer.hashicorp.com/nomad/docs/job-specification/network)
  - [parameterized](https://developer.hashicorp.com/nomad/docs/job-specification/parameterized)
  - [periodic](https://developer.hashicorp.com/nomad/docs/job-specification/periodic)
  - [plugin](https://developer.hashicorp.com/nomad/docs/configuration/plugin)
  - [proxy](https://developer.hashicorp.com/nomad/docs/job-specification/proxy)
  - [reschedule](https://developer.hashicorp.com/nomad/docs/job-specification/reschedule)
  - [resource](https://developer.hashicorp.com/nomad/docs/job-specification/resources)
  - [restart](https://developer.hashicorp.com/nomad/docs/job-specification/restart)
  - [scaling](https://developer.hashicorp.com/nomad/docs/job-specification/scaling)
  - [server (agent conf)](https://developer.hashicorp.com/nomad/docs/configuration/server)
  - [service](https://developer.hashicorp.com/nomad/docs/job-specification/service)
  - [sidecar_service](https://developer.hashicorp.com/nomad/docs/job-specification/sidecar_service)
  - [sidecar_task](https://developer.hashicorp.com/nomad/docs/job-specification/sidecar_task)
  - [spread](https://developer.hashicorp.com/nomad/docs/job-specification/spread)
  - [task](https://developer.hashicorp.com/nomad/docs/job-specification/task)
  - [template](https://developer.hashicorp.com/nomad/docs/job-specification/template)
  - [vault config](https://developer.hashicorp.com/nomad/docs/configuration/vault)
  - [vault](https://developer.hashicorp.com/nomad/docs/job-specification/vault)
  - [volume](https://developer.hashicorp.com/nomad/docs/job-specification/volume)
  - [volume_mount](https://developer.hashicorp.com/nomad/docs/job-specification/volume_mount)
- cmds
  - [server-force-leave command](https://www.nomadproject.io/docs/commands/server-force-leave.html)

## basics

### install

- check the install link, you need to install the CNI plugins and add/edit /etc/some-dir/this-file

```sh
# running Nomad (servers, clients require root) without root requires adding nomad to the docker group
sudo usermod -G docker -a nomad
```

## best practices/gotchas

- you will need to refactor your applications to consume nomad runtime vars to fully realize nomads functionality if your not 12factor compliant
  - else you you can inject new scripts via template stanza / map nomad values to application values via the env stanza
- when using nomad_ip and nomad_port vars, you also need to ensure nomad clients can communicate with each other to relay task chatter across machines over the bridge network
  - this is required when task in allocation A needs to chatter with task in allocation B

## architecture

### plugins

- nomad has builtin support for scheduling compute resources like cpu memory and networking
- third party plugins enhance task driver, device, storage and networking functionality
- every plugin requires two fields
  - driver: the name of the plugin
  - config: the conf for the plugin
    - command: the executable
    - args: args for the cmd

#### task driver plugins

- task driver: means of executing a task, e.g. docker
- runtime task execution
- the driver process lifecycle isnt bound to the client
- only one instance of a driver will ever be running per datacenter? (or per client)
- need to be installed and configured on each client
- remote task drivers: plugin that execute tasks on a different machine than a nomad client
- see the configuration sections for more details & conf for specific plugins

#### device plugins

- used for shceduling tasks with non CPU, memory or networking devices (e.g. gpus)
- need to be installed and configured on each client

#### storage plugins

- enables scheduling tasks with externally created storage volumes
- storage plugins extend freom the container storage interface (see links)
- are created dynamically as nomad jobs: only the csi_plugin type is supported (see links)
- nomad tracks which clients have instances of a given plugin
- providers
  - aws: e.g. EBS volumes
  - gcp: e.g. persistent disks
  - ceph
  - portworx
  - vsphere

##### csi plugins

- types
  - controller plugins: communicate with storage providers APIs: e.g. aws ebs volume
  - node plugins: do work on a client node, e.g. creating mount points
  - monolith plugins: perform both controller and node roles on the same client
- plugins mount and unmount volumes
  - arent in the data path once the volume is mounted for a task
  - plugin tasks are needed when tasks using their volumes stop because tasks should be left running until all dependent tasks are stopped
    - `nomad node drain` handles this automatically
- expose a unix domain socket `csi.sock` inside each plugin tasks and communicates over gRPC
  - the `mount_dir` tells nomad where the plugin expects to find the socket file
- `stage_publish_base_dir` tells nomad where to instruct the plugin to mount volumes for staging/publishing

###### volumes

- the scheduler determines whether a given client can run an allocation based onw hether it has a node plugin present for the volume
- before a task can use a volume the client needs to claim the volume for the allocation

#### network plugins

- need to be installed and configure don each client
- certain nomad networking functionality requires the CNI reference plugins
- the client `cni_path` informs nomad where to find CNI binaries
- `cni_config_dir` contains conf files loaded during plugin execution
  - `.conflist` loaded as network configurations;
  - `.conf` and `.json`` loaded as individual plugin confs for a specific network

### regions

- servers are associated with regions first and datacenters second;
- contain datacenters
- independent and isolated from other regions: dont share jobs, clients or state
- loosely coupled with other regions via gossip: enables users to submit & query servers transparently

### datacenters

- groups of client nodes; clients can be in different datacenters than their server, but not different region

### filesystem

- remember: this directory is meant to serve as an abstraction to the underlying machine file system
  - thus clients running on different hardware can use this same hierarchy
- filesystem lifecycle
  - allocation dir is created
  - empheral disk data is migrated from previous allocations
  - csi volumes are staged
  - task working dir is created
  - dispatch payloads are written
  - artifacts are downloaded
  - templates are rendered
  - taskX is started
    - bind & volume mounts initialized
- `data_dir`
  - server file system
    - checkpoint-signature
    - server
      - keystore
      - node-id
      - raft
        - peers.info
        - raft.db
        - snapshots
        - version
      - serf
        - snapshot
      - server.keyring
  - client file system
    - checkpoint-signature
    - client
      - client-id
      - secret-id
      - state.db
    - alloc/locId
      - alloc: `NOMAD_ALLOC_DIR`; shared across all tasks (read-write); should ALWAYS use the envvar
        - data: location used by the ephemeral_disk stanza for shared data
        - logs/{taskName}.std{err,out}.0
        - tmp
      - {taskName}: for a specific task, not shared with other tasks in group;
        - local: `NOMAD_TASK_DIR` private to the task
        - secrets: `NOMAD_SECRETS_DIR` secret data not visible outside of the task
        - tmp
      - hosts

#### image isolation mode

- e.g. docker/qemu
- tasks filesystems are created as machine images owned by the task drivers external process and not by the nomad user
- docker: /var/run/docker/containerd/cuntUid/here
- the following dirs are bind mounted into the container
  - you need to place all assets for your application into one of these dirs
    - e.g. templates, artifacts, payloads, etc. must be within here
    - `NOMAD_ALLOC_DIR`:
    - `NOMAD_TASK_DIR`:
    - `NOMAD_SECRETS_DIR`:
  - can workaround this by bind mounting the above dirs to a different location
    - [check somewhere on this page](https://developer.hashicorp.com/nomad/docs/concepts/filesystem#image-isolation)

#### chroot isolation

- e.g. exec/java
- task filesystems are chroot/pivot_root
- these arent bind mounted like image isolation

#### none isolation

- e.g. raw_exec/java on windows (eeww)
- filesystems arent isolated, and the task user can read-write anywhere the nomad user can

### agents

- long running (but lightweight) process that must run on every machine in the cluster
- registers the host machine with (cluster) server agents
- performs health checks
- runs tasks assigned to them
- agent: processing running on a server in server/client mode
- dev agent: runs in server & client mode and does not persist state to disk, useful for experiments and development only
- configuration: can send a single file or a dir (but not recursively)
  - defaults are in /etc/nomad
    - non empty values replace earlier configs: "", 0, false are considered empty
    - thus you cannot disable a truthy value, so design accordingly
    - plugin blocks are replaced and not merged
  - can be loaded like `nomad agent -config=single.conf -config=/etc/nomad -config=even.json -config=or.hcl`

#### agent configuration

- you generally want to split it into multiple files, and load the entire dir
- each file is processed in lexical order
  - non-empty next values either merged/append/replace current values
    - empty string, 0, false are considereed empty
    - that means you cant modify a truthy value with an empty value
    - plugin blocks are always replaced

### server agents in depth

- operate at the region level
- server agent: agent running in server mode: the scheduler
- leader (server): server agent responsible for cluster mgmt
- follower (server): server agent that isnt the leader

#### consensus

- servers (3-5) in each region form a singel consensus group: they work together to elect a singel leader
- leader: responsible for processing queries and transactions
- gossip protocol: used to connect all the server instances together

#### schedular

- is the CORE function of nomad
- the process of assigning tasks from jobs to client machines
- FYI: i skipped the preemption docs (see links)
- FYI: skipped the consensus protocol docs (see links)

#### jobs

- submitted by humans and represent a desired state
- tasks: are bounded by constraints like resource requirements and run on nodes (clients)
- job: one/more task groups with one/more tasks
- task group: set of tasks that must run on the same machine
- task: smallest unit of work in nomad, executed by task drivers

##### job types

- service jobs
  - long lived services that should never go down
  - e.g. controller plugins because they create and attach volumes anywhere with a storage providers api
  - service jobs should have more than one instance for high availability
  - uses the best fit scoring algorithm influenced by googles Borg
- batch jobs
  - short lived, e.g. minutes/days that are intended to run until they exit with an error
    - upon error they are restarted based ont he jobs restart & reschedule stanzas
  - uses the power of two choices described in Berkeley's Sparrow scheduler
- system jobs
  - jobs that should run on all clients that meet the jobs constraints
    - i.e. system jobs are placed on all clients as soon as clients are registered
    - system jobs are managed by nomad
  - are intended to run until explicitly stopped by an operator/preemption
  - e.g. node plugins so they can mount volumes on any client
    - or any task that should be present on every node in the cluster
- sysbatch jobs
  - jobs that should be run to completion on all clients that meet the jobs constraints
  - scheduled like the system scheduler
  - but runs like batch job: once a task exits successfully sysbatc jobs are not restarted on that client
  - useful for one off cmds to be run on every node
- parameterized jobs
  - a job that executes a specific action: e.g. encode a video
  - uses the `paramaterized` stanza

#### nodes

- i.e. client agents

#### allocations

- allocation: mapping between a job's group and a client node,all task in a group are allocated to the same client machine and share the same resources
  - its all about assigning a task group to a client for evaluation
- at the group level, all stanzas are for enabling allocations to request the resources they need
  - e.g. the network stanza allocates network conf for task allocations

#### evaluations

- evaluation: how nomad makes scheduling decisions;
  - triggers: jobspec changes (new/update), node failure
- bin packing: scheduling algorithm; attempts to create the most-desnse arrangement deployments to decrease TCO related to over-provisioning; nomad will pack as many tasks into a machine as possible, aiming to go from ~2% utilization to 20-30% utilization following the law of small numbers
- spread scheduling: opposite of binpacking, goal is to distribute deployment loads across as many machines as possible
- nomad evaluates the world state and reconciles it with the desired state
- lifecycle
  - pending: whenever something triggers an evaluation
  - enqeue: the evaluation broker runs on the leader server; manages the queue of pending evaluations and determines executation order and job delivery
  - dequeue: evaluations are moved from queue to scheduled on a server
  - scheduled: servers run 1 worker per core to process evaluations and create an allocation plan
    - planned: allocations are evicted, updated or created
    - feasbility checking: are there healthy client nodes available for work?
    - ranking: which client nodes would best execute this allocation
  - plan queue: manages pending plans, priority ordering, and race conditions
    - i.e. servers have determined scheduling, selected a node, and allocated a plan to a node
    - now its time for a node to take an allocation out of its queue and execute it

### client agents in depth

- operate at the datacenter level
- communicate via RPC for registration, heartbeats, receiving allocations and dispatching allocation updates
- client agent: agent running clinet mode: the deployer

### permissions

### provisioning

- general workflow
  - new jobs
    - create a job specification
    - plan and review changes with a nomad server
    - submit job file to a nomad server
    - review job status and logs
  - existing jobs
    - modify existing job file
    - plan and review changes with a nomad server
    - submit job file to nomad server
    - review job status and logs

### integrations

#### autoscaler

- todo: see links

#### consul integration

- we diverged from nomad docs, and will likely be unable to use service discovery/mesh as prescribed
- our images have the consul agent baked in and setup to run via bootstrap.sh files on cunt start
- hopefully this is a good thing
  - we should be able to connect services by pointing them to the allocation ip & port
  - we do not need to overload nomad with mesh/discovery configuration and it can focus on pure orchestration
- check the links > networking related docs

#### vault integration

- nomad servers and clients retrieve vault tokens that enables the nomad tasks to complete their duties
- nomad servers automates token renewal for nomad clients
- vault workflow
  - create token role for nomad server:
    - copypasta the policy to create and manage tokens for nomad clients.
  - create token role use by nomad server thats enabled to create tokens of the type needed by nomad clients for their tasks in nomad jobspecs
    - this token role is the parent token used to derive child tokens for jobs requesting tokens
    - this token role should be limited to the policies needed by tasks in job specs
      - allowed_policies: tasks may only request vault policies in this list
        - always use this type
      - disallowed_policies: tasks may request any vault policy thats not in this list
  - Configure Nomad to use the created token role.
  - create a period token assigned to the token role and give it to nomad server(s)
- nomad workflow
  - use the vault stanza in the nomad server configuration to setup vault integration
    - dont use the root token in prod, or ever, its like dev mode
    - provide vault server(s) with a periodic service token with assigned token role
  - use the vault stanza in the jobspec task section to secure created infrastructure

### security

- start with security model link after you have something to play with
- nomad is insecure by default

#### mTLS

#### ACLs

- each task has an implicit ACL that allows them access to their own data

#### namespaces

## configuration

- stanzas for configuring nomad, agents, integrations, plugins and etc
- basically anything thats not in the jobspec

### acl

### audit

### autopilot

### client

### consul

### plugin

### sentinel

### search

### server

### server_join

### tls

### ui

### vault

### docker (task driver plugin)

- first class docker workflow on nomad
- downloads containers, mapping ports, starting, watching and clean up
- requires a remote registry unless you use artifact + load
- container name is not configurable: is set to taskname-locId to enable scheduling more than 1 task port host
- customize the docker user via task.user
  - cunts using su-exec requires task.user to be set to `root` then you can drop privs at runtime
  - this is related to su-exec, not nomad/docker
- config attrs
  - image: either a remote registry or use artifact + load for tarball
  - image pull timeout
  - args: for cmd else passed to container
  - auth_soft_fail: dont fail on auth errs, resorts to to clients conf.auth.helper if exists
  - command: override img command
  - cpuset_cpus: set which cpu(s) to run on, 0 indexed
  - dns_search_domains: use network.dns if using group.network.bridge
  - dns_options: use network.dns if using group.network.bridge
  - dns_Servers: use network.dns if using group.network.bridge
  - entrypoint: override img entrypoint
  - extra_hosts: updates /etc/host; use sidecar_task.config instead when using consul connect + bridge; doesnt work right with more than 1 task in a group
  - force_pull: whether to force pull; images without tags/latest are always pulled
  - healthchecks: override img healthchecks
  - hostname: every instance of this task will use this hostname
  - init: use docker init system,set false if cunt already uses something like yelps dumbinit
  - interative: keep stdin open
  - sysctl: sysctl conf on cunt start
  - priviledged: also requires nomad agent + docker daemon to permit priviledged cunts
  - ipc_mode: none|host requires nomad agent to permit priviledged containers
  - ipv4_address: requires a user defined network
  - ipv6_address: requires a user defined network
  - labels: set when cunt starts
  - mac_address: set a specific mac addr
  - memory_hard_limit: if set, then task.resource.memory becomes a soft limit passed to docker as memory_reservation
  - network_mode: bridge|nat|host|none|container:name|or-anything-here
    - read this again when setting up networking, there are a bunch of branches
  - pid_mode: host|dont set; host requires nomad agent to permit priviledged containers
  - ports:
  - security_opt
  - shm_size
  - storage_opt
  - tty
  - uts_mode: host|dont set; host requires docker daemon to have user namespace remapping enabled
  - volumes: use mount instead
  - volume_driver: requires volumes to be set
  - work_dir
  - mount
  - devices
  - cap_add: generally requires setting required add options via client conf
  - cap_drop: generally requires setting required drop options via client conf
  - cpu_cfs_period
  - advertise_ipv6_address
  - readonly_rootfs
  - runtime
  - pids_limit

#### auth

- for registry
- falls back to the clients auth.helper stanza
- attrs
  - username
  - password
  - email
  - server_address
  - helper (points to agent conf.helper whatever)

#### load

- load image from tarfile instead of remote registry (sweet)

```sh
artifact {
  source = "http://path.to/redis.tar"
  options {
    archive = false
  }
}
config {
  # i.e. docker load -i redis.tar
  load = "redis.tar"
  image = "redis"
}

```

#### logging

- defaults to json file, 2 files, 2mb

```sh
logging {
  type = "fluentd"
  config {
    fluentd-address = "localhost:24224"
    tag = "your_tag"
  }
}

```

#### network_aliases

- requires network_mode = user-network

```sh
config {
  network_mode = "user-network"
  network_aliases = [
    "${NOMAD_TASK_NAME}",
    "${NOMAD_TASK_NAME}-${NOMAD_ALLOC_INDEX}"
  ]
}

```

#### ulimit

- ulimit conf on cunt start

```sh
ulimit {
  nproc = "4242"
  nofile = "2048:4096"
}

```

### podman (task driver plugin)

### qemu (task driver plugin)

### isolated fork/exec (task driver plugin)

### raw fork/exec (task driver plugin)

### remote/ecs (task driver plugin)

### raw_exec (task driver plugin)

- disabled by default because it runs as root

## jobspec

- the job spec is contained in a single file and should be checked into git
- workflow
  - create a job file
  - plan and review changes with a server agent
  - submit the job file to a server
  - review job status and logs
- each job spec should have a single job
- each job may have multiple groups which multiple tasks that should be colocated on a client machine
- definitely recommend reviewing the stanza links up top to get the full digest of options
- FYI:
  - when stanzas have multiple placements, child stanzas inherit parent stanzas
  - {} stanzas generally can be specified multiple times
- attrs
  - type: type of nomad scheduler; service, system, batch, sysbatch
  - region: determines which servers are able to schedule this job
  - datacenters: determines which clients are able to execute tasks in this job
  - all_at_once: should only be used in special circumstances, like christmas and birthdays
  - name: override the name of the job
  - namespace: this is no longer enterprise only
  - priority: between 1 and 100

### affinity

- node preferences where a job, group or task should be allocated
- matching nodes gets their scores boosted when determining scheduling
- can be placed anywhere (job, group, or task)

### constraint

- valid at job, group, or task level
- resticts the set of eligible clients to those whose resources meet the specification
- attrs: are used together to provide an expression
  - e.g. poop > 3
  - attribute: poop
  - value: 3
  - operator: >

### meta

- valid in job, group or task stanzas
- set user-defined key-value pairs that are available in a tasks runtime env

### migrate

- valid in job/group stanzas
- specifies the groups strategy for migrating allocations when clients are drained
- applicable to service jobs with a count greater than 1

### multiregion

- [enterprise only](https://developer.hashicorp.com/nomad/docs/job-specification/multiregion)

### parameterized

- skipped
- but has to do with dispatch_payload and running jobs as fns/actions

### periodic

- skipped
- but has to do with running jobs at set intervals like cron

### reschedule

- valid in job/group with group taking precedence after merging both
- specifies the rescheduling strategy when a task fails
- not valid for system/sysbatch jobs (they run on every node)

### update

- determines how tasks are updated
- attrs
  - stagger: interval between updates
  - max_parallel: concurrent evaluations

### spread

- valid in job/group
- enables operators to increase failure tolerance by specifying a node attribute that allocations should be spread over
- i.e instead of a single client, spread allocations over nodes with matching attributes, e.g. dc, avaliability zone, machine attrs or client meta
  - criteria is softly judged, if no matching nodes are found allocations are still evaluated
- clients are scored to how closely they match the desired targets and combined with other factors e.g. bin packing
- by default tasks are evenly distributed
- attrs
  - attribute: name/var reference
  - target: one/more % for each value of attribute
  - weight: 0 > 100

```sh
# job: Spread allocations over all datacenter
spread {
  attribute = "${node.datacenter}"
}

# group: Spread allocations over each rack based on desired percentage
spread {
  attribute = "${meta.rack}"
  target "r1" {
    percent = 60
  }
  target "r2" {
    percent = 40
  }
}
```

### group

- defines a series of tasks that should be co-located on the same nomad client
- attrs
  - count: total instances of each task within this group
  - shutdown_delay: duration to wait when stopping a groups tasks
  - stop_after_client_disconnect: duration after which a nomad client will stop allocations if it cannot communicate with servers\
  - max_client_discconect: duration during which a nomad client will attempt to reconnect allocations after it fails to heartbeat

#### ephemeral_disk

- ephemeral disk requires for the group
- can be marked as sticky and support live data migrations
- all group tasks share the same disk and referenced under `alloc/data/`
- attrs
  - migrate
  - size
  - sticky

#### network

- network mode and allocations for the entire group, and provisioned to tasks when they start
  - only appropriate for services that want to listen on a port
  - services that make only outbound coonections do not need port allocations
- bridge network & cross-allocation communication
  - allocationX > virtface > nomad <> docker bridge > ip tables > hostface > allocationY
    - for docker tasks: allocs use docker bridge
  - scopes
    - tasks that bind to loopback
      - accessible within the allocation
      - perfect for consul connected tasks
    - tasks that bind to bridge/0.0.0.0 without port forwarding
      - accessible within the client
    - tasks that bind to the bridge/0.0.0.0 with port forwarding
      - accessbile to the world
- docker gotcha
  - docker tasks connect to the docker bridge NOT the nomad bridge
  - each task runs in its own docker managed network namespace as well
  - nomad will create a placeholder container using jobspec.task.config.infra_image to enable all tasks in the same allocation to chatter
- network modes
  - bridge mode: all tasks in the group share the same network namespace
    - required for consul connect; enables task with `connect` stanza to only bind to localhost and use the proxy for in/egress
    - requires CNI plugins to be installed at the location specified in the client conf cni_path
    - tasks running in a network namespace are not visible to applications outside the namespace on the same host
    - if using group.network.mode=bridge DO NOT set task.config.network_mode
  - host mode: each task will join the host network namespace
  - none mode: isolated without any network interfaces
- attrs
  - mode: bridge|host|none|cni/cni_network_name
  - hostname: only supported with bridge mode using docker driver

```sh

group "example" {
  network {
    port "http" {}
    port "https" {}
    port "poop" {
      to = "123" # maps dynamicport:123
      to = -1 # maps dynamicport:dynamicport, same as not setting a value
      static = "123" # doesnt use a dynamic port, only useful for system/things like load balancers, e.g. static 80 + to = 8080
    }
  }
}

# a port labed poop
NOMAD_IP_poop # the ip to bind for poop
NOMAD_PORT_poop # the port value for poop
NOMAD_ADDR_poop # the combined ip:port for poop

```

##### port

- port "poop" {} uses a dynamic port
- attrs
  - static: restricts a task to 1 per host, since there is only one 123 port per host
  - to: only for bidge mode to configure port mapping, availabe in `NOMAD_PORT_poop` enables your app to listen on a fixed port thats mapped to a dynamic host port
  - host_network: sets the host network name to use, e.g., default|public|private
    - you probably want to review this again whenever you need a host_network

##### dns

- sets the dns configuration for allocation instead of using the client nodes configuration
- attrs
  - servers: set the dns name servers
  - searches: set the search list for hostname lookup
  - options: set internal resolver vars

#### restart

- valid in group/task with task taking precedence after merge
- configures restart on failure behavior
- attrs
  - attempts
  - delay
  - interval
  - mode: fail|delay

#### scaling

- valid in group/task
  - group: policy is always horizontal application scaling and sets the count value for the group
  - task: policy is always dynamic application sizing and controls the resource values of the task and must be labeled with the resource it controls
- requires nomad autoscaler or use via nomad UI
- doesnt support system jobs
- attrs
  - min
  - max
  - enabled
  - policy {}

##### policy

#### service

- can be specified at group/task level
  - group level: if provider === consul enables registering services with consul connect support; must include a connect stanza
- register this service with consul/nomad for discovery & monitoring
- lifecycle: managed by nomad
  - registration:
    - group services: service registration & checks before starting any tasks
    - task services: service registration & checks after starting tasks
  - updating: occurs without restarting any associated tasks
  - deregistering:
    - task services: deregistered when associated task exits
- attrs
  - port: advertised port of the service
    - alloc: advertise the to value if set, else the allocated host port
    - driver: advertise the port determined by the drivers' (e.g. docker) ports field
    - host: advertise the host port for this service in the matching network stanza
  - provider: consul|nomad
  - name: defaults to "${JOB}-{$TASKGROUP}-${TASK}"
  - tags: applied to running services
  - canary_tags: applied to service only in canary phase of booting
  - enable_tag_override: consul related
  - address: override the advertised addr
  - tagged_addresses: consul related
  - address_mode: alloc|auto|driver|host which address to advertise (see port)
  - task: the name of the nomad task associated with this service; valid only at group.service
  - meta
  - canary_meta
  - on_update: require_healthy|ignore_warnings|ignore how checks should be evaluated when determining deployment health

##### check

- register a healthcheck

##### check_restart

- can be within server or server > check
- when to restart tasks with unhealhty service checks

##### connect

- configuring options for consul connect
- only valid for group service stanza when provider = consul
- skipped stanzas
  - expose
  - gateway
  - proxy
  - sidecar_service
  - sidecar_task

#### volume

- specifies which volumes the group requires

#### task

- a task is a single unit of work, e.g. a docker container/batch processing
- attrs
  - driver: docker|exec|qemu|etc
  - config {}: specific to the task driver
  - kill_timeout
  - kill_signal
  - leader
  - shutdown_delay
  - user
  - see elseware for: constraint, affinity, meta, vault

##### artifact

- fetch and unpack any remote resource
- external configuration: can be downloaded via the `artifact` block
  - downloaded config files can be used in the `template` block
- can fetch any and unpack any file, eg tarball, binary, docker imagem, etc
- outputs artifacts relative to the task working directory
  - prefix all of your paths with one of the file system vars
- attrs
  - destination
  - mode: any|file|dir
  - options {}
  - headers {}
  - source

##### csi_plugin

- allows the task provide a container storage plugin to the cluster
- nomad will auto register the plugin so that it can be used by other jobs to claim volumes

##### env

- runtime env vars are populated before the task starts
- dashes in key names will be converted to underscores

```sh
# all values are coerced to strings
env {
  poop = 1
  boop = "1"
  soup = "${bloop.roop}"
  "key.with.a.dot" = "poop"
}
```

##### dispatch_payload

- only used with parameterized jobs that expects a payload
- skipped

##### lifecycle

- configures task dependencies and execution within the lifecycle of a task group
- main tasks: do not have a lifecycle stanza
- prestart tasks: executed before main tasks
- poststart tasks: executed after main tasks are running
- poststop: executed after main tasks are dead
- attrs
  - hook: {pre,post}start|poststop
  - sidecar: true if this is a long lived task and not an init task

```sh

# init pattern: runs before main task and doesnt restart
task "wait-for-db" {
  lifecycle {
    hook = "prestart"
    sidecar = false
  }

  driver = "exec"
  config {
    command = "sh"
    args = ["-c", "while ! nc -z db.service.local.consul 8080; do sleep 1; done"]
  }
}

# sidecar pattern: lives for as long as the main task is running
# sidecar = true so it restarts on failure
task "fluentd" {
  lifecycle {
    hook = "poststart"
    sidecar = true
  }

  driver = "docker"
  config {
    image = "fluentd/fluentd"
  }

  template {
    destination = "local/fluentd.conf"
    data = ...
  }
}

# cleanup/postprocess pattern
# runs after main tasks have stopped
task "announce" {
  lifecycle {
    hook = "poststop"
  }

  driver = "docker"
  config {
    image = "alpine/httpie"
    command = "http"
    args = [
      "POST",
      "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
      "text='All done!'"
    ]
  }
}
```

##### logs

- configures a task log rotation policy for stdout and stderr
- attrs
  - max_files
  - max_file_size

##### resources

- specifies machine requirements for a task
- review the docs for best practices (somewher at the bottom of the page)
- attrs
  - cpu: in MHZ; cant be specified with cores
  - cores: reserve entire cpu cores for a task, cores arent shared with other tasks
  - memory: in MB
  - memory_max: in MB; the total it can use if extra capacity exists

###### device

- create a scheduling & runtime requirement for a device; e.g. GPUs, FPGAs, and TPUs

##### template

- useful for populating dynamic data retrieved from env/consul/vault
  - can reference nomad runtime vars, node attrs/meta, service regs, and nomad vars
- instantiates an instance of a templare renderer
  - render config files
  - providing environment vars to the workload
  - uses consul template for interpolation
- outputs templates relative to the task working directory
  - prefix all of your paths with one of the file system vars
- attrs
  - change_mode: restart|noop|signal|script
    - noop: take no action
    - restart: the task
    - signal: send change_signal to task
    - script: run change_script
  - change_signal: e.g. SIGUSR1/SIGINT
  - data: the consul-template to execute
  - destination: where to save the template output relative to the task working directory, unless using raw/exec
  - env: injects the template into env as well as destination; requires change_mode === restart
  - error_on_missing_key: task will fail
  - perms: destination file perm
  - uid: uid of destination owner
  - gid: gid of destination owner
  - source: file path on host/remote
  - splay: random time to wait between 0 and this before invoking the change

###### wait

- min anmd max time to wait for the consul cluster to reach a consistent state before rendering the template

###### change_script

- configure scripts that execute when a template is changed
- attrs
  - command
  - args
  - timeout
  - fail_on_error

```sh
# with file
template {
  data        = "{{key \"my_key\"}}"
  destination = "local/test"
  change_mode = "script"

  change_script {
    command = "/local/script.sh"
  }
}

# with heredoc
template {
    data        = <<EOF
#!/usr/bin/env bash
echo "Running change_mode script"
sleep 10
echo "Done"
EOF
    destination = "local/script.sh"
    perms       = "777"
  }
}
```

##### volume_mount

- specify how a group volume should be mounted
- will fail if conf disagrees with client volume conf
- attrs
  - volume
  - destination
  - read_only
  - propagation_mode
    - private: task not allowed access to nested mounts
    - host-to-task: external mounts visible inside task
    - bidirectional: host-to-task + task can create new mounts; requires rw; task must cleanup created mounts before exiting

### variables

- TODO: i need to review this section again
- env vars
  - are injected into the task env before starting
  - are always injected as strings
- variable interpolation
  - node attributes: in constraints, task env vars, and certain driver fields
  - runtime env vars: not itnerpretable in constraints because they are only defined once the scheduler has place them on a particular node
- secrets
  - are encrypted and replicated between servers via raft
  - controlled via ACL policies
- interpolation: are generally available anywhere in a jobspec
  - ${node.poop}
  - ${attr.poop}
  - ${meta.poop}
  - ${env["poop"]}
  - ${NOMAD_POOP_SOUP}
  - ${CONSUL_SOUP_POOP}

#### example task env

- `env` inside a running consul task

```sh
NOMAD_ALLOC_NAME=core.consul[0]
NOMAD_HOST_IP_consul_serf_wan=192.168.0.16
CONSUL_CACERT=/run/secrets/consul_ca.pem
NOMAD_ALLOC_PORT_consul_dns=8600
NOMAD_CPU_LIMIT=500
CONSUL_ADDR_CLIENT=0.0.0.0
NOMAD_HOST_ADDR_consul_serf_lan=192.168.0.16:24264
HOSTNAME=00aab141cf81
CONSUL_DNS_TOKEN=50222ef2-614f-8296-54ec-05778e3f3ad8
NOMAD_HOST_IP_consul_grpc=192.168.0.16
SHLVL=1
NOMAD_HOST_IP_consul_server=192.168.0.16
NOMAD_HOST_PORT_consul_serf_lan=24264
NOMAD_IP_consul_serf_lan=192.168.0.16
HOME=/home/consul
NOMAD_HOST_ADDR_consul_ui=192.168.0.16:8501
NOMAD_ALLOC_ID=8d378542-27d1-47ff-5ed7-dd69e2a30121
NOMAD_ADDR_consul_dns=192.168.0.16:25475
NOMAD_ALLOC_INDEX=0
NOMAD_MEMORY_LIMIT=256
CONSUL_ADDR_BIND_WAN=0.0.0.0
NOMAD_HOST_PORT_consul_ui=8501
NOMAD_IP_consul_ui=192.168.0.16
CONSUL_DIR_CONFIG=config
CONSUL_DIR_DATA=data
MESH_HOSTNAME=mesh.nirv.ai
NOMAD_ALLOC_DIR=/alloc
NOMAD_ALLOC_PORT_consul_serf_lan=8301
NOMAD_DC=us-east
NOMAD_JOB_NAME=core
NOMAD_PORT_consul_dns=8600
CONSUL_DIR_BASE=/consul
CONSUL_GID=994
NOMAD_HOST_ADDR_consul_serf_wan=192.168.0.16:29658
CONSUL_PORT_GRPC=8503
CONSUL_ALT_DOMAIN=search
CONSUL_PID_FILE=pid.consul
NOMAD_ALLOC_PORT_consul_ui=8501
CONSUL_HTTP_TOKEN=c7da780e-bf99-6d3a-0b07-146c4e0da16c
NOMAD_HOST_PORT_consul_serf_wan=29658
NOMAD_IP_consul_serf_wan=192.168.0.16
NOMAD_REGION=global
TERM=xterm
NOMAD_HOST_ADDR_consul_grpc=192.168.0.16:23996
NOMAD_ADDR_consul_serf_lan=192.168.0.16:24264
NOMAD_HOST_ADDR_consul_server=192.168.0.16:28516
NOMAD_HOST_IP_consul_dns=192.168.0.16
NOMAD_JOB_ID=core
HASHICORP_RELEASES=https://releases.hashicorp.com
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
CONSUL_PORT_SERF_LAN=8301
NOMAD_HOST_PORT_consul_grpc=23996
NOMAD_IP_consul_grpc=192.168.0.16
CONSUL_CLIENT_CERT=/run/secrets/consul_server.pem
CONSUL_PORT_DNS=8600
NOMAD_HOST_PORT_consul_server=28516
NOMAD_IP_consul_server=192.168.0.16
NOMAD_PORT_consul_serf_lan=8301
NOMAD_TASK_NAME=core-consul
NOMAD_ADDR_consul_ui=192.168.0.16:8501
NOMAD_ALLOC_PORT_consul_serf_wan=8302
NOMAD_NAMESPACE=default
DATACENTER=us-east
NOMAD_PORT_consul_ui=8501
NOMAD_ALLOC_PORT_consul_grpc=8503
CONSUL_UID=996
NOMAD_ALLOC_PORT_consul_server=8300
CONSUL_NODE_PREFIX=consul
CONSUL_PORT_CUNT=8501
NOMAD_HOST_IP_consul_serf_lan=192.168.0.16
CONSUL_PORT_SERVER=8300
NOMAD_ADDR_consul_serf_wan=192.168.0.16:29658
NOMAD_SECRETS_DIR=/secrets
CONSUL_CLIENT_KEY=/run/secrets/consul_server_privkey.pem
CONSUL_PORT_SERF_WAN=8302
MESH_SERVER_HOSTNAME=server.us-east.mesh.nirv.ai
NOMAD_HOST_ADDR_consul_dns=192.168.0.16:25475
NOMAD_HOST_IP_consul_ui=192.168.0.16
NOMAD_PORT_consul_serf_wan=8302
PWD=/consul
NOMAD_ADDR_consul_grpc=192.168.0.16:23996
NOMAD_GROUP_NAME=consul
NOMAD_TASK_DIR=/local
NOMAD_ADDR_consul_server=192.168.0.16:28516
NOMAD_HOST_PORT_consul_dns=25475
NOMAD_IP_consul_dns=192.168.0.16
NOMAD_SHORT_ALLOC_ID=8d378542
CONSUL_ADDR_BIND=0.0.0.0
NOMAD_PARENT_CGROUP=nomad.slice
NOMAD_PORT_consul_grpc=8503
CONSUL_ADDR_BIND_LAN=0.0.0.0
NOMAD_PORT_consul_server=8300
```

#### nomad job vars

```sh
NOMAD_ALLOC_DIR	# The path to the shared alloc/ directory. See here for more information.
NOMAD_TASK_DIR	# The path to the task local/ directory. See here for more information.
NOMAD_SECRETS_DIR	# Path to the task's secrets directory. See here for more information.
NOMAD_MEMORY_LIMIT	# Memory limit in MB for the task
NOMAD_MEMORY_MAX_LIMIT #	The maximum memory limit the task may use if client has excess memory capacity, in MB. Omitted if task isn't configured with memory oversubscription.
NOMAD_CPU_LIMIT	# CPU limit in MHz for the task
NOMAD_CPU_CORES	# The specific CPU cores reserved for the task in cpuset list notation. Omitted if the task does not request cpu cores. E.g. 0-2,7,12-14
NOMAD_ALLOC_ID	# Allocation ID of the task
NOMAD_SHORT_ALLOC_ID #	The first 8 characters of the allocation ID of the task
NOMAD_ALLOC_NAME	# Allocation name of the task
NOMAD_ALLOC_INDEX	# vAllocation index; useful to distinguish instances of task groups. From 0 to (count - 1). The index is unique within a given version of a job, but canaries or failed tasks in a deployment may reuse the index.
NOMAD_TASK_NAME	# Task's name
NOMAD_GROUP_NAME #	Group's name
NOMAD_JOB_ID	# Job's ID, which is equal to the Job name when submitted through CLI but can be different when using the API
NOMAD_JOB_NAME	# Job's name
NOMAD_JOB_PARENT_ID #	ID of the Job's parent if it has one
NOMAD_DC #	Datacenter in which the allocation is running
NOMAD_PARENT_CGROUP #	The parent cgroup used to contain task cgroups (Linux only)
NOMAD_NAMESPACE	# Namespace in which the allocation is running
NOMAD_REGION	# Region in which the allocation is running
NOMAD_META_<key> #	The metadata value given by key on the task's metadata. Note that this is different from ${meta.<key>} which are keys in the node's metadata.
VAULT_TOKEN	# The task's Vault token. See Vault Integration for more details

```

#### nomad network vars

```sh
NOMAD_IP_<label>	# Host IP for the given port label.
NOMAD_PORT_<label>	# Port for the given port label. Driver-specified port when a port map is used, otherwise the host's static or dynamic port allocation. Services should bind to this port.
NOMAD_ADDR_<label>	# Host IP:Port pair for the given port label.
NOMAD_HOST_PORT_<label>	# Port on the host for the port label.

NOMAD_UPSTREAM_IP_<service> #	IP for the given service when defined as a Consul Connect upstream.
NOMAD_UPSTREAM_PORT_<service> #	Port for the given service when defined as a Consul Connect upstream.
NOMAD_UPSTREAM_ADDR_<service>	# Host IP:Port for the given service when defined as a Consul Connect upstream.
NOMAD_ENVOY_ADMIN_ADDR_<service> #	Local address 127.0.0.2:Port for the admin port of the envoy sidecar for the given service when defined as a Consul Connect enabled service. Envoy runs inside the group network namespace unless configured for host networking.
NOMAD_ENVOY_READY_ADDR_<service>	# Local address 127.0.0.1:Port for the ready port of the envoy sidecar for the given service when defined as a Consul Connect enabled service. Envoy runs inside the group network namespace unless configured for host networking.
```

#### consul vars

```sh
CONSUL_HTTP_ADDR	# Specifies the address to the local Consul agent. Will be automatically set to a unix domain socket in bridge networking mode, or a tcp address in host networking mode.
CONSUL_HTTP_TOKEN	# Specifies the Consul ACL token used to authorize with Consul. Will be automatically set to a generated Connect service identity token specific to the service instance if Consul ACLs are enabled.
CONSUL_HTTP_SSL	# Specifies whether HTTPS should be used when communicating with consul. Will be automatically set to true if Nomad is configured to communicate with Consul using TLS.
CONSUL_HTTP_SSL_VERIFY #	Specifies whether the HTTPS connection with Consul should be mutually verified. Will be automatically set to true if Nomad is configured to verify TLS certificates.
CONSUL_CACERT #	Specifies the path to the CA certificate used for Consul communication. Will be automatically set if Nomad is configured with the consul.share_ssl option.
CONSUL_CLIENT_CERT #	Specifies the path to the Client certificate used for Consul communication. Will be automatically set if Nomad is configured with the consul.share_ssl option.
CONSUL_CLIENT_KEY	# Specifies the path to the CLient Key certificate used for Consul communication. Will be automatically set if Nomad is configured with the consul.share_ssl option.
CONSUL_TLS_SERVER_NAME #	Specifies the server name to use as the SNI host for Consul communication. Will be automatically set if Consul is configured to use TLS and the task is in a group using bridge networking mode.
```

#### node variables

```sh
${node.unique.id } #	36 character unique client identifier	9afa5da1-8f39-25a2-48dc-ba31fd7c0023
${node.region} #	Client's region	global
${node.datacenter} # Client's datacenter	dc1
${node.unique.name}	# Client's name	nomad-client-10-1-2-4
${node.class} #	Client's class	linux-64bit
${attr.<property>} #	Property given by property on the client	${attr.cpu.arch} => amd64
${meta.<key>}	# Metadata value given by key on the client	${meta.foo} => bar
```

#### node attributes

```sh
${attr.cpu.arch}	# CPU architecture of the client (e.g. amd64, 386)
${attr.cpu.numcores} #	Number of CPU cores on the client. May differ from how many cores are available for reservation due to OS or configuration. See cpu.reservablecores.
${attr.cpu.reservablecores} #	Number of CPU cores on the client avaible for scheduling. Number of cores used by the scheduler when placing work with resources.cores set.
${attr.cpu.totalcompute}	# cpu.frequency × cpu.numcores but may be overridden by client.cpu_total_compute
${attr.consul.datacenter}	# The Consul datacenter of the client (if Consul is found)
${attr.driver.<property>}	# See the task drivers for property documentation
${attr.unique.hostname}	# Hostname of the client
${attr.unique.network.ip-address} #	The IP address fingerprinted by the client and from which task ports are allocated
${attr.kernel.arch} #	Kernel architecture of the client (e.g. x86_64, aarch64)
${attr.kernel.name}	# Kernel of the client (e.g. linux, darwin)
${attr.kernel.version} #	Version of the client kernel (e.g. 3.19.0-25-generic, 15.0.0)
${attr.platform.aws.ami-id}	# AMI ID of the client (if on AWS EC2)
${attr.platform.aws.instance-life-cycle} #	Instance lifecycle (e.g. spot, on-demand) of the client (if on AWS EC2)
${attr.platform.aws.instance-type}	# Instance type of the client (if on AWS EC2)
${attr.platform.aws.placement.availability-zone} #	Availability Zone of the client (if on AWS EC2)
${attr.os.name} #	Operating system of the client (e.g. ubuntu, windows, darwin)
${attr.os.version} # poop ur majesty
```

## UI

- by default runs on http://localhost:4646
- if you added consul/vault UI stanzas they will be available in the top right
  - super small links, should say `consul | vault | documentatin | etc`

### jobs

- lists all jobs, click to see status (like `nomad job status`)

#### overview

#### definition

#### versions

#### deployments

#### allocations

#### evaluations

#### services

### storage

### variables

### clients

- view of all client agents

### servers

- view of all server agents

#### overview

#### monitor

- nomad application logs with option to set the log level

### topology

- view of the cluster and running workload, useful for complex nomad environments
