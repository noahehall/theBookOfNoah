# TLDR 
 	- uhhh place to gather my thoughts 

# time based triggers 
```js 
	// post data to backend
	client.post({ 
		redisSetName: dateTimeToRunFunction, 
		value: event.id,
	});

	// backend handleer
	// upsert redis set, which returns total size of set
	const sizeOfRedisSetForThisDateTime = backend.post(req, res).pushToRedis(clientData)
	// if items exist, upset nodecron job
	if (sizeOfRedisSetForThisDateTime) nodeCron.upsertCronJob(redisSetName, functionToRun)

	beforeFunctionToRunRuns
		.getCurrentSetItems()
		.then(items => functionToRun[..items])
		.then((erros and shit) =>  handleErrsAndShit())
		.then(() => redis.delete(redisSetName))


```