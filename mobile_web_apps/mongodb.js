https://docs.mongodb.org/manual/core/crud-introduction/
https://university.mongodb.com/
http://mongoosejs.com/
http://www.tutorialspoint.com/mongodb/index.htm
http://www.tutorialspoint.com/mongodb/mongodb_update_document.htm

# quickies
	- start: `sudo systemctl start mongodb`
	- status: `sudo systemctl status mongodb`
	-

```
mac specific
	To have launchd start mongodb now and restart at login:
		brew services start mongodb
		Or, if you dont want/need a background service you can just run:
		mongod --config /usr/local/etc/mongod.conf

quick cmd
	which mongo #where its located
	mongo #connect to the last connected db
	mongo some-db-name #will create the db & connect to it, or connect to it if it already exists

	#setup your dir for mongodb
	sudo mkdir -p /data/db
	sudo chown -R `id -u` /data/db

	show collections #show all of your tables

	db.collectName.insert(yourJavascriptObjectToSave)
	db.collectionName.find() #returns all docuements in collectionName
	db.collectionName.find({key:'value'}) #returns all docs in collectionName where key == value
	db.posts.update({key:'value'},{$set:{randomkey:'randomnewValue'}}) #find all docs with key:'value', and update all docs randomkey with randomnewValue
	db.posts.remove({key:'value'}) #remove all docs where key === value

other

	What does which node, echo $PATH, which iojs, and npm root -g report at all those steps?
		which node && echo $PATH && which iojs && npm root -g
	add user to group
		sudo usermod -a -G mongodb ubuntu
	cat /etc/group #see all groups
	getent yourGroupName  #see all users in a specific group
	completely remove node
		http://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x
		go into usr/bin and delete it
	have root use current node version
		n=$(which node);n=${n%/bin/node}; chmod -R 755 $n/bin/*; sudo cp -r $n/{bin,lib,share} /usr/local
			*/dont include this line in above code
	have root use current rbenv ruby version
		ln -s ~/.rbenv/bin/rbenv /usr/local/bin/rbenv
		rbenv rehash
			rbenvh reshash may do it with out having to issue the first cmd
	have root use current rbenv sass version
		ls -s ~/.rbenv/shims/sass /usr/local/bin/sass
	multi user rbenv
		sudo chown -R ubuntu:ubuntu ~/.rbenv
	sysv-rc-conf
		start/stop services
		sudo apt-get install sysv-rc-conf #install
		sudo sysv-rc-conf #see status of all services
		man sysv-rc-conf #see help
		sysv-rc-conf SERVICENAME on #turn on service, e.g. mongod

		run levels
		* 0 System Halt
		* 1 Single user
		* 2 Full multi-user mode (Default)
		* 3-5 Same as 2
		* 6 System Reboot


user administration
		tail /var/log/mongodb/mongod.log
			mongo log file
		/etc/mongod.conf
			mongod configuration
		sudo chown -R mongodb:mongodb /var/lib/mongodb && sudo chown -R mongodb:mongodb /data/db
		sudo chown -R mongodb:mongodb /data/db
		sudo chown -R -id mongodb /data/db /var/lib/mongodb
			set mongodb as owner
		ls -la /var/lib/mongodb
			see what user mongo runs as
		sudo mkdir -p /data/db/
			make the dir for mongodb
		sudo netstat -tulpn | grep :27017
			which process is running mongod

		errors
			failed to unlink socket file
				eitehr the socket file is not owned by mongod
				or you have to run mongod with sudo

		db.createUser({user: "app",pwd: "f4m3c1ty",roles: [ { role: "readWrite", db: "fce" }, ]})
		db.createUser({user: "imsovru",pwd: "kemitman1",roles: [ { role: "readWrite", db: "fce" }, ]})
			#need to do this to each db the user needs access too
		db.createUser({user: "imsovru",pwd: "kemitman1",roles: [ { role: "userAdminAnyDatabase", db:'admin'}]})
		db.grantRolesToUser("imsovru", [ "readWriteAnyDatabase",'dbAdminAnyDatabase','userAdminAnyDatabase','root']) #grant additional roles
			userAdmin
			readWrite
			read
			dbAdmin

			admin db roles
				readWriteAnyDatabase
				dbAdminAnyDatabase
				userAdminAnyDatabase
				root
				restore
			db.getRoles({showBuiltinRoles:1}) #get all builtin roles
)
		start server with authentication
			sudo mongod --auth --port 27017 --dbpath /data/db
		[or]
			sudo service mongod start
				you must have security authorization enabled (see below)
BEST->  [or]
			sudo mongod -f /etc/mongod.conf
				use the config file

		authenticate
			mongo --port 27017 -u 'imsovru' -p 'kemitman1' --authenticationDatabase 'admin'
			mongo --port 27017 -u 'app' -p 'f4m3c1ty' --authenticationDatabase 'admin'
			another way from shell
				1. start mongo server with auth (See above)
				2. mongod : connect to test
				3. db.auth( 'imsovru','kemitman1' )

		security:
		authorization: enabled
notes on install
	To have launchd start mongodb at login:
	  ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
	Then to load mongodb now:
	  launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
	Or, if you don't want/need launchctl, you can just run:
	  mongod --config /usr/local/etc/mongod.conf
	==> Summary
	🍺  /usr/local/Cellar/mongodb/3.2.1: 17 files, 208.4M
	Noahs-MacBook-Pro:fcm magnifi$

	*/

	  background
	  	database: physical container for collections

		collection: group of documents, equivalent to a table

		document: set of key-value pairs
			has dynamic schema (documents in the same collection do not need to have the same set of fields/structure, and common fields may have different types of data)

			RDBMS	MongoDB
			Database	Database
			Table	Collection
			Tuple/Row	Document
			column	Field
			Table Join	Embedded Documents
			Primary Key	Primary Key (Default key _id provided by mongodb itself)

clie
	mongod: startup the mongodb service

		error: /data/db/ not found
			http://stackoverflow.com/questions/7948789/mongodb-mongod-complains-that-there-is-no-data-db-folder

			sudo mkdir -p /data/db

		error: "Unable to create/open lock file: /data/db/mongod.lock errno:13 Permission denied"
			url: same as above
			sudo chown yourusername:yourgroup -R /data/db

		find your username and group
			groups $(whoami) | cut -d' ' -f1

	mongo: connect to mongo (after its started and running)

	server
		db.help()
			lists all the avail commands

		db.stats()
			stats about the mongodb server

	databases
		show dbs: show all databases
		db: show current database
		use db_name: select/create and select a database
		blah.dropDatabase() : drop the blah database

	collections

		db.createCollection(name, options)
			create a collection
			name: name of the collection
			options: used to specify collection configuration
				{
					capped: true/false, //fixed size, will overwrite oldest entries when it reaches max
					autoIndexID: true/false, //creates an index on _id
					size: SomeNumber, //requred if capped = true
					max: someNumber //max number of documents allowed in capped connectino
				}
		show collections
			show all collections in current db

		db.collectionName.drop()
			drop a collection from the current db

		collection data types
			string: must be UTF-8
			integer: 32/64 bit depending on server
			Boolean:
			Double: floating point
			Min/Max: compare a value against the lowest & highest BSON elements
			Arrays: store arrays/lists
			Timestamp: ctimestamp. useful for when a document has been modified or added
			object: embedded documents
			Null: stores null value
			Symbol: used identically to string, but reserved for languages that use a special symbol type
			Date: date/time in unix time format
				can specify date time by creating object of Date and passing day, month, year
			Object ID: store the documents id
			binary data: store binay data
			Code: store javascript code
			regular expression: store regular expression

	CRUD
		Insert
			db.collectionName.insert(document)
				-if the collection doesnt exist, mongo will create the collection and insert the document into it
				-if _id isnt specified, it will automatically be provided
				-to insert multiple documents, add each one as an item to an array
				db.mycol.insert({
				   _id: ObjectId(7df78ad8902c),
				   title: 'MongoDB Overview',
				   description: 'MongoDB is no sql database',
				   by: 'tutorials point',
				   url: 'http://www.tutorialspoint.com',
				   tags: ['mongodb', 'database', 'NoSQL'],
				   likes: 100
				})
		Create
		save one user: db.users.save({name:'Noah'});
		save multiple users: db.users([{name:'noah'},{name:'bloop'}]);

		Read
		show all users: db.users.find();
		find specific user: db.users.find({name:'Noah'});

		Update
		update user: db.users.update({ name: 'Holly' }, { name: 'Holly Lloyd' });

		Delete
		delete all users: db.users.remove({});
		delete specific user: db.users.remove({ name: 'Holly' });

		Query
		db.collectionName.find()
			displays all data in a non-structured way
		db.collectionName.findOne()
			retrieves a single document
		db.collectionNAme.find().pretty()
			display data in a formatted way
			more examples
				db.users.find({},{username:1}) //return all users, but only the usenrame field

			operator examples
				Operation	Syntax	Example	RDBMS Equivalent
				Equality	{<key>:<value>}
					db.mycol.find({"by":"tutorials point"}).pretty()
					where by = 'tutorials point'
				Less Than	{<key>:{$lt:<value>}}
					db.mycol.find({"likes":{$lt:50}}).pretty()
					where likes < 50
				Less Than Equals	{<key>:{$lte:<value>}}
					db.mycol.find({"likes":{$lte:50}}).pretty()
					where likes <= 50
				Greater Than	{<key>:{$gt:<value>}}
					db.mycol.find({"likes":{$gt:50}}).pretty()
					where likes > 50
				Greater Than Equals	{<key>:{$gte:<value>}}
					db.mycol.find({"likes":{$gte:50}}).pretty()
					where likes >= 50
				Not Equals	{<key>:{$ne:<value>}}
					db.mycol.find({"likes":{$ne:50}}).pretty()
					where likes != 50

			and examples
				db.mycol.find({key1:value1, key2:value2}).pretty()

			or examples
				db.mycol.find({$or: [ //each or is an item in the array
				 	{key1: value1}, {key2:value2}
			  	]}).pretty()
				db.mycol.find({$or:[
					{"by":"tutorials point"},{"title": "MongoDB Overview"}
				]}).pretty()

			and plus or examples
				db.mycol.find({
					"likes": {$gt:10},
					$or: [
						{"by": "tutorials point"},
						{"title": "MongoDB Overview"}
				]}).pretty()
```
