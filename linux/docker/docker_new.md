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
    - managing ingle-host virtual networks
    - local virtual networks are used to provide container isolation
    - local to the machine where docker is installed
    - made up of routes between participating containers and the wider network where the host is attached
    - the connection between interfaces describe how exposed or isolated a specific network container is from the rest of the network
    - default stack
      - container X network
        - loopback interface
          - i.e. localhost/127.0.0.1
        - private (ethernet) interface
          - links to the virtual interface in the hosts namespace
          - assigned a unique private IP address
          - not directly reachable from the external network\
          - docker uses kernel namespaces to create each virtual private interface
      - operating system network
        - container X virtual interface
        - docker bridge virtual interface (docker0)
          - routes connections to the external network and each container interfaces]
            - analagous topp yur home router
        - logical host interface
      - physical network interface
  - multi-host virtual networks
    - provide an overlay where any container on a paritcipating host can have its on routable IP address from any otsoftware dependencies
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
    -


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
  - supervisor process
    - i.e. init process
    - a program thats used to launch and maintain the state of other programs
    - on a linux system, PID #1 is the init process
  - agent
    - a container specifically for providing limited  interactive access to other containers
  - polymorphic tool
    - a tool you can interact with in a consistent way bu tmay have several implementations that do different things
  - CIDR
    - classless inter-domain routing
    - provides a way to specify an IP address and its routing prefix


# best practices
  - docker generally runs as the root user on your system
    - eliminate this by
      - creating a `docker` group
      - setting that group as the owner of the docker socket
      - adding yoru user to that group

  - be sure to rotate/truncate container logs
    - the logs for a container will remain and grow as long as the container exists
    - log-term persistence i a problem for long-lived processes

  - utlizing the PID namespaces that are automatically created for each container is a critical feature of Docker
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

  - build environment-agnostic systems
    - minimize specializations of the computing environment
      - global-scoped dependencies, e.g. known host file system locations
      - hard-coded deployment architectures, e.g. env checks in code/configuration
      - data locality, e.g. data stored on a particular computer outside the deployment architecture
    - utlize the following
      - read-only file systems
        - then create exceptions via docker volumes for specific processes that need write capability
      - env var injection
        - key-value pairs that are made available to programs through their execution context
        - let you change a programs configuration without modifying any files/cmd used to start the program
        - programs can be configured to expect variable injection at container-creaation
      - docker volumes

  - build durable containers
    - automatically restart processes when they exit/fail
      - use exponential backoff
    - keep containers running with supervisor & startup processes
      - e.g. init, systemd, runit, upstart, supervisord
      - use a startup script that (at least) checks preconditions for successfully starting the contained software

  -  use proper versioning for all images
    -  all images should be tagged

  -  use images with publicly available dockerfiles
    -  they are more trustworthy as you can inspect how they are built
  -  use volumes for persistent data and support tools
    -  sinc any container can connect to an

  -  always use the strongest possible container network archetype
    -  always harden the default bridge network if using it connect containers to the outside
    -  generally every container involved in the network stack should be assigned a hostname
      -  this permits you to decouple the container from its IP address and reroute messages without hardcoded IP addresses
      -  internally
        -  when programs running inside a container need to lookup their own ip address
        -  when programs running inside a container must self-identify
    -  use custom DNS servers (e.g. 8.8.8.8)
      -  to provide consistency
      -  working on a laptop and often move between internet service providers
    - configure the docker daemon to disallow network connections between containers (icc=false)
      - this is the best practice in multi-tenant environments
      - it minimizes the points (i.e. attack surface) where an attacker might compromise other containers
      - you can explicitly permitted inter-container communication by link containers that require it



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
      - the linux kernel provides a namespace for the MNT system
      - when docker creates a container
        - the new container will have its own MNT namespace and a new mount point will be created for the container to the image
    - IPC namespace
      - process communication over shared memory
    - NET namespace
      - network access and structure
    - USR namespace
      - user names and identifiers
    - chroot()
      - controls the location of the file system root
      - used to make the root fo the image file hsytsem the root in the containers context
    - cgroups
      - resource protection


## repositories
  - bucket of images
  - have urls which are composed of
    - e.g. quay.io/dockerinaction/ch3_hello_registry:latest
    - the host where the image is located
      - qay.io
    - the user account that owns the image
      - dockerinaction
    - a short name
      - ch_hello_registry
    - a tag (latest is used by default)
      - latest
    -
  -


## docker cmd line
  - search the docker hub index and display results
  - issue cmds to the docker daemon


