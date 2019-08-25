# books
  - docker in action
    - jeff nickoloff


# background
  - about
    - launched in 2013
    - works with the OS to package, ship and run software
    - a tool for efficiently installing, removing, upgrading, distributing, trusting and managing software
  - use cases
    - easier to install and run software distributed with software
    - managing large scale systems or data centers
    - creating build, test and deployment pipelines
    - for use with networking applications, databases, mail servers, terminal applications, etc.
    - managing software dependencies
      - installed images can reuse existing dependencies
      - dependencies with different versions can coexist
    - improving portability
      - docker runs on all operating systems
      - thus, you can use software designed for linux on any other OS that supports docker
    - security
      - the scope of any security threat associated with running a particular application is limited to the scope of the application itself
  - limitations
    - containers wont help much with the securiyt of programs that have to run with full access to the machine
  - Analogies
    - think of docker as a physical shipping container system
      - a box where you store and run an applkication and all of its dependencies
      - just as cranes, trucks, trains, etc work with shipping contaiiners
        - docker can run, copy and distribute containers with ease
      - docker images are the shipping containers

# terminology
  - jail
    - describes a modified runtime environment for a program that prevents that program from accessing protected services
  - container
    - aka jail
    - the goal has been expanded from preventing access to protected resources to isolating a process from all resources except where explicitly allowed
  - virtualization
    - hardware virtualization
      - aka virtual machines
      - provide virtual hardware on which an operating system and other programs can be installed
  - linux namespaces
    - help manage containers at runtime
    - wtf else?
  - cgroup
    - help manage containers at runtime
    - wtf else?
  - user space
    - memory alotted to run user software, e.g. cmdline programs and GUI things
  - abstraction
    - allows you to work with complicated things in simplified terms
    - lol the def is an abstraction of itself
  - detached container
    -
    -
  -


# best practices
  - docker generally runs as the root user on your system
    - eliminate this by
      - creating a `docker` group
      - setting that group as the owner of the docker socket
      - adding yoru user to that group
  - be sure to rotate/truncate container logs
    - the logs for a container will remain and grow as long as the container exists
    - log-term persistence i a problem for long-lived processes
  - utlizing PID namespaces that are automatically created for each container is a critical feature of Docker
    - without the PID namespace containers would share PIDs and lack isolation
    - thus DO NOT share the host PID namespace unless you know wtf your doing
    - when sharing PID namespaces
      - containers are able to determine what other processing are running inside the namespace
      - there will be collisions if programs utlize the same resources
        - two programs binding to the same port
        - two programs using the same dir/file location
        - two programs use different versions of some globally installed library
        - two programs use the same PID file
        - a second program installed modified an env var that another program uses


# architecture
  - docker is a commandline program, a background daemon, and a set of remote services that take a logistical approach to solving common software problems
    - installing, running, publishing and removing software
  - stack
    - without docker
      - user space
        - cmd line, software, etc
      - operating system
        - is the interface between all user programs and the hardware that the computer is running on
      - hardware
        - cpu
        - memory
        - IO
          - network interface
          - perisstent storage
          - devices
    - with docker
      - user space
        - docker CLI
          - users interface directly with the CLI
          -the CLI interfaces with the docker daemon
        - docker daemon
          - interfaces with each container space
          - is the parent process to all containers
      - container space [A...Z]
        - each container runs as a child process of the docker daemon
        - the container, and the child process runs in its own memory subspace of the user spoace
        - programs running inside a container can access only their own memory and resources as scoped by the container
  - Container isolation
    - PID namespace
      - the set of possible numbers that identify each process
      - each namespace is isolated, thus PIDs are scoped to namespace3s
      - process identifiers and capabilities
      - every running program (i.e. process) on a linux machine has a unique process identifier
      -
    - UTS namespace
      - host and domain name
    - MNT namespace
      - file system access and structure
    - IPC namespace
      - process communication over shared memory
    - NET namespace
      - network access and structure
    - USR namespace
      - user names and identifiers
    - chroot()
      - controls the location of the file system root
    - cgroups
      - resource protection


## images
  - when installing software with docekr, your installing an image
  - a bundled snapshot of all the files that should be available to programs running inside a container
  -
## cmd line

## daemon
  - should always be running
  -
## containers
  - uses existing container engines (installed in linux) to provide consistent containers built according to best practices
    - any software run with docker is run isnide a container
    - software running inside docker containers interface directly with the hosts linux kernel
  - containers started from the same image dont share changes to their file system
  - the running state of a container is directly tied to the state of a single running process inside the container



## registries and indexes
  - a set of infrastructure components that simplify distributing docker images


# workflows
  - agent
    - a container specifically for providing limited  interactive access to other containers
  -

## cmdline
### docker help
  - display information about the basic syntax for using the docker cmdline program as well as a complete list of cmds for your version of the program
```sh
  docker help
  docker help cp
  docker help run | grep OPTION

```

### docker ps
  - lists containers and metadata for each
  - container ID
  - image used
  - cmd executed in the container
  - time since the container was creaated
  - the duration that the container has been running
  - the network ports exposed by the container
  - the name of the container
  -
```sh
  docker ps # show running
  docker ps -a # show all
  docker ps -q # only show the container UIDs
  docker ps -l # show the last created container
  CID=$(docker ps -l -q) # save the UID of the last created container
```
### docker run
  - triggers a sequence that installs, runs and (possibly) stops a program inside a container
  - process
    - if the image is installed on the host OS, usez it
    - else
      - search docker hub and use it
      - download the image
      - install image layers
        - potentially repeating the process for each dependency on all parent layers
    - create a new container
    - run the container
    - return the container UID
      - its common to persist the UID to a variable for use with other cmds

  - options
    - -i and -t are used together for running interactive programs like a shell in an interactive container

    - `-d | --detached`
      - the container will run in the background without being attached to any input/output stream
      - a container UID will be returned
    - `--name`
      - assign a name to the container
    - `-i | --interactive`
      - keep STDIN open even if not attached
    - `-t | --tty`
      - allocate a pseudo-tty (i.e. virtual terminal)
    - `--link`
      - add link to another container
    - `--pid`
      - PID namespace to use
    - `--cidfile`
      - save the container UID to a file



```sh
  # hello world
  docker run dockerinaction/hello_worldz

  # link an nginx container named web
  # assign it the name web inside this container
  # interact with it via wget
  # then detach your terminal wiithout stopping the container
  docker run -i -t --link web:web ...
  wget -o - http://web:80
  ctrl p q


  # run and save the UID of a container
  # run a new container linked to the previous one
  WEB_CID=$(docker run ...)
  docker run ...
    --link $WEB_CID:web


```

### docker exec
  - run a cmd in a running container

```sh
  docker exec CONTAINER_NAME|ID CMD

  # run the ps cmd in the poop container
  docker exec poop ps
```

### docker restart
  - restart one/more containers
```sh
  docker restart CONTAINER_NAME|UID

  # wait 5 seconds before restarting the container
  docker restart -t 5 name|id

```

### docker logs
  - fetch the logs of a container

```sh
  docker logs CONTAINER_NAME|UID

  # follow the log output
  docker logs --f name|id

```

### docker stop
  - stop one/moire running containers

```sh
  docker stop CONTAINER_NAME|UID

  # wait 5 seconds before stopping the container(s)
  docker stop -t 5 name|id
```

### docker rename
  - rename a container
```sh
  docker rename OLD NEW
```

### docker create
  - create a new container
  - useful for retrieving the UID of a container for use in other cmds

```sh
  # create a container from the nginx image
  docker create nginx

  # save the container UID to a shell var
  CID=$(docker create nginx:latest)
```