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
	const sizeOfRedisSetForThisDateTime = backend.post(req, res).pushToRedis()
	if (sizeOfRedisSetForThisDateTime) nodeCron.upsertCronJob(redisSetName, functionToRun)


```