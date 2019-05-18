# links
  - [martin fowler](https://martinfowler.com/articles/microservices.html)
  - [edureka: what are microservices](https://www.youtube.com/watch?v=gfWr2_H39N0)

# videos
  - [ mastering chaos - netflix guide to microservices](https://www.youtube.com/watch?v=CZ3wIuvmHeM)
  -

# defs
  - microservice architectural style:
    - an approach to developing a single application as a suite of small services, each running in its owne process and communicating with lighteight mechanisms, often an http resource API


# components of microservice architecture
  - separation of concerns:
    - modularity
    - encapsulation
  - scalability:
    - horizontally scaling
    - workload partitioning
  - virtualization & elasticity
    - automated opeartions
    - on demand provisioning
  - Microservices components
    - platform layer
      - routing: so microservices can find each other
      - dynamic configuration
      - cryptographic
    - peristence layer
      - cache
      - database
  - examples:
    - organ systems:
      - each organ has a purpose
      - organs form systems
      - systems form an organism


# challenges and solutions
  - dependency
    - intra-service requests
      - e.g. microservice A calls to microserve B to fullfill some larger request
      - network latency
      - congestion
      - failure
      - logical / scaling failure
      - cascading failures:
        - one service that fails with improper defenses, that cascades and takes down the entire service
    - client libraries
    - data persistence
    - infrastructure
  - scale
  - variance
  - change