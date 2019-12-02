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
		backend.post(req, res).then(() => {
			// always save to arangodb
			settimeout(arrangodb.query(save req.body))

			// use redis for hot items (i.e trigger today)
			if (!utc(triggerTime).today within utc(now).today) {
				// add triggers for this day, for this function, to this set
				redis.sadd fnName.triggerDateInUtc triggerTimeInUtc.EventId
			}
		})

		// execution
		beforeFunctionToRunRuns
			.getCurrentSetItems()
			.then(() => arrangodb.query(get functionname with this id))
			.then(items => functionToRun[..items])
			.then((erros and shit) =>  handleErrsAndShit())
			.then(() => redis.delete(redisSetName))
			.then(() => arrangodb.query(save success and errors and other important shit))

		// automation
		nodeCron.everyday()
			.then(() => arrangodb.query(get appropriate conjob configs < 1 week))
			.then(items => push to redit)
			.then((errors and shit) => arrangodb.query update records with appropriate information)
		
		// init 
		arrangodb.query(save all runnable function Names with index on name)





```