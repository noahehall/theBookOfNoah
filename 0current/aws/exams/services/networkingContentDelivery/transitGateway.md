# Transit Gateway

- connect to multiple VPCs, Direct Connect, VPNs and Software-Defined Wide Area Network (SD-WAN) appliances

## my thoughts

## links

- [landing page](https://aws.amazon.com/transit-gateway/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- monitor and manage virtual private clouds and edge connections
- better security with inter-region peering encryption on the aws global private network
- connection applications across VPCs without having to manage peering connections/updating route tables
- share VPCs, DNS, active directory, IPS/IDS across regions with inter-region peering
- host multicast applications without custom hardware

### pricing

- transit gateway owner:
  - total connections per hour .05
  - per GB of data .02
- VPC owner
  - each hour their VPC is attached to a transit gateway
- read the pricing page, shiz is a microtransition

## basics

- acts as a regional virtual router for traffic flowing between a VPC and on premise networks

### OSI Model

- operates at layer 3
  - packets are sent to a specific next-hop attachments, based on their destinate ip addrs

## considerations

## integrations
