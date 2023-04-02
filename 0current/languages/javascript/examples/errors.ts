import { log } from "./logit";

class MyError extends Error {}
try {
  if (true) throw new MyError("oops");
} catch (e) {
  if (e instanceof MyError) log("MyError", e.message);
}

/*
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
