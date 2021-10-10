# current - forms
# links
  - [html basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
  - [guides and tutorials](https://developer.mozilla.org/en-US/docs/Learn/HTML)
  - [facebook open graph protocol](http://ogp.me/)
  - [html forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  - http://docs.webplatform.org/wiki/Main_Page
  - wufu: http://www.wufoo.com/html5/types/7-number.html
  - https://www.tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls/#input_date
  - https://html.spec.whatwg.org/#constraints

## element links
  - [data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
  - [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
  - [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
  - [link type reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)
  -


## really important links
  - [html entity reference](https://html.spec.whatwg.org/multipage/indices.html)
  - [html reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
  - [xml/html character entity reference](https://en.m.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)
  - [html on mdn](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [semantics](https://developer.mozilla.org/en-US/docs/Glossary/semantics)
  - [sections of a document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
  - [using html sections and outlines](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
  - [html markup validation service by w3c](https://validator.w3.org/)
  - [using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)


  
# TLDR; best practices
  - implement structural hierarchy
    - review our page with an html outline checker / validator
    - use the appropriate HTML element that best describes the semantic meaning of the content
    - use the appropriate heading element
      - only one `h1` per page
      - dont use more than three different heading elements per page
    - required for accessibility (e.g. screen readers and navigation)
    - required for good SEO
  - anchor tags
    - should always have a title attribute
    - use relative links where possible
      - the browser starts by looking up the real location of the server on the Domain Name System, then it goes to that server and finds the file that is being requested. With a relative URL on the other hand, the browser just looks up the file that is being requested, on the same server.
      - When you are linking to a resource that is to be downloaded rather than opened in the browser, you can use the download attribute to provide a default save filename
  - img tags
    - should always have an alt tag

# Basics
  - HTML: yper text markup language
    - describes and defines the content of a webpage alongw ith the basic layout of the web page
  - hyper text: links that connect web pages to one another
  - markup: annotates text, images, and other content for display in a web browser

# syntax
## tags
  - tags:
    - are case insensitive
    - opening tag: ```html <p>```
    - closing tag: ```html </p>```
    - content: ```html <p>content</p>```
    - element: the opening and closing tags, and content
    - element attributes: ```html <p attribute="value">content</p>```

### elements
  - doctype: always include for things to work right
  - html: wraps all the content on the page  and sets the language of the page
    - `<html lang="en-US">`

#### head
  - head: container for stuff you want to cindlue on the page html page that is not the content you are showing to ciewers
  - meta: metadata describing the pages content
    - `charset='utf-8'`: sets the character encoding
    - name and content attribute are used to describe many meta elements
      - `name='author'` `content='noah edward hall'`
      - `name='description'` `content='the book of noah'`
  - title: the title fo the page
  - link: external resource link element specifie relationships between the current document and an external resource, e.g. stylesheets, favicons, mobile/home screen icons
    - `<link href="main.css" rel="stylesheet">`
    - `<link rel="icon" href="favicon.ico">`
    - new performance and security features enabled with `rel='preload'` and `crossorigin='BLAH'`


#### body
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
    ```
      mailto:
      mailto:nowhere@mozilla.org
      mailto:nowhere@mozilla.org,nobody@mozilla.org
      mailto:nowhere@mozilla.org?cc=nobody@mozilla.org
      mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject
    ```
## anatomy of an HTML document
  - doctype: always include for things to work right
  - ht
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>My test page</title>
      </head>
      <body>
        <img src="images/firefox-icon.png" alt="My test image">
      </body>
    </html>
    ```

# FORMS
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

    labels
      label.for='someInputId'
      input.id='someInputId'

    inputs
      input.placeholder='show this text when no user input exists'
      input.type='datetime-local' //calendar

    widgets:
      calendar: http://codepen.io/greenido/pen/xwGEWO

    autocomplete attribute:
      https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill?hl=en
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete
      input.autocomplete='email'

    autofocus: only one element can have it, boolean
      input.autofocus='true'

    validation
      required: if exists, this input needs a value
        input.required

      custom validation: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity
        input.value='blah'
        submit.onclick=()=>{
          if input.value !== 'bloop'
          input.setCustomValidity = 'Input value should be bloop'
        }
      constraint validation:
        https://html.spec.whatwg.org/#constraint-validation-api
        https://www.html5rocks.com/en/tutorials/forms/constraintvalidation/
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

      numeric input.number|range
        min=#
        max=#
        step=#
        input.type=range.onchange=()=>{this.innerHTML = this.value;} //only works for range inputs that have slider

