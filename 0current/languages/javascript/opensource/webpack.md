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

## module federation

- vs other mechanisms

  - native esm:
    no tree-shaking, ESM only (no css, JS specs)
    - preloading required, high RTT, many requests
  - externals: not scalable
    - parts are built separated and exposed globally
    - no ondemand loading
    - additional libraries must be created
    - highly dependent on external code
  - single build
    - any change requires full deploy
    - multiple apps cannot be separated
    -

- history
  - taken from apollos graphql federation
- components
  - host: a webpack build that is initialized first during a page load
    - i.e. which app runs first
  - remote: another webpack build, where part of it is being consumed by a host
  - bidirectional hosts: can operate in host or remote mode
    - you dont have to create another build, you just expose modules from the plugin in the existing build
  - omnidirectional hosts: acts like both host and remote at once
- logic
  - import code from other builds, at runtime
  - share vendor code dynamically, at runtime
  - deploy independent SPAs, without needing to redeploy consumers
  - redundancy and self healing capabilities
- how it works
  - can federate anything: UI code, configurations, biz logic, side effects, context, etc
  - you handle implementation details
  - each app is a separate build, represented as containers
  - containers can be referenced by other apps/containers
    - just having it on the page only d/ls lie a 5kb file
    - the actual module you are consuming from the container is only downloaded when the thing is actually loaded
  - containers then expose specific modules from their existing build
  - containers then share their dependencies
- goal
  - deploy multiple/parts of an application independently
  - each part can be shared and developed independently
  - avoid multiple copies of same library
  - share vendor code
  - no ui drawbacks, like page reloads,
  - avoid complicated CI
  - runtime code sharing
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

- overridables plugin:
- container plugin:
  - used by remotes to expose modules for other containers to consume
- container reference plugin:
  - used by the host to specify remotes it wants to consume
  - has a version check to consume modules for other containers
  - enables a container to import from another container at runtime, even tho imported container doesnt exist (needs to be fetched)
- share scope:
  - all provided modules first get put into the share scope with their versions attached
  - other containers retrieve modules from the share scope
  - there can be multiple share scopes

```js
// creating a container
new ModuleFederationPlugin({
  name: "container name",
  exposes: {
    "/public/name": "./path/to/file.js",
  },
});

// consuming other containers
new ModuleFederationPlugin({
  remotes: {
    anyName: "containerName@/someModule.js",
    // after container@ you can specify anything, like a URL
    components: {
      external: "@containerName/path.js",
      shareScope: "anything here",
    },
  },
});

// sharing modules
new ModuleFederationPlugin({
  shared: [
    "react",
    {
      otherThing: {
        singleton: true,
        requiredVersion: "^1.2.3",
      },
    },
  ],
});
```

## systemjs
