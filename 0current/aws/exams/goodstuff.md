# good stuff

- nomenclature and terminology to reuse elseware

## links

- [serverless framework](https://github.com/serverless/serverless)
- [restful api best practices](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [microservice architecture patterns and best practices](http://microservices.io/index.html)
- [rest](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)

## terms

- API-First strategy: where each service within their stack is first and always released as an API
- microservice architectural: an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. take a large, complex system and break it down into independent, decoupled services that are easy to manage and extend.

- serverless: abstracts away the infrastructure layer so you can focus on developing your core product

## REST

- Representational state transfer (REST) refers to architectures that follow six constraints:
  - Separation of concerns via a client-server model.
  - State is stored entirely on the client and the communication between the client and server is stateless.
  - The client will cache data to improve network efficiency.
  - There is a uniform interface (in the form of an API) between the server and client.
  - As complexity is added into the system, layers are introduced. There may be multiple layers of RESTful components.
  - Follows a code-on-demand pattern, where code can be downloaded on the fly (in our case implemented in Lambda) and changed without having to update clients.

## other thoughts

### multi-cloud + open source

- to truly leverage any cloud provider, you should seek to retain ownership of the following
  - configuring an instance
  - updating operating systems
  - install application runtime
  - build and deploy apps
  - scaling and load balancing
  - monitor and observe apps
  - data storage
