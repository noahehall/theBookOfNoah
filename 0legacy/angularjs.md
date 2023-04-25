# angularjs

- [bookmark](https://docs.angularjs.org/tutorial/step_04)
- [bookmark2](https://www.w3schools.com/angular/angular_events.asp)

## links

- [landing page](https://angularjs.org/)
- [ionic angular](https://ionicframework.com/docs/angular/overview)

### interwebs

- [access scope in browser](https://stackoverflow.com/questions/13743058/how-do-i-access-the-scope-variable-in-browsers-console-using-angularjs)
- [set img src](https://stackoverflow.com/questions/56863495/how-to-display-image-in-angular)
- [custom filter with html parser](https://devdactic.com/angularjs-filters-html-parsing)

### w3schools

- [angularjs](https://www.w3schools.com/angular/default.asp)
- [quick intro](https://www.w3schools.com/angular/angular_intro.asp)
- [all directives](https://www.w3schools.com/angular/angular_ref_directives.asp)
- [scopes](https://www.w3schools.com/angular/angular_scopes.asp)
- [controllers](https://www.w3schools.com/angular/angular_controllers.asp)

### refs

- [0000 angular guide: start your search here](https://docs.angularjs.org/guide)
- [angular: dependency injection](https://docs.angularjs.org/guide/di)
- [angular: if](https://docs.angularjs.org/api/ng/directive/ngIf)
- [angular: ng-class](https://docs.angularjs.org/api/ng/directive/ngClass#!)
- [components: all of em](https://docs.angularjs.org/api/ng/directive)
- [components: guide](https://docs.angularjs.org/guide/component)
- [components: router guide](https://docs.angularjs.org/guide/component-router)
- [controllers: guide](https://docs.angularjs.org/guide/controller)
- [directives: all of em](https://docs.angularjs.org/api/ng/directive)
- [directives: guide](https://docs.angularjs.org/guide/directive)
- [directives: bindHtml](https://docs.angularjs.org/api/ng/directive/ngBindHtml)
- [expressions](https://docs.angularjs.org/guide/expression)
- [filters: all of em](https://docs.angularjs.org/api/ng/filter)
- [filters: guide](https://docs.angularjs.org/guide/filter)
- [forms: angular formController](https://docs.angularjs.org/api/ng/type/form.FormController)
- [forms: guide](https://docs.angularjs.org/guide/forms)
- [functions: all of em](https://docs.angularjs.org/api/ng/function)
- [module: api](https://docs.angularjs.org/api/ng/type/angular.Module)
- [module: guide](https://docs.angularjs.org/guide/module)
- [module: intro](https://docs.angularjs.org/api/ng/function/angular.module#)
- [module: ng root module](https://docs.angularjs.org/api/ng)
- [ngController](https://docs.angularjs.org/api/ng/directive/ngController)
- [scopes: $rootScope](https://docs.angularjs.org/api/ng/type/$rootScope.Scope)
- [scopes: guide](https://docs.angularjs.org/guide/scope)
- [service: $animate](https://docs.angularjs.org/api/ng/service/$animate)
- [service: $compile; must read](https://docs.angularjs.org/api/ng/service/$compile)
- [service: $http](https://docs.angularjs.org/api/ng/service/$http)
- [service: $injector](https://docs.angularjs.org/api/auto/service/$injector)
- [service: $provide](https://docs.angularjs.org/api/auto/service/$provide)
- [service: intro](https://docs.angularjs.org/guide/services)
- [services: all of em](https://docs.angularjs.org/api/ng/service)
- [styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
- [template: $templateCache](https://docs.angularjs.org/api/ng/service/$templateCache)
- [template: $templateRequest](https://docs.angularjs.org/api/ng/service/$templateRequest)

### testing

- [jasmin](https://jasmine.github.io/)
- [karma](https://karma-runner.github.io/latest/index.html)

### tools

- [firefox ng-inspector: right click el -> logs to console](https://addons.mozilla.org/en-US/firefox/addon/ng-inspect/)

### angularjs opensource

- [dropzone](https://docs.dropzone.dev)
- [dropzone ng](https://github.com/thatisuday/ng-dropzone/)

## basics

- angularjs is soo fkn old
  - you'll see many packages still using and requiring jquery
  - using CDNs directly in the head section to add third-party packages
  - karma and jasmine for testing
- CDO: component definition object, interface for angularjs components

### intro

- extends html with directives, and binds data to html with expressions
  - all the `ng-blah` are directives
  - all the `{{ blah }}` are expressions
- similar on the MVC architecture
  - modules: define angular js applications
  - controllers: module logic
- angular is an MVC web framework
  - view: the html
  - model: data available for view
  - controller: js fn to manage the data
- angulars bootstrapping occurs in 3 phases
  - angular creates an injector used for dependency injection
  - the injector creates a rootScope to act as the context for the applications model
  - angularjs compiles the DOM starting at the ngApp root element
    - processes all directives and bindings found as it traverses the dom graph

### modules

- using modules scopes the modules logic (e.g. controllers) to that module only
- you can pass an array list of dependent modules
  - pass an empty array for a module without dependencies
  - pass undefined to retrieve an existing module
- controllers and html templates work in sync to create dynamic angular views

```html
<!DOCTYPE html>
<html ng-app="myApp">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  <body>
    <div ng-controller="myCtrl">{{ firstName + " " + lastName }}</div>
    <!-- the order matters, see below-->
    <script src="myApp.js"></script>
    <script src="myCtrl.js"></script>
  </body>
</html>
```

```js
// myApp.js module
// pass an empty array if this module is not dependent on other modules
var app = angular.module("myApp", [load,these,other,moduels,first]);

// myCtrl.js controller attached to myApp module
// this is just one way to provide a controller to a module
// e.g. you would use an alternative approach if using angularRouter
app.controller("myCtrl", function ($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});

// you register everything on a module via the same syntax
app.service('someService', ...);
app.directive('someDirective', ...);

// you can create different instances of a module
var withDifferentDependencies = angular.module('sameModule', ...);
var anotherInstance = angular.module('sameModule', ...);
```

#### templates / views

- templates: html with angularjs expressions
- any changes in controllers are immediately pushed to html through bindings and expressions
- an angular view is just the parsed & rendered html template
  - read the $compile service docs for how this works
- the html template contains the bindings, expressions and presentation logic
- you should prefer externalizing your templates instead of using html strings
  - check $templateRequest and $templateCache service

```html
<!-- dont embed in an html string-->
<!-- instead use templateUrl: 'path/to/this/file' in your component-->
<div class="container-fluid">
  <div>Search: <input ng-model="$ctrl.query" /></div>
  <!-- read the docs on piping model data into angular fns -->
  <li
    ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp"
  >
    <span>{{phone.name}}</span>
    <p>{{phone.snippet}}</p>
  </li>
</div>
```

#### controllers

- are always members of modules
- should only focus on the logic, as the model & view are synchronized in a separate phase
  - react to events
  - provides its $scope.someFn to views
- $scope: is the binding between the html view and the JS controller

```html
<!-- check how we rename the registered controller -->
<div ng-controller="myCtrl as ctrl">
  <b>Hero</b><br />
  <hero-detail hero="ctrl.hero"></hero-detail>
</div>
```

```js
// app could be any module
// the controller accepts atleast the $scope param, but many other things exist
// it needs to be a function declaration so `this` works correctly
app.controller("myCtrl", function ($scope, ...otherShiz) {
  // $scope is the application object
  $scope.firstName = "John"; // create vars available for ng-{bind, model}
  $scope.lastName = "Doe";
});
```

#### scopes

- the glue which binds the template, model and controller
- the scope is a 2way binding between events in the view and controller, and pushed to the model
  - user actions in the view are pushed to the model: the controller reacts
  - logic in the controller that change the model: are pushed to the view
- you can assign props & fns to the model by mutating the scope in the controller
- scopes prototypically inherit from the rootscope unless their in a component

### components

- combines an html template and controller into reusable entities with an isolated scope
- each instance of a component has a distinct scope wont affect other instances scopes
- are really just easier to use (and less powerful) angular directives

```html
<html ng-app="phonecatApp">
  <head>
    ...
    <script src="lib/angular/angular.js"></script>
    <script src="app.js"></script>
    <!-- make sure to add the component to head-->
    <script src="phone-list.component.js"></script>
  </head>
  <body>
    <!-- in any view you can use the greetUser component -->
    <greet-user></greet-user>
  </body>
</html>
```

```js
// TODO: verify the bindings thing and the idiomatic way to NOT inline the controller definition

// create a new component and register it with some module
// check the docs for the full CDO interface
angular.module("myApp").component("greetUser", {
  // eeww, html within strings are fkn wack
  template: "Hello, {{$ctrl.user}}!",
  // the correct way to do it
  // angular will make an http request at runtime
  templateUrl: 'path/to/some/thing.template..html' // .html also works
  // eeww, inlining the controller is fkn wack
  // use bindings instead that enables this component work with any controller
  // that provides the specified interface
  controller: function GreetUserController() {
    this.user = "world"; // this == $scope
  },
  // how to extract data from the controller
  bindings: {
    // two way bindings
    prop: '=',
    // one way binding
    // local changes arent reflected in parent scope unless changing object properties)
    // ^ parent & component reference the same object
    prop: '<',
    // same as < binding, but for constant strings
    prop: '@',
    // reference a parent fn like $ctrl.someFn(blah)
    // these are just event handlers / callbacks
    // the parent will execute the logic, which could potentially update other bindings
    someFn: '&'

  }
});
```

### directives

- use kebab-case custom attributes and camelCase for the directive source
- you can use `data-ng-` for valid html instead of `ng-`
- ng-app: this element is the root of an angular application that should be bootstrapped when the page is loaded

- ng-model: immediately two-bind this (input, textarea, select).value to a $scope.var
  - type validation for number, email, required
  - status e.g. invalid, dirty, touched, error
  - css for elements
  - bind html elements to html forms
- ng-bind: bind this element.innerHTML to a var
- ng-init: initializes app vars; use a controller instead
- ng-controller: set the controller for this module/application
- ng-repeat: clones this el with some iteration var
- ng-show: displays content if truthy

```html
<div ng-app="myApp" w3-test-directive></div>

<script>
  var app = angular.module("myApp", []);

  // modify the root scope
  app.run(function ($rootScope) {
    $rootScope.blah = "halb";
  });

  // create a new directive
  app.directive("w3TestDirective", function () {
    // can return anything, e.g. html elements that will replace the current el
    return {
      // required
      template: "I was made in a directive constructor!",
      // optional
      restrict: "A", // can only be invoked on attributes,
      // ^ E = element
      // ^ C = class
      // ^ M = comment
      // ^ e.g. EA = both elements and attributes
    };
  });
</script>

<head>
  <!-- consumed by ng-model-->
  <!-- toggled based on the status of some form field
    ng-empty
    ng-not-empty
    ng-touched
    ng-untouched
    ng-valid
    ng-invalid
    ng-dirty
    ng-pending
    ng-pristine -->

  <style>
    input.ng-invalid {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <!-- all produce the same result-->
  <w3TestDirective></w3TestDirective>
  <div w3TestDirective></div>
  <div class="w3TestDirective"></div>
  <!-- directive: w3TestDirective -->

  <!-- ng show + ng-model -->
  <form ng-app="" name="myForm">
    Email:
    <input type="email" name="myAddress" ng-model="text" />
    <span ng-show="myForm.myAddress.$error.email"
      >Not a valid e-mail address</span
    >
    <!-- provided by ng-model-->
    {{myForm.myAddress.$valid}} <br />
    {{myForm.myAddress.$dirty}} <br />
    {{myForm.myAddress.$touched}}
  </form>
</body>
```

### expressions

- can be used anywhere, e.g. in `ng-bind="anyJavascript"`
- {{ anyJavascript }}

## examples

- js

```html
<script>
  // angular is provided by some script tag in head
  var app = angular.module("myApp", []);

  // create controller
  app.controller("myCtrl", function ($scope) {
    // scope is available globally
    $scope.firstName = "John";
    $scope.lastName = "Doe";
  });
</script>
```

- html

```html
<div ng-app="" ng-init="firstName='woop'; someNum=1">
  <div ng-controller="my-controller-name">
    <img ng-src="{{" someScopeAttribute }} />
  </div>
  <div>
    <input type="text" ng-model=name" />
    <p>hello {{ name }}</p>
    <p ng-bind="name"></p>
    <p>any valid js {{ 10 + 10 }}</p>
  </div>
</div>
```

## angularjs application architecture

- in general, stick to MVC and you'll be fine

### idiomatic angularjs

- put each entity in its own file
  - controllers, components etc should be 1 per file
  - i.e. someController.js vs allControllers.js
- organize code by feature area, not by function
  - file-names-should-be-snake-cased
  - the directory structure should be organized by features
    - app/core/{shared, common, ...}
    - app/{thisThing, thatThing, ...}
- create reusable modules
  - each feature should declare its own modulee
  - all related entities should register themselves ont hat module
  - then you can simply drop the `someThing.module.js into an html script tag
- colocate spec files next to source files

```sh
someAppDir
  index.html
  app.module.js
    # register your modules on your main app
    # angular.module('myAppName', ['someThing'])
  app.css
  some-thing
    some-thing.module.js
      # angular.module('someThing', [depInject, other, modules, here])
    some-thing.component.js
      # register your components on your modules
      # angular.module('someThing').component('someThing', ...)
    some-thing.json # initial model data
    some-thing.template.html
    some-thing.component.spec.js

  core
    shared
      some-func.js
    common
      ...
```
