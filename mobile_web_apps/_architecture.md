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

# microservices architecture
  - 
