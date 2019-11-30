# TLDR 
 	- uhhh place to gather my thoughts 

# time based triggers 
```js 
	// golden path
		// post data to backend
		client.post({ 
			redisSetName: dateTimeToRunFunction, 
			value: functionNameToRun.event.id,
		});

		// backend handleer
		backend.post(req, res).then(() => {
			// essentially a log of this post request
			// arrangodb.query(upsert raw data);

			// far-in-future items arent kept in arangodb
			if (dateTimeToRunFunction > 1 week) arrangodb.query(save nodecronjob.config under dateTimeToRunFunction + (functionNameToRun))
			
			// near-time items are pushed directly to redis
			else {
				// upsert redis set, which returns total size of set
				const sizeOfRedisSetForThisDateTime = redis.sadd(clientData + (functionname))
				// create cronjob
				nodeCron.upsertCronJob(redisSetName, functionToRun)
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