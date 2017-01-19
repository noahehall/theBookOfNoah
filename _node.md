# need to finish
	https://scotch.io/tutorials/easy-node-authentication-setup-and-local

	https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

# need to start
	passport discussion: http://stackoverflow.com/questions/15711127/express-passport-node-js-error-handling
	passport profile object: http://passportjs.org/docs/profile
	two forms one submit: http://stackoverflow.com/questions/547821/two-submit-buttons-in-one-form
	add additional fields to passport local strategy:  http://stackoverflow.com/questions/11784233/using-passportjs-how-does-one-pass-additional-form-fields-to-the-local-authenti
  node cluster
    http://rowanmanning.com/posts/node-cluster-and-express/
# testing
  - chai
    expect(obj).to.have.property('foo')”
      .that.is.a('string');
    expect(deepObj).to.have.property('green')
      .that.is.an('object')
      .that.deep.equals({ tea: 'matcha' });
    expect(deepObj).to.have.property('teas')
      .that.is.an('array')
      .with.deep.property('[2]')
        .that.deep.equals({ tea: 'konacha' });
# notes
	never install things globally, as its difficult to figure out whats wrong when you push to git, and try to run CI/CD because the apps are available

  install from git with specific branch
    npm install git+ssh://git@gitlab.com:dictionary-web/api-nodified.git#remove-babelrc  --save-dev
      #remove-babelrc is the branch name

# node
## background
		apache vs nodejs
		    apache is multi threaded
		        each request gets a new thread
		            but each new thread requires resources
				synchronous
					each call waits 'for' the previous to finish
		    node:
		        is asynchronous

		definitions
			Web API: service that allows you to get and save data to a server/back end
## dirs and files
		node_modules dir
			contains all the nodes in this application
		package.json
			dependencies: production modules
			devDependencies: required 'for' development
## global vars
		`__dirname` = the dir the current module is located
		`__filename` = the full path to the current file + the filename

## workflows: importing files/modules
		all files/modules must have an export statement
		A.var yourFile = require('path/to/your/file.js');
		B.var yourModule = require('moduleName');

## workflows: creating modules
		example 1: create a module and use it in js
			create file: my-module.js
			`	exports.myText = 'Hello from module';`
			create file: my-module-demo.js
				`var myModule = require('./my-module.js');
				console.log('text from module:', myModule.myText);`
			run the program from node
			`	node my0module-demo.js`

## node modules
### fs file system module: fs:
		example 1: reading from files
		example 2: reading from directories
		example 3: writing to files
### http module: NEED TO DO
		used for creating servers/handling requests, use express instead
### process module: NEED TO DO
			get environment information
			read environment vars
			collect info from the termail when the application starts
					its saved in the process.argv file
# production setup
    1.never sourcemaps, especially inline source maps. if you want to include sourcemaps in production, use a tool like exorist

# npm: node package manager
	install via NVM
	`npmjs.org/packages` //all public npm modules
## workflows: installing modules
		`npm install --save-dev redux@3.5.2` //always use the @ to get a specific version, no auto updating!

	  `npm install --save appname1 appname2`
			this is a local module
			saves it to dependencies object in package.json

		`npm install --save-dev appname1 appname2`
			local module
			saves it to devDependencies in package.json

		`npm install -g PROJECTNAME`
			install a module globally, available to all projects
			allows you to use it via command line
## workflows: uninstalling modules
		A. manually
			1.delete the module key & value from PROJECTNAME/package.jsonp
			2.delete the module dir in PROJECTNAME/node_modules/MODULENAME

		B.`$npm uninstall moduleName` //removes the folder but DOES NOT UPDATE package.json

		C`.$npm uninstall --save moduleName` //removes the folder AND UPDATED package.json
		D.`$npm uninstall -g moduleName`
		D.`$npm prune` //remove folders that are not in your package.json file BUT ARE IN YOUR node_modules folder
## workflows:update modules
		1. edit package.json
			to force modules to update to the latest version
				edit dependencies
				`"modulename": "*"`
		2. `$npm update`
			updates modules to the version listed
## workflows: reinstall all modules
		1. `npm install`
## workflows: listing installed apps
		1.  `$npm list `//all packages installed in this app
		2.  `$npm -g list` //displays all packages install globally
		3.  `$npm -g ls --depth=0` //dont list module dependencies
		4.  `$npm outdated` //shows all outdated packages
		5.  `$npm update` //updated all outdated packages
		6. `npm help`: display the help section
