
# docker on mac silicon


```sh

# if theres no arm64 image, run an intel image under emulation
## filesystem change notification (inotify) wont work

--platform linux/armd64
#^  or try linux/amd64
# https://github.com/docker/cli/issues/3286
# using buildx for multiarch images
## review which builders you have
docker buildx ls
## create a new builder
docker buildx create --name mybuilder
## switch to the new builder
docker buildx use mybuilder
## inspect your builder
docker buildx inspect --bootstrap
```
