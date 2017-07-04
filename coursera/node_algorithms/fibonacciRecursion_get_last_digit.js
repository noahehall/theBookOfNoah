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
let array = [0, 1];

function lastDigit(n) {
  let x = 1;
  while (x++ <= n) {
    array[x] = (array[x-1] + array[x-2]) % 10;
  }

  return array[n];
}

function readLine (line) {
  if (line !== "\n") {
    if (!f.isUndefined(a)) {
      a = b = c = d = undefined;
    }
    if (f.isUndefined(a)) {
      a = lastDigit(parseInt(line, 10));
      return console.log(a);
    }

  }
}
