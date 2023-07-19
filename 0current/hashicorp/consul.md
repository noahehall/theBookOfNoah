# Consul

- a service networking platform: service mesh, service discovery, configuration management, and API gateway functionality

## Links

- [docs & tuts](https://developer.hashicorp.com/consul)
- [docker hub](https://hub.docker.com/_/consul/)
- [github](https://github.com/hashicorp/consul)
- [docs landing](https://developer.hashicorp.com/consul/docs)
- [what is consul](https://developer.hashicorp.com/consul/docs/intro)
- [install](https://developer.hashicorp.com/consul/docs/install)
- interwebs
  - [haproxy adverturial with comparisons with other proxies](https://www.haproxy.com/blog/haproxyconf-2022-recap/)
- tuts
  - [consul in dev](https://developer.hashicorp.com/consul/tutorials/day-0)
  - [bunch of hashicorp copypasta](https://github.com/hashicorp-education)
  - [consul scripts](https://github.com/hashicorp-education/learn-consul-get-started-vms)
  - [getting started](https://developer.hashicorp.com/consul/tutorials/get-started-vms)
  - [day 2](https://developer.hashicorp.com/consul/tutorials/datacenter-operations)
- architecture
  - [service mesh proxy overview](https://developer.hashicorp.com/consul/docs/connect/proxies)
  - [consul architecture guide](https://developer.hashicorp.com/consul/docs/architecture)
  - [reference architecture tutorial](https://developer.hashicorp.com/consul/tutorials/production-deploy/reference-architecture)
  - [gossip protocol](https://developer.hashicorp.com/consul/docs/architecture/gossip)
  - [consensus protocol](https://developer.hashicorp.com/consul/docs/architecture/consensus)
  - [outage recovery](https://developer.hashicorp.com/consul/tutorials/datacenter-operations/recovery-outage)
  - [dns comparison](https://developer.hashicorp.com/consul/docs/consul-vs-other/dns-tools-compare)
  - [consul vocabulary](https://developer.hashicorp.com/consul/docs/install/glossary)
- integrations
  - [list of consul tools](https://developer.hashicorp.com/consul/docs/integrate/download-tools)
  - [ns1](https://help.ns1.com/hc/en-us/articles/360039417093-NS1-Consul-Integration-Overview)
  - [dnsimple](https://blog.dnsimple.com/2022/05/consul-integration/)
  - [coredns integration for k8s](https://github.com/hashicorp/consul/issues/5108)
- nomad
  - [nomad integration](https://developer.hashicorp.com/nomad/docs/integrations/consul-integration#service-discovery)
- vault
  - [vault as secrets backend](https://developer.hashicorp.com/consul/docs/k8s/deployment-configurations/vault)
  - [generate mtls for consul with vault](https://developer.hashicorp.com/consul/tutorials/vault-secure/vault-pki-consul-secure-tls)
- docker
  - [docker-entrypoint.sh](https://github.com/hashicorp/docker-consul/blob/master/0.X/docker-entrypoint.sh)
  - [github for docker-consul](https://github.com/hashicorp/docker-consul)
  - [docker-consul main](https://github.com/hashicorp/docker-consul/blob/master/0.X/Dockerfile)
  - [dockerfile main](https://github.com/hashicorp/consul/blob/main/Dockerfile)
  - [consul + docker tuts](https://developer.hashicorp.com/consul/tutorials/docker)
  - [consul in containers](https://developer.hashicorp.com/consul/tutorials/day-0/docker-container-agents)
  - [deployment guide (do last)](https://developer.hashicorp.com/consul/tutorials/production-deploy/deployment-guide)
- ui
  - [ui visualization](https://developer.hashicorp.com/consul/docs/connect/observability/ui-visualization)
  - [ui agent configuration](https://developer.hashicorp.com/consul/docs/agent/config/config-files#ui-parameters)
- tls
  - [security tuts](https://developer.hashicorp.com/consul/tutorials/security)
  - [start @ cfssl and thank me later](https://github.com/cloudflare/cfssl/wiki/Creating-a-new-CSR)
  - [tls agent configuration](https://developer.hashicorp.com/consul/docs/agent/config/config-files#tls-configuration-reference)
  - [securing consul agents](https://developer.hashicorp.com/consul/tutorials/security-operations/tls-encryption-openssl-secure)
  - [tls example config](https://developer.hashicorp.com/consul/docs/agent/config/config-files#example-configuration-file-with-tls)
  - [troubleshooting ACLs](https://developer.hashicorp.com/consul/tutorials/security/access-control-troubleshoot?in=consul%2Fsecurity)
  - [common errors](https://developer.hashicorp.com/consul/docs/troubleshoot/common-errors)
  - [failed to decrypt the message err](https://discuss.hashicorp.com/t/failed-to-join-no-installed-keys-could-decrypt-the-message/33324)
- agent
  - [agent config reference](https://developer.hashicorp.com/consul/docs/agent/config/config-files)
  - [cloud autojoin](https://developer.hashicorp.com/consul/docs/install/cloud-auto-join)
  - [server performance](https://developer.hashicorp.com/consul/docs/install/performance)
- healthchecks
  - [ensuring health services](https://developer.hashicorp.com/consul/tutorials/developer-discovery/service-registration-health-checks)
  - [health checks](https://developer.hashicorp.com/consul/docs/discovery/checks)
- deployments
  - [canary deployments](https://developer.hashicorp.com/consul/tutorials/get-started-hcp/hcp-gs-canary-deployments)
- service discovery: read this but prefer to implement service mesh
  - [func-e to install binary](https://func-e.io/)
  - [func-e linux platforms](https://github.com/tetratelabs/func-e/releases)
  - [tutorial](https://developer.hashicorp.com/consul/tutorials/get-started-vms/virtual-machine-gs-service-discovery)
  - [service discovery](https://developer.hashicorp.com/consul/docs/discovery/services)
- dns
  - [query services with dns](https://developer.hashicorp.com/consul/docs/discovery/dns)
  - [dns queries](https://developer.hashicorp.com/consul/docs/discovery/dns)
- service mesh
  - [plz read this first: install envoy on the agent](https://developer.hashicorp.com/consul/tutorials/developer-mesh/service-mesh-with-envoy-proxy?utm_source=docs)]
  - [read this first](https://developer.hashicorp.com/consul/docs/connect/registration/sidecar-service)
  - [then read this](https://developer.hashicorp.com/consul/docs/connect/proxies/envoy)
  - [consul connect envoy](https://developer.hashicorp.com/consul/commands/connect/envoy)
  - [consul service mesh](https://developer.hashicorp.com/consul/docs/consul-vs-other/service-mesh-compare)
  - [consul conect with custom proxies](https://developer.hashicorp.com/consul/docs/connect/proxies/integrate)
  - [required ports](https://developer.hashicorp.com/consul/docs/install/ports)
  - [mesh configuration](https://developer.hashicorp.com/consul/docs/connect/configuration)
  - [migrating from discovery to connect](https://developer.hashicorp.com/consul/tutorials/get-started-vms/virtual-machine-gs-service-mesh)
  - [intentions](https://developer.hashicorp.com/consul/docs/connect/intentions)
  - [intentions schema](https://developer.hashicorp.com/consul/docs/connect/config-entries/service-intentions)
  - [intentions http api](https://developer.hashicorp.com/consul/api-docs/connect/intentions)
  - [ingress gateway](https://developer.hashicorp.com/consul/tutorials/developer-mesh/service-mesh-ingress-gateways)
- haproxy
  - [haproxy + consul for dns](https://www.haproxy.com/blog/haproxy-and-consul-with-dns-for-service-discovery/)
- api gateway
  - [intro](https://developer.hashicorp.com/consul/docs/api-gateway)
- tokens
  - [acl tokens](https://developer.hashicorp.com/consul/docs/security/acl/acl-tokens)
- cli
  - [docs](https://developer.hashicorp.com/consul/commands)
  - [agent cli](https://developer.hashicorp.com/consul/docs/agent/config/cli-flags)
  - [tls ca create](https://developer.hashicorp.com/consul/commands/tls/ca)
  - [tls for agents](https://developer.hashicorp.com/consul/tutorials/security/tls-encryption-secure)
  - [acl cli](https://developer.hashicorp.com/consul/commands/acl)
- http
  - [agent api](https://developer.hashicorp.com/consul/api-docs/agent/service)
- provision
  - [deploy consul server](https://developer.hashicorp.com/consul/tutorials/get-started-vms/virtual-machine-gs-deploy)

## best practices / gotchas

- tokens do not expire (unless -expires-ttl=<duration>), it is up to the operator to delete tokens that are not in use.

## basics

- consul maintains a central registry to track services and their respective ips; a distributed system than runs on clusters of nodes
- each host in a consul cluster runs the consul agent in server mode
- each service runs the consul agent in client mode (a proxy that knows how to communicate with the consul server) and registers with the consul server
- configuration: consul provides a kv store for service configuration
- connect: each services proxy sidecar gets a TLS cert for identification, enables management of service-to-service comms at a logical level vs IP addrs
- service graph: after services are identified, the service graph provides logical rules specifying communication rules

### install

```sh
# @see https://developer.hashicorp.com/consul/tutorials/production-deploy/deployment-guide#install-consul
consul -autocomplete-install
complete -C /usr/bin/consul consul

```

### terms

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
- mTLS: mutual transport layer security
- service mesh: connect and managet service-to-service communication
- north-south traffic: refers to the flow of data into and out of a specific env
- east-west traffic: refers to inter-env traffic, or federated service-mesh traffic (across datacenters)
- service catalog: single source of truth for available services in the service registry
- client-side discovery: consumers are responsible for determining the access information of service instances and load balancing requests between them: query catelog > select a service > make request to service
- server-side discovery: consumers use an intermediary to query the catalog and make requests: query consul > consul queries the catelog > consul load balances requests to service instances
  - dont be fooled: consul + something like haproxy (it uses envoy) is still the best in class architecture

### locations

- `/consul/data` for persisted state when not in dev mode
  - client agents: information about the cluster and the client's health checks in case the container is restarted
  - server agents: client information + snapshots and data related to the consensus and other state like consul's key/value store and catalog
    - if this is bind mounted then ownership will be changed to the consul user when the container starts
- `/consul/config` agent config files

### docker (official img)

- generally should be run with `net=host`
- uses dumb-init for pid1 and gosu to stepdown from root
- by default starts in development mode
- cluster address: ip where other consul agents may content other consul agents
- client address: ip for host processes to query consul

#### vars

- Environment variables cannot be used to configure the Consul client. They can be used when running other consul CLI commands that connect with a running agent

```sh
# alternative configs can be added by passing the configuration JSON via environment variable
CONSUL_LOCAL_CONFIG=

# statically set consuls cluster & client address
-bind=<external ip>
-client=<interface ip>

# dynamically set consuls cluster & client address
CONSUL_CLIENT_INTERFACE=<network interface id>
CONSUL_BIND_INTERFACE=<network interface id>
```

#### examples

```sh

# dev mode: in-memory server agent + default bridge networking
# no services exposed on the host
docker run -d --name=dev-consul -e CONSUL_BIND_INTERFACE=eth0 consul

# add another server to an existing consul cluster
docker run -d -e CONSUL_BIND_INTERFACE=eth0 consul agent -dev -join=172.17.0.2

# add an agent to an existing consul cluster
docker run -d --net=host -e 'CONSUL_LOCAL_CONFIG={"leave_on_terminate": true}' consul agent -bind=<external ip> -retry-join=<root agent ip>

# expose consul to containers on a bridge network
# the cluster address still requires the host network
docker run -d --net=host consul agent -bind=<external ip> -client=<bridge ip> -retry-join=<root agent ip>

# start consul server
$ docker run -d --net=host -e 'CONSUL_LOCAL_CONFIG={"skip_leave_on_interrupt": true}' consul agent -server -bind=<external ip> -retry-join=<root agent ip> -bootstrap-expect=<number of server agents>

# expose consul dns on port 53 instead of 8600
# you also need to update /etc/resolv.conf to use 127.0.0.1 as the primary dns server
## or configure consul to listen on a non-localhost address
## reachable from within other containers
$ docker run -d --net=host -e 'CONSUL_ALLOW_PRIVILEGED_PORTS=' consul -dns-port=53 -recursor=8.8.8.8

## ^ add -bind=<bridge ip> to join a bridge network
### containers on that network should use the -dns option pointed at consul
$ docker run -i --dns=<bridge ip> -t ubuntu sh -c "apt-get update && apt-get install -y dnsutils && dig consul.service.consul"

```

### service mesh

- specializes in the network management of services and inter-service communication
  - as apposed to an api gateway's primary concern of client request-response cycle
- enables zero trust via authnz at the network level, securing service-to-service comms via PKI certs
  - requires sidecar proxy (envoy by default)
  - requires creation of service intentions

#### intentions

- allow/deny comms between services: when multiple rules exist, only 1 will be used
- destination oriented: create intentions for the destination then define which services can access it
  - i.e. destionation X needs to be reached by Y
- identity based: L4 intentions: identities authn and comms authz by metadata in agent TLS certs;
- application based: L7 intentions: authnz enforced by L7 request attributes in addition to tls identity

#### control plane

- centralized registry to track (ips/hostnames) as services start, scale in/out and die
- also includes basic DNS functionality: lookups, alternate domains & access controls
- services are registered based on identity instead of ip & port
- consumers use dns queries to retrieve the ip & hostnames for registered identities
- responsibilities
  - securing the mesh, service discovery, health checking, policy enforcement, etc

#### data plane

- network layer for s-to-s comms & service discovery
- uses envoy as service sidecar proxy
- automatically gnerates an SSL cert for each service and its instances to encrypt comms over tcp/upd/grpc
- fine-grained service level (not ip-based) authz policies

### UI

- available @ 8500

## integrations

### haproxy + consul dns

- components
  - consul: service registry & monitoring;
    - kv store for for haproxy conf fragments
  - envoy: east-west proxy: service-to-service authnz
  - haproxy: north-south proxy: tcp edge & rev proxy load balancer from outside in
    - uses dns to query consul and dynamically scaling backend servers
  - consul template: reloading haproxy & generating haproxy conf
- domain translations
  - haproxy > consul
  - backend > service
  - backend server > service node

### Consul-Terraform-Sync

- automates updates to network infrastructure based on scale in/out of each service
- trigger tf plan & apply to reflect latest changes

### vault integration

- use vaults PKI engine to generate & store TLS certs on both the data and control plane

### nomad integration

### NS1

### DNSimple

### k8s api gateway

- add-on for controlling access to services running with a consuls service mesh
  - authn at point of entry and provide clients with TLS certs
  - load balance requests across services

## flow

- register: add services to the consul registry; the runtime source of truth for all services and theri addresses
- query: find healthy services registered with consul; services access eachother through their local proxy according to identity-baed policies
- secure: consul manages authnz for service-to-service communication

## discovery

- you can have service discovery without enabling consul connect
- discovery vs mesh
  - discovery is manual: each client machine needs to have their own acls, tokens, etc on the machine, including the consul client
  - connect: service registration is handled by the server, which auto provisions tls certs, each client machine is expected to have consul client + envoy proxy

## connect (service mesh product name)

- uses envoy as the sidecar proxy attached to every service
- manages service-to-service authnz, comms, and msg encryption
- enables traffric management to support canary testing, a/b tests, and blue/green deployments
- is enabled by default when running in dev mode
- to enable in non dev mode
  - add `connect { enabled = true }` to the server, no change is required for clients

## consul agent

- consul agent: a long running daemon that can be started in client/server mode

### server agents

### client agents

## cli

```sh
# get all agents
consul members

# get cluster status
curl http://localhost:8500/v1/health/service/consul?pretty
```
