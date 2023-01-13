# envoy

- L7 proxy and communication bus: designed for large modern service oriented architectures.
  - self contained process that is designed to run alongside every application server
- L7 filter: HTTP filters can be plugged into the HTTP connection management subsystem that perform different tasks such as buffering, rate limiting, routing/forwarding, sniffing Amazon’s DynamoDB, etc.
- HTTP L7 routing: routing subsystem that is capable of routing and redirecting requests based on path, authority, content type, runtime values, etc
  - useful when using Envoy as a front/edge proxy but is also leveraged when building a service to service mesh
- First class HTTP/2: operate as a transparent HTTP/1.1 to HTTP/2 proxy in both directions; any combination of HTTP/1.1 and HTTP/2 clients and target servers can be bridged
- HTTP/3: upports HTTP/3 upstream and downstream, and translating between any combination of HTTP/1.1, HTTP/2 and HTTP/3 in either direction
- L3/L4 network proxy: pluggable filter chain mechanism allows filters to be written to perform different TCP/UDP proxy tasks and inserted into the main server
- gRPC: uses HTTP/2 or above as the underlying multiplexed transport.
- Service discovery and dynamic configuration
- Health checking
- Advanced load balancing
- Front/edge proxy support
- Best in class observability: statsd by default

## links

- [getting started](https://www.envoyproxy.io/docs/envoy/latest/start/start)
- [installing envoy](https://www.envoyproxy.io/docs/envoy/latest/start/install)
- [envoy dockerfile](https://github.com/envoyproxy/envoy/blob/main/ci/Dockerfile-envoy)

## best practices/gotchas

- run a single envoy per machine, regardless of the number of configured listeners

## terms

- host: any entity capable of network communication; a machine can have multiple hosts
- downstream: connects to envoy sends requests and receives responses
- upstream: receives connections and requests from envoy and returns responses
- listener: named network location (e.g. port, socket, etc) that can be connected to by downstream clients
- cluster: group of logically similar hosts that envoy connects to
- mesh: group of hosts that coorde a consistent network topology
- envoy mesh:group of envoy proxies that form a message passing substrate for a distributed system
- runtime configuration: out of band realtime conf system deployed alongside envoy

## tcp listeners

- composed of filter chains, composed of one/more L3/L4 filters
- a filter selected based on its match criteria
- filters: different arch than udp listener filters but same purpose

## udp listeners

- filters: instantianted once per worker and global to that worker

## listener filters

- process connections before network level filters for manipulating the connection metadata and subsequent processing
