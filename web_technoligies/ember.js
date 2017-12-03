http://emberjs.com/
api: http://emberjs.com/api/
guides: https://guides.emberjs.com/v2.3.0/
need to finish
	https://guides.emberjs.com/v2.3.0/templates/displaying-the-keys-in-an-object/
	https://guides.emberjs.com/v2.3.0/templates/binding-element-attributes/
	https://guides.emberjs.com/v2.3.0/templates/links/
	https://guides.emberjs.com/v2.3.0/templates/actions/
	https://guides.emberjs.com/v2.3.0/templates/input-helpers/
	https://guides.emberjs.com/v2.3.0/templates/writing-helpers/
	https://guides.emberjs.com/v2.3.0/components/defining-a-component/
	https://guides.emberjs.com/v2.3.0/object-model/computed-properties/
	http://emberigniter.com/load-multiple-models-single-route/
	https://guides.emberjs.com/v2.3.0/applications/services/

can do later

ember
	frameowrk for building large complex web apps
	favors convention over configuration
		i.e. 'abstraction'
		i.e. its an opinionated framework
			there is a specific way to do everything
			behind the scenes it does a lot of magic
	MVC+R
		Models: describe the data
		View: display the data, graphical representation of the modal data
			i.e. how its displayed in the client
		controller: sends the modal data to the view
		router: lists all the links in your app
		single page websites: new data loads in the current page
			the URL changes, so it feels like multiple pages, but in reality there is a single page that fetches new data

Core concepts
	https://guides.emberjs.com/v2.3.0/getting-started/core-concepts/
	routing
		ranslates a URL into a series of nested templates, each backed by a model. As the templates or models being shown to the user change, Ember automatically keeps the URL in the browsers address bar up-to-date.
		app/router.js
		maps a URL to a route handler
	Route handler
		an object that tells the template which model it should display.
		-routes/ROUTE_NAME.js
		-/component_name/route.js
		-loads a template/model/both
		-is responsible for displaying templates, loading data, and otherwise setting up application state. The router matches the current URL to the routes that you’ve defined, so a Route is responsible for specifying the model that a template is to display (Ember expects this model to be subclass of Ember.Object):
	templates : organize the layout of HTML in an application.
		 written in the Handlebars templating language, describes the user interface of your application. Each template is backed by a model, and the template automatically updates itself if the model changes.

		templates/ROUTE_NAME.hbs
		component_name/template.hbs
		subset of Ember.View
		loads componenents
		accesses model data
	components
		-consist of two parts: a template written in Handlebars, and a source file written in JavaScript that defines the components behavior.
		-They allow you to create reusable controls that can simplify your applications templates.
		-subset of Ember.View
		-share data between pages/on the same page

	models : represent persistent state.
		an object that stores persistent state. Templates are responsible for displaying the model to the user by turning it into HTML. In many applications, models are loaded via an HTTP JSON API, although Ember is agnostic to the backend that you choose.
	controllers
		object that stores application state. A template can optionally have a controller in addition to a model, and can retrieve properties from both.
	Ember Data
		https://guides.emberjs.com/v2.3.0/tutorial/ember-data/
		manages the data that flows to and from an ember app
		app/model/MODEL_NAME.js


