require js background
  -require js is a dependency maanger
    -RequireJS is an “In browser dependency manager” to help break up large applications into smaller blocks of manageable code (much like we approach partials in Sass). Essentially we’re composing a set of highly decoupled, distinct pieces of functionality stored in modules where the primary goal is to encourage modularity and portability.
    -This approach can also be referred to as “AMD – Asynchronous Module Definition” and is the philosophy for ECMAScript6.
  -lets you define modules/js files that can be imported into other files
  -lets you require/load dependencies before running any code in the current file

amd backgrounnd
  syntax
    -define(id?, [dependencies?], factory);
    -The first two arguments are optional and the factory argument is a function that returns the exported value of your module.
    -if you dont provide an ID, it becomes an 'anonymous' module
    -if you do provide an ID, then this is the variable name of the return value when it is imported into a file via require
    -dependencies is an array of paths to files that this module requires
  samples
    writing an amd module with jquery as a dependency and assign its return value to $
      define('jquery', function($) {
        // do some jquery jazz.
        $('element').toggleClass('class-name');
      });
    writing an amd module that simply returns jquery
      define('jquery', [], function() { return window.jQuery; });


-boilerplate
define a module
  define('nameOfThisModule',['path/to/some/filename','path/to/some/other/dependency'],function () {
    //your logic

    return {whatever you want to return to files that import this module}
  })

require a module
  require(['some/dependency/filename','some/other/dep/filename'], function (dep1, dep2) {
    //use methods and properties from your dependencies
    var blah = dep1.somemethod();
    var bloop = dep2.someproperty;
  })

requirejs repo example
  https://github.com/web-design-weekly/wdw-requirejs
