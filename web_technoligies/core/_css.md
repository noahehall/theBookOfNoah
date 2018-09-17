# bookmark
  - [selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)


# must read
  - [css containment](https://developers.google.com/web/updates/2016/06/css-containment)

# links
  - [psuedo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
  - [css containment](https://developers.google.com/web/updates/2016/06/css-containment)
  - [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
  - [get width of current device](http://mydevice.io/)
  - [css box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes1)
  - [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
  - [positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
  -

## important links
  - [centering things](https://css-tricks.com/centering-css-complete-guide/)
  - [grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - [css reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - [color converter](https://serennu.com/colour/hsltorgb.php)
  - [css validator by w3c](http://jigsaw.w3.org/css-validator/#validate_by_input)
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
  -
# TLDR; best practices, tips and tricks
  - always validate your CSS, e.g. with http://jigsaw.w3.org/css-validator/#validate_by_input
  - always size things from the inside out
  - use `background-clip` to adjust how background-color|image fill its element
  - set the opacity of selected elements and their children via `opacity`
  - `@import` statements must precede all other types of rules except charset and cannot be ussed inside conditional group at-rule
    - in general, review the `import` link above as there are many gotchas
  - review `@font-face` syntax before using them, too many gotchas
  -

# syntax
  - property, e.g. `background-color`
  - value e.g. red in`background-color: red`
  - declaration: property + value e.g. `background-color: red;`
  - declaration block: one/more declarations surrounded by braces e.g. e.g. `{ background-color: red; width: 20px }`
  - rule: selector(s) + declaration block e.g. e.g. `p { background-color: red; }`

# values and units
  - numbers e.g. `20`
  - percentage e.g. `20%`
  - colors
    - keywords e.g. `red`
    - hexadecimal e.g. `#ff0000`
      - allows us to specify any of the 256 available values for each (16 x 16 = 256.)
    - rgb e.g. `rgb(0,0,255)`
      -  three parameters that represent the red, green and blue channel values of the colors between 0 and 255
    - hsl e.g. hsl(0,100%,50%)
      - accepts hue, saturation, and lightness values, which are used to distinguish between the 16.7 million colors
      - hue: the base shade of the color. This takes a value between 0 and 360, presenting the angles round a color wheel.
      - saturation: how saturated is the color? This takes a value from 0-100%, where 0 is no color (it will appear as a shade of grey), and 100% is full color saturation
      - how light or bright is the color? This takes a value from 0-100%, where 0 is no light (it will appear completely black) and 100% is full light (it will appear completely white)
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
      - rem: size of the default/root base font-size
      - vw, vh: 1/100th of the width/height of the viewport
    -

# the box model
  - the foundation of layout on the web
    1. content: min/max- width & height
      2. includes both text content & nested child elements
    2. padding: inner margin
    3. border
    4. outline (is not part of the box model, but behaves like the border drawn inside the margin)
    5. margin
  - overflow: when the content of an element overflows its absolute width/height
  - background: box backgrounds (color and images) are stacked on top of eachother
    - background-clip: determines how


# selectors
  - universel selector: selects all elements
  - simple: element type, class, id
  - attirbute: attribute & attribute values; values are case sensitive unless `i` i specified
  - pseudo-classes: based on element state, append keyword to selector
  - pseudo-elements: parts of content in a certain position in relation to an element, e.g. first word of a paragraph or some generated content
  - combinators: ways of combining two/more selectors for a more precise selection
  - multiple selectors: applying the same rule to multiple selectors that are separated by commas
    ```css

      :root {}
      p {}
      p.class {}
      p.id {}

      li:active {}
      checkbox:checked {}
      li:first-child {}
      li:last-child {}
      button:enabled {}
      a:hover {}
      input:focus {}
      input:required {}


      [attribute-exists] {}
      [attribute-with='value'] {}
      [attribute-with-case-insensitive='value' i] {}
      [attribute-contains-enum~='value'] {}
      [attribute-contains*='value'] {}
      [attribute-exactly-or-starts-with|='value'] {}
      [attribute-starts-with^='value'] {}
      [attribute-with='value'] {}
      [attribute-ends-with$='value'] {}




    ```

# media queries


# flexbox
    - one dimensional: columns OR rows

# grid
    - CSS Grid Layout (aka "Grid"), is a two-dimensional (columns and rows) grid-based layout system
    - define:
      - grid container: `display: grid`
        - the direct parent of all the grid items.
      - grid item: set the column and row sizes with `grid-template-columns` and `grid-template-rows`,
      - place grid-item child elements into the grid with
        - `grid-column`
        - `grid-row`
    - grid line: The dividing lines that make up the structure of the grid
    - grid track: The space between two adjacent grid lines.
    - grid cell: The space between two adjacent row and two adjacent column grid lines. It's a single "unit" of the grid.
    - grid area: The total space surrounded by four grid lines. A grid area may be comprised of any number of grid cells.
  -


# at-rules
  - used to convey metadata & conditional information e.g. `@IDENTIFIER (RULE);`
    - media query: consits of a media type and zero/more expressions that check for the conditions of particular m edia features
    - page: modify margins, orphans, widows, and page breaks when printing a document
    - font-face: specify a custom font loaded from a remote/server or user's computer
      - most browsers only download `@font-face` fonts if the font-family is actually used in a CSS declaration
        - so list as many as needed, but be careful how many you actually use
      - use `local()` to specify the name of a locally-installed front, useful for offline styling
    - keyframes: controls the intermediate steps ina  CSS animation sequence by defining styles for keyframes/waypoints along the animation sequence
  ```css

    @charset 'UTF-8';
    @import 'custom.css';
    @import 'noahedwardhall.com/styles/poop.css';

    @font-face {
      font-display: auto;
      font-style: oblique 30deg 50deg;
      font-variation-settings: normal;
      font-weight: bold;
      font-family: "Open Sans";
      src: local("Helvetica Neue Bold"),
           url(https://somewebsite.com/path/to/font.woff),
           url(/fonts/OpenSans-Regular-webfont.woff2) format("woff2"),
           url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
    }
    @page {}

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

    @keyframes identifier {
      0% { top: 0; left: 0; }
      30% { top: 50px; }
      68%, 72% { left: 50px; }
      100% { top: 100px; left: 100%; }
    }
  ```


# SASS
# JSS
