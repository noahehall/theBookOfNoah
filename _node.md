need to finish
	https://scotch.io/tutorials/easy-node-authentication-setup-and-local

	https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

need to start
	passport discussion: http://stackoverflow.com/questions/15711127/express-passport-node-js-error-handling
	passport profile object: http://passportjs.org/docs/profile
	two forms one submit: http://stackoverflow.com/questions/547821/two-submit-buttons-in-one-form
	add additional fields to passport local strategy:  http://stackoverflow.com/questions/11784233/using-passportjs-how-does-one-pass-additional-form-fields-to-the-local-authenti
  node cluster
    http://rowanmanning.com/posts/node-cluster-and-express/
- testing
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
notes
	never install things globally, as its difficult to figure out whats wrong when you push to git, and try to run CI/CD because the apps are available
  build system: collection of tasks (i.e. task runners) that automate repetetive work

    package managers: automates installation, upgrading, removal, depedencies used in your dev environment
      e.g. bower and npm

        bower: front end client side
        npm: back end 'for' node

    preprocessors:
      sass, less, coffeescript, jade, markdown, etc
      compiles syntax into its native language


  install from git with specific branch
    npm install git+ssh://git@gitlab.com:dictionary-web/api-nodified.git#remove-babelrc  --save-dev
      #remove-babelrc is the branch name


node
	background
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

	dirs and files
		node_modules dir
			contains all the nodes in this application
		package.json
			dependencies: production modules
			devDependencies: required 'for' development

	global vars
		__dirname =the dir the current module is located
		__filename = the full path to the current file + the filename

	workflows: importing files/modules
		all files/modules must have an export statement
		A.var yourFile = require('path/to/your/file.js');
		B.var yourModule = require('moduleName');

	workflows: creating modules
		example 1: create a module and use it in js
			create file: my-module.js
				exports.myText = 'Hello from module';
			create file: my-module-demo.js
				var myModule = require('./my-module.js');
				console.log('text from module:', myModule.myText);
			run the program from node
				node my0module-demo.js

	file system module: fs: NEED TO DO
		example 1: reading from files
			create read-demo.js
				var fs = require('fs'); //gives you access to the file system
				fs.readFile('./data1.json','utf-8',function(err,data){
					data = JSON.parse(data);
					console.log(data);
				});
			create data1.json
				{"name":"noah"}

				using .readFile brings in the data as a STRING, youll need to parse it with json

		example 2: reading from directories
			update read-demo.js
				fs.readdir('location',function(err,data){
					console.log(data);
				})

		example 3: writing to files
			update read-demo.js
				var noahString = "{name:'noah'}"; //must save as a string
				fs.writeFile('noah.json', noahString);

			another way
				var noahString2 = {noah:'super string'};
				fs.writeFile('noah.json', JSON.stringify(noahString2));
	http module: NEED TO DO
		used for creating servers/handling requests, use express instead
			example 1: creating a basic server
			var http = require('http');
			var myServer = http.createServer(function(req,res){
				//headers: tell the clients what type of files the servers will be returning
				res.writeHead(200, {"Content-Type" : "text/plain"}); //response code
					/*content types
						text/plain, text/html
					*/
				res.write("hello"); //write something that displays in the client
				res.write("goodbye"); //write something else
				res.end();
			});

			myServer.listen(3000); //listen for requests on this port. a port is like an extension number at a company, you can call the company (fame.city) but you need the port (usually 80, to reach the right person)
	process module: NEED TO DO
			get environment information
			read environment vars
			collect info from the termail when the application starts
					its saved in the process.argv file

			commands
					process.stdout.write("hello"); write something to standard out

  production setup
    1.never sourcemaps, especially inline source maps. if you want to include sourcemaps in production, use a tool like exorist


  requiring modules:
    https://nodejs.org/docs/latest/api/modules.html
      files and modules in node are one-to-one
        -variables local to the module (i.e. not exported) will be private, because all modules are wrapped in a function by node.js
          (function (exports, require, module, __filename, __dirname) {
            // Your module code actually lives in here
          });

      exports object:
        special object that you can add things to and they will be available to other files/modules that require() them

        export a bunch of things
          exports.blah = (blah) => { return blah; };
          exports.otherblah = 'string';
            //is the same as
              module.exports.blah = (blah) => { return blah; };
              module.exports.otherblah = 'string';

          require it:
            var blah = require('./blah.js');
            console.log(blah.blah(5)); //notice double blah

          using module.exports
            module.exports = function (n) { return n * 111 }

            require it
              var foo = require('./foo.js');
              console.log(foo(5)); //notice single blah

        export an entire object
          module.exports = {
            blah: (boom) => {
              return boom;
            }
          }

        export a single thing
          // assigning to exports will not modify module, must use module.exports from now on after using the below
          module.exports = (width) => {
            return {
              area: () => width * width
            };
          }

        exports.blah vs module.exports = {}
          -The exports variable that is available within a module starts as a reference to module.exports
            .As with any variable, if you assign a new value to it, it is no longer bound to the previous value

          -If you want the root of your modules export to be a function (such as a constructor) or if you want to export a complete object in one assignment instead of building it one property at a time, assign it to module.exports instead of exports

        Bookmark!
          Get the exact file name that will be loaded via require(): https://nodejs.org/docs/latest/api/modules.html#modules_all_together

      requiring modules:
        -require() returns the exports of the module name that you specify.
        -how it works
          -searching locally
            .If you require('./foo.js') from /beep/boop/bar.js, node will look 'for' ./foo.js in /beep/boop/foo.js. Paths that start with a ./ or ../ are always local to the file that calls require().
          -searching in node_modules
            .If however you require a non-relative name such as require('xyz') from /beep/boop/foo.js, node searches these paths in order, stopping at the first match and raising an error if nothing is found:
              /beep/boop/node_modules/xyz
              /beep/node_modules/xyz
              /node_modules/xyz

            .For each xyz directory that exists, node will first look for a xyz/package.json to see if a "main" field exists. The "main" field defines which file should take charge if you require() the directory path.

            .example
              -if /beep/node_modules/xyz is the first match and /beep/node_modules/xyz/package.json has:
                  {
                    "name": "xyz",
                    "version": "1.2.3",
                    "main": "lib/abc.js"
                  }
                  .then the exports from /beep/node_modules/xyz/lib/abc.js will be returned by require('xyz').

              -If there is no package.json or no "main" field, index.js is assumed:
                  /beep/node_modules/xyz/index.js


        require npm package
          blah = require('boom');
        require local module
          blah = require('../boom');
            //Relative paths are always resolved with respect to the invoking file's location.




