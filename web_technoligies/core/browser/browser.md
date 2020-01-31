# links 
	- [history api](https://developer.mozilla.org/en-US/docs/Web/API/History)
	- [history tutorial](http://diveintohtml5.info/history.html)
	- [onpopstate event](https://developer.mozilla.org/en-US/docs/Web/API/Window/onpopstate)
	- [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
		- especially the `request` and `response` objects

	

## steal some shit 
	- [they check for localhost](https://github.com/DennyScott/react-router-auth/blob/master/src/serviceWorker.js)




# window
## next up
  - find out which file you have all your dom notes in and put them in here, or move this in there, or split these long fuckinng files into multiple
  - [mutation observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
  -


## DOM
  - When the browser loads the page, it transforms your HTML into a live document
    1. parses html (strings of text) into a data model (objects and nodes)
    2. preserves the HTML hierarchy by creating a tree of nodes (the DOM)


## history 
	- enables you to use scripts to modify the URL (and related context) without triggering a page refresh
		- i.e. manipulation of the browser session history
		- i.e. pages visited in the tab/frame that the current page is loaded in

```js
	// navigation
		history.back()
			// previous page in sessino history 
		history.forward()
			// next page in session history
		history.go(-1)
			// @see history.back()
		history.go(1)
			// @see history.forward()
	// manipulation 
		// neither causes browser refreshes or ajax requests
		// eveyrthing you want to happen on state changes 
		// must be handled programmaticaly
		history.state
			// whenever the user navigates to a new state
			// a `popstate` event is fired and contains the state object 
			// see `pushState` and `replaceState`
			// if the browser restarts it MAY contain the state object 
			// associated with the last `pushState` or `replaceState()` methods 

		history.pushState({state}, 'title', 'url')
			// pushes the give data ont he session history stack
			// changes the referrer thats gets used in the HTTP header for ajax requests
			// the referrer will be the url of hte doc whose window is `this` at the time when the ajax object is created
			// calling history.back() after calling history.pushState() does not fire a `popstate` event
			// never fires a `hashchage` event 
		history.replaceState({state}, 'title', 'url')
			// exactly the same as `pushState` except replaces the current history entry 
			// useful when you want to update the stateObject/url of the current 
			// history entry in response to user action

	// events 
		window.onpopstate
			// fired everytime the active history entry changes 
			// contains the state object associated with `replaceState()` and `pushState()` history methods 

```


# Request - Response
```js
	// Response object 
		new Response('this is a simple string response');
		new Response(
			'this string response includess custom headers', 
			{
				headers: { 'Content-Type': 'text/html' }
			}
		);
i
```


## URL 
```js
	let params = (new URL(document.location)).searchParams;
	let name = params.get('name'); // is the string "Jonathan Smith".
	let age = parseInt(params.get('age')); // is the number 18
i
```


# workers 
	- [main mdn service worker api docs](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
	- [using service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
	- [using web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
	- [basic code example](https://github.com/mdn/sw-test)
	- [google workbox](https://github.com/GoogleChrome/workbox)
	- [maybe the same thing?](https://serviceworke.rs/)
	- [mdn service worker cookbook](https://github.com/mozilla/serviceworker-cookbook)
	- [service worker cache for responses](https://developer.mozilla.org/en-US/docs/Web/API/Cache)
	- [sw example](https://github.com/mdn/sw-test)
	- [understaanding service workers](http://blog.88mph.io/2017/07/28/understanding-service-workers/)
	- [using web workers](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers)
	- [VAPID docs](https://tools.ietf.org/html/rfc8292)
	- [workbox window tut](https://medium.com/@webmaxru/workbox-4-implementing-refresh-to-update-version-flow-using-the-workbox-window-module-41284967e79c)
	- [the super fucking important event.waitUntil](https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil)


## terminology
	- web workers
		- run scripts in background threads
		- send/receive messages to the calling code
	
	- worker thread
		- perform
		  - tasks without interfering with the UI
		  - I/O using XMLHttpRequest
		  -
	- service workers
		- act as proxy servers that sit between web applications, the browser, and the network
		- an event-driven worker registered against an origin and a path
		-  a JavaScript file that can control the web-page/site that it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion
		-  only support HTTPS
		-  firefox: cant be used in private browsing mode
		- Multiple browsing contexts (e.g. pages, clients, etc.) can be associated with the same ServiceWorker object.
		- the ServiceWorker state is not persisted across the termination/restart cycle, 
			- so each event handler should assume it's being invoked with a bare, default global state.
		- Once successfully registered, a service worker can and will be terminated when idle to conserve memory and processor power
	
	-  worker context
		-  a service workers execution environment (e.g. browser, node, worker are all distinct contexts)
		- fully async
		  - cant be used with synchronous APIs like XHR and localStorage
		- no DOM access
		- runs a different thread than  to the main javascript browser context
			
	- Clients 
		- when a serviceWorker is installad over an existing one
	    - the serviceWorker can claim all pages owned by the previous service worker
	    - usually it waits to claim pages until the old serviceWorker is not used by any existing loaded pages


	- `Navigator.serviceWorker` (browser context)
	  - Returns a ServiceWorkerContainer object,
	    - provides access to the ServiceWorker objects for the associated document.
	      - registration
	      - removal
	      - upgrade
	      - communication
	      - state

	      

	- ServiceWorkerRegistration
		- represents a service worker registration

	- ServiceWorkerState
		- state of the service worker



	- ServiceWorkerGlobalScope
		- Represents the global execution context of a service worker.


	- SyncManager
		- provides an interface for registering  and listing sync registrations


	- double check the following
		- Client
			- the scope of a client controlled by a service worker
			- either
				- a document in a browser context
				- a SharedWorker

		- WindowClient
			- special type of `Client`
			- scope of a service worker client that is a document in a browser context controlled by the active service worker


		- Clients (worker context)
			- The clients global in the service worker lists all of the active push clients on this machine.
			- represnets a container for a list of Client objects
			- the mainway to access all the clients owned by the active service worker


## cache
  - just use IDB - fuck cache
  - represents the storage for request/response object pairs that are cached as part of the serviceworker lifecycle
  - global object on the service worker that allows us to store assets delivered by responses, and keyed by their requests
  - works in a similar way to the browser’s standard cache, but it is specific to your domain


### CacheStorage
  - the storage for cache objects
  - provides
    - a master directory of all the named caches that a ServiceWorker can access
    - maintains a mapping of string names to corresponding Cache objects


## service workers 
	- [service worker global scope](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope)
	- [notification click has a really good example](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
	- [push event](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/push_event)
	- [pushsubscriptionchange is a critical event](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
	- [clients object](https://developer.mozilla.org/en-US/docs/Web/API/Clients)
	- [service worker registration](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration)
	- [register api, good docs](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register)


### use cases
  - act as a middleware (opportunities are limitless)
  - enable the creation 'of' offline experiences
  - intercept network request
  - react based on network availability
  - background data syncrhonization
  - responding to resource requests from other origins
  - receiving centralized updates to expensive to calculate data
  - client-side compiling and dependency management
  - hooks 'for' background services
  - custom templating based on URL patterns
  - performance enhancments
    - prefecting resources, etc


### lifecycle
	1. registration
		- e.g. `workbox.register()`
		- e.g. `navigator.serviceWorker.register('./sw-test/sw.js', {scope: './sw-test/'})`
			- `register('./path/to/sw.js', {scope: 'relative/to/origin'})
			- in the above example, 'sw-test' is the origin
		- A single service worker can control many pages. 
		- Each time a page within your scope is loaded, the service worker is installed against that page and operates on it.
		- be careful with global variables in the service worker script: each page doesn’t get its own unique worker.
	2. download
	3. install `oninstall` event
		- triggers
		  - when the downloaded file is found to be new/byte-wise different
		- use cases 
		  - populte idb 
		  - fetch resources to cache site assets
		  - i.e. whatever you would do when initialling a mobile app 
		    - e.g. make sure its available offline 
		  - etc
		- installation is not complete until `oninstall` handler completes
	4. activate `onactivate` event
		- triggers
		  - new installation - immediately activated
		  - update installation - activated when there are no longer any pages loaded that are still using the old service worker
		    - force activation 
		      - `ServiceWorkerGlobalScope.skipWaiting()` dont wait for existing workers to release claim
		- use cases 
		  - cleanup of resources used in previous service worker versions
		    - e.g. deleting stale idb caches

	5. update
		- triggers
		  - navigation to an in-scope page occurs
		  - event fired on the service worker and it hasnt been downloaded in the past 24 hrs

	6. claiming/controlling of pages 
		- service worker only controls pages opened after the `register()` is successful 
		- scope: 
		  - The path to your service worker file needs to be written relative to the origin, not your app’s root directory
		    - if the worker is at https://mdn.github.io/sw-test/sw.js, 
		    - and the app’s root is https://mdn.github.io/sw-test/.
		    - the path needs to be written as /sw-test/sw.js, not /sw.js.
		  - Each time a page within your scope is loaded, the service worker is installed against that page and operates on it.
		  - each page SHARES the same worker context, watchout for globals
		  - The service worker will only catch requests from clients under the service worker's scope.
		  - The max scope for a service worker is the location of the worker.
		  - If your service worker is active on a client being served with the Service-Worker-Allowed header, you can specify a list of max scopes for that worker.
		- `await clients.claim()` - force new worker to claim existing pages


### tools 
	- [chrome: service workers](chrome://inspect/#service-workers)
	- [more information than inspect](chrome://serviceworker-internals)


### NOTES 
	- `self` and `globalScope` are the same thing 
		- but niether are required, as.... all methods attached to both objects are global
		- get your shiz together MDN!
	- you can react to events in two ways 
		- `self.addEventListener('eventname', (event) => poop)
		- `self.oneventname = (event) => poop
```js
	// mostly browser context
	// focusing on handling registration
	if ('serviceWorker' in navigator) {
		(async () => {
			// Register (create/update) a service worker
			// you can call this without checking for a previous registration
			// but is there benefits to checking?
			// scope === used for navigation matching 
			// only the sw whose scope matches the url will be considered 'controller'
			// an sw cant control a parent path (think rest api paths)
			// so only specify scope if this sw is intended to control a child path
			// the default scope (i.e './') is the service workers location (usually at the root of the site)
			// e.g. if you include a sw at poop.com/toilet
			// its scope will be all paths under the toilet
			navigator
				.serviceWorker
				.register('relative/path/to/sw.js', { scope: './' })
				.then(reg => runYourBizLogicBitch());


			// we use await here
			// beecause we want to halt execution until the sw is active
			const registration = await navigator.serviceWorker.ready;
			// rest of your business logic here that depends on an active sw



			// you can also retrieve the current registration 
			// for a scope relative to the current document url
			const registration = await navigator.serviceWorker.getRegistration('/app');

			// you can also retrieve multiple registrations 
			// why would there be multiple? maybe it returns child scopes?
			const regArray = await navigator.serviceWorker.getRegistrations();
		})();

		// controller === the controlling sw
		if (navigator.serviceWorker.controller) {
			// your business logic here
			// if you need to interact with the current sw
		}

		// Then, register a handler to detect when a new or
		// updated service worker takes control.
		navigator.serviceWorker.oncontrollerchange = event => {
			// your business logic here 
			// if you need to do shit when a new sw claims this page
		};

		// using onmessage instead of addEventListener('message')
		// enables the messaging flow to start immediately 
		// without the call to startMessages()
		navigator.serviceWorker.onmessage = event => {
		  // ...
		};
	} else console.log('fuck your browser')

  
	// does the browser support push notifications
	if ('Notification' in window && navigator.serviceWorker) {
		// Display the UI to let the user toggle notifications
		// check if the user has given permission to show notifications
		if (Notification.permission === "granted") {
			/* do our magic */
		} else if (Notification.permission === "blocked") {
			/* the user has previously denied push. Can't reprompt. */
		} else {
			// show a custom prompt to the user
			// since you cant reprompt with the native prompt
			// dont use it unless the user says yes to your fake prompt
		}
	}


i
```


```js
	// mostly worker context
	// focuses on events

	// always use the waitUntil method to extend
	// the lifetime of the service worker
	// until your business logic completes
	event.waitUntil(async () => {...})

	// potentially hijack the request and respond with something different
	// or let it do its normal thing with fetch(event.request)
	event.respondWith() 

	// the request object contains info about the fucking event
	event.request[url|method|headers|body]

	
	event.notification // the notification object 
	event.notification.tag // ID used to group notifications
	event.notification.renotify // BOOL, beep/vibrate/etc
	event.notification.close() // close the notification
	event.action // the ID of the button on the notification that was clicked
	event.data // poop attached to the event by whatever triggered it


	// event types
		// each callback  receives an Event of type 'name'
		// which usually has distinct properties/methods + the ones inherited
		// from the global Event object
		// InstallEvent
		self.addEventListener('install', event => {
			// when a serviceWorker is installed over an existing one
			// enables clients loaded in the same scope
			// to not have to reload before their fetches
			// will go through this service worker
			// can be called at anytime (e.g. also in activate handler)
			// will only have an effect if theres a new sw 
			// that might remaing in the waiting state
			// and forces the sw to go directly to the activate state
			self.skipWaiting();


			// handle the rest of your install business logic
			event.waitUntil(async () => {
				// poop
			})
		}, false);



		// ActivateEvent
		self.addEventListener('activate', event => {
			event.waitUntil(async () => {
				self.skipWaiting();
				await clients.claim()

				// rest of your activate business logic
				// confirm this should occur after clients.claim()
			});
		}, false);


		

		// FetchEvent
		// ajax occurred in a client controlled by this sw
		self.addEventListener('fetch', event => {
			// example returning from cache, or network if cache fails
			// fuck cache, use idb 
			event.respondWith(
				caches.match(event.request).then((response) => {
					return response || fetch(event.request);
				})
			);
		}, false);


		// indicates the current subscription has expired/changed
		// you need to resubscribe and sync the data to your backend
		// remember subscriptsion are volatile and unstable!
		// always listen for this event and sync it with the server
		// this can occur while the app is offline as well!
		// thus push that bitch in idb with a timestamp
		self.addEventListener("pushsubscriptionchange", event => {
			// resubscribe with old options
			event.waitUntil(async () => {
				const newSub = swRegistration
					.pushManager
					.subscribe(event.oldSubscription.options);
				// sync this data with your backend 
		    	// should check if it fails, then push to idb
				const resp = await fetch({ updateYourBackendWithNewSubscription });

				if (!resp) updateIdbToSyncWithNetworkIsOnline();
			});
		}, false);


		// user dismisses notification through direct action e.g. swipe
		// NotificationEvent
		self.addEventListener('notificationclose', event => {
		  // your onclose notification logic
		}, false);


		// NotificationEvent
		// you can extract alot of this shit
		self.addEventListener('notificationclick', event => {
			event.waitUntil(async () => {
				// get all all options for this method
				// focus an open window/new window
				const allClients = await clients.matchAll({
					//window|worker|sharedWorker|all (default)
					type: "window", 
					// include all clients who share the same origin
					// as the current service worker
					// false === only clients controlled by current sw
					includeUncontrolled: true,
				});

				let foundClient = false;
				for (const client of allClients) {
					if ((new URL(client.url)).pathname === getNotiData().pathname) {
						// Excellent, let's use it!
						client.focus?.();
						foundClient = client;
						break;
					}
				}

				if (!foundClient) 
					// openWindow creates a new top level browsing context
					// and loads the specified url 
					// firefox permits this only in response to a notificationclick event
					foundClient = await self.clients.openWindow(getNotiData().pathname|url|etc);

				// finish your business logic 

				// close this specific notification
				event.notification.close();
				// or maybe do this close all notifications?
				const notis = await self.registration.getNotifications()
				notis.forEach(noti => noti.close())
				// or maybe close specific notifications
				// based on some random identifying shit associated with the noti
				// when it was created (will be part of the options object)
				const options = {tag: 'poop'};
			  	const notis = await self.registration.getNotifications(options);		notis.forEach(noti => noti.close())
			})
		}, false);


		// PushEvent
		// triggered when the service worker receives a push message
		// see the push notification section elseware in this doc
		self.addEventListener("push", event => {
			let message = event.data.json();
			
			// handle your push logic
		}, false);


i
```


```js
		clients.openWindow('http://www.example.com');
		self.clients
		// returns the `Clients` object controlled by this service worker
		// @see https://developer.mozilla.org/en-US/docs/Web/API/Clients

i
```


### Events
#### [MessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)
  - used by service workers

#### SyncEvent
  - a sync action that is dispatched on the `ServiceWorkerGlobalScope`




## push notifications 
### google overlords best practices 
	- use notifications wisely, theyshould be timely, precise and relevant
		- timeley: displayed at the right time for time sensitive events 
		- precise: offer enough info so that the user can make a decision without clicking through to the app 
		- relevant - make the notification relevant to the users needs
	- never prompt the user to receive notifications as soon as they land on your app
		- they have no context at this time
		- find a more appropritate time to receive notifications
		- e.g. when the user is configuring their communication settings, after the user completes a critical task, when they return to your site (after they are a known user who uses your app)


### TODO (not in order, but start at the top cuz fuck it)
	- [push notifications docs](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications)
	- [notifications api](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
	- [Registration object](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
	- [experiment with notification options](https://tests.peter.sh/notification-generator/)
	- [mozilla webpush node library is fucking mando](https://github.com/web-push-libs/web-push)
	- [push api](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
	- [push api intro](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#pushapi)
	- [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
	- [pushMessageData](https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData)
		- the event sent when a service worker receives a push 
	- [pushmanager](https://developer.mozilla.org/en-US/docs/Web/API/PushManager)
	- [workbox](https://developers.google.com/web/tools/workbox)
	- [workbox with webpack](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)
	- [workbox with webpack specific](https://developers.google.com/web/tools/workbox/guides/precache-files/webpack)
	- [always use this one cuz your dope](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#injectmanifest_plugin_2)


### terms
	- notification 
		- a message displayed to the user outside of the apps normal UI (i.e. browser)
	- push message
		- a message sent from the server to the client 
	- push notification 
		- a notification created in response to a push message 
		- object displayed in the status bar of a client, e.g. smartphone/browser 
		- can be triggered 
			- locally by an open application, 
			- pushed from from the server to the user even when the app is not running
	- notifications API 
		- an interface used to configure and display notifications to the user 
		- see below
	- push api 
		- an interface used to subscribe your app to a push service and receive push messages in the service worker 
	- web push 
		- an informal term referring to the process or components involved in the process of pushing messages from a server to a client on the web
	- push service 
		- a system for routing push messaages from a server to a specific client 
		- each browser implements its own push service 
			- wtf we have to understand this
			- do we need to handle this distinctly for each browser
			- remember having to code specifically for ded azz IE?
	- web push protocol 
		- describes how an application server or user agent interacts with a push service 
	- subscription
		- created by a service worker
		- creates a unique endpoint + public keys that you can push data to from a backend server
			- each browser creates their own subscription object (endpoint + public keys)


### use cases 
	- let your app extend beyond the browser
	- engage the user outside of the your web app
	- permit the user (through action buttons) to engage with your site/app without needing to go back to your webpage


### flow 
#### setup
	1.	user is asked for and provides consent to receive notifications from your application (granted)
	2.	service worker registration workflow completes 
	3.	service worker creates a push notification subscription and sends the endpoint & public keys it receives to your backend
	4.	your backend saves the subscription endpoint & public keys for later use to push messages back to the service worker


#### pushing: backend -> push service 
	1. use the public keys to encrypt the data you want to send to the user
	2. send the encrypted data to the subscription.endpoint


#### receiving: push service -> user
	1. push service routes the encrypted data to the users device 
	2. the device wakes up the browser (if closed) 
	3. the service worker handles the push event and invokes your business logic which outputs onto the app thread 
	4.	app displays notification to user 
	5.	BOOM


#### key decision points 
	- 	ask user for permission 
		- 	user can press X (DENIED)
		- 	user can deny (DENIED)
		- 	user can grant (SUCCESS)


### key APIs 
	- push sends info to service worker 
	- server displays notification to user


#### service worker api 
	- responds to push message events in the background and relays them to your application 
	- see elseware in this doc for this shit


#### Notifications API
	- the action of the service worker sending the information to a user
	- lets the app display system notifications to the user
	- uses the same mechanisms as a native app (mostly)
	- split into two non technical areaas
		- Invocation API 
			- controls how to make yoru notifications appear 
				- styling, vibration, etc
			- invoked from the client / server (if pushed)
		- Interaction API
			- controls what happens when the user engages with the notification 
			- handled in the service worker


#### Push 
	- the action of the server suplying message information to a service worker
	- allows a service worker to display notifications to users even when the browser is not open
	- push service 
		- each browser manages push notifications through their own service
		- architecture 
			- subscription 
				- is specific to each browser 
			- subscription.endpoint 
				- the browsers push service creates an endpoint where you server can send messages to a specific user 
				- this endpoint is to the browsers push service, which is responsible for routing messages to the user associated at this endpoint
			- subscription.keys
				- used to encrypt your push messages before sending to the subscription endpoint  (see webpush)
				- you must encrypt your messages before sending to the push service as the push service may not be encrypted (https)


### web push protocol
	- designed to response the users privacy by keeping users anonymous and not requiring strong authentication between your app and the push service
	- issues with not requiring strong authentication
		- since the push service is not authneticated, it presets a greater risk of DoS attacks
		- any application in possession of the subscription endpoint is able to send messages to your users 
			- never send this back up to the client, only receive it from the client and store it server side
		- theres no way for the push service to send errors to the developer outside of the response-request-cycle


#### VAPID
	- resolution to the issues of the web push protocol not requiring strong authnetication
	-  the publishers optionally identifies them selves via VAPID to the push service
		- the push service can establish behaviorale expctations and contact the publisher when  these expectations are deviated from
		- the publisher provides contact information so that the push service can contact them in case of exceptional situations 
		- precedence is given to publishers by the push service who use their shit, mutha fuckas
		- also allows you to not have to create a firebase project, w00p w00p
	- VAPID process 
		1. create a pub/priv key pair for your server and give the pub key to your web app
		2. when the user accepts to receive notifications, add your pub key to the 'subscribe()' APIs options object
		3. when your app server sends a push message, include a signed JSON web token alon gwith the public key		


#### mozillas webpush nodejs library 
	- handles both encryption and the web push protocol 
	- makes it super easy, fucking use it


```js
	// VAPID - create keys via webpush library 
	// contains { publicKey, privateKey, andOtherShit? }
	vapidKeys = webpush.generateVAPIDKeys(); 
	// in order to use the pub key with the subscribe method
	// you have to pass it as a Uint8Array
	// check that this shit is right
	// i think the the array should be the pub key reetrieved from generateVAPIDKeys
	const publicKey = new Uint8Array([0x4, 0x37, 0x77, 0xfe, ... ]);
		serviceWorkerRegistration.pushManager.subscribe(
		  {
		    userVisibleOnly: true,
		    // see above for generating public key
		    applicationServerKey: publicKey
		  }
		);


	// step 1 - request permission
	// request user permission to show notifications (browser context)
		Notification.requestPermission(function(response) {
		    console.log('Notification permission status:', response);
		});

	// step 2 - synchronize the subscription with our server
	// only if the user gave us permissions to show notifications in step 1
	// get the current subscription everytime the user accesses our app
	// it is not stable and may change (why we need to keep it in sync)
	if ('serviceWorker' in navigator) {
		(async () => {
			// this will wait indefinitely for a sw to become active 
			const registration = await navigator.serviceWorker.ready;
			// now you can call methods that require an active sw;


		})();
		navigator.serviceWorker.register('sw.js').then(function(reg) {
		    console.log('Service Worker Registered!', reg);

		    reg.pushManager.getSubscription().then(function(sub) {
		      if (sub === null) {
		        // Update UI to ask user to register for Push
		        reg.pushManager.subscribe({
		        	// the browser ensures every incoming push message 
		        	// has a matching and visible notification
			        userVisibleOnly: true
			      }).then(function(sub) {
			        console.log('Endpoint URL: ', sub.endpoint);
			      }).catch(function(e) {
			        if (Notification.permission === 'denied') {
			          console.warn('Permission for notifications was denied');
			        } else {
			          console.error('Unable to subscribe to push', e);
			        }
			      });
		      } else {
		        // We have a subscription, update the database
		        console.log('Subscription object: ', sub);
		      }
		    });
		  })
		   .catch(function(err) {
		    console.log('Service Worker registration failed: ', err);
		  });
	}

	// displaying notifications
		// show a notification to the user (browser context)
		// however it fetches the current registered service worker
		// so that events triggered by itneractions 
		// are heard by the current service worker
			function displayNotification() {
			  if (Notification.permission == 'granted') {

			    navigator.serviceWorker.getRegistration().then(function(reg) {
			    	// options are optional param
			    	// extreme browser differences exist
			    	// assume only the body and title are gauranteed
			    	// assume no actions are available
			    	// treat everything as a progressive enhancement
				    var options = {
				        // main description with enough info 
					    // for the user to take action
				        body: 'do this and stfu', 
				        //  tag is an ID used to group notifications together
						//  that way you dont show 1000 notifications for the same tHING
						// but instead they are grouped together in one notfication
						// the browser will replace a visible notification with a new  notification
						// if they have the same tag 
						tag: 'someId',
				        // attach an image to the notification
				        // e.g. the senders avatar
				        icon: 'images/example.png',
				        // will vibrate/beep/etc again if an existing notification
						// is being replaced by this notification (i.e. a visible notification has the same tag as this one)
						renotify: true,
				        // in milliseconds for phones
				        // vibrate, pause, vibrate
				        vibrate: [100, 50, 100],
				        // sent to the service worker
				        // upon user interaction
				        data: {
				          dateOfArrival: Date.now(),
				          primaryKey: 1
				        },
				        // contextually relevant action buttons to display with the notification
				        // for the user to interact with our app
				        // without having to actually open the browser
				        // lenght of array must =< Notification.maxActions
				        actions: [
				          {action: 'explore', title: 'Explore this new world',
				            icon: 'images/checkmark.png'},
				          {action: 'close', title: 'Close notification',
				            icon: 'images/xmark.png'},
				        ]
				      };
			      reg.showNotification('Hello world!', options);
			    });
			  }
			}

		// show a notification to the user (worker context)
		// almsot exactly as in the browser context,
		// but this time in response to a push event received by a service worker

		self.addEventListener('push', function(e) {
		  const body = e.data ? e.data.json() : {} 
		  	// json(), text(), I think array and some other shit
		  var options = { seeAbove, body }; // see how we get the body from the event object above

		  //  always use event.waitUntil 
		  e.waitUntil(
		    self.registration.showNotification('Hello world!', options)
		  );
		});


		// if your app is already opej, do not show a notification
		/// instead alert the user with some in-app thing, like a toast
		self.addEventListener('push', function(e) {
		  clients.matchAll().then(function(c) {
		    if (c.length === 0) {
		      // Show notification
		      e.waitUntil(
		        self.registration.showNotification('Push notification')
		      );
		    } else {
		      // Send a message to the page to update the UI
		    // If there are active clients it means that the user has your site open in one or more windows. 
		    // and you should relay the message to EACH of the windows
		    // i guess theres no way to know which window?
		      console.log('Application is already open!');
		    }
		  });
		});



	// example webpush from node to push service 
		var webPush = require('web-push');

		var pushSubscription = getItFromYourFuckingDatabase();

		var payload = 'Here is a payload!';

		var options = {
		  vapidDetails: {
		  	subject: 'yourServer@emailaddress.com'
		  	publicKey: vapidPUblicKey,
		  	privateKey: vapidPrivateKey,
		  },
		  // in SECONDS
		  // the time the push service keeps the push message 
		  // by default its four weeks
		  TTL: 60
		};

		webPush.sendNotification(
		  pushSubscription,
		  payload,
		  options
		);
i
```