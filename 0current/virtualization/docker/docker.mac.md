
# docker on mac silicon


```sh
# install
# you can use docker desktop (google it), and move on with life
# you can install everything individually + rancher, @see https://dev.to/sergej_brazdeikis/install-docker-on-mac-m1-without-docker-desktop-k6o
# or you can do as I do, and install rancher via brew
brew install --cask rancher

# then open the docker app, start the docker desktop
# then docker run --rm hello-world should work

# if theres no arm64 image, run an intel image under emulation
## filesystem change notification (inotify) wont work

--platform linux/amd64
#^  or try linux/arm64
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
