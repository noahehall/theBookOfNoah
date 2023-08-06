# Cloud WAN

- Build, manage, and monitor global wide area networks

## my thoughts

## links

- [landing page](https://aws.amazon.com/cloud-wan/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- Unify your AWS and on-premises networks to reduce complexity.
  - Use the AWS global network to connect your locations and resources.
- Increase security by segmenting your network to isolate sensitive network traffic from everyday data.
- Configure your network, monitor performance and health, and automate routine tasks, all from one place.
- Use your choice of local network providers to connect to AWS, then use the AWS global network to connect your locations and VPCs.

### pricing

- Four factors determine what you pay for using AWS Cloud WAN
  - The number of core network edges (CNEs) deployed
  - the data processing charges for traffic sent through each core network edge
  - the number of attachments
  - AWS Transit Gateway peering connections to each core network edge.
- Data transfer between AWS Regions
  - initiates an Amazon Elastic Compute Cloud (Amazon EC2) inter-Region data transfer out charge.
  - billed separately from Cloud WAN, but it’s a factor in the total cost of the Cloud WAN service
- Multi-account ownership
  - When a Cloud WAN and VPCs are owned by different AWS accounts, we divide the charges among them
    - The account that created the Cloud WAN pays for core network edges, VPNs, and SD-WAN network attachments, plus data processing fees on data resulting from VPN attachments
    - The account that created the VPCs pays for its VPC attachments, plus the data processing charges that result from those VPCs.

## basics

### OSI Model

- operates at layer 3

## considerations

## integrations
