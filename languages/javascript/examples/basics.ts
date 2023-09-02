import { log } from "./logit";

// convert any non negative value to a natural number
// often used to convert external input to true/false
log("~~-1", ~~-1);
log("~~1", ~~1);
log("~~{}", ~~{});

const a = [1, 2, 3];
log("Array == a.constructor", Array == a.constructor);
log("Array.isArray(a)", Array.isArray(a));

const o: Record<string, any> = {};
log("o.x == null", o.x == null);
log("o.x === null", o.x === null);
log("o.x is undefined", typeof o.y == "undefined");

var varA = "a var";
let letB = "b let";
const constC = "c const";
log("var types", { varA, letB, constC });

let tricky: Record<string, any> = {};
log(tricky.unless ?? "it was false");
tricky.unless ??= "it was true";
log(tricky);
log(tricky?.does?.it?.exist ?? "nope");
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void#javascript_uris
log(void log("eval and ignore") ?? "this string");
/*
global fns
  eval()
  isFinite()
  isNaN()
  parseFloat()
  parseInt()
  decodeURI()
  decodeURIComponent()
  encodeURI()
  encodeURIComponent()
  escape() Deprecated
  unescape()


*/
