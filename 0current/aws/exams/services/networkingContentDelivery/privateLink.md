# PrivateLInk

- private connections between VPCs and services without traversing the public net

## my thoughts

## links

- [landing page](https://aws.amazon.com/privatelink/?did=ap_card&trk=ap_card)
- [accessing services through privatelink](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Introduction.html#what-is-privatelink)
- [cloudformation: setting up vpc endpoints](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-vpce-bucketnames.html)

## best practices

- cheaper for aws to aws (east west) traffic compared to going over the public internet
- best practice to always use privatelink when possible for improved VPC security posture

### anti patterns

## features

- secure traffic via private IP addresses
- simplified network & firewall management rules
- HIPAA, EU-US privacy shield, PCI and other governmental compliancy regulations
- deliver SaaS services via prebuilt third-party integrations

## terms

## basics

## considerations

## integartions

### cloudformation

- configure cloudformatio to use an interface VPC endpoint

### api gateway

- use with the REST API private endpoint
