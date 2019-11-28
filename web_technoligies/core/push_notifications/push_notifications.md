- [great article](https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce)


# flow 
## setup
	1.	user is asked for and provides consent to receive notifications from your application 
	2.	service worker registration workflow completes 
	3.	service worker creates and sends a push notification subscription to your backend
	4.	your backend saves the subscription 

## pushing: backend -> frontend 
	1. backend sends a message to a saved subscription 
	2. service worker receives message and sends to app thread 
	3. BOOM