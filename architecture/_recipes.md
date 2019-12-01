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
			triggerUtc: toUtcString(event.endtime), 
			functiontorun: string,
			eventid: string.
		});functionToRun

		// backend handleer
		backend.post(req, res).then(() => {
			// far-in-future items arent kept in arangodb
			// set time to 00:00:00 to facilitate getting all dates for today
			if (req.body.triggerUtc. > utc(serverTime)) arrangodb.query(save req.body)
			
			// near-time items are pushed directly to redis
			else {
				// upsert redis set, which returns total size of set
				// set trigger to original trigger UTC set from client
				eventTriggerConfig = getBusinessLogic(req.body)
				const sizeOfRedisSetForThisDateTime = redis.sadd(eventTriggerConfig)

				if (sizeOfRedisSetForThisDateTime)
					// create cronjob
					nodeCron.upsertCronJob(triggerUtc, () => functionToRun([...redisGetAllEvents(triggerUtc)]))
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