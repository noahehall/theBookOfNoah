# todo
  - [install docker for linux](https://www.lynda.com/Docker-tutorials/Install-Docker-Linux/485649/514170-4.html)
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
# trips n tricks
  - dont fetch dependencies when they start, e.g. node_modules should be stored in the file system
  - dont leave important things in unnamed stopped containers
# dockder flow
  - image > running container > stopped container > commit containers (create new image) > tag images
## images
  - every file that makes up just enough of the operating system to do what the image needs to do
### key commands
  - docker images: list all images
    - repostory: where it came from
    - tag: version number for the image
    - image id: internal docker representation of the image, can refer to it via name:tag or ID in any docker command
    - created: when it was created
  - docker tag IMAGE_ID TAG
    - you usually commit containers to make images, then tag the images
    -
## containers
  - nothing you do in a container is persisted to the image from which is was created, instead - you have to commit the changes to the image
  - containers have a main process, and the container does not stop until the main process stops
  - containers always have names
### key commands
  - docker run -ti IMAGE_NAME:TAG COMMAND
    - takes an image and turns it into a container
    - arguments
      - --name NAME #give the container a name
      - --rm: run and delete the container when it exists, useful for testing how a container runs a command without having to manage the container after it creates
      - -d #run the container in detached mode
      - --memory MAX_MEMORY
      - --cpu-shares RELATIVE_#
      - --cpu-quota MAX_#
    - command:
      - bash : open a bash session in the container
  - docker attach CONTAINER_ID/NAME
    - login to a detached container
  - docker commit CONTAINER_ID/NAME TAG_NAME
    - commit and tag an image
  - docker ps OPTIONS
    - see all running images
    - ID: the container ID, is different than the image ID
    - image: the iamge the container is based on
    - command: the command that was run when the container was instantiated
    - created:
    - status:
    - name: the name of the container
    - options
      -  -a # see all running & stopped containers
      - -l #see the last stopped container
  - docker exec -ti CONTAINER_NAME/ID COMMAND
    - starts another process in an existing container, useful for debugging/db administration etc
    - limited as you cant add ports, volumes, etc, but great for debugging
  - docker logs CONTAINER_NAME
  - docker kill CONTAINER_NAME #stop a container, but dont remove it so you can start it again
  - docker rm CONTAINER_NAME #rm a container, and delete it from existance
  - commands issued inside a running container
    - ctrl+p ctrl+q #exit the container but leave it running
# containers: networking
  - programs in containers are isolated from the internet by default
  - you can group containers into 'private' networks
  -
# random docker commands


# terminology
  - docker: allows you to package an application with all of its deps into a standardized unit called a container
    - carves up a computer into sealed containers that run code
    - a social paltform for you to find and share containers
    - client program that manages a a running linux system
    - a service that distributes containers over the net
  - registry: collection of respositories
  - repository: collection of images
  - image: executable package that includes everythign needed to run a piece of software: code, a runtime, libraries, env var, and config lifes
  - container: runtime instance of an image: what the image becomes in memory when actually executed
    - it is a stripped-to-basics version of a linux operating system
    - self-contained unit of software: batteries, operating system, code, configs, processes, databases, networking, dependencies
  - image: software you load into a container
  - service: defines how containers behave in production
  - dockerfile: defines what goes on in the env inside the container
    - resources like networking interfaces and disk drives are virtualized and isolated inside this env so you need to map ports to the outside world
    - decide what files you want to copy into the virtualized env
  - docker hierarchy
    1. image
    2. container
    3. services
    4. stack
  - services: containers in production
    - only runes one image and codifies how that image runs
      - what ports it should use
      - how many replicas of the container should run so the service has the capacity it needs
    - scaling a service changes the number of container instances running that piece of software
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
# key files
  - `Dockerfile`: the install script for running an image as a container
  - `.dockerignore`: files to include in the image, but not in the container
  - `docker-compose.yml`: YAML file that defines how Docker containers should behave in production
# installation
  1. install docker
  2. install docker machine
  3.
# commands
## research
  - docker-machine start|stop|ip|ssh|scp|upgrade
## docker admin
  - `$ sudo dockerd`
    - start the docker daemon
  - `$ docker login`
    - login to the public docker
  - `$ docker push username/respository:tag`
    - publish an image to a repository
## image management
  - `$ docker images`
    - see a list of all locally available images
  - `$ docker tag imagename username/repository:tag`
    - notation for associating a local image with a repository on a registry

## container admin
  - `$ docker ps`
    - see all running images (i.e. containers) and get their information
  - `$ docker stop containerId`
    - stop a running docker container
  - `$ docker logs containerId`
    - get the logs from a specific container, find them using `docker ps`
  - `$ docker exec -it <container id> /bin/bash`
    - log into a container
## running images
  - `$ docker run -p publicPort:containerPort username/repository:tag`
    - publicPort: your/public port
    - containerPort: specified in dockerfile as `EXPOSE 80` or whatever
    - run an image on any machine
    - first it looks in local repository, then it looks in remote repositories
## images
  - `$ docker build -t someRandomName .`
    - uses the `Dockerfile` located at `.` to build an image and save it in your local docker image registry
  - `$ docker run -p publicport:containerport imagename`
    - `-d` run the app detatched/background mode
    - runs an image mapping public port (e.g. 4000) to the container port (e.g. 80)
    - thus you open browser `localhost:4000` and its mapped to the container `localhost:80`

# links
## steps
  - [install docker](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#install-using-the-repository)
  - [install docker compose](https://github.com/docker/compose/releases)

## regular links
  - [deploy a private docker registry](https://docs.docker.com/registry/deploying/)
  - [easy nodejs in docker tut](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
  -
