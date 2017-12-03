/*
    Implement a program for a given computational problem.
    Find out that it is slow: on large datasets, it takes too long to run.
    Implement a more efficient program that is able to process even large datasets in less than a second.
    Use stress testing to locate and fix a bug in the program.
*/
/*
  Problem Description

  Problem

  Given a sequence of non-negative integers a0,…,an−1, find the maximum pairwise product, that is, the largest integer that can be obtained by multiplying two different elements from the sequence (or, more formally, max0≤i≠j≤n−1aiaj). Different elements here mean ai and aj with i≠j (it can be the case that ai=aj).

  Input format

  The first line of the input contains an integer n. The next line contains n non-negative integers a0,…,an−1 (separated by spaces).

  Constraints

  2≤n≤2⋅105; 0≤a0,…,an−1≤105

  Output format

  Output a single number — the maximum pairwise product.

  Sample 1

  Input:


  
  1
  2
  3
  1 2 3
  Output:


  
  1
  6
  Explanation:

  6=2×3
  Sample 2

  Input:


  
  1
  2
  10
  7 5 14 2 8 8 10 1 2 3
  Output:


  
  1
  140
  Explanation:

  140=14×10
  Sample 3

  Input:


  
  1
  2
  5
  4 6 2 6 1
  Output:


  
  1
  36
  Starter files

  max_pairwise_product.py
  MaxPairwiseProduct.java
  max_pairwise_product.cpp
  What To Do

  If you are using Python, Java, or C++, download one of the starter files above and save to your working directory.

  In the next sequence of videos and readings, we will go through the process of solving this problem together.
  How to submit
  When you're ready to submit, you can upload files for each part of the assignment on the "My submission" tab.
*/

var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let a, b, c, d;

function compareNumbers(a, b) {
  return a - b
}

function isUndefined(x) {
  return typeof x === 'undefined'
}

function readLine (line) {
  if (line !== "\n") {
    if (!isUndefined(a) && !isUndefined(b)) {
      a = b = c = d = undefined;
    }
    if (isUndefined(a)) {
      a = parseInt(line, 10);
      return a;
    }
    if (!isUndefined(a) && isUndefined(b)) {
      c = line.toString().split(' ').map(x => parseInt(x.trim(), 10)).sort(compareNumbers);
      b = c.pop();
      d = c.pop();

    }
    if (!isUndefined(b) && !isUndefined(d)) {
      console.log(d * b)
    }
  }
}
