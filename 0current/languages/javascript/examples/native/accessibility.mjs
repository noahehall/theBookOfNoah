/*

# examples

```js
  /**
   * best practices
   */

  /**
   * managing `focus`
   *
   * Do not use createEvent(), initEvent() and dispatchEvent() to send focus to an element.
   * Use element.focus() instead.
   *
   * track focus using
   * ++ focus state changes: `onfocus` `onblur`
   * ++ currently focused element: `document.activeElement`
   + ** current document: `document.hasFocus`
   * can be used with any element
   */


  /**
   * `keyboard navigation`
   * recommended reading
   * @see https://w3c.github.io/aria-practices/#keyboard
   * @see https://w3c.github.io/aria-practices/#TreeView

   * The Tab key should provide focus to the widget as a whole. and not to its child elements
   * + widget children should be navigatable/selectable via arrow keys, tabbing to a menu bar should NOT put focus on the menu's first element.
   * + outside `<form>`: `spacebar` and `enter` should select/activate the control
   * + inside `<form>`: `spacebar` select/activate, `enter` submit
   * + generally you should mimic the standard desktop behavior
   *
   * use `onkeydown` to trap key events
   * + never use `onkeypress`
   *
   * programmatically apply styles to:
   * + elements with `tabindex=-1` and elements receiving ..(what was suppose to finish this sentence?)
   * + elements programmatically focused
   * ++ fk IE: they dont automatically draw the focus outline for these items
   *
   * prevent handled key events from performing browser fns
   * + return false from your event handler to stop propagation
   * + use `stopPropagation` or `stopImmediatePropagation` or whatever it is
   *
   * avoid using `tabindex` > 0
   * + makes it diffiulct for assistive technologies to navigate & operate page content
   * + instead structure the document source with elements in a logical sequence
   *
   * interactice components authored using non-interactive elements are not listed in the accessibility tree
   * + instead always use semantically correct elements to describe the content
   * +
   * UX
   * +`keyboard` and `mouse` should offer the same experience
   * ++ thus duplicate logic across `keypress` and `click` handlers
   * ++ i.e. these event handlers are cross-cutting concerns for `keypress` `click` events
   * +++ `el.onclick=someFn()` `el.onkeydown=return event.keyCode != 13 || someFn()`
   *
   */

  /**
   * `visibility` changes
   *
   * visibility states
   * + element visible ? `aria-hidden=true` : `aria-hidden=false`
   * + [aria-hidden="true"] { display: none }
```

```js
/**
 * @examples
 * elements
 */

/**
 * interactive elements
 *
 * `<a href='has to be set'>`
 * `<audio controls=has to be set'>`
 * `<img usemap='has to be set'>`
 * `<input type='cannot be hidden'>`
 * `<video controls='has to be set'>`
 * `<button>` `<details>` `<embed>` `<iframe>`
 * `<label>` `<select>` `<textarea>`
 */

/**
 * palpable content
 * + makes an element non-empty by providing either:
 * ++ descendant non-empty text
 * ++ something users can hear (audio)
 * ++ something users can view (video/img/canvas)
 * ++ something users can interact with (form controls)
 *
 *
 * audio // if controls attribute is set
 * dl // if children include atleast one name-value group
 * input // if type attribute is not hidden
 * menu // if chilren include at least one li element
 * ol // if children include at least one li element
 * ul // if children include at least one li element
 * text // that is not inter-element whitespace
 * a, abbre, address, article, aside, b, bdi, bdo, blockquote, button, canvas, cite, code
 * data, details, dfn, div,em embed, fieldset, figure, footer, form, h1,h2,h3,h4,h5,h6
 * header, hgroup, i, iframe, img, ins, kbd, label, main, map, mark, math, meter, nav,
 * object, output, p, pre, progress, q, ruby, s, samp, section, select, small, span, strong
 * sub, sup, svg, table, textarea, time, u, var, video,
 */

/**
 * grouping controls
 * `menus` `tablists` `grids` `tree views`
 *
 * choice elements (i.e. children of grouping controls)
 * `choice` `tab` `cell` `row`
 */

