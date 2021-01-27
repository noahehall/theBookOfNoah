TLDR;

- so i dont have to browse through `./docker.md` huge file


# images 

```sh
    # create image, login to docker hub, and push
        
        docker build -t username/repository
        docker login
        docker push username/repository

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