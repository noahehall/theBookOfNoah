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

let primes = []

function getPrimes(num) {
  // shamelessly jacked from https://stackoverflow.com/questions/40200089/is-a-number-prime
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num !== 1;
}
}

function lcm(a,b) {
  const thisLcm = false;
  while (!thisLcm) {
    if
  }
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
      return console.log(lcm(a,b));
    }

  }
}
