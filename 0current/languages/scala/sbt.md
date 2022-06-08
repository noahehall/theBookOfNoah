# SBT

- scala build tool quickies
- install with sdkman

## links

- [giter8 scala project templates](https://www.foundweekends.org/giter8/)
- [simple scala3 template](https://github.com/scala/scala3.g8)

## basics

### files

- `root/build.sbt` : the sbt build file

```sh

$ sbt # start a shell in the current dir (do it wherever the build.sbt file is)
  --version
  console # start a scala REPL
  run # provide you with options to run any of classes found in the project
  compile # compile the project
  sbt new scala/scala3.g8 # clones the provided template on github to start a new scala3 project

```
