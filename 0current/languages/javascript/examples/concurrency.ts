/*
```js
    all of the below are the same
    .catch(....)
    .then(undefined, rejectFunc)
    .then(resolve, rejectFunc)
  ```
  4. chaining (value -> promise):
- Promise Methods
  1. `Promise.Resolve()`: create a promise thats resolves to whatever value you give it
  ```
    var blah = Promise.Resolve();
    blah.then(...);
  ```
  2. `Promise.Reject()`: see Promise.Resolve();
  3. `Promise.all([pro1, pro2,...])`: takes an array of promises and returns an array of values in the same order as the original promises
     ```
       Promise.all([...])
         .then(...)
     ```
     - fails fast: will reject as soon as the first promise rejects, without waiting for the remaining promises to settle
  4. `Promise.race(array)`: make a promise that is settled as soon as any promises in the passed array are resolved/rejected


#### Promise constructor:

```
  // create promise and assign to const
  const Promised = new Promise((resolve, reject) => {
    // resolve and reject are callbacks
    if (true) resolve(successData);
    else reject(ErrorObject);
    // do some other stuff
    // even if resolve is called first, finish all code inside of this block
  });

  // take action when promise is settled
  Promised.then(
    (successData) => {
      // sucessData = whatever is passed to resolve()
    }, (errorData) => {
      // errorData = whatever is passed to reject()
    }
  ).catch(rejectFunction) // handles both reject and javascript errors
  .then(someNamedFucntion) // passed a name function that accepts the argument
  .catch(...) // thens and catches *can* come right after each other
  .then(....)
  .then(undefined, rejectFunc) // this is long form of .catch(...)
  .then(resolve, reject) // combine both .then and .catch in one go
```

#### Promise Chaining

**Cast a thenable object to a standard promise**

```
  const cast = Promise.resolve({ then: () => {
    // this is my thenable object cast to a promise;
    }})
  cast.then(...)
```

**Series: multiple promises run sequentially**

```
  var sequence = Promise.resolve(); // create a promise without the new keyword, can also use Promise.reject()
  blah.forEach(function(url) {
    sequence = sequence.then(...); //each request is added to the previous request and executed in sequence
  })
```

**Parallel: multiple promises run concurrently**

```
  var sequence = Promise.resolve(); // create a promise without the new keyword, can also use Promise.reject()
  blah.forEach(function(url) {
    sequence.then(...); //each request is fired independently and in parallel
  })
```

**Each then can transform the value returned from the previous**

```
  somePromise
    .then((value) => value++)
    .then((value) => value++)
```


**async arrow function**
`  async ()=> {
        var data = await makeCall();
      }`
**async function with try catch**
`  async function myFirstAsyncFunction() {
        try {
          // execution is suspended in a non-blocking way inside of this block until the promise is resolved or rejected,
          const fulfilledValue = await promise;
        }
        catch (rejectedValue) {
          // …
        }
      }`
**async function used with array map**
`  const jsonPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.json();
      });`
**async function as a object method**

````
      const storage = {
        async getAvatar(name) {
          const cache = await caches.open('avatars');
          return cache.match(`/avatars/${name}.jpg`);
}
};

      storage.getAvatar('jaffathecake').then(…);
    ```

**async function as a class method**
````

      class Storage {
        constructor() {
          this.cachePromise = caches.open('avatars');
        }
        async getAvatar(name) {
          const cache = await this.cachePromise;
          return cache.match(`/avatars/${name}.jpg`);

}
}

      const storage = new Storage();
      storage.getAvatar('jaffathecake').then(…);
    ```

**A function with multiple await expressions will run each in serial.**
`  async ()=> {
        var data = await makeCall();
        var data2 = await makeCall2();
        var data3 = awat makeCall3();
      }`
**async function ran in parallel**
`  async function parallel() {
        const wait1 = wait(500);
        const wait2 = wait(500);
        await wait1;
        await wait2;
        return "done!";
      }`
**request in parallel, process in order**

```
  async function logInOrder(urls) {
    // fetch all the URLs in parallel
    const textPromises = urls.map(async url => {
      const response = await fetch(url);
      return response.text();
    });

    // log them in sequence
    for (const textPromise of textPromises) {
      console.log(await textPromise);
    }
  }
```

**to run a bunch of calls at the same time**
`  async function concurrent () {
        var [r1, r2, r3] = await Promise.all([p1, p2, p3]);
      }`
**another version of the above**
`  const all = Promise.all.bind(Promise);
      async function concurrent () {
        var [r1, r2, r3] = await all([p1, p2, p3]);
      }`



- timers
  ```
  	setTimeout(someFunctionName, milliseconds); //runs someFunctionName ONCE after X milliseconds
  	setInterval(someFunctionName, milliseconds); //runs someFunctionName EVERY X milliseconds
  	clearInterval(intervalHandle) //you must assign setInterval to a variable
  	clearTimeout(timeoutHandle) //you must assign setTimeout to a variable
  ```












  */
