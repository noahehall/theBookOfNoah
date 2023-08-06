# Web Application Firewall (WAF)

- protect web applications from common exploits and malicious web traffic
- configure rules that allow, block, or monitor (count) web requests based on conditions that you define. These conditions include IP addresses, HTTP headers, HTTP body, uniform resource identifier (URI) strings, structured query language (SQL) injection, and cross-site scripting.

## my thoughts

## links

- [landing page](https://aws.amazon.com/waf/?did=ap_card&trk=ap_card)
- [intro](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works.html)
- [mitigate OWASPs 10 web app vulnerabilities](https://docs.aws.amazon.com/whitepapers/latest/guidelines-for-implementing-aws-waf/guidelines-for-implementing-aws-waf.html)
- [guildelines for implementing WAF pdf](https://d1.awsstatic.com/whitepapers/guidelines-implementing-aws-waf.pdf?did=wp_card&trk=wp_card)

## best practices

### anti patterns

## features

- manage multiple WAF deployments with Firewall Manager
- use WAF as a frontdoor to cloudfront, ELB Application Load Balancer, api gateway and appsync
- build policy rules using visual rule builder or json code
- block and filter common vulnerabilities and exploits like SQLi, XSS, IP filtering, or request patterns
- integrate with cloudwatch to monitor incoming traffic
- integrate with kinesis data firehose to tune rules based on request detail metrics and log data

### pricing

- WAF charges
  - number of web ACLS
  - number of rules per web ACL
  - number of inbound requests
- BOT control charges: opt in feature
  - depends on subscription type: common vs targeted
  - then by service: request, captcha and challenge
- Fraud control charges: opt in feature
  - tiered rates by total requests: first 10k, up to 2m, next 3m, next 10m and over 30m

## terms

## basics

- front CDNs and application load balancers

### osi model

- manages layer 4 and layer 7, but works at layer 7
  - filters traffic based on ip addrs, transport protcols and ports
  - network security controls at the application layer
    - application protocol detection
    - filtering based on application protocol properties e.g. http headers/TLS version
    - filtering and monitoring http/s traffic
- can integrate with security groups (layer 4) and NACLs (layer 3) for controlling network traffic

### rules

- can filter (block/allow)
  - ip addrs/ranges
  - patterns in http headers & body
  - url string patterns
  - sql injection
  - cross-site scripting
- configurations can be logically combined
  - filters ANDed to form conditions
  - conditions ANDed to form rules
  - rules ORed to form web ACLs
  - web ACLs attached to cloudfront or applicatoin load balancer endpoints
- rules execute at specific layers
  - cloudfront: edge locations
  - ALBs: in the region of the ALB

#### rule types

- regular: checking for specific conditions and either allow/deny
- rate-based: allow traffic if its below a certain rate calculated over a 5 minute window

## considerations

## integrations

### cloudfront

- not only can it protect cdn edge locations, but can also be used to create events and trigger alarms

### elastic load balancer (ALB)

- application load balancer endpoints

### Api Gateway

- should be able to apply it to gateay too?
