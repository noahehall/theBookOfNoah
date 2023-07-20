# App Mesh

- application level networking for services to communicate across different types of compute infrastructure

## my thoughts

## links

- [landing page](https://aws.amazon.com/app-mesh/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- end to end visibility and high availability

### pricing

## terms

## basics

- general architecture
  - app mesh control plane is responsible for securing, scaling and high availability of the service mesh
    - creates communication paths between services in the mesh
    - provides observability, failure isolation and routing
  - app mesh pods: consists of a main microservice application and an app proxy deployed as a sidecar container
    - when service A sends requests to service B, the network traffic is routed through the service A's proxy
      - each proxy as additional identifiers, metadata and other network configuration to the original payload from service A
        - the proxy rewrites the destination to service B's proxy
    - when service B's proxy receives requests it validates the request
      - it routes the original request to service B
      - any response would follow a similar network path

## considerations

## integrations

### eks
