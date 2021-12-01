# TLDR

intellij is dreamweaver that just wont fkn die

## LINKS

- [toolbox](https://www.jetbrains.com/toolbox-app/download/download-thanks.html?platform=linux)

## BASICS

- android studio vs intellij community vs intelliji ultimate
  - intellij community: focuses on cli plugins
  - ultimate adds support for server side freameworks, and multiple languages
    - apache jakarta, nodejs, springs, react view,
  - android studio is just intellij community with android studio plugin set as the default interface

- jetbrains-toolbox: jetbrains app to install all of their expensive stuff
  - save to /opt

- LightEdit: simple text editor; open files outside of intellij
  - automatically installed with intellij
  - doesnt havent any of the main editor plugins (e.g. build, run)

### gotchas

- empty package directories will be compressed
  - fkn gets me every time `poop.flush` is two directories, not one
  - click the gear icon in the top right of hte project window and disable that dumb azz shiz

## intellij community

- install via toolbox and move on with your life
- good plugins (always restart intellij after installing plugins)
  - kotlin (its on the web)
  - scala
  - aws toolkit

- dependency frameworks
  - maven
  - gradle

- primary programming language & templates
  - java
    - command line app: basic java project
  - groovy
  - kotlin (designed by jetbrains)
  - scala

- project settings: always review this, especially in an existing project
  - new project
    - welcome screen > gearbox in bottom left
    - click a new project > pick ONE of the options for the type of project
  - open project
    - file > settings
  - areas to focus (just always review this)
    - appearance
    - editor
    - plugins
    - tools
    - version control: use the cli, fk intellij
    - language & frameworks

- version: help about > YYYY.major.minor
- update
  - via toolbox: open toolbox
  - download: configure >  check for updates

## GUI preferences

- either file > settings, or intellij > preferences
  - mac is intellij > preferences

## GUI buttons

- top bar
  - view
    - tool windows: many plugin/tool has a window, toggle it here (e.g. build, run, project, etc)
- top right
  - play: run the code
  - hammer: build the code
