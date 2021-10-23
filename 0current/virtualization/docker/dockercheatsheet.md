# TLDR;

- so i dont have to browse through `./docker.md` huge file

# links 
-[dockerfile env](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#env)
-[dockerfile search for official images](https://github.com/docker-libraryhttps://github.com/docker-library)
- [official docker image library](https://github.com/docker-library/official-images)
- [best practices](https://github.com/docker/docker.github.io/blob/master/develop/develop-images/dockerfile_best-practices.md)
- [tini: init for containers](https://github.com/krallin/tini)
- [buildx:  Docker CLI plugin for extended build capabilities with BuildKit](https://github.com/docker/buildx#documentation)
- [buildx + buildkit tut](https://medium.com/titansoft-engineering/docker-build-cache-sharing-on-multi-hosts-with-buildkit-and-buildx-eb8f7005918e)
- [docker file validator](https://github.com/docker-library/dockerfile-validator)
- [docker file linter](https://github.com/hadolint/hadolint)
    + [online version](https://hadolint.github.io/hadolint/)
+ [alpine pkg management](https://wiki.alpinelinux.org/wiki/Alpine_Linux_package_management)


# general 
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

```sh
    docker help
    docker help cp
    docker help run | grep OPTION

   
    docker ps # show running
    docker ps -a # show all
    docker ps -q # only show the container UIDs
    docker ps -l # show the last created container
    CID=$(docker ps -l -q) # save the UID of the last created container

    # aggregated stream of all services
    docker-compose ps 


    # naming images 
        # IMAGE_NAME format: <host><username>/<repo-name>[:<tag>]
        # during build
            docker build -t IMAGE_NAME
        # re-tagging an existing local image 
            docker tag <existing-image> IMAGE_NAME
        # commit current state of a container
            docker commit <existing-container> IMAGE_NAME
```


## general cmds for dockerfile, docker-compose, etc 
- $variable_name | ${variable_name} | ${variable:-default_value} | ${variable:+if_set_use_this_else_''}
    + ADD
    + COPY
    + ENV
    + EXPOSE
    + FROM
    + LABEL
    + STOPSIGNAL
    + USER
    + VOLUME
    + WORKDIR
    + ONBUILD

- best practices 
    + stable lines come before frequently changing lines
    + interception attacks during build
        * verifying the source: using https where possible; 
        * verifying author: importing PGP keys with the full fingerprint in the Dockerfile to check signatures; 
        * verifying the content: embedding checksums directly in the Dockerfile
    + Only the instructions RUN, COPY, ADD create layers.


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
# docker run 

```sh
    docker run ....

    -p map hostposrts:containerports
    -P publish all ports `EXPOSE` in the docker image
    #set/replace env vars 
    --env <key>=<value> 
    # you can use it when referencing the container within a Docker network
    --name CONTAINER_NAME
```


# docker build 
- [docs](https://docs.docker.com/engine/reference/commandline/build/)
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

# docker exec 

```sh 
    # see what process 1 is, and the options passed to it
    # as well as all other shit 
    docker exec -it CONTAINER_NAME ps aux


```


# dockerfile 
- contains instructions for building an image 
    - can use var substitution
        - ENV, ADD, COPY, WORKDIR, VOLUME, EXPOSE, USER
        - use `docker inspect...` on the resulting image to verify vars are set correctly
- files 
    + .dockerignore 
    + 

# docker-compose
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
    - ARG
      - build time arguments
      - value lookup
      - dockerfile -> compose file build -> env vars

  - network definition
    - i.e. docker network create
  - volume definition
    - i.e. docker volume create

```sh
    # TODO: docker-compose wth options
    # build, (re)creates, starts, and attaches to containers for a service

        docker-compose up \
            -d #detached + only way to pass ARG to ENTRYPOINT exec form and overrides matching ARG in CMD


    # all docker-compose cmds (todo)

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

# TODO
# docker config create
```


# volumes 
- command cmds 
    + docker volume ...
        * create 
        * inspect 
        * ls 
        * prune 
        * rm
        
```sh
    # create a data container using an existing volume based on busybox

        docker create -v EXISTINGVOLUMENAME:/place/here/in/container \
            ---name CONT_NAME busybox



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


    # retrieve all volumes associated with the container
        
        docker inspect CONTAINER_NAME|ID | grep volume


    # remove all associated volumes when removing the container

        docker rm -vf CONTAINER_NAME/UID


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


    # restore /backup/SOMEFILE.tar on host to new volume

        docker volume create VOLNAME
        docker run --rm \
            -v VOLNAME:/recover -v ~/backup:/backup \
            ubuntu bash -c “cd /recover && tar xvf /backup/SOMEFILE.tar”


    # copy files from host into data container
        
        docker cp /some/file CONT_NAME:/place/here


    # remove all dangling volumes

        docker volume rm $(docker volume ls -f dangling=true -q)


    # test file permissions in volume
    # create root-owned file on host
    # try to read file as nobody (unsuccessful)
    # try to read file as container root

        echo 'poop' > garbage
        chmod 600 garbage
        sudo chown root:root garbage
        docker run --rm -v "$(pwd)"/garbage:/test/garbage
        -u root busybox


   # create then remove volume 'myvol'
   
      docker volume create myvol
      docker volume rm myvol

```


# images 

```sh
    # create image, login to docker hub, and push
        
        docker build -t username/repository
        docker login
        docker push username/repository


    # inspect the labels of an image 

        docker image inspect --format='' myimage


```

# docker tag 
```sh
    # tag a local image with ID “0e5574283393” into the “fedora” repository with “version1.0”

        docker tag 0e5574283393 fedora/httpd:version1.0

    # tag a local image with name “httpd” into the “fedora” repository with “version1.0”

        docker tag httpd fedora/httpd:version1.0


```
# networking 
- types
    + bridge network
        + virtual network that connects multiple networks so that they can function as a single network 
        + docker creates a bridge network to connect all of the running containers to the host computers network
    - single-host virtual networks
        - local virtual networks are used to provide container isolation
        - local to the machine where docker is installed
        - made up of routes between participating containers and the wider network where the host is attached
    - multi-host virtual networks
        - provide an overlay where any container on a participating host can have its on routable IP address from any other container in the network

```sh 
    # create a closed container
        
        docker run... --net none


    # create a bridged container (the default)
    # `--net bridge` can be ommitted, its the default
        
        docker run... --net bridge 


    # share a containers network interface with another
        # closed container
        docker run --name owner... --net none... 
        # joined container
        docker run... --net container:owner 


    # create an open container
        docker run... --net host
    # provide a hostname to a container
    # and then lookup its ip address

        docker run... \
            --hostname poop alpine nslookup poop


    # bind container port to dynamic host port
    # on all host interfaces
        
        docker run... -p 1234


    # bind specific container (4321) and host (1234) port
    # on all host interfaces
        
        docker run... -p 1234:4321


    # bind specific container (4321) port to specific
    # host interface on a dynamic port
        
        docker run... -p 123.123.123.123:4321


    # bind specific container (4321) port to specific
    # host interface on specific port (1234)
        
        docker run... -p 123.123.123.123:1234:4321


    # create a user defined network
    # allows inter-container communication
    # but does note expose containers to the outside world

        docker network create SOME_NAME
        # connect a running container to SOME_NAME
        docker network connect SOME_NAME SOME_CONTAINER
        # run a container and connect it to the network
        docker run... --network SOME_NAME


    # link containers via the oldschool method
    # you must EXPOSE the ports in the dockerifle, or via with capital -P flag
    # will output `ready for connections` in the `docker logs`
    # when it is ready to be linked

        docker run... --name CONT_1
        # link this container to CONT_1
        # you can optionally rename the linked container
        docker run... --link CONT_1:name_inside_container


    # set custom dns servers
        
        docker run... --dns 8.8.8.8


    # set default dns-search
    # automatically appends poop.com to hostnames
    # without a top-level domain
    # e.g. timeto -> timeto.poop.com
        
        docker run... --dns-search poop.com


    # update the containers host file
    # add a map from poop to some IP addr
    # you now access it via http://poop/
    
        docker run... --add-host poop:127.0.0.2


    # list all interfaces
        
        docker run --rm... ip addr


```


# registries 

```sh
    # start a local registry
    # must add --insecure-registry HOSTNAME
    # to your daemon options on all hosts that are connecting to it
    
        docker run -d -p 5000:5000 \
        -v $HOME/registry:/var/lib/registry registry:2


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



# docker daemon 
- generally all changes requires restarting the docker
- daemon and thus all running containers

```sh

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


# container resources 

```sh
    # limmit memory to 256 megabytes
    # can be b, k, m, g

        docker run... --memory 256m


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
        docker run --name consumer --ipc container:producer...


    # share the IPC of the host
    # beware!!

        docker run --IPC host


    # get the default user name
    # if blank, its will run as the default root user
    # else the user was set in image/containerr start time

        docker inspect --f "{{.Config.User}}" name|id


    #  better way to get the default username, uid, gid, and groups

        # get username
        docker run --entrypoint ""... whoami 
        # return the uid, gid, and groups
        docker run --entrypoint ""... id 


    #  see all users defined in an image

        docker run... awk -F: '$0=$1' /etc/passwd


    # set default user and group

        docker run... --user unameOrId:gnameOrId


    # drop/add a capability

        docker run... \
            --cap-drop net_raw \
            --cap-add other_thing


    # full privileged container
        docker run... --privileged


    # start docker daemon with LXC enabled
    # instead of libcontainer

        docker -d --exec-driver=lxc


    # set the LXC configuration
    # requires daemon to have lxc driver enabled

        docker run... \
            --lxc-config="lxc.cgroup.cpuset.cpus=0,1"...
```


# tricks 
```sh
    # create a certifcate for TLS on localhost
    # generates a 4096-bit RSA key pair
    # priv key file and cert output to current dir

        docker run --rm \
        -e COMMON_NAME=localhost \
        -e KEY_NAME=localhost \
        -v "$(pwd)":/certs centurylink/openssl


    # use a traffic snooper (proxy) to inspect the api calls made from docker client to docker daemon
    # -v make output readable
    # fork ensures socat doesnt exact after the first request
    # & run in the background

        socat -v UNIX-LISTEN:/tmp/dockerapi.sock,fork \
        UNIX-CONNECT:/var/run/docker.sock &
        # now issue docker calls via the socat proxy
        docker -H unix:///tmp/dockerapi.sock ...


    # remove images with matching tag (foo)

        docker images --format "{{.Repository}}:{{.Tag}}" | \
        grep :foo \
        xargs docker rmi


    # review a containers file system (e.g. alpine)

        docker pull alpine
        docker run --name cotw-alpine alpine /bin/true
        docker export cotw-alpine > cotw-alpine.tar
        docker rm cotw-alpine
        tar tfv cotw-alpine.tar | less      

    # validate docker file 
        docker run --rm -i hadolint/hadolint < Dockerfile

    # run a gui app in docker
      docker run --net=host --env="DISPLAY" --volume="$HOME/.Xauthority:/root/.Xauthority:rw" gui-app

    # is roughly the opposite of apt-get update -- it ensures that the layer doesn't include the extra ~8MB of APT package list data, and enforces appropriate apt-get update usage.)
        rm -rf /var/lib/apt/lists/* 
```