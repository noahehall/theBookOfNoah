# Terminology
  - Kebab Case: `text-that-looks-like-this`, and is used when referring to a directive from an html page
  - binding: a variable defined in a scope bound/synced to some variable in an html file via `{{ someScope.someVarName}}`
  - Data-binding: This is one of the core features in AngularJS. When the page loads, AngularJS binds the value of the input box to the data model variable specified with ngModel and keeps the two in sync.
  -  Dependency injection helps to make your web applications both well-structured (e.g. separate entities for presentation, data, and control) and loosely coupled (dependencies between entities are not resolved by the entities themselves, but by the DI subsystem).

# bootstrapping an angular application
  1. `<script src="bower_components/angular/angular.js"></script>`: registers a callback that will be executed by the browser when the containing HTML page is fully downloaded. When the callback is executed, AngularJS looks for the ngApp directive. If AngularJS finds the directive, it will bootstrap the application with the root of the application DOM being the element on which the ngApp directive was defined.
  2. The injector that will be used for dependency injection is created.
  3. The injector will then create the root scope that will become the context for the model of our application.
  4. AngularJS will then "compile" the DOM starting at the ngApp root element, processing any directives and bindings found along the way.
  5. Once an application is bootstrapped, it will then wait for incoming browser events (such as mouse clicks, key presses or incoming HTTP responses) that might change the model. Once such an event occurs, AngularJS detects if it caused any model changes and if changes are found, AngularJS will reflect them in the view by updating all of the affected bindings.

# Directory and File Organization
  - Put each entity in its own file.
    - put each feature/entity in its own file.
    - Each stand-alone controller will be defined in its own file,
    - each component will be defined in its own file, etc.
  - Organize our code by feature area, instead of by function.
    - group our files into directories by feature
    - features that are used across different parts of the application. We will put those inside core|shared|common
  - Split our code into modules that other modules can depend on.
    - Each feature/section should declare its own module and all related entities should register themselves on that module.
    - The main module will declare a dependency on each feature/section module.
    - Note that files defining a module (i.e. .module.js) need to be included before other files that add features (e.g. components, controllers, services, filters) to that module.

# conventions
  - naming conventions:
    - `$ name prefix`: AngularJS's built-in services, Scope methods and a few other AngularJS APIs have a $ prefix in front of the name.
      - The $ prefix is there to namespace AngularJS-provided services. To prevent collisions it's best to avoid naming your services and models anything that begins with a $.
    - `$$ name prefix`: If you inspect a Scope, you may also notice some properties that begin with $$. These properties are considered private, and should not be accessed or modified.

# [tips and trips for debugging](http://eng.localytics.com/tips-and-tricks-for-debugging-unfamiliar-angularjs-code/)
  - tracking scope:
    - Angular creates a scope hierarchy with controllers and directive
    - Directives can sometimes have their own isolate scope.

# [API](https://docs.angularjs.org/api/ng)
## [directives](https://docs.angularjs.org/api/ng/directive)
  - ngApp: This directive is used to flag the HTML element that AngularJS should consider to be the root element of our application. This gives application developers the freedom to tell AngularJS if the entire HTML page or only a portion of it should be treated as the AngularJS application.
    - determines the `AngularJS Module` to use, e.g. `ng-app="phonecatApp"` that has all of your controllers need for your application
  - ngController: in charge of the DOM sub-tree under (and including) the element on which its placed
    - determines the bindings which are used to express the model through the view, i.e. any vars available in `{{ some.binding }}`
    - provides context for our data model, the controller allows us to establish data-binding between the model and the view. We connected the dots between the presentation, data, and logic components as follows:
      1. The ngController directive, located on the <body> tag, references the name of our controller, PhoneListController (located in the JavaScript file app.js).
      2. The PhoneListController controller attaches the phone data to the $scope that was injected into our controller function.  tag.
  - ngRepeat: AngularJS repeater directive.
## [custom directives](https://docs.angularjs.org/guide/directive)
### Attributes
  `ng-app attribute`: `<html ng-app>`
  `<li ng-repeat="phone in phones">`
  `<body ng-controller="PhoneListController">`

