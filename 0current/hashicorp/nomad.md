# nomad

- this doc is split into 4 main sections (level 2 headings)
  - architecture: shiz you should read first
  - jobspec: shiz you should read next
  - examples: case you get stuck, but maybe will delete this section
  - ui: breaking of the UI information arch

## links

- [nomad homagepage](https://www.nomadproject.io)
- [pre + post install](https://developer.hashicorp.com/nomad/tutorials/get-started/get-started-install)
- tuts
  - [nomad ui web interface](https://developer.hashicorp.com/nomad/tutorials/get-started/get-started-ui)
  - [all tuts via nomad portal](https://developer.hashicorp.com/nomad/tutorials)
  - [all tuts via developer portal (i like this one better)](https://developer.hashicorp.com/tutorials/library?product=nomad)
  - [tips and tricks by daniela](https://danielabaron.me/blog/nomad-tips-and-tricks/)
  - [users with exec driver & host volumes](https://developer.hashicorp.com/nomad/tutorials/stateful-workloads/exec-users-host-volumes)
- plugins
  - [container storage plugin](https://github.com/container-storage-interface/spec)
  - [storage csi plugins](https://kubernetes-csi.github.io/docs/drivers.html)
  - [container networking plugins](https://github.com/containernetworking/plugins)
  - [cni nomad docs](https://developer.hashicorp.com/nomad/docs/networking/cni)
  - [cni spec](https://www.cni.dev/docs/spec/)
  - [storage plugin docs](https://developer.hashicorp.com/nomad/docs/concepts/plugins/csi)
  - [csi_plugin docs](https://developer.hashicorp.com/nomad/docs/job-specification/csi_plugin)
  - [plugin stanza](https://developer.hashicorp.com/nomad/docs/configuration/plugin)
- drivers/integrations
  - [consul](https://developer.hashicorp.com/nomad/docs/integrations/consul-integration)
  - [nomad consul connect stanza](https://developer.hashicorp.com/nomad/docs/job-specification/connect)
  - [docker](https://developer.hashicorp.com/nomad/docs/drivers/docker)
  - [vault](https://developer.hashicorp.com/nomad/docs/configuration/vault)
  - [vault jobspec stanza](https://developer.hashicorp.com/nomad/docs/job-specification/vault)
  - [vault config stanza](https://developer.hashicorp.com/nomad/docs/configuration/vault)
  - [fork/exec](https://developer.hashicorp.com/nomad/docs/drivers/raw_exec)
  - [consul connect](https://developer.hashicorp.com/nomad/docs/integrations/consul-connect)
- storage
  - [stateful workloads with host volumes tutorial](https://developer.hashicorp.com/nomad/tutorials/stateful-workloads/stateful-workloads-host-volumes)
  - [client config host volumes](https://developer.hashicorp.com/nomad/docs/configuration/client#host_volume-stanza)
  - [group config volumes](https://developer.hashicorp.com/nomad/docs/job-specification/volume)
  - [task config volumes](https://developer.hashicorp.com/nomad/docs/job-specification/volume_mount)
- variables
  - [runtime vars](https://developer.hashicorp.com/nomad/docs/runtime/environment)
  - [env stanza](https://developer.hashicorp.com/nomad/docs/job-specification/env)
  - [template stanza](https://developer.hashicorp.com/nomad/docs/job-specification/template)
  - [consul template used by template stanza](https://github.com/hashicorp/consul-template)
  - [external configuration](https://developer.hashicorp.com/nomad/docs/job-specification/artifact)
- provisioning
  - [enable tls](https://developer.hashicorp.com/nomad/tutorials/transport-security/security-enable-tls)
  - [encryption tutorials](https://developer.hashicorp.com/nomad/tutorials/transport-security)
  - [hashicorp nomad on aws](https://aws.amazon.com/quickstart/architecture/nomad/)
  - [provision nomad clusters in the cloud](https://github.com/hashicorp/nomad/tree/main/terraform)
  - [deploy & manage nomad jobs](https://developer.hashicorp.com/nomad/tutorials/manage-jobs)
  - [operating nomad clusters](https://developer.hashicorp.com/nomad/tutorials/manage-clusters)
  - [monitoring logs](https://developer.hashicorp.com/nomad/docs/commands/monitor)
  - [monitoring nomad](https://developer.hashicorp.com/nomad/docs/operations/monitoring-nomad)
  - [secure nomad with access control](https://developer.hashicorp.com/nomad/tutorials/access-control)
- agents
  - [status](https://developer.hashicorp.com/nomad/docs/commands/status)
  - [server configuration](https://developer.hashicorp.com/nomad/docs/configuration/server)
  - [nomad configuration](https://developer.hashicorp.com/nomad/docs/configuration)
  - [client configuration](https://developer.hashicorp.com/nomad/docs/configuration/client#cni_path)
  - network
    - [network stanza](https://developer.hashicorp.com/nomad/docs/job-specification/network#bridge)
  - [networking](https://developer.hashicorp.com/nomad/docs/job-specification/network)
- jobs
  - [accessing logs](https://developer.hashicorp.com/nomad/tutorials/manage-jobs/jobs-accessing-logs)
  - [job init](https://developer.hashicorp.com/nomad/docs/commands/job/init)
  - [jobspec](https://developer.hashicorp.com/nomad/docs/job-specification)
  - [run](https://developer.hashicorp.com/nomad/docs/commands/job/run)
  - [stop](https://developer.hashicorp.com/nomad/docs/commands/job/stop)
  - [status](https://developer.hashicorp.com/nomad/docs/commands/status)
  - [parameterized jobs](https://developer.hashicorp.com/nomad/tutorials/job-specifications/job-spec-parameterized)
- tasks
  - [status](https://developer.hashicorp.com/nomad/docs/commands/alloc/status)
  - [logs](https://developer.hashicorp.com/nomad/docs/commands/alloc/logs)
  - [configuring tasks](https://developer.hashicorp.com/nomad/tutorials/manage-jobs/jobs-configuring)
  - [task stanza](https://developer.hashicorp.com/nomad/docs/job-specification/task#user)
- networking
  - [network stanza](https://developer.hashicorp.com/nomad/docs/job-specification/network)
- services
  - [service stanza](https://developer.hashicorp.com/nomad/docs/job-specification/service)
- cmds
  - [server-force-leave command](https://www.nomadproject.io/docs/commands/server-force-leave.html)

## basics

### terms

### install

- check the install link, you need to install the CNI plugins and update /etc/something/here with a conf file

```sh
# running Nomad without root requires adding nomad to the docker group
sudo usermod -G docker -a nomad
```

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

#### server agents in depth

- operate at the region level
- server agent: agent running in server mode: the scheduler
- leader (server): server agent responsible for cluster mgmt
- follower (server): server agent that isnt the leader

##### consensus

- servers (3-5) in each region form a singel consensus group: they work together to elect a singel leader
- leader: responsible for processing queries and transactions
- gossip protocol: used to connect all the server instances together

##### schedular

- is the CORE function of nomad
- the process of assigning tasks from jobs to client machines

###### jobs

- submitted by humans and represent a desired state
- tasks: are bounded by constraints like resource requirements and run on nodes (clients)
- job: one/more task groups with one/more tasks
- task group: set of tasks that must run on the same machine
- task: smallest unit of work in nomad, executed by task drivers
- system jobs
  - e.g. node plugins so they can moutn volumes on any client
- service jobs
  - e.g. controller plugins because they create and attach volumes anywhere with a storage providers api
  - service jobs should have more than one instance for high availability

###### nodes

-

###### allocations

- allocation: mapping between a job's task group and a client node, i.e. groups are allocated to client nodes
- its all about assigning a task group to a client for evaluation

###### evaluations

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

#### client agents in depth

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

## jobspec

### job spec

- job specification: aka jobspec; conf for nomad jobs
- the job spec is contained in a single file and should be checked into git
- workflow
  - create a job file
  - plan and review changes with a server agent
  - submit the job file to a server
  - review job status and logs
- each job spec should have a single job
- each job may have multiple groups which multiple tasks

### group

- defines a series of tasks that should be co-located on the same nomad client

#### network

- network requirements, (e.g. network mode and ports) to provided to tasks they boot
- only appropriate for services that want to listen on a port
  - services that make only outbound coonections do not need port allocations
- bridge mode: all takss in the group share the same network namespace (required for consul connect)
  - requires CNI plugins to be installed at the location specified in teh clients cni_path configuration
  - tasks running in a network namespace are not visible to applications outside the namespace ont he same host
  - enables connect-enabled apps to bind only to localhost within the shared network stack, and use the proxy for in/out traffic

#### task

- a task is a single unit of work, e.g. a docker container

#### template

- template stanza: instantiates an instance ofa templare renderer
  - useful to interpolate configuration files for downstream services, e.g. docker, consul, vault, etc
  - useful for providing environment vars to the workload
  - uses consul template for interpolation

#### artifact

- external configuration: can be downloaded via the `artifact` block
  - downloaded config files can be used in the `template` block
- can fetch any and unpack any file, eg tarball, binary, etc

### variables

- env vars
  - are injected into the task env before starting
  - are always injected as strings
- two types of variable interpolation: node attributribes and runtime environment vars
- node attributes: in constraints, task env vars, and certain driver fields
- runtime env vars: not itnerpretable in constraints because they are only defined once the scheduler has place them on a particular node

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
NOMAD_IP_<label>	# Host IP for the given port label. See here for more information.
NOMAD_PORT_<label>	# Port for the given port label. Driver-specified port when a port map is used, otherwise the host's static or dynamic port allocation. Services should bind to this port. See here for more information.
NOMAD_ADDR_<label>	# Host IP:Port pair for the given port label.
NOMAD_HOST_PORT_<label>	# Port on the host for the port label. See here for more information.

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

## examples

```json

job "poop" {
  datacenters = [str]
  type = str
  update {
    max_parallel = num
    min_health_time = str
    health_deadline = str
    progress_deadline = str
    auto_revert = bool
    canary = num
  }
  migrate {
    max_parallel
    health_check
    min_healthy_time
    healthy_deadline
  }
  group "cache" {
    count
    network {
      port "db" {
        to =
      }
      service {
        name
        tags
        port
        provider
      }
      restart {
        attempts
        interval
        delay
        mode
      }
      ephemeral_disk {
        size

      }
      task "redis" {
        driver
        config {
          {...driver config...}
        }
        resources {
          cpu
          memory
        }
      }
    }
  }
}
```

## UI

- by default runs on http://localhost:4646

### jobs

- lists all jobs, click to see status (like `nomad job status`)

### servers

- view of all server agents

#### monitor

- nomad application logs with option to set the log level

### clients

- view of all client agents

### topology

- view of the cluster and running workload, useful for complex nomad environments

```

```
