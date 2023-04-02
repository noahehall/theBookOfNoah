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
log(Array.from(new Set([1, 2]), (x) => (!(x % 2) ? "even" : "odd")));
log(Array.of(..."this"));

log([0, 1].at(1));
log([0, 1].at(-1));
log([0, 1].copyWithin(0, 1));
log([[0], [1]].flat());
log([[0], [1]].flatMap((x) => x));
log([1, 2, 3, 4].reduce((p, n) => p + n, 0));

/*
ADT
    Array.prototype[@@iterator]()
    Array.prototype.at()
    Array.prototype.concat()
    Array.prototype.copyWithin()
    Array.prototype.entries()
    Array.prototype.every()
    Array.prototype.fill()
    Array.prototype.filter() 
    Array.prototype.find()
    Array.prototype.findIndex()
    Array.prototype.findLast()
    Array.prototype.findLastIndex()
    Array.prototype.flat()
    Array.prototype.flatMap()
    Array.prototype.forEach()
    Array.from()
    Array.fromAsync()
    Experimental
    Array.prototype.group()
    Experimental
    Array.prototype.groupToMap()
    Experimental
    Array.prototype.includes()
    Array.prototype.indexOf()
    Array.isArray()
    Array.prototype.join()
    Array.prototype.keys()
    Array.prototype.lastIndexOf()
    Array.prototype.map()
    Array.of()
    Array.prototype.pop()
    Array.prototype.push()
    Array.prototype.reduce()
    Array.prototype.reduceRight()
    Array.prototype.reverse()
    Array.prototype.shift()
    Array.prototype.slice()
    Array.prototype.some()
    Array.prototype.sort()
    Array.prototype.splice()
    Array.prototype.toLocaleString()
    Array.prototype.toString()
    Array.prototype.unshift()
    Array.prototype.values()
*/
