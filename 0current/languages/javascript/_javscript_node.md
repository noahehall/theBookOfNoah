# [package managers]
  - [npm vs yarn](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/)
    - yarn
      - offlice cache: When you install a package using Yarn (using yarn add packagename), it places the package on your disk. During the next install, this package will be used instead of sending an HTTP request to get the tarball from the registry.
      - deterministic installs: Yarn uses lockfiles (yarn.lock) and a deterministic install algorithm. We can say goodbye to the "but it works on my machine" bugs.
      - license checking: Yarn comes with a handy license checker, which can become really powerful in case you have to check the licenses of all the modules you depend on.
      - parallel installation: whenever npm or Yarn needs to install a package, it carries out a series of tasks. In npm, these tasks are executed per package and sequentially, meaning it will wait for a package to be fully installed before moving on to the next. Yarn executes these tasks in parallel, increasing performance.
      -

# [request/response]
  - [server design patterns](http://www.servicedesignpatterns.com/clientserviceinteractions/requestresponse)
  -
