# TODO

# about
  - allows you to relay data between two data channels of  almost any type
  - aka netcat on steroids

# use cases
  - debugging any network services by creating a proxy to route requests through
    - client -> socat proxy -> some network service


```sh
  # create a proxy to route docker requests through
  # make your docker calls via `docker -H /tmp/...`
  socat -v UNIX-LISTEN:/tmp/dockerapi.sock,fork \
    UNIX-CONNECT:/var/run/docker.sock &

  # create  a proxy that listens ona tcp port
  # research this further
  socat -v TCP-LISTEN:2375,fork


```