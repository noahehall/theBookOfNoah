# CSS + HTML

- not everything is captured, dont depend on this file as a full reference
  - e.g. some tricks arent listed based on my opinions
  - check MDN, then w3.org as your use case becomes more complex
- mainly for keeping me up to date whenever I return to a predominately frontend role
  - where expert level css knowledge is required to remain efficient

## links

- [w3 css validator](https://jigsaw.w3.org/css-validator/)
- [w3 css](https://www.w3.org/Style/CSS/Overview.en.html)
- [w3 css release phases](https://www.w3.org/Style/CSS/current-work)
- [checking browser support](https://caniuse.com/)
- [facebook open graph protocol](http://ogp.me/)
- [webaim: all about accessibility](https://webaim.org/)

- html
  - [html entity reference](https://html.spec.whatwg.org/multipage/indices.html)
  - [html reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
  - [xml/html character entity reference](https://en.m.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)
  - [html on mdn](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [semantics](https://developer.mozilla.org/en-US/docs/Glossary/semantics)
  - [sections of a document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
  - [html markup validation service by w3c](https://validator.w3.org/)
  - [using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
  - [data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
  - [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
  - [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
  - [link type reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)
  - [content categories](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories)

## basics

- w3 explanation of colors & status codes
  - shouldnt use
    - FPWD: first public working draft
    - WD: working draft
  - could use
    - CR: candidate recommendation
    - CRD: candidate recommendation draft
  - ready for enterprise
    - PR: proposed recommendation
    - REC: recommendation
  - theres a better version out
    - SPSD: superseded recommendation:

## best practices / gotchas

- putting inline elements on different lines in source code creates a space between them
  - set fontsize 0 to the containing element

## html

### content categories

- metadata: link, meta, style
- flow: a, p, strong, button
- sectioning: header, aside, nav
- heading, h1, h2 h3,
- phrasing, span, input, cite
- ebedded, audio, canvas, video
- interactive, textarea, a, select

### elements

- body: contains all pages content
- img: embeds an image into the page at the position it appears
- layout elements
  - header
  - nav
  - main / article / section / div
  - aside
  - footer
- block text
  - p
  - h#
- lists
  - ol / ul
  - dl + dt + dd
  -
- inline text
  - em
  - strong
  - blockquote
  - cite
  - abbr
  - address
  - sup / sub
- times and dates
  - time
- computer code
  - code
  - pre
  - var
  - kbd
  - samp
- q
- a

### anatomy of an HTML document

- doctype: always include for things to work right
- ht

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>My test page</title>
    </head>
    <body>
      <img src="images/firefox-icon.png" alt="My test image" />
    </body>
  </html>
  ```

### forms

- forms separate users from companies
- someone wants to buy something, someone wants to sell something
- someone wants to grow their userbase, someone wants to be part of a community/team/fanbase/etc
- placeholders should be used as an aid to guide users
  - provide immediate feedback to users
  - best practices
    - use existing data to pre-populate fields
    - ensure forms are auto-fillable by browsers
    - always show progress meters
    - dont break the back button
    - provide visual calendars when selecting dates
    - use datalist to provide suggestions 'for' form inputs
      .users are not restricted to the suggestions provided
    - use labels on form inputs, and make them visible
    - use placheolders to provide guidance
    - use established names 'for' elements and include the autocomplete attribute
    - use the browsers built in validation attributes like pattern, required, min, and max
    - use javascript and the constraints validation api 'for' complex validation
    - manage focus when validation fails
    - autocorrect when you can
    - show validation errors in real time

```js
labels
  label.for='someInputId'
  input.id='someInputId'

inputs
  input.placeholder='show this text when no user input exists'
  input.type='datetime-local' //calendar

  input.autocomplete='email'

autofocus: only one element can have it, boolean
  input.autofocus='true'

validation
  required: if exists, this input needs a value
    input.required

  custom validation: <https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity>
    input.value='blah'
    submit.onclick=()=>{
      if input.value !== 'bloop'
      input.setCustomValidity = 'Input value should be bloop'
    }
  constraint validation:
    <https://html.spec.whatwg.org/#constraint-validation-api>
    <https://www.html5rocks.com/en/tutorials/forms/constraintvalidation/>
    the algorithm utilizes new HTML5 attributes min, max, step, pattern, and required as well as existing attributes maxlength and type.

    //has error
    el.validity.valueMissing ||
    el.validity.typeMismatch ||
    el.validity.patternMismatch ||
    el.validity.tooLong ||
    el.validity.tooShort ||
    el.validity.rangeUnderflow ||
    el.validity.rangeOverflow ||
    el.validity.stepMismatch ||
    el.validity.badInput ||
    !el.validity.valid;

    // set error + message to user
    el.setCustomValidity(el.validationMessage);
    el.title = el.validationMessage;
    //clear error
    el.setCustomValidity('');
    //check if form is invalid
    if (!e.currentTarget.checkValidity())
    if (formElement.checkValidity())
```

## CSS layouts

- organized the content first in a well structured layout in the normal flow

  - before applying any CSS

- normal flow

  - default display and lyaout of elements when no CSS has been applied
  - elements displayed in HTML order
  - normal flow element types
    - block level elements:
      - full width of containing element
      - height of content
      - separated by margin
        - margin collapsing: when two elements margins take up the same space
    - inline elements:
      - take width of content
  - stacking order: as defined in HTML, all elements in the same zindex (0)

- box model: 5 properties that define how an element takes up space, i.e the total area of an element, plus 4 positioning offsets that are language dependent

  - width/inline-size: should be thought of as the length of the line axis (language dependent)

    - i.e. the inline dimension: the line that the text flows along

  - height/block-size: should be though tof as the length of the perpendicular to line axis (language dependent)

    - i.e. the block dimension: i.e. perpendicular to the inline dimension

  - padding: within element, expands element itself
  - margin: around element, expands space element consumes
  - border: between padding & margin, expands space consumes

  - top/block-start:
  - right/inline-end:
  - bottom/block-end:
  - left/inline-start:

  - logical properties: enable the developer to logically apply box model properties to all languages, regardless of the direction in which the text flows
    - can be appended to any box model property (see top,right,bottom,left above)
    - without logical properites
      - left-to-right languages work as expected
      - right-to-left languages cause the 2 of 4 offsets to reverse horizontally
      - top-to-bottom languages cause the 2 of 4 offsets to reverse vertically

- box-sizing property: sets the algorithm for how the box model determines the total area an element consumes

  - gotchas

    - computedSize = width + height
    - margin still adds additional space to the area the element consumes

  - content-box: element size = computedSize + padding + border
    - i.e. increases the total area when adding padding + border
  - border-box: element size = (computedSize - (padding + border)) + padding + border
    - i.e. maintains the computed size of the width + height

- display property
  - block
  - inline
  - flex
  - grid

### floats

- floated elements are removed from normal flow
- any element following a floated element will fill the space around it
  - but text content will wrap around floated content
- parent elements will only recognize the height of non floated elements
  - thats why you have to clear a float, so that the height of the floated element is respected by the parent

### positioning

- arrange elements relative to their current position, containing element, or the browser viewport
  - all positioned elements accept
    - the zindex to control the zed dimension
    - top,left,right,bottom offsets
- static, sticky, & relative all leave the surrounding content unchanged
- absolute & fixed affect the surrounding content (because the element is taken out of the normal flow)

- static: by default all elements start with their position set to static: i.e. determined by the normal flow of HTML source
- relative: element stays in the normal flow but can be offset without affecting surrounding elements
  - great for creating an ancestor for children elements
- sticky: make an element stick relative to its containing block & viewport
  - element renders as relative positioned,
  - until its containing block (usually immediate parent) hits the specified threshold/offset, then its renders as fixed to the viewport
  - until it the sticky element meets the opposite end of its containing block, then it goes back to relative and scrolls with the viewport
- absolute: removes element from the normal flow
  - is relative to the closest positioned ancestor/body
  - other elements take up the space the absolutely positioned element previously consumed
- fixed: keeps an element on screen, regardless of scroll position

### flexbox & Grid

- useful terms

  - grid: pattern used by designers to align design elements for consistent flow & symmetrical layouts
    - equal width rows & columns are added as guides
      - generually using 12 columns, as its divisible by 2,3,4,6 for targeting general devices & creating consistent designs
    - gutters are added for consistent spacing between elements
    - design elements are then placed on the grid
  - CSS grid systems: predefined style rules are tried to grid/column-specific class names
    - e.g. col-1 === 1/12 width, col-4 === 4/12 width, col8 === 8/12 width, etc

- Versus rap battle
  - both
    - can use any css length unit, e.g. %, vh, px, rem, etc
      - but both works best with `fr`
      - ^ fractional unit: you dont specify the `fr` in flex, but you do in grid
        - 1 === distribute evently
        - 2 = give this one 2/totalColsOrRows etc
  - GRID:
    - 2 dimensions at the same time
    - additional groups of items have the same dimensions as previous group by defualt
    - declare dimensions for grid-items in the parent, via a single property
  - FLEXBOX
    - 1 dimension
    - additional groups of items (when wrapping) have their own dimensions
    - declare dimensions for flex-items on the flex item, via multiple properties

#### flexbox

- 1-dimensional alignment of content, ordering items, and implementing flexible sizing

  - the ability to make the flex items flexible, altering their width/height to fill the availble space in the main dimension
  - while it dictates behavior on a single axis
    - items can wrap to create additional groupings
    - flex containers can be nested to create additional dimensions

- flex-direction: determines which dimension is the main & cross axis

  - but also depends on the writing order of the document
  - column: consider height & ignore width
  - row: consider width & ignore height

  - row: the parent is a row, children render left to right, additional rows created when wrapping
    - width is an input var to the flex algorithm
    - main axis: horizontal
      - items start & end -> left to right
    - cross axis: vertical for row
      - items start & end -> top to bottom
  - row-reverse: flips start & end on both dimensions

  - column: the parent is a column, children render top to bottom, additional columns created when wrapping
    - height is an input var to the flex algorithm
    - when wrapping occurs, additional columns are created
    - main axis: vertical
      - items start & end -> top to bottom
    - cross axis: horizontal
      - items start & end -> left to right
  - column-reverse: flips start & end on both dimensions

- flex-wrap: is per group on main axis

  - i.e. if you set to wrap,
    - and 2 groups are created are created on the main axis (because there wasnt enough space on first group)
      - flex-items in the second group will have there own computed values
      - e.g. the first group of 4 is 10px each, whlie the second group of 2 is 20 px each

- order: change the visual layout order of flex items without changing the HTML
  - default is 0 for all flex items
  - 1 -> first item on main exis, incremented as expected
  - -1 -> before 0, etc

#### grid

- designed for two dimensional layouts at hte same time

- grid lines: based on language direction (i.e. left -> right & top -> bottom)

  - divide the grid into cols & rows
  - top left is 1,1 for eng,

- grid-template-row|column

  - defines the CSS grid
  - grid items will equal exactly 1 col & 1 row by default

- grid-row|column
  - defines how specific items span rows & columns

### multi-column

## examples

```css

  /* box model
    ----------------------------------------------------------------------------
    */
  /*
    the box-model fix
    ensures elements retain height & width
    even when border/padding is applied
    */
  html {
    box-sizing: border-box

    *, *:before, *:after {
      box-sizing: inherit
    }
  }

  /*
    floats
    ----------------------------------------------------------------------------
    */
  /*
    clearing floats
    used to return elements to the normal flow after a floated element
    e.g. dont wrap around floated elements
    e.g. ensure the parent takes up the full height of all children, (+ floated)
    */
  .parent {
    .floatedChild {
      float: left|right;
    }
    .otherElements {
      clear: left|right|both;
    }
  }

  /*
    clearfix hack
    force an element to self-clear its children
    */
  .parentElement {
    &:after {
      content: "";
      display: table;
      clear: both;
    }
    /* one/more children floated */
  }

  /*
    display: flow-root
    generally better than clearfix hack
    */
  .parentElement {
    display: flow-root;
    /* one/more children floated */
  }

  /*
    flex
    ----------------------------------------------------------------------------
    */

  .parent {
    display: flex; /* width of parent i.e. block */
    display: inline-flex; /* width of flex-items i.e. inline */

    flex-direction: row|column;
    flex-wrap: nowrap; /* force items to stay on main axis & resize */
    flex-wrap: wrap; /* permit items to wrap to additional lines */
    flex-wrap: wrap-reverse; /* flips wrapping on cross axis */
    flex-flow: flexDirection flexWrap; /* shorthand, default 0 1 auto */

    /* can be applied at any depth, but this illustrates default behavior */
    .immediateChildren {
      /* are flex items */
      flex-basis: poop; /* initial size of all flex-items, the ideal size */
      flex-grow: poop; /* how flex-items expand to fill extra space */
      flex-shrink: poop; /* how flex-items shrink to respect limited space */
      flex: flexGrow flexShrink flexBasis; /* shorthand */

      flex: 1 1 100px; /* expand & shrink all items evenly per axis */
      flex: 0 0 100px; /* dont expand/shrink any items on any axis */
      flex: 1 1 0; /* expand/shrink evenly only considering available space (until cropping starts) */
      flex: 1 1 auto; /* expand/shrink evenly but consider the size of the content of each item */
    }
    .thisImmediateChild {
      flex: 2 1 100px; /* expand 2/(totalItems + 1), but shrink same as siblings */
      /* ^ we add 1 as you have to include the implicit item for the extra space */
      /* ^ unless you set flex-basis to 0, then its 2/totalItems */
      order: 1; /* first item on main axis */
    }
    .flexItemAndContainer {
      flex: 1 0 auto;
      display: flex;
    }
  }

  /*
    grid
    ----------------------------------------------------------------------------
    */

  .parent {
    display: grid; /* full width */
    display: inline-grid; /* width of content */

    grid-template-columns: 100px 100px 100px; /* 3 columns of 100px */
    grid-template-columns: repeat(3, 100px); /* 3 columns of 100px */
    grid-template-columns: 100px repeat(2, 100px); /* 3 columns of 100px */
    grid-template-columns: repeat(3, 1fr); /* 3 equally spaced columns */

    grid-template-rows: 100px 100px; /* 2 rows 100px */
    grid-template-rows: repeat(2, minmax(100px, 100px)); /* 2 rows 100px */
    grid-template-rows: repeat(2, minmax(100px, auto)); /* 2 rows atleast 100px, but expand for content */
    grid-template-rows: minmax(100px, auto); /* first row 100px, but expand for content */


    /* best if used when template-column uses fr as this ADDs to total width, like the box-content model */
    /* cant use fr */
    column-gap: 10px; /* gutter */
    row-gap: 10px; /* gutter */
    gap: 10px; /* gutter: shorthand for {row, column}-gap */
    gap: rowGutter colGutter;

    .thisImeddiateChild:nth-child(1) { /* target first item for placement in grid, etc */
      grid-column-start: 2; /* start at col 2 */
      grid-column-end: 4; /* end at 4, but dont take up 4 */
      grid-column: 2 / 4; /* shorthand^: take up 2 columns */

      grid-row-start: 2; /* start at row 2 */
      grid-row-end: 4; /* end at 4, but dont take up 4 */
      grid-row: 2 / 4: /* shorthand^: take up 2 rows */
    }
  }

```
