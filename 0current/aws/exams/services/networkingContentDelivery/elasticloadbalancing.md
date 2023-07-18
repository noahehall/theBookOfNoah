# elastic load balancing ELB

- distribute network traffic across EC@, containers, ip address and lambda functions
- its in the ec2 console

## my thoughts

## links

- [landing page](https://aws.amazon.com/elasticloadbalancing/?did=ap_card&trk=ap_card)
- [user guide](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html)
- [sticky sessions](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html)

## best practices

### anti patterns

## features

- secure apps with integrated certificate management, authnz and ssl/tls decryption
- monitor health and perf metrics in real time
- highly available and automatically scalable frontdoor: its not a single point of failure

### pricing

## terms

## basics

- its a regional service, AWS manages provisioning and scaling across regions to meet demand

### listeners

- clientside mechnism
- checks for requests on a specific port and protocol
- when multiple listeners exist, they are checked in priority order

### target groups

- server side mechanism
- the type of backend your directing traffic to, e.g. lambdas, ip addrs, ec2 intance, other load balancers, etc
  - each specific backend resource within a target group requires a health check

### rules

- defines how requests are routed to targets in a target group
- requires two conditions
  - source IP: when the source ip matches, the listener will handle the request
  - target group: where to matched requets

### application load balancer

- layer 7 http/s/grpc
- features
  - route traffic based on request data
  - send fixed responses directly to the client
  - TLS offloading/termination
  - user authnz: uses OpenID Connect (OIDC) and supports SAML, LDAP, microsoft active directory, etc
  - rich metrics and logging
  - supports sticky sessions to send subsueqent requests to the save backend target
- schemes
  - internet facing: routes public requests
  - internal: routes private ip requests to targets with private ips

### network load balancer

- layer 4 tcp/udp/tls
- features
  - tcp & UDP connections
  - source IP preservation
  - low latency
- enable access to resources within a private vpc

### gateway laod balancer

- layer 3+4 ip
- features
  - health checks
  - gateway load balancer endpoints
  - higher availability for third-party virtual appliances
- mainly used to load balance requests to third party applications

## considerations

- scheme: either internet-facing oor internal
- ip addr type: ipv4 or dualstack (ip4+6)
- networking mapping: vpc, AZs and subnets
- security groups: see securitygroups file
- target group: depends on the type of target group youve selected

## integrations

- since ELB is fronting your resources, you'll generally want them in private subnets
