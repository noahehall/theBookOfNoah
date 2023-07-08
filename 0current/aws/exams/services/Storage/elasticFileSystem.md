# elastic file system (EFS)

- serverless, fully elastic file storage

## my thoughts

## links

- [landing page](https://aws.amazon.com/efs/?did=ap_card&trk=ap_card)
- [total cost of ownership example](https://aws.amazon.com/efs/tco/)

## best practices

### anti patterns

## features

- create and configure shared file systems for AWS compute services
- eliminate capacity planning
- 11 9s durability and up to 49s of availability
- automate deletion/movement of infrequently accessed files

### pricing

- pay for total data stored
- read and write access to data
  - stored in Infrequent Access storage classes
  - using Elastic Throughput
  - using Provisioned Throughput

## terms

## basics

## considerations

- storage class
  - multi-az; highest levels of durability and availabilityt
    - standard:
    - standard IA: infrequent access
  - single AZ; cheapest
    - one zone:
    - one zone IA: infrequent access

## integrations
