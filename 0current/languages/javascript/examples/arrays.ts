import { log } from "./logit";

// gotchas
const myArr: any[] = ["a"];
log("myArr[0]", myArr[0]);
log("myArr['0']", myArr["0"]);

myArr["this works too"] = 1;
log("myArr[1]", myArr[1]);
log("myArr[this works too]", myArr["this works too"]);

myArr.length = 10;
log("myArr.length=10", myArr);

myArr.length = 0;
log("myArr.length=0", myArr);

// cheatsheet
const wtf = );
log(Array.from(new Set([1, 23])));

/*
ADT

static
  from
  isArray
  of

instance
  at()
  concat()
  copyWithin()
  entries()
  every()
  fill()
  filter()
  find()
  findIndex()
  findLast()
  findLastIndex()
  flat()
  flatMap()
  forEach()
  group() Experimental
  groupToMap() Experimental
  includes()
  indexOf()
  join()
  keys()
  lastIndexOf()
  map()
  pop()
  push()
  reduce()
  reduceRight()
  reverse()
  shift()
  slice()
  some()
  sort()
  splice()
  unshift()
  values()
*/
