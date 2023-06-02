# FIGMA (and figjam)

- vector design tool that runs in the browser
- from wireframes to prototypes
- https://help.figma.com/hc/en-us/articles/360040521453-Optimize-design-files-for-developer-handoff

## links

- [accessibilty and inclusion](https://www.figma.com/resource-library/creating-accessible-and-inclusive-design/)

### tutorials and stuff

- [community](https://www.figma.com/community)
- [community icons](https://www.figma.com/community/category/icons)
- [biginners tutorial](https://help.figma.com/hc/en-us/sections/4405269443991-Figma-for-Beginners-tutorial-4-parts-)
- [design systems tutorial](https://help.figma.com/hc/en-us/sections/14548397990423-Course-Introduction-to-design-systems)

### docs

- [aaaaaa docs home with search bar](https://help.figma.com/hc/en-us)
- [branching and merging](https://help.figma.com/hc/en-us/sections/5665686755479-Branching-and-merging)
- [collaboration: aaaaa index](https://help.figma.com/hc/en-us/sections/360006780134-Collaborative-tools)
- [collaboration: comments](https://help.figma.com/hc/en-us/sections/4403928709911-Comments)
- [collaboration: developer handoff](https://help.figma.com/hc/en-us/articles/360040521453-Optimize-design-files-for-developer-handoff)
- [components](https://help.figma.com/hc/en-us/articles/360038662654)
- [design systems: aaaaa index](https://help.figma.com/hc/en-us/sections/360006233714-Design-systems)
- [design systems: components](https://help.figma.com/hc/en-us/sections/4403935997847-Components)
- [design systems: libraries](https://help.figma.com/hc/en-us/sections/4403936000407-Libraries-)
- [design systems: styles](https://help.figma.com/hc/en-us/sections/4403928368535-Styles)
- [design: aaaaa index](https://help.figma.com/hc/en-us/categories/360002042553-Figma-design)
- [design: auto layout](https://help.figma.com/hc/en-us/sections/13165750874519-Auto-layout)
- [design: basics](https://help.figma.com/hc/en-us/sections/13148565160471-Figma-design-basics)
- [design: canvas](https://help.figma.com/hc/en-us/sections/13148571463703-Explore-the-canvas)
- [design: color](https://help.figma.com/hc/en-us/sections/360006798733-Color)
- [design: images](https://help.figma.com/hc/en-us/sections/4403912803607-Images)
- [design: layers](https://help.figma.com/hc/en-us/sections/13148612411543-Layers)
- [design: preferences](https://help.figma.com/hc/en-us/sections/4403928548759-Preferences)
- [design: properties: constraints](https://help.figma.com/hc/en-us/articles/360039957734)
- [design: properties](https://help.figma.com/hc/en-us/sections/4403936088215-Properties)
- [design: tools and shapes](https://help.figma.com/hc/en-us/sections/4403912808599-Design-tools-and-shapes)
- [design: typography](https://help.figma.com/hc/en-us/sections/360006606853-Typography)
- [figjam](https://help.figma.com/hc/en-us/articles/1500004362321)
- [import and export](https://help.figma.com/hc/en-us/sections/360006537574-Import-and-export)
- [libraries](https://help.figma.com/hc/en-us/articles/360041051154-Guide-to-libraries-in-Figma)
- [pages: intro](https://help.figma.com/hc/en-us/articles/360038511293)
- [prototypes: aaaaaa index](https://help.figma.com/hc/en-us/sections/360006534454-Prototypes-and-animations)
- [prototypes: building](https://help.figma.com/hc/en-us/sections/4403936156695-Build-prototypes)
- [prototypes: presets](https://help.figma.com/hc/en-us/sections/4403928630295-Presets)
- [prototypes: viewing](https://help.figma.com/hc/en-us/sections/4403928648983-View-prototypes)
- [team: permissions](https://help.figma.com/hc/en-us/articles/360039970673-Permissions-in-teams)
- [team: sharing and permissions](https://help.figma.com/hc/en-us/articles/1500007609322)

### figjam

- [figjam: guide](https://help.figma.com/hc/en-us/articles/1500004362321)

## commmunity components and plugins

- search for design systems, wireframes, illustrations, icons, typography, etc
- crit notes: allow a team to place comments on designs
- stark plugin: checks the contrast of objects

## terms

- wireframes: designs avoid of styles, focuses on userflows, structures and information architecture

## basics

- create teams, and work on files that are organized in projects
- everything is a layer, and some of those layers are frames
  - you generally want to organize things into frames, which are combined into larger frames
    - the highest level will be a frame which represents a snapshot of a screen
    - lower levels will be components, which should be
      - sent to a page created specifically for components
      - then reused by importing into design files as instances of the component

### shortcuts

- mac => ubuntu
  - cmd => ctrl
  - option => alt
- cmd option k: create component from current frame
- cmd option p: rerun the last run plugin
- cmd r: rename current frame
- o: ellipse tool, hold shift to create a circle
- option + hover over edge: see margins between layers on a frame
- shift 2: zoom to selection
- t: text tool
- z: cycle through device frames in presentation view

## GUI

- generally you want to right click an object on the canvas to see the menu

### toolbar

- the top bar
- changes dependcing on what you have selected, but is generally stable

### create component

- select a bunch of stuff, then click create component button in the top of the toolbar
- you generally want components to live in their own page
  - then make instances of components by dragging them into other pages
- components live in the assets menu

### avatars

- click a persons avatar to enter observation mode
- it will take you to wherever they are on the canvas

### assets

- where you find all your components and libraries

### tools

#### frame tool

- create a frame on the current canvas
- opens up the preset menu

#### shape tool

- rectangle
- ellipse: hold shift to create a perfect circle

#### text tool

- exactly what u think

#### pen tool

- create precision frames, e.g. for an icon via vector edit mode
- or pencil for..... a pencil
- vector networks: create complex shapes made out of multiple paths
  - super useful for creating icons and other things
- boolean operations: create new shapes by combining layers
  - union, subtract, intersect and exclude
  - there hidden under an icon in the top toolbar when you have two/more vector layers selected

### presentation view

- the play button in the toolbar
- preview your design in the browser, run usuability tests, build interactive prototypes, etc

## figma elements

### components

- the building blocks of figma designs
- UI elements like buttons/icons, or more complex like toolbars, nav menus, etc
- can only be published to a project in a team
- instances: any changes to the main component are reflected in instances
  - some changes to the instance are specific to the instance
  - select an instance and a `go to main component` icon appears in the big menu
- components can be part of components

### libraries

- collections of components and styles that must be enabled per file in the assets panel
- can be created and shared across files and projects
- search figma.com/community

### prototypes

- define pathways and explore interactions within a file by creating a page for prototypes
  - you generally want a page called prototype that contains instances of other frames
  - you then create connections between frames on this page
    - hotspot: the thing thats interacted with, e.g. a button
      - if its nested within a layer, just keep double clicking the frame until its selected
      - you can drag an arrow to another frame
      - or click the add connection icon that appears on hover and drag it to a destination
    - destination: where the user is taken, e.g. a menu
    - interaction animations: what happens upon clicking a hotspot
      - smart animate enables you to swipe right e.g. to a reveal a menu
  - if any connections are created, you have to create all the connections for presentation view
    - else only the frames with connections will be presentable
- prototype tab: options for the presentation view, e.g. selecting a device frame
  - device frames
  - overflow scrolling behavior
    - this is relavent when components in a design extend beyond the frame their in
  - interactions: triggers (tap, click, hover, e.g), actions and destinations

### pages

- each page contains a single canvas

#### canvas

the global container that contains everything you see

##### layers

- objects in a frame or a frame itself
- parent layers: e.g. frames, components, and layer groups
- children layers: e.g. text, shape, or a layer within a group
- siblings: layers within th esame parent

##### frames

- a single screen of a design: usually based on a screensize preset (e.g. iphone 7)
  - or a single section of an existing frame
- have their own dimensions and properties, and affect the layers they contain
- generally represent a specific screen in an app
- thumbnails: right click on a frame and set it
  - sets this frame as the thumbnail for the file

##### frame property menu

- selecting an object/layer/frame etc changes the bit menu that floats to the right
- design tab: where most of things live
- prototype tab: see prototype section
- styles
  - 4 dots in a square next to each property name (e.g. fill, text, etc) to see the menu
    - or click the canvas (so nothing is selected) and all your styles will show in the menu
    - hover and click the adjust icon to edit an existing style
  - reusable properties that can be applied to objects
  - every object using a style will beu pdated
  - text styles
    - select a text object > then click the the style icon
  - color styles: e.g. fills and strokes
  - layout grid styles
  - effect styles: e.g. drop shadows
- frame fields
  - click a layer/frame to see the fields
  - some fields accept expressions, e.g. 10+50

###### layout grids

- for aligning layers to a grid system

###### auto layout

- property you can add to a frame
- enables objects to grow to fill / shrink to fit as their content changes
- layers in an auto-layout frame can only align vertically / horizontally
- its generally best to group specific objects into specific auto layout frames
  - and have multiple autolayout frames in a single frame representing the screen

###### alignment

- select multiple items and then choose an alignment button to align them together
- theres a useful auto-align button to realign things as your making changes

###### images

- use `place image` to open multiple images and place them one-by-one into existing layers
- then you can re(place) it into a new/existing layer

###### effects

- e.g. drop shadow

###### constraints

- enable instances to be responsive to different frame sizes
  - a right constraint says stick this to the right
  - a right + left says stretch this to the frame
  - etc
- set fix position when scrolling, e.g. for a top nav bar frame

###### inspect panel

- generally available in viewer mode when you select a frame
- shows you everything a developer needs

###### export panel

- for exporting assets, e.g. icons / images
- supports png, jpg, svg and pdf

## figjam

- collaboration tool for brainstorming, developing and organizing ideas
- figjam files are different than design files
  - but you can copy and paste elements between them
