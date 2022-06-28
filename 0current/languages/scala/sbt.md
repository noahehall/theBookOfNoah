# SBT

- bookmark
  - https://www.scala-sbt.org/1.x/docs/Task-Graph.html
- skipped
  - https://www.scala-sbt.org/1.x/docs/Multi-Project.html#Per-configuration+classpath+dependencies
    - describes how to set task dependencies, e.g. project A test task depends on project Bs compile task
    - e.g. to put utility code for tests in project TestUtils and use that code in other projects
  - https://www.scala-sbt.org/1.x/docs/Multi-Project.html#Inter-project+dependencies
    - describes how to limit the resource overhead of watching files in large projects with many dependent interconnected subprojects
- scala build tool quickies
- install with sdkman and move on with your life
- or install sbt via [coursier as recommended](https://www.scala-lang.org/download/)
  - use the oneliner they provided, worked perfectly on ubuntu

## links

- [giter8 scala project templates](https://www.foundweekends.org/giter8/)
- [simple scala3 template](https://github.com/scala/scala3.g8)
- [sbt](https://scala-sbt.org)
- [scala index: search for libraries](https://index.scala-lang.org/)
- [whats wrong with sbt?](https://www.lihaoyi.com/post/SowhatswrongwithSBT.html)
- examples
  - [sbt tutorial](https://github.com/shekhargulati/52-technologies-in-2016/blob/master/02-sbt/README.md)
  - [example build.sbt](https://github.com/noahehall/scala/blob/develop/examples/build.sbt)
  - [example project configuration](https://github.com/noahehall/scala/tree/develop/examples/project)
- docs
  - [AAA getting started guide](https://www.scala-sbt.org/1.x/docs/Getting-Started.html)
  - [AAA sbt docs intro](https://www.scala-sbt.org/1.x/docs/)
  - [build definition in depth](https://www.scala-sbt.org/1.x/docs/Task-Graph.html)
  - [build definition intro](https://www.scala-sbt.org/1.x/docs/Basic-Def.html)
  - [input tasks](https://www.scala-sbt.org/1.x/docs/Input-Tasks.html)
  - [library dependencies](https://www.scala-sbt.org/1.x/docs/Library-Dependencies.html)
  - [multi project builds](https://www.scala-sbt.org/1.x/docs/Multi-Project.html)
  - [organizing build files](https://www.scala-sbt.org/1.x/docs/Organizing-Build.html)
  - [project directory structure](https://www.scala-sbt.org/1.x/docs/Directories.html)
  - [running sbt](https://www.scala-sbt.org/1.x/docs/Running.html)
  - [scopes](https://www.scala-sbt.org/1.x/docs/Scopes.html)
- refs
  - [global keys](https://www.scala-sbt.org/1.x/api/sbt/Keys$.html)
  - [input keys](https://www.scala-sbt.org/1.x/api/sbt/InputKey.html)
  - [project keys](https://www.scala-sbt.org/1.x/api/sbt/Project.html)
  - [settings keys](https://www.scala-sbt.org/1.x/api/sbt/SettingKey.html)
  - [task keys](https://www.scala-sbt.org/1.x/api/sbt/TaskKey.html)
- sbt plugins
  - [compilation errors summary](https://github.com/duhemm/sbt-errors-summary)
  - [static site generation, generally for library documentation](https://github.com/sbt/sbt-site)

## basics

- first build tool built specifically for scala

### terms

- project: an sbt project is a directory with atleast two files: `root/build.sbt` and `root/project/build.properties`
- subproject: each project defines subprojects, generally a root subproject and potentially 1/more subprojects
  - a subproject is required to have atleast a name & scalaVersion settings expressions within its `.settings(...)` object

### main concepts

- settings: parameterize the build, are evaluated once
- tasks: performan actions (download, compile, run, etc), are evaluated at each invocation
  - can be paramterized by settings and other tasks results
- plugins: provide additional tasks/predefined settings; are part of the build definnition and define how the build is managed
- scopes: configurations, tasks, and multi project projects (each project) create distinct scopes, a single key e.g. `sourceDirectory` can have different values in different scopes, i.e. Compile vs Test scopes
  - i.e. keys are mapped to scopes, which are tasks & configuration, if no scope is found/specified, if it falls back to the default (Zero) scope

### project structure

#### config files

- `root/build.sbt` : build definition: configures the project build, project settings,library dependencies, etc,
  - any `whatever.sbt` takes part in the build definition
  - the location of this file defines the project root
  - can contain: `val`, `lazy val` and `def` expressions
    - Typically, lazy vals are used instead of vals to avoid initialization order problems.
- `root/project/build.properties`: configures sbt
- `root/project/plugins.sbt`: defines sbt plugins
- `root/project/whatever.scala`: define helper objects and one-off plugins
  - can contain: `object` `classes` expressions
- `root/lib/`: directory `.jar` files for unmanaged dependencies

#### developer files

- directories not listed will be ignored
- dot files will be ignored
- `src/main/java/`: java specific sources
- `src/main/resources/`: files to include in the main jar
- `src/main/scala-${version}/`: scala specific sources
- `src/main/scala/`: source code
- `src/test/java/`: java sources
- `src/test/resources/`: files to include in test jar
- `src/test/scala-${version}/`: scala specific sources
- `src/test/scala/`: test source code

#### generated files

- `root/target/`: build artifacts: cached output of compilation files, thus successive compiles are incrementally executed (changed file and dependents)
  - check in the dir that matches your scala version, _EXCELLENT_ way to see what your scala project looks like in java

## sbt DSL

```scala
// variable types
lazy val singleVar := "set this single value"
lazy val seqVar += "append this Seq[String] value"
lazy val seqVar += "append another string onto seq"

// scopes
```

## sbt shell

```sh

# downloads the scalaversion specified in build.sbt
# loads global plugins, project definition
# starts an interactive shell for invoking additional sbt tasks
# creates required dirs & files if not found (project, target)
# prefix any subcommand with ~ to rerun the cmd on file change, e.g. ~compile
sbt
  ####################################
    # administrative cmds
  ####################################
  --version
  scalaVersion
  clean # Deletes all generated files (in the target directory).
  help
    anyCmd # get help for this cmd
  inspect someCmd # config info for someCmd
  inspect tree someCmd # recursively inspect someCmd and dependent tasks
  set someBuildProp := "this value"  # override a build.sbt value
  session
    save # save overrides to build.sbt
  projects #list all (sub)projects
  project # list the current project
    projectName # sets the current project, on which all subsequent tasks are run
  ####################################
    # build related cmds
  ####################################
  package # Creates a jar file containing the files in src/main/resources and the classes compiled from src/main/scala and src/main/java.
  compile #  	Compiles the main sources (src/main/scala && src/main/java)
    subProjectName/Compile # compile a subproject
  update # updates library dependencies based on the project settings
  publish # publishes project to repository specified in project settings
  ####################################
    # developer related cmds
    # each are tasks
  ####################################
  console # start a scala REPL to evaluate expressions
    # ^ every statement will return resX: Type = Value
    # ^ you can then use the auto assigned value (res1, res2, etc) in the next statement
    # ^ you also have access to all the entities in the project defined in source files
    # you can someValue. pres tab to see auto completion
    :paste #enters paste mode to enter a multi line program, ctrl-d to run it
  run # compiles and then Runs a main class, passing along arguments provided on the command line.
  reload # Reload  build definition (build.sbt, project/*.scala, project/*.sbt files)
  test # Compiles and runs all tests.
  testQuick # run incremental tests, use with ~
  testOnly blah bloop bleep

  ####################################
    # inspection related cmds
    # each are tasks
    # in general, the / operator is the query operator, see below
    # in general, the form is scope / key
  ####################################
  show # show output from running a task
    unmanagedSources # lists all project source files
    sourceDirectory # query the src directory, returns full path
      / includeFilter # which extensions are included as sourceFiles, e.g. {java, scala}

####################################
  # explicit examples
####################################
# ^ current project, no configuration, unmanagedSource task
unmanagedSources / includefilter
# ^ projectName project, no configuration, unmanagedSource task
projectName / unmanagedSources / includeFilter
# ^ projectName project, Compile configuration, unmanagedSource task
projectName / Compile / unmanagedSources / includeFilter

####################################
  # sbt in batch mode
  # requires JVM spinup and JIT each time, so its much slower
  # ^ than executing in sbt shell
####################################
# run any cmd in batch mode
sbt cmd1 cmd2 cmd3
sbt cmd1 "cmd2 arg1 arg2" # two cmds, second one takes arguments
# git clone via sbt and start a new project based on the specified temlate
sbt new scala/scala3.g8

####################################
  # plugin cmds
  # add plugins in project/plugins.sbt:
####################################

# sbt-native-packager-plugin
# plugins.sbt: addSbtPlugin("com.typesafe.sbt" % "sbt-native-packager" % "1.3.4")
# build.sbt: lazy val poop(...).enablePlugins(JavaAppPackaging)
sbt
  dist # create a zip distribution of the project (check logs for output dir)
  Docker/publishLocal # create a docker img from a zip distrobution

```

## sbt Build Definitions

- locations:
  - `root/build.sbt` is the project root, but in multi-project builds you can place a `build.sbt` in the base dir for that project
  - SBT recommends putting all project declarations and settings in the root build.sbt
- settings expressions: sbt DSL in the form `key := "value"` e.g. `name := "Poop"`
  - T: is the expected value type, e.g. `String` or `Unit`
  - sbt shell setting execution
    - executing a setting key in sbt shell will return its value
    - executing a task in sbt shell will execute the task but not display its value,
      - use `show taskName` to show its value
    - use `inspect anyKeyName` to see all configuration associated with a key
- setting expression types:
  - SettingKey[T]: computed once when loading the subproject and reused
  - task types
    - TaskKey[T]: computed each time, potentially with side effects
      - define a task; operations e.g. `compile` or `package`
    - InputKey[T]: keys of tasks that have cmd line args as input
- project dependencies:
  - aggregated projects: tasks run against the aggregator are run against the aggregated, unless set to false in settings
    - aggregation will run the aggregated tasks in parallel and with no defined ordering between them.
  - classpath projects: when project A depends on project B, C, and D
    - compile on project A will first compile the others
    - project B, C and D will be in project A's classpath

```scala
// imports
// 2 implicit imports are available in all build.sbt files
import sbt._
import Keys._

// bare settings: dont need to be in .settings(...)
// auto-applied to all subprojects unless overriden
// recommended for all keys that should always be applied to all projects
ThisBuild / organization := "com.nirvai"
ThisBuild / scalaVersion := "3.1.3"
ThisBuild / version := "0.1.0-SNAPSHOT"

// group common settings
lazy val commonSettings = Seq(
  target := { baseDirectory.value / "target2" },
  //...
)

// every project needs atleast one subproject
// the val name (e.g. root) becomes the project ID, e.g in sbt shell
// base dir for source files would be root/src/main/whateverThisDirectoryIs
lazy val root = (project in file("."))
  .aggregate(poop, flush) // all tasks run against this project will run against poop && flush
  .settings(
    commonSettings,
    name := "BuildDefs", // project ID in intellij
    libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.12" % Test,
    someTaskName / aggregate := false // dont run task someTaskName against aggregated projects
  )

// all files in root/src/main/whateverThisDirectoryIs/poop
lazy val poop = (project in file("otherProject")).settings(...)
// if the project name is the same as the directory name, you can shorten the syntax
lazy val flush = project
  .dependsOn(poop) // now poop is in flushes classpath
  .settings(...)

// define a new task
// ^ e.g. to define a key for a new task called hello
// ^ now in sbt shell: hello prints Hello!
lazy val hello = taskKey[Unit]("An example task")
lazy val someProject = (project in file("."))
  .settings(
    hello := { println("Hello!") },
    commonSettings
  )
```
