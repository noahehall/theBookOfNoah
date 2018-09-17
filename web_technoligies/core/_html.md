# current - html basics
# links
  - [html basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
  - [guides and tutorials](https://developer.mozilla.org/en-US/docs/Learn/HTML)
  - [facebook open graph protocol](http://ogp.me/)


## element links
  - [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
  - [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
  - [link type reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)
  -


## really important links
  - [html entity reference](https://html.spec.whatwg.org/multipage/indices.html)
  - [html reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
  - [xml/html character entity reference](https://en.m.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)
  - [html on mdn](https://developer.mozilla.org/en-US/docs/Web/HTML)


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