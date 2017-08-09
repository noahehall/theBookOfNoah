# MARKETING
  - developer agility
  - iterate quickly
  - dev workflows
  - developer experience
  - isolation for security
  - operational audit
  - operational resource quotas (e.g. cost of server per dev per blah blah blah)
  - micro services
  - operational concerns
  - security concerns
  - reusability

# Terminology
  - distributed application: different pieces of the application are called services
    - if you imagine a video sharing site, it probably includes a service for storing application data in a database, a service for video transcoding in the background after a user uploads something, a service for the front-end, and so on.
# principles
  - deployments should be consistent, deploying to dev should be the same as deploying to prod
  - adding resources should be immediately available to other resources in that environment
  - every hook for every action should be validated by your policy

# 12 factor
  - how a modern application should be designed so that its decoupled from its parts
  - best practices about an application's concerns and decoupling them so that deploying to different environments is seamless
## principles
  - use distributed data stores so that multiple instances of your application can use that data
  - can scale horizontally
  - environment provides metadata required for application
## general guidelines
  - application should never save state

# container based applications
  - a way to encapsulate your application in an file so that you can deploy them anywhere
## Docker
  - declarative resource provisioning
## TECHNICAL
  - libcontainer
    - use an execution env called libcontainer which is an interface to various linux kernal isolation features, e.g. namespaces and cgroups
    - allows multiple containers to be run in complete isolation from one another while sharing the same linux kernel
  - docker client
    - can be installed local to the domain or on a different host
    - communicates with the docker containers via docker daemon through tcp sockets/rest
    - responsible for issue commands to the daemon (you issue commands to the client)
  - docker daemon
    - communicates directly with containers running on the host
    - responsible for managing images and running containers
  - docker image
    - the build component of a container
    - read-only template from which one/more container instances can be launches, conceptually similar to an AMI
    - registries used to store images,can be local/remote
  - Docker container: running instance of an image: Docker uses containers to execute and run the software contained in thei mage
  - DockerHub: public remote registry (e.g. github)
  - DockerFile: allows images to be defined declaratively
    - consists of a set of commands that are used to install and configure various components that comprise the image
## general guidelines
  - be sure you switch to the correct user in the dockerfile before  issuing commands so that when the container is launched it will execute those commands as the correct user
## general workflows
  - Launch a docker container
    1. Docker first searches the local registry for the image
    2. if found, uses it
    3. if not found, searches public remote registry DockerHub
    4. if found, downloads it to local registry and uses it to launch the container
  - Creating Docker Images
    1. find a base image/docker file
    2. install required packages
    3. launch instance and test
    4. commit changes to new docker image

# service oriented architecture
  - organize code into services
  - integration relies heavily on middleware
## Terminology
  - ESB: esterprise service bus designed to integrate APIs
    - contains substantial logic for message routing, schema validation, message translation and busines rules
# microservices architecture
  - makes web based development more agle and code bases easier to maintain
  - relies on a messaging middleware similar to an ESB, but the distinction is that there is no logic and is purely used as a transport for messages from one service to another
  - services can be individually scaled based on its resource requirements
    - this allows each service to be implemented in the language most suitable for the operations that the service performs
      - image processing: C++
      - math/stats: python
      - CRUD: ruby
## Terminology
  - Model-View-Controller (MVC): evolved from the Model 2 design in the java world
    1. controller classes define methods that are mapped to URL patterns using a class called route.
    2. Model classes encapsulate the business logic and the data of the core application entities
    3. views are rendered by controllers  to display and edit the data in the corresponding model classes
  - Model 2 design
    1. put application code in java servlets
    2. data into classes called java beans
    3. and view logic into java server pages
  - service discovery: since microservices are often deployed across multiple hosts and scale up/down based on load, service discovery is needed in order for one service to know how ot locate other services
    - in simple cases a load balancer can be used for this
    - in many cases a its necessary to use a true distributed configuration service, e.g. apache zookeper
