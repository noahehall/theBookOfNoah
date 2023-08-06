# Cloud Map

- Service discovery for cloud resources

## my thoughts

## links

- [landing page](https://aws.amazon.com/cloud-map/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- constantly monitors the health of every IP-based component of your application and dynamically updates the location of each microservice as it is added or removed
- single registry for all your application services which you can define with custom names
- Discover resources via API calls or DNS queries
- Assign custom attributes: the ability to customize your deployment across different attributes
- Access control: ensure that only authenticated services can discover resources within the registry and retrieve the location and credential for those resources.
- Automatic health check via AmazonRoute 53
- Deep integration with AWS container services: ECS/EKS can be automatically registered and updated in Cloud Map
- Rapid change propagation: using API-based discovery, the updates on your resource locations and attributes are available within 5 seconds.

### pricing

- pricing is based on resources that you register in the service registry and API calls that you make to discover them
  - Service registry charge: The price you pay to register your resources with the AWS Cloud Map registry.
  - Look up request charge: The price you pay for your applications to query the location of a resource that is registered with the AWS Cloud Map registry.
- optional costs
  - route 53 dns: DNS-based discovery for the resources with IP addresses
  - route 53 healthchecks: health checking for these resources

## basics

### OSI Model

- operates at layer 7

## considerations

## integrations
