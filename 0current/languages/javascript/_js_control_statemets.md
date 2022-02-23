# control statements

## links

- [for in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [for of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

## try catch

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

## if statements

```
if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}
```

## switch statements

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

## loops

- The break statement breaks the loop and continues executing the code after the loop (if any):

- The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

### for

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
for (index = 0; index < fruits.length; index++) {
    text += fruits[index];
}
```

### for in

- The for...in statement iterates over the enumerable properties of an object, in original insertion order. For each distinct property, statements can be executed.

  ```
  var person = {fname:"John", lname:"Doe", age:25};
  var text = "";
  var x;
  for (x in person) {
      text += person[x];
  }
  ```

### for..of: basic iterable loop

- The for...of syntax is specific to collections, rather than all objects. It will iterate in this manner over the elements of any collection that has a [Symbol.iterator] property.

```s
  for (const/let variable of iterable) {
    statement
  }
```

### while

```
index =100
while (index--) {
 //index in here will start at 99, since you used index-- as the condition
    code block to be executed
}
```

### do while

```
do {
    code block to be executed
}
while (condition);
```