npm: node package manager
	install via NVM
	npmjs.org/packages //all public npm modules

	workflows: installing modules
		npm install --save-dev redux@3.5.2 //always use the @ to get a specific version, no auto updating!

		npm install --save appname1 appname2
			this is a local module
			saves it to dependencies object in package.json

		npm install --save-dev appname1 appname2
			local module
			saves it to devDependencies in package.json

		npm install -g PROJECTNAME
			install a module globally, available to all projects
			allows you to use it via command line

	workflows: uninstalling modules
		A. manually
			1.delete the module key & value from PROJECTNAME/package.jsonp
			2.delete the module dir in PROJECTNAME/node_modules/MODULENAME

		B.$npm uninstall moduleName //removes the folder but DOES NOT UPDATE package.json

		C.$npm uninstall --save moduleName //removes the folder AND UPDATED package.json
		D.$npm uninstall -g moduleName
		D.$npm prune //remove folders that are not in your package.json file BUT ARE IN YOUR node_modules folder

	workflows:update modules
		1.edit package.json
			to force modules to update to the latest version
				edit dependencies
					"modulename": "*"
		2.$npm update
			updates modules to the version listed, or to the latest version if "*" is listed

	workflows: initialize current dir as node project & create a package file
		1.$npm init
			Interactively create a package.json file
			will ask you a bunch of questions

	workflows: reinstall all modules
		1.npm install

	workflows: listing installed apps
		A.$npm list //all packages installed in this app
		B.$npm -g list //displays all packages install globally
		C.$npm -g ls --depth=0 //dont list module dependencies
		D.$npm outdated //shows all outdated packages
		E.$npm update //updated all outdated packages

		npm help
			display the help section

