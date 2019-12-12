# put this shit somewhere 
  - Note: Because oninstall/onactivate could take a while to complete, the service worker spec provides a waitUntil method, once this is called oninstall or onactivate, it passes a promise. Functional events are not dispatched to the service worker until the promise is successfully resolved.

  
# links
  - [mdn service worker cookbook](https://github.com/mozilla/serviceworker-cookbook)
    - [maybe the same thing?](https://serviceworke.rs/)
  - [mdn service worker API docs](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
  - [interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API#inerfaces)
  - [using service workers](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
  - [basic code example](https://github.com/mdn/sw-test)
  - [using web workers](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers)
  - [concepts and usage](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API#Service_worker_concepts_and_usage)

# terminology
  - web workers
    - run scripts in background threads
    - send/receive messages to the calling code
  - worker thread
    - perfeorm
      - tasks without interfering with the UI
      - I/O using XMLHttpRequest
      -
  - service workers
    - act as proxy servers that sit between web applications, the browser, and the network
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
  - background data syncrhonization
  - responding to resource requests from other origins
  - receiving centralized updates to expensive to calculate data
  - client-side compiling and dependency management
  - hooks for background services
  - custom templating based on URL patterns
  - performance enhancments
    - prefecting resources, etc

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
        - force activation 
          - `ServiceWorkerGlobalScope.skipWaiting()` dont wait for existing workers to release claim
          - `Clients.claim()` - force new worker to claim existing pages

  5. update
    - triggers
      - navigation to an in-scope page occurs
      - event fired on the service worker and it hasnt been downloaded in the past 24 hrs


# concepts and usage 
  - a service worker is a JS file that can control the site that is it associated with 
    - intercepting and modifying navigation adn resource requests 
    caching resources ina  very grnaular fashion 
    etc


# API (interfaces)
## ServiceWorker
  - Represents a service worker.
  - Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same ServiceWorker object.
  -
## Navigator.serviceWorker
  - Returns a ServiceWorkerContainer object,
    - provides access to the ServiceWorker objects for the associated document.
      - registration
      - removal
      - upgrade
      - communication


## ServiceWorkerRegistration
  - represents a service worker registration

## ServiceWorkerState
  - state of the service worker


## ServiceWorkerContainer
  - Provides facilities to register, unregister, and update service workers, and access the state of service workers and their registrations.


### [register()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register)
  - service worker will be downloaded to the client and installation/activiation will be attemped

## ServiceWorkerGlobalScope
  - Represents the global execution context of a service worker.


## SyncManager
  - provides an interface for registering  and listing sync registrations


### [skipWaiting()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting)
  - when a serviceWorker is installed over an existing one
    - the new serviceWorker will be activated immediately
      - usually it waits for the old serviceWorker to not be used by an existing loaded pages

## Client
  - the scope of a client controlled by a service worker
  - either
    - a document in a browser context
    - a SharedWorker

### WindowClient
  - special type of `Client`
  - scope of a service worker client that is a document in a browser context controlled by the active service worker


## Clients
 - represnets a container for a list of Client objects
 - the mainway to access all the clients owned by the active service worker
### [Claim()](https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim)
  - when a serviceWorker is installad over an existing one
    - the serviceWorker can claim all pages owned by the previous service worker
    - usually it waits to claim pages until the old serviceWorker is not used by any existing loaded pages



## cache
  - represents the storage for request/response object pairs that are cached as part of the serviceworker lifecycle

## CacheStorage
  - the storage for cache objects
  - provides
    - a master directory of all the named caches that a ServiceWorker can access
    - maintains a mapping of string names to corresponding Cache objects

## Events
### [MessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)
  - used by service workers


### FetchEvent
  - The param passed into the ServiceWorkerGlobalScope.onfetch handler
  - a fetch action that is dispatched on the `ServiceWorkerGlobalScope` of a `ServiceWorker`
  - contains info about the request and resulting response

#### respondWith()
  - provide an arbitary response back to the controlled page


### InstallEvent

### SyncEvent
  - a sync action that is dispatched on the `ServiceWorkerGlobalScope`


## TODO
### ExtendableEvent
### ExtendableMessageEvent
### NavigationPreloadManager
### NotificationEvent

# examples
```js
  // InstallEvent https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent
  // prepare your service worker for usage when this event fires
  // e.g. create a cache (builtin storage API) and place assets inside that youll want for running yoru app offline

  // activate
  // a good time tro clean up old caches, etc, with the previous service worker

  // FetchEvent - https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
  // respond to requests

  // FetchEvent.respondWith
  // arbitrarily  modify the response to a FetchEvent
```