## daemon
  - should always be running
  - route cmds to containers


```sh
  # generally all changes requires restarting the docker
  # daemon and thus all running containers

  # disable inter-container communication
  # any traffic from one container will be blocked
  # by the host firewall except where explicitly permitted
  docker -d --icc=false...

  # define the ip addr of the  bridge network
  docker -d --bip "192.168.0.128"

  # define the ip addr and subnet range
  # of the bridge network
  # docker0 = 192.168.0.128
  # container ip range = 192.168.0.129...255
  docker -d --fixed-cdr "192.168.0.128/25"

  # set the maximum size of a packet
  # from default of 1500 to 1200
  docker -d -mtu 1200

  # set the docker bridge to a custom bridge
  # you need to define it first
  docker -d -b YOURBRIDGE_NAME
```
## images
  - a file for starting containers
    - a bundled snapshot of all the files that should be available to programs running inside a container
    - installed images contain metadata
      - relationships between images
      - coommand history for an image
      - exposed ports
      - volume definitions
      - etc
    - each time an image is changed it receives a new UID
  - when installing software with docker, your installing an image
  - until an image is tagged
    - the only way to refer to it is by the UID


### layers
  - images maintain parent/child relationships
  - the files aailable to a container are the union of all of the layers in the linearge of the image the container was created from
  - programs running inside containers know  nothing about layers
    - the filesystem operates as though its not running in a container/operating on an image
  - union file system
    - used to create mount points on a hosts file system that abstract the use of layers
    - part of a critical set of tools that combine to create effective system isolation
      - MNT namespaces aand chroot system call
    - uses the copy-on-write pattern
      - makes implementing memory-mapped files (mmap() system call) difficult
      - essentially adds a new layer on top of an existing one while copying over everything that did not change
        - think of git, where you can go to an revision
        - similarly you can go to any image in a layer


### dockerfiles
  - scripts for building images


## containers
  - uses existing container engines (installed in linux) to provide consistent containers built according to best practices
    - any software run with docker is run isnide a container
    - software running inside docker containers interface directly with the hosts linux kernel
  - containers started from the same image dont share changes to their file system
  - the running state of a container is directly tied to the state of a single running process inside the container
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


## volumes
  - a host/containers directory tree is created by a set of mount points that describe how to piece together one/more file  systems
  - volume
    - mount point on the containers dorectory tree where a portion of the host directory tree has been mounted
    - useful for working with persistent/shared data
    - tool for segmenting and sharing data that has a scope/life cycle independent of a single container
    - enable separation of concerns and create modularity for architectural components
  - use cases
    - database data for database software
    - log data for applications
    - input/output data for data processing applications
    - static content
    - support tools
  - characteristics
    - multiple containers can inherit volumes
      - all containers will point to the same location on the hosts directory tree
  - types
    - for virtualbox (docker machine / boot2docker) users
      - the host path specified in each value is relative to their virtual machine root file system and not the root of their host

    - bind mount volumes
      - use any user-specified directory/file on the host operating system
        - i.e. specify the location on the host where data is persisteed
      - use cases
        - when the host provides a file/dir that needs to be mounted into the container directory tree at a specified point
          - i.e. when you need to share from host to container
        - override/inject files/directories in the container
          - the file must exist on the host else a directory is assumed
      - issues
        - decrease container portability by tieing containers file systems to a specific host
        - create an opportunity for conflict with other containers
          - i.e. multiple databases sharing the same host location for database data

    - managed volumes
      - use locations that are created by the docker daemon in space controlled by the daemon
        - i.e. you have no control where the data is being saved on the host
      - use cases
        - decoupling volumes from specialized locations on the host file system
      - issues
        - its difficult to find the location of the managed volume on the host file system
          - thus no way to share/delete a managed volume manually
        - can only be identified by the containers that use them
  - patterns
    - volume container
      - creating a container with an attached volume, stopping the container, then source that containers volume when creating other containers
        - when creating the container, you can issue a simple echo command to run it and exit immediately
      - a volume container doesn t need to be running because stopped containers maintain their volume references
      - use cases
        - sharing a set of volumes with many containers
        - can categorize a set of volumes that fit a common use case
        - keeping a handle on data even in cases where a single container should have exclusive access to some data
        - can easily backup, restore and migrate the data out of the container
        - important to have a mount-point naming convention
          - so when containers source from the volume container, they have some indication where the volume will be mounted

    - data packed volume containers
      - using images to distribute static resources like configuration/code for use in containers created with other images
      - i.e. specify the volume in the Dockerfile, and copy static content into the volume at container creation time

    - polymorphic container pattern
      - provides some functionality thats easily substituted using volumes
      - you can make additional tools available via docker exec to run addtional processes in a running container
        - alternatively you can create a new layer in the image, but this doesnt make sense in two environments
          - development - where speed during iteration is vital
          - operational - make additional tools availble in an image that you had not anticipated when the image was built
      - e.g.
        - an image that contains nodejs and by default executes a cmd that runs /app/app.js
        - you can override /app/app.js at container creation time to do something else

  - sharing volumes
    - host-dependent sharing
      - when two/more containers all have a bind mount volume for a single known location on the host file system
    - generalized sharing via `volumes-from`
      - copy the volumes from one/more containers to a new container
      - it will copy direct and transitive  (children) volumes into the new container
      - `volumes-from` can be set multiple times to source multiple containers
      - issues
        - copied volumes always have th same mount point
          - you cannot change the the mount point into the new container
          - it will override any existing data at the mount point
          - you cannot change the permissions of the data in the new container
        -
