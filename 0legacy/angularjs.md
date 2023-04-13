# angularjs

## links

- [landing page](https://angularjs.org/)
- [w3schools lol dont hate](https://www.w3schools.com/angular/default.asp)
  - [quick intro](https://www.w3schools.com/angular/angular_intro.asp)
- [ionic angular](https://ionicframework.com/docs/angular/overview)

### interwebs

- [access scope in browser](https://stackoverflow.com/questions/13743058/how-do-i-access-the-scope-variable-in-browsers-console-using-angularjs)
- [set img src](https://stackoverflow.com/questions/56863495/how-to-display-image-in-angular)

### tools

- [firefox ng-inspector: right click el -> logs to console](https://addons.mozilla.org/en-US/firefox/addon/ng-inspect/)

## basics

- extends html with directives, and binds data to html with expressions
  - all the `ng-blah` are directives
  - all the `{{ blah }}` are expressions

### directives

- ng-app: this element is the root of an angular application
- ng-model: bind the curVal of an input to a var
- ng-bind: binds the content of an html element to the curval of a var
- ng-init: initializes app vars

## examples

- js

```js

```

- html

```html
<div ng-app="" ng-init="firstName='woop'">
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
