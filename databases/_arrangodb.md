# must do 
	- generally all arnago courses if you decide to make arnagodb your DB of choice muther fucker 
	- [arangodb performance course](https://www.arangodb.com/arangodb-performance-course/)
	- [arangosearch](https://www.arangodb.com/docs/stable/arangosearch.html)


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
	- [indexes](https://www.arangodb.com/docs/stable/indexing-index-basics.html)
	- [libicu - used for word tokenization in fulltext indexes](https://packages.debian.org/sid/libicu-dev)


# about 
	- this shit is a javascript devs heaven
	- in general read the top section first 
		- then find the examples/quickies below as they MAY contain more information 
			- i had duplicating shit, and sometimes its a waste of time finding the correct place to put something


# current best practices understanding 
	- any datum tht needs to be sorted should be a skiplist index
  - any unique value should be a form of a hash index
  - set a docs creation time as a unix timestamp


# architecture 
## `arangod` 
	- the server
	- speaks http/rest 
	- comes with a free web interface
	

## `indexes 
	- user-defined indexes can be created on a collection level 
	
	- creating indexes 
		- foreground index: only permitted under an exclusive collection lock 
			- i.e the collection is not available while the index is being crated 
		- background idnex: the collection remains mostly avialable during the index creation 

### index types 
	- general index properties 
		- unique: no two docs can have the same value
		- sparse: only those docs whose index attribute has a value set to a NON NULL value will be indexed 
			- i.e. not all docs have to be indexed 
			- usefulf for optional attributes


	- system indexes (automatically created) 
		- primary key: _id and _key
			- a hash index for the dockey keys of all documents in the collection 
			- allows quick selection of documents using eith er the _key or _id attributes 
			- is an unsorted hash index 
				- i.e. cannot be used for non-equallity range queires or sorting
			- cannot be 
				- dropped 
				- changed 
				- create user-defiend primary indexes
		- an edge collections edge index: _from and _to
			- [SKIPPED](https://www.arangodb.com/docs/stable/indexing-index-basics.html#edge-index)
	
	- fulltext index 
		- properties 
			- can index a single attribute only 
			- will index all words contained the attribute value that are stringy
			- only words with a specified min length are indexed 
			- word tokenization is done useing the word boundary analysis provided by 
			only available in dedicated functions for simple queries 
				- not enabled for other types of queries/conditions
				- use `arangosearch` for that

		- use cases 
			- complete match queries (full words)
			- prefix queries (partial words) 
				- basic logical operations (and, or, not) for combin

	- hash index 
		- properties
			- unsorted 
				- does not support range queries or sorting 
			- created on one/more document attributes
				- will only be used if 
					- all attributes are present int he search condition
					all attributes are compared using `==`

			- types 
				- unique hash indexe
					- inserting docs with a duplicate key will lead to a unqiue constrint violation
				
				- unique, sparse hash index
					- docs whose value is set to null will not be indexed 
					- use cases 
						- ensure unique docs 
						- optional attributes
				
				- non-unique hash index
					- all docs will be indexed 

				
				- non-unique, sparse hash index 
					- only those docs that have all the indexed attributes set to a vaalue other than null will be indexed 
					- use cases 
						- for optional attributes


		- use cases
			- used to quickly find documents withs pecific attribute values 
			- equality lookups

	- skiplist index 
		- properties
			- sorted index 
			- always created in ascending order 
				- but can access indexed elements in both ascending/descending order
		
		- only used if 
			- lookups, range queries, sorting
				- all index attributes are provide din a query 
				- or the leftmost prefix of the index attribute is specified 
					- i.e. the key used on the left side of the query
			- sorting 
				- the index attributes must be specifie dint he SORT clause of the query int he same order as they appear int he index definition 
			- combined indexes sorting (i.e. multiple attributes)
				- the sort ordeers in a single query are specified in the SORT must all be ascending or all be descending

		- types 
			- non-unique sparse skiplist index 
			- non-unique skiplist index 
			- unique, sparse skiplist index 
			- unique skiplist index

		
		- use cases 
			- quickly find docs with 
				- specific attribute values 
				- range queries  
				- returning docs form the index in sorted order

	- TTL (time to live) index 
		- [SKIPPED](https://www.arangodb.com/docs/stable/indexing-index-basics.html#ttl-time-to-live-index)
		- properties 
			- docs are removed `expireAfter` sectonds afte rtheir reation time 

		- use cases
			- for automatically removing expired documents (setting `expireAfter` and specifiying the docs cresation date and time)
	
	- geo index 
		- [SKIPPED](https://www.arangodb.com/docs/stable/indexing-index-basics.html#geo-index)


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

# quickies 
```js
	// server admin  
		// start server (both works?)
		arangodb
		arangod // use this per docs
		sudo systemctl start arango // tab completeion i think its arangodb.service

		// tty to things 
		arangosh 
		arangosh --server.username "myuser@mydb" --server.database mydb
		help // lists a bunch of cmds

	// errors 
		// maximum number of memory mappings per process is 65530
		sudo sysctl -w "vm.max_map_count=256000"


	// db admin
	// create things
		db._createDatabase("mydb"); //bool
		db._useDatabase('mydb')

		var users = require("@arangodb/users");
		users // will print methods on the users db
		users.save("myuser@mydb", "mypw"); // {user, active, extra, code}
		users.grantDatabase("root@example", "example");

	// CRUD (aql)
		// 	arangosh
		db._query('RETURN DOCUMENT("ActivityActionEvents/2019-12-04T00:00:00Z")')

		RETURN DOCUMENT('collectionName/_key')
		// if found, update with new values
		UPSERT searchExpression // try to find this document
			INSERT insertExpression // insert if not found
			UPDATE updateExpression // update if found
			IN collection options
		// if found, replace
		UPSERT searchExpression 
			INSERT insertExpression 
			REPLACE updateExpression // replace if found
			IN collection options
		INSERT {...} INTO collectionName 
		INSERT {...} into collectionName RETURN NEW //returns the created doc
		UPDATE "9915" WITH { age: 40 } IN users // only modifies specified attributes
		REPLACE "9915" WITH { age: 40 } IN users // replaces entire document
		REMOVE "9883" IN users

		// read 
		// best way to find things by _key or _id 
		db.collection.document(`doc_key_here`)
		db._document(`doc_id_here`)


	// operators
	//
		// +  regular expressions
		=~
		!~
		u.age > 15 || u.active == true ? u.userId : null
		&& //logical and operator
		|| // logical or operator
		! //logical not/negation operator
		== 
		!=  //etc.
		AND //logical and operator
		IN 
		LIKE
		NOT IN 
		NOT LIKE 
		NOT // logical not/negation operator
		OR // logical or operator
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
```js
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

	// db commands 
		db.createDatabase 
		db.useDatabase(dbName) // select db
		db.useBasicAuth(uname, upass) // authenticate with selected db.query(aqlTemplateString)


	// aql 
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
		async database.explain(query, [bindVars,] [opts]): ExplainResult

		const cursor = await db.query(aql`
		  FOR u IN _users
		  FILTER u.authData.active == ${active}
		  RETURN u.user
		`);

		// nested query 
			const color = "green";
			const filterByColor = aql`FILTER d.color == ${color}'`;
			const result2 = await db.query(aql`
			  FOR d IN ${mydata}
			  ${filterByColor}
			  RETURN d
			`);

		// aql literal 
			const filterGreen = aql.literal('FILTER d.color == "green"');
			const result = await db.query(aql`
			  FOR d IN ${mydata}
			  ${filterGreen}
			  RETURN d
			`);

		// aql joins
			// Basic usage
			const parts = [aql`FILTER`, aql`x`, aql`%`, aql`2`];
			const joined = aql.join(parts); // aql`FILTER x % 2`

			// Merge without the extra space
			const parts = [aql`FIL`, aql`TER`];
			const joined = aql.join(parts, ""); // aql`FILTER`;

			// Real world example: translate keys into document lookups
			const users = db.collection("users");
			const keys = ["abc123", "def456"];
			const docs = keys.map(key => aql`DOCUMENT(${users}, ${key})`);
			const aqlArray = aql`[${aql.join(docs, ", ")}]`;
			const result = await db.query(aql`
			  FOR d IN ${aqlArray}
			  RETURN d
			`);
			// Query:
			//   FOR d IN [DOCUMENT(@@value0, @value1), DOCUMENT(@@value0, @value2)]
			//   RETURN d
			// Bind parameters:
			//   @value0: "users"
			//   value1: "abc123"
			//   value2: "def456"

			// Alternative without `aql.join`
			const users = db.collection("users");
			const keys = ["abc123", "def456"];
			const result = await db.query(aql`
			  FOR key IN ${keys}
			  LET d = DOCUMENT(${users}, key)
			  RETURN d
			`);
			// Query:
			//   FOR key IN @value0
			//   LET d = DOCUMENT(@@value1, key)
			//   RETURN d
			// Bind parameters:
			//   value0: ["abc123", "def456"]
			//   @value1: "users"


	//control flow
	NOT_NULL(elX, ...) 
	FIRST_LIST(arrayX, ...)
	FIRST_DOCUMENT(valX, ...)
	SLEEP()


	// db functions 
	DOCUMENT(collectionName, id)
	COLLECTIONS()
	COUNT()
	LENGTH() #pass it an array 0f anything


	COLLECTION_COUNT() 
	CHECK_DOCUMENT(doc)
	CURRENT_USER()
	DECORE_REV()

	// hash functions 
	HASH(value)

	//tring hashing 
	CRC32()
	FNV64()
	MD5()
	SHA1()
	SHA512()

	// to be categorized
	JSON_STRINGIFY(doc)
	APPLY(functionName, argumentList)
	CALL(functionName, argX, ...)
	FAIL(reason)
	NOOPT()
	VERSION()
	ASSERT(expression, msg)
	WARN(expression, msg)


	// examples 
	
	// indexing top level keys 
		db.COL_NAME.ensureIndex({ type: "hash", fields: [ "name" ] })
		db.COL_NAME.ensureIndex({ type: "hash", fields: [ "name", "age" ] })
	// indexing sub-attributes 
		db.COL_NAME.ensureIndex({ type: "hash", fields: [ "name.last" ] })
		db.COL_NAME.ensureIndex({ type: "hash", fields: [ "name.last", "name.first" ] })
	// indexing array values 
	// 
		
	//retrieving documents
		DOCUMENT( users, "users/john" )
		DOCUMENT( users, "john" )
		DOCUMENT( users, [ "users/john", "users/amy" ] )
		DOCUMENT( users, [ "john", "amy" ] )
		DOCUMENT("users/john")
		DOCUMENT( [ "users/john", "users/amy" ] )

	// loops 
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



	// nested loop
		FOR user1 IN users
			FOR user2 IN users
				FILTER user1 != user2
				RETURN [user1.name, user2.name]


		// nested variable used in return 
		FOR user1 IN users
		  FOR user2 IN users
		    FILTER user1 != user2
		    LET sumOfAges = user1.age + user2.age 
		    FILTER sumOfAges < 100
		    RETURN {
		        pair: [user1.name, user2.name],
		        sumOfAges: sumOfAges
		    }

	// return statements
			RETURN { userName: user.name, age: user.age }
			RETURN user.name
			RETURN NEW 
			RETURN CONCAT(user.name, "'s age is ", user.age)
			RETURN {
				pair: [user1.name, user2.name],
				sumOfAges: user1.age + user2.age
			}


	// conditionals 
		RETURN 1 == 1 ? "okay" : FAIL("error") // "okay"
		RETURN 1 == 1 || FAIL("error") ? true : false // true
		RETURN 1 == 2 && FAIL("error") ? true : false // false
		RETURN 1 == 1 && FAIL("error") ? true : false // aborted with error

	// MISC 
		SORT user.age DESC
		FILTER user.age > 30


	// indexes 
	// hash indexes: the index attribute msut be in thee LEFT MOST position
	FILTER doc.value1 == ...
	FILTER doc.value1 < ...
	FILTER doc.value1 > ...
	FILTER doc.value1 > ... && doc.value1 < ...

	FILTER doc.value1 == ... && doc.value2 == ...
	FILTER doc.value1 == ... && doc.value2 > ...
	FILTER doc.value1 == ... && doc.value2 > ... && doc.value2 < ...

	// skiplist indexes 
	// the skiplist index attributes must be 
	// used in the same order as they were indexed 
	// have the same sort order (asc/desc)
	// be in the LEFT MOST 
	SORT value1 ASC, value2 ASC (and its equivalent SORT value1, value2)
	SORT value1 DESC, value2 DESC
	SORT value1 ASC (and its equivalent SORT value1)
	SORT value1 DESC
```