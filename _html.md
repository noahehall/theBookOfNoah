# bookmark
  - [shadow dom for custom element](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom)
  
# links
  - [what the heck is a shadow dom](https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/)
  - [html template tag](https://www.html5rocks.com/en/tutorials/webcomponents/template/)
  - [html imports](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)


# DOM
  - When the browser loads the page, it transforms your HTML in a live document
    1. parses html (strings of text) into a data model (objects and nodes)
    2. preserves the HTML hierarchy by creating a tree of nodes (the DOM)

# Web Components
## Shadow dom
  - introduces scoped styles for you to bundle CSS with HTML markup, hide implementation details, and author self-contained components in vanilla js
    1. a tool for building component-based apps
      - isolated DOM: each component's DOM is self-contained (e.g. `document.querySelector()` won't return nodes in the component's shadow DOM)
      - Scoped CSS: css defined inside shadow DOM is scoped to it.
      - composition: design a declarative, markup-based API for your component
      - Simplifies CSS: scoped DOM means you can use simple CSS selectors and not worry about naming conflicts
      - productivity: think of apps in chunks of DOM rather than one large global page
    2. is different from the regular DOM based on ho wits created/used and how it behaves in relation to the rest of the page
      - regular DOM: create nodes and append them as children of other elements
  - Architecture
    1. Shadow DOM: create a scoped DOM tree thats attached to an element, but separate from the element's other children
    2. Shadow Tree: a secondary DOM tree scoped to its attached element
    3. Shadow Host: the parent element that defines the scope for a Shadow DOM
    4. anything you add in the *shadows* becomes local to the hosting element (*shadow host*)
    5. Shadow Root: a document fragment that gets attached to a shadow host element
  - benefits of shadow dom
    1. css scoping
    2. DOM encapsulation
    3. composition
  - gotchas
    1. elements that cant host a shadow tree:
      - textarea, input, img
### create a shadow dom for a native HTML element
  1. create and attach a shadow root to a shadow host
    - the act of attaching a document fragment to an element is how the element gains its shadow DOM
    ```
      const header = document.createElement('header');
      const shadowRoot = header.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; // Could also use appendChild().
      // header.shadowRoot === shadowRoot
      // shadowRoot.host === header
    ```
### create a shadow dom for a custom HTML element
  1.
## HTML templates
## Custom elements
  - a way to create new HTML via a JS API

## HTML Imports
