# nomad

## links

- [nomad homagepage](https://www.nomadproject.io)
- [server-force-leave command](https://www.nomadproject.io/docs/commands/server-force-leave.html)
- cmds
  - [job init](https://developer.hashicorp.com/nomad/docs/commands/job/init)

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

### agents

- long running (but lightweight) process that must run on every machine in the cluster
- registers the host machine with (cluster) server agents
- performs heart-beating
- runs tasks assigned to them

### jobs

### schedular

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
