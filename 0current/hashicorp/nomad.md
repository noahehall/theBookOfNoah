# nomad

## links

- [nomad homagepage](https://www.nomadproject.io)
- [server-force-leave command](https://www.nomadproject.io/docs/commands/server-force-leave.html)
- [nomad ui web interface](https://developer.hashicorp.com/nomad/tutorials/get-started/get-started-ui)
- tuts
  - [all tuts](https://developer.hashicorp.com/nomad/tutorials)
  - [variable interpolation](https://developer.hashicorp.com/nomad/docs/runtime/interpolation)
- drivers/integrations
  - [consul](https://developer.hashicorp.com/nomad/docs/integrations/consul-integration)
  - [docker](https://developer.hashicorp.com/nomad/docs/drivers/docker)
  - [fork/exec](https://developer.hashicorp.com/nomad/docs/drivers/raw_exec)
- provisioning
  - [hashicorp nomad on aws](https://aws.amazon.com/quickstart/architecture/nomad/)
  - [provision nomad clusters in the cloud](https://github.com/hashicorp/nomad/tree/main/terraform)
  - [deploy & manage nomad jobs](https://developer.hashicorp.com/nomad/tutorials/manage-jobs)
  - [operating nomad clusters](https://developer.hashicorp.com/nomad/tutorials/manage-clusters)
  - [monitoring logs](https://developer.hashicorp.com/nomad/docs/commands/monitor)
  - [secure nomad with access control](https://developer.hashicorp.com/nomad/tutorials/access-control)
- agents
  - [status](https://developer.hashicorp.com/nomad/docs/commands/status)
- jobs
  - [job init](https://developer.hashicorp.com/nomad/docs/commands/job/init)
  - [jobspec](https://developer.hashicorp.com/nomad/docs/job-specification)
  - [run](https://developer.hashicorp.com/nomad/docs/commands/job/run)
  - [stop](https://developer.hashicorp.com/nomad/docs/commands/job/stop)
- tasks
  - [status](https://developer.hashicorp.com/nomad/docs/commands/alloc/status)
  - [logs](https://developer.hashicorp.com/nomad/docs/commands/alloc/logs)
  - [configuring tasks](https://developer.hashicorp.com/nomad/tutorials/manage-jobs/jobs-configuring)

## terms

- agent: processing running on a server in server/client mode
- dev agent: runs in server & client mode and does not persist state to disk, useful for experiments and development only
- server: agent running in server mode
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

## components

### UI

- by default runs on http://localhost:4646

#### jobs

- lists all jobs, click to see status (like `nomad job status`)

#### servers

- view of all server agents

##### monitor

- nomad application logs with option to set the log level

#### clients

- view of all client agents

#### topology

- view of the cluster and running workload, useful for complex nomad environments

### agents

- long running (but lightweight) process that must run on every machine in the cluster
- registers the host machine with (cluster) server agents
- performs heart-beating
- runs tasks assigned to them

### jobs

### schedular

### variables

#### interpolation

- two types of variable interpolation: node attributribes and runtime environment vars
- node attributes: in constraints, task env vars, and certain driver fields
- runtime env vars: not itnerpretable in constraints because they are only defined once the scheduler has place them on a particular node

```sh
# basic shell interpolation via ${poop}

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
