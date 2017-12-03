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

function readLine (line) {
  if (line !== "\n") {
    if (!f.isUndefined(a) && !f.isUndefined(b)) {
      a = b = c = d = undefined;
    }
    if (f.isUndefined(a)) {
      a = parseInt(line, 10);
      if (a <=1) return console.log(a);
    }
    if (!f.isUndefined(a) && f.isUndefined(b)) {
      c = line.toString().split(' ').map(x => parseInt(x.trim(), 10)).sort(f.compareNumbers);
      b = c.pop();
      d = c.pop();

    }
    if (!f.isUndefined(b) && !f.isUndefined(d)) {
      console.log(d * b)
    }
  }
}