```sh
  # create a volume container
  # uses a docker managed volume
  docker run...
    --name poop
    --volume /some/dir

  # inherit a volume from another container
  docker run...
    --volumes-from poop

  # bind mount a read+write volume in a container
  docker run...
    -v ~/absolute/host/location:/absolute/container/location

  # bind mount a read only volume
  docker  run...
    -v ~/blah:/blah:ro

  # retrieve all volumes associated with the container
  docker inspect CONTAINER_NAME|ID | grep volume

  # remove all associated volumes when removing the container
    docker rm -vf CONTAINER_NAME/UID


  # copy image config into container
  # i.e. data packed volume
  docker run...
    -v /config
    SOME_IMAGE /bin/sh -c 'cp /image/content /config'

  # provide additional tools to a running application
  # via the polymorphic container pattern
  docker run --name tools... # create a data packed container
  docker run --name app...
    volumes-from tools... # copy over data from tools
  docker exec app /tools/dir/new/program # inject new app
```


## networking
  - communicating between processes that may/not share the same local resources
  - protocol
    - agreed upon standards
    - DNS
      - domain name system
      - protocol for mapping host names to IP addresses
      - enables clients to decouple from a dependency on a specific host IP and instead depend on whatever host is referred to by a known name (e.g. poop.com)
      - one of the most basic ways to change outbound communications is by creating names for IP addresses
  - network
    - defined in the way that network interfaces are linked together
    - the links between itnerfaces determines an interfaces IP address
    - types
      - bridge network
        - virtual network that connects multiple networks so that they can function as a single network
  - network router
    - intermediate interfaces that sends messages between networks
    - types
      - local network router
      - regional network router
  - network interface
    - has an IP address and represents a location
    - messages are delivered to and received from network interfaces
    - single points in larger networks
    - ethernet inteface
      - connects to other interfaces and processes
    - loopback interface
      - not connected to any other interface
      - enables use of network protocols to communicate with other programs on the same computer
    - port
      - a recipient/sender of messages at a specific number at a specific IP address
      - defined as part of the Transmission Control Protocol (TCP)
    -


## docker networking
  - docker creates a bridge network to connect all of the running containers to the host computers network
  - single-host virtual networks
    - local virtual networks are used to provide container isolation
    - local to the machine where docker is installed
    - made up of routes between participating containers and the wider network where the host is attached
    - the connection between interfaces describe how exposed or isolated a specific network container is from the rest of the network
    - netowrk exposure/isolation is provided by the hosts firewall rules
    - default stack
      - container X network
        - loopback interface
        - private (ethernet) interface
          - links to the virtual interface in the hosts namespace
          - assigned a unique private IP address
          - not directly reachable from the external network\
          - docker uses kernel namespaces to create each virtual private interface
      - operating system network
        - container X virtual interface
        - docker bridge virtual interface (docker0)
        - logical host interface
      - physical network interface
  - multi-host virtual networks
    - provide an overlay where any container on a participating host can have its on routable IP address from any other container in the network


