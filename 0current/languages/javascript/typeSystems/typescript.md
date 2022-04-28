# typescript

- typescript
- bookmark: https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties
- todos
  - [constraints](https://www.typescriptlang.org/docs/handbook/2/functions.html)
    - constraints
    - specifying type arguments
    - guidelines for writing good generic functions
  - [mapping modifiers](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers)
- skipped
  - [type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

## links

- react
  - [react type reference](https://flow.org/en/docs/react/types/)
  - [react types source code](https://github.com/facebook/react/blob/main/packages/shared/ReactTypes.js)
- typescript
  - [react children with typescript](https://www.carlrippon.com/react-children-with-typescript/)
  - [fn components with typescript](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/)

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

```js
// calling a method on a numeric literal requires it to be in parentheses to aid the parser.
(1).toExponential();

// type aliases vs interfaces
// ^ Type aliases behave differently from interfaces with respect to recursive definitions and type parameters
// ^ interfaces can be extended via: interface Poop extends Flush
// ^ alias can be extended via intersection: type Poop = Flush & { ... }

// If some variant is not covered, the return type of a fn will be poop | undefined
type SomeType = "this" | "that" | "thisIsntCheckedWithinFn";
const someFn = (arg: SomeType) => {
  if (arg === "this") return "this";
  return arg;
};
// since we didnt cover all the cases, the return type will be string | undefined
const poop = someFn();

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

## react quickies

- todos
  - [start here](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
  - [and here](https://www.typescriptlang.org/docs/handbook/react.html)

```js


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

```js
/** imports */
import { value, Type } from "npm-package";
import { other, Types } from "./local-package";
import * as prefix from "../lib/third-package";
import f = require("single-function-package"); // how to import commonjs

/** exports */
// you can use export lists & direct exports in the same file
export { f }; // an export list
function f() { return g(); }
function g() {} // g is not exported
export function a { return g() } // a direct export

```

## tsc: typescript compiler

```js
pnpm add typescript // install tsc to node_modules
pnpm tsc somefile.ts // typecheck a specific file and output a .js file with the types removed
  --noEmitOnError // dont output files if errors exist
  --target es2015 // set which version of JS to downlevel to
// common compiler options
{
  compilerOptions: {
    "strict": true, // turn on all strict settings, can individually turn them off
  }
}
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
// to coerce to any type, you need double assertions
const poop = ({} as any) as object;

// modifiers
type Modifiers {
  optional?: any, // requires checking if undefined before use
}
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

### interfaces

```js
// preferred over types unless you need specific type features
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
// a fn where te type of the input relate to the type of the output
// ^ or where the types of two inputs relate in some way
// T === placeholder, for whatever type the caller sends
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
type StringArray = Array>string>;
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