NPM packages: https://www.youtube.com/watch?v=sELoj6e1ffM
  -library of reusable code with a defined 'interface'

  -how require finds modules:
    1.core modules
    2.node modules
    3.NODE_PATH
    4.$HOME/.node_modules
    5.$HOME/.node_libraries

  -Define 'interface' 'for' your module via module.exports
    -object that is returned to caller of 'require'
    -only code defined in module.exports is exposed to caller

      module.exports.blah = someFunction(){
        //do this
      }

  -Requiring modules multiple times
    -each module has only a single isntance in memory
    -a new instance is not created each tim eyou require it
    -instancing/caching is based on file paths
    -this means variables local to the module are shared to all other codes that require it


path
  var path = require('path');

  getting file name from path
    var name = path.basename('./boom/bam/beep.zip') //beep.zip
nodejs forever
	background
		so that you can run nodejs forever on your remote server
		without having to keep your CLI open

	workflows: keep your app running forever
		1. $sudo forever start app.js

express
	background

	workflows: check the express version
		$express --version

	workflows:	create a server with express
			var express = require('express');//load express
			var app = express(); //create an isntance of express
			app.listen(3000); //tell the instance to listen on port 3000, i.e. startup localhost:3000 in a browser
			//will show Cannot GET / because you havent told it would file to get

	workflows: create the default file to load
		express will automatically load an index.html in the static folder
		A. use the index.html defined in the root folder
			app.use(express.static(__dirname));
		B. use the idnex.html defiend in sub folder
			app.use(express.static(__dirname+'/some/dir'));

	workflows: create a route

			app.get('/message',function(req,res){ //req = request, res = response
				console.log('user requested endpoint'); //log this to node terminal
				res.send('hello'); //send this text to the client, can be anything, e.g. smoething from the database

			})


	workflows: pass variables to the server
		update express-demo.js
			app.get('/profiles/:name?', function (req,res) { //handle get requests to profiles/blah, where blah is a variable in the route, there can be multipel variables, can use wildcars & regular expressions
				var name = req.params.name; //retrieve the var, params holds all the vars
				res.send('user: ' + name); //use the var

			});

	workflows: create and pass variables to templates
			1.app.locals.pagetitle = "Blah";
				You can pass anything, any type of object
			2.in your template you can now access variable pagetitle

	workflows: create a catch-all route 'for' 404s, etc.
		1.at the very bottom of your route definitions
			app.get('*', function (req,res) { //handle get requests to profiles/blah
				res.send('No page was found!'); //use the var

			});


	example 4: routes
		app.get('/aboutus',function (req,res){
			fs.readFile('./endpoints/aboutus.html','utf-8', function(err,data){
				res.send(data);
			});
		});

	provide json data to templates/routes
		local to a route
			open route
				var yourData = require(./path/to/file.json);
				you can now pass yourData to your template

		global to all routes
			open your app.js
				app.locals.someVar = require(./path/to/file.json);
			in any route
					req.app.locals.someVar.contactus
			in your template
					contactus.blah.blah
					//may have to drop contactus, and start from the next period
					or get access to the entire data set
					<%= pageData.someVar.contactus

exorcist: https://github.com/thlorenz/exorcist
  //Externalizes the source map found inside a stream to an external .js.map file

bluebird: promise module: NEED TO DO
	example 1 creating a promise:
		create blue-promise.js
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

ejs module: client side templating engine
	install
		npm install ejs --save

		<% code %>
		... which is code that is evaluated but not printed out.

		<%= code %>
		... which is code that is evaluated and printed out (escaped).

		<%- code %>
		... which is code that is evaluated and printed out (not escaped).

	move all your views (templates) into views dir
	set express to ejs templating engine
		app.set('view engine', 'ejs');

	render a template
		app.get('/', function (req,res){
			res.render('index');

		});
	send data to a template
		app.get('/', function (req,res){
			res.render('index',{key1:'value1', key2:'value2'});

		});
	use data in a template
		print a value
			<title>FCM: <%= title.toUpperCase() %></title>
		use javascript while printing a value
			<% if(title){} %>
				<% title %>
			<% }; %>

	include a partial template into another template
		<% include partials/page/head.ejs %>

