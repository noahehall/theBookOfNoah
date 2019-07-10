# 12factor.net

# terminology
	- contract
	- declarative format
	- continuous deployment
	- continous development
	- distributed system
		- usually multiple copies of the codebase distributed to various environments
	- backing services:
		- any service the app consumes over the network as part of its normal operation
			- databases,
			- messaging/queuing systems (e.g. rabbitmq/beanstalkd)
			- smpt services for outbound email
			- caching systems (e.g. memcached)
			- stmp services (e.g postmark)
			- metrics-gathering services (e.g. new relic / loggly)
			- binary asset servides (e.g. amazon s3)
			- api accessible consumer services e.g. (twitter, google maps, etc)




# background
	- introduction to 12 factor methodology
		1. use declarative formats for setup automation to minimize time and cost for new developers joining the project
		2. have a clean contract with the underlying operating system offering maximum portability between execution environments
		3. are suitable for deployment on modern cloud platforms obviating the need for servers and systems adminsitration
		4. minimmize divergence between development and production enabling continuous deployment for maximum agility
		5. can sclae up without significant changes nto tooling, architecture or development practices

# what is it good for ?
	- modern apps! blah

# the 12 factors
# 1. Codebase
	- one codebase tracked in git with many deploys to various environments
	- if there are multiple codebases its not an app, its a distributed system

# 2. dependencies
	- never rely on implicit existence of syste,-wide packages
		- all dependencies must be:
			- declared completed and exactly in a manifest (e.g. package.json)
			- must be isolated via some tool (e.g. npm) to ensure that no implicit dependencies 'leak in' from the surrounding system
			-
		-


# 3. config
	- store application config in the environment since it is very likely to vary between deploys/environments
	- including :
		- resource handles to database, memcached and other backing services
		- credentials to external services e.g. amazon s3 or twitter etc.
		- per-deploy values e.g. canonical hostname for the deploy
		- strict separation between code and configurataion
		- always store config in environment variables
		-

	- NEVER:
		- store config as constants in the code

	- the TEST
		- if the app can be opensourced at any moment without compromising any credentials

# 4. backing services
	- ALWAYS
		- treat services as attached resources
		- treat local and third party services the same
			- both are treated as attached resources accessed via a URL / other locator/creds and stored in the config
		- should be able to swap out a local mysql db with one managed by a third party without any changes to the apps code
		- should be able to attach and detach resources from deploys at will

# 5. build, release, run
	- a codebase is transformed in a non-dev deploy through 3 stages
	- build stage: converts a code repo into an executable bubndle known as a build
		- usees a version of the code at a commit specified by teh deployment process
		- the build stage fetches vendors deps and compiles binaries and assets
	- release stage: takes the build produced by the build stage and combines it with the deloy's current config
		- the resulting release contains both the build and the config and is ready for immediate execution in the execution environment
	- run stage: aka runtime
		- runs the app in the execution environment by launching some set of the apps processes against a selected a release
	- ALWAYS
		- bel able to roll a release back to a previous version
		- tag each release with a unique release ID, e.g. a timestamp or version number
		-


# 6. processes
	- execute the app as one/more stateless processes
		- in the simples case the code is a stand alone script and the execution environment is a devs local laptop with an installed language runtime  and the processes is launched via the cmd line

	- ALWAYS
		- execute the app in the deploy environment as one/more processes
		- any data that needs to persist must be stored in a sstateful backing service, e.g. a database
		- always ensure asset package managers build assets at runtime and not during the lifecycle of the application or process

	- NEVER
		- use environment memory / filesystem for long term storage
			- only as a brief single-transaction cache
		- never assume anything stored in cache or on disk will be available on a future request or job
		-



# 7. port binding
	- export services via port binding
		- web apps are sometimes executed inside a webserver container
			- php might run as a module inside apache httpd
			- java apps might run inside tomcat


	- ALWAYS
		- ensure the app is completed self contained and does not rely on runtime injection of a webserver into the execution environment to create a web facing service
			- the web app should export HTTP as a service by binding to a port and listening to requests coming in on that port
				- the app should have a routing layer that handles routing requests from a public-facing hostname to the port-bound web processes
			- every kind of server software that can be run via a processing bining to a port and awaiting incoming requests should be
				- e.g. redis
				- this also means that one app can become the backing service for another app by providin gthe URL to the backing app as a resource handle in the config for the consuming application



# 8. concurrency

# 9. disposability

# 10. dev/prod parity

# 11. logs

# 12. admin processes