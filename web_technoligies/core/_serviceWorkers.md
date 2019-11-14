# links
  - [mdn service worker cookbook](https://github.com/mozilla/serviceworker-cookbook)
  - [mdn service worker API docs](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

# terminology
  - service workers
    - act as proxy servers that  sit between web applications, the browser, and the network
    - an event-driven worker registered against an origin and a path
    -  a JavaScript file that can control the web-page/site that it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion
    -  only support HTTPS
    -  firefox: cant be used in private browsing mode
  -  worker context
    -  a service workers execution environment (e.g. browser, node, worker are all distinct contexts)
    - fully async
      - cant be used with synchronous APIs like XHR and localStorage
    - no DOM access
    - runs a different thread than  to the main javascript browser context
    -

# use cases
  - act as a middleware (opportunities are limitless)
  - enable the creation of offline experiences
  - intercept network request
  - react based on network availability

# lifecycle
  1. registration
  2. download
  3. install
    - triggers
      - when the downloaded file is found to be new/byte-wise different
  4. activate
    - triggers
      - new installation - immediately activated
      - update installation - activated when there are no longer any pages loaded that are still using the old service worker
      -
  5. update
    - triggers
      - navigation to an in-scope page occurs
      - event fired on the service worker and it hasnt been downloaded in the past 24 hrs


# API
## ServiceWorkerContainer
###  register()
  - service worker will be downloaded to the client and installation/activiation will be attemped
```js

```
## ServiceWorkerGlobalScope
### skipWaiting()
  - when a serviceWorker is installed over an existing one
    - the new serviceWorker will be activated immediately
      - usually it waits for the old serviceWorker to not be used by an existing loaded pages

## Clients
### Claim()
  - when a serviceWorker is installad over an existing one
    - the serviceWorker can claim all pages owned by the previous service worker
    - usually it waits to claim pages until the old serviceWorker is not used by any existing loaded pages