immutable js:
  Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.

  Immutable.js provides many Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.
lodash:

  Lodash makes JavaScript easier by taking the hassle out of working with arrays,
  numbers, objects, strings, etc. Lodash’s modular methods are great for:
  Iterating arrays, objects, & strings
  Manipulating & testing values
  Creating composite functions

Mongoose: NEED TO DO
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

Passport: NEED TO DO
	background
		handles authentication & authorization
	methods:
		-passport.authenticate: use when first signing up/logging in a user
		-passport.authorize: 'for' users who are already logged in and want to connect another account

Connect-flash: NEED TO DO
	allows 'for' passing session flashdata messages.

Bcrypt-nodejs: NEED TO DO
 gives us the ability to hash strings, e.g. passwords

nodemon: NEED TO DO
	Auto Refreshing: By default, node doesn’t automatically refresh our server every time we change files. To do that we’ll use nodemon. Just install with: npm install -g nodemon and use with: nodemon server.js.

babel: NEED TO DO
	use ES6 in your nodejs project
	steps
		npm install --save-dev babel-cli
			install babel
		npm install --save-dev babel-core
		npm install --save-dev babel-preset-es2015 babel-preset-stage-0
			install babel presets that allow us to use ES2016 and ES2015 goodiness
			-additional plugins: https://babeljs.io/docs/plugins/

	plugins
		https://babeljs.io/docs/plugins/transform-object-rest-spread/

bower: NEED TO DO
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

browserify:
  https://github.com/substack/browserify-handbook
  -tool 'for' compiling node-flavored commonjs modules 'for' the browser.
    .packages published to npm and meant 'for' the node environment can now be run in the browser.
    .in essence, it allows you to require files in the browser, the same way you do in node
    .generates a stream of concatenated javascript files on stdout that you can write to a file with the > operator:
      //via cmd: $browserify robot.js > bundle.js
      //in html
        <html>
          <body>
            <script src="bundle.js"></script>
          </body>
        </html>
          // if you put your script tag right before the "</body>", you can use all of the dom elements on the page without waiting for a dom onready event.
  -how browserify works
    .starts at the entry point and searches 'for' any require() calls it finds using static analysis of the source codes abstract syntax tree
    .For every require() call with a string in it, browserify resolves those module strings to file paths and then searches those file paths 'for' require() calls recursively until the entire dependency graph is visited.
    .Each file is concatenated into a single javascript file with a minimal require() definition that maps the statically-resolved names to internal IDs.
      -This means that the bundle you generate is completely self-contained and has everything your application needs to work with a pretty negligible overhead.

  -plugins
    .sourcemaps:
      -default: Browserify supports a --debug/-d flag and opts.debug parameter to enable source maps.
      -Exorcist: externalize sourcemaps that are inlined in bundle.js making them smaller

    .auto-recompile:



grunt: NEED TO DO
	http://gruntjs.com/

	http://www.lynda.com/Grunt-js-tutorials/Reloading-our-pages/368921/418535-4.html
	    fnotes:
	    install grunt globally
	        npm install -g grunt-cli
	    install grunt locally
	        npm install grunt --save-dev
	    install grunt
	        npm install grunt-contrib-concat --save-dev
	    install node-sass
	        npm install -g node-sass
	    install grunt-sass so you dont need
	        npm install grunt-sass --save-dev
	    install grunt contrib watch
	        npm install grunt-contrib-watch --save-dev
	    install grunt express server
	        https://www.npmjs.com/package/grunt-express-server
	        npm install grunt-express-server --save-dev
	    install grunt -wiredep
	        npm install --save-dev grunt-wiredep
	        inject bower components in your html files
	            <!--bower:js-->
	            <!--endb ower-->

	            <!--bower:css-->
	            <!--endbower-->
	                dont do the comment inject, use with bower-concat below
	    install grunt bower concat
	        https://github.com/sapegin/grunt-bower-concat

	    install bower handlebars
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

