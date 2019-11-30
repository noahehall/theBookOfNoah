# docs 
	- [main docs](https://www.arangodb.com/documentation/)
	- [installation](https://www.arangodb.com/docs/stable/getting-started-installation.html)
	- [web interface](https://www.arangodb.com/docs/stable/getting-started-web-interface.html)
	- [web interface main docs](https://www.arangodb.com/docs/stable/programs-web-interface.html)
	- [data modeling concepts](https://www.arangodb.com/docs/stable/data-modeling-concepts.html)
	- [data modeling naming conventions](https://www.arangodb.com/docs/stable/data-modeling-naming-conventions-document-keys.html)
	- [misc aql functions](https://www.arangodb.com/docs/stable/aql/functions-miscellaneous.html)
	- [aql](https://www.arangodb.com/docs/stable/aql/)
	- [nodejs aql template tag](https://github.com/arangodb/arangojs/blob/master/docs/Drivers/JS/Reference/Database/Queries.md#aql)


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
		INSERT {...} INTO collectionName 
		INSERT {...} into collectionName RETURN NEW #returns the created doc
		UPDATE "9915" WITH { age: 40 } IN users # only modifies specified attributes
		REPLACE "9915" WITH { age: 40 } IN users # replaces entire document
		REMOVE "9883" IN users


	# operators
		u.age > 15 || u.active == true ? u.userId : null
		&& logical and operator
		|| logical or operator
		! logical not/negation operator
		AND logical and operator
		OR logical or operator
		NOT logical not/negation operator
		2010..2013 // [ 2010, 2011, 2012, 2013 ]
		0  ==  null            // false
		1  >   0               // true
		true  !=  null            // true
		45  <=  "yikes!"        // true
		65  !=  "65"            // true
		65  ==  65              // true
		1.23  >   1.32            // false
		1.5  IN  [ 2, 3, 1.5 ]   // true
		"foo"  IN  null            // false
		42  NOT IN  [ 17, 40, 50 ]  // true
		"abc"  ==  "abc"           // true
		"abc"  ==  "ABC"           // false
		"foo"  LIKE  "f%"          // true
		"foo"  NOT LIKE  "f%"      // false
		"foo"  =~  "^f[o].$"       // true
		"foo"  !~  "[a-z]+bar$"    // true
		[ 1, 2, 3 ]  ALL IN  [ 2, 3, 4 ]  // false
		[ 1, 2, 3 ]  ALL IN  [ 1, 2, 3 ]  // true
		[ 1, 2, 3 ]  NONE IN  [ 3 ]       // false
		[ 1, 2, 3 ]  NONE IN  [ 23, 42 ]  // true
		[ 1, 2, 3 ]  ANY IN  [ 4, 5, 6 ]  // false
		[ 1, 2, 3 ]  ANY IN  [ 1, 42 ]    // true
		[ 1, 2, 3 ]  ANY ==  2            // true
		[ 1, 2, 3 ]  ANY ==  4            // false
		[ 1, 2, 3 ]  ANY >  0             // true
		[ 1, 2, 3 ]  ANY <=  1            // true
		[ 1, 2, 3 ]  NONE <  99           // false
		[ 1, 2, 3 ]  NONE >  10           // true
		[ 1, 2, 3 ]  ALL >  2             // false
		[ 1, 2, 3 ]  ALL >  0             // true
		[ 1, 2, 3 ]  ALL >=  3            // false
		["foo", "bar"]  ALL !=  "moo"     // true
		["foo", "bar"]  NONE ==  "bar"    // false
		["foo", "bar"]  ANY ==  "foo"     // true

```

## node driver quickes 
```sh
	const db = new Database({
	  url: "http://localhost:8529"
	});
	db.useDatabase("pancakes");
	db.useBasicAuth("root", "");
	// The database can be swapped at any time
	db.useDatabase("waffles");
	db.useBasicAuth("admin", "maplesyrup");

	// Using ArangoDB behind a reverse proxy
	const db = new Database({
	  url: "http://myproxy.local:8000",
	  isAbsolute: true // don't automatically append database path to URL
	});

	# db commands 
		db.createDatabase 
		db.useDatabase(dbName) # select db
		db.useBasicAuth(uname, upass) # authenticate with selected db


	# aql 
		const userCollection = db.collection("_users");
		const role = "admin";

		const query = aql`
		  FOR user IN ${userCollection}
		  FILTER user.role == ${role}
		  RETURN user
		`;

		// -- is equivalent to --
		const query = {
		  query: "FOR user IN @@value0 FILTER user.role == @value1 RETURN user",
		  bindVars: { "@value0": userCollection.name, value1: role }
		};



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

### create 
```sql 

	
```

### control flow
```sql 
	NOT_NULL(elX, ...) 
	FIRST_LIST(arrayX, ...)
	FIRST_DOCUMENT(valX, ...)
	SLEEP()


```
### db functions 
```sql 
	DOCUMENT(collectionName, id)
	COLLECTIONS()
	COUNT()
	LENGTH() #pass it an array 0f anything


	COLLECTION_COUNT() 
	CHECK_DOCUMENT(doc)
	CURRENT_USER()
	DECORE_REV()

```

### operators 
	- all return bool
		- ==, !=, etc.
		- IN 
		- NOT IN 
		- LIKE
		- NOT LIKE 
		- regular expressions
			- =~
			- !~
### string 
```sql 
	JSON_STRINGIFY(doc)

```


### hash functions 
```sql 
	HASH(value)

	# string hashing 
	CRC32()
	FNV64()
	MD5()
	SHA1()
	SHA512()
```


### misc 
```sql 
	APPLY(functionName, argumentList)
	CALL(functionName, argX, ...)
	FAIL(reason)
	
	NOOPT()
	VERSION()
	ASSERT(expression, msg)
	WARN(expression, msg)
```


# examples 
```sql 
	# retrieving documents
		DOCUMENT( users, "users/john" )
		DOCUMENT( users, "john" )
		DOCUMENT( users, [ "users/john", "users/amy" ] )
		DOCUMENT( users, [ "john", "amy" ] )
		DOCUMENT("users/john")
		DOCUMENT( [ "users/john", "users/amy" ] )

	# loops 
		FOR i IN 1..3 FILTER ASSERT(i > 0, "i is not greater 0") RETURN i
		FOR user IN users
			sort user._key 
			RETURN user
		FOR user IN users
			FILTER user.age > 30
			SORT user.age
			RETURN user.name
			FOR user IN users
		FOR doc IN coll
			RETURN NOT doc.attr LIKE "…"



		# nested loop
		FOR user1 IN users
			FOR user2 IN users
				FILTER user1 != user2
				RETURN [user1.name, user2.name]


		# nested variable used in return 
		FOR user1 IN users
		  FOR user2 IN users
		    FILTER user1 != user2
		    LET sumOfAges = user1.age + user2.age 
		    FILTER sumOfAges < 100
		    RETURN {
		        pair: [user1.name, user2.name],
		        sumOfAges: sumOfAges
		    }

	# return statements
			RETURN { userName: user.name, age: user.age }
			RETURN user.name
			RETURN NEW 
			RETURN CONCAT(user.name, "'s age is ", user.age)
			RETURN {
				pair: [user1.name, user2.name],
				sumOfAges: user1.age + user2.age
			}


	# conditionals 
		RETURN 1 == 1 ? "okay" : FAIL("error") // "okay"
		RETURN 1 == 1 || FAIL("error") ? true : false // true
		RETURN 1 == 2 && FAIL("error") ? true : false // false
		RETURN 1 == 1 && FAIL("error") ? true : false // aborted with error

	# MISC 
		SORT user.age DESC
		FILTER user.age > 30



```