## [components]
  - [type components](https://docs.angularjs.org/api/ng/type)
  - [provider components](https://docs.angularjs.org/api/ng/provider)
  - [input components](https://docs.angularjs.org/api/ng/input)
  - [filter components](https://docs.angularjs.org/api/ng/filter)
  - [guide](https://docs.angularjs.org/guide/component)
  - templates + controllers combined together into reusable and isolated entities
  - Component Definition Object: the syntax for defining a component
###  isolate scope
  - for each instance of your component, where no prototypal inheritance and no risk of your component affecting other parts of the application or vice versa.
    - An isolate scope is one that is unique to the directive and is not affected by anything outside of it (aside from bindings)

## templates
  - part of the view containing the bindings and presentation logic
  - `{{'yet' + '!'}}`: a binding will result in efficient continuous updates whenever the result of the expression evaluation changes.

## views
  - the view is a projection of the model through the HTML template. whenever the model changes, AngularJS refreshes the appropriate binding points, which updates the view.

## Model
  - The ngModel directive binds an input, select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

## Controller
  - The controller is simply a constructor function that takes a $scope parameter:

## scopes
  - [root scope](https://docs.angularjs.org/api/ng/type/$rootScope.Scope)
  - [what are scopes](https://docs.angularjs.org/guide/scope)
    - Scope is an object that refers to the application model. It is an execution context for expressions.
    - Scopes are arranged in hierarchical structure which mimic the DOM structure of the application.
    - Scopes can watch expressions and propagate events.
  - This scope is a prototypal descendant of the root scope that was created when the application was defined.
    - AngularJS scopes prototypically inherit from their parent scope, all the way up to the root scope of the application.
  - A scope can be seen as the glue which allows the template, model, and controller to work together.
  - AngularJS uses scopes, along with the information contained in the template, data model, and controller, to keep models and views separate, but in sync
    - Any changes made to the model are reflected in the view; any changes that occur in the view are reflected in the model.
    - assigning values directly on the scope makes it easy to share data across different parts of the page and create interactive applications.
    - While this approach works for prototypes and smaller applications, it quickly leads to tight coupling and difficulty to reason about changes in our data model.

## routing
  - angular renders the router wherever you put the `ng-view` attribute in the html file
## modules
  - [module guide](https://docs.angularjs.org/guide/module)
## [services](https://docs.angularjs.org/api/ng/service)
  -  several built-in AngularJS services that handle common operations in web applications.
  - services are managed by AngularJS's DI subsystem
### [$http](https://docs.angularjs.org/api/ng/service/$http)

## [functions](https://docs.angularjs.org/api/ng/function)
  -

## [dependency injector](https://docs.angularjs.org/guide/di)
  - AngularJS's dependency injector provides services to your controller, when the controller is being constructed. The dependency injector also takes care of creating any transitive dependencies the service may have (services often depend upon other services).

# Examples
```s
  // Application structure
    app/
      phone-list/
        phone-list.component.js
        phone-list.component.spec.js
        phone-list.module.js
        phone-list.template.html
      app.css
      app.module.js
      index.html
```
```s
  // modules
    // module with dependency on another module
      angular.module('phonecatApp', [
        // ...which depends on the `phoneList` module
        // AngularJS will make all entities registered on phoneList available on phonecatApp as well.
        'phoneList'
        ]);
    // module + component
      // app/app.js:
      // Define the `phonecatApp` module
      var phonecatApp = angular.module('phonecatApp', []);

      // Register the `PhoneListController` controller on the `phonecatApp` module
      phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
        $scope.phones = [
          {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
          }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
          }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
          }
        ];
      });
    // module directory structure
      app/
        phone-list/
          phone-list.module.js
          phone-list.component.js
          phone-list.component.spec.js
        app.module.js
```

```s
  // components
    // define a component
      angular.
        module('myApp').
          component('greetUser', {
            template: 'Hello, {{$ctrl.user}}!',
            controller: function GreetUserController() {
              this.user = 'world';
            }
          });
      // use it in your html
      <greet-user></greet-user>

    // component + template in an html file
      angular.
        module('phoneList').
        component('phoneList', {
          // Note: The URL is relative to our `index.html` file
          templateUrl: 'phone-list/phone-list.template.html',
          controller: ...
        });
    // component + inline template + controller properties
        // Register `phoneList` component, along with its associated controller and template
        angular.
          module('phonecatApp').
            component('phoneList', {
              template:
                  '<ul>' +
                    '<li ng-repeat="phone in $ctrl.phones">' +
                      '<span>{{phone.name}}</span>' +
                      '<p>{{phone.snippet}}</p>' +
                    '</li>' +
                  '</ul>',
              controller: function PhoneListController() {
                this.phones = [
                  {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                  }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                  }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                  }
                ];

                this.orderProp = 'age';
              }
          });
```

```s
  // templates
    //load angular + component in app/index.html
      <html ng-app="phonecatApp">
      <head>
      ...
      <script src="bower_components/angular/angular.js"></script>
      <script src="app.js"></script>
      <script src="phone-list.component.js"></script>
      </head>
      <body>

      <!-- Use a custom component to render a list of phones -->
      <phone-list></phone-list>
      </body>
      </html>

    // data binding an input value to filter a list
      <div class="col-md-2">
        Search: <input ng-model="$ctrl.query" />
      </div>
      <div class="col-md-10">
        <ul class="phones">
          <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query">
            <span>{{phone.name}}</span>
            <p>{{phone.snippet}}</p>
          </li>
        </ul>
      </div>
```

```s
  // models
    // two way databinding: input filter + dropdown sorting on a list
      <p>
        Search: <input ng-model="$ctrl.query">
      </p>

        <p>
          Sort by:
          <select ng-model="$ctrl.orderProp">
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>

      </div>
      <div class="col-md-10">
        <ul class="phones">
          <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp">
            <span>{{phone.name}}</span>
            <p>{{phone.snippet}}</p>
          </li>
        </ul>
```


```s
  // services
    // declare the names of the dependencies you need as arguments to the controller's constructor function,
    // Note that the names of arguments are significant, because the injector uses these to look up the dependencies.
      function PhoneListController($http) {...}
