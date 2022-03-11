# webpack

- diving into areas Im not familiar with

## federated modules

- use case
  - poop
- build time
  - add uses the `ModuleFederationPlugin`
  - output
    - a `library.type=var,name=poop`
    - library.remotes{} containing dependencies to other federated modules
- runtime
  - modules are fetched in the HTML head tag
  - within some body.script, you can then `const app = import('myFedreatedApp')`

## systemjs
