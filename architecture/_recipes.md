# TLDR 
 	- uhhh place to gather my thoughts 
 	- fuck scylladb <<<<< arangodb

# time based triggers 
```js 
	// todo 
		// handle logic 
		// user later changes date
	// golden path
		// post data to backend
		client.post({ 
			triggerUtc: toUtcString(event.starttime), 
			functiontorun: string,
			eventid: string.
		});functionToRun

		// backend handleer
		// save things
		backend.post(req, res).then(() => {
			// always save to arangodb
			settimeout(arrangodb.query(save req.body))

			// use redis for hot items (i.e trigger today)
			if (!utc(triggerTime).today within utc(now).today) {
				// add triggers for this day, for this function, to this set
				redis.sadd fnName.triggerDateInUtc triggerTimeInUtc.EventId
			}
		})

		// backendhandler
		// remove things 
		backend.post(req, res).then(() => {
			event.status !== active 
			redis.srem fnName.triggerDateInUtc triggerTimeInUtc.eventId
		})

		// backendhandler 
		// trigger invocation 
			// returns all items for this function, for this day, with the matching time
			const allEvents = redis.sscan fnName.triggerdateInUtc triggerTimeInUtc*
			// should return just the eventid, 
			const eventIds = allEvents.map(event => event.split('.').pop())

		// automation
		nodeCron.everyday()
			.then(() => arrangodb.query(get all events for today))
			.then(items => push to redit under aforementioned logic)

```