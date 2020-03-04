pings and pongs
https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers


# todo 
	- copy over working push examples from app and replace pseudo code
	- [inheritance and prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
	- [function bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
	- find a better fucking sublime markdown syntax htis hsit fucking sucks
	- [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
	- [this shit](https://github.com/philipwalton/blog/blob/master/articles/what-no-one-told-you-about-z-index.md)
	- [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
	- [oldi but goooodi](https://www.smashingmagazine.com/2009/09/the-z-index-css-property-a-comprehensive-look/)
	- [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)



# random links 
	- [onpopstate event](https://developer.mozilla.org/en-US/docs/Web/API/Window/onpopstate)
	- [channel messaging](https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
	- [channel messaging api](https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API)
	- [read everything by this muthafucker](https://www.quirksmode.org)
	- [think about this shit](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
	- [mdns bible](https://developer.mozilla.org/en-US/docs/Glossary)
	- [DoS](https://en.wikipedia.org/wiki/Denial-of-service_attack)
	- [https://developer.mozilla.org/en-US/docs/Web/API/Blob]
	- [array buffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)



## things to incorporate in apps 
	- in gneral use the standard events 
	- network events
	- load event
	- better use of teh error event 
	- use cases for text composition events
	- usecases for value change events
	- fuck lets do webvr bitch
	- your idb installation is prehistoric, use check the database events
	- usecases for scriptevents
	- tabevents might be useful for sw
	- sensor events for mobile web
	- DOM mutation events
	- touch events
	- orientation events with 3d transforms
	- mutatin observer
	- add this before implementing ws (https://github.com/creationix/http-parser-js)
		- potential (fuck socketio)
		- [ws](https://github.com/websockets/ws)
		- [faye](https://github.com/faye/faye-websocket-node)




## steal some shit 
	- [they check for localhost](https://github.com/DennyScott/react-router-auth/blob/master/src/serviceWorker.js)
	- [jack most of there shit](https://github.com/GoogleChrome/workbox/blob/v5/packages/workbox-window/Workbox.mjs)
	- [many things here to jack](https://github.com/cometchat-pro-samples/javascript-reactjs-chat-app/blob/master/src/serviceWorker.js)



## almost best practices 
	- use the event handler properties when available, because fuck it
	- always validate headers (but beware non browsers can fake this shit)
		- send a 400 if any header not up to par and immediately close the connection
		- 

### use cases 
	- pushing shit 
		- http2 push (browser level, doesnt reach application code)
		- server sent events ( half-duplex, clients connects -> server push)
		- web sockets (full-duplex, client conects -> server|client push)
			- may have issues with multiple tabs, as the browser is limited to 6 websocket connections
			- thus if your app is number 7, fuuuuuuk
		- long polling, ajax, whatever the fk (go work for facebook with that bs)
		- server worker Push API (unidirectional, routes msgs through browser vender)
## next up
	- [http2 flow control](https://medium.com/coderscorner/http-2-flow-control-77e54f7fd518)
	- [in general, this shit](https://developer.mozilla.org/en-US/docs/Web/HTTP)
	- find out which file you have all your dom notes in and put them in here, or move this in there, or split these long fuckinng files into multiple
	- [js modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
		- you have this shit somehwere


# http
	- [http response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
	- [set cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
	- [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
	- [http upgrade mechanism](https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)


## responses 
	- informational 100-199
	- successful 200-299
		- 200 'OK' generall success
		- 201 'Created'
		- 202 'Accepted'
			- used for batch processing, etc, to let the client know something may happen in the future, but dont wait on it
		- 203 - fuck 203
		- 204 'No Content'
			- when the client should review the headers for additional info
		- 205 'Reset Content'
			- client should reset the doc which sent the request
		- 206 'Partial Content'
			- when the `Range` header is sent from the client to request only part of a resource
	- redirects 300-399
	- client errors 400-499
		- 400 'Bad Request'
			- the client fucked up
		- 401 'Unauthorized'
			- the client must authenticate to get the requested response 
		- 403 'Forbidden'
			- the server knows the client, but refuses to be friends, fucking racist
		- 404 'Not Found'
			- call the police
		- 405 'Method Not Allowed'
		- 408 'Request Timeout'
		- 418 'Ima Teapot'
			- the server refuses the attempt to brew coffee with a teapot
		- 426 'Upgrade Required'
		- 428 'Precondition Required'
		- 429 'Too many hos calling my phone'
		- 451 'Unavailable cuz police tapping my phone'
	- server errors 500-599
		- ive done nothing wrong bitch


## headers 
	- Origin 
		- ensure same origin, whitelist/blacklist
	- Sec-WebSocket-Version 
		- the websocket protocol version(s) the server understands

	- guidelines 
		- each header line must end in `\r\n`
		- the last header must end in `\r\n\r\n` to indicate its the last header


# WebSockets 
	- [websocket security](https://devcenter.heroku.com/articles/websocket-security)
	- [websocket api](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
	- [websocket object](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
	- [close event](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent)
	- [writing websocket client applications](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
	- [writing websocket servers](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
	- [berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets )
	- [socketio](https://github.com/socketio/socket.io)
	- [websocket protocol](https://datatracker.ietf.org/doc/rfc6455/?include_text=1)
	- [realtime chat with blah and socketio](https://dzone.com/articles/using-redis-with-nodejs-and-socketio)
	- [tcp transmission control protocol](https://developer.mozilla.org/en-US/docs/Glossary/Transmission_Control_Protocol_(TCP))
	- [XOR cipher](https://en.wikipedia.org/wiki/XOR_cipher)
	- [weboscket protocol registries (codes, extensions, subprotocols, etc)](https://www.iana.org/assignments/websocket/websocket.xml)
	- [websocket buffer amount](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/bufferedAmount)
	- [the bayeux protocol used by faye](https://docs.cometd.org/current/reference/index.html#_bayeux)
	- [pub/sub for the web](https://faye.jcoglan.com/)
	- [faye websocket (serverside)](https://github.com/faye/faye-websocket-node)
	- [websocket spec](https://html.spec.whatwg.org/multipage/web-sockets.html#network)


## terminology 
	- TCP
		- transport layer host-to-host protocol for connection-oriented communication between two computers on an IP network 
		- uses virtual ports to create a virtual end-to-end connection that can reuse the physical connections between two computers
		- encapsulates higher level protocol data such as http and smtp (email)
	- websocket handshake 
		- i.e. the 'web' in websocket (wtf does that even mean MDN?)
		- nvm its the bridge from http to WebSockets (think https to http)
		- details of the connection are negotiated, and either party can backout before completion if the terms are unfavorable
	- control frame 
		- todo 
	- websocket extensions (header)
		- control the websocket frame and modif the payload
		- optional and generalized (like cheese on a burger)
	- websocket subprotocols (header)
		- structure the websocket protocol and NEVER modify anything
			- e.g. the json weboscket-protocol informs all parties to relay day as json
		- mandatory and localized (i.e. specific to a usecase, e.g. chat|games)
		- implemented on the server and cannot be externally refered to by th client
	- close event code 
		- sent to clients/servers using websockets when the connection is closed 
		- 0-999 not used 
		- 1000 normal closure 
		- 1001 going away (e.g. due to navigation)
		- 1002 protocol error
		- 1003 unsupported data (e.g. sending data in the wrong format)
		- 1005 no status received (e.g. you forgot to specify a code when closing the connection)
		- 1006 abnormal closure (e.g. the connection was closed properly)
		- 1007 invalid frame payload data (e.g. something was wrong with the data being sent)
		- 1008 policy violation (e.g. watching porn at work)
		- 1009 message too big (e.g. msg too big in data frame)
		- 1010 missing extension (client expected server to negotiate extension, but server didnt)
		- 1011 internal error (wtf im never at fault)
		- 1012 service restart (e.g. hotreload baby)
		- 1013 try again later (e.g. overloaded|too many clients|hos)
		- 1014 bad gateway (e.g. similar to 502 http status code, server (gateway) has issue with upstream)
		- 4000-4999 (for use by applications)
		- 



	
## use cases 
	- enable two way interactive communication session between the users browser and a server 
	- send messages to servers and receive event driven responses without having to poll the server for a reply


## best practices 
	- use a reverse proxy to detect websocket handshakes, pre-process them,  and then route the clients to a real websocket server 
		- helps to keep the cookie/authentication logic separate from the websocket server
	- request uris (e.g. poop.com/flush) has no defined meaning in the spec 
		- you can use it to let one websocket server handle mutiple websocket applications 
		- like a websocket reverse proxy
	- keeping track of clients 
		- after establishing a websocket connection with a client, track them!
		- you dont want to go through the handshake process multiple times with the same client 
		- the same client IP address can attempt connections multiple times
			- be careful of DoS attacks if they try too many
		- e.g. usernames/ids + websocket + other data needed to identify each connection
	

## gotchas 
	- the websocket server may listen on any port
		- however, ports other than 80|443 may have problems with firewalls|proxies 
	- browsers generally require a secure connnection for websockets
	- websockets require >= HTTP 1.1
	- socketio is NOT a websocket implementation 
		- socketio uses WebSocket as a transport when possible 
		- however, a websocket client CANNOT connect to a socketio server
		- and a sockeetio server CANNOT connection a websocket client


## lifecycle 
	- the websocket server listens for incoming socket connections on a standard TCP socket
	- websockt handshake
		- client applications MUST send a GET request to begin a websocket connection to the websocket request-uri to initiate the websocket handshake
			- the websocket details are sent as headers in the GET request
		- the websocket server optionally responds with various headers/requests for authentication|redirects to validate the websocket connection request
		- finally the websocket server responds to the handshake with headers indicating the websocket protocol version to use 
	- websocket success 
		- bi-directional communication is now possible 
		- communication occurs via exchanging data frames 
			- wtf
			- think its an http2 thing, but dunno
			- use a library
		- decoding the payload length 
			- use a fucking library
		- reading and unmasking the data 
			- take a break, then use a library
		- messaage fragmentation 
			- take another break, the continue with the library
	- keeping connection alive
		- either side of the connection can ping the other as a health check
		- the pong must be sent asap and include the exact same payload data received in the ping
			- max payload length === 125
			- if you get more than one ping, before responding, still only send response back
	- closing the connection 
		- either side of the websocket connection can request to close the connection 
		- upon receipt of such request, respond with a Close frame response 
		- the requester will then close the connection 
		- any data received after the connection is closed should be discarded



	- server side examples
```js 
	// websocket handshake: standard headers to request a websocket connection 
		// have to send the Sec-Websocket-Key for the server to send back the Sec-WebSocket-Accept
		// the client asks the server if it supports a subprotocol(s) the client understands
		
		`
			GET /chat HTTP/1.1
			Host: example.com:8000
			Upgrade: websocket
			Connection: Upgrade
			Sec-WebSocket-Key: s0m3fck1nGk3y
			Sec-WebSocket-Version: 187
			Sec-WebSocket-Protocol: json, soap, wamp
		`
	// websocket handhskae: server response indicating the websocket protcol version
		// Sec-Websocket-Accept header is derived from the Sec-Websocket-Key in the client request
		// the server should pick the first websocket-protocol in the reuquest header it supports or dont send the header back at ALL (never send blank)
		`
			HTTP/1.1 101 Switching Protocols
			Upgrade: websocket
			Connection: Upgrade
			Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
			Sec-WebSocket-Protocol: json
		`


i
```


	- client side examples
```js
	// create a websocket object
		const insecureServerUrl = 'ws://yo.sup.com';
		const secureServerUrl = 'wss://com.sup.yo';
		const ws = new WebSocket(secureSeverUrl, ['json', 'soap', 'poop'])

		ws.onerror = e => {
			console.error('damn yo', e)
		}
		ws.onclose = closeEvent => {
			// connection closed
			const closeReason = closeEvent.reason;
			const cleanClose = closeEvent.wasClean;
			if (!cleanClose) writeBetterCodeBecause(closeReason);

			runClosedLogic();
		}
		ws.onopen = e => {
			console.info(`connection established with: ${ws.url}`);

			const subProtocol = ws.protocol;
			const extensions = ws.extensions;

			// can send as string, Blob, ArrayBuffer
			switch (subProtocol) {
				case 'JSON': {
					await ws.send(JSON.stringify({ data: 'poop' }));
					break;
				}
				default: {
					console.info('no subprotocol selected, is the connection established?')
				}
			}

			if (webSocket.bufferedAmount === 0) {
				console.info('closing websocket connection to server');

				// cannot be longer than 123 bytes of utf-8 text (not chars)
				const reasonForClosing = 'gotta go poop';
				const closeCode = getHttpWebSocketCloseCode(reason);
				ws.close(closeCode, reasonForClosing);
			}
			else console.info('data is queued from previous send request, dont close')
		}
		ws.onmessage = e => {
			console.info(`got msg from server: ${JSON.parse(e.data)}`)
		}

		// also available as ws.POOP
		// only use for checking state
		// keep login in eventhandlers
		switch (ws.readyState) {
			// CONNECTING
			case 0: {
				console.info('hurry up');

				break;
			}
			// never do this
			// always use the onopen handler
			// OPEN
			case 1: {
				ws.send('yo pick up the phone bro!')

				break;
			}
			// CLOSING
			case 2: {
				break;
			}
			// CLOSED
			case 3: {
				break;	
			}
		}
i
```

# DOM
	- [message event](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)

## poop
  - When the browser loads the page, it transforms your HTML into a live document
    1. parses html (strings of text) into a data model (objects and nodes)
    2. preserves the HTML hierarchy by creating a tree of nodes (the DOM)


# history 
	- [history api](https://developer.mozilla.org/en-US/docs/Web/API/History)
	- [history tutorial](http://diveintohtml5.info/history.html)

## basics
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


# EVENTS
	- [comparison of event targets](https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets)
	- [event develloper guide](https://developer.mozilla.org/en-US/docs/Web/Guide/Events)
	- [creating and triggering events guide](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
	- [event design pattern](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)
	- [event interface, the god event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
	- [all events](https://developer.mozilla.org/en-US/docs/Web/Events)
	- [orientation and motion events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained)
	- [orientation events with 3d transforms](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Using_device_orientation_with_3D_transforms)
	- [the  godhead himself](https://www.youtube.com/watch?v=Y2Y0U-2qJMs)
	- [how js loading works](http://ablogaboutcode.com/2011/06/14/how-javascript-loading-works-domcontentloaded-and-onload)
	- [load and execution sequence of a web page](https://stackoverflow.com/questions/1795438/load-and-execution-sequence-of-a-web-page)
	- [custom events](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
	- [dispatch event](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)
	- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
	- [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
	- [introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
	- [accessing events](https://www.quirksmode.org/js/events_access.html)
	
	

## terminology 
	- Events 
		- a design pattern used for the async handling of incidents which occur in the lifecycle of something
		- the naming, characterization, and the use of 'events|incidenses' of differnet types 
			- how the fuck do you spell incidencnes
	- triggering DOM events 
		- user action, 
		- automated browser processes (e.g. in the lifecycle of some arbitrary API)
		- programmatically (e.g. someEle.click())
		- manually (e.g. eventTarget.dispatchEvent())
	- handling events 
		- always use eventTarget.addEventListener, fuck IE 
	- dishandling events 
		- couldnt think of a more romantic term 
		- always use eventTarget.removeEventListener 
		- the event name, function (instance), and useCapture flag has to match 
		- there may be mutliple event listeners, and all listeners with the matching 3 items will be removed
	- event phases 
		- target phase
			- listeners attached to the event target
			- will receive events before they are bubbled or able to be captured 
			- the emitted events will trigger all listeners on the element in the order the listeners were registered
		- capture and bubble 
			- order of operations when two/more handlers are listening for the same event on a target that has parents
				1. capture phase
					- browser checks to see if any parents (starting from html on down to event.target) has a handler with capture/useCapture set true
					- if one is found, runs it and continues until it reaches the event.target to start the bubbling the shampane
				2. bubble phase
					- browser checks if event.target has handler with !bubble 
					- if one is found, runs it and continues until it reaches the root html element
				3. if there arent 2/more handlers, it (practically) doesnt matter if you captre or bubble the event, as only the singel handler will be invoked 
					- unless you like to micro optimise, and think the 1ms saving by the capture phase is worht your dumb ass time
	
	- create-init-dispatch process 
		- used for dispatch events into the implementations event model 


## event design pattern 
	- events and event handling pattern to react to incidents that occur
	- web page rendering architecture: 
		- parse -> process -> draw -> present -> loop continuously on incident occurrence
		- emits a page to be partially rendered even when the browser has not finished retrieving all resources
	- pattern contract
		- the name of the event 
		- the datastructure and key properties for a specific event type 
			- all browsers extend  from `EventPrototype`
		- the javascript object which will 'emit' the event
	- pattern implementation 
		- define a function (i.e. listener) which understands the pattern contract 
		- register the function (i.e. listener|handler) on the javascript object which will emit the event via `addEventListener` function
			- e.g. a dom element, document, window, or ANY object that implements the `EventListener` interface
	- event delegation 
		- set the event listener on a parent element with !!bubble
			- be sure `stopPropagation|stopImmediatePropagation()` once handled
		- dispatch the event from any child elements 
	- pattern best practices 
		- dont register event handlers until the `document` emits `DOMContentLoaded`
		- use event delegation where possible
			- when multiple child elements invoke the same event handler
		- use capturing handlers where appropriate 
			- when a child element will invoke an event in an unknown/dynamic location in the dom but the handler is more effective on a parent element
			- 

## intersection observer
	- [intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
## mutation observer
	- [mutation observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
		- you have this hsit somewhere

```js
	// attach events after this shit
	// the html has been parsed and JS objectes created for all dom nodes
		document.addEventListener('DOMContentLoaded', () => registerAllMyEventsBitch())

	// listen for events 
		// you can either pass the options object, or the useCapture boolean
		// but NOT both bitch
		eventTarget.addEventListener(
			'eventName',
			listenerFunction,
			{
				// route events to this listener before sending to child elements
				capture: bool,
				// listener should be invoked at most ONCE, then removed
				once: bool,
				// indicates a passive listener, i.e. will never call preventDefault
				// has performance improvemetns if true
				passive: bool,
				mozSystemGroup: 'who the fuck codes for just one browser?'
			},
			// or specify just the capture property, as a boolean
			// specify EITHER the options object above or the boolean below
			// also events that are bubbling upward will not trigger this listener
			// defaults to false
			useCaptureBoolean
		)
	// stop listening for events 
		eventTarget.removeEventListener(
			'eventName',
			listenerFunction,
			useCaptureBoolean, // has to match value provided in addEventListener useCapture/capture
		)


	// create an event (doesnt work in ie, fuck ie)
		// can be used to trigger native events?
		// some of the properties are for event handlers
		// e.g. wtf are you doing trying to set defaultPrevented on instantiation?
		// its just easier to put all this shit here cuz wtf
		const event = new Event(
			'wtf',
			{	
				// does this event bubble to the root html?
				bubbles: bool,
				// does this event resppond to preventDefault()
				cancelable: bool,
				// whether the event wil; propagate across the shadow dom boundary into the standard dom
				// all UA-disaptched events are composed, (e.g. click, touch, etc)
				// only occurs !!bubbles
				composed: bool,

			}
		);
	// create a custom event 
		// create event with custom data via the detail proeprty
		// if bubbles, boomers can listen for incidences dispatched on millenials
		const event = new CustomEvent(
			'wtf', 
			{ 
				...eventOptionsFromAbove,
				// add arbitrary data to be acessible in listeners
				detail: {...},
				// the element on which the handler is attached
				// i.e. could be different that event.target if the handler is invoked in the capture/bubble phases through retargeting
				currentTarget: eventTarget,
				// whether preventDefaulted() was invoked
				defaultPrevented: boolean,
				// in which phase the handler was invoked
				eventPhase: phaseName,
				// the original target from which the event was dispatched
				// before any retargeting due to bubbling/capture
				target: eventTarget,
				// event creation in milliseconds since epoch 
				// unreliable, probably because of IE but i have no proof
				timeStamp: DOMTimeStamp,
			}
		)



	// dispatch the event
		// invokes eventt handlers sycnhronously 
		// i.e. all event handlers will execute and return BEFORE the cod econtinues on after the call to dispatch event 
		// is the last step in the create-init-dispatch process
		// you should checkif it was canceled, if thats your kind of thing
		const canceled = !domEl.dispatchEvent(event);
		if (canceled) console.log('preventDefault was called')
	// dispatch an event in response to some other event
		// As the user types, the textarea inside the form dispatches/triggers the event to fire, and uses itself as the starting point
		textarea.addEventListener('input', e => e.target.dispatchEvent(eventAwesome));
	// dispatch an event dynamically 
		someEl.dispatchEvent(new CustomEvent('awesome', { bubbles: true, detail: { text: () => textarea.value } }))
	// disaptch built-in events 
		function simulateClick() {
		  var event = new MouseEvent('click', {
		    view: window,
		    bubbles: true,
		    cancelable: true
		  });
		  var cb = document.getElementById('checkbox'); 
		  var cancelled = !cb.dispatchEvent(event);
		  if (cancelled) {
		    // A handler called preventDefault.
		    alert("cancelled");
		  } else {
		    // None of the handlers called preventDefault.
		    alert("not cancelled");
		  }
		}

	// handling events
		function onPoopWipeButDontFlushAt711(e) {
			// stop the default action
			e.preventDefault()
			// stop ancester handlers from being invoked, but permit sibling/concurrent eventTarget handlers
			e.stopPropagation()
			// stop ALL other handlers from being invoked, whether on ancestor, sibling, or this eventTarget
			e.stopImmediatePropagation()
			// see the path this event takes to nirvana
			// wtf is the usecase for this?
			e.composedPath()
		}
i
```


## event categories
### core events
### other events
	- resource events 
		- error 
			- resource has failed to load 
		- abort
			- the loading of a resource hs been aborted 
		- load
			- a resource and its dependent resources have finished loadihng 
		- beforeunload 
			- the window, the document and its reosurces are abouut to be unloaded 
		- unload 
			- the document/dependnet resource is being unloaded 
	- network events 
		- online 
			- the browser has gained access to the network 
		- offline 
			- the browser has lost access to the network
	- focus events 
		- focus 
			- an element has received focus
		- blur 
			- a nn element has lost focus 
	- websocket events 
		- open 
			- a websocket connectino has been establisbhbed 
		- message 
			- a message is received  through a websocket 
		- error 
			- a websocket connection has been close dwith prejudice 
				- e.g. data couldnt be sent 
		- close 
			- a websocket connection has  been closed 
	- session history events 
		- pagehide 
			- a session history entry is being traversed from 
		- pageshow 
			- a session history entry is being traversed to 
		- popstate 
			- a session history entry is being navigated to (in certain cases)
	- css animation events 
		- animationstart 
			- poop 
		- animationcancel 
			- a css animtion has aborted 
		- animationonend 
			- a css animation has completed 
		- animationiteration 
			- a css animation is repeated 
	- css transition events 
		- transitionstart 
			- a css transition has actually started (fired afer any delay)
		- transitioncancel
		- transitionend
		- transitionrun
			- a css transition has begun running (fired before any delay starts)
	- form events 
		- reset 
		- submit 
	- view events 
		- fullscreenchange 
			- an element wax turned to fullscreen mode or back to normal mode 
		- fullscreenerror
			- impossible to switch to fullscreen mode for technical reasons or because the permission was denied 
		- resize 
			- the document view has been resized 
		- scroll 
			- the document view or an eement has been scrolled
	- keyboard events 
		- keydown 
			- any key is pressed 
		- keypress 
			- any key except shift, fn, capslock is in pressed position (fired continuously)
		- keyup
			- any key is released
	- mouse events 
		- auxclick 
			- a pointing device button (i.e. non-primary butotn) has been pressed and released n an element 
		- click a pointing device button (any button, but soon to be primary button) has been pressed and released on an element 
		- contextmenu 
			- the right button of hte mouse is clicked (before the context menu is displayed)
		- dblclick 
		- mousedown 
		- mouseenter
		- mouseleave
		- mousemove
		- mouseover
		- mouseout
		- mouseup
			- a pointing device button is released over an element 
		- pointerlockchange
		- pointerlockerror
		- select
			- text is being selected
		- wheel
			- a wheel button of a pointing device is rotated in any direction
	- drag and drop events 
		- drag 
		- dragend
		- dragenter
		- dragstart
		- dragleave
		- dragoer
		- drop
	- progress events
		- abort
		- error
		- load
		- loadend
		- loadstart
		- progress
		- timeout
	- value change events 
		- broadcast
		- checkboxstatechange
		- hashchange
		- input
		- RadioStateChange
		- readystatechange
		- VAlueChange
### less than other events
	- printing events 
		- beforeprint 
		- afterprint 
	- text composition events 
		- compositionstart
		- compositionupdate
		- compositionend
	- clipboard events 
		- cut
		- copy
		- paste
	- media events
		- has a bunch of shit


```js

i
```


# fetch - Request - Response
	- [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
	- [response docs](https://developer.mozilla.org/en-US/docs/Web/API/Response)
	- [fetch respond with](https://developer.mozilla.org/en-US/docs/Web/API/Fetchevent/respondWith)

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


# URL 
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
	- [notifications object for workers + clients](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification)
	- [focus|openWindow behavior](https://github.com/w3c/ServiceWorker/issues/602)



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
		- same thing as `self`?


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
	- [open a window client](https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow)
	- [windowClient](https://developer.mozilla.org/en-US/docs/Web/API/WindowClient)


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
	-  browsers will explicitly disallow notifications not triggered in response to a user gesture.
	- in general horrible cross-browser feature parity 
		- always check to see if every single fucking method works in the environment(s) your supporting
	- in general openWindow/focus can 
		- only be called in response to a notification click
		- only ONE of them can be called
		- you have 10 seconds in the notificationclick handler to run your business logic
		- openWindow/focus must be called before your handler resolves
			- and you must put your handler within event.waitUntil
		- thus 
			- fuck client.focus|openwindow
				- nvm, works perfectly in response to anotification click
			- just show the notification if !client.focused, else show the toast
	

	- TODO 
		- [use cases for navigation preload manager](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/navigationPreload)
		- [common mistakes](https://developers.google.com/web/tools/workbox/modules/workbox-window#avoiding_common_mistakes)




### service worker examples: mostly browser context
```js
	// focusing on handling registration
	if ('serviceWorker' in navigator) {
		// handles installation and updates to registration
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
			const registration = await navigator
				.serviceWorker
				.register('relative/path/to/sw.js', { scope: './' })
			
			// fires whenever a new worker is assigned to registration.installing
			// i.e. if the sw has changed since the last registration
			registration.onupdatefound = event => {
				// listen for state changes when a new working is being installed
				if (registration.installing) {
					// run your unstallation logic

					// listen for state changes to the installing sw
					registration.installing.onstatechange = event => {
						// force update
						registration.update();
					}
				}
			}

			// sw is installed, but waiting to be actived
			if (registration.waiting) {
				const waitingWorker = registration.waiting;
				// run your waiting worker business logic
			}
		})();

		// handles active & activating workers
		(async () => {
			// we use await here
			// pick one dependent on your needs
			// beecause we want to halt execution until the sw is active
			const registration = await navigator.serviceWorker.ready;
			// you can also retrieve the current registration 
			// for a scope relative to the current document url
			// pass '/' to get the root registration
			const registration = await navigator.serviceWorker.getRegistration('/app');
			// you can also retrieve multiple registrations 
			// if nikki manages are your kinda thing
			const regArray = await navigator.serviceWorker.getRegistrations();


			switch (registration.scope) {
				// if you have business logic tied
				// tied to specific scopes, switch bitch
				// remember scopes are unique IDs for a sw
			}

			//  sw is active|activating
			// remember an active sw controls a client 
			// if the client url falls within the scope of it's registration
			if (registration.active) {
				const activeWorker = registration.active;
				// run your active worker business logic


				const subscription = await registrationg.pushManager.subscribe();

				sendSubscriptionToBackend(subscription);
			}
		})()

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


### service worker events: mostly worker context
	- TODO: is it better  to use eventHandlers or onevent callbacks?
```js
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


	// each callback  receives an Event of type 'name'
	// which usually has distinct properties/methods + the ones inherited
	// from the global Event object
	// InstallEvent
	self.oninstall = event => {
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
			// populate idb for use by sw when network is offline
			// fuck cache
		})
	};



	// occurs after sw is isntalled and AFTER the controlled client refreshes
	self.onactivate = event => {
		event.waitUntil(async () => {
			// ONLY The active worker can claim clients
			await clients.claim();

			const staleIdbData = checkIdbForStaleData();

			if (staleIdbData.length) populateIdbWithNewData(staleIdbData);
		});
	};


	
	// FetchEvent
	// ajax occurred in a client controlled by this sw
	self.onfetch = event => {
		// example returning from cache, or network if cache fails
		// fuck cache, use idb 
		// you have to invoke the async function u fucking idiot
		event.respondWith((async () => {
					const oldData = await pullFromIdb(event.request.url);
		
					if (oldData) return oldData;
					const response = await fetch(event.request);
		
					populateIdb(response);
		
					return  response.clone();
				})());

		// or this 
		event.waitUntil((async () => {
			// exit early if we dont have access to the client
			// first branch didnt work in chromium
			// wtf is up with mdn?
			// see elseware for getting the client by Clients.matchAll
			const clientId = client.eventId || (event.source?.type === 'window' && event.source?.id);
			if (!clientId) return;
			
			const client = await clients.get(event.clientId);

			// maybe client was closed?
			if (!client) return;

			doThisAwesomeTThing();
		})())
	}


	// indicates the current subscription has expired/changed
	// you need to resubscribe and sync the data to your backend
	// remember subscriptsion are volatile and unstable!
	// always listen for this event and sync it with the server
	// this can occur while the app is offline as well!
	// thus push that bitch in idb with a timestamp
	self.onpushsubscriptionchange = event => {
		// resubscribe with old options
		event.waitUntil(async () => {
			const newSub = swRegistration
				.pushManager
				.subscribe(event.oldSubscription.options);
			// sync this data with your backend 
	    	// should check if it fails, then push to idb
			const resp = await fetch({ updateYourBackendWithNewSubscription });

			if (!resp) updateIdbToSyncWhenNetworkIsOnline();
		});
	};


	// fired whenever register() is invoked from a client under control of this sw
	// the attempt to sync is immediate if network is available, 
	// or as soon as network is available
	self.onsync = syncEvent => {

	}


	// user dismisses notification created by registration.showNotification()
	// notifications created on the main thread|by woekrs using the `Notifcation() coonstructor 
	// do not receive this event 
	// they receive  the `click` event on the Notification object itself
	self.onnotificationclose = event => {
		// your onclose notification logic
		// event.notification === notification object
	};


	// notifications created on the main thread|by woekrs using the `Notifcation() coonstructor 
	// do not receive this event 
	// they receive  the `close` event on the Notification object itself
	self.onnotificationclick = event => {
		event.notiication.close();

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
				// has all methods of the Client interface
				foundClient = await clients.openWindow(getNotiData().pathname|url|etc);
				if (foundClient) {
					// give user input focus
					if (!foundClient.focused) await foundClient.focus()
					// loads a url into the controlled client 
					if (foundClient.url !== 'wtf') await foundClient.navigate('to/this/url')
					// send a message tot he client
					// see the other examples with passing a port from messageChannel
					// the navigator.serviceWorker.onmessage handler will receive this 
					foundClient.postMessage()
				}
			// finish your business logic 
			// or maybe do this close all notifications?
			const notis = await self.registration.getNotifications()
			notis.forEach(noti => noti.close())
			// or maybe close specific notifications
			// based on some random identifying shit associated with the noti
			// when it was created (will be part of the options object)
			// think it only filters by tag
			const options = {tag: 'poop'};
		  	const notis = await self.registration.getNotifications(options);		notis.forEach(noti => noti.close())
		})
	}


	// PushEvent
	// triggered when the service worker receives a push message
	// see the push notification section elseware in this doc
	self.onpush = event => {
		let message = event.data.json();
		
		// handle your push logic
	};


i
```


### other client shit 
```js
	Notification.requestPermission(result => {
		if (result === 'granted') doTHis();
		else if (result === 'blocked') doThisInsteaD();
	})
i
```
### other service worker shit
```js
	const swClients = self.clients;
	const registration = self.registration;
i
```

### client - service worker messaging 
	- [discussion about neutered ports](https://stackoverflow.com/questions/38169672/why-are-transfered-buffers-neutered-in-javascript)
	- [sw to client messaging](https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage)
		- dont use, not supported by safari
		- fuck safari
	- [client to sw messaging fuck ie](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event)
	- [message port](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort)
		- sw can reply back to client 
		- fuck firefox for android
		- looks like like you'll have to feature detect for this or Clients.postMessage
			- which together cover most browsers
```js 
	// browser context
	// create a channel for cross-context communication
	// i.e. browser >< worker
	const channel = new MessageChannel();
	channel.port1.onmessage = e => console.log('\n\n got message from sw', e)
	  
	// get the registration for acess to the active|waiting|installed worker 
	// whats the benefints of this over navigator.controller ?
	const registration = await getActiveRegistration('/sw.js', '/')

	// browser context 
	// sw is installed, but waiting to be actived
	// pass in the channel.port2 in case you need to send messages back
	if (registration.waiting) {
		registration.waiting.postMessage(
			{
				type: 'WAITING',
				msg: 'skip that bitch'
			},
			// transfer list
			// anything here can no longer be used in the current context
			// because ownership is transfered to whaatever context your sending it to
			// i.e. become neutered
			[channel.port2]
		);
	}

	// worker context 
	// very useful API
	// review message port for sending shit back
	self.onmessage = event => {
		event.waitUntil((async () => {
			const { type, ...rest } = event?.data ?? {};

			switch (type) {
			  case 'WAITING': {
			    self.skipWaiting();
			    if (event.ports?.length) event.ports[0].postMessage('sw skipped waiting')
			    break;
			  }

			  default: {
			    console.log('\n\n received message without event.data.type', event);
			  }
			}

			return true;
		})())
	};
i
```
## push notifications 
	- fuck what they say, the browser has to be open to receive push events
		- however, if a push is sent while ethe browser is not opened, once opened, it will receive the push event
		- imperative to group the events together so a user doenst get 50mill events
		
### google overlords best practices 
	- use notifications wisely, they should be timely, precise and relevant
		- timeley: displayed at the right time for time sensitive events 
		- precise: offer enough info so that the user can make a decision without clicking through to the app 
		- relevant - make the notification relevant to the users needs
	- never prompt the user to receive notifications as soon as they land on your app
		- they have no context at this time
		- find a more appropritate time to receive notifications
		- e.g. when the user is configuring their communication settings, after the user completes a critical task, when they return to your site (after they are a known user who uses your app)


### TODO (not in order, but start at the top cuz fuck it)
	- [safari push notifications](https://stackoverflow.com/questions/52479412/safari-push-notifications-pushmanager-cant-register)
		- fuck safari
		- and android webview
	- [push messaages](https://whatwebcando.today/push-notifications.html)
		- fucks afari
	- [push notifications docs](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications)
	- [notifications api](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
	- [notification interface](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
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
	- designed to respect the users privacy by keeping users anonymous and not requiring strong authentication between your app and the push service
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

### push examples - mostly worker context
```js


	// step 2 - synchronize the subscription with our server
	// only if the user gave us permissions to show notifications in step 1
	// get the current subscription everytime the user accesses our app
	// it is not stable and may change (why we need to keep it in sync)
	if ('serviceWorker' in navigator) {
		(async () => {
			// this will wait indefinitely for a sw to become active 
			const reg = await navigator.serviceWorker.ready;
			// now you can call methods that require an active sw;

			const currentSub = await reg.pushManager.getSubscription();
			if (currentSub) updateDatabaseWithSubscription();
			else {
				// VAPID - create keys via webpush library 
				// contains { publicKey, privateKey, andOtherShit? }
				// this shit happens on your server
				// vapidKeys = webpush.generateVAPIDKeys(); 
				
				// in order to use the pub key with the subscribe method
				// you have to pass it as a Uint8Array
				// check that this shit is right
				// i think the the array should be the pub key reetrieved from generateVAPIDKeys
				// @see this shit https://github.com/web-push-libs/web-push#using-vapid-key-for-applicationserverkey
				const publicKey = new Uint8Array([0x4, 0x37, 0x77, 0xfe, ... ]);


				// step 1 - ensure push permission
				if (Notification.permission === 'granted') {
					// we are under the assumption here
					// that the user has granted us permission 
					// to show push permissions
					const newSub = await reg.pushManager.subscribe({
						// this makes the browser ensures every incoming push message 
						// has a matching and visible notification
						userVisibleOnly: true,
						// see above for generating public key
						applicationServerKey: publicKey,
					});


					pushNewSubToBackEnd(newSub);
				} else if (Notification.permission === 'denied') {
					console.error('fuck this user', e);
				}
			}
		})();
	}

	// displaying notifications
	// show a notification to the user (browser context)
	// however it fetches the current registered service worker
	// so that events triggered by itneractions 
	// are heard by the current service worker
	function displayNotification() {
		// granted|denied|default
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
		        // attach an icon to the notification
		        // e.g. the senders avatar
		        icon: 'icons/example.png',
		        // attach an image to the notification
				image: 'images/poop.png',
				// whether supported devices should force click/dismiss
				requireInteraction: false|true,
				// always add this yourself
				// indicates the time it was created 
				// NOT delivered
				timestamp: Date.now(),
				// no sounds or vibrations 
				// if TRUE and vibrate truthy will throw error
				silent: false|true,
		        // will vibrate/beep/etc again if an existing notification
				// is being replaced by this notification (i.e. a visible notification has the same tag as this one)
				renotify: true,
		        // in milliseconds for phones
		        // vibrate, pause, vibrate
		        vibrate: [100, 50, 100],
		        // sent to the service worker
		        // upon user interaction
		        // arbitrary shit to send on notification click, swipe, etc
		        data: {
		          dateOfArrival: Date.now(),
		          primaryKey: 1
		        },
		        // contextually relevant action buttons to display with the notification
		        // for the user to interact with our app
		        // without having to actually open the browser
		        // lenght of array must =< Notification.maxActions
		        actions: [
					{
						// string to be displayed on the notification
						action: 'explore', 
						// also displayed to the user
						title: 'Explore this new world',
						// accompany image URL
						icon: 'images/checkmark.png'
					},
		        ]
		      };
	      self.registration.showNotification('Hello world!', options);
	    });
	  }
	}

	// called whenever a message is received
	self.onmessage = event => {

	}
	// show a notification to the user (worker context)
	// almsot exactly as in the browser context,
	// but this time in response to a push event received by a service worker from a push server
	self.onpush = event => {
		const body = event.data?.json() ?? {};
		// json(), text(), I think array and some other shit
		const options = { seeAbove, body }; // see how we get the body from the event object above

		(async () => {
			// we only use notifications if the app is closed 
			// else we utilize whatever in-app messaging native to the browser, e.g. toasts
			// see elseware for a more robust matchAll with options
			const clients = await clients.matchAll();
				// Show notification if app is closed
				//  always use event.waitUntil 
				// see elseware for options
			if (clients.length === 0) event.waitUntil(
				self.registration.showNotification('Hello world!', options)
			);
			
			else console.log('Application is already open!');
		})();
	};
i
```


### node examples 
```js
	// example webpush from node to push service 
	var webPush = require('web-push');

	var pushSubscription = getItFromYourFuckingDatabase();

	var payload = 'Here is a payload!';

	var options = {
	  vapidDetails: {
	  	subject: 'mailto:sender@example.com'
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