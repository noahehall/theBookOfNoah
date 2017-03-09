# bookmark
  - [shadow dom for custom element](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom)
    - shadow dom event model

# must do
  - [shadydom polyfill](https://github.com/webcomponents/shadydom)
  - [shadycss polyfill](https://github.com/webcomponents/shadycss)
  -
# next up
  - [mutation observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
  - [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
  - [react and web components](https://facebook.github.io/react/docs/web-components.html)
  - [react and webcomponetns example](https://github.com/facebook/react/blob/master/examples/webcomponents/index.html)
   - 
# links
  - [what the heck is a shadow dom](https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/)
  - [html template tag](https://www.html5rocks.com/en/tutorials/webcomponents/template/)
  - [html imports](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)
  - [react with webcomponents example](https://github.com/facebook/react/blob/master/examples/webcomponents/index.html)


# DOM
  - When the browser loads the page, it transforms your HTML in a live document
    1. parses html (strings of text) into a data model (objects and nodes)
    2. preserves the HTML hierarchy by creating a tree of nodes (the DOM)

# Web Components
## Shadow dom
  - use cases
    1. defining new HTML elements, e.g. a date-picker, that are reusable across applications
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
  4. Shadow Root: a document fragment that gets attached to a shadow host element
    - used to encapsulate js, html, and css to its shadow host
    - open root: outside javascript can interact with the shadow DOM
    - closed root: outside javascript **CANNOT** interact with the shadow DOM
  5. anything you add in the *shadows* becomes local to the hosting element (*shadow host*)
  - Shadow DOM components
    1. `<slot>` element
      - placeholders inside your component for `light DOM` content`
      - Slots are a way of creating a "declarative API" for a web component. They mix-in the user's DOM to help render the overall component, thus, composing different DOM trees together.
      - slots can be empty/provide fallback content
        + if the user does not provide `light DOM `content, the slot renders its fallback content
      - API
        1. `slotchange` event fires when a slot's distributed node changes, e.g. if a user adds/removes children from the `light DOM`
          - does not fire when an instance of the component is first initialized
          ```
            const slot = this.shadowRoot.querySelector('#slot');
            slot.addEventListener('slotchange', e => {
              console.log('light dom children changed!');
            });
          ```
        2. `slot.assignedNodes()` returns the elements associated with a specific `slot` element
        3. `element.assignedSlot` returns the `slots` associated with this element
    2. distributed nodes: elements that can be rendered inside of a shadow DOM's `<slot>` element
    3. named slots: specific holes in your `shadow DOM` that users reference by name
  - Shadow DOM Event model
    1.
### Architecture: styling
  - a web component that uses `shadow DOM` can be styled via:
    1. main page
    2. define its own styles
    3. provide hooks in the form of CSS custom properties
  - scoped CSS
    1. css selectors from the outer page do not apply inside your component
    2. styles defined inside your component do not bleed out, their scoped to the host element
  - `:host` and `:host(<selector>)` styles
    1. allows a component to style itself
      - only works  in the context of a shadow root, so you can't use it outside of the shadow DOM
    2. rules in the parent page have a higher specificity than `:host` style rules, i.e. parent rules win
    3. a way for your component to encapsulate behaviors that react to user interaction or state or style internal nodes based on the host.
  - `:host-context(<selector>)` styles
    1. matches the component if it or any of its ancestors matches <selector>
    2.  A common use for this is theming based on a component's surroundings. For example, many people do theming by applying a class to <html> or <body>
  - `::slotted(<compound-selector>)` styles
    1. matches nodes that are distributed into a <slot>.
    2. can only style top level children, no grandchildren
  - styling from outside the `shadow DOM`
    1. easiest way is to the the tag name as the selector in your css
    2. remember, outside styles **ALWAYS** win over styles defined inside the `shadow DOM`
  - creating style hooks using CSS custom properties
    1. you create style placeholders for users to override, its just like postcss custom css properties
      `--some-overridable-style: black`

### Examples
#### complete Shadow DOM definition
  ``` open vs closed shadow roots
    const div = document.createElement('div');
    // closed
      const shadowRoot = div.attachShadow({mode: 'closed'});
    // open
      const shadowRoot = div.attachShadow({mode: 'open'});
  ```
  ```
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        #panels {
          box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
          background: white;
          border-radius: 3px;
          padding: 16px;
          height: 250px;
          overflow: auto;
        }
        #tabs {
          display: inline-flex;
          -webkit-user-select: none;
          user-select: none;
        }
        #tabsSlot::slotted(*) {
          font: 400 16px/22px 'Roboto';
          padding: 16px 8px;
          ...
        }
        #tabsSlot::slotted([aria-selected="true"]) {
          font-weight: 600;
          background: white;
          box-shadow: none;
        }
        #panelsSlot::slotted([aria-hidden="true"]) {
          display: none;
        }
      </style>
      <div id="tabs">
        <slot id="tabsSlot" name="title"></slot>
      </div>
      <div id="panels">
        <slot id="panelsSlot"></slot>
      </div>
    `;
  ```
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
#### scoped CSS inside shadow DOM definition
  ```
    <!-- inline styles -->
      #shadow-root
        <style>
          #panels {
            box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
            background: white;
            ...
          }
          #tabs {
            display: inline-flex;
            ...
          }
        </style>
        ...component definition

    <!-- style sheet, requires chrome 54+ -->
      <link rel="stylesheet" href="styles.css">
      ...component definition

    <!-- a component styling itself via `:host` declaration -->
      <style>
        :host {
          opacity: 0.4;
          will-change: opacity;
          transition: opacity 300ms ease-in-out;
        }
        :host(:hover) {
          opacity: 1;
        }
        :host([disabled]) { /* style when host has disabled attribute. */
          background: grey;
          pointer-events: none;
          opacity: 0.4;
        }
        :host(.blue) {
          color: blue; /* color host when it has class="blue" */
        }
        :host(.pink) > #tabs {
          color: pink; /* color internal #tabs node when host has class="pink". */
        }
      </style>

    <!-- styling based on context -->
      /* context is darktheme */
        <body class="darktheme">
          <fancy-tabs>
            ...
          </fancy-tabs>
        </body>
      /* style based on context */
        <style>
          :host-context(.darktheme) {
            color: white;
            background: black;
          }
        </style>

    <!-- styling distributed nodes -->
      /* slot definition */
        <name-badge>
          <h2>Eric Bidelman</h2>
          <span class="title">
            Digital Jedi, <span class="company">Google</span>
          </span>
        </name-badge>
      /* shadow DOM style definition */
      <style>
        ::slotted(h2) {
          margin: 0;
          font-weight: 300;
          color: red;
        }
        ::slotted(.title) {
           color: orange;
        }
        /* DOESN'T WORK (can only select top-level nodes).
        ::slotted(.company),
        ::slotted(.title .company) {
          text-transform: uppercase;
        }
        */
      </style>
    <!-- CSS custom properties for placeholder styles -->
      <!-- main page -->
        <style>
        fancy-tabs {
          margin-bottom: 32px;
          --fancy-tabs-bg: black;
        }
        </style>
        <fancy-tabs background>...</fancy-tabs>
      /* inside the shadow dom */
        :host([background]) {
          background: var(--fancy-tabs-bg, #9E9E9E);
          border-radius: 10px;
          padding: 10px;
        }

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
