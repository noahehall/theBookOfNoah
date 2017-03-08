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
      - DOM encapsulation: Use shadow DOM to compartmentalize an element's HTML, CSS, and JS, thus producing a "web component".
      - composition: different building blocks come together to create an app
      - productivity: think of apps in chunks of DOM rather than one large global page
    2. is different from the regular DOM based on how its created/used and how it behaves in relation to the rest of the page
  - gotchas
    1. elements that cant host a shadow tree:
      - textarea, input, img
  - terms
    1. light DOM: the markup a user of your component writes
      - this DOM lives outside the component's shadow DOM
      - it is the element's actual children
        ```
          <button is="better-button">
            <!-- the image and span are better-button's light DOM -->
            <img src="gear.svg" slot="icon">
            <span>Settings</span>
          </button>
        ```
    2. Shadow DOM: the markup a component author writes
      - is local to the component and defines its internal structure, scoped CSS, and encapsulates your implementation details (e.g. how to render markup thats authored by the consumer of your component)
      ```
        #shadow-root
          <style>...</style>
          <slot name="icon"></slot>
          <span id="wrapper">
            <slot>Button</slot>
          </span>
      ```
    3. Flatted DOM tree: the result of the browser distributing the user's light DOM into your component's shadow DOM and subsequently rendering the final product
      - this is what you ultimately see in DevTools and what is rendered on the page
      ```
        <button is="better-button">
          #shadow-root
            <style>...</style>
            <slot name="icon">
              <img src="gear.svg" slot="icon">
            </slot>
            <slot>
              <span>Settings</span>
            </slot>
        </button>
      ```
### Architecture: Definition
  1. Shadow DOM: create a scoped DOM tree thats attached to an element, but separate from the element's other children
  2. Shadow Tree: a secondary DOM tree scoped to its attached element
  3. Shadow Host: the parent element that defines the scope (shadow tree) for a Shadow DOM
  4. anything you add in the *shadows* becomes local to the hosting element (*shadow host*)
  5. Shadow Root: a document fragment that gets attached to a shadow host element
    - used to encapsulate js, html, and css to its shadow host
  - Shadow DOM components
    1. `<slot>` element
      - placeholders inside your component for `light DOM` content`
      - Slots are a way of creating a "declarative API" for a web component. They mix-in the user's DOM to help render the overall component, thus, composing different DOM trees together.
      - slots can be empty/provide fallback content
        + if the user does not provide `light DOM `content, the slot renders its fallback content
    2. distributed nodes: elements that can be rendered inside of a shadow DOM's `<slot>` element
    3. named slots: specific holes in your `shadow DOM` that users reference by name
### Architecture: styling
  
### Examples
#### <slot> definition
  ```
    <!-- slot with fallback content -->
      #shadow-root
        <slot>
          <h2>Title</h2>
          <summary>Description text</summary>
        </slot>

    <!-- fancy tabs named slots -->
      #shadow-root
        <div id="tabs">
          <slot id="tabsSlot" name="title"></slot>
        </div>
        <div id="panels">
          <slot id="panelsSlot"></slot>
        </div>

    <!-- consuming fancy tab web component v1 -->
      <fancy-tabs>
        <button slot="title">Title</button>
        <button slot="title" selected>Title 2</button>
        <button slot="title">Title 3</button>
        <section>content panel 1</section>
        <section>content panel 2</section>
        <section>content panel 3</section>
      </fancy-tabs>

    <!-- consuming fancy tab web component v2 -->
      <fancy-tabs>
        <h2 slot="title">Title</h2>
        <section>content panel 1</section>
        <h2 slot="title" selected>Title 2</h2>
        <section>content panel 2</section>
        <h2 slot="title">Title 3</h2>
        <section>content panel 3</section>
      </fancy-tabs>

  ```
#### create a shadow dom for a native HTML element
  1. create and attach a shadow root to a shadow host
    - the act of attaching a document fragment to an element is how the element gains its shadow DOM
    ```
      const header = document.createElement('header');
      const shadowRoot = header.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; // Could also use appendChild().
      // header.shadowRoot === shadowRoot
      // shadowRoot.host === header
    ```
#### create a shadow dom for a custom HTML element
  ```
    // Use custom elements API v1 to register a new HTML tag and define its JS behavior
    // using an ES6 class. Every instance of <fancy-tab> will have this same prototype.
    customElements.define('fancy-tabs', class extends HTMLElement {
      constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
          <style>#tabs { ... }</style> <!-- styles are scoped to fancy-tabs! -->
          <div id="tabs">...</div>
          <div id="panels">...</div>
        `;
      }
      ...
    });
  ```
## HTML templates
## Custom elements
  - a way to create new HTML via a JS API

## HTML Imports
