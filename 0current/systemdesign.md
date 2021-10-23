# TLDR

- find where the old version of this file exists and copy everything here

## links

- [haproy layer 4 & 7 proxy mode](https://www.haproxy.com/blog/layer-4-and-layer-7-proxy-mode/)
- [OSI modal explained](https://www.networkworld.com/article/3239677/the-osi-model-explained-and-how-to-easily-remember-its-7-layers.html)

## terminology

- self serve infrastructure: instead a of a global operations team managing the entire infrastructure, each specific team are responsibile for their devstack via tools provided by the central operations team
- software defined netowrking: SDN: provides more control to operators & developers and allows netowrking to better support the applications urnnin on top
  - most have a control layer and infrastructure layer

## key goals

- redundancy
- fault-tolerance

## components

various components exist when designing a system, understanding the specific components in isolation and planning how they should holistically work together to meet business requirements is the main goal of system design

- application layer
  - frontend:
  - backend:
    - api servers
    -
- database layer
- caching servers
- routing meshes
- load balancers
- observability
- monitoring
- storage
  - public
  - private (e.g. API keys, SSL Cert Pairs)
- discovery
- messaging
- version control
- CI
- CD
- provisioning
- access control
- DNS

## multi-tier applicaitons

- N-Tier
  - 2-tier:
    - examples
      - pool of web servers with a dtabase tier

## microservices

## environments

- local
- cloud
- multi-cloud
- hybrid-cloud
