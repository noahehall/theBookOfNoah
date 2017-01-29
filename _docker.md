bookmark: https://training.docker.com/self-paced-training
  time: docker fundamentals:47.52
bookmark:https://docs.docker.com/engine/userguide/containers/dockerimages/
next2:https://docs.docker.com/compose/gettingstarted/
eventually:
  http://www.docker.com/products/overview
  https://docs.docker.com/docker-hub/
  https://scotch.io/tutorials/getting-started-with-docker
everything you need:https://docs.docker.com/engine/userguide/

# next up
  - [docker user guide](https://docs.docker.com/engine/userguide/)
# Links:
  - [docker hub to find docker images](https://hub.docker.com/?utm_source=getting_started_guide&utm_medium=embedded_MacOSX&utm_campaign=find_whalesay)
  - [docker ubuntu](https://docs.docker.com/engine/installation/linux/ubuntu/)
  - [manage docker as non-root user](https://docs.docker.com/engine/installation/linux/linux-postinstall/)

# quickies
  - start docker on boot ` sudo systemctl enable docker`
  - disable docker on boot `sudo systemctl disable docker`
  - restart docker daemon `sudo service docker restart`
  - pull an image `docker pull hello-world`

VM vs Containers
  -VM: virtual machine
    .installed on top of the host OS, and runs a guest operating machine
  -Containers: container based virtualizatino uses the kernel on the hosts OS to run multiple guest instances
    .each guest instance is a called a container, which has
      -Root filesystem
      -processes
      -memory
      -devices
      -network ports
      .looks like a VM, but it isnt
      Host os > host OS kernel > multiple containers that are isolated application platforms

BEST !
  docker run IMAGE_NAME /bin/bash //create a bash shell inside the container after it starts

// TODO:130 upgrade docker mysql to 5.7
/*
  If You create `docker-compose.override.yml`
  You can run newer versions of MySQL in container.
  dcom-mysql:
      build: docker/mysql/5.7

  note:
  testing instance uses Mysql 5.6:  Percona XtraDB Cluster (GPL), Release rel74.0, Revision 1, WSREP version 25.12, wsrep_25.12 |
*/

DARCI
  migrations script - you can manually run this in root dir by executing the migratino.sh shell script
    -first bash into dcom-apache-php
    -this runs database migrations in dcom-mysql via dcom-apache-php
      .copy migrations.sh to /migrations.sh
      .$chmod u+x /migrations.sh

  https://wiki.iacpublishing.com/display/DCOMWIKI/Docker+setup
  $docker-compose up -d
    -do this within the darci folder to start the darci

  $docker exec -it dcom-apache-php bash
    starts bash process in the apache-php container (start bash shell)

  $php /home/scripts/devconfig.php
    adjusts darci config based on my devconfig.ini
    compiles less files
      if you ever see dict.local without swag, run this
      should be executed when setting up the container

commands
  user
    -login to docker:
      $docker login --username=yourhubusername --email=youremail@company.com

  administration
    containers
      -see which docker containers are running
        docker ps //see all running containers
        docker ps -l //-l = view details of the last started container
        docker ps -a //view all containers, started and stopped
      -see the full standard output of a container.
        docker logs CONTAINER_NAME
        docker logs -f CONTAINER_NAME //get live updates;useful for viewing an http server output as requests are coming in
      -stop a running container
        docker stop CONTAINER_NAME|CONTAINER_ID
      -see which containr ports are mapped to your host/machine
        docker port CONTAINER_NAME (run docker ps to get the container name)
      -see your containers processes
        docker top CONTAINER_NAME
      -saving a container as a new image
        docker commit [options] [container id] [repository:tag]
        docker commit 123123123123 noahboom/bamjam:1.0

    images
      -pulling images from docker hub so you can use them later
        docker pull ubuntu //pulls the ubuntu image, so they dont have to be downloaded later when using docker run
      -search 'for' images that contain some string
        docker search SOME_STRING
      -view all local docker images
        docker images

    containers and images
      -see your docker containers configuration and status information. VERY USEFUL!
        docker inspect CONTAINER_NAME|IMAGE
      -connect to a running docker container
        1.docker ps //get ID of container
        2. docker attach CONTAINER_ID
      -exit container and leave it running
        1.CTRL P Q

    docker-machine
      -Set environment variables to dictate that docker should run a command against a particular machine, i.e export your docker-machine info to shell
        docker-machine env //this is also a good way to view the information
      -see your docker machine IP
        docker-machine ip //you can also specify a specific machien name, docker-machine ip VM_NAME (e.g. default)

    docker
      $docker version //see your version of docker
      $docker help //see docker commands
      $docker COMMAND --help //see docker commands help
      $docker info //see your docker config, a docker-machine msut already be running


  setup
    -create a new docker machine named 'default'
      docker-machine create -d virtualbox --virtualbox-disk-size "30000" --virtualbox-cpu-count "4" default

    -start docker-machine
        search spotlight > docker quickstart terminal
      [or]
        docker-machine start default //default can be any machine env name
        docker-machine env default //exports required environment variables
        dmeval | this is currently in bashrc as below
          $eval "$(docker-machine env default)"
            -Run this command to configure your shell
            -fixes  the 'is the docker daemon running' error

    -restart a container, e.g. dcom-memcache
      $docker-compose restart CONTAINER_NAME
        -helpful when you need to resert things

    -restart docker-machine
      docker-machine restart

    -remove a docker machine named default
      docker-machine rm default

  docker run/instantiate an image in a container
    -start a container in detached mode
      docker start CONTAINER_ID
       .this keeps the container running

    -stop any container
      docker stop CONTAINER_ID

    -connect to containers with bash shell
      docker --name NEW_CONTAINER_NAME exec -it CONTAINER_ID /bin/bash
        .this starts a new process in the container

    -Mount a volume to a docker container:
      execute a container and mount the folder /myvolume into its file system and then bash into it
        docker run -itv /dir/to/create IMAGE_NAME:TAG process
          //v for volume
        VOLUME /path/to/mount
        VOLUME /path/to/mount1  /path/to/mount
        VOLUME ["myVol1","myVol2"]
      execute a new container and map
        docker run -v /path/on/host:/path/to/container IMAGE_NAME:TAG


    -Linking containers:
      1.create source container
        docker run -d --name database IMAGE_NAME:TAG
      2.create and link recipient container
        docker run -d -P --name website --link database:db IMAGE_NAME:TAG

    -docker run reference: https://docs.docker.com/engine/reference/run/
      -run a docker image inside of a container, downloading it from docker-hub if it does not exist locally
      -if you dont specify a tag/variant, it will always use the latest
        docker run ubuntu //uses the latest ubuntu available on docker hub
        docker run ubuntu:14.04 //uses the ubuntu image tagged 14.04

      -syntax
        -docker run [options] [image] [command] [args]
          .docker run ubuntu:14.04 echo 'hello world'
          .docker run ubuntu ps ax
          .docker run -i -t ubuntu /bin/bash

      -basic
        docker run IMAGE_NAME
          -downloads the image if it does not exist from docker hub
          -Docker only downloads the image again if the image’s source changes on the hub
        docker run IMAGE_NAME cmd
          -same as above
          -runs the cmd specified inside the container
          -as soon as the cmd is finished, the container quits

      -interactive
        docker run -t -i IMAGE_NAME /bin/bash
          -same as above
          -instead of quiting, it starts a bash shell and the container remains active as long as the shell is active
          -t //flag assigns a pseudo-tty or terminal inside the new container.
          -i //flag allows you to make an interactive connection by grabbing the standard in (STDIN) of the container.

      -daemon (runs as background service/i.e. in detached mode)
        docker run -d IMAGE_NAME
          -d //flag runs the container in the background (to daemonize it).

      -map ports (map network ports from host to container so you can access it via web)
        1.docker run -d -P training/webapp python app.py
          -P //tells Docker to map any required network ports inside our container to our host. This lets us view our web application.
          -python app.py //launches our web application.
          -alternatively you can do
            -.docker run -d -p 80:5000 training/webapp python app.py
              -lowercase -p allows you to specify the port on the docker-machine to map to the port on the container
        2.docker ps
          -0.0.0.0:32768->5000/tcp //tells you which ports are mapped, your docker-machine port 32768 is mapped to the containers 5000.
        3.find your docker-machine ip
          docker-machine env
          -export DOCKER_HOST="tcp://192.168.99.100:2376" //this is what youre looking for
        4.load your browser on your machine ip in step 3 on the port specified in step 2
          192.168.99.100:32768


  Creating docker images with Dockerfile
    https://docs.docker.com/engine/reference/builder/
    https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/

    -background
      docker build: builds an image from a Dockerfile
        docker build [options] [path]
        docker build -t [repository:tag] [path]
        docker build -t noahboom/bambam:1.0 .

          -build context: that is the path you specify. youll see this in the output

      Dockerfile: describes the software that is “baked” into an image. It isn’t just ingredients tho, it can tell the software what environment to use or what commands to run

      -is a configuration file that contains instructions 'for' building a docker image
      -MUCH more effective than building images
      -easily fits into CI and CD process
      syntax: INSTRUCTION statement(s)
        -INSTRUCTION: commands 'for' docker to run
          FROM imageName:tag|version //specify the base image
          RUN //instruction executes a command inside the image,
            -each RUN instruction will execute the command on the top writable layer and perform a commit of the image, thus aggregate commands with &&
              -if you have 10 run instructions, thats 10 commits, DONT DO THAT! lol
            RUN apt-get update && apt-get install -y \  //use backslash for multi-line, always run these commands together or else caching issues may creep up
            package-bar \
            package-baz \
            package-foo=1.3.* //specify a version number to install with this package

            -recommended run command
              RUN apt-get update && apt-get install -y \
                aufs-tools \ //is the acronym for Another Union FileSystem
                automake \ //is a programming tool to automate parts of the compilation process. It eases usual compilation problems. For example, it points to needed dependencies. It automatically generates one or more Makefile.in from files called Makefile.am
                build-essential \ //The build-essentials is a reference for all the packages needed to compile a debian package.
                curl \
                dpkg-sig \
                libcap-dev \
                libsqlite3-dev \
                mercurial \
                reprepro \
                ruby1.9.1 \
                ruby1.9.1-dev \
                s3cmd=1.1.* \
              && rm -rf /var/lib/apt/lists/* //this removes the apt cache, keeping your image small*/

          CMD: defines a command to run when a container is created (NOT DURING IMAGE BUILD!) along with any arguments.
            -there can be only ONE CMD in the Dockerfile
            -shell format: prefixes it with /bin/sh -c
              CMD ls -l >> /bin/sh -c ls -l
            -Exec format: executes the command as defined, without prefixing it with /bin/sh
            -CMD ["apache2","-DFOREGROUND"]  //Indeed, this form of the instruction is recommended for any service-based image.
            -In most other cases, CMD should be given an interactive shell (bash, python, perl, etc),
              -CMD ["perl", "-de0"]
              -CMD ["python"]
              -CMD [“php”, “-a”].
                //Using this form means that when you execute something like docker run -it python, you’ll get dropped into a usable shell, ready to go.

          EXPOSE: The EXPOSE instruction indicates the ports on which a container will listen 'for' connections.
            - just metadata that provides information to be used by another command, or to inform choices made by the container operator
            - the best practice is to list EXPOSE in the Dockerfile, with the expectation the container operator will manually set ports with the docker run cmd
            EXPOSE 80 //for apache
            EXPOSE 27017 //for mongodb
            EXPOSE 80 27017

          ENTRYPOINT: similary to CMD, only thing this cannot be overridden.
            -defines the CMD that will run when a container is executed (NOT DURING BUILD)
              -additional args are passed as arguments to this command
                ENTRYPOINT ["ls"]
                docker run blah -laxos //laxos is passed as an argument to ls

    1.$mkdir DockerImageName
    2.$nano Dockerfile
    3.list out your commands needed to setup this image to run in a container
      # this is a comment.
      FROM image/name:latest //downloads image/name from docker hub. :latest == latest. this is the base image
      MAINTAINER Noah Edward Hall <noahedwardhall@gmail.com> //specify who is the maintainer of this image
      RUN apt-get -y update && apt-get install someOtherThing //RUN runs any bash command
      CMD echo 'ive loaded' //CMD instructs docker to run this command when the image is loaded
    4.$docker build -t yourDockerHubName/yourImageName .
      -builds the image from your docker file in the current dir. make sure you keep the period
      -be sure to specify the name and image, or in $docker images it wont have one
      -t //who owns the file
      . //the path, period = current dir, you can specify somewhere else

  updating docker images
    background
      very useful if you want to use a pre-built image, make changes to it, and commit the changes so you can use your own version of it
      1.get some base image
        docker run -t -i training/sinatra /bin/bash
        //root@0b2616b0e5a8:/# - 0b2616b0e5a8 is the container ID, you'll need it later
      2.run some commands to update the image
        gem install json
        //other cmds here
      3.exit the container
        exit
      4.commit your changes
        docker commit -m "Added json gem" -a "noahedwardhall" \
        CONTAINER_ID yourDockerHubName/saveImageAsThis:versionName|tagName
        b09628789cdd noahedwardhall/sinatra:v2
      5.comfirm changes have been commited
        docker images //you should see the new image listed under yourDockerHubName/saveImageAsThis:versionName|tagName

  push docker images to docker-hub
    https://docs.docker.com/mac/step_six/
    -image and repo must have the same name and tag as the docker hub repo
    1.rename your docker-image to
      yourDockerHubName/dockerImageName
        1.docker images //get a list of all your images
        2.find your image ID
        3.docker tag IMAGE_ID yourDockerHubName/YourImageName:versionName|tagName
    2.login to docker docker login --username=yourDockerHubName --email=yourDocker@email.com
    3.docker push yourDockerHubName/ImageToPush

  deleting docker images
    1.docker images //to get either the docker image name or the image id
    2.docker rmi -f IMAGE_ID/DOCKER_IMAGE_NAME

  deleting docker containers
    1.docker ps
    2.docker rm CONTAINER_ID|NAME

docker
  monolythic application
    applications you are use to.
  microservices:
    monolithic applcations divided into msaller microservices. where every aspect of the application is a service that is pluggable into the whole application, i.e. can be scaled horizontally (multiple database services can be added and interfaced with the application)

  docker engine: portable lightweight runtime and packaging toolbox
  docker hub: cloud service 'for' sharing applicatons and automating workflows
  run the same app, unchanged, on laptops, data center VMs, etc.

  how to use docker
    boot2docker
    vagrant with linux
    amazon ecs
    google container engine

    vagrant with linux
      1. spin up a new vagrant box
        $ vagrant init ubuntutrusty64
        $ vangrant up
        $ vagrant stash

      2. install docker
        $ sudo apt-get install docker.io

      3. begin using docker!
        -start a container and run a command
          $ sudo docker run IMAGE_NAME /bin/echo/ 'hello world'
        -launch an interactive container
          $ sudo docker run -t -i IMAGE_NAME /bin/bash

docker user guide examples
  Docker Toolbox: used to install docker software listed below
    Docker CLI:
      -client 'for' running Docker Engine to create images and containers
    Docker Machine:
      https://docs.docker.com/machine/reference/
      -so you can run Docker Engine commands from Mac OS X terminals
      -Docker Machine is a tool that lets you install Docker Engine on virtual hosts, and manage the hosts with docker-machine commands. You can use Machine to create Docker hosts on your local Mac or Windows box, on your company network, in your data center, or on cloud providers like AWS or Digital Ocean.
    Docker Compose:
      -https://docs.docker.com/compose/reference/
      -Run a multi-container application with Compose
      - 'for' running the docker-compose command
      -Compose is a tool 'for' defining and running multi-container Docker applications. With Compose, you use a Compose file to configure your application’s services. Then, using a single command, you create and start all the services from your configuration. To learn more about all the features of Compose see the list of features.
      -used to talk to specific containers

      -Using Compose is basically a three-step process.
        1.Define your app’s environment with a Dockerfile so it can be reproduced anywhere.
        2.Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment.
        3.Lastly, run docker-compose up and Compose will start and run your entire app.
    Kitematic:
      -the Docker GUI
    Docker QuickStart shell:
      -preconfigured 'for' a Docker command-line environment
    Oracle VM VirtualBox

  definitions
    docker hub: the public registry that contains a large number of images 'for' use
      -it is the app store 'for' docker images
      -docker images are listed as
        -ownerName/dockerimage:versionName|tag
        -noahehall/node20:latest

    Docker repos: each repo should contain a specific 'type' of image(s), e.g. a single repo 'for' Ubuntu, another 'for' Mongo, etc.

    Docker orchestration:
      the automated arrangement, coordination, and management of computer systems, middleware, and services
      -docker machine, docker swarm, and docker compose

    Docker Machine: provisions docker hosts and installs the docker engine on them

    Docker swarm: clusters many engines and schedules containers
      -decides which host in a cluster a container will run in

    Docker compose: creates and manages multi-container applications
      -it creates an manages multiple containers in an application

    docker engine: the program that enables containers to build built
      -uses Linux kernel namespaces and control groups
      -namespaces give us the isolated workspace
        .Host os > Linux Operating System > Linux Kernel > Docker Engine > multiple containers


    docker image: an image is a filesystem and parameters to use at runtime. It doesn’t have state and never changes
      -they are read only templates used to create containers
      -An image can start software as complex as a database, wait 'for' you (or someone else) to add data, store the data 'for' later use, and then wait 'for' the next person.
      -image layers:
        .an image can contain multiple layers, each layer is just another image
          1.base image
          2.references base image 'for' some process
          3.references #2 'for' some other process

    docker container: a container is a running instance of an image.
      -isolated application platform that contains everything needed to run an application or service (and is writable unlike images which are read only)
        -docker uses a copy-on-write system
          1.image is read only
          2.container is writable
          3.you try to edit a file on the image > the container copies it to its writable layer > hides the original and starts to use the writable one

      -docker run IMAGE_NAME >>> loads IMAGE_NAME into a container and runs it
      -Using Docker Engine, you don’t have to worry about whether your computer can run the software in a Docker image — a Docker container can always run it.

    docker volume: designated directory in a container, which is designed to persist data, independently ofthe containers life cycle
      -volume changes are excluded when updating an image
      -persist when a container is deleted
        -volumes are not commited to repos, but they will persist
      -can be mapped to a host folder
      -can be shared between containers

      used 'for':
        .de-couple the data that is stored from the container which created the data
          -if your container has logs, store them in a volume so you can access them when the container shuts down
        .good 'for' sharing data between containers
        .mounting folders from host is good 'for' testing but not recommended 'for' production

    Linking Containers
      Linking: communication method between containers which allows them to securely transfer data from one to another
        -recipient > source containers: (e.g. web app > database)
        -recipient containers have access to data on source containers
        -links are established based on container names
