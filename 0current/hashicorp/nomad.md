# nomad

## links

- [nomad homagepage](https://www.nomadproject.io)
- [server-force-leave command](https://www.nomadproject.io/docs/commands/server-force-leave.html)
- [nomad ui web interface](https://developer.hashicorp.com/nomad/tutorials/get-started/get-started-ui)
- tuts
  - [all tuts via nomad portal](https://developer.hashicorp.com/nomad/tutorials)
  - [all tuts via developer portal (i like this one better)](https://developer.hashicorp.com/tutorials/library?product=nomad)
  - [tips and tricks by daniela](https://danielabaron.me/blog/nomad-tips-and-tricks/)
  - [users with exec driver & host volumes](https://developer.hashicorp.com/nomad/tutorials/stateful-workloads/exec-users-host-volumes)
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
- plugins
  - [plugin stanza](https://developer.hashicorp.com/nomad/docs/configuration/plugin)
  - [container networking plugins](https://github.com/containernetworking/plugins/releases/tag)
  - [csi plugins: container storage volumes](https://developer.hashicorp.com/nomad/docs/job-specification/csi_plugin)
- drivers/integrations
  - [consul](https://developer.hashicorp.com/nomad/docs/integrations/consul-integration)
  - [nomad consul connect stanza](https://developer.hashicorp.com/nomad/docs/job-specification/connect)
  - [docker](https://developer.hashicorp.com/nomad/docs/drivers/docker)
  - [vault](https://developer.hashicorp.com/nomad/docs/configuration/vault)
  - [vault jobspec stanza](https://developer.hashicorp.com/nomad/docs/job-specification/vault)
  - [vault config stanza](https://developer.hashicorp.com/nomad/docs/configuration/vault)
  - [fork/exec](https://developer.hashicorp.com/nomad/docs/drivers/raw_exec)
  - [consul connect](https://developer.hashicorp.com/nomad/docs/integrations/consul-connect)
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

## terms

- agent: processing running on a server in server/client mode
- server agent: agent running in server mode: the scheduler
- client agent: agent running clinet mode: the deployer
- dev agent: runs in server & client mode and does not persist state to disk, useful for experiments and development only
- leader: server agent responsible for cluster mgmt
- follower: server agent that isnt the leader
- client: agent running in client mode, executes tasks assigned from servers
- job: one/more task groups with one/more tasks
- job specification: schema for nomad jobs
- task group: set of tasks that must run together
- task driver: means of executing a task, e.g. docker
- task: smallest unit of work in nomad, executed by task drivers
- allocation: mapping between a task group in a job and a client node, created by server agents to assign jobs to client agents
- evaluation: how nomad makes scheduling decisions
- bin packing: scheduling algorithm; attempts to create the most-desnse arrangement deployments to decrease costs related to over-provisioning
- spread scheduling: opposite of binpacking, goal is to distribute deployment loads across as many machines as possible
- gossip protocol: used to connect all the server instances together

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

## agents

- long running (but lightweight) process that must run on every machine in the cluster
- registers the host machine with (cluster) server agents
- performs heart-beating
- runs tasks assigned to them
- configuration: can send a single file or a dir (but not recursively)
  - defaults are in /etc/nomad
    - non empty values replace earlier configs: "", 0, false are considered empty
    - thus you cannot disable a truthy value, so design accordingly
    - plugin blocks are replaced and not merged
  - can be loaded like `nomad agent -config=single.conf -config=/etc/nomad -config=even.json -config=or.hcl`

## job spec

- the job spec is contained in a single file and should be checked into git
- workflow
  - create a job file
  - plan and review changes with a server agent
  - submit the job file to a server
  - review job status and logs

### job

- each job spec should have a single job
- each job may have multiple groups

#### group

- defines a series of tasks that should be co-located on the same nomad client

##### network

- network requirements, (e.g. network mode and ports) to provided to tasks they boot
- only appropriate for services that want to listen on a port
  - services that make only outbound coonections do not need port allocations
- bridge mode: all takss in the group share the same network namespace (required for consul connect)
  - requires CNI plugins to be installed at the location specified in teh clients cni_path configuration
  - tasks running in a network namespace are not visible to applications outside the namespace ont he same host
  - enables connect-enabled apps to bind only to localhost within the shared network stack, and use the proxy for in/out traffic

##### task

- a task is a single unit of work, e.g. a docker container

## schedular

## variables

### env

- env vars
  - are injected into the task env before starting
  - are always injected as strings

### template

- template stanza: instantiates an instance ofa templare renderer
  - useful to interpolate configuration files for downstream services, e.g. docker, consul, vault, etc
  - useful for providing environment vars to the workload
  - uses consul template for interpolation

### artifact

- external configuration: can be downloaded via the `artifact` block
  - downloaded config files can be used in the `template` block
- can fetch any and unpack any file, eg tarball, binary, etc

### interpolation

- two types of variable interpolation: node attributribes and runtime environment vars
- node attributes: in constraints, task env vars, and certain driver fields
- runtime env vars: not itnerpretable in constraints because they are only defined once the scheduler has place them on a particular node

```sh
# basic shell interpolation

#############
## env vars
#############

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


## network env vars

NOMAD_IP_<label>	# Host IP for the given port label. See here for more information.
NOMAD_PORT_<label>	# Port for the given port label. Driver-specified port when a port map is used, otherwise the host's static or dynamic port allocation. Services should bind to this port. See here for more information.
NOMAD_ADDR_<label>	# Host IP:Port pair for the given port label.
NOMAD_HOST_PORT_<label>	# Port on the host for the port label. See here for more information.

NOMAD_UPSTREAM_IP_<service> #	IP for the given service when defined as a Consul Connect upstream.
NOMAD_UPSTREAM_PORT_<service> #	Port for the given service when defined as a Consul Connect upstream.
NOMAD_UPSTREAM_ADDR_<service>	# Host IP:Port for the given service when defined as a Consul Connect upstream.
NOMAD_ENVOY_ADMIN_ADDR_<service> #	Local address 127.0.0.2:Port for the admin port of the envoy sidecar for the given service when defined as a Consul Connect enabled service. Envoy runs inside the group network namespace unless configured for host networking.
NOMAD_ENVOY_READY_ADDR_<service>	# Local address 127.0.0.1:Port for the ready port of the envoy sidecar for the given service when defined as a Consul Connect enabled service. Envoy runs inside the group network namespace unless configured for host networking.

## consule related env vars

CONSUL_HTTP_ADDR	# Specifies the address to the local Consul agent. Will be automatically set to a unix domain socket in bridge networking mode, or a tcp address in host networking mode.
CONSUL_HTTP_TOKEN	# Specifies the Consul ACL token used to authorize with Consul. Will be automatically set to a generated Connect service identity token specific to the service instance if Consul ACLs are enabled.
CONSUL_HTTP_SSL	# Specifies whether HTTPS should be used when communicating with consul. Will be automatically set to true if Nomad is configured to communicate with Consul using TLS.
CONSUL_HTTP_SSL_VERIFY #	Specifies whether the HTTPS connection with Consul should be mutually verified. Will be automatically set to true if Nomad is configured to verify TLS certificates.
CONSUL_CACERT #	Specifies the path to the CA certificate used for Consul communication. Will be automatically set if Nomad is configured with the consul.share_ssl option.
CONSUL_CLIENT_CERT #	Specifies the path to the Client certificate used for Consul communication. Will be automatically set if Nomad is configured with the consul.share_ssl option.
CONSUL_CLIENT_KEY	# Specifies the path to the CLient Key certificate used for Consul communication. Will be automatically set if Nomad is configured with the consul.share_ssl option.
CONSUL_TLS_SERVER_NAME #	Specifies the server name to use as the SNI host for Consul communication. Will be automatically set if Consul is configured to use TLS and the task is in a group using bridge networking mode.

###########
## node variables
###########

${node.unique.id } #	36 character unique client identifier	9afa5da1-8f39-25a2-48dc-ba31fd7c0023
${node.region} #	Client's region	global
${node.datacenter} # Client's datacenter	dc1
${node.unique.name}	# Client's name	nomad-client-10-1-2-4
${node.class} #	Client's class	linux-64bit
${attr.<property>} #	Property given by property on the client	${attr.cpu.arch} => amd64
${meta.<key>}	# Metadata value given by key on the client	${meta.foo} => bar

## common node attributes
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

## provisioning

- wow made it to the end! you should now have enuff knowledge to deploy and operate a nomad cluster

### general workflow

- new jobs
  - create a job specification
  - plan and review changes with a nomad server
  - submit job file to a nomad server
  - review job status and logs
- exiting jobs
  - modify existing job file
  - plan and review changes with a nomad server
  - submit job file to nomad server
  - review job status and logs

### vault integration

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