OBJECT MODEL-------------------
	Ember.Object : provides a class system, supporting features like mixins and constructor methods.
		all classes inherit properties & methods from this Class

		methods
			Ember.Object.extend({
				do stuff;
			})
				example : define a new class Person, with an init() (its a constructor), with a method say(),
					Person = Ember.Object.extend({
						init() {
						    var name = this.get('name');
						    alert(`${name}, reporting for duty!`);
					  	}
						say(thing) {
							var name = this.get('name');
							alert(`${name} says: ${thing}`);
						}
					});
				example: define a subclass and call its parent class
					Soldier = Person.extend({
						say(thing) {
							// this will call the method in the parent class (Person#say), 	appending
							// the string ', sir!' to the variable `thing` passed in
							this._super(`${thing}, sir!`);
						}
					});
				example: create an instance of a subclass (same for parent class)
					var yehuda = Soldier.create({
						name: 'Yehuda Katz'
					});
				example: reopen a class to make changes (ember frowns upon modifying classes after they are made via prototype)
					Person.reopen({
						isPerson: true; //new prop added to all instances
						// override `say` to add an ! at the end
					  	say(thing) {
					    	this._super(thing + '!');
					  	}
					});

					Person.create().get('isPerson'); // true
				example: add new static method/property to class
					// add static property to class
					Person.reopenClass({
						isPerson: false
					});
					// override property of Person instance
					Person.reopen({
						isPerson: true
					});
					Person.isPerson; // false - because it is static property created by `reopenClass`
					Person.create().get('isPerson'); // true

				Example: getting/setting properties :
					-using .get() and .set() causes
						1.computed properties to recaculate
						2. observers to fire
						3. templates to update
					var person = Person.create();
					var name = person.get('name');
					person.set('name', 'Tobias Fünke');
					person.set('nameOfProperty', 'value');

				examples: skipped
					controlling how get & set work:
						https://guides.emberjs.com/v2.3.0/object-model/computed-properties/
		Gotchas:
			Arrays and objects defined directly on any Ember.Object are shared across all instances of that object.
				-both stephan and robert get each others pushObject, because there was no init() constructor, so the pushObject pushed bacon and sausage to all instances of the Person object

					Person = Ember.Object.extend({
						shoppingList: ['eggs', 'cheese']
					});

					Person.create({
						name: 'Stefan Penner',
						addItem() {
							this.get('shoppingList').pushObject('bacon');
						}
					});

					Person.create({
						name: 'Robert Jackson',
						addItem() {
							this.get('shoppingList').pushObject('sausage');
						}
					});
				-with the init() constructor, the shoppingList prop is set on creation
					Person = Ember.Object.extend({
				  		init() {
					    	this.set('shoppingList', ['eggs', 'cheese']);
					  	}
					});
	Ember.Computed
		about
			This helper returns a new property descriptor that wraps the passed computed property function. You can use this helper to define properties with mixins or via Ember.defineProperty().

			If you pass a function as an argument, it will be used as a getter.

		Ember.computed
			example: defining computed properties
				-let you declare functions as properties, that ember will run when you call for the property
				-e.g. taking one or more normal properties and transforming or manipulating their data to create a new value.

				Person = Ember.Object.extend({
					// these will be supplied by `create`
					firstName: null,
					lastName: null,
					age: null,
					country: null,
					//without chaining more than one computed property
					fullName: Ember.computed('firstName', 'lastName', function(){
						return `${this.get('firstName')} ${this.get('lastName')}`;
					}),
					description: Ember.computed('fullName', 'age', 'country', function() {
						return `${this.get('fullName')}; Age: ${this.get('age')}; Country: ${this.get('country')}`;
					})
					//chaining the fullname computed prop witht his new one
					//
				});
			example: computed property with aggregate data
				export default Ember.Component.extend({
					todos: [
					Ember.Object.create({ isDone: true }),
					Ember.Object.create({ isDone: false }),
					Ember.Object.create({ isDone: true })
					],

					//update when ANYTHING CHANGES in the todos array
					remaining: Ember.computed('todos.@each.isDone', function() {
						var todos = this.get('todos');
						return todos.filterBy('isDone', false).get('length');
					})
				});
					todos.@each.isDone instructs Ember.js to update bindings and fire observers when any of the following events occurs:
						-The isDone property of any of the objects in the todos array changes.
						-An item is added to the todos array.
						-An item is removed from the todos array.
						-The todos property of the component is changed to a different array.
						@each only works one level deep. You cannot use nested forms like todos.@each.owner.name or todos.@each.owner.@each.name.
			Example: continued from above
				export default Ember.Component.extend({
					todos: [
						Ember.Object.create({ isDone: true }),
						Ember.Object.create({ isDone: false }),
						Ember.Object.create({ isDone: true })
					],

					selectedTodo: null,
					//todos.[] ONLY UPDATES on ADD/REMOVE items from todos
					indexOfSelectedTodo: Ember.computed('selectedTodo', 'todos.[]', function() {
						return this.get('todos').indexOf(this.get('selectedTodo'));
					})
				});
		Ember.computed.map() i.e. javascript.map()
			example:
				const hamster = Hamster.create({
			  		chores: ['clean', 'write more unit tests']
				});

				const Hamster = Ember.Object.extend({
					excitingChores: Ember.computed.map('chores', function(chore, index) {
						return `CHORE ${index}: ${chore.toUpperCase()}!`;
					})
				});
		Ember.computed.alias() :two way binding: binds two variables together, change either variable and both get the same value

			Example: keep two vars in sync, change one, and you change the other
				wife = Ember.Object.create({
					householdIncome: 80000
				});

				Husband = Ember.Object.extend({
					householdIncome: Ember.computed.alias('wife.householdIncome')
				});

				husband = Husband.create({
					wife: wife
				});

				husband.get('householdIncome'); // 80000
				// Someone gets raise.
				wife.set('householdIncome', 90000);
				husband.get('householdIncome'); // 90000
		Ember.computed.oneWay()  one way binding: if you only plan to ever change one value, then you can slave one variable to another
			Example:
				user = Ember.Object.create({
					fullName: 'Kara Gates'
				});

				UserComponent = Ember.Component.extend({
					userName: Ember.computed.oneWay('user.fullName')
				});

				userComponent = UserComponent.create({
					user: user
				});
				// Changing the name of the user object changes
				// the value on the view.
				user.set('fullName', 'Krang Gates');
				// userComponent.userName will become "Krang Gates"

				// ...but changes to the view don't make it back to
				// the object.
				userComponent.set('userName', 'Truckasaurus Gates');
				user.get('fullName'); // "Krang Gates"

	Ember.observers
		about
			supports observing any property, including computed properties.

			Observers should contain behavior that reacts to changes in another property. Observers are especially useful when you need to perform some behavior after a binding has finished synchronizing.

			Observers are often over-used by new Ember developers. Observers are used heavily within the Ember framework itself, but for most problems Ember app developers face, computed properties are the appropriate solution.

		Gotchas
			Observers in Ember are currently synchronous. This means that they will fire as soon as one of the properties they observe changes. Because of this, it is easy to introduce bugs where properties are not yet synchronized:
				-To get around these problems, you should make use of Ember.run.once()

		Example: define an observer on an object
			Person = Ember.Object.extend({
				// these will be supplied by `create`
				firstName: null,
				lastName: null,
				fullName: Ember.computed('firstName', 'lastName', function() {
					return `${this.get('firstName')} ${this.get('lastName')}`;
				}),

				//fires synchronously, as soon as it detects a change without waiting for the current run cycle to run, may fire more than once
				fullNameChanged: Ember.observer('fullName', function() {
					console.log(`fullName changed to: ${this.get('fullName')}`);
				}),
				partOfNameChanged: Ember.observer('firstName', 'lastName', function() {
				    Ember.run.once(this, 'processFullName');
			  	}),
			  	processFullName: Ember.observer('fullName', function() {
				    // This will only fire once if you set two properties at the same time, and
				    // will also happen in the next run loop once all properties are synchronized
				    console.log(this.get('fullName'));
			  	})
			});
		example: add an observer outside of a class definition
			person.addObserver('fullName', function() {
				// deal with the change
			});

 	Ember.Enumerable interface to provide change observation for arrays.
		About
			-an enumerable is any object that contains a number of child objects, and which allows you to work with those children using the Ember.Enumerable API

		Enumerable extends javascript native array, here are the methods and how they map
			Standard Method	Observable Equivalent
				pop	popObject
				push	pushObject
				reverse	reverseObjects
				shift	shiftObject
				unshift	unshiftObject
			Other methods
				Get first or last item
					myArray.get('firstObject')
					myArray.get('lastObject')
				forEach
					var food = ['Poi', 'Ono', 'Adobo Chicken'];
					food.forEach(function(item, index) {
					  console.log(`Menu Item ${index+1}: ${item}`);
					});
				map
					var words = ['goodbye', 'cruel', 'world'];
					var emphaticWords = words.map(function(item) {
						return item + '!';
					}); // ["goodbye!", "cruel!", "world!"]
				mapBy() :extract a property value from an object
					var hawaii = Ember.Object.create({
						capital: 'Honolulu'
					});
					var california = Ember.Object.create({
						capital: 'Sacramento'
					});
					var states = [hawaii, california];
					states.mapBy('capital'); //=> ["Honolulu", "Sacramento"]
				filter() : filter an object/array with a function
					var arr = [1,2,3,4,5];
					arr.filter(function(item, index, self) {
						return item < 4;
					}); // returns [1,2,3]
				filterBy() : filter an array by one of their property values
					Todo = Ember.Object.extend({
						title: null,
						isDone: false
					});
					todos = [
						Todo.create({ title: 'Write code', isDone: true }),
						Todo.create({ title: 'Go to sleep' })
					];
					todos.filterBy('isDone', true);
					// returns an Array containing only items with `isDone == true`
				find() & findBy() work exactly like filter() and filterBy() but return a single item, and not an array
				every() : returns boolean: testing if every item in an enumerable matches some condition
					var people = [
						Person.create({ name: 'Yehuda', isHappy: true }),
						Person.create({ name: 'Majd', isHappy: false })
					];

					people.every(function(person, index, self) {
						return person.get('isHappy');
					});// returns false
				any() : tests if a single item passes
					people.any(function(person, index, self) {
						return person.get('isHappy');
					});	// returns true
	Ember.on
		https://guides.emberjs.com/v2.3.0/object-model/observers/
		Person = Ember.Object.extend({
	  		init() {
		    	this.set('salutation', 'Mr/Ms');
		  	},

		  	salutationDidChange: Ember.on('init', Ember.observer('salutation', function() {
		    // some side effect of salutation changing
		  	}))
		});
