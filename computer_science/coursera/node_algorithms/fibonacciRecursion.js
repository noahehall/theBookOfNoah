/*
  - 0, 1, then add the sum of the previous numbers
  - an algorithm that takes a non-negative integer N and returns the fibonacci number

*/
//var f = require('./.lib/functions');
var f = {
  isUndefined: function(x) {
    return typeof x === 'undefined'
  }
}
var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let a, b, c, d;
let array = [];

function recurse(n) {
  // taken from http://www.javascripter.net/math/calculators/fibonaccinumberscalculator.htm
  if (array[n]) return array[n];
  else array[n] = n == 0
    ? 0
    : n === 1
    ? 1
    : n === 2
    ? 1
    : (recurse(n-1) + recurse(n-2));

  return array[n];
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
