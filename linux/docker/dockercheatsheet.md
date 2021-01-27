TLDR;

- so i dont have to browse through `./docker.md` huge file

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