- bookmark
  - https://www.scala-sbt.org/1.x/docs/Faq.html#How+do+I+add+files+to+a+jar+package%3F
- skipped
  - https://www.scala-sbt.org/1.x/docs/Multi-Project.html#Per-configuration+classpath+dependencies
    - describes how to set task dependenWe built our NoSQL database with a close-to-the-hardware, shared-nothing approach that optimizes raw performance, fully utilizes modern multi-core servers and minimizes the overhead to DevOps. ScyllaDB is API-compatible with both Cassandra and DynamoDB, yet is much faster, more consistent and with a lower TCO. tests in project TestUtils and use that code in other projects
  - https://www.scala-sbt.org/1.x/docs/Multi-Project.html#Inter-project+dependencies
    - describes how to limit the resource overhead of watching files in large projects with many dependent interconnected subprojects
  - https://www.scala-sbt.org/1.x/docs/Scope-Delegation.html
    - describes how `poop.value` works in detail

# SBT

- scala build tool
- install with sdkman and move on with your life
- or install sbt via [coursier as recommended](https://www.scala-lang.org/download/)
  - use the oneliner they provided, worked perfectly on ubuntu

## links

- [giter8 scala project templates](https://www.foundweekends.org/giter8/)
- [simple scala3 template](https://github.com/scala/scala3.g8)
- [sbt](https://scala-sbt.org)
- [scala index: search for libraries](https://index.scala-lang.org/)
- [whats wrong with sbt?](https://www.lihaoyi.com/post/SowhatswrongwithSBT.html)
- [coursier: sbt uses it to implement managed deps](https://get-coursier.io/)
- wtf
  - [unmanaged deps + single/multi subpojects](https://stackoverflow.com/questions/7733028/sbt-how-can-i-add-a-local-filesystem-jar-to-my-project)
  - [sbt err multiple resolvers have different access mechanism](https://stackoverflow.com/questions/29802766/multiple-resolvers-having-different-access-mechanism-configured-with-same-name)
  - [dealing with sbt version conflicts](https://stackoverflow.com/questions/45531198/warnings-while-building-scala-spark-project-with-sbt)
  - [sbt version conflicts](https://www.scala-lang.org/blog/2021/02/16/preventing-version-conflicts-with-versionscheme.html)
- examples
  - [sbt tutorial](https://github.com/shekhargulati/52-technologies-in-2016/blob/master/02-sbt/README.md)
  - [example build.sbt](https://github.com/noahehall/scala/blob/develop/examples/build.sbt)
  - [example project configuration](https://github.com/noahehall/scala/tree/develop/examples/project)
- docs
  - [AAA best practices: plugins](https://www.scala-sbt.org/1.x/docs/Plugins-Best-Practices.html)
  - [AAA best practices](https://www.scala-sbt.org/1.x/docs/Best-Practices.html)
  - [AAA getting started guide](https://www.scala-sbt.org/1.x/docs/Getting-Started.html)
  - [AAA sbt docs intro](https://www.scala-sbt.org/1.x/docs/)
  - [build: definition in depth](https://www.scala-sbt.org/1.x/docs/Task-Graph.html)
  - [build: definition intro](https://www.scala-sbt.org/1.x/docs/Basic-Def.html)
  - [build: multi subprojects](https://www.scala-sbt.org/1.x/docs/Multi-Project.html)
  - [build: organizing files](https://www.scala-sbt.org/1.x/docs/Organizing-Build.html)
  - [cross building](https://www.scala-sbt.org/1.x/docs/Cross-Build.html)
  - [docker plugin for building images](https://www.scala-sbt.org/sbt-native-packager/formats/docker.html)
  - [input tasks](https://www.scala-sbt.org/1.x/docs/Input-Tasks.html)
  - [inspecting settings](https://www.scala-sbt.org/1.x/docs/Inspecting-Settings.html)
  - [library dependencies](https://www.scala-sbt.org/1.x/docs/Library-Dependencies.html)
  - [library management](https://www.scala-sbt.org/1.x/docs/Library-Management.html)
  - [library management](https://www.scala-sbt.org/1.x/docs/Library-Management.html)
  - [plugins: basics](https://www.scala-sbt.org/1.x/docs/Using-Plugins.html)
  - [plugins: intro](https://www.scala-sbt.org/1.x/docs/Plugins.html)
  - [project directory structure](https://www.scala-sbt.org/1.x/docs/Directories.html)
  - [repository resolvers](https://www.scala-sbt.org/1.x/docs/Resolvers.html)
  - [running sbt](https://www.scala-sbt.org/1.x/docs/Running.html)
  - [scope delegation via .value lookup](https://www.scala-sbt.org/1.x/docs/Scope-Delegation.html)
  - [scopes](https://www.scala-sbt.org/1.x/docs/Scopes.html)
- refs
  - [AAA sbt index of common entities](https://www.scala-sbt.org/1.x/docs/Name-Index.html)
  - [available plugins](https://www.scala-sbt.org/1.x/docs/Community-Plugins.html)
  - [defaults for keys](https://github.com/sbt/sbt/blob/develop/main/src/main/scala/sbt/Defaults.scala)
  - [global keys](https://www.scala-sbt.org/1.x/api/sbt/Keys$.html)
  - [input keys](https://www.scala-sbt.org/1.x/api/sbt/InputKey.html)
  - [ivy revisions](https://ant.apache.org/ivy/history/2.3.0/ivyfile/dependency.html#revision)
  - [project keys](https://www.scala-sbt.org/1.x/api/sbt/Project.html)
  - [sbt API](https://www.scala-sbt.org/1.x/api/sbt/index.html)
  - [sbt.io](https://www.scala-sbt.org/1.x/api/sbt/io/IO$.html)
  - [settings keys](https://www.scala-sbt.org/1.x/api/sbt/SettingKey.html)
  - [task keys](https://www.scala-sbt.org/1.x/api/sbt/TaskKey.html)
- sbt plugins
  - [compilation errors summary](https://github.com/duhemm/sbt-errors-summary)
  - [static site generation, generally for library documentation](https://github.com/sbt/sbt-site)

## basics

- first build tool built specifically for scala

### terms

- hybrid flow-based programming: aka dependency-oriented programming
  - de-duplication: a task is executed only once even when it is depended by multiple tasks
  - parallel processing: Using the task graph, the task engine can schedule mutually non-dependent tasks in parallel
- project: an sbt project is a directory with atleast two files: `root/build.sbt` and `root/project/build.properties`
- subproject: each project defines subprojects, generally a root subproject and potentially 1/more subprojects
  - a subproject is required to have atleast a name & scalaVersion settings expressions within its `.settings(...)` object

### main concepts

- settings: parameterize the build, are evaluated once
- tasks: performan actions (download, compile, run, etc), are evaluated at each invocation
  - can be paramterized by settings and other tasks results
- plugins: provide additional tasks/predefined settings; are part of the build definnition and define how the build is managed
- scopes: configurations, tasks, and multi subproject projects (each subproject) create distinct scopes, a single key e.g. `sourceDirectory` can have different values in different scopes, i.e. Compile vs Test scopes
  - i.e. keys are mapped to scopes, which are tasks & configuration, if no scope is found/specified, if it falls back to the default (Zero) scope

### project structure

#### config files

- any _.sbt and _.scala file can have any arbitrary name
- `root/build.sbt` : build definition: configures the project build, project settings,library dependencies, etc,
  - the location of this file defines the project root
  - in multi-project builds you can place a scoped `build.sbt` in the base dir for that project
    - SBT recommends putting all project declarations and settings in the root build.sbt
  - can contain: `val`, `lazy val` and `def` expressions
    - Typically, lazy vals are used instead of vals to avoid initialization order problems.
- `root/project/build.properties`: configures sbt
- `root/project/plugins.sbt`: defines sbt plugins
- `root/project/Dependencies.scala` for tracking deps in one place, files for task implementations or to share values, such as keys, create then import into your build.sbt
- `root/project/whatever.scala`: define helper objects and one-off plugins that can be imported into your build.sbt
- `root/lib/`: directory for `.jar` files each being unmanaged dependencies
  - in multi sub project projects, create & place jars in each subproject  `lib` dir

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

- `root/project/project`: base dir for sbts meta-meta builds root project
- `root/target/`: build artifacts: cached output of compilation files, thus successive compiles are incrementally executed (changed file and dependents)
  - check in the dir that matches your scala version, _EXCELLENT_ way to see what your scala project looks like in java

## sbt DSL

- the build.sbt domain-specific language(DSL) constructs a DAG of settings and tasks
  - The setting expressions encode settings, tasks and the dependencies among them.
  - This structure is common to Make (1976), Ant (2000), and Rake (2003).
- setting expression types: `key operator T`
  - key types
    - SettingKey[T]: computed once when loading the subproject and reused
    - task types
      - TaskKey[T]: computed each time, potentially with side effects
        - define a task; operations e.g. `compile` or `package`
      - InputKey[T]: a task with cmd line arguments
  - operators: `:= += ++=`
  - T: value type, e.g. String or Unit
- Task Graph: tasks and their dependencies where the edges dentoe happens-before

### Scopes

- in an setting/key expression, e.g. `poop := flush`
  - the key `poop` can have different values `wipe` instead of `flush` depending on the scope (context)
    - multi build projects, each subproject can define a different value
    - the `compile` key can have different values for `main` and `test` sources
  - but there is always a single value for a given key for a given scope
- scope axis: each key in task/setting expression can be scoped
  - full scope: consists of all 3 for a specific value: `projectX / configX / task / someKey`
  - subproject axis
    - ThisBuild: scope for all subprojects in a build, generally used as a fallback incase a subproject doesnt explicitly define a setting
  - Configuration (dependency) axis: defines a graph of library deps, potentially with its own classpath, sources, genreated packages, etc
    - needs to be capitalized
    - `Compile` defines the main build in `src/main/scala`
    - `Test` defines how to build tests in `src/test/scala`
    - `Runtime` defines the classpath for the `run` task
    - Provided
    - Optional
    - CompileInternal
    - IntegrationTest
    - etc
  - task axis: settings that affect how a task works
    - artifactName
    - packageBin
    - packageDoc
    - packageOptions
    - packageSrc
    - baseDirectory: the projects root dir
    - unmanagedBase: by default its the `lib` dir, but will include lib dirs for each subproject if multiproject
    - sourceDirectories: e.g. `src/main/scala`, append additional source dirs with `file()`
    - Zero: universal fallback for all scope axes; its direct use should be reserved to sbt and plugin authors
    - Global: sets Zero scope to all axes `Zero / Zero / Zero / someKey`
    - etc
- Using scopes in build defs:
  - you need to specify a scope if the key in question is normally scoped. think of it as specifying the fully qualified domain name for a URL
    - e.g. the FQNs for:
      - `Compile`: `Compile / compile` i.e. the compile task in the Compile configuration
      - `Test`: `Test / compile` i.e. the compile task in the Test configuration
  - implicit scoping
    - subproject scope: subProject.settings(...)
    - ThisBuild scope: ThisBuild / ....
    - global scope: Global / ...
  - explicit scope
    - fully scoped: blah / blah / blah / poop := value
    - task scope: taskName / poop := value
    - multi scope: Compile / packageBin / poop := value
      - the packageBin task in the Compile ocnfiguration has poop set to value
    - etc

### custom settings & tasks

- defining a key
  - must be a (Setting|Task|Input)Key[T]
  - can be defined in an sbt file, scala file, or an auto plugin
    - any vals found under autoImport object of an enabled auto plugin will be auto imported into your sbt files

### Library Dependencies

- unmanaged dependencies: jar files inside lib dir
  - automatically placed on the project classpath for compile, test, run and console
    - you change by setting `Compile / dependencyClasspath` e.g.
    - to change the base dir (instead of lib) use `unmanagedBase := baseDirectory.value / "usethis"`
- managed dependencies: configured in the build definition via the `libraryDepdencencies` settings key
  - sbt users coursier for managing library deps
  - sbt uses the standard Maven2 repository by default for finding & retrievings deps
  - uses ivy revision scheme for versions
    - see link, but shouldnt matter as you should always fkn use explicit version anyway

### Errors

- `Reference to undefined setting` indicates you need to specify a FQN, as whatever you did is ambiguous


### Plugins

- extend the build definition, e.g. for adding new settings/tasks/etc

### sbt dsl examples

```scala
// global fns provided by sbt implicit imports?
log.info("console is so javascript")
file("path/to/poop") // creates a new File
System.getProperty("user.home")
Thread.sleep(500)

// compute a value via Def.task partial fn
// ^ useful in case the value is undefined at call site
someTask += Def.task {
  // returns this value to assign it to someTask which depends on it
  myGenerator(baseDirectory.value, (Compile / managedClasspath).value)
}

// variable types
lazy val simpleOrSeqVar := "set/replace this value"
lazy val seqVar += "append this single value"
lazy val seqVar ++= Seq("append multiple", "values")

// setting/task dependencies
thisTask := {
  // .value is a scala macro that defines a dependency
  // ^ which wil be lifted out and run before the body
  poop = otherTask.value
  // inlining a dependency on updates value
  // ^ this will inject .take(3) at this location in the body
  update.value.allConfigurations.take(3)
  // a task can depend on a setting/task
  // a setting cant depend on a setting (but not a task)
  scalacOptions := List("-encoding", "utf8", "-Xfatal-warnings", "-deprecation", "-unchecked"),
  // overrides the previous set scalacOptions
  scalacOptions := {
    val old = scalacOptions.value
    scalaBinaryVersion.value match {
      case "2.12" => old
      case _      => old filterNot (Set("-Xfatal-warnings", "-deprecation").apply)
    }
  }

  ...
}

// custom settings/task keys
// first define a key
val poop = settingKey[String]("this is a description")
val flush = taskKey[Unit]("this is a description")
// then set a definition for the task via a normal scala partial fn
poop.settings(
  taskA := {
    "tasks are executed sequentially"
  }
  taskB := {
    println("anything goes here but return value must match type T")
  }

)

// repositories
// ^ to add where sbt looks for deps use resolvers key
// ^ to replace the default resolvers use externalResolvers key
resolvers += "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots"
resolvers += "Local Maven Repository" at "file://"+Path.userHome.absolutePath+"/.m2/repository"

// managed dependencies
libraryDependencies += groupId % artifactId % revision % configuration // configuration is optional
libraryDependencies += groupId %% artifactId % revision // %% appends your scala version to the artifactId
libraryDependencies ++= Seq(
  // sets a dependency only for the Test configuration
  libraryDependencies += "org.apache.derby" % "derby" % "10.4.1.3" % Test
)

// plugins
// ^ use the same schema as declaring a dependency
// ^ go in root/project/plugins.sbt
addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.11.2")

// example project/Dependencies.scala
import sbt._

object Dependencies {
  // Versions
  lazy val akkaVersion = "2.6.19"
  // Libraries
  val akkaActor = "com.typesafe.akka" %% "akka-actor" % akkaVersion
  val akkaCluster = "com.typesafe.akka" %% "akka-cluster" % akkaVersion
  val specs2core = "org.specs2" %% "specs2-core" % "4.16.0"
  // Projects
  val backendDeps =
    Seq(akkaActor, specs2core % Test)
}
// ^ example use within build.sbt
import Dependencies._

ThisBuild / organization := "com.example"
ThisBuild / version      := "0.1.0-SNAPSHOT"
ThisBuild / scalaVersion := "2.12.16"

lazy val backend = (project in file("backend"))
  .settings(
    name := "backend",
    libraryDependencies ++= backendDeps
  )
```

## sbt Build Definitions

- setting/task expressions: should go inside `.settings(...)` or scoped to `ThisBuild / ...`
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
  .enablePlugins(FooPlugin, BarPlugin) // explicitly enable plugins
  .disablePlugins(plugins.IvyPlugin) // explicity disable plugins
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

## sbt shell

- sbt shell setting execution
  - executing a setting key in sbt shell will return its value
  - executing a task in sbt shell will execute the task but not display its value
    - use `show taskName` to show its value
  - use `inspect anyKeyName` to see all configuration, scopes, etc associated with a key
    - e.g. to task the taks anyKeyName task depends on

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
  plugins # see the list of enabled plugins for the current subproject
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
  last someTaskName # get the verbose log of someTasks last execution

  ####################################
    # inspection related cmds
    # each are tasks
    # in general, the / operator is the query (scope) operator, see below
  ####################################
  show # show output from running a task
    unmanagedSources # lists all project source files
    sourceDirectory # query the src directory, returns full path
      / includeFilter # which extensions are included as sourceFiles, e.g. {java, scala}
  inspect
    Poop / fullClasspath # see everything related to Poop

####################################
  # explicit examples
####################################
# in a multi subproject project, run a specific project
projectName / run

# current project, no configuration, unmanagedSource task
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

## sbt API

### sbt.io

- collection of file, url and I/O utility methods

## giter8

- [list of giter8 templates](https://github.com/foundweekends/giter8/wiki/giter8-templates)
- is built into sbt, but can be installed separately
- its like create react app for scala

```sh
# general scala project
sbt new
  scala/scala-seed.g8 # general scala
  scala/scala3.g8
  scala/hello-world.g8  # minimal scala project
  scala/scalatest-example.g8
  akka/akka-scala-seed.g8  # akka + scala build
  http4s/http4s.g8 # http4s services
```
