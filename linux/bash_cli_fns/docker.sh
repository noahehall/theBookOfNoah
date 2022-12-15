#!/bin/env bash

export DOCKER_CLI_EXPERIMENTAL=enabled
# usage:
# docker ps --format="$DOCKER_FORMAT"
export DOCKER_FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"

# startup a registry
# @see https://docs.docker.com/registry/deploying/
dk_start_registry() {
    docker run --rm -d -p 5001:5001 --restart=always --name registry registry:2
}

dk_start_bash() {
    docker run --rm -it ubuntu:trusty bash
    # ip addr show eth0 # get container ip
    # route # get host IP
}

dk_start_bash_host() {
    docker run --rm -it --network host ubuntu:trusty bash
}

dk_ls_images() {
    docker image ls --forma="table {{.Repository}}\t{{.Size}}"
}
export -f dk_ls_images

dk_see_me() {
    docker run --rm -it alpine ping -c4 $(whatsmyip)
}

dk_ps() {
    docker ps --no-trunc -a --format 'table {{.Names}}\n\t{{.Image}}\n\t{{.Status}}\n\t{{.Command}}\n\n' | tac
}
export -f dk_ps

dk_d_remote_url() {
    sudo netstat -lntp | grep dockerd
}
export -f dk_d_remote_url

dk_logs() {
    journalctl -u docker.service
}

# get netstats (use ss on ubuntu)
dl_d_ss() {
    sudo ss -asmpex | grep dockerd
}

#echo image1 image2 three | xargall docker pull
dk_inspect() {
    docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'
}
export -f dk_inspect

# see volumes for a container
dk_container_volumes() {
    docker inspect -f '{{range .Mounts}}{{println .Source}}{{println .Destination}}readWrite: {{.Mode}}{{println .RW}}{{end}}'
}
export -f dk_container_volumes

# get get ip addr for container
dk_container_network() {
    docker inspect -f '{{range .NetworkSettings.Networks}}{{println .IPAddress}}{{end}}'
}
export -f dk_container_network

dk_rm_containers_sigterm() {
    docker stop $(docker ps -aq)
    docker rm $(docker ps -aq)
}
export -f dk_rm_containers_sigterm

dk_rm_containers_sigkill() {
    docker kill $(docker ps -aq)
    docker rm $(docker ps -aq)
}
export -f dk_rm_containers_sigkill

dk_rm_all() {
    dk_rm_containers_sigterm
    docker network prune -f
    docker rmi -f $(docker images --filter dangling=true -qa)
    docker volume rm $(docker volume ls --filter dangling=true -q)
    docker rmi -f $(docker images -qa)
}
export -f dk_rm_all
