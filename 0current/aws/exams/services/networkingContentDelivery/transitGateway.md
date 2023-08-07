# Transit Gateway

- connect to multiple VPCs, Direct Connect, VPNs and Software-Defined Wide Area Network (SD-WAN) appliances

## my thoughts

## links

- [landing page](https://aws.amazon.com/transit-gateway/?did=ap_card&trk=ap_card)
- [network manager](https://aws.amazon.com/transit-gateway/network-manager/)

## best practices

### anti patterns

## features

- monitor and manage virtual private clouds and edge connections
- better security with inter-region peering encryption on the aws global private network
- connection applications across VPCs without having to manage peering connections/updating route tables
- share VPCs, DNS, active directory, IPS/IDS across regions with inter-region peering
- host multicast applications without custom hardware

### pricing

- VPC owner
  - each hour their VPC is attached to a transit gateway
- Transit Gateway owner is billed hourly: VPN, Peering Attachments, and Transit GAteway Connect Attachments (Sd-WAN appliances)
  - total connections per hour .05
  - per GB of data .02
- AWS Direct Connect attachments: Direct Connect Gateway owner is billed hourly

## basics

- create 1:M peering connections between VPCs, accounts, DirectConnect and on premise networks in a centralized gateway hub
- inter-Region peering connects AWS Transit Gateways together using the AWS global network
  - automatic encryption for your data that never traverses the public internet.

### OSI Model

- operates at layer 3
  - packets are sent to a specific next-hop attachments, based on their destinate ip addrs

### Network Manager

- dashboard for the entire network
- enables connecting to Software-Defined Wide Area Network (SD-WAN) devices.

## considerations

## integrations
