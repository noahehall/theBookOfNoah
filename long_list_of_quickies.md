# links

- [sbt docker plugin for building images](https://www.scala-sbt.org/sbt-native-packager/formats/docker.html)
- [configuring global vs project intellij sdks](https://stackoverflow.com/questions/31506278/unable-to-set-project-sdk-in-intellij)
- [mac git autocomplete](https://www.macinstruct.com/tutorials/how-to-enable-git-tab-autocomplete-on-your-mac/)
- [multi-arch build and images](https://docs.docker.com/desktop/multi-arch/)
- [asdf](https://asdf-vm.com/guide/introduction.html)
- [java PKIX ssl cert whatever the fk failure](https://stackoverflow.com/questions/9619030/resolving-javax-net-ssl-sslhandshakeexception-sun-security-validator-validatore)
- [docker on apple silicon review](https://earthly.dev/blog/using-apple-silicon-m1-as-a-cloud-engineer-two-months-in/)
- [docker apple silicon issues & resolutions](https://pythonspeed.com/articles/docker-build-problems-mac/)

# git

```sh
# git commit template
## subject(scope): description
## body...
  Add
  Create
  Refactor
  Fix
  Release
  Document
  Modify
  Update
  Remove
  Feat
  Delete etc...

```

# mac (Silicon)

- fk iterm, just use the normal terminal, and set Option as meta to getaway from those weird azz shortcuts
  - now option arrows work as you would expect to jump around

## k8s related

```sh
# change k8s version to match whatever env
kbenv install 1.17.14
kbenv use 1.17.14


```

## docker

```sh

# if theres no arm64 image, run an intel image under emulation
## filesystem change notification (inotify) wont work

--platform linux/armd64
^ or try linux/amd64
https://github.com/docker/cli/issues/3286
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

## intellij/scala/sbt/etc/vscode

- keymap
  - option shift arrow: move line
    - or just option arrow, one of them should work

```sh
# see which java version sbt is using
sbt 'eval System.getProperty("java.home")'

# force intellij sbt to use the current SDK java version
## preferences > build, execution > build tools > sbt > JRE
## also update the project setting (right click project > module settings)
/Users/$USER/.sdkman/candidates/java/current

```

## kafka

- To restart kafka after an upgrade:
  - brew services restart kafka
- Or, if you don't want/need a background service you can just run:
  - /opt/homebrew/opt/kafka/bin/kafka-server-start /opt/homebrew/etc/kafka/server.properties