EMBER ROUTING
	About
		-router: maps the current URL to one or more route handlers. A route handler can do several things:
			location: app/router.js

		-route handler:
			-It can render a template.
			-It can load a model that is then available to the template.
			-It can redirect to a new route, such as if the user isnt allowed to visit that part of the app.
			-It can handle actions that involve changing a model or transitioning to a new route.

			location : in a template/ or in a component/ dir

	router examples
		edit app/router.js
			basic route
			this.route('ROUTE_NAME', { path: 'url/for/this/route'});
				blah.com/ROUTE_NAME
				-if ROUTE_NAME is the same as path value, you dont have to specify the path
					thisroute('ROUTE_NAME');

			nested routes: display one template inside of another
				this.route('posts', funct(){
					this.route('new')
				})
				both of the following work from the above defined route
					blah.com/posts
					blah.com/posts/new

				then add the {{outlet}} helper to your template where you want the nested template to display:
					<h1>Posts</h1>
					<!-- Display posts and other content -->
					{{outlet}} //this is where the nested route is loaded

				to link-to/transitionTo to the nested route, use the full route name
					(posts.new, not new).



			dynamic segments : allows you to load a variable in the route name, e.g. an ID
				Router.map(function() {
					this.route('posts');
					this.route('post', { path: '/post/:post_id' });
				});

				If the user navigates to /post/5, the route will then have the post_id of 5

