# tools, examples, shit like that

- todo: move into the new csshtml.md

## links

- misc
  - [online image editor](https://doka.photo/)
- color shit
  - [color wheel](https://commons.wikimedia.org/wiki/File:RGB_color_wheel_24.svg)
  - [premade color palletes](https://colorhunt.co/)
  - [color pallete generator](https://coolors.co/)
  - [another color generator but my favorite thus far](http://paletton.com/)
  - [adobes colro wheel dope too](https://color.adobe.com/create)
  - [free color schemes](https://www.canva.com/templates/)
  - [100 color schemes](https://www.canva.com/learn/100-color-combinations/)
- template shit
  - [jack other peopels design shits](https://dribbble.com/)
  - [style tyles](http://styletil.es/)
  - [izmir hover effects](https://ciar4n.com/izmir/)
  - [jack webflow design templates](https://webflow.com/templates?utm_source=dashboard)
  - [webflow animation builder](https://webflow.com/interactions-animations?utm_medium=inline-ad&utm_source=ix2)
  - [codepen](https://codepen.io/)
  - [codemyui](https://codemyui.com/)
  - [whole lotta shit here](https://freebiesbug.com/)
- stock photos
  - [free illustrations of people and objects](https://fresh-folk.com/)
  - [unspalsh](https://unsplash.com/)
  - [high res photos](https://gratisography.com/)
  - [picography](https://picography.co/)
  - [whole lotta images](https://pixabay.com/)
  - [cooler pics](https://kaboompics.com/)
  - [fave brand thus far](https://jaymantri.com/)
  - [food pictures](https://www.foodiesfeed.com/)
  - [free images](https://littlevisuals.co/)
  - [high res](https://www.lifeofpix.com/)
  - [has an admin picked photo section](https://skitterphoto.com/)
  - [basic stock shit](https://stocksnap.io/)
- cool fonts
  - [recursive](https://www.recursive.design/)
  - [bridamount](https://www.1001fonts.com/bridamount-font.html)
  - [grifter](https://hansonmethod.com/grifter)

# bookmark

- [css layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- [gotchas for grid](https://css-tricks.com/things-ive-learned-css-grid-layout/)

# must read/eventually todo

- [css containment](https://developers.google.com/web/updates/2016/06/css-containment)
- [css units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [multi column layouts via fragmentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns)
- [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- [bunch of filter functions](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function)
- [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)
- [repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)
- [dynamic css grid](https://oky.dk/blog/1kb-grid)

# links (i think most of these should be todo)

- [css dynamic content](https://developer.mozilla.org/en-US/docs/Web/CSS/content)
- [psuedo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [css containment](https://developers.google.com/web/updates/2016/06/css-containment)
- [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
- [get width of current device](http://mydevice.io/)
- [css box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes1)
- [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [pseudo-classes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements)
- [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)
  - [import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)
  - fonts
    - [great font-face explanation](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
    - [font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
    - [font-face generator](https://everythingfonts.com/font-face)
    - [web font generator](https://www.fontsquirrel.com/tools/webfont-generator)
    - [cool fonts for download](https://coolfont.org/)
  - keyframes
    - [key frames reference](https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule)
    - [keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
  - [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
  - [using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [introduction to css box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)
- [boucup?](bocoup.com)
  - think they might have blog posts or something

## important links

- [centering things](https://css-tricks.com/centering-css-complete-guide/)
- [css reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [color converter](https://serennu.com/colour/hsltorgb.php)
- [css validator by w3c](http://jigsaw.w3.org/css-validator/#validate_by_input)

# TODO

- CSS Preprocessor: scripting language that extends CSS and then compiltes it into regular CSS

  - -

# TLDR; best practices, tips and tricks

- always validate your CSS, e.g. with <http://jigsaw.w3.org/css-validator/#validate_by_input>
- always size things from the inside out
- use `background-clip` to adjust how background-color|image fill its element
- set the opacity of selected elements and their children via `opacity`
- `@import` statements must precede all other types of rules except charset and cannot be ussed inside conditional group at-rule
  - in general, review the `import` link above as there are many gotchas
- review `@font-face` syntax before using them, too many gotchas
- set the page font size on the body element, and size everything relative to that via rem, or is em?
- always declar a `:root {}` selector set your variables, 9 times out of 8 you should be using variables mutherfucker
- GRID vs FLEXBOX vs WTF
  - ROW | COLUMN - flexbox
  - ROW & COLUMN - grid
  - CONTENT-OUT (content forces layout) - flexbox
    - e.g. when placing items evenly in a container, let the size of the content decide how much individual space each item takes
      - you can still use grid, but then the grid items will change the entire track
  - LAYOUT-IN (layout forces content) - grid
    - e.g. when placing items evenly in a container, you let the available space of the layout determine how the items are placed
  - BOX ALIGNMENT - flexbox
    - aligning items within a box,
- use the picture element to offer alternative versions of an image for different displays/devices
  - combine with at-rules
- the `content:` rule is powerful, use it whenver you need to insert dynamic content via css and not js
  - is generally used with
    - selector::before|after to target the anchor element for the content to be inserted
    - attr(data-prop) to retrieve the value of the HTML DATA property and insert it as content
- think creatively when using `calc` and custom properties
  - e.g. read [this link](https://oky.dk/blog/1kb-grid)

```js
  /*
    example html <p data-foo="hello">world</p>
    renders <>hello world</>
    */
  [data-foo]::before {
    content: attr(data-foo) " ";
  }
.
```

# syntax

- [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

##

- property, e.g. `background-color`
- value e.g. red in`background-color: red`
- declaration: property + value e.g. `background-color: red;`
- declaration block: one/more declarations surrounded by braces e.g. e.g. { background-color: red; width: 20px }
- rule: selector(s) 'declaration block e.g. e.g. p { background-color: red; }'

## values and units

- numbers e.g. `20`
- percentage e.g. `20%`
- absolute units
  - cm Centimeters 1cm = 96px/2.54
  - mm Millimeters 1mm = 1/10th of 1cm
  - Q Quarter-millimeters 1Q = 1/40th of 1cm
  - in Inches 1in = 2.54cm = 96px
  - pc Picas 1pc = 1/16th of 1in
  - pt Points 1pt = 1/72th of 1in
  - px Pixels 1px = 1/96th of 1in
- relative units
  - em Font size of the parent element.
  - ex x-height of the elements font.
  - ch The advance measure (width) of the glyph "0" of the elements font.
  - rem Font size of the root element.
  - lh Line height of the element.
  - vw 1% of the viewports width.
  - vh 1% of the viewports height.
  - vmin 1% of the viewports smaller dimension.
  - vmax 1% of the viewports larger dimension.
- colors
  - keywords e.g. red
  - hexadecimal e.g. #ff0000
    - allows us to specify any of the 256 available values for each (16 x 16 = 256.)
  - rgb e.g. rgb(0,0,255)
    - three parameters that represent the red, green and blue channel values of the colors between 0 and 255
  - hsl e.g. hsl(0,100%,50%)
    - accepts hue, saturation, and lightness values, which are used to distinguish between the 16.7 million colors
    - hue: the base shade of the color. This takes a value between 0 and 360, presenting the angles round a color wheel.
    - saturation: how saturated is the color: This takes a value from 0-100%, where 0 is no color (it will appear as a shade of grey), and 100% is full color saturation
    - how light or bright is the color: This takes a value from 0-100%, where 0 is no light (it will appear completely black) and 100% is full light (it will appear completely white)
  - rgba & hsla
    - allow you to set an additional `transparency` dimension
      - `rgba(255,0,0,0.5);`
      - `hsla(240,100%,50%,0.5);`
- functions e.g. background images / graduates
- units
  - absolute units
    - px
    - mm
    - cm
    - in
    - pt
    - pc
  - relatice units
    - em: ame as the font-size of the current element
    - ex, ch: the height of a lower case x / width o f the number 0
    - rem: size of the default|root base font-size
    - vw, vh: 1/100th of the width/height of the viewport
  - .

```css
  /*
    pseudo element for defining custom properties for the html document
    */
  :root {
    --big-poppa: poop;
  }


  /*
    use a custom property as a variable
    if the property doesnt have a value, use the fallback value
    if no fallback value is provided, whatever value the parent element has will be used
    */
  .someSelector {
    background-color: var(--big-poppa, 'fallback value')
  }

  /*
    you can get/set the actual value from javascript
    const val = element.style.getPropertyValue("--my-var");
    const val = getComputedStyle(element).getPropertyValue("--my-var");
    element.style.setProperty("--my-var", jsVar + 4);

    */
.
```

# box model

- the foundation of layout on the web
  1. content: min/max- width & height
  2. includes both text content & nested child elements
  3. padding: inner margin
  4. border
  5. outline (is not part of the box model, but behaves like the border drawn inside the margin)
  6. margin
- overflow: when the content of an element overflows its absolute width/height
- background: box backgrounds (color and images) are stacked on top of eachother
  - background-clip: determines how
    .

```css
  /*
    -on the container
      flexbox: flex-end|start|etc
      grid: end|start|etc
    */
  align-items: flex-end

  /*
    -on the children
      flexbox: stretch|flex-start|flex-etc
      grid: stretch|start|etc
    */
  align-self


  /*
    - on grand-children
      the grid-child acts as a wrapper and becomes a container (whether grid/flex)
      and its direct children take its place as grid-items
      very USEFUL!
      e.g. set the grid-child as display:contents, which will caue its direct children to assume its position as grid items, and obey all the rules of the grid
        lvl 1 - container.grid|flex
        lvl 2 - usually a grid|flex-item, but now you set display:contents
          lvl 3 - are now grid|flex-items
        lvl 2 - more grid-items, but without display:contents, act as expected
      */
    display: contents
```

# selectors

- universel selector: selects all elements
- simple: element type, class, id
- attirbute: attribute & attribute values; values are case sensitive unless `i` i specified
- pseudo-classes: based on element state, append keyword to selector
- pseudo-elements: parts of content in a certain position in relation to an element, e.g. first word of a paragraph or some generated content
- combinators: ways of combining two/more selectors for a more precise selection
  - `a,b`: matching a or b
  - `a b`: b is descendant of a
  - `a > b`: b is direct child of a
  - `a + b`: b is direct sibling of a
  - `a ~ b`: b is one of a's siblings
- multiple selectors: applying the same rule to multiple selectors that are separated by commas

  ```css
  :root {
  }
  p {
  }
  p.class {
  }
  p.id {
  }

  li:active {
  }
  checkbox:checked {
  }
  li:first-child {
  }
  li:last-child {
  }
  button:enabled {
  }
  a:hover {
  }
  input:focus {
  }
  input:required {
  }

  [attribute-exists] {
  }
  [attribute-with="value"] {
  }
  [attribute-with-case-insensitive="value" i] {
  }
  [attribute-contains-enum~="value"] {
  }
  [attribute-contains*="value"] {
  }
  [attribute-exactly-or-starts-with|="value"] {
  }
  [attribute-starts-with^="value"] {
  }
  [attribute-with="value"] {
  }
  [attribute-ends-with$="value"] {
  }

  /* All elements with an attribute "href" with values
   starting with "http" will have an arrow added after their
   content (to indicate they are external links) */
  [href^="http"]::after {
    content: "⤴";
  }
  ::before {
  }
  ::first-letter {
  }
  ::first-line {
  }
  ::selection {
  }
  ::backdrop {
  }
  ```

# at-rules

- used to convey metadata & conditional information e.g. `@IDENTIFIER (RULE);`

  - media query: consits of a media type and zero/more expressions that check for the conditions of particular m edia features
  - page: modify margins, orphans, widows, and page breaks when printing a document
  - font-face: specify a custom font loaded from a remote/server or user's computer
    - most browsers only download `@font-face` fonts if the font-family is actually used in a CSS declaration
      - so list as many as needed, but be careful how many you actually use
    - use `local()` to specify the name of a locally-installed front, useful for offline styling
  - keyframes: controls the intermediate steps ina CSS animation sequence by defining styles for keyframes/waypoints along the animation sequence

  ```css
  @charset 'UTF-8';
  @import "custom.css";
  @import "noahedwardhall.com/styles/poop.css";

  @font-face {
    font-display: auto;
    font-style: oblique 30deg 50deg;
    font-variation-settings: normal;
    font-weight: bold;
    font-family: "Open Sans";
    src: local("Helvetica Neue Bold"),
      url(https://somewebsite.com/path/to/font.woff),
      url(/fonts/OpenSans-Regular-webfont.woff2) format("woff2"), url("/fonts/OpenSans-Regular-webfont.woff")
        format("woff");
  }
  @page {
  }

  @supports (display: flex) {
    @media screen and (min-width: 900px) {
      article {
        display: flex;
      }
    }
  }

  @media (min-width: 801px) {
    body {
      margin: 0 auto;
      width: 800px;
    }
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }

  @media (400px <= width <= 700px) {
    body {
      line-height: 1.4;
    }
  }

  @keyframes identifier {
    0% {
      top: 0;
      left: 0;
    }
    30% {
      top: 50px;
    }
    68%,
    72% {
      left: 50px;
    }
    100% {
      top: 100px;
      left: 100%;
    }
  }
  ```

# media

- [object fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

## images

## video

```css
/** just play with the values, not important for me right now */

/*
    sets how the content of replaced elements (e.g. img, or video) should be resized to fit its container
    */
object-fit: fill|contain|civer|none|scale-down;

/*
    specifies the alignment of the replace elements contents within th elements box
    areas of the box which arent covered reveal the elements background
  object-position: % %|top right|center bottom|etc etc;
    */

/*
    set the size of the elements backgroudn image
    */
background-size: contain|no-repeat|cover|%|% %|# #|etc .;
```

# DESIGN

- [dont hate w3schools](https://www.w3schools.com/html/html_responsive.asp)
- [csstricks design principles](https://css-tricks.com/design-principles-for-developers-processes-and-css-tips-for-better-web-design/)
- [guide to creating innovative web layouts](https://www.htmlgoodies.com/beyond/css/css-guide-to-creating-innovative-web-layouts.html)
- [blend modes](https://developer.mozilla.org/en-US/docs/Web/CSS/Compositing_and_Blending)
- [css features](https://www.htmlgoodies.com/beyond/css/7-amazing-new-css-techniques-for-2019.html)
- [webflow layout design trends](https://webflow.com/blog/layout-design)
- [typography for developers](https://css-tricks.com/typography-for-developers/)
- [choosing a color palette](https://www.invisionapp.com/inside-design/quick-guide-color-palette/)
- [100 color combinations and how to use them](https://www.canva.com/learn/100-color-combinations/)

## design processes

### designing a website

- from webflow
  - goal identification
    - purpose of the site
    - primary purpose to inform ? sell ? etcs
    - who is the site for
    - what do they expect to find/do
    - competitors and their sites
    - tools: audience personas, creative brief, competitor anlaysis, brand attributes
  - scope definition
    - what web pages and features the site requires to fullfil the goal
    - timeline
    - tools: gantt charts, design contract
  - sitemap and wireframe creation
    - how the content and features in the scope will interrelate and their hierarchy/relationship
    - wireframe:
    - tools: webflow, all the other shit costs, fuck them
  - content creation
    - creating content for individual pages
    - tools:
      - content creation: google docs, dropbox paper, quip, gather content,
      - seo: google keyword planner, google trends, screaming frogs seo spider
  - visual elements
    - developing the visual brand
    - tools
      - style tyles, moodboards, element collages
      -
  - testing
    - fuck your tests bitch

### picking a color pallete

- some guys process (Css tricks)
  - determine the mood of your site to guide the development of a color pallete
  - find your main color
  - add 2/3 supporting colors
    - add additional supporting colors as needed
    - changing the tint (mixing with white) and shade (mixing with black)
- some other guy
  - start with greyscale
    - ensures a focus on useability and clear navigation rather than assigning colors to elements
    - focus on
      - layout out elements
      - optimiznig white space
      - creating a hierarchy of type and elements
  - develop a 60-30-10 % rule
    - comes from interior design when assigning colors to things
      - a color pallete should have no momre than 5 colors cuz some muthafucka from invionapp wrote a blog post
    - 60% to your dominant hue
    - 30% to secondary color
    - 10% for accent color
  - the best color combinations come from nature
    - because they will always look natural
    - e.g. sunrise, sunsets, beach scenes, etc

## type

- set font-size to vw (viewport width) so it scales with the viewport
- use repetitive styles across similar elements
- use hierarchy wisely
  - the distinction between differnet fonts, colors, size, capitalization etc
- choosing a font
  - a balance between readbility and IMPACT
    - the length of text can help decide between the two
- set the line-height larger than the font size to reduce cramping
  - dont set a unit to your line-height value, as a unitless line-height is proportional to its font-size!

## layout

- layout movement:
  - how the content flows and your eyes move through the flow of the page
  - direct a users eye in order to tell a sotry, CTAs, or encourage scrolling/navigation
- layout proximity:
  - establishes relationships between objects
  - use repetition (Based on fontsize) to establish a spacing-schema
    - 0.25rem, .5rem, 1rem, 2rem, 4rem

## color

- conveys personality and calls attention
- gives pages life and emotion
- saturation (color intensity)
  - the strength/weakness of a color
- brightness|value (how close to white or black)
  - darker moods = darker colors
- hue (color, like blue or red)
  - the hue of a color is what gives it meaning
  - most people associate hues with ideas (see link)
- chroma (how pure a color is)
  - lack of whitie, black or gray added to it
- tone
  - creaated by adding gray toa pure hue
- shade
  - created by adding black to a pure hue
- tint
  - created by adding white to a hue
- types of color palettes (theres many more)
  - monochromatic
    - different shades and depths of aa single hue
    - i.e. there there all the same color
    - can be very boring
  - analogous
    - a main color and the colors from either side of it on the color wheel
    - do a great job of
      - expressing consistency and uniformity within design
      - limiting any distraction away from the content
    - isnt a large differentiation in hue
    - contrast is struck primarily through the variations in color shade
  - complementary
    - i.e. opposite colors from the color wheel
      - red and green
        blue and orange
    - great for
      - communicating a sense of balance
    - add tints & shades to expand the color pallete
      - helps to avoid the glaring contrasts (causes eyestrain) when two opposing colors are placed next to each other
  - triadic
    - three colors from equidistant points ont he color whweel
      - e.g. red, yellow and blue
    - creates a diverse color pallete
    - requires a lot of planning and experimentation
- color meanings
  - red
    - energy, power, passion
  - orange
    - join, enthusiasm, creativity
  - yellow
    - happiness, intellect, energy
  - green
    - ambition, growth, freshness, safety
  - blue
    - tranquility, confidence, intelligence
  - purple
    - luxury, ambition, creativity
  - black
    - power, elegance, mystery
  - white
    - cleanliness, purity, perfection
- ensure your theres enough contrast between foreground and background colors
  - the difference in saturation, brightness and hue
  - important for accessibility for those with low vision/color blindness

## CSS features

- blend modes
  - how content (e.g. images) blends with the background and foreground
  - background-blend-mode
    - setting the Container Background-Blend-Mode: Darken on background-image and background-color to get a colorizing effect. You can also create an overlay with pseudo-elements (i.e. :before and :after) on the image wrapper to get the same effect.
  - mix-blend mode
    - blend in the contents of the element with the contents of its direct parent background. One use of this mode is overlapped lettering instead of adjusting the opacity, which often results in loss of color vividness
- masking
  - tell the browser which elements to show/hide via Raster elements, CSS gradients and SVG elements are three ways masking can be done
- clipping
  - the shape's boundary and defining areas of the image that shall be visible
- text container shapes
  - how text flows around its container, e.g. on the outside circle
    - shape-outside
    - shape-inside
      - both use shapes circle(), polygon(), inset() or ellipse().
- transform and skew
  - use to adjust perspective
- animations
- initial letter
  - selects the first letter of an element and specifies the number of lines it occupies (above or below the initial line)
- variable fonts
  - set of features defined in the OpenType specification
  - enables font files to contain multiple variations of a font in a single file
    - you can then pick which variation via CSS and use variables to adjust them
    - ital: italic
    - wght: the fonts weight
    - wdth: the fonts width
    - opsz: adjust the optical size of the font
    - slnt - the slant of the font
- logical properties and values
  - css module for managing appearance of elements through logical directions and dimension mappings
    - logical properties describe the direction which they flow
      - block
        - the order in which blocks are displayed on the page
      - inline
        - the direction which a text line is written
        - e.g english is left to right, top to bottom
- scroll snapping
  - determines the rigidity with which attachment poitns are applied to the scroll container
  - i.e. locks the viewport to certain elemnets/locations after the user has finsihed scrolling
    - e.g. for image galleries or full-height|width content
- flexbox, grid, and subgrid
- media queries
  - especially the new level 4

## effects, trends, etc

- parallax effect
  - layering graphics, images and text while tying their moving to scroll position at differnet speeds
  - use cases
    - make soething more dynamic and itneresting
- overlapping elements
  - e.g. solid colors, behind an imge, behind text, each artistically visible and possibly animated at different speeds/scroll positions
- breakup content with offset headers, subheaders and columns
  - instead of rigid symmetry, offset shit
- horizontal cards
  - great for smaller screens where scroll is done vertically
- split screens
  - great for large screens
  - break up big blocks of content, where each sdie of the screen is dedicated to differnet parts of the same content, e.g header + image vs paragraph text
- using the foreground and background axis artistically
- use cards/sliders instead of scrolling content

.

```js
  // general css
    // use media queries to target a various number of contexts
  // HTML
    // instruct the browser how to controlt he pages dimensions and scaling
    const metaTag = '<meta name="viewport" content="width=device-width, initial-scale=1.0">'

  // IMAGES
    // set width to 100% to scale up s large as its container
    // set max-width to 100% to scale down to to its container size or up to its orignial size
    // use the picture element to define images for different browser window sizes
    const picture = `
      <picture>
        <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
        <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
        <source srcset="flowers.jpg">
        <img src="img_smallflower.jpg" alt="Flowers">
      </picture>
    )`

.
```

# LAYOUT

## RESPONSIVE

- [dont hate w3schools](https://www.w3schools.com/html/html_responsive.asp)

```js
  // general css
    // use media queries to target a various number of contexts
  // HTML
    // instruct the browser how to controlt he pages dimensions and scaling
    const metaTag = '<meta name="viewport" content="width=device-width, initial-scale=1.0">'

  // IMAGES
    // set width to 100% to scale up s large as its container
    // set max-width to 100% to scale down to to its container size or up to its orignial size
    // use the picture element to define images for different browser window sizes
    const picture = `
      <picture>
        <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
        <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
        <source srcset="flowers.jpg">
        <img src="img_smallflower.jpg" alt="Flowers">
      </picture>
    )`

  // TYPE
    // set font-size to vw (viewport width) so it scales with the viewport

.
```

## GRID

- [read this when you need a dynamic (not logical) order)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
  - think a puzzle layout [with this one](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
- [read this first bro!](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [then read this shit](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [mdn css grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [mdn grid column](https://developer.mozilla.org/en-US/docs/Glossary/grid_column)

### terminology

- track
  - think of a race car track, can be vertical (column) or horizontol (row)
  - the grid is defined by tracks, not lines
- line
  - boundary lines of each track, a single track has two lines (i.e. left & right, or top & bottom boundaries)
    - but tracks can share lines, e.g. in a 2 column grid there would be 3 lines, with each column sharing the middle boundary
    - lines are numbered relative to the writing mode of the document (ltr, or rtl)
  - column lines = grid column tracks + 1 (i.e. a 3 column grid would have 4 column lines)
  - row lines = grid row tracks + 1 (i.e. see above)
- explicit grid
  - any grid columns/rows defined by grid-template-columns or grid-template-rows
- implicit grid

  - any grid columns/rows not defined by gridtemplatecolumns or gridtemplaterows
  - grid items area auto sized (fit content) or specified by grid-auto-rows and grid-auto-columns

-

### use cases

- for two dimensional layouts,
  - i.e. requiring rows AND columns
  - i.e. a table
- dividing a screen into major regions or defining the relationship in terms of size, position, layer between parts of a control built from html primitives
- grid children can position themselves so they actually overlap and layer, similar to css positioned elments

- grid container `display:grid`
  - defines the container
  - all directly children are automatically grid-items
  - specifies default dimensions for rows and columns
- grid children

  - child placement

    - default flow (implicit placement)
      - arrange children by row
      - each item will be placed into each cell of row 1
    - explicit placement

      - using `grid-template-rows`

      -

```css
  /*
    common grid values can be used in most places
    none
        no explicit grid, columns implicitely generated
        use with grid-auto-columns to set each columns size
      #px
        specific size for each column
      %px
        relative (inline widthof grid container) size for each column
      minmax(min#, max#)
        range >=min&&<=max
      fit-content(#|%)
        i.e. min(max-content, max(auto, #|%))
        calculated similar to auto but sizes are clamped at #|% if its greater than auto
      auto
        i.e. minmax(auto, max-content)
        uses available dimension (if max, uses max)
        the only keyword that can be stretched by `align-content` and `justify-content`
      #fr
        flex factor: each track (wtf is track?) takes a share of the remaining space in proportion to this number
        shorthand for minmax(auto, #fr)
      max-content
        the largest maximal content contribution of the grid items
      min-content
        the largest minimal content contribution of the grid items
      repeat(#|auto-fill|auto-fit, #)
        i.e. a repeated fragment
        specify a pattern for auto creating columns
        e.g. repeat(3, 1fr) creates 3 tracks, that grow equal
        e.g. repeat(auto-fill, 200px) create as many 200px columns as space permits
        e.g. repeat(auto-fill, minmax(200px, 1fr)) create aws many 200px columns as space permits, and divide the rest evenly (becuase of the 1fr)
      subgrid
        fuck it
        only supported by firefox
    */
  .grid-container {
    /*
      defines the grid wrapper
      grid|inline-grid
      */
    display: grid;

    /*
      explicit grid columns|rows
      line names and track sizing functions of grid columns
      each value specifies a single column, unless you use the repeat function
     */
    grid-template-columns: repeat(3, 1fr); /*3 columns that grow equally*/
    grid-template-columns: col1 col2 col3 etc; /*explicit*/
    grid-template-columns: 1fr 1fr 1fr; /* 3 equal size columns that grow/shrink*/
    grid-template-columns: 2fr 1fr 1fr; /* split into 3 columns, the first gets twice the amount as the other columns*/
    grid-template-columns: 100px 1fr 1fr; /* explicit first column, grow/shrink remaining 2 columns*/
    grid-template-columns: 100px repeat(2, 1fr) 10px; /* same as above, but adds another track at 10px */
    grid-template-columns: repeat(5, 1fr 2fr); /*creates 10 columns by repeating the pattern 1fr 2fr 5 times*/
    grid-template-rows: see above;
    grid-template-rows: [row1] 25% [row2] auto; /*with names*/

    /*
      implicit grid columns and rows
      see grid template columns for examples
      */
    grid-auto-columns: minmax(min, max);
    grid-auto-rows: minmax(min, max);

    /*
      position items in the grid based on the grid lines
      if positioning two items in the same sell, use z-index for layering
      */
      grid-column-start: #|name;
      grid-column-end: #|name;
      grid-row-start: #|name;
      grid-row-end: #|name;

    /*
      grid template areas allow yous to define names for grid-template-columns and grid-template-rows
      then assign other elements into those names
      each name can be used in 3 diff ways for child elements
        - someName | someName-start | someName-end
      */
      grid-template-areas:
        "<someName> | "

    /*
      shorthand for setting template rows, columns and areas in one declaration
      doesnt reset the implicit grid properties
      use `grid:` instead (has the same syntax)
      */
      grid-template: rowDefs / columnDefs;
      grid-template:
        [row1] "header header header"  /* row def1 */
        [row2] "footer footer footer"  /* row def2 */
        / auto 50px 1fr; /* column defs */
    /*
      sets the gutters between rows and columns
      shorthand for row-gap and column-gap
      can be fixed/relative values
     */
      grid-gap: rowGap columnGap;

    /*
      direction of flow left->right, top->bottom
     */
    grid-auto-flow: row|column;






  }

  .grid-child {
    /*
      implicit child placement
     */

    /*
      explicit child placement by targeting a specific element
      place this child in a specific column and row
     */
    grid-column: 2;
    grid-row: 5;


  }

```

## FLEXBOX

- [flexbox layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [flexbox on csstricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [css flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

- one dimensional layout model (columns OR rows) with ease in distributing space between items in an interface
- use cases
  - Vertically centering a block of content inside its parent.
  - Making all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
  - Making all columns in a multiple column layout adopt the same height even if they contain a different amount of content.

### flexbox layout model

- flex container: contain flex items, define how flex items are laid out `display: flex`

  - flex line: the imaginary line(s) on which flex items are layed out on the main and cros axis
  - main axis: x axis
    - main start: the beginning of the x-axis
    - main end: the end of the x-axis
  - cross axis: y axis
    - cross start: the start of the y-axis
    - cross end: the end of the x-axis

- flex items: direct children of flex containers positioned on a flex line `flex: VALUE`

  - main size: size of hte flex item in the dimensioin it's parent flex-container main axis
  - cross size: size of the flex item in the dimension it's parent flex-container cross axis
  -

- gotchas
  - when you wrap flex items, each new row/column becomes its own implicit flex-container
    - thus the items wont align across rows/columns, but will align within rows/columns

```css
    .flex-containers {
      display: flex|inline-flex;

      /*
        specify how many flex lines are within a flex container
        nowrap: default, one flex line, if theres not enough space items will flow out of their container
        wrap: (think word wrapping) as many flex lines as required, additional flex items are added in the direction of the cross axis
        wrap-reverse: same as wrap but in the opposite direction on the cross axis
       */
      flex-wrap: nowrap;

      /*
        how flex items are laid out onthe main and cross axis lines
        row: left to right
        row-reverse: main start and end are swapped
        column: main and cross axis are swapped
        column-reverse: same as column, but revered
      */
      flex-direction: row;

      /*
        short hand for flex-wrap & flex-direction
       */
      flex-flow: WRAP DIRECTION;

      /*
       how whitespace is distributed on the cross axis and adjusts the positions of flex items on the cross axis
        flex-start: default, whitespace pushed to end of cross axis
        flex-end: whitespace pushed to start of cross axis
        center: equal whitespace at start and end of cross axis, but not inbetween flex items
        baseline: flex items aligned along their baseline, which is calculated based on the content of each distinct flex item
        stretch: no whitespace, flex items stretched to fill cross axis
       */
      align-items: stretch;

      /*
       how whitespace is distributed on the main axis and adjusts the positions of flex items on the main axis
        flex-start: default, whitespace pushed to end of main axis
        flex-end: white space pushed to start of main axis
        center: equal whitespace at start and end of main axis
        space-between: whitespace between items but not at either end of main axis
        space-around: white space between and at ends of main axis
       */
      justify-content: flex-start;

      /*
        aligns flex lines modififying behavior of flex-wrap
        stretch: default,
        flex-start:
        flex-end:
        center:
        space-between:
        space-around:
       */
      align-content: stretch;

    }
    .flex-items {
      /*
        how flex items fill unused space
       */
      flex-grow:
      /*
        how flex items reduce their size when theres not enough space
       */
      flex-shrink:
      /*
        minimum size of each item
       */
      flex-basis:

      /*
        shorthand for flex-grow, flex-shrink, flex-basis

        specifies how a flex item will be prioritized when free space is being distributed on the main axis

        1: unitless value dictates the proportion of flex items along the main axis after things like padding and margin. assign to individual flex-items to change each proportion relative to other flex-items
        200px: minimum of 200px to each item
        1 200px: evenly proportioned with a minimum of 200px
        #: play around with other integers
        initial: item will be inflexible when there is free space, but can shrink if needed
        auto: fully flexibly on main axis
        none: fully inflexible in all situations
        flex: [flex-grow] [flex0shrink] [flex-basis]
          - advanced use case
       */
      flex: GROW SHRINK BASIS;

      /*
        any integer, set the rendered order of any flex item
        */
      order: 1;

      /*
      similar affect as regular margin but with super powers
        auto: will absorb extra space and push flex items into different positions
          can be used to verticaly cente ritems
       */
      margin: auto;

      /*
      overrides the parent flex-container align-items property
        stretch: default,
        flex-start:
        flex-end:
        center:
        baseline:
       */
      align-self: stretch;
    }

```

## FLOATS

```css
/* w3schools */
.column {
  float: left;
  width: 33.33%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* switch to 2 column */
@media screen (max-width: 900px) {
  .column {
    width: 50%;
  }
}

/* switch to 1 column */
@media screen (max-width: 600px) {
  .column {
    width: 100%;
  }
}
```
