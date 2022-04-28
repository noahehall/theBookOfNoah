# typescript

- typescript

## links

- other

  - [flowcheatsheet](https://devhints.io/flow)
  - [meaning of set difference](https://mathworld.wolfram.com/SetDifference.html)
  - [complement set, identical to set difference](https://mathworld.wolfram.com/ComplementSet.html)

- react
  - [react type reference](https://flow.org/en/docs/react/types/)
  - [react types source code](https://github.com/facebook/react/blob/main/packages/shared/ReactTypes.js)
- typescript
  - [react children with typescript](https://www.carlrippon.com/react-children-with-typescript/)
  - [fn components with typescript](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/)

## react quickies

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

### best practices

- always

  - when using an object as a map, always use flows `indexer property`
    - it allows reads and writes using any key that matches the indexer key type
  - reusability
    - class types, type aliases, and interfaces should be defined as parameterized generics if reusability is intended
      - this should also alieviate some of the extra work around defining your type definitions
      - always include a default when parameteriing your generics
  - intersection types
    - use them when a fn can return different types based on input (see examples)
  - immutability
    - when you need to use a read-only version of an object|array, cast it via `$ReadOnly|$ReadOnlyArray` utility
      - allows you to define a mutable + immutable object|array type without having to re-define and annotate each key twice
    - use `$NonMaybeType<T>` to convert `null|undefined` types to exact types

- generally

  - you want to define your type separately from the object your annotating

    - as a `type` alias for exporting
    - as an `opaque` for internal use

  - to document external data

    - use super type for ALL of the params they contain
    - use opaque type subclass for the values you use
    - get the union of all the types out of the object via `externalTypes = ExternalTypes[$Keys<ExternalTypes>]`;
    - use flows inferred type of the value to create a type, e.g. `type thisType: typeof externalData = 56` // externalData is inferred to be a number
    - type cast difficult values to any, then to the desired type
      - this is an escape hatch, but sometimes you need to be free!

  - when you think you want a Class type, you likely want an Interface + implements
    - more benefits... cheap negatives
      - slightly extra work so the cost increases, but still worth it
    - interfaces allow to set readOnly (covariant) props
      - helps with immutability! #easyWin
    - interfaces allow you to set writeOnly (contravariant) props
      - helps with loosening types, e.g. during chaos engineering/monkey testing/api development! #easyWin
  - you want to use generics
    - refrain from using the `_` operator (to let flow infer the types)
      - it works as if you explicitly set the type
      - but its slower, and we like fast, #rickyBobby
  - dont refine your generics
    - instead add a type to them for clarity and specificity
      - ide follow this for all first-party code
      - This way you can keep the behavior of generics while only allowing certain types to be used.
    - if you instead choose type refinements, why bother with generics?
      - type refinements may still be useful for third-party code

#### gotchas

- the `?` before the type marks the type as maybe, i.e. null|undefined|type
- the `?` before the `:` in an object prop definition marks the prop as optional, i.e. can be missing from the object
  - `someObj = { optionalProp?: ?number}`
    - the prop is optional and can be missing
    - the value can be null|undefined|numbercovarian
- when you assign a type to a mutable variable (i.e. let|var)
  - you can only mutate the value to a compatible type
- when you dont assign a type to a mutable variable (i.e. let|var)
  - flow tracks all previously assigned types to its type
    - `let foo = 42, foo = 'hello;`
    - `let isOneOf: number | string = foo` <-- is true because of the previous assignments
- arrow functions may not have a this parameter annotation, as these functions bind their this parameter at the definition site, rather than the call site.
- Classes operate as values & types
  - i.e. you can use a class name wherever you would a type definition
- flow accepts
  - contravariant inputs: less specific types passed in
  - covariant outputs: more specific types returned
- interfaces properties can be
  - invariant: read + write
  - covariant: read-only
  - contravariant: write-only
- flow doe snot infer generic types, you must annotate it as generic
  - flow may infer a type that is less polymorphic than you expect
- when you pass one type into another you lose the original type
  - e.g. passing a less specific type, where a more specific type was expected
    - flow forgets about the more specific type, and uses the less specific one
- Parameterized generics
  - works: classes (used as a type), type aliases, interfaces
  - errors: functions, function types

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

## basics

- todos

  - [constraints](https://www.typescriptlang.org/docs/handbook/2/functions.html)
    - constraints
    - specifying type arguments
    - guidelines for writing good generic functions

- skipped

  - [type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

- use cases
  - transpilation: down-level the output js to a specific JS release via the `target` option

### gotchas

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

### cheatsheet

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

/**
 * type examples
 * native types
 * number, string, bigint, boolean, symbol, null, undefined, object
 * typescript extensions
 * any: turns off the typechecker (wont produce errors)
 * unknown: the top type from which all inherit
 * object literal: e.g. { property: Type}
 * void: subtype of undefined, intended for use as a return type
 * never: when a union is reduced to no valid type, i.e. a state that shouldnt exist in your code
 * T[]: mutable arrays, shortcut for Array<T>
 * [T, T]: fixed-length mutable tuple, a subtype of T[]
 * (arg: T) => U: functions
 */

// type assertions
// the as TYPE must be more specific than the inferred type
const poop = {} as object;
// to coerce to any type, you need double assertions
const poop = ({} as any) as object;

// modifiers
type Modifiers {
  optional?: any, // requires checking if undefined before use
}

// basic types
let poop: string = "flush";
const direction: 'left' | 'right' = 'left'; // subtype  of primitives

// for objects, classes, fns
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
/**
 * composing types
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

// unions
// when a type can be any of the given types
type MyBool = true | false;
type someOpts = string | string[];

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

// intersections
type Combined = { a: number } & { b: string }; // combined == { a: number, b: string }
type Conflicting = { a: number } & { a: string }; // error
```

### typescript + react

- todos
  - [start here](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
  - [and here](https://www.typescriptlang.org/docs/handbook/react.html)

### tsc: typescript compiler

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