gulp
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

  gulp commands
    //source of files used in stream
    //usually the first line within a gulp task
    gulp.src('some blob')

    //used with to pip the output of the previous stream
    //into this stream.
    //these are listed in order after gulp.src
    .pipe(gulpPlugin(options))

    //the final i/o of a stream of pipes
    //these saves all of the i/o of various .pipes into some file on your drive
    //dont put the filename, only the folder
    //you can use rename to specify the filename
    .pipe(gulp.dest('./public/css'));

    //watch files and run tasks when files changes
    //you can have multiple watch tasks
    gulp.watch('./src/sass/**/*.scss',['styles']);

  infrastructure:
    1.create gulpfile.js in root of project


  gulp plugins
    gulp-sass: compile sass to css
      var sass = require('gulp-sass');
      .pipe(sass().on('error',sass.logError))

    gulp-autoprefixer: prefix css with browser specific styles
      var autoprefixer = require('gulp-autoprefixer');
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))

    browser-sync: automatic reloading and live editing
      var gulp        = require('gulp');
      var browserSync = require('browser-sync').create();

      // Static server
      gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });
      });

      // or...

      gulp.task('browser-sync', function() {
        browserSync.init({
            proxy: "yourlocal.dev"
        });
      });

handlebars: NEED TO DO

	handlebars need file
		-The first and last steps of iteration are noted via the @first and @last variables when iterating over an array. When iterating over an object only the @first is available.

	express-handlebars

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


	notes:
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
							data = {
									blah1: [
											blah, blah
									],
									blah2: 'hello',
									blah3: [
											{one:two, three:four},
											{five:six, seven:eight}
									]
							}
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
			<body>

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

			</body>
	mandrill {
		Helpers
			inline: operate on paths
				{{helperName arg1 arg2 argX}}
				upper	uppercase the text provided
					{{upper "your text"}}
					results in: YOUR TEXT
				lower	lowercase the text provided
					{{lower "your text"}}
					results in: your text
				title	title-case the text provided
					{{title "your text is neat"}}
					results in: Your Text is Neat
				url	urlencode the text provided
					{{url "http://yourawesomeurl.com"}}
					results in: http%3A%2F%2Fyourawesomeurl.com
				date	print the current date with a given format, defaults to d/m/Y
					{{date "Y-m-d"}}
					results in: 2015-03-10
				striptags	strip any HTML tags from the given data
					{{striptags "<p>your text</p>"}}
					results in: your text
				unsub : automatic unsubscribe link
					<a href='{{unsub "http://redirecturl.com"}}'>Unsubscribe</a>
					<a href='{{unsub redirect_merge_var}}'>Unsubscribe</a>
					When using the {{unsub}} helper inside of an anchor tag, be sure to use single quotes around for the href='{{unsub }}'.
					"global_merge_vars": [
								{
										"name": "redirect_merge_var",
										"content": "http://yourdomain.com"
								}
						]
					Escapaing HTML content: use triple stash {{{merge_var}}}
						{{{html_tag_content}}}

						"global_merge_vars": [
						{
							"name": "html_tag_content",
							"content": "This example<br>is all about<br>the magical world of handlebars"
						}
					]


			block: have template data, nested paths, and else branches
				If: Any expression whose value is not false, undefined, null, "", 0, or [] will evaluate as true.
					{{#if user_name}}
							<p>Thanks for registering! Your username is {{user_name}}.</p>
						{{/if}}

					Unless: The content inside the block will be displayed when the expression is evaluated to false, or unless its true. Its equivalent to if not.
						{{#unless user_name}}
							<p>You havent chosen a username. Please enter a username to register.</p>
						{{/unless}}

				Automatic Each: Whenever an expression evaluates to an array, Handlebars will iterate over each item in the array automatically.
					<!-- BEGIN PRODUCT LOOP // -->
						 {{#each products}}
						 <tr class="item">
									<td valign="top" class="textContent">
											<img src="{{img}}" width="50" height="75" class="itemImage" />
											<h4 class="itemName">{{name}}</h4>
											<span class="contentSecondary">Qty: {{qty}} x ${{price}}/each</span><br />
											<span class="contentSecondary sku"><em>{{sku}}</em></span><br />
											<span class="contentSecondary itemDescription">{{description}}</span>
									</td>
									<td valign="top" class="textContent alignRight priceWidth">
											${{ordPrice}}
									</td>
							</tr>
							{{/each}}
					<!-- // END PRODUCT LOOP -->

				Explicit Each: iterates over each item in an array. The keyword this can be used to reference the current element being iterated.
					<div class="entry">
						<ul>
							<li style="list-style: none">{{#each browsers}}</li>
							<li>{{this}}</li>
							<li style="list-style: none">{{/each}}</li>
						</ul>
					</div>

					"global_merge_vars": [
						{
							"name": "browsers",
							"content": [
								"Chrome",
								"Firefox",
								"Explorer",
								"Safari",
								"Opera"
							]
						}
					]

					or like this
					{
							"name": "products",
							"content": [
									{
											"img": "http://kbcdn.mandrill.com/nesting-penguin.png",
											"qty": 2,
											"sku": "PENG001",
											"name": "Penguin",
											"description": "Solid wood, hand-painted penguin nesting doll with 5 different sizes included. Limited Edition.",
											"price": "12.99",
											"ordPrice": "25.98"
									},
									{
											"img": "http://kbcdn.mandrill.com/nesting-bear.png",
											"qty": 3,
											"sku": "BBEAR001",
											"name": "Brown bear",
											"description": "Solid wood, hand-painted brown bear nesting doll. Coordinates with our entire Bear collection. Includes 6 nested sizes.",
											"price": "12.99",
											"ordPrice": "38.97"
									}
							]
					}

					regarding nested {{#each }, all I had to do was reference the inner array with {{#each this.list-within-a-foo}} and it works great.


				Dot notation: a shorter way to do With (see below)
					<div class="entry">
						<h2>{{incident}}</h2>
						<p>Impact: {{impact}}</p>
						<p>Created At: {{created_at}}</p>
						<p>Updates: {{updates.body}}</p>
						<p>Updated At: {{updated_at}}</p>
					</div>

				With: shift the context for a section of a template which can be extremely helpful when accessing nested values. It is equivalent to using dot notation.

					<div class="entry">
						<h2>{{incident}}</h2>
						<p>Impact: {{impact}}</p>
						<p>Created At: {{created_at}}</p>
						<p>Updates: {{#with updates}} {{body}} {{/with}}</p>
						<p>Updated At: {{updated_at}}</p>
					</div>

					"global_merge_vars": [
							{
								"name": "incident",
								"content": "Error in connection"
							},
							{
								"name": "impact",
								"content": "none"
							},
							{
								"name": "updates",
								"content": {
									"id": "9e86a19c-9f9b-447d-b4a8-81f9e71efd85",
									"incident_id": "5a99c8c5-e63f-43f0-b375-df0152211bd8",
									"body": "Testing global variables",
									"status": "update",
									"created_at": "2015-02-27T16:01:55+0000",
									"updated_at": "2015-02-27T16:01:55+0000"
								}
							},
							{
								"name": "created_at",
								"content": "2015-02-27T15:27:23+0000"
							},
							{
								"name": "updated_at",
								"content": "2015-02-27T16:02:18+0000"
							}
						]

				Comparison (numbers) + If:  its possible to compare values using back ticks to surround the comparisons. These can be very helpful when using the if block helper.
					<div>
							{{#if `purchases > 3`}}
								<ul>
										{{#items}}
										<li>{{this}}</li>
										{{/items}}
								</ul>
							{{/if}}
					</div>

					"global_merge_vars": [
							{
								"name": "items",
								 "content": [
									 "Computer",
									 "Monitor",
									 "Keyboard",
									 "1-Year Insurance",
									 "Mouse Pad",
									 "Mouse"
								 ]
							},
							{
								"total_purchases": 6
							}
						]


				Comparison (strings) + if: make sure to enclose the string in double quotes as single quotes wont work:

					{{#if `operating_system == "OS X"`}}
							<p>Click here for instructions to install on a Mac</p>
					{{elseif `operating_system == "Windows"`}}
							<p>Click here for instructions to install on a PC</p>
					{{/if}}

					"global_merge_vars": [
						{
							"name": "operating_system",
							"content": "Windows"
						}
					]
	}

	templates
			{{> templateName}}

			<template name="templateName">
					your html here
			</template>
					//this will replace {{}} wit your template

sinopia:
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

dotenv: Loads environment variables from .env for nodejs projects.

momentjs
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
