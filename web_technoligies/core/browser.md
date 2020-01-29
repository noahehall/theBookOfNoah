# links 
	- [history api](https://developer.mozilla.org/en-US/docs/Web/API/History)
	- [history tutorial](http://diveintohtml5.info/history.html)
	- [push notifications](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications)
	- [notifications api](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)


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
	history.back()
		// previous page in sessino history 
	history.forward()
		// next page in session history
	history.go(-1)
		// @see history.back()
	history.go(1)
		// @see history.forward()

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