# docker

- my (2022) docker cheatsheet

## links

- [docker docs](https://docs.docker.com/)
- [docker ref](https://docs.docker.com/reference/)
- [docker guides: overview](https://docs.docker.com/get-started/overview/)
- [docker dev best practices](https://docs.docker.com/develop/dev-best-practices/)
- [compose in prod](https://docs.docker.com/compose/production/)
- [buildx github](https://github.com/docker/buildx)
- [docker buildkit backend](https://docs.docker.com/engine/reference/builder/#buildkit)
- [docker build](https://docs.docker.com/engine/reference/commandline/build/)
- on the web
  - [uid & gid in docker containers](https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf)
  - [vagrant vs docker](https://www.ctl.io/developers/blog/post/docker-vs-vagrant)
  - [k8s vs docker swarm](https://thenewstack.io/kubernetes-vs-docker-swarm-whats-the-difference/)
  - [hella dockerfile examples](https://github.com/jessfraz/dockerfiles)
  - [pretty good docker cheetsheet](https://github.com/wsargent/docker-cheat-sheet)
  - [docker + buildkit](https://devopsspiral.com/articles/containers/modernize-image-builds/)

## best practices / gotchas

- dockerfile
  - stable lines come before frequently changing lines
  - interception attacks during build
    - verifying the source: using https where possible;
    - verifying author: importing PGP keys with the full fingerprint in the Dockerfile to check signatures;
    - verifying the content: embedding checksums directly in the Dockerfile
  - Only the instructions RUN, COPY, ADD create layers.

## basics

### general

- lifecycle statuses (as reported by docker ps)

  - running
    - docker run
    - docker start
    - docker restart
    - docker unpause
  - exited
    - docker create
    - docker stop
  - paused
    - docker pause
  - restarting
    - docker restart

- restart policies

  - never restart
  - attempt to restart when a failure is detected
  - attempt for some predetermined time to restart when a failure is detected
  - always restart the container regardless of the condition

- components

  - image: the template for instantiating a container
  - container: a running image
  - volume: a filesystem for a container
  - network: dns for containers & volumes

- common files
  - `.dockerignore`
  - `poop.Dockerfile`

## quickies

```sh
  docker help
  docker help cp
  docker help run | grep OPTION


  docker ps # show running
  docker ps -a # show all
  docker ps -q # only show the container UIDs
  docker ps -l # show the last created container
  CID=$(docker ps -l -q) # save the UID of the last created container

```

## dockerfile

- defining & using variables in dockerfile
  - $variable_name
  - ${variable_name}
  - ${variable:-default_value}
  - ${variable:+if_set_use_this_instead}
- keywords
  - ADD
  - CMD
  - COPY
  - ENV
  - EXPOSE
  - FROM
  - LABEL
  - ONBUILD
  - STOPSIGNAL
  - USER
  - VOLUME
  - WORKDIR

```sh
  # syntax=docker/dockerfile
  # syntax=docker/dockerfile:1.0
  # syntax=docker.io/docker/dockerfile:1
  # syntax=docker/dockerfile:1.0.0-experimental
  # syntax=example.com/user/repo:tag@sha256:abcdef...
      # directive cmds must appear before ANYTHING (event comments) and do not add layer/appear as a build step
      # only if you've enabled the buildkit backend
      # https://docs.docker.com/engine/reference/builder/#parser-directives

  ARG VARNAME1=value
  # build vars, do not exist at container runtime
  # only build instruction that can appear before FROM
  # value can only be used in the FROM statement
  #  If a Dockerfile defines an ARG variable whose value is different from a previous build, then a “cache miss” occurs upon its first usage, not its definition
  #  all RUN instructions following an ARG instruction use the ARG variable implicitly (as an environment variable), thus can cause a cache miss
  #  All predefined ARG variables are exempt from caching unless there is a matching ARG statement in the Dockerfile.


  FROM [--platform=<platform>] <image> [AS <name>]
  FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
  FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]
  # FROM debian:wheezy
  # FROM debian@sha256:1234 # use the digest returned from docker pull

  ARG VARNAME1
  # reuse the VARNAME1 value declared earlier
  # only way to reuse the value is to redclare it

  ENV VARNAME=value \
      ANOTHER=one

  MAINTAINER "never use this CMD use LABEL instead"
  LABEL multi.label1="value1" \
    multi.label2="value2" \
    other="value3"
  LABEL maintainer="SvenDowideit@home.org.au"

  WORKDIR /cd/to/this/path/for/all/following/cmds

  # fuck windows RUN form not included

  SHELL ["executable", "parameters"]
  # override the default shell used for all shell cmds (run, cmd, entrypoint)
  # Executed as cmd /S /C echo hello
  # SHELL ["cmd", "/S", "/C"]
  # RUN echo hello


  RUN <command>
  # executes ina shell as `RUN /bin/sh -c <command>`

  RUN ["executable", "param1", "param2"]
  # exec form
  # The exec form is parsed as a JSON array, which means that you must use double-quotes (“) around words not single-quotes (‘).

  RUN any linux cmd \
      && more cmds; \
      do this too;


  # can specify multiple src paths
  # dest is absolute path, or relative to WORKDIR
  # Using numeric IDs requires no lookup and will not depend on container root filesystem content.
  #
  ADD [--chown=<user>:<group>] <src>... <dest>
  ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]
  # required in spaces are contained in paths

  COPY [--chown=<user>:<group>] <src>... <dest>
  COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]
  COPY --from=<see FROM syntax above>
  # COPY instructions considers file mtime changes to be a cache bust,


  VOLUME

  USER


  # An ENTRYPOINT allows you to configure a container that will run as an executable.
  #
  ENTRYPOINT ["executable", "param1", "param2"]
  # exec form, is preferred

  ENTRYPOINT command param1 param2
  ENTRYPOINT exec top -b
  # shell form
  # The shell form prevents any CMD or run command line arguments from being used, but has the disadvantage that your ENTRYPOINT will be started as a subcommand of /bin/sh -c, which does not pass signals. This means that the executable will not be the container’s PID 1 - and will not receive Unix signals - so your executable will not receive a SIGTERM from docker stop <container>.
  # To ensure that docker stop will signal any long running ENTRYPOINT executable correctly, you need to remember to start it with exec

  STOPSIGNAL signal
  # sets the system call signal that will be sent to the container to exit.
  # This signal can be a valid unsigned number that matches a position in the kernel’s syscall table, for instance 9, or a signal name in the format SIGNAME, for instance SIGKILL.



  HEALTHCHECK [OPTIONS] CMD command
  # options
  #   --interval=DURATION (default: 30s)
  #   --timeout=DURATION (default: 30s)
  #   --start-period=DURATION (default: 0s)
  #   --retries=N (default: 3)
  # check container health by running a command inside the container
  HEALTHCHECK NONE
  # disable any healthcheck inherited from the base image)



  # does not execute a shell so there is no var replacement
  # is REPLACED by whatever cmd is specified in `docker run ...`
  # If CMD is defined from the base image, setting ENTRYPOINT will reset CMD to an empty value. In this scenario, CMD must be defined in the current image to have a value.
  #
  CMD ["executable","param1","param2"]
  # (exec form, this is the preferred form)
  CMD ["param1","param2"]
  # (as default parameters to ENTRYPOINT)

  CMD command param1 param2
  # does var replacement
  # (shell form)


  EXPOSE <port> [<port>/<protocol>...]
  # specifies ports available in the container
  # still requires you to publish the ports
  # serves as contract documentation between the image builder and consumer
  # protocol tcp (default) | udp

  ONBUILD do this \
      && and this \
      && and this
  # adds to the image a trigger instruction to be executed at a later time, when the image is used as the base for another build.
  # The trigger will be executed in the context of the downstream build, as if it had been inserted immediately after the FROM instruction in the downstream Dockerfile.
  # may not trigger FROM or MAINTAINER instructions.


```

## docker cli

### docker inspect

- use cases
  - inspect a container to see the values of variables

```sh
  # retrieve all volumes associated with the container
    docker inspect CONTAINER_NAME|ID | grep volume

```

### docker rm

```sh
  # remove all associated volumes when removing the container
      docker rm -vf CONTAINER_NAME/UID

```

### docker cp

```sh
  # copy files from host into data container
      docker cp /some/file CONT_NAME:/place/here
```

### docker create

```sh
  # create a data container using an existing volume based on busybox
    docker create -v EXISTINGVOLUMENAME:/place/here/in/container \
        ---name CONT_NAME busybox
```

### docker tag

```sh
  # tag an image with id XXXX with repository noahehall and name poop with version 69
  docker tag XXXX noahehall/poop:69

```

### docker network

- types
  - bridge network
    - virtual network that connects multiple networks so that they can function as a single network
    - docker creates a bridge network to connect all of the running containers to the host computers network
  - single-host virtual networks
    - local virtual networks are used to provide container isolation
    - local to the machine where docker is installed
    - made up of routes between participating containers and the wider network where the host is attached
  - multi-host virtual networks
    - provide an overlay where any container on a participating host can have its on routable IP address from any other container in the network

```sh
  # create a user defined network
  # allows inter-container communication
  # but does note expose containers to the outside world
      docker network create SOME_NAME
      # connect a running container to SOME_NAME
      docker network connect SOME_NAME SOME_CONTAINER
      # run a container and connect it to the network
      docker run... --network SOME_NAME

```

### docker volume

- `create` create a volume
- `inspect` display d5tailed information volume(s)
- `ls` list volumes
- `prune` remove unused local volumes
- `rm` remove volume(s)

```sh
  # restore /backup/SOMEFILE.tar on host to new volume

      docker volume create VOLNAME
      docker run --rm \
          -v VOLNAME:/recover -v ~/backup:/backup \
          ubuntu bash -c “cd /recover && tar xvf /backup/SOMEFILE.tar”


  # remove all dangling volumes
      docker volume rm $(docker volume ls -f dangling=true -q)

  # create then remove volume 'myvol'

    docker volume create myvol
    docker volume rm myvol

```

### docker image

```sh

    # create image, login to docker hub, and push

        docker build -t username/repository
        docker login
        docker push username/repository


    # inspect the labels of an image

        docker image inspect --format='' myimage

```

### docker run

```sh
  # examples of options
  docker run --rm hello-world
    -p hostports:containerports # map hostports to containerports
    -P # publish all ports `EXPOSE` in the docker image
    --env <key>=<value> # set/replace env vars
    --name CONTAINER_NAME # useful when referencing the container in a network

  # use data container in some other continer
    docker run... \
        --volumes-from DATA_CONT_NAME

  # create a volume container
  # using a docker managed volume
      docker run... \
      --name poop --volume /some/dir

  # bind mount a read+write volume in a container
  # can also use `(PWD)`
      docker run... \
      -v ~/absolute/host/location:/absolute/container/location

  # bind mount a read only volume
  # notice the `:ro` at the end
      docker  run... \
          -v ~/blah:/blah:ro


  # copy image config into container
  # i.e. data packed volume

      docker run... \
          -v /config SOME_IMAGE /bin/sh -c 'cp /image/content /config'


  # provide additional tools to a running application
  # via the polymorphic container pattern

      # create a data packed container
          docker run --name tools...
      # copy over data from tools
          docker run --name app... \
              volumes-from tools...
      # inject new app
          docker exec app /tools/dir/new/program


  # backup a volumes data to the host

      mkdir ~/backup
      docker run --rm \
          --volumes-from VOLNAME -v ~/backup:/backup \
          ubuntu bash -c “cd /PATH/in/VOLNAME && tar cvf /backup/VOLNAME_BACKUP.tar .”

  # test file permissions in volume
  # create root-owned file on host
  # try to read file as nobody (unsuccessful)
  # try to read file as container root

      echo 'poop' > garbage
      chmod 600 garbage
      sudo chown root:root garbage
      docker run --rm -v "$(pwd)"/garbage:/test/garbage
      -u root busybox
```

### docker build

- build an image from a Dockerfile and a context
- the entire contet gets sent to the docker daemon for build
  - keep it as empty as possible

```sh

  # install the built image to name:tag
  # uses the dockerfile in the current dir, sets context to current dir
      docker build -t NAME:TAG .

  # use the current directory as the build context and read a Dockerfile from stdin.
  curl example.com/remote/Dockerfile | docker build -f - .



  -f /path/to/dockerfile
  # or just -t NAME:TAG
  -t host.com/username/repository:tag


  # suppress output and print image ID on success
  -q

  # provide/override ARG in dockerfiles
  --build-arg <varname>=<value>
  # take value from the environment
  --build-arg VARNAME

  # add other hosts into a container’s /etc/hosts file
  --add-host=docker:10.180.0.1 .

  # build a specific build stage
  --target BUILDENV

  # The built image can be used as a cache source for subsequent builds.
  # docker build --cache-from USERNAME/REPO .
  --build-arg BUILDKIT_INLINE_CACHE=1


  # Images to consider as cache sources
  --cache-from

  # do not use cache during build
  --no-cache

  # write the image ID to the file
  --iidfile


  # squash an images layers into a single layer
  # use multi-stage builds instead
  --squash


```

### docker exec

```sh
  # see what process 1 is, and the options passed to it
  docker exec -it CONTAINER_NAME ps aux

```

### docker compose

- options specified in the dockerfile are respected by default
  - you dont need to specify them again in the compose file
- YAML boolean values must be enclosed in quotes
- true, false, yes, no, on off
- some keys accept lists or mappings
- lists
  - `- key=value`
- mapping
  - `key: value`
- service definition
  - i.e. docker container create
  - if build + image are specified: value of image becomes image name
- ARG
  - build time arguments
  - value lookup: dockerfile -> compose file build -> env vars
- network definition
  - i.e. docker network create
- volume definition
  - i.e. docker volume create

```sh
  # build, (re)creates, starts, and attaches to containers for a service

  docker-compose up \
      -d #detached + only way to pass ARG to ENTRYPOINT exec form and overrides matching ARG in CMD

  version: '3.8'
  services:
    SOME_SERVICE_NAME:
      # skipped cuz f windows
      credential_spec
      # useful but skipped
      cap_add:
      - something
      cap_drop:
      - something
      cgroup_parent: something

      # u cannot scale a service beyond 1 container
      # if supplying a static container name
      container_name: poop


      # impacts compose up and stop
      # waits for the container to be started
      # not for the service to be ready
      depends_on:
          - servicenameX
          - servicenameX
      # grant access to pre-existing configs
      # mounted at /configname in container
      configs:
          - config1
          - configX
      # or long syntax
      configs:
          - source: configname
          target: /mount/path/configname
          uid: 'owner'
          gid: 'group'
          mode: 0444 # default
      # override the default cmd
      command: any linux cmd here
      command: ['or', 'as', 'a', 'list']

      image: SOME_NAME:SOME_TAG
      # string/object, but not both
      build: ./dir/with/dockerfile
      build:
          # path/url
          # path - containing dockerfile
          # url - git repository
          context: ./build/context
          # if specified, context required
          dockerfile: /path/some.dockerfile
          # accessible only during build process
          # must exist in dockerfile
          args:
              - ARGX=VALX
              - ARGY #take val from env

          # list of images the engine uses
          # for cache resolution
          cache_from:
              - alpine:latest
              - corp/web:123.4

          # metadata for the resulting image
          # best practice use reverse-DNS notation
          labels:
              - "com.SERVICENAME.LABELX=VALUE"
              - "com.SERVICENAME.LABEL=VALUE"

          # label this build stage
          # used for multi-stage builds
          target: prod

          # skipped
          SHM_SIZE: '2gb'
          # end build

```
