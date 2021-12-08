# TLDR

ive deletd my java notes millions of times...
but i always end up in situations where I have to use this crap

## links

- [java is on codewars](https://www.codewars.com/)
  - dizzam i need to bug these guys to add nimlang
- [oracle OOP concepts](https://docs.oracle.com/javase/tutorial/java/concepts/)
- [java history on wikipedia](https://en.wikipedia.org/wiki/Java_version_history)
- [princeton java cheatsheet](https://introcs.cs.princeton.edu/java/11cheatsheet/)
- [groovy](https://groovy.apache.org/download.html)
  - extract to /opt
- [scala jvm compatibility matrix](https://docs.scala-lang.org/overviews/jdk-compatibility/overview.html)
- [kotlin jvm compatability](https://kotlinlang.org/docs/faq.html#which-versions-of-jvm-does-kotlin-target)
  - use 17 if your project permits

- bffs
  - [lombok](https://projectlombok.org/features/all)

## basics

- base package: `com.POOP`
  - where source code lives
  - and how you import/export from other code

### best practices

- heavy use of mixins, e.g. always `@Override` the `toString` method
- focus on the positives
  - many enterprises use java, if thats your thing
  - comformity is a core port of the java culture
    - moving from one project to another is seamless
  - its a fundamental language
    - you wont be on the bleeding edge, or any edge for that matter

- conventions
  - java file names === class names, `Poop.java` === `public class Poop {}`

#### gotchas

- java came out when OOP was the hot new thing
  - this kind of thinking still permeates all of java
- line length doesnt really matter
- name of the constructor must match the name of the class
- always need a `main` method

### terms

- use sdkman for all of these
  - JRE: java runtime environment: required to run java programs
  - JDK: java development kit: required to build & develop java programs
    - includes the JRE
    - is OS specific
  - java SE: JDK standard edition

## java JVM languages

- groovy: by apache
  - new project > groovy
    - if no groovy libraries exist, you have to download & extract (e.g. to /opt)
      - ^ then click create and select the version you downloaded
    - make sure to set the project SDK to java 8
      - dont fkn use intellij, for this, use sdkman
        - get an identifier `$ sdk list java`
        - `$ IDENTIFER=8.0.312-tem && sdk install java $IDENTIFER`
        - you can always switch java versions via sdk `$ sdk use java 11.0.0-open`
    - creating new stuff
      - ^ e.g. a class: project dir window > right click src > new > groovy script

- scala: pronounced `scaela`, but still say it as `scaula` cuz thats how it fkn looks
  - file > settings > plugins > install scala
  - pick a template: new project > scala >
    - sbt
    - lightbend project start
    - IDEA: IDEA based scala project
    - intellij platform plugin
  - jdk: check the scala compatability table link up ^
  - scala sdk: download the latest
  - project dir window > right click src > new class > pick Object > call it `Main`

- kotlin: by jetbrains
  - file > settings >
    - plugins > kotlin
    - languages & frameworks > kotlin
  - file > new project
    - template: console application
    - build system
      - intellij
      - gradle kotlin|gradle|maven
  - tools > kotlin > show kotlin bytecode > decompile
    - ^ see the equivalent java code (from kotlin source code)
    - ^ if its grayed out, make sure the editor cursor is on some kotlin code
- etc

### java project structure

- depends on the type of project, and the project configurations
  - java project: the package translates to dependency structure

- common dirs
  - external libraries: virtual directory; contains all the core libraries in the standard jdk runtime
    - useful for finding where classes are stored
  - root > project name, e.g. `com.poop` poop === root
    - poop.iml: specifies locations to all other files, use this to change what file is being used
    - .idea > project config files managed by intellij
      - the `.xml` files are the ones your interested in
    - src > source code
    - out > dist

### java shell

```sh

  # compile Poop.java into Poop.class & run it
    javac Poop.java && java Poop



```

### syntax

```java
  // basics
  "i am a string"

  // types
  // ^ primitive types
    boolean // true|false
    char // single letter
    double // decimals
    int // whole number

  // ^ reference types
    Date
    String

  // var annotations
    String poop = "flush"
    String[] poop = ["flush"]
    int age;

  // class annotations
  private class Person {
    private String firstName;
    private int age;
  }

  public class HelloWorld {
    // entry point to every java program/class etc
    public static void main(String[] args) {

    }
  }

```

### native cmds

```java
  // common templates (expand when you tab out)
    // sout > System.out.println()

  // easy stuff
  System.out.println('console this string');
```
