# docs 
	- [installation](https://www.arangodb.com/docs/stable/getting-started-installation.html)



# quickies 
```sh
	# server admin  
		# start server (both works?)
		arangodb
		arangod # use this per docs

		# tty to server 
		arangosh

	# errors 
		# maximum number of memory mappings per process is 65530
		sudo sysctl -w "vm.max_map_count=256000"


	# bd admin
	# create things
		db._createDatabase("mydb");

		var users = require("@arangodb/users");
		users.save("myuser@mydb", "mypw");
		users.grantDatabase("root@example", "example");

```