# links
- [great article](https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce)
- [Notification object docs](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification#Parameters)
- [service worker api](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- 


# flow 
## setup
	1.	user is asked for and provides consent to receive notifications from your application 
	2.	service worker registration workflow completes 
	3.	service worker creates a push notification subscription and sends the endpoint it receives to your backend
	4.	your backend saves the subscription endpoint for later use to push messages back to the service worker

## pushing: backend -> frontend 
	1.	backend sends a message to a saved subscription 
	2.	service worker receives message and sends to app thread 
	3.	app displays notification to user 
	4.	BOOM

## key decision points 
	- 	ask user for permission 
		- 	user can press X (DENIED)
		- 	user can deny (DENIED)
		- 	user can grant (SUCCESS)

# terminology 
	-	push
		-	the act of sending a notification form a server to an application 
	-	notification 
		-	object displayed in the status bar of a client, e.g. smartphone/browser 
	-	subscription 
		-	created by a service worker
		-	creates a unique endpoint that receives pushes from a backend server and proxies to the service worker that created it

# API 
## TODO 
	- [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
## [pushmanager](https://developer.mozilla.org/en-US/docs/Web/API/PushManager)
	- subscribe()
		- subscribes to a push service 
		- return a promise that resolves to a pubscription object