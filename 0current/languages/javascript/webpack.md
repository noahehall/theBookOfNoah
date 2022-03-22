# webpack

- diving into areas Im not familiar with

## links

- [module federation](https://webpack.js.org/concepts/module-federation/)
- [module federation plugin](https://webpack.js.org/plugins/module-federation-plugin/)

## basics

### terms

- local modules: normal modules part of the current build
- remote modules: modules not part of the current build and loaded from a `container` at runtime
- container: created through a container entry, which exposes async access to the speciic modules
  - each build acts as a container, and consumes other builds as containers

## federated modules

- use cases

  - Multiple separate builds should form a single application.
  - These separate builds should not have dependencies between each other, so they can be developed and deployed individually.

- build time
  - uses the `ModuleFederationPlugin`
  - output
    - a `library.type=var,name=poop`
    - library.remotes{} containing dependencies to other federated modules
- runtime
  - modules are fetched in the HTML head tag
  - within some body.script, you can then `const app = import('myFedreatedApp')`

## systemjs
