# docker

- my (2022) docker cheatsheet

## links

- [docker docs](https://docs.docker.com/)
- [docker ref](https://docs.docker.com/reference/)
- [docker guides: overview](https://docs.docker.com/get-started/overview/)
- [docker dev best practices](https://docs.docker.com/develop/dev-best-practices/)
- [compose in prod](https://docs.docker.com/compose/production/)
- [buildx github](https://github.com/docker/buildx)
- [docker buildkit backend](https://docs.docker.com/engine/reference/builder/#buildkit)

- on the web
  - [uid & gid in docker containers](https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf)
  - [vagrant vs docker](https://www.ctl.io/developers/blog/post/docker-vs-vagrant)
  - [k8s vs docker swarm](https://thenewstack.io/kubernetes-vs-docker-swarm-whats-the-difference/)
  - [hella dockerfile examples](https://github.com/jessfraz/dockerfiles)
  - [pretty good docker cheetsheet](https://github.com/wsargent/docker-cheat-sheet)
  - [docker + buildkit](https://devopsspiral.com/articles/containers/modernize-image-builds/)

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

```
