/*
  - 0, 1, then add the sum of the previous numbers
  - an algorithm that takes a non-negative integer N and returns the fibonacci number

*/
var f = require('./.lib/functions');
var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let a, b, c, d;

function recurse(n) {
  return n <= 1
    ? 1
    : (recurse(n-1) + recurse(n-2));
}

function readLine (line) {
  if (line !== "\n") {
    if (!f.isUndefined(a)) {
      a = b = c = d = undefined;
    }
    if (f.isUndefined(a)) {
      a = recurse(parseInt(line, 10));
      return console.log(a);
    }

  }
}
