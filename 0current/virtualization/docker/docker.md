# docker

- my (2023) docker cheatsheet
- TODO:
  - finish copying stuff from the old docker cheatsheet
  - redo the buildkit notes, doesnt look like we finished and surely dont remember them
    - might also be in one of the other 100000 dockerfiles
  - redo the dockerfile notes: its been awhile since you took a hardlook at the reference
  - [alpine user handbook](https://docs.alpinelinux.org/user-handbook/0.1a/index.html)

## links

- [docker engine install](https://docs.docker.com/engine/install/ubuntu/)
- [docker docs](https://docs.docker.com/)
- [docker ref](https://docs.docker.com/reference/)
- [docker guides: overview](https://docs.docker.com/get-started/overview/)
- [docker dev best practices](https://docs.docker.com/develop/dev-best-practices/)
- [container runtimes](https://github.com/opencontainers/runtime-spec/blob/main/implementations.md)
- configuration
  - [env vars in compose file](https://docs.docker.com/compose/environment-variables/)
  - [reusing compose values via fragments](https://docs.docker.com/compose/compose-file/#fragments)
  - [add arbitrary values anywhere in compose via extensions](https://docs.docker.com/compose/compose-file/#extension)
  - [yaml anchors](https://yaml.org/spec/1.2-old/spec.html#id2765878)
  - [yaml merge (for maps only!)](https://yaml.org/type/merge.html)
- interwebs
  - [linux memory management](https://www.kernel.org/doc/gorman/html/understand/understand016.html)
  - [portainer and orchestrator wars](https://www.portainer.io/blog/orchestrator-wars-continue)
  - [linux ulimits](https://phoenixnap.com/kb/ulimit-linux-command)
  - [history of TTY](https://itsfoss.com/what-is-tty-in-linux/)
  - [/dev/shm and its practical usage](https://www.cyberciti.biz/tips/what-is-devshm-and-its-practical-usage.html)
  - [docker + buildkit](https://devopsspiral.com/articles/containers/modernize-image-builds/)
  - [docker arg, env explanation](https://vsupalov.com/docker-arg-env-variable-guide/)
  - [docker volumes in depth (oldy but goody)](https://container42.com/2014/11/03/docker-indepth-volumes/)
  - [get the dockerfile from a running container](https://forums.docker.com/t/how-can-i-view-the-dockerfile-in-an-image/5687)
  - [hella dockerfile examples](https://github.com/jessfraz/dockerfiles)
  - [k8s vs docker swarm](https://thenewstack.io/kubernetes-vs-docker-swarm-whats-the-difference/)
  - [pretty good docker cheetsheet](https://github.com/wsargent/docker-cheat-sheet)
  - [uid & gid in docker containers](https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf)
  - [vagrant vs docker](https://www.ctl.io/developers/blog/post/docker-vs-vagrant)
- integrations
  - [journalctl blog post](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs)
  - [systemctl blog post](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units)
- buildkit
  - [HLB + buildkit](https://openllb.github.io/hlb/)
  - [rootless mode](https://github.com/moby/buildkit/blob/master/docs/rootless.md)
  - [buildkit github](https://github.com/moby/buildkit)
  - [buildkit systemd example](https://github.com/moby/buildkit/tree/master/examples/systemd)
  - [buildkit bake](https://github.com/docker/buildx/tree/master/bake)
- obversability
- compose
  - [compose in prod](https://docs.docker.com/compose/production/)
  - [compose file spec](https://docs.docker.com/compose/compose-file/)
  - [compose build spec](https://docs.docker.com/compose/compose-file/build/)
  - [compose faq](https://docs.docker.com/compose/faq/)
  - [compose deploy spec](https://docs.docker.com/compose/compose-file/deploy/)
  - [compose spec github](https://github.com/compose-spec/compose-spec)
  - [compose v2 github](https://github.com/docker/compose)
- security
  - [docker scan](https://docs.docker.com/engine/scan/)
  - [capp_add/drop: linux capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html)
  - [cgroup_parent: linux control groups](https://man7.org/linux/man-pages/man7/cgroups.7.html)
- perf
  - [resource constraints](https://docs.docker.com/config/containers/resource_constraints/)
- images
  - [dockerfile reference](https://docs.docker.com/engine/reference/builder/)
  - [multi arch](https://docs.docker.com/build/building/multi-platform/)
  - [really good image name format post](https://github.com/opencontainers/.github/blob/master/docs/docs/introduction/digests.md)
  - [build](https://docs.docker.com/engine/reference/commandline/build/)
  - [buildkit backend](https://docs.docker.com/build/buildkit/)
  - [buildkit examples](https://github.com/moby/buildkit/tree/master/examples)
  - [buildkit pdf: build efficient images with buildkit](https://static.sched.com/hosted_files/kccnceu19/12/Building%20images%20%20efficiently%20and%20securely%20on%20Kubernetes%20with%20BuildKit.pdf)
  - [buildx github](https://github.com/docker/buildx)
  - [buildx](https://docs.docker.com/buildx/working-with-buildx/)
- networking
  - [rfc 1123: domain/hostnames](https://www.rfc-editor.org/rfc/rfc1123)
  - [docker container networking](https://docs.docker.com/config/containers/container-networking/)
  - [configure docker to use a proxy network](https://docs.docker.com/network/proxy/)
  - [docker network tutorial](https://docs.docker.com/network/network-tutorial-standalone)
- registry
  - [registry distribution github](https://github.com/distribution/distribution)
  - [registry docs](https://github.com/docker/docs/tree/main/registry)
  - [registry blog post](https://www.marcusturewicz.com/blog/build-and-publish-docker-images-with-github-packages/)
  - [publishing images via github action](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images)\
- swarm
  - [configs & secrets in swarm](https://docs.docker.com/engine/swarm/configs/)
  - [moby swarmkit](https://github.com/moby/swarmkit)
- docker engine (i.e. cli)
  - [docker run](https://docs.docker.com/engine/reference/commandline/run/)
- docker desktop for linux: breaks hashicorp, dont use it
  - [install](https://docs.docker.com/desktop/install/linux-install/)
  - [docs](https://docs.docker.com/desktop/faqs/linuxfaqs/#what-is-the-difference-between-docker-desktop-for-linux-and-docker-engine)
  - [docs](https://docs.docker.com/cloud/ecs-integration/)
- mac
  - [multi-arch images](https://medium.com/nttlabs/buildx-multiarch-2c6c2df00ca2)

## best practices / gotchas

- always set runtime resource constraints: by default a container has none
  - refrain from adjusting OOM priority via --oom-score-adj or --oom-kill-disable on containers, docker automatically adjusts the OOM priority of the daemon
    - however things like an edge/vault could have oom-score-adj to prefer killing other processes first
- public images should be atleast `linux/amd64` and `linux/arm64`
- pushing built services to registry
  - dynamically: by setting the image name during push
  - statically: e.g. in docker compose setting `image: use-this-name`
- only build upstream
  - downstream envs should use an image built and targeted for that environment
- never hardcode runtime values
- some values accept a list/map, prefer to use the map for readability
  - environment, labels, sysctls
- compose
  - see the anti-pattern list at the bottom of compose spec sh
- dockerfile
  - stable lines come before frequently changing lines
  - interception attacks during build
    - verifying the source: using https where possible;
    - verifying author: importing PGP keys with the full fingerprint in the Dockerfile to check signatures;
    - verifying the content: embedding checksums directly in the Dockerfile
  - Only the instructions RUN, COPY, ADD create layers.
  - data containers are so 1995, use named volumes instead
- support building all the images of your app together (or separately)
  - let the users define project specific reusable build flows
- build cmds should be envokable by by general-purpose cmd runners (e.g. make)
  - however, `docker buildx bake` permits executing in parallel

### gotchas

- generally when you apply a `name` to something
  - thats the external name outside of compose
  - should be set to an `${ENV_VAR}` for dynamic lookup at runtime
  - within compose you still reference things by the resource key
- generally all relative paths are from compose files parent dir
  - thus `../this` is a SIBLING to `thisDir/compose.yaml`
  - except:
    - build.dockerfile: is relative to context
    - build.context: is relative to the compose file (and not the parent dir)

## basics

### setup

- docker engine provides the daemon (dockerd) and cli (docker)

```sh
## install
# drop through this page: https://docs.docker.com/engine/install/ubuntu/#uninstall-old-versions
# you should use the apt method and move on with your life

## upgrade
# follow the install steps
```

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

## docker desktop for linux

- breaks hashicorp, dont use it; which means you wont be able to use docker ecs context
  - atleast at the time of this writing (somewhere in 2023)

## files and locations

### daemon.json

- /etc/docker/daemon.json
- generally all changes requires restarting the docker
- daemon and thus all running containers

```jsonc
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "experimental": true,
  "features": {
    "buildkit": true
  }
}
```

#### docker daemon

```sh
sudo systemctl disable docker.service
sudo systemctl disable containerd.service
sudo systemctl restart docker.service

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

### compose.yaml

- compose.yaml is the canonical name and overrides all other backward compatible file names
- options specified in the dockerfile are respected by default
  - you dont need to specify them again in the compose file
- YAML boolean values must be enclosed in quotes
  - true, false, yes, no, on off
- some keys accept lists or mappings
  - lists
    - `- key=value`
  - mapping
    - `key: value`
- decomposing compose files
  - merges always occur via the expanded form
  - sections and values therein are appended/overridden
  - simple attributes & maps are overridden
  - lists get merged by appending
  - relative paths resolve from the first compose files parent dir

#### vars, vars and vars (sans config, secrets)

- .env: env file available for use in the compose file
- env_file: adds/unsets vars available for use in the container
  - if relative, its to the compose file parent dir
  - all values are raw strings and not interpolated by docker (so quotes are included)
- environment: override values set in an .env/env_file
  - bool values must be quoted so their not interpolated by the yaml parser
- docker ARG, vs ENV vs .env
  - FYI: both ARG and ENV leave traces in the image
    - use configs/secrets instead
  - build time
    - ARG:
      - build time vars that serve as defaults for runtime vars
      - value lookup: dockerfile -> compose file build -> env vars
      - can export vars to a file so subsequent images can access them
  - runtime
    - ENV:
      - cli env vars take precedence over .env vars
      - can use ARG values for defaults
    - .env: prefer over cli vars to set defaults and allow the consumer to override via cli

```sh
# env_file
POOP= #empty string
BOOP=soup # raw string
DOOP="LOOP" # "LOOP" in container
COOP # unset

# services environment key
# interpolation rules same as bash
# map syntax
environment:
  poop: # retrieve at runtime or unset
  mybool: "true"

# list syntax
environment:
  - a=b
  - c
  - $var
  - ${var} # prefer this one
  - ${var:-use_this_if_unset_or_empty}
  - ${var:+if_set_use_this_instead}
  - ${var:?required if unset or empty err msg}
  - ${var?required if unset err msg}
  - ${VARIABLE:-${FOO}}
  - ${VARIABLE?$FOO}
  - ${VARIABLE:-${FOO:-default}}

# env vars
COMPOSE_PROJECT_NAME # name:

```

#### fragments and extensions

- enable increased reusability
- extensions
  - allowed at the root of service, volume, network, config and secret definitions.
- fragments
  - anchor resolution event precedes variable interpolation
    - i.e. you cant use variables in anchors/aliases

```sh

# define an x-logging extenstion with an &anchor fragment
x-logging: &default-logging
  options:
    max-size: "12m"
    max-file: "5"
  driver: json-file

services:
  frontend:
    image: awesome/webapp
    logging: *default-logging # reusing reuse it as is
  backend:
    image: awesome/database
    logging:
      <<: *default-logging # reuse it with merge
      poop: soup # so you can override a value
```

#### durations and bytes

```sh

############ bytes
# {integer}{unit}
100b|k|kb|(m|mb)|(g|gb)

############ durations
# {integer}{unit}
100us|ms|s|h
1h30m10s
```

#### compose spec

- services: each service is a machine
  - i.e. docker container create
  - if build + image are specified: value of image becomes image name
- networks: define inter-container communication
  - i.e. docker network create
  - establishes an IP route between containers within connected services
- volumes: ro/rw store and share persistent data as system mounts with global options
  - i.e. docker volume create
  - volumes live outside of the container (just a mounted filesystem) so changes here are reflected in running containers
  - volumes override anything mounted in the image (i.e. add, copy cmds) at the same location
- configs: read only files mounted into the container (sorta like volumes) for platform/runtime configuration
- secrets: read only sensitive data that should not be exposed
- name: project name to enable individual deployment of an application on a platform
  - groups and isolate resources, resource names are prefixed with this value
  - you can deploy the same compose on the same host just by setting the project name

```sh
############################### top level components
# version: '3.8'  # dont set a version, its ignored


############### project name
# is prefixed to container names, networks, etc
# all resources become ${PROJECT_NAME}_resourceName-1 # -1 if container name not set
# ^ unless: name attribute is specified or external set to true
name: ${COMPOSE_PROJECT_NAME}


############### volumes
# for persistent & reusable volumes across multiple containers
volumes:
  poop: # uses the default volume settings
  moop: # use this name inside of compose
    external: true # lifecycle managed outside of compose
    name: "${BOOP}" # only param valid for external volumes
  loop:
    labels:
    ai.nirv.desc: "loopa dooper ruper scooper mooper tooper dooper blooper"
    driver: soup
    driver_opts:
      size: "10GiB"
      type: "nfs"
      o: "addr=10.40.0.199,nolock,soft,rw"
      device: ":/docker/example"


############### networks
# enable service-to-service communication
# at runtime services.networks resolve to a specific ip
# this specifies the implementation details of the resolution process
networks:
  soupnet: {} # define with default settings
  poopnet:
    external: true # this networks lifecycle its outside the boundary of compose
    name: "${BOOP}"
  boobnet:
    labels:
      ai.nirv.desc: "my poop net"
    internal: true # this network is externally isolated
    name: "${BOOP}|host|none" # only way to use host|none networks
    attachable: true|false # allow external containers to attach & communicate
    enable_ipv6: false # why the hate with ipv6 anyway?
    driver: overlay|host|none
    driver_opts: # pass these to the driver
      poop: woop
      soup: loop
    ipam: # enable containers to specify ipv4|6_address
      driver: default
      config:
        - subnet: 172.28.0.0/16
          ip_range: 172.28.5.0/24
          gateway: 172.28.5.254
          aux_addresses:
            host1: 172.28.1.5
            host2: 172.28.1.6
            host3: 172.28.1.7
      options:
        foo: bar
        baz: "0"


############### configs
# mounted at /poopconf in containers that opt in
# enables adding dynamic config to a service
# ^ without having to rebuild an image
# must be owned by the compose operator
# ^ but can be overridden by service def
# must be world readable by default
# ^ but can be overridden by service def
configs:
  poopconf:
    name: "${BOOP}"
    external: true|false # lifecycle exists outside of compose
    file: ./poop.txt


############### secrets
# configs for sensitive data

secrets:
  privatepoop:
    name: "${BOOP}"
    environment: "POOP_ENV_VAR" # cant be used with file
    external: true|false # lifecycle exists outside of compose
    file: ./poop.txt # cant be used with environment


############### services
services:
  SERVICE_X:
    # definition
  SERVICE_Y:
    # definition


# security ###############
# also see runtime > deploy section
oom_kill_disable: true # disable kernel from kill service in the event of OOM
oom_score_adj: ? # relative to other processes, should this service be killed
init: true # run an init process (PID 1) that forwards signals & reaps processes
cap_add: # list of linux capabilities to enable
cap_drop: # list of linux capabilities to disable
cgroup_parent: poop # parent cgroup for this service
group_add: # the USER will be added as member of the group
  - poopgroup
# configures IPC isolation mode
ipc: "shareable" # this service is isolated, but other services can join
ipc: "service:poop" # join poops ipc
isolation: ? # specifies the services isolation technology
logging:
  driver: syslog
  syslog-address: "tcp://192.168.0.42:123"
platform: linux/amd64 # machine platform:
privileged: true|false # run with elevated privileges
security_opt: # overrides labeling scheme
  - label:user:USER
  - label:role:ROLE
stop_grace_period: 10s # how long to wait before SIGKILL is sent after SIGTERM/stop
stop_signal: SIGTERM | the stop signal
user: "poop" # override user set in image
userns_mode: "host" # set the user namespace


# perf ###############
# also see runtime > deploy section
cpu_count: 2 # usable cpus
cpu_percent: 50? # % of total available cpus
cpu_shares: 1024 # weighted cpu allocation relative to other containers
cpu_quota: ? # configure CFS period; only for linux, easier to just set cpu_count
cpu_rt_runtime: '400ms' # configure cpu allocation for realtime scheduler
cpu_rt_period: '1400us' # configure cpu allocatino for realtime scheduler
cpuset: 0-3|0,1 # range or set, define the explicit runtime cpu
# @see https://docs.docker.com/compose/compose-file/#blkio_config
blkio_config: # defines config options for block storage IO limits
mem_swappiness: 0-100 # % for the host kernal to swap out anon memory pages to disk
mem_swappiness: 0 # turns it off
mem_swappiness: 100 # sets all anonymouse pages as swappable
# allows the container to write excess mem reqs to disk when avail is exhausted
# requires deploy.limits.memory to also be set
memswap_limit: ?
shm_size ? # size of shared memory (/dev/shm) allowed by the service


# networking ###############
container_name: poop # cant scale pass 1 if set, see extends for workaround
hostname: a.b.c. # of the container: should be unique to avoid resolution issues
domainname: b.c. # of the container
mac_address: ? # sets the MAC address
extra_hosts: # added to /etc/hosts -> 123.123.123.123 poop
  - poop:123.123.123.123
network_mode: "none" # disable all container networking
network_mode: "host" # raw access to host network interface
network_mode: "service:poop" # access only to poop
# adding multiple networks seems to be an issue in my trials
networks: # reference top-level networks
  - default # join the default network
  - poopnet # join this network
  - boopnet: # join and configure network
    aliases:
      - myhostname # add another hostname for this container on the network
    # requires the network to have an ipam block subnet configuration
    ipv4_address: 123.123.123.123 # for this service
    ipv6_address: 123.123.123.123 # for this service
# port mapping CANT be used with network_mode: host
# ranges are useful when scaling services
# ^ to restrict specific services to specific ports
ports:
  - "127.0.0.1:5000-5010:5000-5010"
  # expose container port(s)
  - "3000"
  - "3000-3005"
  # map host 8080 to container 80 on all network interfaces
  - "8080:80"
  # specify protocol
  - "6060:6060/udp" # or tcp
  # expanded format
  - target: 80 # container
    host_ip: 127.0.0.1 # if unset binds to 0.0.0.0
    published: 8080 # host
    protocol: tcp
    mode: host
ulimits: # override defualt ulimits
  nprox: 65535
  nofile:
    soft: 20000
    hard: 40000


# file system ###############
read_only: false #
secrets:
  # short
  - somesecret # mounted at /run/secrets/somesecret
  # expanded
  - source: somesecret
    target: server.cert # mounted at /run/secrets/server.cert; defaults to source
    uid: "1234" # defaults to USER
    gid: "1234" # defaults to USER
    mode: 0440 # in octal; writable ignored; executable may be set
volumes:
  # short
  - "reusable:/path/in/cunt:ro" # "rw,ro,z,Z" z=shared with other services,Z=private
  - "`pwd`/host/path:/path/in/cunt"
  # expanded
  - type: volume|bind|tmpfs|npipe
    source: db-data|/host/path
    target: /cunt/path
    read_only: true|false
    bind:
      propagation: ? # propagation mode for bind mounts
      create_host_path: true|false # create host path if doesnt exist
      selinux: z|Z
    volume:
      nocopy: true|false # disable copying data from container when volume is created
    tmpfs:
      size: "in bytes"
      mode: 0440
    consistency: ? # consistency for mount
volumes_from: # mounts all volumes from another service/container
  - poopService:ro|rw
  - container:externalPoopContainer
configs:
  # short
    - someconfig # mounted at /someconfig
  # expanded
    - source: someconfig
    target: /mount/path/in/cunt/this.txt
    uid: "123" # defaults to USER
    gid: "321" # defaults to USER
    mode: 0440 # linux perm in octal; writable ignored; executable may be set
storage_opt: # various storage driver options
  size: '1G'
tmpfs: # mount a temp file system
  - /run
  - /tmp


# runtime ###############
working_dir: /usr/src/apps/nodejsapp # override the working directory set in the image
runtime: runc # specify an oci runtime
healthcheck: # overrides HEALTHCHECK defined in dockerfile
  test: ["CMD", "curl", "-f", "http://localhost"]
  test: ["CMD-SHELL", "curl -f http://localhost || exit 1"]
  test: curl -f https://localhost || exit 1 # same as CMD-SHELL
  interval: 1m30s
  timeout: 10s
  retries: 3
  start_period: 40s
  disable: true # disable healthcheck set by the image

# can be overridden by deploy > restart_policy
restart: "no|always|on-failure|unless-stopped"
# service is enabled when current profile matches
# services without a profies: are always active
profiles:
  - test

labels:
  com.docker.compose.project: "always set to the project name"
  com.docker.compose.service: "always set to the service name"
  ai.nirv.description: "poop"
  ai.nirv.emptyvalue: ""
labels
  - "ai.nirv.description=Poop"
  - "ai.nirv.emptyvalue"

# override the default image cmd
# this is whats passed to entrypoint (in image/compose)
command: any linux cmd here
command: ['or', 'as', 'a', 'list']

# override CMD and ENTRYPOINT set in image
entrypoint: /in/container/poop.sh

# set runtime specific requirements/metadata
# useful in dynamic/immutable infrastructure scenarios
# where you need to inform the orchestrator of optimal resource needs
deploy:
  labels: # same as everywhere else
  # service discovery: mode, replicas, and endpoint_mode
  ## global: 1 container per machine
  ## replicated: multiple instances with different ports i guess
  mode: replicated # replication modal;
  replicas: 2 # if replicated, total instances to run
  ## vip: use a virtual ip to find us
  ## dnsrr: use a dns name to find us
  endpoint_mode: vip|dnsrr # service discovery method
  # machine configuration
  placement:
    ## requirements
    constraints:
      disktype: ssd
    ## preferences
      datacenter: us-east
  # machine resources
  ## a range reservations --> limits
  ## cpus: % of cores
  ## memory: % of memory
  ## pids: limit
  ## devices: configuration
  resources:
    ## threshold: minimum resource allocations
    reservations:
      cpus: '0.25'
      memory: 20M
    ## prevention: restrictions placed on running container
    limits:
      cpus: '0.50'
      memory: 50M
      pids: 1
  # overrides service restart: definition
  restart_policy:
    condition: none|on-failure|any
    delay: 10s
    ## i.e. restart as many times until we have 5 failed windows (120s each)
    max_attempts: 5 # maximum failed windows,
    window: 120s # consider a restart failed
  # rollback strategy in event of failed update
  rollback_config:
    parallelism: 0 # rollback all containers simultaneously
    delay: 0s # time to wait between each group (defined by parallelism if > 0)
    failure_action: pause|continue # when rollback fails
    monitor: 0s # how long to monitor an update to detect a failure
    max_failure_ration: 0 # think this is a percentage
    order: stop-first|start-first # transition between old and new
  # update strategy
  update_config: # same options as rollback_config
    failure_action: continue|rollback|pause # adds rollback option



# buildtime ###############
# if the image is pulled from registry and if its rebuilt
pull_policy: "always|never|missing|build"
# pull the image if build isnt set
# else use the value for tagging and pushing to registry
image: redis
image: redis:5
image: redis@sha256:0ed5d5928d4737458944eb604cc8509e245c3e19d02ad83935398bc4b991aac7
image: library/redis
image: docker.io/library/redis
image: my_private.registry:5000/redis
image: someurl:5000/orgname/imagename:tagname

# create a service based off another one
# the base service cannot have depends_on, volumes_from, or circular references
extends:
  file: /path/to/other/compose.yml
  service: poop

# build a docker image from source and tag [and push] using the image: value
# string/object, but not both
build: ./dir/with/dockerfile/is/required
build:
    # either a git repo or path on disk
    # one of the few paths thats relative to the compose file
    # ^ and not the compose files parent
    context: ./build/context
    # if specified, context required
    # relative paths are relative to the context
    dockerfile: /path/some.dockerfile
    # accessible only during build process
    # must exist in dockerfile
    args:
      ARGX: VALX
      ARGY: #take val from env
    # ssh auth the operatorshould use
    # e.g. cloning private repo
    ## in dockerfile: RUN --mount=type=ssh,id=mysshkey git clone
    ssh:
      - default # mount the default ssh agent
      - mysshkey=~/.ssh/path/to/cert.pem


    # where to source previous build cache for rebuilds
    cache_from:
      - alpine:latest
      - type=local,src=path/to/cache
      - type=gha
    # where to save cache of this build
    cache_to:
      - user/app:cache
      - type=local,dest=path/to/cache
    # whether cache should be used, or rebuild all image layers
    no_cache: true|false
    # pull referenced images specified in the dockerfile `FROM`
    # even if they are available locally
    pull: true|false

    # same syntax as runtime extra_hosts
    # but adds it to the image
    # updates /etc/hosts -> 162.242.195.82  somehost
    extra_hosts:
      - "somehost:162.242.195.82"
    # platform specific
    isolation: ?

    # metadata for the resulting image
    labels:
        - "com.SERVICENAME.LABELX=VALUE"
        - "com.SERVICENAME.LABEL=VALUE"

    # size of shared memory available for building the image
    shmz_size: '4gb'

    # which Dockerfile stage to build
    target: prod

    # add the secret to the resulting image
    # same syntax as runtime def
    secrets:

    # add extra tags, ontop of whats defined in image:
    tags:
      - "myimage:mytag"
      - "registry/username/myrepos:my-other-tag"

    # multi-arch images
    platforms:
      - "linux/amd64"
      - "linux/arm64"


############################################################
# anti-patterns in well-architected services
############################################################
# specify the order in which a container joins a network
priority: 100

# waits for the container to be started
# not for the service to be ready
depends_on:
    - servicenameX
    - servicenameX

# creates an implicit depends_on
# link to services managed outside this compose spec
# prefer to set this up with normal dns/http integration vs encoding in compose
external_links:
  - redis
  - serviceName:alias

# creates an implicit depends_on
# define network links to another service
links:
  - db
  - serviceName:alias


#############################################
### TODOS: require a deeper dive
#############################################
credential_spec
device_cgroup_rules
devices
dns
dns_opt
dns_search
link_local_ips
pid # set the pid mode
stdin_open # allocated stdin, think this is just normal redirection
sysctls: # set kernel params
tty: # run with a TTY
```

### Dockerfile

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
  # syntax=docker/dockerfile:1.4
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

## compose cli

- see the `docker engine` section as compose cli is almost 1 to 1

## docker engine (cli)

### docker info

- display system wide host & docker info
- start your debugging here

### docker convert

- get the canonical specification for a container
- docker compose convert: converts a compose file to canonical form

### docker config

- manage docker configs

### docker inspect

- use cases
  - inspect a container to see the values of variables

```sh
  # retrieve all volumes associated with the container
    docker inspect CONTAINER_NAME|ID | grep volume

```

### docker rm

- remove docker containers

```sh
  # remove all associated volumes when removing the container
      docker rm -vf CONTAINER_NAME/UID

```

### docker rmi

- remove docker images

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
- a container can only start connected to a single network
  - you can assign additional networks after the container starts via `docker network connect`
- by default a container inherits the DNS settings of the host as defined in `/etc/resolv.conf`
  - even containers that use a custom network inherit the /etc/hosts of the HOST
  - `--hostname` is local only to the container
- three things you need to consinder
  - the containers name
  - the containers hostname
  - the containers dns record

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

  # -t host.com/repository/name:tag

  # install the built image to name:tag
  # uses the dockerfile in the current dir, sets context to current dir
      docker build -t NAME:TAG .

  # use the current directory as the build context and read a Dockerfile from stdin.
      curl example.com/remote/Dockerfile | docker build -f - .

  # build an image with a docker file in a specific dir
      docker build -t name:tag -f /path/to/dockerfile



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


  # squash an images layers into a single layer, useful for building prod images
  --squash

```

### docker exec

```sh
  # see what process 1 is, and the options passed to it
  docker exec -it CONTAINER_NAME ps aux

```

# TODO: copypasta from other notes

## docker on mac silicon

```sh
# install
# you can use docker desktop (google it), and move on with life
# you can install everything individually + rancher, @see https://dev.to/sergej_brazdeikis/install-docker-on-mac-m1-without-docker-desktop-k6o
# or you can do as I do, and install rancher via brew
brew install --cask rancher

# then open the docker app, start the docker desktop
# then docker run --rm hello-world should work

# if theres no arm64 image, run an intel image under emulation
## filesystem change notification (inotify) wont work

--platform linux/amd64
#^  or try linux/arm64
# https://github.com/docker/cli/issues/3286
# using buildx for multiarch images
## review which builders you have
docker buildx ls
## create a new builder
docker buildx create --name mybuilder
## switch to the new builder
docker buildx use mybuilder
## inspect your builder
docker buildx inspect --bootstrap

```

## BUILDKIT

[check this](https://blog.alexellis.io/building-containers-without-docker/)
[and this](https://medium.com/nttlabs/buildx-multiarch-2c6c2df00ca2)

- toolkit for converting source code to build artifacts

- composed of
  - `buildkitd` daemon
  - `buildctl` client

### BUILDKITD

- only available for linux

  - perfect for builds that dont require docker (e.g. in CI)

    - remember docker is slow, clunky, and fat

      ```sh
          # check here: https://github.com/moby/buildkit/releases

          # e.g. grab upstream binary, and put it in bin dir
          curl -sSLf https://github.com/moby/buildkit/releases/download/v0.8.1/buildkit-v0.8.1.linux-amd64.tar.gz | sudo tar -xz -C /usr/local/bin/ --strip-components=1

          # run the daemon
          buildkitd

      ```

- requires runc|crun, containerd
  - [crun](https://github.com/containers/crun)
    - i built with enable-shared to use the shared libraries

available backends
syntax = docker/dockerfile...
the default moby one
syntax = tonistiigi/pack
fork of buildpacks
get hte real one from mheroku/cloudfoundry
syntax = r2d4/mocker
apt-get in higly declarative yaml
syntax = po3rin/gocker
specific to golang
HLB
high level build language
[check this](https://openllb.github.io/hlb/)
[and ths](https://openllb.github.io/hlb/intro/quickstart/)
[and this](https://github.com/openllb/hlb/releases)

- setup systemd service files
  [check this](https://github.com/moby/buildkit/tree/master/examples/systemd)

[check this](https://towardsdatascience.com/its-time-to-say-goodbye-to-docker-5cfec8eff833)

### BUILDCTL

- client for buildkitd daemon

- available for lilnux
  --buildkitd-flags FLAGS
  add flags when starting the buildkitd daemon
  `DOCKER_BUILDKIT=1` docker build...
  enable buildkit
  but is auto enabled when you use buildx
  always use buildx
  so setting this env var is not necessary

### `moby buildx`

[and this](https://docs.docker.com/buildx/working-with-buildx/)

enabling
DOCKER_CLI_EXPERIMENTAL=enabled
or set experimental: enabled in ~/.docker/config.json
does not require `DOCKER_BUILDKIT=1`
it always builds with buildkit
building for multiple platforms
`docker buildx install`
sets docker default builder to that of buildx
i.e. aliases `docker build` to `docker buildx
`docker buildx uninstall`    removes the alias so you have to use`docker buildx blah`

when using other drivers, the method for outputting an image needs to be selected with --output.

`docker buildx OPTIONS PATH | URL | - - [options](https://github.com/docker/buildx#buildx-build-options-path--url---)

- check the`docker build` reference for futher documentation
  --allow []
  --build-arg []
  BUILDKIT_INLINE_CACHE=1
  trigger inline cache exporter
  --cache-from [] - external cache sources - (eg. user/app:cache, type=local,src=path/to/dir)
  --cache-to [] - Cache export destinations - (eg. user/app:cache, type=local,dest=path/to/dir)
  --file string (path to dockerfile)
  --load - i.e. --output=type=docker
  --push - i.e. --output=type=registery
  --output [] - Output destination - (format: type=local,dest=path)
  --platform [] - set target platform for build
  --secret [] - secret file to expose to the buildl - id=mysecret,src=local/secret
  --tag [] - name:tag
  --target string - set the target build stage to build

  `docker buildx create NAME`
  allows you to create new instances of isolated builders
  e.g. to get a scoped env for your CI builds
  even tho isolated builders still share the daemon
  create an instance for a set of remote nodes
  form a build farm
  `docker buildx inspect NAME`
  --bootstrap - see what runtime platforms your current builder instance supports

  `docker buildx use NAME`
  quickly switch between them
  `docker buildx stop NAME`
  `docker buildx rm NAME`
  `docker buildx ls NAME`
  list all builders

  `docker buildx build`
  --platform [linux|darwin]/[amd64|arm64]

  `docker buildx bake [options] [target...`
  [check this](https://github.com/docker/buildx#buildx-bake-options-target)
  [and this](https://github.com/tonistiigi/binfmt)

        supports building images form compose files
            - similar to composee build
            - but allt he services are built concurrently as part of a single request
        support for HCL/JSON files
            - better code reuse and different target groups
        build groups and targets
            target: single docker build invocation
                takes the same options as `dockere build`
            group: grouping of targets
            multiple files can include the same target and the final build options will be determined by merging them together

        options
            --file []
                build defintion file
                docker compose, json, or hcl ile
                multiple files can be listed and merged
                if no files listed, the following are parsed in cur dir
                    docker-compose.yml
                        .yaml
                    docker-bake.json
                        .override.json
                    docker-bake.hcl
                        .override.hcl
                        [check this](https://github.com/hashicorp/hcl/tree/hcl2)

            example HCL file definition
                group "default" {
                    targets = ["db", "webapp-dev"]
                }
                target "webapp-dev" {
                    dockerfile = "Dockerfile.webapp"
                    tags = ["docker.io/username/webapp"]
                }
                ....etc

                valid target fields: args, cache-from, cache-to, context, dockerfile, inherits, labels, no-cache, output, platform, pull, secrets, ssh, tags, target

                [can also use vars](https://github.com/docker/buildx#hcl-variables-and-functions)

  `docker buildx imagetools ...`
  [check this](https://github.com/docker/buildx#buildx-imagetools-create-options-source-source)
  cmds for working with manifest lists in the registry - useful for multiplatform build results
  inspect image
  Show details of image in the registry.
  create
  creates a new manifest list based on source manifests
  examples
  `docker buildx create --use --name MYBUILD CONTEXTNAME`
  create contexts with docker context
  `docker buildx create --append --name MYBUILD CONTEXTNAME`
  append another context to existing build
  `docker buildx build --platform linux/amd64,linux/arm64`
  build for two platforms (must already be specified with docker buildx build?)

`docker context`
give names for remote docker api endpoints

    `docker context ls`
        list contexts

`docker-container`
some kind of driver
when used with buildx
can build for multiple platforms
outputs a manifest list containing images foor all of the specified architectures
when used in `docker run` or `docker service` docker will pick the correct image based on the nodes platform

### multi-platform images

- use the QEMU emulation support in the kernel

  - buildkit autoloads the required arc binary if its registered in th `binfmt_misc` handler

    - binaries must be registered with the `fix_binary` flag with `binfmt_misc` on the host OS to work transparently inside containers
      - requires kernel >=4.8 and binfmt-support >=2.1.7
        `ls -al /proc/sys/fs/binfmt_misc/qemu-*`
    - see which binaries are currently configured

    `docker run --privileged --rm tonistiigi/binfmt --install all` - configure binfmt_misc support for additional platforms (all)

- build on multiple native nodes using the same builder instance

  - provides better supprt for more complicated cases not handled by qemu
  - better performance than qemu

- use a stage in dockerfile to cross-compile to different architectures

  - only if your project/language supports cross-compilation
    - maybe like JS and typescript?
      `-FROM --platform=BUILDFORTHISPLATFORM`
      build a binary for `--platform` using the native arch of the build node

- if using the `RUN` cmd in Dockerfiles
  - the builder requires runtime support for the specified platform (duh)
  - in a clean setup, you can only execute `RUN` cmds for your system architecture
    - unless your kernel supports (and is configured for) `binfmt_misc`
    - then buildx will pick those up automatically

### DOCKERFILES

override default frontend - must be first line in dockerfile
`#syntax=docker/dockerfile:1.2-labs - always set this to enable new dockerfile syntax - it should point to an image that contains the syntax - it should ALWAYS point to an external image so that
all users use the same syntax (and not depend on the default local one) - images are either -labs or -latest
[see this](https://github.com/moby/buildkit/blob/master/frontend/dockerfile/docs/syntax.md)

          RUN --network=none|host|default
          RUN --mount=type=bind (the default mount type)
          RUN --mount=type=cache
          RUN --mount=type=secret
          RUN --mount=type=ssh
          RUN --security=insecure|sandbox
          RUN --network=none|host|default

label a group of cmds as a build stage
also useful for labeling a commmon image
ARG ALPINEVER=3.6
only override this via docker build --build-arg
so that you dont invalidate cache
FROM ubuntu AS base
FROM alpine:${ALPINEVER} AS alpine

copy shit from a build stage, remote image, etc
`COPY --from=linuxkit/ca-certificates / /`
the from=imagename cannot contain vars
even tho the FROM poop can

build arguments
BUILDPLATFORM
TARGETPLATFORM
the current platform
[platform syntax](https://github.com/containerd/containerd/blob/v1.2.6/platforms/platforms.go#L63)

secrets in build
`docker build --secret id=mysecret,src=mysecret.txt .` - secret only for build - the final image will not have the path nor value of the secret - specifies - id (var) to hold secret value - src (path) to get value - echo 'WARMACHINEROX' > mysecret.txt - then in dockerfile # shows secret from default secret location:
`RUN --mount=type=secret,id=mysecret cat /run/secrets/mysecret` # shows secret from custom secret location:
`RUN --mount=type=secret,id=mysecret,dst=/foobar cat /foobar` # use required to force failure if no value is passed
`RUN --mount=type=secret,id=mysite.key,required <command-to-run>`

use ssh to access private data - <https://medium.com/@tonistiigi/build-secrets-and-ssh-forwarding-in-docker-18-09-ae8161d066> - <https://docs.docker.com/develop/develop-images/build_enhancements/#using-ssh-to-access-private-data-in-builds>

- multi stage build cross-compiling to different platforms
  FROM --platform=$BUILDPLATFORM golang:alpine AS build
  ARG TARGETPLATFORM
  ARG BUILDPLATFORM
  RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" > /log
  FROM alpine
  COPY --from=build /log /log
