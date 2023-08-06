# route53

- DNS for AWS

## my thoughts

## links

- [landing page](https://aws.amazon.com/route53/?did%253Dap_card%2526trk%253Dap_card)

## best practices

### anti patterns

## features

- route end users with globally-dispered DNS servers and automatic scaling
- dns routing with domain name registration and visual traffic flow tools
- customizable dns routing policies to reduce latency, improve application avialability and maintain compliance

### pricing

- monthly charge for each hosted zone
  - .50 / month for the first 25
  - .10 / month for each additional
- cost per dns query answered by route53
  - these requests are free: alias A mapped to elastic load balancing instances, cloudfront distros, beanstalk, api gateway, vpc endpoints, s3 buckets
- managed domain names: charged annually
- there are too many costs to list, check the costs tab on the landing page

## basics

### OSI Model

- operates at layer 7: an application built on top of the TCP/IP stack toconvert hostnames to an ip addr
  - transports to query DNS servers for name resolution using TCP/UDP
  - it sends back the correct ip addr
  - uses the TCP/IP stack to pass the destination IP addr found by DNS to the transport layer > network layer > and so forth

## considerations

## integrations

### ecs

- autonaming
  - manually create a namespace in a hosted zone
    - then ECS should handle the rest automagically
      - CNAMEW record per service autoname
      - A records per task IP
      - SRV records per task IP + port
