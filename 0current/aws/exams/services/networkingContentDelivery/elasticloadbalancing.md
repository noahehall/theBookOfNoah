# elastic load balancing ELB

- distribute network traffic across EC2, containers, ip address and lambda functions
- its in the ec2 console

## my thoughts

## links

- [landing page](https://aws.amazon.com/elasticloadbalancing/?did=ap_card&trk=ap_card)
- [user guide](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html)
- [sticky sessions](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html)
- [elb type comparisons](https://aws.amazon.com/elasticloadbalancing/features/#Product_comparisons)
- [alb: authnz](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html)
- [glb: intro](https://aws.amazon.com/blogs/aws/introducing-aws-gateway-load-balancer-easy-deployment-scalability-and-high-availability-for-partner-appliances/)

## best practices

- ELB basic comparison: check the comparison link for indepth
  - ALB: layer 7; ip, instance and lambdas
    - preverse source ip addr
    - fixed response
    - user authnz
  - NLB: layer 4; ip, instance and ALBs
    - preserve source ip addr
    - static ip and elastic ip addr
  - GLB: ip and instances
    - preserve source ip addr

### anti patterns

## features

- secure apps with integrated certificate management, authnz and ssl/tls decryption
- monitor health and perf metrics in real time
- highly available and automatically scalable frontdoor: its not a single point of failure

### pricing

- charged by the hour based on load balancer capacity units

## terms

## basics

- its a regional service, AWS manages provisioning and scaling across regions to meet demand

### OSI Model

- manages layer 4 and layer 7, but works at layer 7
  - layer 4: network load balancer; does not understand/read the network packets
  - layer 7: application load balancer; inspects packets, has access to http/s headers, and can intelligently load balance traffic

### listeners

- clientside mechnism
- checks for requests on a specific port and protocol
- when multiple listeners exist, they are checked in priority order

### target groups

- server side mechanism
- health checks
  - healthy threshold: consecutive successful health checks before considering an unhealthy target to be healthy
  - unhealthy threshold: consecutive unhealhthy health checks before considering a healthy target to be unhealthy
  - timeout: amount of time to wait to receive a response before determining a health check has failed
  - interval: amount of time between health checks
  - success codes: generally something like 200, or 200-299
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
  - sticky sessions with http cookies to send subsueqent requests to the save backend target
- schemes
  - internet facing: routes public requests
  - internal: routes private ip requests to targets with private ips
- target types: ip, instance, lambda

### network load balancer

- layer 4 tcp/udp/tls
  - enable access to resources within a private vpc
- features
  - tcp & UDP connections
  - source IP preservation
  - low latency
  - sticky sessions
  - automatically receives a static IP addr per availability zone subnet
  - can assign a custom fixed elastic ip addr per availability zone subnet
  - dns failover via route 53 to direct traffic to load balancer nodes in other zones

### gateway laod balancer

- layer 3 gateway and layer 4 loadbalancer
  - deploy scale and manage thirdparty appliances like firewalls, intrusion detection adn prevension systems, and deep packet inspection systems
- features
  - high availabilty routing to backends via health checks
  - gateway load balancer endpoints
  - integrated with cloudwatch metrics for monitoring
  - deploy new appliances by selecting them from the aws marketplace
  - private connectivity to itnernet gateways, VPCs and other resources over a private network
- mainly used to load balance requests to third party applications

## considerations

- scheme: either internet-facing oor internal
- ip addr type: ipv4 or dualstack (ip4+6)
- networking mapping: vpc, AZs and subnets
- security groups: see securitygroups file
- target group: depends on the type of target group youve selected

## integrations

### EKS

- ALB: managed by Ingress objects
  - used with pods that are deployed to nodes or fargate
- NLB: managed by LoadBalancer services
  - used with pods deployed to EC2 IP and instance targets or farget IP targets
