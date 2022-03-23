# webpack

- diving into areas Im not technically familiar with

## links

- [module federation](https://webpack.js.org/concepts/module-federation/)
- [module federation plugin](https://webpack.js.org/plugins/module-federation-plugin/)

## basics

### terms

- local modules: normal modules part of the current build
- remote modules: modules not part of the current build and loaded from a `container` at runtime
  - Loading remote modules is considered an asynchronous operation.
  - When using a remote module these asynchronous operations will be placed in the next chunk loading operation(s) that is between the remote module and the entrypoint
  - It's not possible to use a remote module without a chunk loading operation.
- container: created through a container entry, which exposes async access to the specific modules
  - loading the module (asynchronous)
    - done during the chunk loading
  - evaluating the module (synchronous).
    - done during the module evaluation interleaved with other (local and remote) modules
  - each build acts as a container, and consumes other builds as containers
    - It is possible to nest a container.
    - Containers can use modules from other containers. Circular dependencies between containers are also possible.

## federated modules

- goal
  - Multiple separate builds should form a single application.
  - These separate builds should not have dependencies between each other, so they can be developed and deployed individually.
- use cases (see https://webpack.js.org/concepts/module-federation/#use-cases)
  - each (below) is a different way to create and consume a container that hosts federated modules at runtime
  - separate builds per page
  - components library as container
  - dynamic remote containers
  - promise based dynamic remotes
  - dynamic public path
- build time
  - uses the `ModuleFederationPlugin`
  - output
    - a `library.type=var,name=poop`
    - library.remotes{} containing dependencies to other federated modules
- runtime
  - modules are fetched in the HTML head tag
  - within some body.script, you can then `const app = import('myFedreatedApp')`

## systemjs
