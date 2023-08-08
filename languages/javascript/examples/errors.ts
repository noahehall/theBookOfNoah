import { log } from "./logit";

class MyError extends Error {}
try {
  throw new MyError("oops");
  // lol fkn prettier removes unreachable code
  // throw "this expression";
  // throw {message: "oops", name: "MyError"}
} catch (e) {
  if (e instanceof MyError) log("MyError", e.message);
}

/*
error props
  Error: cause
  Error: columnNumber
  Error: fileName
  Error.prototype.lineNumber
  Error: message
  Error.prototype.name
  Error.prototype.stack
error constructors
  Error
  AggregateError
  EvalError
  RangeError
  ReferenceError
  SyntaxError
  TypeError
  URIError
  InternalError
*/
