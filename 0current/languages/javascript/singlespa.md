# single-spa

## links

- [overview](https://single-spa.js.org/docs/getting-started-overview)
- [configuring single-spa](https://single-spa.js.org/docs/configuration/)
- [splitting up applications](https://single-spa.js.org/docs/separating-applications/)
- [building applications](https://single-spa.js.org/docs/building-applications/)
- [recommended setup](https://single-spa.js.org/docs/recommended-setup/)
- [migrating existing SPAs to single-spa](https://single-spa.js.org/docs/migrating-existing-spas/)
- [layout engine](https://single-spa.js.org/docs/layout-overview/)
- [SSR & single-spa](https://single-spa.js.org/docs/ssr-overview/)
- [singleSpa api](https://single-spa.js.org/docs/api/)
- [single spa ecosystem](https://single-spa.js.org/docs/ecosystem/)

## basics

### architecture

- single-spa root config: renders the HTML page and the JS that registers applications; its only purpose is to startup the single-spa applications
  - root html shared by all single-spa applications
  - js that invokes `singleSpa.registerApplication()`
    - so it knows how and when to initiate, load, mount, and unmount each application
  - shared dependencies
    - sharing a module in the browser via import maps, which are declared in the root config
    - only required if any applications expect shared dependencies, e.g. react
- applications: an SPA that can be registered with and rendered by single-spa
  - name
  - fn that loads teh applications code
  - fn that determines when the application is active/inactive
  - requirements
    - must know how to bootstrap, mount and unmount itself from the DOM
- layout engine: provides a routing API that cotrols top level routes, applications and dom elements
  - should be installed as a prod dep into the root config
  - in the client
    - Generate single-spa registration config from an HTML Element and/or JSON object.
    - Listen to routing events to ensure that all DOM elements are laid out correctly before the single-spa applications are mounted.
  - on the server
    - Construct a server layout object from an HTML template.
    - Send an HTML document (HTTP response headers and body) to the browser, based on the server layout object and current route.
