// var f = require('./.lib/functions');
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
    if (f.isUndefined(a) || f.isUndefined(b)) {
      [a, b] = line.split(' ').map(num => parseInt(num, 10));
    }

    if (!f.isUndefined(a) && !f.isUndefined(b)) {
      return console.log(euclideanGCD(a,b));
    }

  }
}
