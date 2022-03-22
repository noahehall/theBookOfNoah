# single-spa

- bookmark ???
  - dunno: but start here https://single-spa.js.org/docs/layout-overview

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
- [singlespa vue](https://single-spa.js.org/docs/ecosystem-vue/)

## basics

### architecture

- single-spa root config: renders the HTML page and the JS that registers applications; its only purpose is to startup the single-spa applications
  - its really just the orchestrator for all the different micro MFE
  - root html shared by all single-spa applications
  - js that invokes `singleSpa.registerApplication()`
    - so it knows how and when to initiate, load, mount, and unmount each application
  - shared dependencies
    - sharing a module in the browser via import maps, which are declared in the root config
    - only required if any applications expect shared dependencies, e.g. react
- Microfrontend types
  - each application needs to be wrapped in a singleSpa, which returns bootstrap, mount and unmount lifecycle methods that the singlespa root config needs to be able to access
  - applications: an SPA that can be registered with and rendered by single-spa; render components for a set of specific routes.
    - name
    - fn that loads teh applications code
    - fn that determines when the application is active/inactive
    - requirements
      - must know how to bootstrap, mount and unmount itself from the DOM
    - has routing, declarative API, renders a UI, single-spa managed lifecycles
  - parcel: render components without controlling routes, e.g. when loading multiple frameworks
    - only needed with multiple frameworks, has no routes, imperative API, renders UI, custom managed lifecycles
  - utility: export shared js logic/service without rendering components
    - has no routes, exports a public interface, may/not render a UI, no direct single-spa lifecycles,
- layout engine: provides a routing API that controls top level routes, applications and dom elements
  - should be installed as a prod dep into the root config
  - in the client
    - Generate single-spa registration config from an HTML Element and/or JSON object.
    - Listen to routing events to ensure that all DOM elements are laid out correctly before the single-spa applications are mounted.
  - on the server
    - Construct a server layout object from an HTML template.
    - Send an HTML document (HTTP response headers and body) to the browser, based on the server layout object and current route.

## configuring single-spa

- [single spa api docs](https://single-spa.js.org/docs/api/)

- root html: shared by all single-spa applications
- imports JS file that calls `singleSpa.registerApplication()

### events

- [event docs](https://single-spa.js.org/docs/api/#events)

## layout engine

- [docs](https://single-spa.js.org/docs/layout-overview/)
