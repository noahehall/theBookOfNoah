import { log } from "./logit.mjs";

// FYI: objects and classes use the same method syntax
const myObj = {
  m1() {
    return "m1";
  },
  *m2() {
    yield "m2";
  },
  m3: function* () {
    yield "m3";
  },
  async ["m" + 4]() {
    return Promise.resolve("m4");
  },
  get mOne() {
    return this.m1();
  },
};

const dict = Object.setPrototypeOf({}, null);
log("dict", dict);
// same as above
const dict2 = Object.create(null);
log("dict2", dict2);

/*
sort an object by value
    Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));

strict equality
  Object.is(value1, value2)

check if properties exists and is owned by object
  if (thisObject.hasOwnProperty('thisPropertyName'))

check if property exist and is owned by object or the objects prototype
  if ('thisPropertyName' in thisObject)

attach new methods/vars to the constructor
  Something.prototype.blah = function(){}

------------------------------

ADT: Object
  assign() Creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object.
  create() Creates a new object with the specified prototype object and properties.
  defineProperties() Adds the named properties described by the given descriptors to an object.
  defineProperty() Adds the named property described by a given descriptor to an object.
  entries()  Returns an array of a given objects own enumerable property [key, value] pairs.
  freeze() Freezes an object: other code cant delete or change any properties.
  fromEntries() convers [[kX, vX], ...] to  {kX, vX, ...}; opposite of entries
  getNotifier()  Get a notifier with which to create object changes manually.
  getOwnPropertyDescriptor() Returns a property descriptor for a named property on an object.
  getOwnPropertyNames() Returns an array containing the names of all of the given objects own enumerable and non-enumerable properties.
  getOwnPropertySymbols() Returns an array of all symbol properties found directly upon a given object.
  getPrototypeOf() Returns the prototype of the specified object.
  is() Compares if two values are distinguishable (ie. the same)
  isExtensible() Determines if extending of an object is allowed.
  isFrozen() Determines if an object was frozen.
  isSealed() Determines if an object is sealed.
  keys() Returns an array containing the names of all of the given objects own enumerable properties.
  preventExtensions() Prevents any extensions of an object.
  seal() Prevents other code from deleting properties of an object.
  setPrototypeOf() Sets the prototype (i.e., the internal [[Prototype]] property)
  values()  Returns an array of a given objects own enumerable values.


ADT: console
  log: [Function: log],
  warn: [Function: warn],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  debug: [Function: debug],
  info: [Function: info],
  dirxml: [Function: dirxml],
  error: [Function: error],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  createTask: [Function: createTask]

ADT: json
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

*/
