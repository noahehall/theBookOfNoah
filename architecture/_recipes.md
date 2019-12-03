# TLDR 
 	- uhhh place to gather my thoughts 
 	- fuck scylladb <<<<< arangodb

# time based triggers 
```js 
	// todo 
		// handle logic 
		// user later changes date
		// could fit redis pub.sub in here but fuckit at this stage
	// golden path
		// post data to backend
		client.post({ 
			triggerUtc: toUtcString(event.starttime), 
			functiontorun: string,
			eventid: string.
		});

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
		// likely need to send before and after to be super hacky 
		// as the likely change is the trigger date, so this will srem nothing
		backend.post(req, res).then(() => {
			event.status !== active 
			redis.srem fnName.triggerDateInUtc triggerTimeInUtc.eventId
		})

		// backendhandler 
		// automation: trigger invocation
		// at scale we can extend the keys from 'day' to 12 hour blocks, 6 hour blocks, etc so we're not constantly scanning milliions of records
			// returns all items for this function, for this day, with the matching time
			// potentially could be a lua script
			nodeCron.every5Minutes().doBelow()
				// do this until sscan returns cursor 0
				const allEvents = redis.sscan fnName.triggerdateInUtc 0 MATCH getTriggerTimeMatchingLast5MinutesRegex() COUNT 1000
				const eventIds = timeAndEventIds.map(event => event.split('.').pop())
				fnName(eventids)


		// backend handler
		// automation: at 12:00am, load todays events into redis
		nodeCron.everyday()
			.then(() => arrangodb.query(get all events for today))
			.then({eventIds} => {
			// potentially could be a lua script
				redis.multi
					redis.expire fnName.TriggerDateInUtc math(24hrs in seconds)
					redis.sadd fnName.triggerdateInUtc eventIds.map(id => triggerTimeInUtc.id)
				redis.multiend
			})

		// bakcend handler 
		// automation: run functionToRun every minute 
		// functionToRun: knows how to retrieve items from redis and do its thing
		nodeCron.run(60second interval () => functionToRun())

```