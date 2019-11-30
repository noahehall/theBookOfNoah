# docs 
	- [main docs](https://www.arangodb.com/documentation/)
	- [installation](https://www.arangodb.com/docs/stable/getting-started-installation.html)
	- [web interface](https://www.arangodb.com/docs/stable/getting-started-web-interface.html)
	- [web interface main docs](https://www.arangodb.com/docs/stable/programs-web-interface.html)
	- [data modeling concepts](https://www.arangodb.com/docs/stable/data-modeling-concepts.html)
	- [data modeling naming conventions](https://www.arangodb.com/docs/stable/data-modeling-naming-conventions-document-keys.html)
	- [misc aql functions](https://www.arangodb.com/docs/stable/aql/functions-miscellaneous.html)


# about 
	- this shit is a javascript devs heaven

# quickies 
```sh
	# server admin  
		# start server (both works?)
		arangodb
		arangod # use this per docs

		# tty to things 
		arangosh 
		arangosh --server.username "myuser@mydb" --server.database mydb

	# errors 
		# maximum number of memory mappings per process is 65530
		sudo sysctl -w "vm.max_map_count=256000"


	# db admin
	# create things
		db._createDatabase("mydb"); #bool

		var users = require("@arangodb/users");
		users.save("myuser@mydb", "mypw"); # {user, active, extra, code}
		users.grantDatabase("root@example", "example");

	# CRUD (aql)
		RETURN DOCUMENT('collectionName/_key')
```


# architecture 
	- `arangod` 
		- 	the server
		- 	speaks http/rest 
		- 	comes with a free web interface


## accessing the server 
### shell
	- 	`arangosh` 
		- 	a synchronous shell for interaction with the server 

### web interface 
	- http://localhost:8529/
	- alternative to using the


### drivers 
	- drivers implement a programming interace that should feel natural for that programming lanaguage
	- do all the talking with the server 
	- generally can ignore the http api if using a driver 


## users 
	- admin users 
		- 	any user with access to the system database 
	- db users 
		- 	users with access to a specific db


## databases
	- sets of collections


### collections 
	- store documents
	- you dont define what columns are in advanced
	- collection types 
		- 	document 
		- 	edge


#### documents
	- a record
	- attributes 
		- 	String`_key` immutable. assigned automatically if not given a value
		- 	String`id` `collectionName/_key`  e.g. `events/1234`


## data modeling

# AQL 
## functions 
### control flow
```sql 
	NOT_NULL(elX, ...) 
	FIRST_LIST(arrayX, ...)
	FIRST_DOCUMENT(valX, ...)


```
### db functions 
```sql 
	DOCUMENT(collectionName, id)
	COLLECTIONS()
	COUNT()
	LENGTH(collectionName)
	
	COLLECTION_COUNT() 
	CHECK_DOCUMENT(doc)
	CURRENT_USER()
	DECORE_REV()
```

### operators 
```sql 
	JSON_STRINGIFY(doc)

```

### unkown where the fuck these should go 
```sql 
```


# examples 
```sql 
	# retrieving documents
	DOCUMENT( users, "users/john" )
	DOCUMENT( users, "john" )
	DOCUMENT( users, [ "users/john", "users/amy" ] )
	DOCUMENT( users, [ "john", "amy" ] )

```