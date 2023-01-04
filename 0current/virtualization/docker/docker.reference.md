# docker reference

- super long docker notes

- docker in action

  - jeff nickoloff
  - skipped
    - custom registries
      - adding basic auth at the registry level
      - registries in production
      - durable blob storage
      - hosted remote storage
      - internal remote storage with rados(ceph)
      - integrating a metadata cache (i.e. redis)
      - streamline blob transfer with storage middleware
      - integrating through notifications (webhooks)
    - really wish i wouldnt haved skipped these fkn sections

- Docker in practice
  - ian miell
  - aidan hobsan sayers
  -

## links

- [docker registry docs](https://docs.docker.com/registry/)
- [docker registry specs](https://docs.docker.com/registry/spec/)
- [yaml](http://yaml.org)
- [credential helper for docker login](https://docs.docker.com/engine/reference/commandline/login/#credentials-store)
- [unix permissions calculator](http://permissions-calculator.org/)
- [docker machine drivers](https://docs.docker.com/machine/drivers/)
- [docker-compose ref](https://docs.docker.com/compose/compose-file/)
- [docker-compose file version ref](https://docs.docker.com/compose/compose-file/compose-versioning/)
- [dockerfile ref](https://docs.docker.com/engine/reference/builder/)
- [docker object labels](https://docs.docker.com/config/labels-custom-metadata/)
- [multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/)
- [linux capabilities](https://linux-audit.com/linux-capabilities-101/)
- [docker configs](https://docs.docker.com/engine/swarm/configs/)
- [controlling service dependencies](https://docs.docker.com/compose/startup-order/)
- [docker swarm](https://docs.docker.com/engine/swarm/)
- [docker machien overview](https://docs.docker.com/machine/overview/)

## basics

- about
  - build, ship a d run any app anywhere in any location that has docker
  - launched in 2013
  - works with the OS to package, ship and run software
  - a tool for efficiently installing, removing, upgrading, distributing, trusting and managing software
- use cases

  - high level

    - replacing virtual machines (lol !)
    - prototyping software
    - packabinb software
    - enabling a microservices architecture
    - modeling networks
    - enabling full stackprdouctivity when offline
    - reducing debuging overhead
    - documenting software dependen cies and touchpoints
    - enabling continuous delivery

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
        - not directly reachable from the external network
        - docker uses kernel namespaces to create each virtual private interface
    - operating system network
      - container X virtual interface
      - docker bridge virtual interface (docker0)
        - routes connections to the external network and each container interfaces]
          - analagous to your home router
      - logical host interface
    - physical network interface
  - multi-host virtual networks
    - provide an overlay where any container on a paritcipating host can have its on routable IP address from any software dependencies
      - installed images can reuse existing dependencies
      - dependencies with different versions can coexist
    - improving portability
      - docker runs on all operating systems
      - thus, you can use software designed for linux on any other OS that supports docker
    - security
      - the scope of any security threat associated with running a particular application is limited to the scope of the application itself

- limitations

  - containers wont help much with the security of programs that have to run with full access to the machine

- Analogies

  - think of docker as a physical shipping container system
    - a box where you store and run an applkication and all of its dependencies
    - just as cranes, trucks, trains, etc work with shipping contaiiners
      - docker can run, copy and distribute containers with ease
    - docker images are the shipping containers

- docker engine and docker compose simplify the lives of developers and opreations personnel by abstracting the host from the contained environment
- docker machine and docker swarm help system admins and infrastructure engineers extend those abstactions to clutered environments

### terminology

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
- cgroup
  - help manage containers at runtime
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
  - a container specifically for providing limited interactive access to other containers
- polymorphic tool
  - a tool you can interact with in a consistent way bu tmay have several implementations that do different things
- CIDR
  - classless inter-domain routing
  - provides a way to specify an IP address and its routing prefix
- service portability
  - the idea
    - that a service could be running on any machine, in any container ina larger environment
    - that a system where any process might run anywhere is more robust than systems with strict locality contraints
- swap space
- virtual memory that extends onto disk
- SUID
  - an executable file with the SUID bit set will always execute as its owner
- SGID
  - an executable file with the SGId set will always execute as the group owner
- Blob
  - binary large oject
  - there are several popular blob storage services
- RADOS (ceph)
  - reliable autonomic distributed objet store
  - ceph is the software that you would use to build your own Azure storage or AWs s3-like distributed blob storage service
- daemon
  - a process that runs int he background r ather tha under the direct control fo the user
- server
  - a process that takes requests from a client and performs the actions required to fulfill the requests

### best practices

- use content-addressable images to ensure no untusted artifacts are deployed to containers
  - i.e. `image: name@sha256poop`
- secrets management
  - inject secrets
    - files by bind-mounting volumes that are on mounted tmpfs or ramdisk devices and setting limited file permissions
    - environment variables
- manage logs different from dev/stage/prod
  - prod generally needs reduced logging as to not overwhelm disk space
- disable debugging endpoints in prod

- harden your images

  - the process of shaping it in a way that will reduce the attack surface inside any docker containers based on it
  - minimize software contained in the image
  - enforce that images are based on a specific image
    - use the image digest
  - have a sensible default user
  - eliminate root user escalation

- inject a configuration file in the image

  - consumers can override the file
    - modify the included file directly
    - a bind-mount volume to override the file with a new one namespaces
  - common vars in the config
    - version
      - set the version of the running container
    - log
      - log location and verbosity at the very least
    - storage
      - where files/data are stored
    - auth
      - authentication and authorization
    - middleware
      - configure other dynamic aspects
    - network
      - poop
    - notifications
      - e.g. webhook style integration with other projects
    -

- remember the diff between entrypoint and cmd

  - entryoint is the script that will be executed when the container starts
    - use this for all sorts of things
    - e.g. validation
  - cmds
    - entrypoint not set | shell form used
      - the default cmd will be executed immediately
      - less flexible
    - entrypoint is set in exec form
      - the default cmd and its arguments will be passed to the entrypoint as parameters
      - more flexible

- dockerfiles

  - delay any RUN instructions that change file ownership until after all COPY/ADD cmds have been completed
  - use COPY over ADD
  - create the user and group as soon as possible
  - set the default user and group as late as possible
  - use the ENTRYPOINT for startup scripts if software requires it
    - startup assitance
    - supervision
    - monitoring
    - coordination with other in-container processes
    - validation
      - presumed links/alias
      - env vars
      - network access
      - network port availability
      - root file system mount params (read-write/only)
      - volumes
      - current user

- use base images to create common layers

  - do not set the default user in the base otherwise all implementations will not be able to update the image
  - however you should always create the user:group as soon as possible (just dont change to it)

- use TLS to secure your registry

- always use a credential helper with docker login

- use debian, busyboxy, alpine or scratch for base images

  - scratch
    - starting from an empty image
    - have no dependencies
    - your providing all the dependencies
  - debian
    - minimal footprint for a fully featured distro
    - about 125mb
  - alpine
    - seems to be the fav

- dont run docker as the root user on your system

  - eliminate this by
    - creating a `docker` group
    - setting that group as the owner of the docker socket
    - adding your user to that group

- all known container breakout tactics rely on having sytem admin privileges inside the container

  - eliminate this by either
    - set the USER instruction to a user and group with limited priveleges
    - change the user in the init script
  - consider the permissions and caapabilities required at runtime
    - any process that needs access to the system port range 1...1024
    - need to be started by a user with admin (very least CAP_NET_ADMIN) ptrivs
    -

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
      - programs can be configured to expect variable injection at container-creation
    - docker volumes

- build durable containers

  - use init processes, startup scripts and container restart policies and to build durable & reliable containers
  - automatically restart processes when they exit/fail
    - use exponential backoff
  - keep containers running with supervisor & startup processes
    - e.g. init, systemd, runit, upstart, supervisord, busybox init, daemon tools
      - init process valuation criteria
        - additional deps the program will bring into the image
        - file sizes
        - how the process passes signals to its child processes (if it even does!)
        - required user access
        - monitpring and restart functionality
          - backoff-on-restart is a bonus!
        - zombie process cleanup features
    - use a startup script that (at least) checks preconditions for successfully starting the contained software
    - define what programs to start, when to start them and what actions ot take when they stop
    - is the BEST WAY to
      - launch multiple programs
      - clean up orphaned processes
      - monitor processes
      - automatically restart any failed processes
    - use the init process as the entrypoint of your application-oriented docker container
    -

- use proper versioning for all image

  - all images should be tagged
  - stray away from reliying on `:latest` at all costs
  - define and tag versions at a level where users can depend on consistent contracts
  - i.e. the smallest uinit of the versioning system captures the smallest unit of contract iteration - thus whenever a change impacts the contract, create a new version!
  - the `:latest` tag should refer to the latest stable version, not the latest available version
  - in situations where software dependencies change, or software needs to be distribute don top of multiple bases, those deps should be included in the tagging scheme

    - the goal of an effective versioning scheme is to communicate clearly and provide adoption flexibility
    - identify contracts

- use images with publicly available dockerfiles

  - they are more trustworthy as you can inspect how they are built

- use volumes for persistent data and support tools

  - sinc any container can connect to an

- always use the strongest possible container network archetype

  - always harden the default bridge network if using it connect containers to the outside
  - generally every container involved in the network stack should be assigned a hostname
  - this permits you to decouple the container from its IP address and reroute messages without hardcoded IP addresses
  - internally
  - when programs running inside a container need to lookup their own ip address
  - when programs running inside a container must self-identify

    - use custom DNS servers (e.g. 8.8.8.8)
    - to provide consistency
    - working on a laptop and often move between internet service providers
    - your applications are slow to start and you need to handle IP address changes on service discovery
    - configure the docker daemon to disallow network connections between containers (icc=false)
      - this is the best practice in multi-tenant environments
      - it minimizes the points (i.e. attack surface) where an attacker might compromise other containers
      - you can explicitly permitted inter-container communication by link containers that require it

- set reasonable resource allowances for physical system resources like memory and CPU time

  - creates a strong isolated context for individual containers
  - dont share host memory (i.e. IPC host) unless you need to comunicate with a process that must run ont he host
  - instead share container memory specifically (i.e. IPC somecontainer)

- users

  - never use the root user inside the container, or a process that inherits the permissions of the root user
    - disable the root account or atleast set a passwd
  - be careful about which users can control the docker daemon
    - that person can effectively control the root account on your host
  - add the user and group as the first line in image building so that their IDs get assigned consistently, regardless of whatever deps get added
    - specifying the uid:gid helps alleviate reading, writing, and executing files across hosts & containers
      - however using numbers makes it less readable, and managenable
  - never use common/system-level uid/gids if its avoidable
  - drop user permissions as soon as possible
  - delete/unset all files with the SUID/SGID set at container creation time
    - these files are generally only needed during image build

- volumes

  - dont mount files/dirs in containers that arent required

- start with the most isolated container you can build and justify reasons for weakneing those restrictions

  - make sure every application is running as a user with limited permissions
  - limit the system capabilities of the browser
  - set limits on how much of the CPU and memory the application can use
  - specifically whitelist devices each program can access
  - use capabilities to tune program access to high level system services
    - e.g. cron, syslogd, dbus, ssh, docker
  - dont run low level system services in containers
    - things like devices/network stack, firewall, file-system management, device management, network managent
    - they most always require priv access
    - generally are core host concerns
  - exceptions

    - short running configuration containers

      - in an env where all deployments happen with docker images and containers
      - you can create a single privileged container to make changes to high/low level system services
      - but make sure you restrict access to this container

        ```sh
          # find all files with SUID set
          # use +2000 for SGID
          docker run...
            find / -perm 6000 -type -f

          # unset SUID and SGID for all appropriate files
          RUN for i in \
            $(find / -type -f\( -perm +6000 -o -perm +2000\)); \
            do chmod ug-s $1; done

        ```

### architecture

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
        - see `docker daemon`
    - container space [A...Z]
      - each container runs as a child process of the docker daemon
      - the container, and the child process runs in its own memory subspace of the user spoace
      - programs running inside a container can access only their own memory and resources as scoped by the container

- Virtualization vs Containerization
  - VM is a virtual machine
    - installed on top of the host OS, and runs a guest operating machine
    - emulates a computer, usually to run an operating system and applications
    - local VM
      - disk image livs on and VM execution happens on your computer
    - remote VM
      - VM disk image storage and VM execution happen somewhere else
  - Containers are enhanced linux jails
    - container based virtualization uses the kernel on the hosts OS to run multiple guests instances
    - each guest is called a container, which has
      - root file system
      - processes
      - memory
      - devices
      - netowork ports
      -

#### registries, indexes, repositories

##### repositories

- a named bucket of images
  - i.e. location/name pairs that point to set of specific layer Ids
  - allows multiple users to push and pull images from a central store using a RESTful API
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

##### registries and indexes

- a set of infrastructure components that simplify distributing docker images
- indexes
  - search engines that catalog repositories
- docker hub
  - the default registry and index with a website run by docker inc
  - push images to docker hub
  - make dockerfiles publicly available and utilize docker hubs continuous build system
- private docker registry
  - any registry that isnt publicaly available is considered private
  - a service that stores docker images
  - can be requested from any docker daemon that has access to the registry
  -

##### customizing registries

- the docker daemon wont connect to a registry without TLs unless that registry is running on localhost
- use cases

  - software that integrates with a docker registry may require a local instance to develop against
  - dev team might devploy their own central registry to share their work and streamline integrations
  - a company running one/more centralized registries that are backed by durable artifact storage
    - to control external image deps
    - managing deployment artifacts
  - distribution project

    - official image by docker for creating registries
    - production modifications
      - secrets management
        - TLS private key
        - SMTP username + password
        - redis secret
        - various remote storage account ID and key pairs
        - client state signature key
      - log tuning
      - debug endpoints
      - reliable storage
    - available storage backends

      - filesystem
      - azure
      - s3
      - rados

    - offers three mechaniisms for authentication
      - silly
        - completely insecure
        - only for dev/testing
      - token
        - uses JSON web tokens
        - enables the registry to validate that a caller has authenticated with a third-party service without any back-end communicatino
      - htpasswd
        - open source program that ships with apache web server utilities
        - used to generate encoded username and password pairs
          - the pw is encrypted with the bcrypt algo
          - pw are sent from the client to the registry unencrypted
        - should only be used with TLS
      - alternatives
        - skip the provided authentication mechanisms and implement your own at the reverse proxy layer (see example)

- personal registries

  - architecture
    - layer 1
      - local docker client
      - registry
      - local hd
  - use cases
    - dev/test purposes

- centralized

  - requires TLS for any registry not running on localhost
  - layer 1
    - docker clients
  - layer 2
    - proxy
    - registry
    - local hd
  - use cases
    - more than one person needs access over a network
      - ensure to add transport layer security and auth to protect against
        - snooping
        - corrupting image files
        - man-in-the-middle attacks

- centralized durable

  - centralized
  - but replace the local hd with a remote blob storage

- fast and scalable

  - layer 1
    - docker clients
  - layer 2
    - machine 1
      - proxy
      - registry
    - machine 2
      - metadata cache
  - layer 3
    - middleware-enhanced remote blob storage

- integrated
  - layer 1
    - docker clients
  - layer 2
    - machine 1
      - hook 1...X
    - machine 2
      - proxy
      - registry
    - machine 3
      - metadata cache
  - layer 3
    - middleware-enhanced remote blob storage
- registry API
  - the VV2 registry API is restful
  -          -

```sh
  # start a local registry
  # must add --insecure-registry HOSTNAME
  # to your daemon options on all hosts that are connecting to it
  docker run -d -p 5000:5000 \
    -v $HOME/registry:/var/lib/registry registry:2

```

##### public and private software distribution

- hosted registries
  - offer both public and private repositories with automated build tools
- private registry

  - enables you to hide and customize your image distribution infrastructure

- distribution methods (easiest -> most flexible)

  - hosted registry with public repos

    - e.g. docker hub, quay.io

  - hosted registry with private repos

    - e.g. docker hub, quay.io, tutum.co, gcr.io
    - tools for working with private repos are identical to those for working with public repos
      - except for docker pull/run to install an image requires authentication

  - private registries

    - utlizes local registry software
      - e.g. local priate network, orporate network, private cloud infrastructure
    - users can interact with a private registry the same as a public registry
    - the most flexible distribution method that involves docker registries
    - use cases

      - hard requirement on availability, longevity or secrecy
      - regional image caches
      - team-specific image distribution for locality/visbility
      - environmebt or deployment stage-specific image pools
      - corporate processes for approving images
      - longevity control of external images

    - docker registry image
      - available on the docker hub
      - can be used with all existing docker cmds
        - all push/pull actions occur between the docker daemon and the network API of the registry container
      - the registry uses a file system storage backend
      - configuration
        - version
          - specifies the configuration version
        - log
          - controls the logging output produced by the distribution project
        - storage
          - controls where and how images are stored and maintained
        - auth
          - controls in-registry authentication mechanisms
        - middleware
          - configure the storage, registry or repository middleware to use
        - reporting
          - configure reporting tools (e.g. bugsnag, newrelic)
        - http
          - specifies how the distribution should make itself available on the network
        - notifications
          - webhookk-style integration with other projects
        - redis
          - configuration for a redis cache

  - custom image distribution infrastructure

    - when you work with images as files, you use docker only to manage local images and create files
    - process
      - build a docker file to local iamge cache
      - docker save/export to .tar file
      - download/upload from sftp, http downloads, config management tools, blob storage, web server, email server, usb key
      - docker load/import .tar file into local iamge cache
      - docker run container

  - image source distributions
    - e.g. include a dockerfile with your project source code
    - when you distribute image sources instead of images
      - you cut out all the docker distribution workflow and rely soly on the docker image builder
      - youll have to build your workflow but without the help of docker dave, load, export or import cmds
      - producers need to determine how they will package their sources
      - consumers need to understand
        - how those sources are packaged
        - how to build an image from those sources

- distribution selection criteria
  - cost
    - lower cost is generally better
    - is the most flexible lever among selection criteria
  - visiblity
    - secret projectsinternel tools shoudl be difficult/impossible for unauthorized people to discover
  - transport speed/bandwidth overhead
    - file sizes and image installation speed vary greatly between
      - methods that leverage image layers, concurrent downloads
      - methods that use flat image files/deployment time image builds
    - high transport speeds/low installation latency is critical for systems that use just in time deployment to sservice synchronous requests
      - the opposite is true in development
  - longevity control
    - more of a business concern than technical
    - hosted distribution methods are subject to external companies business concernes
      - i.e. wtf if amazon shuts down? whats up with all our shiznit
  - availability
    - the ability to control the resolution of availablity issues with repositories
      - hosted solutions provide no availability control
        - i.e. you can report an issue, but its not up to you to schedule the fix of the issue
  - access control
    - protects your images from modification or access by unauthorized parties
    - one of the least flexible but most important selection crtieria
  - artifact integrity
    - trustworthiness and consistency of your files and images
    - violations include man-in-the-middle attacks, malicious/hacked registries
  - artifact confidentiality
    - common requirement for companies development trade secrets/proprietary software
  - requisite expertise
    - hosted solutions require low expertise
- automated builds
  - images that are built by the registry proiding using image sources that youve made available
    - generally has a higher degree of trust since the registry owner is building the images from source that can be peer-reviewed
  - general process
    - a host image repository and hosted git repository where image sources are published
    - a git webhook notifies the image repository that changes have been made, and a new build should be invoked
    - the image build process will invoke the defined docker build command, tag the new image according to configuration, then push it to the hosted image repository

```sh
  # create image, login to docker hub, and push
  docker build -t username/repository
  docker login
  docker push username/repository

  # setup a local registry based on the docker registry
  # all thats needed for running a personal registry
  # you have to explicitly state the URL when connecting
  # i.e. localhost:5000/somerepo/name
  # by default stores data in /var/lib/registry
  # within the container
  # remove the volume to use the default
  docker run -d -p 5000:5000 \
  -v "$(pwd)"/data:/tmp/registry-dev \
  --restart=always --name local-registry registry:2

  # tag an image with the local repository
  # then push the image to the local repository
  docker tag someimage:tag localhost:5000/poop:tag
  docker push localhost:5000/poop:tag

  # delete the local tag
  docker rmi localhost:5000/poop

  # pull image from local image cache
  docker pull localhost:5000/poop

  # remove local registry
  docker rm -vf local-registry



```

## docker ref

- docker cmd line

  - search the docker hub index and display results
  - issue cmds to the docker daemon

- docker daemon
  - should always be running
  - route cmds to containers
  - interfaces with each container space
  - is the parent process to all containers
    - controls access to docker on your machine
    - manages the state of containers and images
    - brokers interactions with the outside world

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

  # open the docker daemon to the world
  # e.g. to invoke docker remotely
  # shutdown docker dameon
  sudo docker stop
  # make docker available on tcp socket :2375
  # normally available on /var/run/docker.sock
  # anything that has access to your host can invoke docker
  # 0.0.0.0 makes docker listen on all public and private network interfaces
  # instead you should pick a specific IP
  sudo docker daemon -H tcp://0.0.0.0:2375
  # export the above as an alias
  # cannot be used if you require sudo to run docker
  export DOCKER_HOST=tcp://YOUR_HOST_IP:2375
  # connect to docker via the tcp socket
  docker -H tcp://HOST_IP:2375 SOME_CMD
```

### images

- a collection of filesystem layers and some metadata
  - used to created docker containers
- a file for starting containers
  - a bundled snapshot of all the files that should be available to programs running inside a container
  - stacks of layers constructed by traversing the layer dependency graph from some starting layer
  - installed images contain metadata
    - relationships between images
    - coommand history for an image
    - exposed ports
    - volume definitions
    - etc
  - each time an image is changed it receives a new UID
- things to know about every image

  - the base image and its installed software/deps
  - the entrypoint and default cmd
  - the configuration file (if any)

- when installing software with docker, your installing an image
- until an image is tagged
  - the only way to refer to it is by the UID
- building images from containers
  - create a container from an existing image
  - modify the file system of the container
    - i.e. why create a new image from a non-modified existing image?
    - new changes will be written to a new layer on the UFS for the container
  - commit the modify container to a new image file
    - you can now create containers
- CAIID
  - content addressable image identifer
  - any image that includes th digest component returned from `docker pull`

#### UFS

- union file system
- the UFS mount point provides the containers file system
- used to create mount points on a hosts file system that abstract the use of layers
- part of a critical set of tools that combine to create effective system isolation
  - MNT namespaces and chroot system call
- uses the copy-on-write pattern
  - makes implementing memory-mapped files (mmap() system call) difficult
  - essentially adds a new layer on top of an existing one while copying over everything that did not change
    - for things that did change, the new version is copied into the top layer
    - similarly you can go to any image in a layer
- impact on images
  - adding, changing and deleting files from the UFS each create new layers in the resulting image
    - image (layer) perspective
      - each change is single level in a parent-child hierarchy than can be traversed, cached, and reused
        - all modifications create a new 'top layer' to record the changes
      - each layer adds additional weight to the final image
    - container perspective
      - the files available to a container are the union of all of the layers in the linearge of the image the container was created from
      - programs running inside containers know nothing about layers
        - the filesystem operates as though its not running in a container/operating on an image
  - determins the relationship between layers and how layers relate to images, repositories and tags
  -

#### layers

- collections of changes made to a docker image, and the metadata describing those changes
- layers maintain parent/child relationships
- each layer contains
  - copies of all the file changes
  - metadata
    - layer ID
      - the top layer ID === image ID the container was created from
    - parent layer ID
    - the execution context of the container that the layer was created from
- layer architecture
  - top (child) layer
    - the writable layer
    - every write to this layer creates a new top layer, as each write is atomic
      - this is where image size increases, with each write
      - e.g.
        - if you install git (1 layer)
        - uninstall git (2 layer)
          - the size increases with the removal of git, because the image still contains the immutable layer 1
          - UFS will create a new 'delete' file on the top layer for each layer added when git was installed
            - this is why the size increases as the old files are still there in the parent layer even tho they are inaccessible as the 'delete' files override access
  - bottom (parent X) layers
    - read only layers
    - each parent layer is immutable, i.e. they can never be modified
      - makes it possible to share access to images instead of creating independent copies for every container
      -

### containers

- uses existing container engines (installed in linux) to provide consistent containers built according to best practices
  - any software run with docker is run inside a container
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

### volumes

- a host/containers directory tree is created by a set of mount points that describe how to piece together one/more file systems
- volume
  - mount point on the containers directory tree where a portion of the host directory tree has been mounted
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
  - when a compose service is rebuilt
    - the attached managed volumes are not removed
    - instead they are reattached
      - thus you are free to iterate (recreate) services without losing data
      -

#### volume types

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

#### volume patterns

- volume container

  - creating a container with an attached volume, stopping the container, then source that containers volume when creating other containers
    - when creating the container, you can issue a simple echo command to run it and exit immediately
  - a volume container doesnt need to be running because stopped containers maintain their volume references
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

#### volume sharing

- host-dependent sharing
  - when two/more containers all have a bind mount volume for a single known location on the host file system
- generalized sharing via `volumes-from`
  - copy the volumes from one/more containers to a new container
  - it will copy direct and transitive (children) volumes into the new container
  - `volumes-from` can be set multiple times to source multiple containers
  - issues
    - copied volumes always have th same mount point
      - you cannot change the the mount point into the new container
      - it will override any existing data at the mount point
      - you cannot change the permissions of the data in the new container
    -

### networking

- communicating between processes that may/not share the same local resources
- protocol
  - agreed upon standards
  - DNS
    - domain name system
    - protocol for mapping host names to IP addresses
    - enables clients to decouple from a dependency on a specific host IP and instead depend on whatever host is referred to by a known name (e.g. poop.com)
    - one of the most basic ways to change outbound communications is by creating names for IP addresses
- network
  - defined in a way that network interfaces are linked together
  - the links between interfaces determines an interfaces IP address
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

#### docker networking

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

#### docker container networking archetypes

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

#### docker bridge network

- routes connections to the external network and each container interfaces
  - analagous to your home router
  - all intefaces connected to docker0 are part of the same virtual subnet
    - i.e. they can talk to each other and communicate with the larger network via the docker0 interface
- modifying the bridge interface
  - define the address and subnet of the bridgeddefine the range of ip addresses that can be assigned to containers
  - define the maximum transmission unit (MTU)

#### local service discovery

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

### resources

- containers provide isolated process context, not 100% system virtualization
- Container isolation

  - PID namespace

    - the set of possible numbers that identify each process
    - process identifiers
    - process capabilities
    - each namespace is isolated, thus PIDs are scoped to namespaces
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
    - allows users in one namespace to be mapped to users in another
      - operates like the PID namespace
      - map user 1000 on host to user 2 in container
        - very useful for resolving file permissions when reading/writing to volumes
        -
    - docker starts containers as the root user inside that container by default
      - has full almost full priviledged access to the state of the container
      - any processes running as that user inherits those permissions
        - thus, if one of those processes are bugged, the entire system is bugged
    - root user use cases

      - for buiding images
      - at runtime when there are no other options
        - running system admin software that requires priviledged access

    - chroot()

  - controls the location of the file system root
  - used to make the root of the image file system the root in the containers context

  - cgroups
    - resource protection

#### resource allowances

- memory limits
  - lack of memory for a process results in failure
  - restrict the amount of memory that processes inside a container can use
    - doesnt guarantee the system provides this memory
- CPU processing time
  - two forms
    - limit relative CPU processing time
    - assign a container to a specific CPU set
  - lack of CPU time for a process results in degradation
  - a slow process may be worse than a failing process if its responsible for something important, e.g. makin cash money
  - are enforced only when there is a contention for time on the CPU
    - if there is no bottleneck, processes are permitted to consume up to the physical limit
  - context switch
    - the task of changing from executing one process to executing another
      - is expensive and may cause a noticeable impact on the performance of your system
      - try to limit context switching for critical process
      - i.e. limit distinct critical processes from executinng on the same CPU setbr

#### OS feature access & capabilities

- docker can adjust the feature (i.e. capabilities) authorization of processes within containers
  - whenever a presource - override resource limits
  - sys_rocess attempts to make a gated system call, the capabilities of htat process are checked for the required capability
  - to use linux capabilities
    - remove the `CAP_` prefixm, and lowercase the name
- default dropped capabilities
  - setpcap - modify process capabilities
  - sys_module - insert/remove kernel modules
  - sys_rawio - modify kernel memory
  - sys_pacct - configuree process accounting
  - sys_nice - modify priority processes
  - sys_resource - override resource limits
  - sys_time - modify system clock
  - sys_tty_config - configure TTY devices
  - audit_write - write the audit log
  - audit_control configure audit subsystem
  - mac_override - ignore kernel mac policy
  - mac_Admin - configure mac configuration
  - syslog - modify kernel print behavior
  - net_admin - configure the network
  - sys_admin - catchall for administrative functions
- default enabled capabilities
  - net_raw
    - recommended to be disabled...
- full privileges
  - privileged containers maintain their file system and network isolation but have access to shared memory, devices and possess full system capabilities
  - use cases
    - when you need to run a system admin task inside a container
    - running docker inside a container
    - when the root filesystem is read only
    - when installing software outside a container is disallowed (now you can install on host)
    - require direct access to a shell on host
    - run a program/tune the host OS

### LSM: container hardening tools

- LSM
  - linux security modules
    - e.g. AppArmor, SELinux
  - a framework that linux adopted to act as an interface between the operating systme and security providers
  - provide mandatory access control (MAC)
    - the system that defines access rules
    - replaces the standard discreetionary access control
      - i.e. file owners define access rules
- AppArmor

  - frequently preferred oer SELinux
    - works with file paths instead of labels
    - has a training mode to passively build provles based on obsered application behavior
    - easier to adopt and maintain for NOOOBS LIKE YUUU

- SELinux

  - a labeling system
  - context
    - a set of labels
    - applied to
      - every file and system object
      - every user and process
  - at runtime whe n a process attempts to interact with a file or system resource
    - the sets of labels are evaluated against a set of allowed rules
    - the result of that evaluation determines whnether the interactioin is allowed or blocked

- LXC (linux containers)
  - a container runtime provider
  - a tool that actually works with linux to create namespaces and all the components that go into building a container
    - replaced by libcontainer (current runtime provider for docker)
  - docker was originally built to use LXC
  - is more mature that libcontainer and provides many additioonal features
    - however you LOSE PORTABILITY!
      - phuck your portability
  - LXC configuration
  - seccomp-bpf
    - secure computing with system call filtering

```sh
  # limmit memory to 256 megabytes
  # can be b, k, m, g
  docker run...
    --memory 256m

  # set limits on a containers CPU share
  # relative to other containers on the host
  # 1024 vs 512, the first gets 2 CPU cycles for every one
  # i.e. share/total, or this/that
  docker run --cpu-shares 512...
  docker run --cpu-shares 1024...

  # mount webcam at video0 to container
  docker run --device /dev/video0:/dev/video0...

  # share IPC namespace
  # for containers to communicate via shared memory
  docker run --name producer...
  docker run --name consumer \
    --ipc container:producer...

  # share the IPC of the host
  # beware!!
  docker run --IPC host

  # get the default user name
  # if blank, its will run as the default root user
  # else the user was set in image/containerr start time
  docker inspect --f "{{.Config.User}}" name|id

  #  better way to get the default username
  docker run --entrypoint ""...
   whoami # returns the username
  docker run --entrypoint ""...
    id # return the uid, gid, and groups

  #  see all users defined in an image
  docker run...
    awk -F: '$0=$1' /etc/passwd

  # set default user and group
  docker run...
    --user unameOrId:gnameOrId

  # drop/add a capability
  docker run...
    --cap-drop net_raw
    --cap-add other_thing

  # full privileged container
  docker run...
    --privileged

  # start docker daemon with LXC enabled
  # instead of libcontainer
  docker -d --exec-driver=lxc

  # set the LXC configuration
  # requires daemon to have lxc driver enabled
  docker run...
    --lxc-config="lxc.cgroup.cpuset.cpus=0,1"...
```

### dockerfile

- a file that contains instructions for building an image
- instructions are followed by the docker image builder from top to bottom
- uses extensive caching to aid rapid development and iteration

- keys

  - can use var substitution

    - ENV, ADD, COPY, WORKDIR, VOLUME, EXPOSE, USER
    - use `docker inspect...` on the resulting image to verify vars are set correctly

  - basic instructions

    - FROM image:tag

      - i.e. sets the layer stack to start from a specific image
      - must be the first line in the dockerfile
      -

    - MAINTAINER "super@dope.com"

      - maintainer name and email for the image
      - helps people know whom to contact if theres a problem with the image

    - RUN any linux cmd

      - scoped to the distro youre using

    - ONBUILD

      - used to inject downstream build-time behavior
      - defines instructions to execute if the resulting image is used as a base image for naother build
        - the instructions are recorded in the resulting images metadata under `ContainerConfig.OnBuild`
          - view via `docker inspect`
        - e.g. to compile a program thats provided by a downstream layer
      - the upstream dockerfile will execute the ONBUILD instruction before running any other instructions
      - examples
        - registry.hub.docker.com/\_/python/
          - /golang/
          - /node/
      -

    - ENTRYPOINT

      - sets the executable to be run at container init
      - shell form
        - a shell cmd with whitespace-delimited arguments
        - executed as an argument to the default shell at runtime
          - i.e. `/bin/sh -c 'exec THECMD'`
          - all other args provided by the CMD isntruction/at runtime as extra arguments to docker run will be ignored
          -
        -
      - exec form
        - a string array where the first value is the cmd to eecute and the remaining values are arguments

    - `# this is a comment`

      - use comments liberally

    - ENV

      - set env vars for the resulting image and other dockerfile instructions
      - use ENV vars to also set dynamic values for later use by LABEL instructions
        - the value of the vars will be avaiable to processes running inside a container as well as recorded to the appropriate label

    - LABEL

      - define key=value pairs that are recordded as additional metadata fo ran image//container
      - use ENV vars

    - WORKDIR

      - set the default working directory
      - if the dir does not exist it will be created

    - EXPOSE

      - creates a layer that opens a specific port
      - the container will listen on all exposed ports

    - USER

      - sets the user and group for all further build steps and containers created from the image
      - while the user and group should be created as early as possible
        - this instruction should be used as LATE as possible

    - CMD

      - represents the default argument list for the entrypoint exec form

    - ARGS
      - variables only available during build
      - declared before FROM
        - are available in the FROM
        - sometimes available after FROM
          - you just need to redeclare the var without a value
      - declared after FROM
        - not available in the FROM
        - available after FROM

  - file system instructions

    - COPY

      - copy files from current context into the build container
      - any files copied will be copied with the file ownership set to root
        - the default regardless of how the default user is set before the copy instruction
        - de

    - ADD

      - differs from COPY in two ways
        - fetch remote sources if a URL is specified
        - extract files of any source determined to be an archive file (tar, gzip, etc)

    - VOLUME
      - defines the location int he file system and adds a volume definition to the image metadata
        - behaves similary to the --volume flag
      - defining volumes at image build time is more limiting than at runtime
        - cannot specify bind-mount volumes
        - cannot specify read-only volumes

- `.dockerignore`
  - file that informs the docker builder which files in the context directory to NOT copy into the build image

### docker compose

- tool for defining, launching and managing services via yaml files
- service
  - one/more replicas of a docker container
- use cases
  - build docker images
  - launch containerized applications as services
  - launch full systems of services
  - automate the build of an environment thats closely tied to specific image sources
  - manage the build phase for environments that use data-packed volume containers to inject environment configuration
- compose cmds should be executed in the directory the compose.yml file is located
- build context

  - directory sent to the docker daemon
  - all files not ignored in `.dockerignore` are available

- variable substitution
- shutting down the env
  - docker-compose stop|kill someservice
  - docker-compose rm -fv someservice

#### docker compose file structure

- options specified in the dockerfile are respected by default
  - you dont need to specify them again in the compose file
  - CMD, EXPOSE, VOLUME, ENV
- YAML boolean values must be enclosed in quotes

  - true, false, yes, no, on off

- some keys accept lists or mappings

  - lists
    - `- key=value`
  - mapping
    - `key: value`

- service definition

  - i.e. docker container create
  - if build + image are specified
    - value of image becomes image name
  - ARGS
    - build time arguments
    - value lookup
    - dockerfile -> compose file build -> env vars

- network definition
  - i.e. docker network create
- volume definition
  - i.e. docker volume create

#### docker compose scale

- set the number of containers to run for a service
- services will bind to the hosts ephemeral port 0
  - this allows the OS to bind to a random (in a predefined range) available port

#### docker compose up

- build, (re)creates, starts, and attaches to containers for a service
- options
  - detach, no-color, quiet-pull, no-deps, force-recreate, always-recreate-deps, no-recreate, no-build, no-start, build, abort-on-container-exit, timeout, renew-anon-volumes, remove-orphans, exit-code-from, scale

### dockerd

- controls the docker daemon without going through the docker client

```sh
  # move docker files to a specific location, e.g. a partition
  # to make it permanent you must configure this to run on startup
  dockerd -g /PATH/TO/DOCKER/HOME

```

### debugging

- should be a catchall for debugging docker/dockerd

```sh
  # use a traffic snooper (proxy) to inspect the api calls made from docker client to docker daemon
  # -v make output readable
  # fork ensures socat doesnt exact after the first request
  # & run in the background
  socat -v UNIX-LISTEN:/tmp/dockerapi.sock,fork \
    UNIX-CONNECT:/var/run/docker.sock &
  # now issue docker calls via the socat proxy
  docker -H unix:///tmp/dockerapi.sock ...



  # run docker terminal in a browser
  # start the docker dameon with an open port and CORS enabled
  # cant be used behind a proxy, must use an external IP addr
  dockerd --api-enabled-cors
  # get the code and server the files via httpserver
  git clone https://github.com/aidanhs/Docker-Terminal.git
  cd Docker-Terminal
  python2 -m SimpleHttpServer 8000


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
- compose
  - lists all services

```sh
  docker ps # show running
  docker ps -a # show all
  docker ps -q # only show the container UIDs
  docker ps -l # show the last created container
  CID=$(docker ps -l -q) # save the UID of the last created container

  # aggregated stream of all services
  docker-compose ps
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
    - the container will run in the background (as a daemon) without being attached to any input/output stream
    - a container UID will be returned
  - `--name`
    - assign a name to the container
  - `-i | --interactive`
    - keep STDIN open even if not attached
  - `-t | --tty`

    - allocate a pseudo-tty (i.e. virtual terminal)

  - `--pid`
    - PID namespace to use
  - `--cidfile`
    - save the container UID to a file
  - `--read-only`
    - mount the containers root filesystem as read only
  - `-e | --env`
    - set env variables
    - overrides variables set in the image
  - `--restart=POLICY`
    - restart policy to appply whena container exists
    - policies
      - `no` dont restart when the container exits
      - `always` always restart when the container exits
      - `unless-stopped` always restart, but remember explicitly stopping
      - `on-failure[:max-retry]` restart only on failure
  - `--rm`

    - automatically remove containers when they are stopped

  - resource limits/authorization

    - `--ipc`
      - IPC mode to use
      - share memory between processes on a single host but different containers
        - i.e. run programs that communicate with shared memory in different containers
        - creates the new container in the same IPC namespace as the target container
          - i.e. similar to --net flag
      - performs at memory speed
        - e.g. a producer and consumer reading & writing to a message queue
      - IPC - inter-process communication
      - use cases
        - when the latency associated with network/pipe-based IPC drags software performance below reqs
          - e.g. scientific computing/databases(e.g. postgress)
        -
    - `--kernel-memory`
      - kernel memory llimit
    - `--memory`
      - memory limit
    - `--memory-reservation`
      - memory soft limit
    - `--memory-swap`
      - swap limit equal to memory plus swap
      - pass `-1` to enable unlimited swap
    - `--memory-swappiness`
      - tune container memory swappiness (0...100)
    - `--cpuset-mems`

      - MEMs in which to allow execution
      - 0...3, (range) 0,1 (specific)

    - `--cpu-period`
      - limit CPU CFS (completely fair scheduler) period
    - `--cpu-quota`
      - limit CPU CFS( completely fair scheduler) quota
    - `--cpu-rt-period`
      - limit CPU real-time period in microseconds
    - `--cpu-rt-runtime`
      - limit CPU real-time runtime in microseconds
    - `--cpu-shares`
      - cpu shares (relative weight)
    - `--cpus`
      - number of CPUs
    - `--cpuset-cpus`

      - CPUs in which to allow esecution
      - 0...3 (range), 0,1 (specific)

    - `--blkio-weight-device`
      - block io weight (relative device weight)
    - `--device`
      - add a host device to the container
      - usecases
        - custom hardware/proprietary drives
          - instead of modifying host, you can mount in a container and use it
    - `--device-cgroup-rule`
      - add a rule to the cgroup allowed devices
    - `--device-read-bps`
      - limit read (bets per sec) rate from a device
    - `--device-read-iops`
      - limit read (io per sec) from a device
    - `--device-write-bps`
      - limit write (bytes per sec) rate to a device
    - `--device-write-iops`
      - limit write (io per sec) rate to a device

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
          - e.g. <http://wiki/> -> <http://wiki.google.com/>
        - setting up dev/test env hostnames that auto resolve without builcing env-aware software
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
      - map a host port to a containers port(s)
      - i.e. maps container network interface ports to host network interface ports
        - -p HOSTPORT:CONTAINERPORT
    - `-P | --publish-all`
      - publish all exposed ports to random host ports if no host port is specified
      - note the capital P
    - `--expose`

      - expose port/range of ports
      - binds exposed ports to ephemeral (i.e. dynamic) ports on the host
      - images maintain a lkiikst of ports that are exposed for simiplicity and as a hint to users where contained services are listening

    - `--link`
      - add a one-way (discovery, not communication), non-transitive network dependency to another container
        - non-transitive
          - containers do not inherit links from their dependencies
          - i.e. a > b > c, a is not linked to B even though B is link to C and A is linked to B
      - injects IP addresses into dependent containers
        - containers that arent running dont have IP addresses, thus an error will be thrown if linking to a non-running container
        - i.e. has to be built from new containers to existing containers
        - containers maintain IP address leases only when they are running
          - if a container is stopped/restarted, it will lose its IP lease and any linked containers will have stale data
      - this explicitely permits inter-container communication even if `icc=false`
      -
      - environment modifications when links are created
        - injects env variables prepended with the alias name
        - <ALIAS>_PORT_<PORT*#>*<TCP|UDP>_PORT=<PORT_#>
          - contains the port number
        - <ALIAS>_PORT_<PORT*#>*<TCP|UDP>ADDR=<IP>
          - contains the ip address of the container
        - <ALIAS>_PORT_<PORT*#>*<TCP|UDP>\_PROTO=<PROTO>
          - contains the protocol, either TCP/UDP
        - <ALIAS>_PORT_<PORT*#>*<TCP|UDP>=<URI>
          - contains the full url, e.g. tcp://172.17.0.23/3333
        - <ALIAS>\_NAME=/<container_name>/<alias_name>

  - security
    - `--privileged`
      - give extended privileges to this container
    - `--security-opt`
      - security options
      - label:user:<USERNAME>
        - set a SELinux user label
        - the name of the user you want to use for the label
      - label:role:<ROLE>
        - set a SELinux role label
        - the role you want to apply to processes in the container
      - label:type:<TYPE>
        - set a SELinux type label
        - the type name of the processes in the container
      - label:level:<TYPE>
        - set a SELinux level label
        - the level where processes in the container should run
        - specified as high-low pairs, or a single low level
      - label:disable
        - disable SELinux label confinement for a container
          -label:apparmor:<PROFILE>
          apply an AppArmor profile on the container

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


  # run and rm an interactive container
  # this should be your default
  docker run -it --rm...

  # running containers as daemons
  # d daemon
  # i ability to interact with your terminal
  docker run -id ...


  # run a container designed for multiple processes
  docker run -d phusion/baseimage


```

### docker exec

- run a cmd in a running container

```sh
  docker exec CONTAINER_NAME|ID CMD

  # run the ps cmd in the poop container
  docker exec poop ps

  # interatively bash your poop
  docker exec -it poop /bin/bash
```

### docker restart

- restart one/more containers

```sh
  docker restart CONTAINER_NAME|UID

  # wait 5 seconds before restarting the container
  docker restart -t 5 name|id

```

### docker logs

- fetch logs of container
- docker-compose logs
  - get aggregated stream of logs from all containers defined by a service

```sh
  docker logs CONTAINER_NAME|UID
  docker-compose logs SERVICENAME

  # follow the log output
  docker logs --f name|id

```

### docker history

- show the history (i.e. layers) of an image
  - abbreviated layer id
  - age of the layer
  - initial command of the creating container
  - total file size of that layer

```sh
  # review the layers of an image
  docker history imagename:sometag

```

### docker export

- export a containers filesystem as a tar archive
- this condenses all layers into one
- removes all metadata from the previous layer as if there is just a single layer
- use cases
  - somewhat useful when reimported with `docker import` as the file size is reduced to just that single layer size
  - trim/conceal an images history
  - working with technologies with few dependencies
  - creating minimalistic images
    - dont include operating system files
    - include programs that only require static linking (i.e. does not depend on dynamic files)
- gotchas
  - since the layers are removed, consumers do not get any reusability from any intermediary images that could have been reused
  - alternatives
    - create branches via the `docker tag` using an approprite layer from the source image

```sh
  # export an image as a single layer filesystem
  docker export -o some/file.tar containername|id

```

### docker import

- import the contents from a tarball to create a filesystem image

```sh
  # import a tarball with an arbitrary docker file cmds
  docker import -c "some dockerifle cmds" \
    someuser/imagename:tag < somefile.tar


```

### docker stop

- stop one/more running containers/machines/services

```sh
  docker stop CONTAINER_NAME|UID

  # wait 5 seconds before stopping the container(s)
  docker stop -t 5 name|id

  # stop containers whose name contain node
  docker stop $(docker ps -aq --filter name=node)
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

- stop one/more stoped containers/services/machines

```sh
  docker start CONTAINER_NAME|UID
```

### docker inspect

- return low-level information on docker objects
  - only includes the configuration the container was started with
    - if an init/boot script modifies the container, this will not be reflected
- `-f | --format` format the output using the given Go template
  - in general, you can do .Key.Key.key etc

```sh
  # returns true|false if container is running
  docker inspect --f "{{.State.Running}}" CONTAINER_NAME|UID

  # retrieve metadata for a machine
  # filter it to just the daemon IP
  docker-machine inspect host1
  docker-machine inspect --format "{{.Driver.IPAddress}}" host1


```

### docker rm

- remove one/more containers/services/machines

  -

```sh
  # force remove all containers (even if there running)
  # and their assocaited volumes
  docker rm -vf $(docker ps -a -q)

  # remove a specific container and associated volume
  docker rm -vf name_or_id

  docker-compose rm SERVICENAME
```

### docker rmi

- remove one/more images

```sh
  docker rmi IMAGE_NAME|UID

  # removing dangling docker images
  docker rmi $(docker images -f dangling=true -q)
```

### docker kill

- kill one/more containers/machines/services

### docker search

- search the docker hub for images

-

```sh
  docker search nginx

```

### docker pull

- install an image/pull a repository from a registry
- you can manually retrieve the Digest: value to support hardening images
- compose
  - pull images defined in a compose file
  - options
    - ignore-pull-failures, parallel, no-parallel, quiet, include-deps

```sh
  docker pull NAME|URL

  # pull
  docker-compose pull
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

- build an image from a Dockerfile and a context
- build specific flags
- `--compress`
  - compress the build content using gzip
- `--disable-content-trust`
  - skip image verification (default true)
- `--force-rm`
  - always remove intermediate containers
- `-f`
  - path to docker file
- `--network`
  - set set the networking mode for th eRUN instruction during build
  - default 'default'
- `--no-cache`
  - do not use cache when building the image
- `--rm`
  - remove intermediate containers after a successful build
  - default true
- `--security-opt`
  - security options
- `--target`

  - set the target build stage to build
  - `-t`
    - tag the image

- compose
  - options
    - compress, force-rm, no-cache, no-rm, pull, memory, build-arg, parallel, quiet

```sh
  # install the built image to name:tag
  # get the build instructions from the dockerfile in the current dir
  docker build -t NAME:TAG .

  # (re)build service(s)
  # dont specify any services to build all
   docker-compose build SERV1 SERV2
```

### docker images

- list installed images (for the active machine)
- ways to build docker images
  - docker commands / by hand
    - fire up a container with docker run and input the commands to create yoru image on the command line
    - create an image with docker commit
    - fire if your doingn proofs of concepts to see whether your isntallation process works
      - should keep notes to define the steps for creating your image via a more sopphisticated method
  - dockerfile
    - build from a known base image and specify the build with a limited set of simple commands
  - dockerfile and configuration management (CM) tool
    - same as dockerfile, but you hand over control of the build to a more sophisticated CM tool
    - useful when a dockerifle isnt enough for complex build steps
  - scratch mage and import a set of files
    - from an empty image, import a TAR file with the required files
    - useful if you want to import a set of self-contained files created elseware

```sh
  # show all images, including intermediate images
  docker images -a
```

### docker tag

- create a tag that refers to a source image
- used to create/copy an existing image

```sh
  # tag a source image
  docker tag myuser/myrepo:mytag sourceuser/sourceimage
```

### docker commit

- Create a new image from a containers changes
- the command you started the original container with will be commited with the new image
  - be sure the default command is relavant to the final image
- the new image will include
  - all environment variables
  - the working directory service the set of exposed ports
  - all volume definitons
  - the container entrypoint
  - command used to start the container and its arguments

```sh
  # save container with ID 123 to some repo
  docker commit 123 dev0/mynewimage

  # add your username and message to the commit
  # similar to git, always do this
  docker commit -a '@pooperscooper' -m 'phat ones' name|id

```

### docker diff

- inspect changes to files/irs on a containers UFS

```sh
  # inspect changes made to container
  # produces labeled output
  # A - file added
  # C - file changed
  # D - file deleted
  docker diff name|id
```

### docker attach

```sh
  # Attach local standard input, output, and error streams to a running container
  docker attach name|id
```

### docker login

- login to a docker registry

### docker port

- list port mappings or a specific mapping for the container

```sh

  # list port mappings for a container
  docker port CONTAINER_NAME|UID
```

### docker top

```sh
  # Display the running processes of a container
  docker top name|id

```

### docker swarm

- the cluster management and orchestration features embedded in the docker engine
- use cases
  - organizing containers you run across a fleet of machines
  - using the machine as the unit of deployment
    - i.e. each new piece of software gets its own fleet of machines that can be scaled on demand
  - scheduling distributed machines
    1. efficiency of resource usage
    2. the performance characteristis of each machines hardware
    3. network locality
    - scheduling
      - selecting a machine based on the above 3 factors
  - registration
    - advertising the availability of a service at a specific location
  - service discovery
    - resolving hte location of a named szervice

### docker swarm architecture

- cluster discovery subsystem

  - the heartbeat with
    - resource useage statistics
    - the local container list

- docker host/machine

  - can be a manager, workeer, or peform both roles

- swarm cluster is made up of two types of machines

  - swarm managers

    - multiple docker hosts which run in swarm mode and act as managers
      - manage membership and delegation
    - periodically pull lists of
      - registered swarm agents
      - their resource statistics
      - the container list from the cluster discovery subsystem
    - also runs the swarm agent but is in a different mode than regular nodes
    - expoose the Swarm API
      - used to control/inspect a swarm cluster
      - is an extension to the docker remote API
        - i.e. any docker client can connect directly to a swarm endpoint and treat a cluster as if it were a single machine
          - e.g. run docker compose on a swarm cluster as if it were a single machine

  - workers
    - responsible for running swarm services
    - swarm agents register with the cluster discovery subsystem via token:

- stack
  - layer 0
    - virtual hardware (hypervisor)
  - layer 1
    - operating system (linux)
  - layer 2
    - init process (PID 1)
  - layer 3
    - docker engine (port 2376)
    - swarm manager (port 3376)
    - swarm agent
    - container X...

```sh
  # create and active docker machine
  # create a swarm cluster in the active machine
  docker-machine create --driver virtualbox local
  eval "$(docker-machine env local)"
  docker run --rm swarm create # returns swarm cluster ID

  # create a swarm manager and connect to a peviously created swarm cluster id
  docker-machine create \
    --driver virtualbox \
    --swarm \
    --swarm-discovery token://SWARMID
    # indicates swarm manager
    # drop this for regular node
    --swarm-master \
    machine0-manager

  # create

```

# docker-machine

- create/teardown whole fleets of docker enabled hosts
- drivers
  - integrates docker machine with a virtual machine technology/cloud-based virtual computing provider

## docker-machine architecture

- docker CLI gets connection information from env vars
- docker-machine CLI sets environemnt ariables for connecting to specific machines
- docker-machine records the state of all the machines it manages in a set of local files in your home directory

```sh
  # poop
  docker-machine help

```

## docker-machine create

- create docker hosts (virtual machines)
- creates/imports an SSH private key file
  - can be used to authenticate as a privileged user on the machine over th e SSH protocol
  -

```sh
  # create 2 docker machines with arbitrary names
  docker-machine create --driver virtualbox host1
  docker-machine create --driver virtualbox host2
```

## docker-machine env

- display the cmds to setup the environment for the docker client
- attempts to
  - automatically detect the users shell
  - print commands to configure the envirnoment to connect to a specific machine

```sh
  # print cmds to activate mach1
  docker-machine env mach1

  # print cmds to activate mach1 with bash shell
  docker-machine env --shell bash mach1

  # activate mach1
  # all future docker cmds connect to this
  eval $(docker-machine env mach1)

  # activate mach0manager as a manager in a swarm cluster
  eval $(docker-machine env --swarm mach0manager)
```

## docker-machine active

````sh
  # print the active machine
  docker-machine active
``
## docker-machine ls
  - list machines
  - output
    - name
    - active
      - `*` indicates the machine your environment is configured to communicate with
      - any cmds issued with docker/compose will connect with the daemon on the active machine
    - driver
    - state
    - URL
      - where the docker daemon can be reached
    - swarm
    - docker version
    - erros


## docker-machine ip
  - get the IP address of a machine
```sh
  # get the ip of host1
  docker-machine ip host1
````

## docker-machine upgrade

- upgrade a machine to the latest version of docker
- process
  - stops the machine
  - downloads an updated version of software
  - restarts the machine
- use cases
  - perform rolling updates to your fleet

```sh
  docker-machine upgrade host1
```

## docker-machine ssh

- log into/run a cmd on a machine with SSH
- will authneticate with the target machine and bind your terminal to a shell on the machine

```sh
  # open a terminal session to host1
  docker-machine ssh host1

  # run a cmd in host1 then exit
  docker-machine ssh host1 "echo poop > time.file"
```

## docker-machine scp

- copy files between host/machine(s)

```sh
  # copy a file from host1 to host2
  docker-machine scp host1:dog.file host2:dog.file
```

# common scripts

```sh
  # exit if some var not set
  if [ ! -n "$SOME_VAR"]; then
    echo "wtf var not set biotch"
    exit 1
  fi

  # link a container, aliased at database
  # exit if link is not set
  # else execute CMD
  docker run...
    --link CONTAINER:databbase
  if [ -z ${DATABASE_PORT+x} ]
  then
    echo 'link alias database not set'
    exit 1
  else
    exec "$@" # run default cd
  fi

  # validate a container is linked to web alias
  # and has port 80 exposed
  # or WEB_HOST env var has been defined
  set -e
  if [ -n "$WEB_PORT_80_TCP" ]; then
    if [ -z "$WEB_HOOST" ]; then
      WEB_HOST='web'
    else
      echo >&2 '[WARN]: linked container web overridden by $WEB_HOST'
      echo >&2 "connecting to ($WEB_HOST)"
    fi
  fi
  if [ -z "$WEB_HOST" ]; then
    echo >&2 '[ERROR] requires linked container web or WEB_HOST env var'
    exit 1
  fi
  exec "$@" # run default cmd

```
