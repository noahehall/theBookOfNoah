# TLDR

- use the new docker.md, this file is years of garbage

## links

- [docker cheatsheet](https://www.docker.com/sites/default/files/d8/2019-09/docker-cheat-sheet.pdf)
- [dockerfile env](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#env)
- [dockerfile search for official images](https://github.com/docker-libraryhttps://github.com/docker-library)
- [docker compose reference](https://docs.docker.com/compose/reference/)
- [official docker image library](https://github.com/docker-library/official-images)
- [best practices](https://github.com/docker/docker.github.io/blob/master/develop/develop-images/dockerfile_best-practices.md)
- [tini: init for containers](https://github.com/krallin/tini)
- [buildx: Docker CLI plugin for extended build capabilities with BuildKit](https://github.com/docker/buildx#documentation)
- [buildx + buildkit tut](https://medium.com/titansoft-engineering/docker-build-cache-sharing-on-multi-hosts-with-buildkit-and-buildx-eb8f7005918e)
- [docker file validator](https://github.com/docker-library/dockerfile-validator)
- [docker file linter](https://github.com/hadolint/hadolint)
  - [online version](https://hadolint.github.io/hadolint/)
- [alpine pkg management](https://wiki.alpinelinux.org/wiki/Alpine_Linux_package_management)

# networking

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
