# Terminology
  - Kebab Case: `text-that-looks-like-this`, and is used when referring to a directive from an html page
  - binding: a variable defined in a scope bound/synced to some variable in an html file via `{{ someScope.someVarName}}`

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

# [tips and trips for debugging](http://eng.localytics.com/tips-and-tricks-for-debugging-unfamiliar-angularjs-code/)
  - tracking scope:
    - Angular creates a scope hierarchy with controllers and directive
    - Directives can sometimes have their own isolate scope.

# Attributes
  `ng-app attribute`: `<html ng-app>`
  `<li ng-repeat="phone in phones">`
  `<body ng-controller="PhoneListController">`

## directives:
  - ngApp: This directive is used to flag the HTML element that AngularJS should consider to be the root element of our application. This gives application developers the freedom to tell AngularJS if the entire HTML page or only a portion of it should be treated as the AngularJS application.
    - determines the `AngularJS Module` to use, e.g. `ng-app="phonecatApp"` that has all of your controllers need for your application
  - ngController: in charge of the DOM sub-tree under (and including) the element on which its placed
    - determines the bindings which are used to express the model through the view, i.e. any vars available in `{{ some.binding }}`
    - provides context for our data model, the controller allows us to establish data-binding between the model and the view. We connected the dots between the presentation, data, and logic components as follows:
      1. The ngController directive, located on the <body> tag, references the name of our controller, PhoneListController (located in the JavaScript file app.js).
      2. The PhoneListController controller attaches the phone data to the $scope that was injected into our controller function.  tag.
  - ngRepeat: AngularJS repeater directive.

# components
  - templates + controllers combined together into reusable and isolated entities
##  isolate scope
  - for each instance of your component, where no prototypal inheritance and no risk of your component affecting other parts of the application or vice versa.
    - An isolate scope is one that is unique to the directive and is not affected by anything outside of it (aside from bindings)


# templates
  - part of the view containing the bindings and presentation logic
  - `{{'yet' + '!'}}`: a binding will result in efficient continuous updates whenever the result of the expression evaluation changes.

# views
  - the view is a projection of the model through the HTML template. whenever the model changes, AngularJS refreshes the appropriate binding points, which updates the view.

# Model

# Controller
  - The controller is simply a constructor function that takes a $scope parameter:

# scopes
  - This scope is a prototypal descendant of the root scope that was created when the application was defined.
    - AngularJS scopes prototypically inherit from their parent scope, all the way up to the root scope of the application.
  - A scope can be seen as the glue which allows the template, model, and controller to work together.
  - AngularJS uses scopes, along with the information contained in the template, data model, and controller, to keep models and views separate, but in sync
    - Any changes made to the model are reflected in the view; any changes that occur in the view are reflected in the model.
    - assigning values directly on the scope makes it easy to share data across different parts of the page and create interactive applications.
    - While this approach works for prototypes and smaller applications, it quickly leads to tight coupling and difficulty to reason about changes in our data model.


# API
  - `var phonecatApp = angular.module('phonecatApp', []);`: defines an angular module

# Examples
```s
  // modules
  // module + component
    // app/app.js:
    // Define the `phonecatApp` module
    var phonecatApp = angular.module('phonecatApp', []);

    // Define the `PhoneListController` controller on the `phonecatApp` module
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

  // component + html
    //app/index.html
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
    //app/ap.js
      // Define the `phonecatApp` module
      angular.module('phonecatApp', []);

    //app/phone-list.component.js:
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
          }
        });
```
