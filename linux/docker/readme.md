# terminology
  - docker: allows you to package an application with all of its deps intoa  standardized unit called a container
  - registry: collection of respositories
  - repository: collection of images
  - image: executable package that includes everythign needed to run a piece of software: code, a runtime, libraries, env var, and config lifes
  - container: runtime instance of an image: what the image becomes in memory when actually executed
    - it is a stripped-to-basics version of a linux operating system
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

# commands  
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
