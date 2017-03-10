# links
  - [psuedo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
  - [css containment](https://developers.google.com/web/updates/2016/06/css-containment)

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