/**
 * metadata content
 * + sets up presentation/behavior of the rest of the content
 * + sets up the relationship of the document with other documents
 * + conveys other 'out of band' information
 *
 *
 * base, link, meta, noscript, script, style, template, title
 */

/**
 * flow content
 * + elements used in the body of docs and applications
 *
 *
 * area // if descendant of a map element
 * link // if its in the body
 * main // if its a hierarchically correct main element
 * meta // if `itemprop` is set
 * a, abbr, address, article, aside, audio, b, bdi, bdo, blockquote, br, button
 * canvas, cite, code, data, datalist, del, details, dfn, dialog, div, dl, em
 * embed, fieldset, figure, footer, form, h1,h2,h3,h4,h5,h6, header, hgroup, hr
 * i, iframe, img, input, ins, kbd, label, map, mark, menu, meter, nav, noscript,
 * object, ol, output, p, picture, pre, progress, q, ruby, s, samp, script, section,
 * select, slot, small, span, strong, sub, sup, svg, table, template, textarea
 * time, u, ul, var, video, autonomous custom elements, text
 */

/**
 * sectioning content
 * + content that defines the scope of headings & footers
 * + each element below potentially has a heading & outline
 *
 * `<article>` `<aside>` `<nav>` `<section>`
 */

/**
 * heading content
 * + defines the header of a section
 *
 * h1, h2, h3, h4, h5, h6, hgroup
 */

/**
 * phrasing content
 * + the text of the document
 * + & element sthat markup that text at the intra-paragraph lefel
 *
 * area // if descendant of map element
 * link // if allowed in body
 * meta // if itemprop attribute is set
 * a, abbr,audio, b, bdi, bdo, br, button, canvas, cite, code, data, datalist, del,
 * dfn, em, embed, i, iframe, img, input, ins, kbd, label, map, mark, math,
 * meter, noscript, object, output, picture, progress, q, ruby, s, samp, script,
 * select, slot, small, span, strong, sub, sup, svg, template, textarea, time, u, var
 * video, wbr
 */

/**
 * embedded content
 * + content that imports another resource into the document
 * + content from another vocabulary that is inserted into the document
 *
 * audio, canvas, embed, iframe, img, math, object, picture, svg, video*
 */

/**
 * script supporting elements
 * + do not represent anything themselves
 * + used to support scripts
 *
 * script, template
 */

/**
 * transparent content models
 * skipped
 * @see https://html.spec.whatwg.org/multipage/dom.html
 */

/**
 * paragraphs
 * skipped
 * @see https://html.spec.whatwg.org/multipage/dom.html
 */
```

```js
/**
 * @examples
 * html attributes
 */

/**
   * global attributes
   * + can be specified on all html elements

   * defined in HTML SPEC
   * accesskey, autocapitalize, autofocus, contenteditable, dir, draggable, enterkeyhint
   * hidden, inputmode, is, itemid, itemprop, itemref, itemscope, itemtype, lang, nonce
   * spellcheck, style, tabindex, title, traslate,

   * defined in DOM spec
   * class // comma separated tokens
   * id // unique identifier
   * slot // assign a slot to an element

   * data-attributes
   * + store custom data, state, annotations, etc.
   * + specific to the page
   *
   * `data-KEY=value`

   * `tabindex`
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   *
   * indicates an element can be focused, and where it participates in sequential keyboard navigation
   * potential values
   * + `=-1` not reachable via sequential keyboard navigation, but can be focused with js/mouse click
   * ++ use cases: creating acessible widgets with js; content that appears in response to events, trapping/managing keyboard navigation with js in response to `onkeydown`; removing elements from sequential navigation
   *
   * + `=0` element should be focusable in sequential keyboard navigation, after any other elements with a higher value; sequence is then defined by document source order
   * ++ use cases: adding non interactive elements to sequential navigation
   *

   * `title`*dont use*
   * + advisory information for the element
   * + usecases: tooltips, links, images, paragraphs, label/instructions for interactive elements
   * ++ many user agents dont expose the `title` in an accessible manner

   * `lang`
   * + the primary language for the elements content
   * + the primary language for the elements attributes that contain text
   * + must be a valid BCP 47 language tag or empty string

   * `translate`
   * + specify whether an elements attribute values and text nodes should be translated
   * ++ when the page is localed
   *
   * values
   * `=no` do not translate
   * `=yes` translate

   * `style`
   * @see css

   * innerText
   * outerText




  /**
   * aria attributes
   */
