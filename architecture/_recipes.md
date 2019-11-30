# TLDR 
 	- uhhh place to gather my thoughts 

# time based triggers 
```js 
	// golden path
		// post data to backend
		client.post({ 
			redisSetName: dateTimeToRunFunction, 
			value: functionNameToRun.event.id,
			type: poop,
		});

		// backend handleer
		backend.post(req, res).then(() => {
			// essentially a log of this post request
			arrangodb.execute(upsert raw data + convertToId(functionNameToRun));

			// far-in-future items arent kept in redis
			if (dateTimeToRunFunction > 1 week) arrangodb.execute(save nodecronjob.config under dateTimeToRunFunction + convertToId(functionNameToRun))
			// near-time items are pushed directly to redis
			else {
				// upsert redis set, which returns total size of set
				const sizeOfRedisSetForThisDateTime = redis.sadd(clientData + convertToId(functionname))
				// create cronjob
				nodeCron.upsertCronJob(redisSetName, functionToRun)
			}
		})

		// execution
		beforeFunctionToRunRuns
			.getCurrentSetItems()
			.then(() => arrangodb.execute(get functionname with this id))
			.then(items => functionToRun[..items])
			.then((erros and shit) =>  handleErrsAndShit())
			.then(() => redis.delete(redisSetName))
			.then(() => arrangodb.execute(save success and errors and other important shit))

		// automation
		nodeCron.everyday()
			.then(() => arrangodb.execute(get appropriate conjob configs < 1 week))
			.then(items => push to redit)
			.then((errors and shit) => arrangodb.execute update records with appropriate information)
		
		// init 
		arrangodb.execute(save all runnable function Names with index on name)





```