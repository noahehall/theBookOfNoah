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