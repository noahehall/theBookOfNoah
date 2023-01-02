# Consul

- service networking solution that enables you to manage secure network connectivity between services and across on-prem and multi-cloud environments and runtimes
- offers service discovery, service mesh, traffic management, and automated updates to network infrastructure device

## Links

- [docs & tuts](https://developer.hashicorp.com/consul)
- [docker hub](https://hub.docker.com/_/consul/)
- [github for docker-consul](https://github.com/hashicorp/docker-consul)
- [the dockerfile](https://github.com/hashicorp/docker-consul/blob/master/0.X/Dockerfile)
- [github](https://github.com/hashicorp/consul)
- [consul vocabulary](https://developer.hashicorp.com/consul/docs/install/glossary)
- [docs landing](https://developer.hashicorp.com/consul/docs)
- tuts
  - [getting started](https://developer.hashicorp.com/consul/tutorials/get-started-vms)
  - [deploy consul server](https://developer.hashicorp.com/consul/tutorials/get-started-vms/virtual-machine-gs-deploy)
  - [day 2](https://developer.hashicorp.com/consul/tutorials/datacenter-operations)
- architecture
  - [service mesh proxy overview](https://developer.hashicorp.com/consul/docs/connect/proxies)
  - [consul architecture guide](https://developer.hashicorp.com/consul/docs/architecture)
  - [reference architecture tutorial](https://developer.hashicorp.com/consul/tutorials/production-deploy/reference-architecture)
  - [gossip protocol](https://developer.hashicorp.com/consul/docs/architecture/gossip)
  - [consensus protocol](https://developer.hashicorp.com/consul/docs/architecture/consensus)
- integrations
  - [list of consul tools](https://developer.hashicorp.com/consul/docs/integrate/download-tools)
- server
- agent
  - [agent config reference](https://developer.hashicorp.com/consul/docs/agent/config/config-files)
- registration
  - [register services](https://developer.hashicorp.com/consul/docs/discovery/services)
  - [health checks](https://developer.hashicorp.com/consul/docs/discovery/checks)
- provision

## vocab

- consul agent: a long running daemon that can be started in client/server mode
- consult cluster:
- consul client agents:
  - participate in a gossip protocol to discover other agents and check them for failures
  - forward queries about the cluster to the server agents
- consul server agents:
  - participate ina consensus protocol
  - maintain a centralized view of the cluster's state
  - respond to queries from other agents in the cluster
  - at least one required in a consul cluster, and usually 3 - 5 for high availability
- control plane: enables you to register, query and secure services deployed across a network
- data plane: processes data requests

## basics

- consul maintains a central registry to track services and their respective ips; a distributed system than runs on clusters of nodes
- each host in a consul cluster runs the consul agent
- Services: register with their local host consul agents

### locations

- `/consul/data` for persisted state when not in dev mode
  - client agents: information about the cluster and the client's health checks in case the container is restarted
  - server agents: client information + snapshots and data related to the consensus and other state like consul's key/value store and catalog
    - if this is bind mounted then ownership will be changed to the consul user when the container starts
- `/consul/config` agent config files
  - alternative configs can be added by passing the configuration JSON via environment variable `CONSUL_LOCAL_CONFIG`

### docker

- consul should always be run with `--net=host` in docker because consul's consensus and gossip protocols are sensitive to delays and packet loss
  - cluster address: is the host IP address
    - aka `bind=EXTERNAL_IP`
  - client address: is the consul agent IP address for host processes to make HTTP/DNS queries

### flow

- register: add services to the consul registry; the runtime source of truth for all services and theri addresses
- query: find healthy services registered with consul; services access eachother through their local proxy according to identity-baed policies
- secure: consul manages authnz for service-to-service communication

## server agents

## client agents

## variables

- cluster address (ip): the address
  - aka ``
  - set `` env var to a interface name and

```sh
# consul will automatically st the client ip address where other processes on the host contact consul in order to make HTTP/DNS requests
CONSUL_CLIENT_INTERFACE=eth0

# consul will automatically set the bind address at which other consul agents may contact a given agent
CONSUL_BIND_INTERFACE=eth0?

# address at which other consul agents may contact a given agent
bind=external.ip.addr
```