EMBER ROUTE HANDLERS
	About
		-During a route transition, the Ember Router passes a transition object to the various hooks on the routes involved in the transition.
		-Any hook that has access to this transition object has the ability to immediately abort the transition by calling transition.abort(),
		-if the transition object is stored, it can be re-attempted at a later time by calling transition.retry().

		model() : is accessed in a component/template/etc via model.blah
			{{#each model.songs as |song|}}
				{{song.name}}
			{{/each}}
	route handler examples
	edit the ROUTE_NAME.js file for all examples
		Example: specify the model for a route
			export default Ember.Route.extend({
				model() {
		    		return this.store.query('MODEL_NAME', { }); //add your filters as key:value pairs in the {}
				}
			});

			//you dont have to return ember data (this.store.query), you can return any javascript object/array/function/promise/etc

		Example: retrieve params from the URL (not query string)
			if your router has :blah
				Router.map(function() {
					this.route('photo', { path: '/photos/:photo_id' });
				});
			then your route handler can do
				export default Ember.Route.extend({
					model(params) {
						return this.store.findRecord('photo', params.photo_id);
					}
				});
		Example: specify multiple models
			export default Ember.Route.extend({
				model() {
					return Ember.RSVP.hash({ //only returns when all promises have been fulfilled
				  		songs: this.store.findAll('song'),
				  		albums: this.store.findAll('album')
					});
				}
			});
		Examples : render a different template than the default
			export default Ember.Route.extend({
				renderTemplate() {
					this.render('favoritePosts');
				}
			});
		Example: transition before model is known
			export default Ember.Route.extend({
				beforeModel() {
					this.transitionTo('posts');
				}
			});
		Example: transition after model is known
			export default Ember.Route.extend({
				//afterModel()  receives the resolved model as the first parameter and the transition as the second one. For example:
				afterModel(model, transition) {
					if (model.get('length') === 1) {
				  		this.transitionTo('post', model.get('firstObject'));
					}
				}
			});
		Example: transitioning with nested routes
			the nested route setup
				Router.map(function() {
					this.route('posts', function() {
						this.route('post', { path: ':post_id' });
					});
				});
			the route handler setup
			export default Ember.Route.extend({
				redirect(model, transition) {
					if (model.get('length') === 1) {
				  		this.transitionTo('posts.post', model.get('firstObject'));
					}
				}
			});
		Example: preventing a transitionTo(), #link-to, or URL-change for happening
			export default Ember.Route.extend({
				actions: {
					willTransition(transition) { //this specisies action to take
				  		if (this.controller.get('userHasEnteredData') &&
					  		!confirm('Are you sure you want to abandon progress?')) {
					  		transition.abort();
				  		} else {
							// Bubble the `willTransition` action so that
							// parent routes can decide whether or not to abort.
							return true;
				  		}
					}
				}
			});
		Example: aborting transitions within model, beforeModel(), and afterModel()
			-all three model hooks get called with a transition object
			export default Ember.Route.extend({
				beforeModel(transition) {
					if (new Date() > new Date('January 1, 1980')) {
				  		alert('Sorry, you need a time machine to enter this route.');
				  		transition.abort();
					}
				}
			});
		Example: Storing and Retrying a transition
			in app/routes/some-authneticated.js
				export default Ember.Route.extend({
					beforeModel(transition) {
						if (!this.controllerFor('auth').get('userIsLoggedIn')) {
							var loginController = this.controllerFor('login');
							loginController.set('previousTransition', transition);
							this.transitionTo('login');
						}
					}
				});
			in app/controllers/login.js
				export default Ember.Controller.extend({
				  actions: {
				    	login() {
				      		// Log the user in, then reattempt previous transition if it exists.
					      	var previousTransition = this.get('previousTransition');
					      	if (previousTransition) {
					        	this.set('previousTransition', null);
					        	previousTransition.retry();
					      	} else {
					        	// Default back to homepage
					        	this.transitionToRoute('index');
			      			}
				    	}
			  		}
				});


EMBER TEMPLATES + HANDLEBARS
	About : Templates
		-by default a route will render the template that has the same name
		-templates will be rendered into the {{outlet}} of its parents template, scaffolding from the application template
			application/route.js
				user/route.js





	{{outlet}} //loads other templates into this one
	handlebars : see handlebars notes
		-dynamic content inside handlebars epress is rendered with data-binding
			-i.e. : if you update a property, your osage of that property in a template will be automatically updated to the latest value
		-templates are backed with a context, i.e. an object from which handlebars expressions read their properties
			-templates rendered by components: the component is the context
			-templates rendered by routes: the route handler (controller) is the context
		-helpers, usually located in app/helpers/blah.js
			adds logic to templates

		-nested helpers : allow you to call one helper, and send its output into another helper
			{{sum (multiply 2 4) 2}}
				multiply returns 8
				sum returns 8 + 2
		-conditionals
			-inline invocation:
				{{if thisIsTrue "displayThis" "elseDisplayThis"}}
			-nested invocation:
				{{if thisIsTrue (if thisIsAlsoTrue "displayThis")}}
					if both are true, then displayThis is displayed
			-block invocation if
				{{#if blah}}
					do all of this in here
				{{/if}}
					blah cannot be false, undefined, null, '', 0, or [] for the content to be displayed
			-block invocation if else
				{{#if blah}}
					do this stuff
				{{else}}
					do this stuff
				{{/if}}
			-block invocation if else if
				{{#if blah}}
					do this stuff
				{{else if blah2}}
					do this stuff instead
				{{/if}}
			-block invocation unless
				{{#unless hasPaid}}
					you owe: ${{total}}
				{{/unless}}
					unless can be used in all the ways that 'if' block can
		-iterators
			-each
				-the each helper is bound
					-in normal handlebars, the DOM is updated automatically
					-in ember you need to use additional methods to update bound arrays
						https://guides.emberjs.com/v2.3.0/object-model/enumerables/#toc_use-of-observable-methods-and-properties

				-when you know there will always be items
					{{#each blah as |bloop|}}
						display {{bloop.bleep}}
					{{/each}}
				-when you need an index
					{{#each blah as |bleep index}}
						display {{bloop.bleep}} is number {{index}}
				-when their may not be items
					{{#each blah as |bloop|}}
						display {{bloop.bleep}}
					{{else}}
						sorry, nothing is here.
					{{/each}}
		linking to different routes in a template
			edit your template.hbs file
			{{#link-to "ROUTE_NAME"}}Link text here{{/link-to}}

EMBER STRING

EMBER STORE
	return this.store.query('MODEL_NAME', { }); //add your filters as key:value pairs in the {}

Ember.RSVP.hash()
	embers promise library
		-takes multiple parameters that all should return promisees, when all
		- when all parameter promises are rsolved, then the Ember.RSVP.hash promise is resolved
Ember.Service
Ember.Component
Ember.View
	displays model data in a web browser
Ember: Application level
	When your application boots, Ember will look for these objects:
		App.ApplicationRoute
			If your app provides an App.ApplicationRoute, Ember.js will invoke the router's hooks first, before rendering the application template. Hooks are implemented as methods and provide you access points within an Ember object's lifecycle to intercept and execute code to modify the default behavior at these points to meet your needs. Ember provides several hooks for you to utilize for various purposes (e.g. model, setupController, etc).

		App.ApplicationController
		the application template
			Ember.js will render the application template as the main template.
CLI
	ember serve #starts the ember server so you can view the code inyour browser
	ember new ember-quickstart #creates a a new folder with default application code you can use & customize to build a new app, it includes:
		A development server.
		Template compilation.
		JavaScript and CSS minification.
		ES2015 features via Babel.


	app/templates/application.hbs
		the application template: is always on screen whil ethe user has your application loaded
	app/router.js
		this is the applications router, defining all routes

EMBER INSPECTOR
	https://guides.emberjs.com/v2.3.0/ember-inspector/installation/
	https://github.com/joostdevries/ember-cli-remote-inspector

	Object Inspector: view and interact with ember objects
		-to access Object Inspector, you have to click through the left panel until you find an on object, when you click on it, the inspector opens in right panel
		-displays:
			parent objects
			mixins
			inherited properties
		-notes
			if a property name is preceded by a calculator icon, that means it is a computed property
		-Push objects/properties to the console
			1. click the $# on the right side of any object/property
			2. switch to the console, the object will be printed
		-Push objects to inspector from the console
			var blah = Ember.Object.create();
			EmberInspector.inspect(blah);
		-Editing string, number, and boolean properties:
			-double click property, and click enter
			-edits are not persisted

	View tree: inspect the apps current state, i.e. currently rendered templates, models, controlers, and components
		-when you hover over items in the view tree, they are highlighted in the on webpage
		-click the magnifying glass, to be able to click an element on the screen and have it highlighted in the view tree
		Duration column displays the render time for a given template, including the templates children

	Routes : displays all the routes in your app, whether defined by you or automatically by ember
		-click 'current route only' to only show the current route

	Data : shows all the models defined in your application, and the total records from each model used for the current page
		-click on a model name to display the actual records loaded
		-click on a record to display all of the data associated with that record
		-unsaved record changes are displayed in green text

	Deprecations: list all of the deprecated ember methods your app is currently using

	Info: see a list of libraries used in your app

	Promises: all promises created in your app, and the current state of each one
		-click 'Trace promise' to see a promises stack trace, after reloading the page, you can click 'Trace' next to any promise in order to see what other promises led to this promise
		-You can label your own promises for easier finding in inspector
			https://guides.emberjs.com/v2.3.0/ember-inspector/promises/

	Container: ember apps have a container that maintains object instances, inspect these instances using the Container tab

compile code for production
	ember build --env production
		 -packages up all of the assets that make up your application—JavaScript, templates, CSS, web fonts, images, and more.
		 -all of the concatenated and minified assets in your applications dist/ directory.
		 -http://ember-cli.com/ember-cli-deploy/

-components
	https://guides.emberjs.com/v2.3.0/components/defining-a-component/
	http://emberjs.com/api/classes/Ember.Component.html
		-create a component
			components/comp-name/
				template.hbs
				component.js

		-import a component in a Template
			{{#comp-name}}{{/comp-name}}
				if there is nothing inbetween the tags, you can drop the ending tag

		-send data to the component
			1. import the component into a template
			2. retrieve and define the data the component needs in the templates route handler



		-add an action (event) to a component
			1. insert an action in components/comp-name/template.hbs
				{{action "actionName"}}
				e.g.
					<button {{action "createPost"}}>Publish</button>
			2. define the action in components/comp-name/component.js
				import Ember from 'ember';
					export default Ember.Component.extend({
						actions: {
							actionName: function(){
								//do stuff here
							}
						}
				});
			3. send data to the action :
				in the templates route handler that uses the Component
				import Ember from 'ember';
				export default Ember.Route.extend({
					model: function () {
						return {};
					}
				});
			4. pass the model from the route handler, into the template that uses the Component
				{{#comp-name compVar=model}}{{/comp-name}}
				inside of the components template.hbs, you can now use compVar.model_property_name
			5. pass the model into the action in the components template.hbs
				{{action 'actionName' model}}
			6. update comp-name/component.js actino function to retrieve the model
				actions: {
					actionName: function(model){
						do stuff to model here;
					}
				}

		-events
			https://guides.emberjs.com/v2.3.0/components/handling-events/

		-actions
			https://guides.emberjs.com/v2.3.0/components/triggering-changes-with-actions/

-controllers
	https://guides.emberjs.com/v2.3.0/controllers/
	-a controller gets the model it represents from its route handler.

-enumerables
	https://guides.emberjs.com/v2.3.0/object-model/enumerables/#toc_use-of-observable-methods-and-properties

-services
	https://guides.emberjs.com/v2.3.0/applications/services/



adapters:
	defines the URL you request data from
serializers
	define the data you send, and the data you get back
