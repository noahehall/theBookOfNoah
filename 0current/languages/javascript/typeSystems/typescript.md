# typescript

- bookmark: https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html#global-libraries
  - [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
    - this is the beginning of the reference
    - eventually you want to get through this shiz
- todos
  - [constraints](https://www.typescriptlang.org/docs/handbook/2/functions.html)
    - constraints
    - specifying type arguments
    - guidelines for writing good generic functions
  - [mapping modifiers](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers)
  - [check the examples in typescript playground](https://www.typescriptlang.org/play)
- skipped
  - [type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
  - [the array type](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type)
    - skipped everything starting with and after this
    - but definitely need to get through it
  - [creating types from types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
    - skipped entire screen
  - [type-only field declarations](https://www.typescriptlang.org/docs/handbook/2/classes.html#type-only-field-declarations)
  - [this types](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types)
  - [relationships between classes](https://www.typescriptlang.org/docs/handbook/2/classes.html#relationships-between-classes)
    - classes are duckedtype like all other objects
    - ^ so Person === Human if they have the same signature

## links

- react
  - [react type reference](https://flow.org/en/docs/react/types/)
  - [react types source code](https://github.com/facebook/react/blob/main/packages/shared/ReactTypes.js)
- typescript
  - [react children with typescript](https://www.carlrippon.com/react-children-with-typescript/)
  - [fn components with typescript](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/)
  - [tsconfig module options](https://www.typescriptlang.org/tsconfig#module)
  - [module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
  - [latest features added in typescript 4.5](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/)
  - [declarations by example reference](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html)
  - [library structure reference](https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html)
  - [installating delcaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)

## terms

- refinement: the ability for a static type checker to be able to tell the type of variable a mixed/any/etc type is. usually occurs within an if/case statement before use of the variable
- invariant: a type that is less specific than another type
  - does not accept `supertypes` or `subtypes`
- covariance: a type that is more specific that another type
  - does not accept `supertypes`
  - accepts `subtypes`
- contravariance
  - accepts `supertypes`
  - does not accept `subtypes`
- bivariance
  - accepts `supertypes` and `subtypes`
- tuple: a list with a limited set of items
  - tuples always have a fixed length based on its length when instantiated
  - are not a subtype of arrays, thus cant be used where one is expected & vice versa
  - only posses immutable array methods
- nominal types: hides the implementation details of a type, and only exposes the public interface
- identity function: returns whatever value was passed
- generic type: i.e. polymorphic type
  - identity function that returns the same type its passed
- parametric polymorphism: i.e. parameterized generics; allow you to pass types in like arguments to a function
- union types
  - a value can be one of a set of types
  - disjoint unions
    - any number of object types which are each tagged by a single property with an `EXACT` value
      - i.e. `success[true|false]`
    - i.e they all share atleast ONE property, e.g. a `success` property in a response that could either be `true` or `false`
- width subtyping
  - permits you to pass a object with more properties that the type expects
- overload: a function with the same name, but different types of parameters
  - fns of type overLoadFn are `overloaded`
- thunks: fns in the form of `() => A`
- structural typing: aka duck typing: focuses on the shape of an object; if it looks like a duck, treat it like a duck
  - if two objects have the same shape, they are considered to be of the same type
  - The shape-matching only requires a subset of the object’s fields to match.
  - no distinction between objects and classes

## gotchas

- remember: typescript is compile time type-checking
  - so all of this goodiness is removed when shipped to prod

```js
// @ts-ignore
// will ignore this line

// calling a method on a numeric literal requires it to be in parentheses to aid the parser.
(1).toExponential();

// If some variant is not covered, the return type of a fn will be poop | undefined
type SomeType = "this" | "that" | "thisIsntCheckedWithinFn";
const someFn = (arg: SomeType) => {
  if (arg === "this") return "this";
  return arg;
};
// since we didnt cover all the cases, the return type will be string | undefined
const poop = someFn();
```

## react quickies

- todos
  - [start here](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
  - [quick setup overview](https://reactjs.org/docs/static-type-checking.html#typescript)
  - [ts, react & webpack](https://webpack.js.org/guides/typescript/)
  - [and here](https://www.typescriptlang.org/docs/handbook/react.html)

```js
  // JSX element type 'Component' does not have any construct or call signatures.
  // ^ means the component has already been rendered, and you are trying to render it again
  // ^ easy fix by doing {Component} instead of <Component />
  // ^ or see below
  // ^ use { type ElementType } from 'react';
  // ^ CompToRender = props.someComp as ElementType

  const fncomponent = (): JSX.Element => <div>yolo worl</div>
  someFn(myRating as unknown as number)
  const someObj: any { things: 'hello'} as OtherThing
  export const SOME_OBJ: { poop: string } = { poop: 'value' };

  import React, { FC, ReactElement } from 'react';

  export interface PropDef {
    readonly poop: string;
  }
  export const someFnComponent: FC<PropDef> = ({
    prop1,
    prop2,
  }): ReactElement => {}
  // ^ or one that doesnt accept props
  // SomeComponent: FC<Record<string, never>> = (): ReactElement

  export const fetchSomething (): Promise<PropDef> {
    return ...
  }
  const arrayOfObjects: PropDef[] = [propDef1, propDefX...s]
  SomeEl = ({ }: propDef): JSX.Element
  Promise<{ [x: string]: string }>


  // React type reference
  // this is how facebook does it, follow their lead or create your own framework
  // and namespaces should no longer hinder treeshaking
    import * as React from 'react';

  // any node that can be rendered in a react application
  // use this and move on with your life
  React.Node
    // i.e.
      type Node = React.ChildrenArray<void | null | boolean | string | number | React.Element<any>;
    // class component
      class MyComponent extends React.Component<{}> {
        render(): React.Node { /*render here */}
      }
    // fn component
      function MyComponent(props: {}): React.Node { /* some code... */}

  // the type of jsx element
  // e.g. returned from React.createElement()
  React.Element
    const element: React.Element<'div'> = <div />;


  //can be a single/nested array to any level
  React.ChildrenArray<T>
    const children: React.ChildrenArray<number> = 42;
    const children: React.ChildrenArray<number> = [[1, 2], 3, [4, 5]];
    const array: Array<number> = React.Children.toArray(children); // flatten the array

  // need a better example
  // this is the ost abstract representation of a react component
  // useful for HOCs and library definitions
  React.AbstractComponent<Config, Instance>


  // alwys use for  class/fns that receive/return react components
  // doesnt include strings, @see React.ElementType
  React.ComponentType<Props>
    const StyledAnchor: React.ComponentType<any> = styled(Clickable)`css declarations`
    // i.e.
    type ComponentType<Props> =
      | React.StatelessFunctionalComponent<Props>
      | Class<React.Component<Props, any>>;

  // same as React.ComponentType but includes renderable strings
  React.ElementType
    // i.e.
    type ElementType = | string | React.ComponentType<any>;

  // the most general type of all react elmenets
  // similar to `mixed` for all values
  React.MixedElement
    const element: React.MixedElement = <div />;
    // i.e.
      React.Element<React.ElementType>

  // type of a react stateless fn component
  React.StatelessFunctionalComponent<Props>
    // i.e.
      type StatelessFunctionalComponent<Props> = (props: Props) => React.Node;

  // key props
  React.Key
    type Key = string | number;

  // type of ref prop on rect elments, i.e. string/fn
  React.Ref<typeof Component>
    // i.e.
    type Ref<C> =
      | string
      | (instance: React.ElementRef<C> | null) => mixed;

  React.ElementProps<typeof Component>
  React.ElementConfig<typeof Component>
  React.ElementRef<typeof Component>
  React.Config<Props, DefaultProps>

```

## import/export

- module resolution: process of taking a string from import/require statement and mapping it to a file on disk
  - classic: the default when the compiler option is not `commonjs`; dont use it
  - node: replicates ow node.js works in commonjs mode, with additional checks for .ts and .d.ts

```js
/** imports */
import { a,b,c } from "./local-package";
import * as prefix from "../lib/third-package";
import theDefault from './poop';
import './someFileWithSideEffects'; // doesnt include any vars, but does run fns

/** exports */
// you can use export lists & direct exports in the same file
export { a, b, c }; // an export list
function f() { return g(); }
function g() {} // g is not exported
export function a { return g() } // a direct export

/* typescript specific import/exports */
export type A = { Poop: number };
export interface Flush { Yes: boolean };
// will import the matching type/vars, i dont like this syntax
import { Poop, Flush } from './wherever';
// import type: can only import types, this is WAY better
import type { Poop, Flush } './wherver';
import { someFn, type Poop, type Flush } // this is WAY better
import f = require("single-function-package"); // how to import commonjs

/* commonjs */
module.exports = {a, b, c};
const theWholeThing = require('./poop');
const { a as justA } = require('./poop');
```

## tsc: typescript compiler

```js
pnpm add typescript // install tsc to node_modules
pnpm tsc somefile.ts // typecheck a specific file and output a .js file with the types removed
  --noEmitOnError // dont output files if errors exist
  --target es2015 // set which version of JS to downlevel to
  -- init // create a new tsconfig.json

// tsconfig.json
// common compiler options
{
  compilerOptions: {
    "strict": true, // turn on all strict settings, can individually turn them off
  }
}
```

## declaration files

- for annotating packages/libraries with no types, e.g. the poop package may have a poop.d.ts
  - the idea being if you have access to the code, you should write the annotations with the code
  - ^ and not in a declaration file
- kinds of libraries: determines the structure of a declaration file
  - modular libraries:
    - only work in a JS environment with a module loader (commonJS, ESM, RequieJS, UMD, SystemJS, etc)
    - generally never assign properties to window/global
    - templates
      - [general modules](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html)
      - [class modules](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html)
      - [function modules](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html)
      - [plugin modules](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html)

```js

// describe types or values access by dot notation
// e.g. myLib.makeGreeting()
declare namespace myLib {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}

// overloading fns
// getWidget(1) | getWidget('1');
declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

// reusable interfaces
interface GreetingSettings {
  greeting: string;
  duration?: number; //optional
  color?: string; //optional
}
declare function greet(setting: GreetingSettings): void;

// class and class like objects
// have properties, methods and constructors
declare class Greeter {
  constructor(greeting: string);
  greeting: string;
  showGreeting(): void;
}

// variables
declare var foo: number; // global
declare const boo: number; // constant
declare let zoo: number; // block scoped
declare function greet(greeting: string): void;

```

## data types

```js
/**
 * type examples
 * native types
 * number, string, bigint, boolean, symbol, null, undefined, object (any non primitive), Function
 * typescript extensions
 * any: turns off the typechecker (wont produce errors)
 * unknown: the top type from which all inherit, safer than using any
 * object literal: e.g. { property: Type}
 * void: subtype of undefined, intended for use as a return type
 * never: when a union is reduced to no valid type, or a fn that ends the program/throws exception
 * T[]: mutable arrays, shortcut for Array<T>
 * [T, T]: fixed-length mutable tuple, a subtype of T[]
 * (arg: T) => U: functions
 */

// determining the type of a var
// string 	typeof s === "string"
// number 	typeof n === "number"
// bigint 	typeof m === "bigint"
// boolean 	typeof b === "boolean"
// symbol 	typeof g === "symbol"
// undefined 	typeof undefined === "undefined"
// function 	typeof f === "function"
// array 	Array.isArray(a)
// object 	typeof o === "object"

// type assertions
// the as TYPE must be more specific than the inferred type
const poop = {} as object;
const otherPoop = {} as const; // makes it totally immutable
// to coerce to any type, you need double assertions
const poop = ({} as any) as object;

// modifiers
type Modifiers {
  optional?: any; // requires checking if undefined before use
  readonly noReAssignment: string; // cant be reassigned, but if object, child props can be
}

// const vs readonly
// const only declares the reference to be immutable
// notice below the referent is can still be mutated
const a = [1, 2, 3];
a.push(102);
a[0] = 101;
// const assertions (via as keyword) works for arrays and object literals
let a = [1, 2, 3] as const;
a.push(102); // error
a[0] = 101; // error
// readonly stops all mutation
interface Rx { readonly x: number;}
let rx: Rx = { x: 1 };
rx.x = 12; // error
let rx: Readonly<X> = { x: 1 }; // you can even make all properties read only
rx.x = 12; // error
// stop all mutations on arrays
let a: ReadonlyArray<number> = [1, 2, 3];
let b: readonly number[] = [1, 2, 3];
a.push(102); // error
b[0] = 101; // error
```

### simple types

```js
// basic types
let poop: string = "flush";
const direction: "left" | "right" = "left"; // subtype  of primitives

// unions
// when a type can be any of the given types
type MyBool = true | false;
type someOpts = string | string[];

// intersections
type Combined = { a: number } & { b: string }; // combined == { a: number, b: string }
type Conflicting = { a: number } & { a: string }; // error
```

### interfaces & type aliases

```js
// preferred over type aliases for describing object types
interface BigPoops {
  when: string;
  flush: boolean;
}
// as object
const iTake: BigPoops = {
  when: "mornings",
  flush: true,
};
// as class: i know hella duplication
class BigPooper {
  when: string;
  flush: boolean;

  constructor(when: string, flush: boolean) {
    this.when = when;
    this.flush = flush;
  }
}
const poop: BigPoops = new BigPooper("mornings", true);

// interfaces can be extended
interface A extends B, C, D {}

// type alias can can combine interfaces (similar affect as extend)
// i.e. an intersection type
type CombinedInterfaces = SomeInter & OtherInter;

// type aliases vs interfaces
// ^ Type aliases behave differently from interfaces with respect to recursive definitions and type parameters
// ^ interfaces can be extended via: interface Poop extends Flush
// ^ type aliases can be combined: type Poop = Flush & { ... }
// ^ the distinction is how conflicts are resolved

// interface templates
interface Box<T> {
  contents: T;
}
const poop: Box<string> = { contents: "works" };
const poop: Box<number> = { contents: 1 };

// generic type alias
type Box<Type> = {
  contents: Type,
};
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

// index signatures
// when you dont know the key names, but you know the shape
interface StringArray {
  [index: number]: string;
}
```

### functions

```js

// fns
// type alias
type SomeFn = (a: any) => void;
// type alias with call signature (e.g for Date)
interface CallOrConstruct {
  new (s: string): Date; // new Date('today')
  (n?: number): number; // when invoking as fn Date(123456)
}
// construct signatures
type SomeConstructor {
  new (s: string): SomeObject; // new Poop('flush')
}
// inline
function poop(a: any): any { /* body */}
// shortcut syntax
let fnSyntax1: (a: any, b: any) => any = (a, b) => a;
// samething but more verbose
// Type parameters should only be used to propagate type information, such as constraining parameters to be the same type:
let fnSyntax2: <T, U>(a: T, b: U) => T = (a, b) => a;
// overloads: require 2 more overload signatures
// ^ specify some signatures without the body (overload signatures)
// ^ and another specifying the body (implementation signature) that should handle ALL CASES
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
// annotating this within function functions
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
// object destructuring
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
// rest params
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
```

### generics

```js

// generics
// a fn where the type of the input relate to the type of the output
// ^ or where the types of two inputs relate in some way
// T === placeholder, for whatever type the caller sends
// enables you to avoid overloads entirely
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
// example specifying multiple T
fn poop<A, B>(a: A, b: B): B { /*body*/}
// provide variables to types, e.g. specifying the type of elements within an array
type StringArray = Array<string>;
type ObjectWithNameArray = Array<{name: string}>

// interface generic
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
```

### classes

```js
// any class not prefixed with abstract is a concrete class
class Example {
  // public writable fields
  poop: string; // must be intiialized in constructor
  dontThrowError!: string; // ! dont throw error if not initialized
  withDefault: string = "intialized when created";
  readonly flush: boolean; // prevents mutation outside of the constructor
  declare soemProp: Poop; // declare only enforces type-check, doesnt emit any runtime js code
  public normalProp: string; // visible outside the class, the default
  protected onlyViaDerivedClasses: string; // visile within the class, derived classes must also specify if overloading it
  private softPrivate: bool; // visible to the class that defines it, or publicy if accessed via instance['privateThing']
  private #hardPrivate: bool; // using JS native private fields makes this a truly private field
  // ^ using mechanisms that offer hard runtime privacy, such as closures, WeakMaps, or private fields could affet performance
  static classProp: bool; // accessible via Class.classProp
  // ^ can also have any of the other visiblity modfiiers, e.g. priate static poop: bool;
  // ^ static properties cant be use any names from the Funtion prototype, e.g. name, length, call as static prop names are invalid
  static {
    // static blocks hav etheir own scope, with full access to the class; good place for writing static initialization code
    try {
      // some code
    } catch {}
  }

  // single constructor
  constructor() {
    super(); // required if this a is a derived class
    // super.property|method(); invoke base class
    this.poop = "mornings";
  }

  // constructors can be overloaded
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }

  // getter
  // if no corrosponding settter exists, this will be readonly
  get poop(): number {
    return this._size;
  }
  // setter
  set poop() {
    // return type is inferred from the getter
  }

  // every instance of the class references a single fn in memory
  // thus, will always point to the current object reference
  instanceFn () {
    // ^ e.g. if  objRef = myClassInstace;
    // ^ poop will refer to objRef and not myClassInstance
    return this.poop;
  }

  // every instance of the class gets a new fn allocationed (more memory)
  // thus: will always point to the current class instance
  instanceFnArray = () => {
    // ^ e.g. if objRef = myClassInstance
    // ^ poop will refer to myClassInstance
    return this.poop;
  }
}

// parameter properties: reduces boilerplate of assigning properties to classes via the constructor
// ^ constructur param must be one of public, private, protected, readonly
class ParamProps {
  // public poop: boolean; <--- no longer needed as its in the constructor
  constructor(
    public poop: boolean; // will be availale on the class as if it was a class property
  )
}

// class expressions:
// ^ dont need a name, but will be typed as the same name as the are assigned to
const IsAClass = class<T> {
  constructor(public yup: T)
}
const instance = new IsAClass('hello') // typeof instance ==== 'instance<String>
// abstract classes: like interfaces, but for classes
// ^ can only contain property & method signatures, but no implemnetation
// ^ can not be instantiated, and must be derived from
astract class Poop {
  abstract iPoop(): string;
}
class WhoPoops extends Poop {
  iPoop() { return 'yes' }
}

// generic classes
// same features as generic interfaces
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}
const b = new Box("hello!");

// inheritance
interface Poop() {}

// implements:  check that the class can be treated as the interface type
// ^ i.e. has the same props & method signatures
// ^ It doesn’t change the type of the class or its methods at all
// ^ optional interface properties arent created on the class
class Boop implements Poop, Shoop, Doop {}

// extends: derived class has all the props & methods of base classes
// ^ even optional props, unlike interface implementations
class A extends B,C,D {}

```

### modules

- ES Modules: aka ES6 Modules; the default module implementation, i.e. import/export
  - a file containing import, export, or top level await is an ES6 module
    - receive their own private scope
  - all other files are scripts
- commonjs: oldschool module implemnetation, i.e. module.exports
- scripts: contents are available in the global scope (omg remember this!) and do not receive their own (closure) scope
  - typescript scripts: assumed you'll either use
    - the `outFile` compiler option to join multiple input scripts into a single output file
    - use multiple script tags to load script files (in the correct order!)
- scope: visibility of declarations (e.g. vars) and who can access them and how
  - modules: only exported declarations are accessible outside the module
  - scripts: all declarations are accessible (unless concealed by some other mechanism)
- typescript module considerations
  - syntax: what syntax do i want ot use to import/export things?
  - module resolution: what is the relationship between module names/paths and files on disk?
  - module output target: what should my emitted javascript module look like?

```js
// modules

// turns a file without import statements into a module
export {};
```
