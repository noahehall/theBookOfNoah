TLDR;

- so i dont have to browse through `./docker.md` huge file

# registries 

```sh
  # start a local registry
  # must add --insecure-registry HOSTNAME
  # to your daemon options on all hosts that are connecting to it
  docker run -d -p 5000:5000 \
    -v $HOME/registry:/var/lib/registry registry:2

```