```

```js
  /**
   * `events`
   */

  /**
   * global event handlers
   * + can be specified on any HTML element
   *
   * common global event handlers
   * onblur //
   * onchange //
   * onclick //
   * onclose //
   * ondblclick //
   * ondrag //
   * ondragend //
   * ondragenter //
   * ondragleave //
   * ondragover //
   * ondragover //
   * ondragstart //
   * ondrop //
   * onerror //
   * onfocus //
   * onformdata //
   * oninput //
   * oninvalid //
   * onkeydown
   * onkeypress
   * onkeyup
   * onload
   * onloadeddata
   * onloadedmetadata
   * onloadstart
   * onmousedown
   * onmouseenter
   * onmouseleave
   * onmousemove
   * onmouseout
   * onmouseover
   * onmouseup
   * onprogress,
   * onreset
   * onresize
   * onscroll
   * onsecuritypolicyviolation
   * onselect,
   * onslotchange
   * onstalled
   * onsubmit
   * ontoggle,
   * onvolumechange,
   * onwheel
   *
   * uncommon global event handlers
   * onauxclick, oncancel, oncanplay, oncanplaythrough,oncontextmenu, oncopy, oncuechange
   * oncut, ondurationchange, onemptied, onended, onpaste, onpause, onplay, onplaying,
   * onratechange, onseeked, onseeking, onsuspend, ontimeupdate, onwaiting
   */

  /**
   * `Event`
   *
   * stopPropagation()
   * preventDefault()
   * stopImmediatePropagation()
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation
```

```js
/**
 * @examples
 * keyboard related accessibility situations
 */

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
 *
 * `tab order` `tabindex` `roving tabindex` `aria-activedescendant`
 *
 * 0. set all `disabled` elements to `tabindex=-1`
 * + avoid setting tabindex on noninteractive elements, instead use a button (e.g. wherever you're using a div)
 * 1. for all non-disabled elements, user agents cycle through source order by defualt
 * ++ except for elements `tabIndex` > 0 which are prioritized
 * 2. first cycles through elements with a positive tabIndex
 * 3. then elements with `tabIndex=0` or `getElementById('poop').tabIndex = 0` or interactive elements (which have an intrinsic `tabIndex=0`)\
 *
 * notes
 * + elements with `tabindex=-1` are not focusable by keyboard,
 * + but are focusable by script (i.e. el.focus()) in response to arrow/other key presses
 *
 * grouping controls
 *
 * 0. parent element === `tabindex=0`
 * 1. choice elements === `tabindex=-1`
 * ++ remove from tab order
 * ++ but should be navigatable by array keys
 * 2. when tabbing away and returning, focus should return to the previous active choice element
 *
 * roving tabindex
 * technique1
 * + @see https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html
 * ++ `fnRovingIndex = () => focusedEl.tabindex=0` && previousEl.tabindex=-1`
 * ++ `arrowKey.onpress=fnRovingIndex()`
 * technique 2
 * + @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
 * + `fn.ManagingVirutalFocus()=el[aria-activedescendant]=nextChildControl && nextChildControl.focus()``
 * `groupingElement.onArroKeyPress=manageVirtualFocus()`
 *
 * UX
 * + I can tab to the parent element, and navigate to choice elements via arrow keys
 * + if I tab away and return, the previous active choice element is focused
 */
```

```js
  /**
   * @examples
   * css related accessibility situations
   */

  /**
   * `dotted` borders
   *
   * when appylying a dotted border programmatically
   * + first appy an invisible 1px border
   * + then apply the dotted border
   * ++ fk IE: they dont support CSS outlines, so you have to use a border
   * +++ borders take up space, and you need to do this so the element doesnt grow
   *
```

*/
