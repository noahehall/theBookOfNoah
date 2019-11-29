# TLDR 
 	- uhhh place to gather my thoughts 

# time based triggers 
```js 
	// post data to backend
	webapp.post({ 
		redisSetName: dateTimeToRunFunction, 
		value: event.id,
	});

	// backend handleer
	// upsert redis set, which returns total size of set
	const sizeOfRedisSetForThisDateTime = backend.post(req, res).pushToRedis()
	// if items exist, upset nodecron job
	if (sizeOfRedisSetForThisDateTime) nodeCron.upsertCronJob(redisSetName, functionToRun)

	functionToRun.then(() => redis.delete(redisSetName))


```