# docker

- my docker cheatsheet

## basics

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

## quickies

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
    docker compose ps


    # naming images
        # IMAGE_NAME format: <host><username>/<repo-name>[:<tag>]
        # during build
            docker build -t IMAGE_NAME
        # re-tagging an existing local image
            docker tag PREV_IMG_NAME NEW_IMG_NAME
        # commit current state of a container
            docker commit CNTER_NAME NEW_IMAGE_NAME
```
