# 12factor.net

# terminology
	- contract
	- declarative format
	- continuous deployment
	- continous development
	- distributed system
		- usually multiple copies of the codebase distributed to various environments


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

# 5. build, release, run

# 6. processes

# 7. port binding

# 8. concurrency

# 9. disposability

# 10. dev/prod parity

# 11. logs

# 12. admin processes