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

### best practices

- right click everything
- keymaps
  - shift shift > search everywhere

### gotchas

- empty package directories will be compressed
  - fkn gets me every time `poop.flush` is two directories, not one
  - click the gear icon in the top right of the project window and disable that dumb azz shiz

- java culture
  - its all about intellij & the gui;
    - intellij comes with a bunch of interconnected workflows to keep you out of the CLI
  - try to stay within the boundaries of intellij automation, even if it makes you dumber
    - workflows you should get use to
      - using git from the GUI
      - reliance on boilerplate code generation (snippets)
        - topbar > code >
          - generally get in a long term relationship with the code menu
          - generate
          - reformat code|file

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
    - file > project structure
      - platform settings > documentation paths
        - always fkn set the documentation path
          - sdkman use the default
          - else might have to google it based on the version of the java jDK youre using
  - areas to focus (just always review this)
    - keymap: set to visual studio
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

## window layout

- drag n drop to change layout
- or click the gear icon and select move to & select location

## GUI buttons

- top bar
  - view
    - tool windows: many plugin/tool has a window, toggle it here (e.g. build, run, project, etc)
      - see common ones in the extreme bottom left, hover over the cube icon
      - Project
        - click the down arrow next to 'Project' to change the scope: determines whta files are shown in the project files list
      - run
      - structure: structure of current class
      - problems: code-level issues
- top right
  - play: run the code
  - hammer: build the code

## GUI right click

- project dir list > right click where you want the `thing` to go
  - new (sub)package: package name > right click > new package
  - new component: package name > right click new class|interface|record|enum|annotation
