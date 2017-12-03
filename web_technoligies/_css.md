# links
  - [psuedo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
  - [css containment](https://developers.google.com/web/updates/2016/06/css-containment)
# basics
  - media query: consits of a media type and zero/more expressions that check for the conditions of particular media features
# quickies
## [centering](https://css-tricks.com/centering-css-complete-guide/)
  - horizontal
    1. inline-* elements
    2. block elements
    3. more than one block element
  - vertical
    1. inline-* elements
    2. block elements
  - horizontal + vertical
    1. fixed width & height
    2. unknown width & height
    3. flexbox

# [grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - CSS Grid Layout (aka "Grid"), is a two-dimensional grid-based layout system
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


## fonts
  - `@font-face`: allows you to define the location of a particular font resource, its style characteristics, and unicode codepoints that should be used
    ```
      @font-face {
      font-family: 'Awesome Font';
      font-style: normal;
      font-weight: 400;
        // reference, load, and use locally installed fonts
      src: local('Awesome Font'),
          // load external fonts with specific formats
          // the order of format()s is important, as the browser checks each one and picks the first that is supported
           url('/fonts/awesome.woff2') format('woff2'),
           url('/fonts/awesome.woff') format('woff'),
           url('/fonts/awesome.ttf') format('truetype'),
           url('/fonts/awesome.eot') format('embedded-opentype');
      // specify the range of characters to get from the font
      unicode-range: U+000-5FF; /* Latin glyphs */
    }
    ```
    1. multiple `@font-face` declarations can be used to construct a *font-family*
