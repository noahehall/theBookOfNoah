######## MARKDOWN ###########
  http://www.markdowntutorial.com/conclusion/

  /**
   * Font styles
   */
  _italic_
  **bold**
  **_bold and italic_**
  # Header 1
  ## Header 2
  ### Header 3
  #### Header 4
  ##### Header 5
  ###### Header 6
  >blockquote

  /**
   * paragraphs
   * add two spaces after each line to indicate a soft break
   * each · in the example below represents a single space
   */
  We pictured the meek mild creatures where··  
  They dwelt in their strawy pen,··  
  Nor did it occur to one of us there··  
  To doubt they were kneeling then.··  

  /**
   * unordered lists
   */
  * Flour
  * Cheese
  * Tomatoes

  /**
   * Unordered lists + nesting
   * for nesting, indent exactly 1 space for each indentation
   */
   * Calculus
    * A professor
    * Has no hair
    * Often wears green
   * Castafiore
    * An opera singer
    * Has white hair
    * Is possibly mentally unwell

  /**
   * ordered lists
   */
  1. Cut the cheese
  2. Slice the tomatoes
  3. Rub the tomatoes in flour

  /**
   * ordered lists + nested paragraphs
   * make sure each paragraph is on its own line
   * each space will indent one tab character
   */
  1. Cut the cheese

    Make sure that the cheese is cut into little triangles.

  2. Slice the tomatoes

    Be careful when holding the knife.

    For more help on tomato slicing, see Thomas Jefferson's seminal essay _Tom Ate Those_.
  /**
   * Links
   */
  [Visit Dictionary!](dictionary.com)
  ####The Latest News from [the BBC](www.bbc.com/news)

  /**
   * Reference Links
   */
  Do you want to [see something fun][dcom-hp]?
  Well, do I have [the website for you][tcom-hp]!

  [dcom-hp]: www.dictionary.com
  [tcom-hp]: www.thesaurus.com

  /**
   * Image Links
   */
   ![Your Image Alt-text](http://octodex.github.com/images/octdrey-catburn.jpg)

  /**
   * Refereance Image Links
   */
  ![Image Alt Text][First Father]

  ![Image Alt Text][Second Father]

  [First Father]: http://octodex.github.com/images/founding-father.jpg

  [Second Father]: http://octodex.github.com/images/foundingfather_v2.png

###### JSDOCS ########
  Namepaths: used to refer to a variable that is elsewhere in your Documentation
    http://usejsdoc.org/about-namepaths.html
    myFunction
    MyConstructor
    MyConstructor#instanceMember
    MyConstructor.staticMember
    MyConstructor~innerMembe

  JSDoc supports two different kinds of tags:
    http://usejsdoc.org/about-block-inline-tags.html
    Block tags, which are at the top level of a JSDoc comment.
    Inline tags, which are within the text of a block tag or a description.
      @Param = block tags
      {LACE_BLAH} = inline tags

      /**
       * Set the color and type of the shoelaces.
       *
       * @param {LACE_COLORS} color - The shoelace color.
       * @param {LACE_TYPES} type - The type of shoelace.
       */
      Shoe.prototype.setLaceType = function(color, type) {
          // ...
      };
