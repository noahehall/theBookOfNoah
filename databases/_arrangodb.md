# docs 
	- [installation](https://www.arangodb.com/docs/stable/getting-started-installation.html)


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


	# bd admin
	# create things
		db._createDatabase("mydb"); #bool

		var users = require("@arangodb/users");
		users.save("myuser@mydb", "mypw");
		users.grantDatabase("root@example", "example");

```