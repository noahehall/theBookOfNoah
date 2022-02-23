# control statements

#### control

- try catch

  ```
  try {
   /*code*/
  } catch (err){
   /*
    err.message == message of error
   */
  }finally {
   /*do this regardless of what happens*/
  }
  ```

- if statements

  ```
  if (condition1) {
      block of code to be executed if condition1 is true
  } else if (condition2) {
      block of code to be executed if the condition1 is false and condition2 is true
  } else {
      block of code to be executed if the condition1 is false and condition2 is false
  }
  ```

- switch statements

  ```
  switch(expression) {
      case n:
          code block
          break;
      case n:
          code block
          break;
      default:
          default code block
  }
  ```

#### loops

- The break statement breaks the loop and continues executing the code after the loop (if any):

- The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
- for

  ```
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  for (index = 0; index < fruits.length; index++) {
      text += fruits[index];
  }
  ```

- for in

  ```
  var person = {fname:"John", lname:"Doe", age:25};
  var text = "";
  var x;
  for (x in person) {
      text += person[x];
  }
  ```

- while

  ```
  index =100
  while (index--) {
   //index in here will start at 99, since you used index-- as the condition
      code block to be executed
  }
  ```

- do while

  ```
  do {
      code block to be executed
  }
  while (condition);
  ```

## loops

- for..of: basic iterable loop

  ```s
    for (const/let variable of iterable) {
      statement
    }
  ```

- arr.entries(): returns a new Array Iterator object that contains the key/value pairs for each index in the array.

  ```s
  var a = ['a', 'b', 'c'];
  var iterator = a.entries();

  // with for..of loop
    for (let e of iterator) {
      console.log(e);
    }
  // manually
    console.log(iterator.next().value); // [0, 'a']
    console.log(iterator.next().value); // [1, 'b']
    console.log(iterator.next().value); // [2, 'c']
  ```

- arr.keys(): returns a new Array Iterator that contains the keys for each index in the array.

  ```s
    var arr = ['a', 'b', 'c'];
    var iterator = arr.keys();

    console.log(iterator.next()); // { value: 0, done: false }
    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }

    var sparseKeys = Object.keys(arr);
    var denseKeys = [...arr.keys()];
    console.log(sparseKeys); // ['0', '2']
    console.log(denseKeys);  // [0, 1, 2]
  ```
