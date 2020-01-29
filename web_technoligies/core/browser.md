# links 
	- [history api](https://developer.mozilla.org/en-US/docs/Web/API/History)
	- [history tutorial](http://diveintohtml5.info/history.html)
	- [push notifications](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications)
	- [notifications api](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
	- [onpopstate event](https://developer.mozilla.org/en-US/docs/Web/API/Window/onpopstate)


# DOM
# next up
  - [mutation observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
  -

# DOM
  - When the browser loads the page, it transforms your HTML into a live document
    1. parses html (strings of text) into a data model (objects and nodes)
    2. preserves the HTML hierarchy by creating a tree of nodes (the DOM)

# window
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
	
```


# push notifications 
## terms
	- notification 
		- a message displaye dto the user outside of the apps normal UI 
	- push message
		- a message sent from the server tot he client 
	- push notification 
		- a notification created in response to a push message 
	- notifications API 
		- an interface used to configure and display notifications to the user 
	- push api 
		- an interface used to subscri9be your app to apush service and receive push messages in the service worker 
	- web push 
		- an informal term referring to the process or components involved in the process of pushing messages from a server to a client on the web
	- push service 
		- a system for routing push messaages form a server to a client 
		- each browser implements its own push service 
	- web push protocol 
		- describes how an application server or user agent interacts with a push service 
	- 


# URL 
```js 
	let params = (new URL(document.location)).searchParams;
	let name = params.get('name'); // is the string "Jonathan Smith".
	let age = parseInt(params.get('age')); // is the number 18

```