## docker container networking archetypes
  - define how a container interacts with other local containers and the hosts network
  - each archetype provides a different level of isolation\]]

  - closed containers
    - doesnt allow any network traffic
      - i.e. is not connected to the docker bridge (docker0) interface
      - container process can connect to/wait for (internal) connections on the loopback interface
      - nothing inside the container can connect to anything outside
      - nothing outside the container can connect to anything inside
    - processes only have access to the internal loopback interface
    - use cases
      - volume containers
      - backup jobs
      - offline batch processing
      - diagnostic tools
    -

  - bridged containers
    - the most customizable and should be hardened as a best practice
    - connected to docker0
    - arent accessible from the host network by default
      - by default provides no route from the hosts eternal interface to the container interface
    - containers are protected by the hosts firewall system
    - all local bridged containers are on the same bridge network and can communicate with each other by default
      - i.e. each container has a virtual inteface, and that interface is connectedd to the same docker bridge virtual interface (docker0)
    - use cases
      - containers with processes requiring network access
      -

  - joined containers
    - containers that share a common network stack
      - i.e. theres no isolation between between them
      - in the default network stack, all containers share the same virtual interface
    - docker provides access to the itnerfaces created for a specific container to another container
      - analagous to shared volumes
    - use cases
      - expand the use of a closed container by creating a new container connected to the closed containers interface
        - this permits the closed and joined container to share data over the network
      - permit two differnet programs to share data over the network
      - have network services that need to communicate but network access/service discovery mechanisms like DNS are unavailable
      - allow one process to monitor another through a protected channel
        - i.e. when one process needs to communicate with another on an unexposed port
      - use a single loopback interface for communication between programs in different containers
      - if one program is going to change the joined network stack and another program is going to use that modified network
      - when you need to monitor the network traffic for a pprogram in another container
    - issues
      - reintroduce port conflict concerns
        - i.e. since their sharinng the same network stack, any processes owning the same ports will not work
      -

  - open containers
    - have no network container (i.e. ethernet/loopback interface) and have full access to the hosts network and services
    - processes can bind to protected network ports less than 1024
      - generally you require sudo priviledges to access this range

### docker bridge network
  - routes connections to the external network and each container interfaces
    - analagous to your home router
    - all intefaces connected to docker0 are part of the same virtual subnet
      - i.e. they can talk to each other and communicate with the larger network via the docker0 interface
  - modifying the bridge interface
    - define the address and subnet of the bridgeddefine the range of ip addresses that can be assigned to containers
    - define the maximum transmission unit (MTU)


### local service discovery
  - alternatives
    - use a local dns server and a registration hook/agent when each container starts
    - write programs to scan the local network for IP addresses listening on known ports
  - the default docker way is to use links to connect containers
    - the linked container must be running
      - because containers hold their IP address only whe their running
  - adding a link to a container does three things
    - environment variables descri bing the target containers end point will be created
    - the link alias will be added to the DNS override list of the new container the IP address 0f the target container
    - if inter-container communication (ICC) has been disabled,
      - docker will add specific firewall rules to allow communication between linked containers
```sh
  # list all interfaces
    docker run --rm...
      ip addr

  # create a closed container
  docker run...
    --net none

  # create a bridged container
  docker run...
    --net bridge # can be ommitted, its the default

  # provide a hostname to a container
  # and then lookup its ip address
  docker run...
    --hostname poop
    alpine nslookup poop

  # set custom dns servers
  docker run...
    --dns 8.8.8.8 # googles dns server

  # set default dns-search
  # automatically appends poop.com to hostnames
  # without a top-level domain
  # e.g. timeto -> timeto.poop.com
  docker run...
    --dns-search poop.com

  # update the containers host file
  # add a map from poop to some IP addr
  # you now access it via http://poop/
  docker run...
    --add-host poop:127.0.0.2

  # bind container port to dynamic host port
  # on all host interfaces
  docker run...
    -p 1234

  # bind specific container (4321) and host (1234) port
  # on all host interfaces
  docker run...
    -p 1234:4321

  # bind specific container (4321) port to specific
  # host interface on a dynamic port
  docker run...
    -p 123.123.123.123:4321

  # bind specific container (4321) port to specific
  # host interface on specific port (1234)
  docker run...
    -p 123.123.123.123:1234:4321

  # share a containers network interface with another
  docker run --name owner...
    --net none... # closed container
  docker run...
    --net container:owner # joined container

  # create an open container
  docker run...
    --net host

```
## registries and indexes
  - a set of infrastructure components that simplify distributing docker images
  - indexes
    - search engines that catalog repositories
  - docker hub
    - the default registry and index with a website run by docker inc
    - push images to docker hub
    - make dockerfiles publicly available and utilize docker hubs continuous build system


