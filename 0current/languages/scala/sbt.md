# SBT

- scala build tool quickies
- install with sdkman and move on with your life

## links

- [giter8 scala project templates](https://www.foundweekends.org/giter8/)
- [simple scala3 template](https://github.com/scala/scala3.g8)
- [sbt](https://scala-sbt.org)
- [scala index: search for libraries](https://index.scala-lang.org/)
- examples
  - [example build.sbt](https://github.com/noahehall/scala/blob/develop/examples/build.sbt)
  - [example project configuration](https://github.com/noahehall/scala/tree/develop/examples/project)
- refs
  - [sbt docs intro](https://www.scala-sbt.org/1.x/docs/)
- sbt plugins
  - [compilation errors summary](https://github.com/duhemm/sbt-errors-summary)
  - [static site generation, generally for library documentation](https://github.com/sbt/sbt-site)

## basics

- first build tool built specifically for scala
- an sbt project is a directory with atleast two files: `root/build.sbt` and `root/project/build.properties`

### main concepts

- settings: parameterize the build, are evaluated once
- tasks: performan actions (download, compile, run, etc), are evaluated at each invocation
  - can be paramterized by settings and other tasks results
- plugins: provide additional tasks/predefined settings; are part of the build definnition and define how the build is managed
- scopes: configurations, tasks, and multi project projects (each project) create distinct scopes, a single key e.g. `sourceDirectory` can have different values in different scopes, i.e. Compile vs Test scopes
  - i.e. keys are mapped to scopes, which are tasks & configuration, if no scope is found/specified, if it falls back to the default (Zero) scope

### files

- `root/build.sbt` : configures the project build, project settings e.g. library dependencies, etc,
  - the location of this file defines the project root
- `root/project/build.properties`: configures sbt
- `root/project/plugins.sbt`: defines sbt plugins
- `root/target`: cached output of compilation files, thus successive compiles are incrementally executed (changed file and dependents)
  - check in the dir that matches your scala version, _EXCELLENT_ way to see what your scala project looks like in java

```sh

# downloads the scalaversion specified in build.sbt
# loads global plugins, project definition
# starts an interactive shell for invoking additional sbt tasks
sbt
  --version
  # each are tasks
  console # start a scala REPL to evaluate expressions
    # ^ every statement will return resX: Type = Value
    # ^ you can then use the auto assigned value (res1, res2, etc) in the next statement
    # ^ you also have access to all the entities in the project defined in source files
    # you can someValue. pres tab to see auto completion
  run # compiles and then runs your project
  compile # compile the project, by default all the files in src/main/scala
  update # updates library dependencies based on the project settings
  publish # publishes project to repository specified in project settings
  reload # reload the sbt server when config files change
  test # run the tests in src/test/scala/*
  show
    unmanagedSources # lists all project source files

# querying configuration
# in general, the / operator is the query operator, see below
# in general, the form is scope / key
# known keys
  sourceDirectory # query the src directory, returns full path
  scalaVersion # query the scala version
  / includeFilter # which extensions are included as sourceFiles, e.g. {java, scala}
# explicit examples
# ^ current project, no configuration, unmanagedSource task
unmanagedSources / includefilter
# ^ Examples project, no configuration, unmanagedSource task
Examples / unmanagedSources / includeFilter
# ^ examples project, Compile configuration, unmanagedSource task
Examples / Compile / unmanagedSources / includeFilter


# git clone via sbt and start a new project based on the specified temlate
sbt new scala/scala3.g8

```
