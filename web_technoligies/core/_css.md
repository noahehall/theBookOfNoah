# must read
  - [css containment](https://developers.google.com/web/updates/2016/06/css-containment)

# links
  - [psuedo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
  - [css containment](https://developers.google.com/web/updates/2016/06/css-containment)
  - [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
  - [css box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes1)
  - [get width of current device](http://mydevice.io/)

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

## flexbox
  - one dimensional: columns OR rows


## [grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
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

# fonts
# media Queries
# pseudo elements
# pseudo states

# SASS:
  CSS extension
  pre-processed
  extensible
  written in ruby


	define variables
	    ```css
        $variableName : VALUE
  	    .navbar {
  	      background-color: $navbar-color
	    }
      ```


	nesting rules <a class='parent'> <b class='child'></b></a>
	  dont nest more than 3 levels, just 'for' sanity sake
	    ```css
      .parent {
	      style1

	      childstyle {
	        style2

	        grandchildstyle {
	          style 3
	        }
	      }
	    }
      ```
	    loads the rule as div.parent.child.grandchild

	parent selectors div.parent.child
	    parentClass
	      css definitions
	      &.chidClass
	        css definitions
	partials
	    ```css
        @import "path/to/css/file.scss";
      ```

	    convention
	        name partial.scss files as _fileName.scss

	extensions/inheritance : base one style declaration on another
	    ```css
        .someBaseClass {
  	      blah blah blah
  	    }

  	    .childClass {
  	      @extend .someBaseClass
  	      overwite style1
  	      new style1
  	    }

  	    .message {
  	      border: 1px solid #ccc;
  	      padding: 10px;
  	      color: #333;
  	    }

  	    .success {
  	      @extend .message;
  	      border-color: green;
  	    }

  	    .error {
  	      @extend .message;
  	      border-color: red;
  	    }

  	    .warning {
  	      @extend .message;
  	      border-color: yellow;
  	    }
      ```
	Operators: use basic math to set/not set styles
	    math operators: '+, -, *, /, and %'
    ```css
	    $border = 1px;
	    $thicker = $border * 5;

	    .blah {
	      @if ($border < 1){
	        style:value;
	      }@else{
	        style:value;
	      }
	    }
	    .container { width: 100%; }


	    article[role="main"] {
	      float: left;
	      width: 600px / 960px * 100%;
	    }

	    aside[role="complimentary"] {
	      float: right;
	      width: 300px / 960px * 100%;
	    }

    ```
	mixins: macros, like javascript functions
  ```css
	    @mixin rounded ($radius : 10px) { /*10px is the default value*/
	      style1: $radius;
	      style2: blah
	    }
	    .ul {
	      @include rounded(20px); /*call rounded with 20px to override its defualt value */
	    }

	    @mixin border-radius($radius) {
	      -webkit-border-radius: $radius;
	         -moz-border-radius: $radius;
	          -ms-border-radius: $radius;
	              border-radius: $radius;
	    }

	    .box { @include border-radius(10px); }
    ```