# TLDR

ive deletd my java notes millions of times...
but i always end up in situations where I have to uset his crap

## basics

- base package: `com.POOP`
  - where source code lives
  - and how you import/export from other code

## java language

### java project structure

- depends on the type of project, and the project configurations
  - java project: the package translates to dependency structure

- common dirs
  - external libraries: virtual directory; contains all the core libraries in the standard jdk runtime
    - useful for finding where classes are stored
  - root > project name, e.g. `com.poop` poop === root
    - poop.iml: specifies locations to all other files, use this to change what file is being used
    - .idea > config files
      - the `.xml` files are the ones your interested in
    - src > source code
    - out > dist

### syntax

```java
  // use double quotes
  "i am a string"

```

### cmds

```java
  // common templates (expand when you tab out)
    // sout > System.out.println()

  // easy stuff
  System.out.println('console this string');
```
