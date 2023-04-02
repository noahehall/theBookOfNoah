/*



  ```js
  // do this
  function* fibonacci() {
    // a generator function
    let [prev, curr] = [1, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
  for (let n of fibonacci()) {
    console.log(n);
    // truncate the sequence at 1000
    if (n >= 1000) {
      break;
    }
  }

  // do not do this
  var gen = (function* () {
    yield 1;
    yield 2;
    yield 3;
  })();
  for (let o of gen) {
    console.log(o);
    break; // Closes iterator
  }

  // The generator should not be re-used, the following does not make sense!
  for (let o of gen) {
    console.log(o); // Never called.
  }
  ```

*/
