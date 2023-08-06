# Direct Connect

- Create a private and dedicated network connection from on-premise to AWS

## my thoughts

## links

- [landing page](https://aws.amazon.com/directconnect/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- Improve application performance by connecting directly to AWS and bypassing the public internet.
- Secure your data as it moves between your network and AWS with multiple encryption options.
- Build hybrid networks: Link your AWS and on-premises networks to build applications that span environments without compromising performance.
- Extend your existing network: use SiteLink to send data between your locations. When using SiteLink, data travels over the shortest path between locations.
- Manage large datasets: data transfers at massive scale for real-time analysis, rapid data backup, or broadcast media processing.

### pricing

- connecting to resources running in any AWS Region or Local Zone, there are three factors that determine pricing:
  - capacity: maximum rate that data can be transferred through a network connection
    - measured in megabit per second (Mbps) or gigabit per second (Gbps): 1 Gbps === 1,000 megabits per second (1,000 Mbps).
  - port hours: measure the time that a port is provisioned for your use
    - Even when no data is passing through the port, you are charged for port hours
      - dedicated: physical connections between your network port and an AWS network port inside an AWS Direct Connect location.
        - billed as long as that port is provisioned for your use
        - request a dedicated connection through the AWS Direct Connect section of the AWS Management Console.
      - hosted: logical connections that an AWS Direct Connect Delivery Partner provisions on your behalf
        - you connect to the AWS network using one of the partner’s ports
        - request a hosted connection by contacting an AWS Direct Connect Delivery Partner directly.
  - data transfer out (DTO): the cumulative network traffic (the amount of data transferred, not the speed) that is sent through AWS Direct Connect to destinations outside of AWS
    - charged per gigabyte (GB): depends on the AWS Region or AWS Local Zone, and the AWS Direct Connect location
- Connecting between locations using SiteLink: theres an additional cost
  - SiteLink hours
  - SiteLink data transfer

## basics

### OSI Model

- operates through layer 1 to layer 4
- provides virtual access to physical, data link, network and transport

## considerations

## integrations
