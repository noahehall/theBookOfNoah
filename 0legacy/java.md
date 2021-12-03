# TLDR

ive deletd my java notes millions of times...
but i always end up in situations where I have to use this crap

## links

- [oracle OOP concepts](https://docs.oracle.com/javase/tutorial/java/concepts/)
- [java history on wikipedia](https://en.wikipedia.org/wiki/Java_version_history)

## basics

- base package: `com.POOP`
  - where source code lives
  - and how you import/export from other code

### best practices

- heavy use of mixins, e.g. always `@Override` the `toString` method

#### gotchas

- java came out when OOP was the hot new thing
  - this kind of thinking still permeates all of java
- line length doesnt really matter

## java languages

- groovy
- scala
- kotlin
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

### syntax

```java
  // basics
  "i am a string"

  // type annotations
    String[] poop
    int age;

  // class annotations
  private class Person {
    private String firstName;
    private int age;
  }

```

### cmds

```java
  // common templates (expand when you tab out)
    // sout > System.out.println()

  // easy stuff
  System.out.println('console this string');
```
