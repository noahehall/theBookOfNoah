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

function euclideanGCD(a,b) {
  return b === 0
    ? a
    : euclideanGCD(b, a%b)
}

function readLine (line) {
  if (line !== "\n") {
    if (!f.isUndefined(a) && !f.isUndefined(b)) {
      a = b = c = d = undefined;
    }
    if (f.isUndefined(a)) {
      a = parseInt(line, 10);
    } else if (f.isUndefined(b)){
      b = parseInt(line, 10);
      console.log(a,b)
    }

    if (!f.isUndefined(a) && !f.isUndefined(b)) {
      return console.log(euclideanGCD(a,b));
    }

  }
}
