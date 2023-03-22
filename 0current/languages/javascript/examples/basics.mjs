import { log } from "./logit.mjs";

// convert any non negative value to a natural number
// often used to convert external input to true/false
log("~~-1", ~~-1);
log("~~1", ~~1);
log("~~{}", ~~{});

const a = [1, 2, 3];
log("Array == a.constructor", a && Array == a.constructor);
log("Array.isArray(a)", Array.isArray(a));

const o = {};
log("o.x is null", o.x == null);
log("o.x is undefined", typeof o.x == "undefined");

// ```js
// var a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20

// // Stage 3 proposal
// ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });

// var x = [1, 2, 3, 4, 5];
// var [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2
// ```

// */
