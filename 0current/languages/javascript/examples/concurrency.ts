import { log } from "./logit";

const g = "good",
  b = "bad";

const oops = () => {
  throw "oops";
};
log(await "not a promise");
log(await Promise.resolve(g)); // same with reject but exits 1
log(await Promise.all([g, g, g, g, g, g]).then((x) => x.length));
log(await Promise.race([g, g]).then((x) => x.length));

new Promise((s, f) => f(log("rejection")))
  .catch(() => log("caught")) // catches reject() and js errors
  .then(undefined, () => log("long form")) // doesnt catch js errors, only reject()
  .then(
    () => log("in good"),
    () => log("in bad")
  )
  .finally(() => log("finaly"));

/*
```js


Promise.all
  fails fast; first rejection ends call stack
  finishes with array in same order


Promise.race
  finishes fast: first finish is returned


Promise constructor:
  // create
  const Promised = new Promise((resolve, reject) => {
    // resolve and reject are callbacks
    if (true) resolve(successData);
    else reject(ErrorObject);
    // do some other stuff
    // even if resolve is called first, finish all code inside of this block
  });

  // consume
  Promised
    .then(onResolve(x), onReject(x))
    .catch(bothRejectAndJavascriptErrors())


any thenable can be promised
  const cast = Promise.resolve({ then: () => {
    // this is my thenable object cast to a promise;
    }})
  cast.then(...)

promise sequential; remember p.all() fails fast
  var sequence = Promise.resolve();
  listOfPromises.forEach((x) => {
    //each request is added to the previous request and executed in sequence
    sequence = sequence.then(x);
  })


await sequential
  async () => {
    var data = await makeCall();
    var data2 = await makeCall2();
    var data3 = awat makeCall3();
  }

promise parallel-like execution
  var sequence = Promise.resolve()
  listOfPromises.forEach((x) => sequence.then(x))


await parallel-like execution
  async () => {
    const wait1 = wait(500);
    const wait2 = wait(500);
    await wait1;
    await wait2;
    return "done!";
  }

  // this works because map doesnt pause execution
  async (x) => {
    const textPromises = urls.map(async url => {
      const response = await fetch(url);
      return response.text();
    });

    // log them in sequence
    for (const textPromise of textPromises) {
      console.log(await textPromise);
    }
  }

timers
  setTimeout(someFunctionName, milliseconds); //runs someFunctionName ONCE after X milliseconds
  setInterval(someFunctionName, milliseconds); //runs someFunctionName EVERY X milliseconds
  clearInterval(intervalHandle) //you must assign setInterval to a variable
  clearTimeout(timeoutHandle) //you must assign setTimeout to a variable

Promises
  Promise.all()
  Promise.allSettled()
  Promise.any()
  Promise.prototype.catch()
  Promise.prototype.finally()
  Promise.race()
  Promise.reject()
  Promise.resolve()
  Promise.prototype.then()




  */