# examples
## docker help
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
  - docker run creates a NEW CONTAINER each time
    - use docker start to run an existing container

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
      - add a one-way network dependency to another container
      - injects IP addresses into dependent containers
        - containers that arent running dont have IP addresses, thus an error will be thrown if linking to a non-running container
      - this explicitely permits inter-container communication even if `icc=false`
      - injects env variables prepended with the alias name
        - e.g. --link container:ALIAS
          - ALIAS_PORT, ALIAS_BLAH
    - `--pid`
      - PID namespace to use
    - `--cidfile`
      - save the container UID to a file
    - `--read-only`
      - mount the containers root filesystem as read only
    - `-e | --env`
      - set env variables
      - overrides variables set in the image
    - `--restart`
      - restart policy to appply whena  container exists
    - `--rm`
      - automatically remove containers when they are stopped

    - networking
      - `-h | --hostname`
        - set the containers hostname

      - `--dns`
        - set custom DNS servers
        - must be an IP address
        - can also be set when you startup the docker daemon that runs in the background providing it all containers by default

      - `--dns-search`
        - set custom DNS
        - specify a dns search documentationlike a defrault host name suffic
        - any hostnamaes that do not have a top-level domain (e.g. .com) will be searched for with the specified suffix appended
        - use cases
          - shortcut names for internal corporate networks
            - e.g. http://wiki/ -> http://wiki.google.com/
          - setting up dev/test env  hostnames that auto resolve without builcing env-aware software
          - can be set with setting up the docker daemon to provide defaults for every container created

      - `--dns-option`
        - set DNS options

      - `--add-host`
        - override the DNS system (i.e. update /etc/hosts)
        - add a custom host-to-ip mapping (host:ip)
        - use cases
          - providing specific name mappings for individual containers is the most fine-grained customization possible
          - block targeted host names by mapping them to a known ip address like 127.0.0.1
          - route traffic for a particular destination through a proxy
          - often used to route unsecure traffic through secure channels like an SSH tunnel

      - `-p | --publish`
        - publish a containers port(s) to the host
        - i.e. maps container network interface ports to host network interface ports
      - `-P | --publish-all`
        - publish all exposed ports to random host ports if no host port is specified
        - note the capital P
      - `--expose`
        - expose  port/range of ports
        - binds exposed ports to ephemeral (i.e. dynamic) ports on the host
        - images maintain a lkiikst of ports that are exposed for simiplicity and as a hint to users where contained services are listening

```sh
  # hello world
  docker run dockerinaction/hello_worldz

  # link an nginx container named web
  # assign it the name web inside this container
  # interact with it via wget
  # then detach your terminal wiithout stopping the container
  docker run -it...
   --link web:web
  wget -o - http://web:80
  ctrl p q


  # run and save the UID of a container
  # run a new container linked to the previous one
  # connect via http://web:SOME_PORT/
  # port is optional
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

### docker start
  - stop one/more stopped containers
```sh
  docker start CONTAINER_NAME|UID
```

### docker inspect
  - return low-level information on docker objects
  - `-f | --format` format the output using the given Go template
```sh
  # returns true|false if container is running
  docker inspect --f "{{.State.Running}}" CONTAINER_NAME|UID

```

### docker rm
  - remove one/more containers/links
  - `-f`
    - force removal of a container using SIGKILL
  - `-l`
    - remove the specified link
  - `-v`
    - remove the volumes assocaited with a container
```sh
  # remove all containers and their assocaited volumes
  docker rm -vf $(docker ps -a -q)
```

### docker rmi
  - remove one/more images

```sh
  docker rmi IMAGE_NAME|UID
```

### docker kill
  - kill one/more containers

### docker search
  - search the docker hub for images
  -

```sh
  docker search nginx

```

### docker pull
  - install an image/pull a repository from a registry
```sh
  docker pull NAME|URL

```

### docker save
  - save one/more images to a tar archive
```sh
  docker save -o FILENAME.tar IMAGE_NAME|UID
```
### docker load
  - load an image from a tar archive/STDIN
```sh
  # read from a tar archive file, isntead of STDIN
  docker load -i FILENAME.tar
```

### docker build
  - build an image from a Dockerfile
```sh
  # install the built image to name:tag
  # get the build instructions from the docker file
  docker build -t NAME:TAG DOCKERFILE
```

### docker images
  - list installed images
```sh
  # show all images, including intermediate images
  docker images -a
```
### docker login
  - login to a docker registry


### docker port
  - list port mappings or a specific mapping for the container
```sh

  # list port mappings for a container
  docker port CONTAINER_NAME|UID
```


# init scripts

```sh
  if [ ! -n "$SOME_VAR"]; then
    echo "wtf var not set biotch"
    exit 1
  fi
```
