# PrivateLInk

- private connectivity between Amazon VPCs, AWS services, and onpremise networks without traversing the public net

## my thoughts

## links

- [landing page](https://aws.amazon.com/privatelink/?did=ap_card&trk=ap_card)
- [accessing services through privatelink](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Introduction.html#what-is-privatelink)
- [cloudformation: setting up vpc endpoints](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-vpce-bucketnames.html)

## best practices

- cheaper for aws to aws (east west) traffic compared to going over the public internet
- best practice to always use privatelink when possible for improved VPC security posture

### anti patterns

- alternatives
  - Make the application public, but then you are using the internet.
  - set up VPC peering, but that may be more management overhead than necessary
    - VPC Peering connections are only a one-to-one connection.

## features

- secure traffic via private IP addresses
- simplified network & firewall management rules
- HIPAA, EU-US privacy shield, PCI and other governmental compliancy regulations
- deliver SaaS services via prebuilt third-party integrations
- connect services across different accounts and Amazon VPCs to significantly simplify your network architecture
- use private IP connectivity: services function as though they were hosted directly on your private network.
- associate security groups and attach an endpoint policy to interface endpoints, control who access to a specified service

## terms

## basics

- establishes private access to services across VPC boundaries
  - other accounts and VPCs can create VPC endpoints to access your endpoint service
  - endpoint services can be either network or gateway load balancers
- i.e. if you have a VPC with a private subnet and resources in that subnet
  - you no longer need a NAT Gateway/public IP to reach out of the VPC
  - PrivateLink: enables this application to reach out to other services
  - VPC endpoint: enables other applications to reach into this private resource
-

### OSI Model

- layer 4: network load balancer
- layer 3: gateway load balancer

### Endpoint types

#### VPC

- interface VPC endpoints: connect you to services hosted by AWS Partners and supported solutions available in AWS Marketplace.

#### Gateway Load Balancer

- Gateway Load Balancer endpoints: security and performance for virtual network appliances or custom traffic inspection logic.

## considerations

## integartions

### cloudformation

- configure cloudformatio to use an interface VPC endpoint

### api gateway

- use with the REST API private endpoint