## NPM packages: https://www.youtube.com/watch?v=sELoj6e1ffM
  - library of reusable code with a defined 'interface'
  - how require finds modules:
    1.  core modules
    2.  node modules
    3.  NODE_PATH
    4.  $HOME/.node_modules
    5.  $HOME/.node_libraries

  - Define 'interface' 'for' your module via module.exports
    - object that is returned to caller of 'require'
    - only code defined in module.exports is exposed to caller

  - Requiring modules multiple times
    - each module has only a single isntance in memory
    - a new instance is not created each tim eyou require it
    - instancing/caching is based on file paths
    - this means variables local to the module are shared to all other codes that require it

# [yarn](https://yarnpkg.com/en/docs/)
  - npm prune vs yarn install: https://github.com/yarnpkg/yarn/issues/696
  - [install directions](https://yarnpkg.com/en/docs/install)
  - [usage directions](https://yarnpkg.com/en/docs/usage)
# Node Modules
## path
  var path = require('path');

  getting file name from path
    var name = path.basename('./boom/bam/beep.zip') //beep.zip
## nodejs forever
	background
		so that you can run nodejs forever on your remote server
		without having to keep your CLI open

	workflows: keep your app running forever
		1. $sudo forever start app.js
## express
## exorcist: https://github.com/thlorenz/exorcist
  //Externalizes the source map found inside a stream to an external .js.map file
## bluebird: promise module: NEED TO DO
	example 1 creating a promise:
		create blue-promise.js
		```
    var fs = require('fs'); //access to file system
			var Promise = require('bluebird'); //for creating promises

			Promise.promisifyAll(fs); //wrap the object you want to turn all its functions into promises, you can then append Async to any of its functions
			fs.readFileAsync('./data2.json') //readFile is the original funcitonname, append Async to turn it into a promise
				.then(JSON.parse) //then function is the promise
				.then(function(val){
					console.log(val); //try data2.json
				})
				.catch(SyntaxError, function(e){ //use catch to handle errors
					console.error("invalid json file"); //try data1.json
				})
				.catch(function(e){ //there can be multiple catches to catch differenet types of errors
					console.error("unable to read file"); //try data3.json (doesn't exist)
			});
```
## immutable js:
  Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.
  Immutable.js provides many Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.
## Lodash makes JavaScript easier by taking the hassle out of working with arrays,
  numbers, objects, strings, etc. Lodash’s modular methods are great for:
  Iterating arrays, objects, & strings
  Manipulating & testing values
  Creating composite functions
## Mongoose: NEED TO DO
	background
		http://mongoosejs.com/docs/connections.html
		object modeling 'for' our MongoDB database.
		allows us to have access to the MongoDB commands 'for' CRUD simply and easily.

	workflows: connect to mongodb from app
		1.startup mongodb (see mongodb.js for better ways)
			mongodb //startup
		2. connect to mongodb
			A.mongoose.connect(uri, options);
			B.mongoose.connect('mongodb://localhost/myapp');
## Passport: NEED TO DO
	background
		handles authentication & authorization
	methods:
		-passport.authenticate: use when first signing up/logging in a user
		-passport.authorize: 'for' users who are already logged in and want to connect another account
## Connect-flash: NEED TO DO
	allows 'for' passing session flashdata messages.
## Bcrypt-nodejs: NEED TO DO
 gives us the ability to hash strings, e.g. passwords
## nodemon: NEED TO DO
	Auto Refreshing: By default, node doesn’t automatically refresh our server every time we change files. To do that we’ll use nodemon. Just install with: npm install -g nodemon and use with: nodemon server.js.
## bower: NEED TO DO
	its an NPM 'for' the frontend
	while NPM has nested dependencies
	Bower has a flat dependency

	installation
			npm install -g bower

	create bower config file to track dependencies
			cd into your app
			$bower init
					answer the questions

	install bower apps
			bower install APPNAME --save grunt
					bootstrap, fontawesome, jquery, handlebars, bower install jquery-ui
## handlebars: NEED TO DO

	handlebars need file
		-The first and last steps of iteration are noted via the @first and @last variables when iterating over an array. When iterating over an object only the @first is available.
## express-handlebars

		main-layout: views/layouts/main.handlebars
			-HTML page wrapper which can be reused for different views of hte app
			-{{{body}}} is used as a placeholder for where the main content should be rendered

			example 1: specify layout and render content in {{{body}}}
				1. app.engine('handlebars', exphbs({defaultLayout: 'main'})); #specify default layout for all routes
				2. app.get('/', function (req, res) {
						res.render('home'); #specify content for {{{body}}}
				});

				1B. alternative to #1 above
				app.get('/', function (req, res, next) {
					res.render('home', {layout: false}); #specify there isnt a layout
				});
## notes:
		data: your content - anything not in a handlebars expression
		paths: how you inject content into templates,
			{{my.thing}}
				my = hash table
				thing = key
				will return the value of thing
			importing handlebars templates
					http://berzniz.com/post/24743062344/handling-handlebarsjs-like-a-pro
				handlebars templatesfolder/ > templatesfolder/templates.js

				So if you have hello.handlebars, goodbye.handlebars and you.handlebars in that folder, the output will be Handlebars.templates['goodbye’], Handlebars.templates['hello’] and Handlebars.templates['you']
			3 parts to handlebars
					1. expressions:
							single line: {{authors}} //load authors html
							helpers: {{#each authors}} {{this}}<br/> {{/each}} //cycle through authors and print each on a separate line

							you can declare templates on the page
									<script id="blah" type="text/x-handelbars-template">your expressions and helpers here</script>
					2. data:
							this is the code used by handlebars templates
							`data = {
									blah1: [
											blah, blah
									],
									blah2: 'hello',
									blah3: [
											{one:two, three:four},
											{five:six, seven:eight}
									]
							}`
					3. handlebars compile function
							1. send the template to var yourTemp = Handlebars.compile(yourTemplate)
							2. send your data to instance, yourTemp(yourData);

							handlebars templatesfolder/ > templatesfolder/templates.js

	full example
			steps
					1. get the text of the template out of the script tag in the DOM
					2. compile the template by sending 1 to handlebars function
					3. take the data and send it to the template
					4. insert the template filled with data back into the dom
			`<body>

					<!-- the content of the web page starts off empty
					 because we will fill it later from the template -->
					<div id="content">
					</div>

					<!-- this is our template
						it displays an image with a title and author headings
						the bits in curly brackets {{}} are template expressions -->
					<script id="image-template" type="text/x-handlebars-template">
						<div class="title">
									<h1>{{title}}</h1>
									<h3 class="author">
										{{author}}
									</h3>
									<img  style="height:600" src="{{src}}"/>
						</div>
					</script>

				<!-- javascript code to fill the template -->
				<script type="text/javascript">

					// grab our template code from the DOM
					var source   = $("#image-template").html();

					// compile the template so we can use it
					var template = Handlebars.compile(source);

					// create some data
					var data = {
						src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/600px-The_Earth_seen_from_Apollo_17.jpg ",
						title:"The Earth seen from Apollo 17",
						author:"Ed g2s"
					};

					// generate HTML from the data
					var html    = template(data);

					// add the HTML to the content div
					$('#content').html(html);
				</script>

			</body>`
## sinopia:
	background
		private registry
		cache to speed up npm installs
		available behind firewall
		doesnt use any db
		supports various authenticatino protocls
			https, ldap

	installation
		dev: install globally, then go!
		prod:
			how do you add users?
			create backups?
			availability?
				not really an issue any more, as NPM is always online


	links:
    our repo is based on this: https://github.com/fl4re/sinopia
    walkthrough: https://stapp.space/private-npm-registry-with-fallback/
		walkthrough: https://www.npmjs.com/package/react-native-cli
    walkthrough: https://blog.dylants.com/2014/05/10/creating-a-private-npm-registry-with-sinopia/
## dotenv: Loads environment variables from .env for nodejs projects.

## momentjs
http://momentjs.com/docs/
	npm install moment --save
	const moment = require('moment');
	moment().format(); //current date and time
	moment(someTimeStampVar).format('MMMM Do, YYYY @ h:mm A'); //May 16th, 2016 @ 10:03 AM
	moment().unix(); //current timestamp in unix

	let now = moment(); //call as function
	let timestamp = now.unix(); //current timestamp, # of seconds since 1970 january 1 12:00 am
	let convertedStamp = moment.unix(timestamp);
	mysqlDateAndTime = convertedStamp.format() //mysql date and time in YYY-MM-DDThh:mm:ss a
	prettyStamp = convertedStamp.format('MMM D, YY @ h:mm a') //Mar 27, 16 @ 4:47 pm
	prettyStamp2 = convertedStamp.format('MMMM Do, YYYY @ h:mm A') //March 27th, 16 @ 4:47 PM


# build tools
  - main goals are to compile, bundle, and minify scripts and stylesheets,
  - build tools: grunt, gulp, broccoli, brunch, mimosa, jake, webpack, rollup,
  - criteria
      - [requirements for a buildtool](http://walkercoderanger.com/blog/2015/06/state-of-js-build-tools-2015/)
      - [more build tools](http://jster.net/category/build-utilities)
      [webpack analysis](http://survivejs.com/webpack/webpack-compared/)
    1. complexity in configuration
    2. speed to build
    2. Transcompiling JavaScript: CoffeeScript, Dart, Babel, Traceur etc.
    3. JavaScript Transforms: wrapping in modules or ng-annotate etc.
    4. Bundling/Concatenation: combining of scripts and styles into multiple files
    5. Minification: scripts, styles and html
    6. Source Maps: for both scripts and styles
    7. CSS Preprocessor: Less, Sass, Stylus etc.
    8. Style Transforms: Autoprefixer, PostCSS etc.
    9. Cache Busting: renaming files with a hash to prevent incorrect caching
    10. Image Optimization
    11. Compiling Templates: Mustache or HandlebarsJS, Underscore, EJS, Jade etc.
    12. Copying Assets: html, fav icon etc.
    13. Watching for Changes / hot reload
    14. Incremental Rebuild
    15. Clean Build: deleting all files at start or preferably cleaning up files as needed
    16. Injecting References: generating script and style tags that reference the bundled files
    17. Build Configurations: separate Dev, Test and Prod configuration, for example to not minify html in dev build
    18. Serve: running a development web server
    19. Running Unit Tests
    20. Running JavaScript and CSS Linters: jshint, csslint etc.
    21. Dependencies: handle dependencies on npm and Bower packages, Browserfy etc.
    22. eaisly syncs with deploy process

## browserify:
  https://github.com/substack/browserify-handbook
  - tool 'for' compiling node-flavored commonjs modules 'for' the browser.
    + packages published to npm and meant 'for' the node environment can now be run in the browser.
    + in essence, it allows you to require files in the browser, the same way you do in node
    + generates a stream of concatenated javascript files on stdout that you can write to a file with the > operator:
  - how browserify works
    + starts at the entry point and searches 'for' any require() calls it finds using static analysis of the source codes abstract syntax tree
    + For every require() call with a string in it, browserify resolves those module strings to file paths and then searches those file paths 'for' require() calls recursively until the entire dependency graph is visited.
    + Each file is concatenated into a single javascript file with a minimal require() definition that maps the statically-resolved names to internal IDs.
      -This means that the bundle you generate is completely self-contained and has everything your application needs to work with a pretty negligible overhead.

  - plugins
    + sourcemaps:
      -default: Browserify supports a --debug/-d flag and opts.debug parameter to enable source maps.
      -Exorcist: externalize sourcemaps that are inlined in bundle.js making them smaller

    .auto-recompile:
## babel:
	use ES6 in your nodejs project
	-  additional plugins: https://babeljs.io/docs/plugins/

	-  plugins
		https://babeljs.io/docs/plugins/transform-object-rest-spread/
## grunt:
	http://gruntjs.com/

	    grunt cli commands
	        grunt --version
	            get the version of grunt

	    create a grunt task
	        1. create a grunt file
	            -config doc that grunt uses to run tasks
	            -js file with a JSON configuration section

	    run a specific grunt task
	        grunt TASK_NAME
	            grunt concat

	    setup default tasks, so you can just do $grunt and it will run them in order
	    //setup default grunt command
	        grunt.registerTask('default',['task1','task2','etc']);
	    preparing your project
## gulp
  structure of a gulp file
    1.declare required dependencies, e.g. gulp and any related modules
    2.named tasks: tasks you created yourself
      task1: compress images
      task2: copy files
      task3: etc.
      you run named tasks via $gulp nameOfTask
    3.watch task: watch certain files and dirs 'for' changes, then run a named task
    4.default task: kicks off other tasks asynchronously

  tasks:
    -runs all tasks in parallel by default
    -tasks do i/o i.e. save files and open files

  streams:
    i/o is done at start at end, but never in between
    each step is output into the next step, without saving files
