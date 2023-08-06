# App Mesh

- connects containers and microservices with application level networkin

## my thoughts

## links

- [landing page](https://aws.amazon.com/app-mesh/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- Streamline operations, implement custom traffic routing rules, and configure and standardize how traffic flows between your services.
- Capture metrics, logs, and traces from your applications to quickly identify and isolate issues and optimize your application.
- Enhance network security with authentication controls and encrypted requests between services—even within your private network.

### pricing

- There is no additional charge for using AWS App Mesh
- pay only for the AWS resources (ec2/fargate cpu & memory) consumed by the lightweight proxy that is deployed alongside your containers.

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

### OSI Model

- operates at layer 4 due to constraints of integrating with envoy proxy
  - does not currently allow multipe backend destinations modeled as TCP to share the same port

## considerations

## integrations
