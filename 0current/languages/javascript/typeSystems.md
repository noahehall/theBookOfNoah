# TLDR

- typescript & flow docs

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
- flow
  - [remove typescript via babel](https://babeljs.io/docs/en/babel-preset-typescript)
  - [eslint-plugin-fb-flow](https://www.npmjs.com/package/eslint-plugin-fb-flow)
  - [getting started](https://flow.org/en/docs/getting-started/)
  - [library definitions](https://flow.org/en/docs/libdefs/)
  - [linting](https://flow.org/en/docs/linting/)
  - [types-first](https://flow.org/en/docs/lang/types-first/)
  - [how to type styled components](https://medium.com/maxime-heckel/https-medium-com-maximeheckel-how-to-efficiently-type-your-styled-components-with-flow-f43930a0dd2b)
  - [HOC](https://flow.org/en/docs/react/hoc/#toc-supporting-defaultprops-with-react-elementconfig)
  - [context](https://flow.org/en/docs/react/context/)
  - [children](https://flow.org/en/docs/react/children/)
  - [event handling](https://flow.org/en/docs/react/events/)
  - [use exact-by-default object type syntax](https://medium.com/flow-type/how-to-upgrade-to-exact-by-default-object-type-syntax-7aa44b4d08ab)
  - [utility types, definitely want to read this!](https://flow.org/en/docs/types/utilities/)
  - [generics](https://flow.org/en/docs/types/generics/)
  - [nominal & structural typing](https://flow.org/en/docs/lang/nominal-structural/#toc-nominal-typing)
  - [components](https://flow.org/en/docs/react/components/)
  - [eventually read all the links on this screen](https://flow.org/en/docs/lang/)
  - [generic types](https://flow.org/en/docs/types/generics/)
  - [type variance](https://flow.org/en/docs/lang/variance/)
  - [union types](https://flow.org/en/docs/types/unions/)<https://flow.org/en/docs/types/typeof/>
  - [typeof types](https://flow.org/en/docs/types/typeof/)
  - [managing flow & typescript in vscode](https://stackoverflow.com/questions/48859169/js-types-can-only-be-used-in-a-ts-file-visual-studio-code-using-ts-check)

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

## commonalities

### types

```js

  // modifiers
    // append propName! === not nullable
    // append propName? === undefined but not null
    // prepend ?someType === type | undefined | null

  // list of types
    // number
    // string
    // boolean
    // symbol
    // null for null
    // void for undefined
    // Array<string> | string[]
    // symbol
    // mixed (must be refined)
    // any (no type checking)
    // literals e.g. const poop: 'this'|'that';
    // unions e.g. const poop: string | number;
    // type combinations
        type a: number;
        type b: string
        type c: a | b;
        type d: a & b

  // variables and types
    const g: mixed = z; // you must refine this type via typeof or some other checker before usig
    const h: any = 1; // op out of all type checking,  refrain from this as best you can
      // ^ very careful when using this with an object, as all of obj props will now be any (leak!)
      // ^ guard against this by declaring the obj.prop values to a type for assignment


  // refining types
    const x: symbol | number = Symbol();
    if (typeof x === 'symbol')
      const y: symbol = x;
    else
      const y: number = x;

  // basic function
    function method(str: string, bool?: boolean, ...nums: Array<number>): void {}
    let method = (str: string, bool?: boolean, ...nums: Array<number>): void => {}
    function add(a: number, b: number): number {}
    // optional params can their set type, void, but NOT null
    function add(a?: number, b?: number): number | void {}
    // with default values, can be their set type, void, but NOT null
    function add(a: number = 2) {}
    // the return type is the same as whatever is passed into the function
    function identity<T> (value: T): T {}
    // required obj.value but but the value maybe null|undefined but must be declared
    // i.e. you have to pass the obj with value.type === numer|null|undefined
    function({ value }: { value: ?number })
    // to get around the issue, make the object.value optional, as well its type being the 'maybe'
    // lol dont let this catch u up bro!
    function({ value }: { value?: ?number })
    // the mixed type, use sparingly as it accepts anything!
    // you must 'refine' the type before returning a value else it throws
    function whatever(value: mixed) {
      switch (typeof value) {
        case 'string':
        // ...etc
      }

      // or like this
      if (Array.isArray(value))
      else if (value instanceof Event))
      // ...etc

      // or refine objects
      type A = { type: 'A' }
      type B = { type: 'B' }
      function blah(value: A | B ) {
        if (value.type === 'A')
        else // must be B
        // be careful when passing a refined type to another function
        // without types
        // it will invalidate the refinement ai the other function doesnt verify type
        // instead store the value before passing to silence flow errs if they occur
      }

      // save prop after refinement else flow throws err
      function method(value: { prop?: string }) {
        if (value.prop) {
          var prop = value.prop; // without this
          otherMethod(); // because of this
          prop.charAt(0); // <-- throws err here
        }
      }
    }


```

## typescript

- todos
  - [types vs interfaces](https://www.typescriptlang.org/play?e=83#example/types-vs-interfaces)
  - [handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### gotchas

```js
// calling a method on a numeric literal requires it to be in parentheses to aid the parser.
(1).toExponential();

// types vs interfaces
// ^ Type aliases behave differently from interfaces with respect to recursive definitions and type parameters

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

### basics

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
 * any: turns off the typechecker
 * unknown: the top type from which all inherit
 * object literal: e.g. { property: Type}
 * void: subtype of undefined, intended for use as a return type
 * T[]: mutable arrays, shortcut for Array<T>
 * [T, T]: fixed-length mutable tuple, a subtype of T[]
 * (arg: T) => U: functions
 */

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

## flow

```js
  // go here first: https://flow.org/en/docs/react/types/
  // then go here: https://emotion.sh/docs/typescript

  import Foo, { type Func } from 'my-module';
  const inexactObject = {};
  return (Object.freeze({...inexactObject}): castToExactType)
  // you dont need to annotate the return of render|stateless function
  // the default: () => React$Element<React$Node>
  // notice the syntax, you can use this anywhere
  // for passing props
  // const poop = styled.div<PropDef>`your css props`
  // Using a css block
  // const Image0 = styled.div<ImageProps>`
  //   width: ${props => props.width};
  //   background: url(${props => props.src}) center center;
  //   background-size: contain;
  // `
  // const Image0 = styled('div')<ImageProps>`
  //   width: ${props => props.width};
  //   background: url(${props => props.src}) center center;
  //   background-size: contain;
  // `

  // // Or with object styles
  // const Image1 = styled('div')<ImageProps>(
  //   {
  //     backgroundSize: 'contain'
  //   },
  //   props => ({
  //     width: props.width,
  //     background: `url(${props.src}) center center`
  //   })

  // or with components
  //   const Component: FC<ComponentProps> = ({ label, className }) => (
  //   <div className={className}>{label}</div>
  // )

  // const StyledComponent0 = styled(Component)`
  //   color: ${props => (props.label === 'Important' ? 'red' : 'green')};
  // `

  // const StyledComponent1 = styled(Component)({
  //   color: 'red'
  // })
  // @flow
  import typeof myNumber from './exports';
  import type Poop { OtherPoop }
  (value: CastType) // in typescript use as

  // $FlowFixMe[incompatible-return]
  blah: wrongtype

  [].filter(Boolean) > [].filter(x => x)

  // ensure to overload the typedefs
  // so the errors are better
  // never do: x: string | number | null
  // ^ the above is okay for simple arguments
  // ^ but never for complex arguments
  type Fn =
    & ((x: "string") => string)
    & ((x: "number") => number)
    & ((x: string) => null);

```

### flow usage

- `// @flow` typecheck this file
- `// @noflow` do not typecheck this file
- ignore the next line strategies
  - `// FlowFixMe` for type errors yo uintend to fix later
  - `// $FlowIssue` for type errors you think are flows fault
  - `// @FlowExpetedError` when you expect a type error
  - `// @FlowIgnore` when you want to ignore your code
  - `// $ExpectError` when you expect a type error, but not sure if it will be thrown or not

### flow config

- [include]
  - a path per line, accepts `*` and `**` globs
  - including a parent directory includes all child descendant directories
- [ignore]
  - a path per line, accepts OCaml regular expressoins
  - match against absolute paths so start each path with `.*`
    - <PROJECT_ROOT> === the project root, use in `ignore` section and dont use `.*`
  - processed after & override anything in `[include]` section
  - any file ignored must be `import|require`ed using `flow-typed`
    - instead add these to files to `untyped|declarations` section
- [untyped]
  - a path per line
  - matched against absolute paths so start each with `.*`
  - files to not typecheck, but still make requireable and importable
  - throw away types and treat modules as `any`
  -
- [libs]
  - a path per line
  - each pointing to type definitions
- [lints]
  - TODO: see linting link
- [options]
  - 1 option per line
  - omitted options use their default values
- [version]
  - specify support flow version
- [declarations]
  - path per line
  - use type information from thirdparty libraries without typing checking their contents
  - does not typecheck files
  - uses the signatures of all function, classes, etc. when checking other code

### errors and react types

```js
// handling errors
// @see https://flow.org/en/docs/errors/
// $FlowFixMe
// $FlowIssue[incompatible-type]
/* $FlowIgnore[prop-missing] some other text here */
/* $FlowFixMe[incompatible-cast] this
        is a multi-line
        comment */

/* $FlowIssue this is how you suppress errors inside JSX */
someCode("with errors, all previous lines apply only to this line");
```

#### function typing

```js
  // types
    // general types are capitlized
    // the below can be used to annotate a function, that has a .bar property
    type CallableObj = {
      (number, number): number,
      bar: string,
    }

  // function types
    (str: string, bool?: boolean, ...nums: Array<number>) => void
    // same thing but without names
    (string, boolean | void, Array<number>) => void
    // using it for a callback type
    function method(callback: (error: Error | null, value: string | null) => void) {}


  // functions with params
    // a function that accepts arbitrary functions
    function method(func: (...args: Array<any>) => any) {
      // func() can be called here with anything,
    }

    function method(param1: string, param2: boolean) {}
    // optional param ad ?: == missing|undefined|type but not null
    function method(optionalValue?: string) {}

  // rest params
    function method(...args: Array<number>) {}

  // function return type goes before the open braces
  // enforces that every branch of your function returns the same type
    function method(): string {}
    // async implies promise, so must always return a promise
    async function method(): Promise<number> {}

  // function this context
    // the first param must be this, and must have a type
    function method<T>(this: { x: T }) : T {
      return this.x;
    }

  // predicate functions
    // useful when for utility functions, e.g. that run assertions on params
    // the body must be expressions, i.e. no variable declarations
    // but may call other predicate functions
    function truthy(a, b): boolean %checks {
      return !!a && !!b;
    }

```

#### class typig & interface typing

```js
// Class
  class MyClass {
    method(this: interface{ x: string}) void {} // errors since x is not defined in the class
    prop: number;
    meth2() { this.prop = 42 }

    static someNum: number;
    static func: (number) => number;

    // must be typed within the class
    // even tho the definition is added outside the class
    static definedElseware: (number) => number;
    evenOnPrototype: number => number;
  }
  MyClass.definedElseware = someOtherFuncMatchingTypeDefinition;
  MyClass.prototype.evenOnPrototype = anotherFuncMatchingTypeDefinition;

  const myInstance: MyClass = new MyClass()
  (MyClass: MyClass); // Error - you must instantiate it
  (new MyClass(): MyClass); // Ok

  // class methods cannot be unound/rebound from the class on which they are defined
  const c = new MyClass();
    c.method; // ers
    const { method } = c; // errs
    c.method.bind({}); // errs

  // generics are parameterize for classes
  // you must pass a value for each parameeter
  class MyClass<A, B, C> {
    propA: A;
    method(val: B): C {}

    // or more likely
    constructor(a: A, b: B, c: C) {}
  }
  const myInstance2: MyClass<number, string, boolean> = new MyClass(1, '2', true);

  // Class<T>
  // given a type T represetning instances of a class C
  // ^ the type ClasS<T> is the type of the class C
    class Store {}
    class ExtendedStore extends Store {}
    class Model {}

    function makeStore(storeClass: Class<Store>) {
      return new storeClass();
    }

    (makeStore(Store): Store);
    (makeStore(ExtendedStore): Store);
    (makeStore(Model): Model); // error
    (makeStore(ExtendedStore): Model); // Flow infers the return type

    // for classes that take type params
    // ^ you must also provide the params
      class ParamStore<T> {
        constructor(data: T) {}
      }

      function makeParamStore<T>(storeClass: Class<ParamStore<T>>, data: T): ParamStore<T> {
        return new storeClass(data);
      }
      (makeParamStore(ParamStore, 1): ParamStore<number>);
      (makeParamStore(ParamStore, 1): ParamStore<boolean>); // failed because of the second parameter





// interfaces allow you to reuse type definitions across classes
// to annotate their structure: methods & props
  interface Serializable {
    serialize(): string;
    property: string;
    property?: string;
    [key: string]: number; // indexer property
    +readOnlyProp: number | string; // covariant
    -writeOnlyProp: number | string; // contravariant

  }
  class Foo {
    serialize() { return '[Foo]'; }
  }

  class Bar {
    serialize() { return '[Bar]'; }
  }
  const foo: Serializable = new Foo(); // Works!
  const bar: Serializable = new Bar(); // Works!

  // always use implements
  // unless you need an escape hatch to make methods/props not match the interface
    class Foo implements Serializable {
      serialize() { return '[Foo]'; } // Works!
    }
  // but then again you just implement multiple interfaces
    class Foo implements Bar, Baz {}


  // refrain from anonymous interfaces
    (new Foo() : interface { a : number });

  // interface generics are parameterized
    interface MyInterface<A, B, C> {
      property: A;
      method(val: B): C;
    }
  // so make sure you pass the parameters it defines
  const val: MyInterface<number, boolean, string> = {
    foo: 1,
    bar: true,
    baz: 'three',
  };

  // covariant & contravariant interface props
  interface Invariant {  property: number | string }
  interface Covariant { +readOnly: number | string }
  interface Contravariant { -writeOnly: number }
    // covariant explanation
      // you cannot write to a covariant interface property
        function method2(value: Covariant) {
          value.readOnly;        // Works!
          value.readOnly = 3.14; // Error!
        }
      // you cannot assign a lecoveriantss specific type to a more specific type
        var x : { property : number } = { property : 42 };
        var y : { readOnly : number } = { readOnly : 42 };
        var value1: Invariant = x; // Error! both are invariant, but different types
        var value2: Covariant = y; // Works! both are covariant, but why is less specific (only number, while the interface is number|string)
    // contravariant explanation
      // you can read a contravariant interface property, but not write
      interface Invariant {  property: number }
      var value1: Invariant     = { property: numberOrString };  // Error! it is more specific than invariant of only number
      var value2: Contravariant = { writeOnly: numberOrString }; // Works! it is less specific than contravariant, cant be mutated after instantiatian of only number



```

#### object typing

```js
  // objects
  // accessing a prop undefined on an object usually returns undefined, it flow it throws
    // in flow it throws
    const obj1: {
      prop1: string, // required
      prop2?: number, // optional prop: missing|undefined|type
      prop3: ?number, // optional value: prop is required, but value undefined|null|type

      // ..etc
    } = {
      prop1: 'hello',

      // ...etc
    }

  // object properties
    // optional props can be their set type, void, but NOT null
    { propName: type, optionalProp?: type }

  // generic object type
    const someObj: {}
    const someObj: {[key: string]: any}
    // example fn that accepts an object, e.g. props in react
      function method(props: {}) {};
      function method(props: {[key: string]: any }) {};

  // objects with methods
    const obj2: {
      meth1: (string, number) => string
    } = {
      // this can be redefined later
      meth1: (a, b) => a,
      // this cannot be redefined due to using method syntax
      meth1(a, b) { return a },
    }

    // objects created with properties are sealed objects, so you cant add props after creation
    const obj3 = { a, b }
    // objects created without properties are unsealed objects
    const obj4 = {}

  // exact shorthand
    // exact object types cannot be used to annotate objects with extra propreties
    type ExactObject: {| foo: string, bar: number |}
    // inact object types can be used to annotate objects with extra properties
    type InExactObject: { foo: string, bar: number }
    type InExactObject: { foo: string, ...} // preferred as its explicit we expect additional props
      const objError: ExactObject = { foo, bar, extraProp }
      const objOk: InExactObject = { foo, bar, extraProp }

    type obj1: {| foo: string |}
    type obj2: {| bar: string |}
    type objErr1: obj1 & obj2; // throws, use spread instead
    type obj3: {| ...obj1, ...obj2 |} // always do this for object intersectinos
  // longform $exact, is identicalto shorthand
  // can be used interchangbly
    type ExactUsr = $Exact<{name: string}>;

  // indexer property
  // use whenever you dont know what the key name will be
  // but expect heavy i/o
  // be careful there is no type checking on indexer property values!
    // string is the indexer property
    // permits i/o on any key that is a string, and its value is a number
    const someObj: { [string]: number } = {}
      someObj['a'] = 1;
      someObj['b'] = 2;
    // you can optional label the indexer key for documentation purposes
    const someObj: = [i: number]: string } = {}
      someObj[0] = 'a'
      someObj[1] = 'b'

  // $ReadOnly<T>
    // only for object types, @see $ReadOnlyArray
    // represents the read-only version of a given object type
    // a read-only object type is an object type whose values are all read-
    // manually
    type ReadOnlyObj = $ReadOnly<>{
      +key: any,  // read-only field, marked by the `+` annotation
    }>;
    // automatic: by using an exiting type definition
    type props = {
      +key: any,
      +anotherKey: any,
    }
    type ReadOnlyProps = $ReadOnly<Props> // <--
    function render(props: ReadOnlyProps) {
      const {name, age} = props;  // OK to read
      props.age = 42;             // Error when writing
      // ...
    }

    // can also be used in pipeline
    type Obj = {
      +key: any,
    };
    // $objMap usually strips away any read/write annotations
    type MappedObj = $ReadOnly<$ObjMap<Obj, TypeFn>> // Still read-only

  // $Diff<A, B>
  // the type representing the set difference of A and B
  // i.e. all of A, and whatever is in B, use the definition in A instead
  // errs if b.something is not part of A, unless B.something is optional
  // A & B must both be object types
    // this is exactly what React uses to define the type of props accepted by a react component
    type Props = { name: string, age: number };
    type DefaultProps = { age: number };
    type RequiredProps = $Diff<Props, DefaultProps>;

    function setProps(props: RequiredProps) {
      // ...
    }

    setProps({ name: 'foo' });
    setProps({ name: 'foo', age: 42, baz: false }); // you can pass extra props too
    setProps({ age: 42 }); // error, name is required

    // with optional props
    type A = $Diff<{}, {nope: number}>; // Error
    type B = $Diff<{}, {nope: number | void}>; // OK

  // $Rest<A, B>
  // the runtime object rest operation
  // e.g. const {foo, ...rest} = obj
  // i.e. all of A's own properties that are not own properties of B
  // i.e. all properties in exact object types
  // but maybe not all properties in in-exact object types
    type Props = { name: string, age: number };

    const props: Props = {name: 'Jon', age: 42};
    const {age, ...otherProps} = props;
    (otherProps: $Rest<Props, {|age: number|}>);
    otherProps.age;  // Error

  // $Shape<T>
  // T is some object type
  // ^ that can be assined objects O
  // ^ that contain a subset of the properties included in T
  // ^^ the definition goes on into set theory
  // ^^ @see https://flow.org/en/docs/types/utilities/#toc-shape if thats your thing
  // but basically object type O must match all props & types in object type T
  // ^ i.e. must have the same shape,
  // ^^ but object O does not need all the properties of type T
    type Person = {
      age: number,
      name: string,
    }
    type PersonDetails = $Shape<Person>;

    const person1: Person = {age: 28};  // Error: missing `name`
    const person2: Person = {name: 'a'};  // Error: missing `age`
    const person3: PersonDetails = {age: 28};  // OK
    const person4: PersonDetails = {name: 'a'};  // OK
    const person5: PersonDetails = {age: 28, name: 'a'};  // OK
    const person6: PersonDetails = {age: '28'};  // Error: string is incompatible with number



  // $PropertyType<T, K>
    // deprecated
    // use indexed access types instead
    // $PropertyType<T, 'k'> is now T['k'].

  // $ElementType<T, K>
    // deprecated
    // use indexed access types instead
    // $ElementType<T, K> is now T[K]


```

#### array/tuple typing

```js
  // arrays
  // array type is just an array of any type
  // can be empty or not
    const arr: Array<number | string | boolean> = [] // i like this one better, or wtf use flow for?
    const arr: Array<mixed> = ['a', 1, false] // be more specific when you can, see above
  // shorthand
    const arr: number[] = [1, 2, 3]
    // optional array, but array elements cannot be null, while the the array itself can be
      const arr: ?number[] = []
        const arr: ?Array<number> = [] // same as above
    // array cannot be null, but its elements can be
      const arr: (?number)[] = []
        const arr: Array<?number> = [] // same as above,

  // $ReadOnlyArray<T>
  // supertype of all arrays, tuples
  // a readonly array is a type that cannot be modified, but can be passed around!
  // generally use $ReadOnlyArray<T> wherever you appreciate immutability
  // as you dont have to refine the type when passing it around (i.e. manually check for type)
    const readonlyArray: $ReadOnlyArray<{x: number}> = [{x: 1}];
      readonlyArray[0] = {x: 42}; // Error!
      readonlyArray[0].x = 42; // OK

  // tuples
  // any array defined as [type, type, type] is a tuple
  // if you mutate the tuple, the new value must match the index type
    let tup1: [number] = [1];
    let tup2: [number, boolean] = [1, 2]
      // etc with up to 3 items


  // array of object types
  type ArrayObjectTypes = Array<{
    items: {
      metadata?: { // metadata is an optional type, its children could be void
        title: string,
        completed: boolean,
      },
    },
  }>,
```

#### union typing

```js
  // union types
  // types joined together by |
  // indicating a value can be any one of the set
  // you must refine each type part of the union (else err)
    function toStringPrimitives(value: number | boolean | string) {
      return typeof value === 'number'
        ? Stirng(value)
        : typeof value === 'boolean'
        ? String(value)
        : value
    }
    toStringPrimitives(1 || true || 'three') // works!

  // union type alias
    type Foo =
      | Type1
      | TypeX;

  // disjoint union, same property but inexact type
  // can have an arbitrary amount of extra props on the value objects
    // must be keyed of the EXACT same property, e.g. `success`
      type Success = { success: true, value: boolean };
      type Failed = { success: false, error: string };
      type Almost = { ignored: true, reason: string } // will throw err because theres no `success` if used as a type part of a disjoint union
      type Response = Success | Failed;
      function handleResponse(response: Response) {
        if (response.success) {
          var value: boolean = response.value; // Works! because flow knows success === true
        } else {
          var error: string = response.error; // Works! because flow knows Response is either Success || Failed
        }
      }

    // enum of suits
    type Suit = "Diamonds" | "Clubs" | "Hearts" | "Spades";
    const clubs: Suit = 'Clubs';

  // disjoint union, different properties but exact type
  // value objects must match each type exactly, no extra properties
    type Success {| success: true, value: boolean |};
    type Failure {| error: true, message: stirng |}; // works because there is no type clashing due to the their exact annotations
    type Response = Success | Failure
```

#### intersection typing

```js
  // intersection types
  // types joined together by &
  // indicating a value must be the columnination of the types
    type A = { a: number };
    type B = { b: boolean };
    type C = { c: string };
    type AB = A & B; // AB is a columnination of A and B
    type ABC = AB & C; // ABC is a columnination of A, B, and C
    function method(value: A & B & C) { // could just be ABC
      // you dont need to refine each type part of the intersection
      var a: A = value;
      var b: B = value;
      var c: C = value;
    }
    method({ a: 1 }); // Error! because method requires the intersection ABC
    method({ a: 1, b: true }); // Error! see above
    method({ a: 1, b: true, c: 'three' }); // Works!

    // intersectin of fn types
    // use whenever a fn returns different results based on its input
    // the () around the arrow fns are necessary
    // + to override the precedence of the arrow constructor over the intersection
      type Fn =
        & ((x: "string") => string)
        & ((x: "number") => number)
        & ((x: string) => null);
      declare const overloadedFn: Fn;
      const n: string = fn("string"); // okay
      const n: number = fn("number"); // okay
      const n: boolean = fn("boolean"); // error: null is incompatible with number

      // alternative syntax to create an overload fn
      // declare them one after the other
        declare function fn(x: "string"): string;
        declare function fn(x: "number"): number;
        declare function fn(x: string): null;

    // intersection of object types
    // this will merge all their properties together
    // flow picks the first one if duplicates are found
      type One = { foo: number };
      type Two = { bar: boolean };
      type Both = One & Two;
      var value: Both = {
        foo: 1,
        bar: true
      };




```

#### aliase and opaque alias types

```js
// type aliases
// for creating reusable types use the `type` keyword
type someType = {
  foo: number,
  // ...etc
};
const someThing: someType = {};

// generic type aliases
type someType<A, B, C> = {
  foo: A,
  bar: C,
  baz: C,
};
const someThing: someType<number, string, boolean> = {
  foo: 1,
  bar: true,
  bax: "three",
};

// opaque type aliases
// do not allow access ot their underlying type
// outside the file their defined (but they still can be exported)
opaque type someType = {};
// can have a super type, super useful
opaque type someType: SuperType = {};
// helpful extended example
opaque type StringAlias = string;
opaque type ObjectAlias = {
  property: string,
  method(): number,
};
opaque type UnionAlias = 1 | 2 | 3;
opaque type AliasAlias: ObjectAlias = ObjectAlias;
opaque type VeryOpaque: AliasAlias = ObjectAlias;

// subtyping constraint allows the opaque type to be used as a supertype (i.e. nominal type/argument)
// when imported into other files
export opaque type ID: string = string;
// without subtyping all of the following throw
(0: NumberAlias); // Error: 0 is not a NumberAlias!
function convert(x: NumberAlias): number {
  return x; // Error: x is not a number!
}
// with subtyping everything is okay
function formatID(x: ID): string {
  return "ID: " + x; // Ok! IDs are strings.
}
function toID(x: string): ID {
  return x; // Error: strings are not IDs.
}
// can also have their own generics
opaque type MyObject<A, B, C>: { foo: A, bar: B } = {
  foo: A,
  bar: B,
  baz: C,
};
```

#### generic types catchall

```js
  // generic types
  // generally genreic type syntax is explained
  // next to the particular data type
  // hwever this contains a general overview
  // can be used wihtin fns, fn types, classes, type alias, and interfaces

  // generic functions
  // place the type parameter list <T> before the fn parameter list
    function name<T> (param: T): T {}
    function<T> (param: T): T {}
    // arrow fn
      // <T>(param:T) => T <-- this fks up my markdown editor
    // annotate a fn that is another fns argument as generic
      function method(someFn: <T>(param:T) => T) {}
      type IdentityWrapper = {
        func<T>(T): T
      }
    // example use of generic function
    function genericIdentity<T> (value: T): T { retirm value }
    function identity(value) { return value; } // wont work without type annotation
      const bad: IdentityWrapper = { func: identity }; // Error! identity has no type annotation
      const good: IdentityWrapper = { func: genericIdentity }; // Works!


  // generic classes
  // place the type parameter list before the class body
    class SomeClass<T> {
      prop: T;
      constructor(param: T) {
        this.prop = param
      }
      method(): T { return this.prop }
    }

  // generic type aliases
    type SomeType<T> = {
      foo: T,
      bar: T,
    };

  // generic interfaces
    interface SomeInterface<T> {
      foo: T,
      bar: T,
    }

  // supplying type arguments to callables
  // give type arguments for their generics directly in the call
    function poop<T>(param: T): T {}
    // and call it specifying the type
      poop<string>("hey"); // works!
    // use `_` operator to let flow infer some/all of the type arguments
      class GenericClass<A, B, C> {}
      const instance = new GenericClass<_, string, _>() // works!

  // behavior of generics
    // generics act like variables
    // use them wherever they are in scope
      // this is particulare cool as the syntax is super expressive
      function poop<T> (value: T): () => T {
        // can use the generic T declared in the parent scope
        return function(): T { return value }
      }

      // generics can be named anything
      // and the gneeric list can contain an arbitrary amount
      function identity<A, B, POOP> (x: A, z: B, flush: POOP) {}

    // generic values are tracked
    // everywhere you use them flow asserts the correct type
      function identity<T> (value: T): T {
        return 'oops'; // Error! return must be a T!

        value = "foo"; // Error! value must be a T!
        return value;  // Error! see above about return type
      }

      // even tracked when assigned
      let one: 1 = identity(1); // works!
      let two: 2 = identity(2); // works!
      let three: 3 = identity(42); // Error! 3 = type, 42 = value, 3 != 42

  // adding types to generics
    // relies on type refinements
    function logFoo<T>(obj: T): T {
      console.log(obj.foo); // Error! because .foo is not a property of T

      if (obj && obj.foo) {
        console.log(obj.foo); // Works. because of the && type refinement
      }
    }
    // adds a type to the generic
    function logFoo<T: { foo: string }>(obj: T): T {
      console.log(obj.foo); // Works! because of added type T.foo
      return obj;
    }
    logFoo({ foo: 'foo', bar: 'bar' });  // Works! T.foo is typed
    logFoo({ bar: 'bar' }); // Error! bar does not exist on generic T

  // generic types act as bounds
  // demonstrates having a value bound to a generic type
    // see reason for error below
      function identity(val: string): string {
        return val;
      }
      let foo: 'foo' = 'foo'; // Works! because 'foo' is a string
      let bar: 'bar' = identity('bar'); // Error! because inferred type string with specific value 'bar' is more specific than the return of identity (which is string, but any value)
    // does not error, because param is less specific
      function identity<T: string>(val: T): T {
        return val;
      }
      let foo: 'foo' = 'foo'; // Works! see above
      let bar: 'bar' = identity('bar'); // Works! because generic T has type string + return value is specified, and the param is less specific
    // errors because using value bound to generic in a more specific way
    // by assign it to explicit value 'bar' with (inferred type string)
      function identity<T: string>(val: T): T {
        let str: string = val; // Works!
        let bar: 'bar'  = val; // Error!
        return val;
      }
      identity('bar');

  // Parameterized generics
  // allow you to pass types in like arguments to a function
    // polymorphic object type, aka type alias
      type Item<T> = {
        prop: T,
      }
      let item: Item<string> = {
        prop: "value"
      };
    // polymorphic class type
      class Item<T> {
        prop: T;
        constructor(param: T) {
          this.prop = param;
        }
      }
      let item1: Item<number> = new Item(42); // Works! because you specify the generic T as number
      let item2: Item = new Item(42); // Error! because generic T does not have a type
    // polymorphic interface type
      interface HasProp<T> {
        prop: T,
      }
      class Item {
        prop: string;
      }
      (Item.prototype: HasProp<string>); // Works! because HasProp.T generic is given a type of string which matches class.Item.prop type
      // $ExpectError
      (Item.prototype: HasProp); // Error! because HasProp.T generic doesn thave a type, while class.Item.prop is a string

    // parameterized generic defaults
      type Item<T: number = 1> = { // default type + value
        prop: T,
      };
      let foo: Item<> = { prop: 1 }; // MUST include <>, same idea with the () for a function
      let bar: Item<2> = { prop: 2 };

  // variance sigils
  // inform flow how you intend to use a generic type
  // + === behave covariantly (looser)
  // - === behave contravariantly (stricter)
    type GenericBox<+T> = T;
    var x: GenericBox<number> = 3;
    (x: GenericBox<number| string>); // works because of +T



```

#### indexed access types

```js
  // indexed access types
  // allow you to ge tthe type of a property from an object, array or tuple type
    // use these wherever you would $PropertyType and $ElementType utility types
    // pretty much create aliases for other types
    type Cat = {
      name: string,
      age: number,
      hungry: boolean,
    };
    // set the type via literal 'hungry'
    type Hungry = Cat['hungry'] // Hungry === Cat.hungry === boolean

    // set the type via another type
    type AgeProp = 'age';
    type Age = Cat[AgeProp] // Age === Cat.age === number

    // set the type via aria indices (aria indices type === number)
    type CatNames = Array<string>;
    type CatName = CatNames[number]; // CatName === Array.pop() === string

    // set the type via tuples elements type
    type Pair = [string, number];
    type name: Pair[0] = 'whiskers'; // name === Pair[0] === string
    type age: Pair[1] = 3; // age === Pair[1] === number

    // set the type as a union of all the types of soe object
    type Values = Cat[$Keys<Cat>]; // string | number | boolean

  // optional indexed access types
  // work like optional chaining
  // the type becomes the found type || void
    type T = Obj?.['prop']; // T === type | void
```

#### typeof types

```js
  // typeof types
  // inherit the behavior of flows inference
  // you take the results of flows inference and asserting it as a type
  let ThisThing: typeof Otherthing = 'foo': // works if Flow infers OtherThing as string

```

#### type casting expressions

```js
// note: everything commented as it breaks syntax highlighting
// type casting expressions
// asserting and casting values to different types
// can appear anywhere an expression can appear
// values can only be casted
(value: Type); // value is now Type
// let obj = { prop: (value: Type) };
// let arr = ([ (value:Type), (value: Type) ]: Array<Type>);
(2 + 2: number);

// you can assert type of value via type assertions
let value = 42;
(value: 42); // works
(value: number); // works
(value: string); // Error. because values can only be casted to less specific types
let newValue = (value: number);
(newValue: 42); // Error: new value is less specific number
((newValue: any): string); // Works; first casting to any allows you to subseqently cast to anything
```

#### module types

```js
  // module types
  // share types between modules (files)
  // exportable: type aliases, interfaces & classes
    // importing and exporting types
      // @flow <-- make sure this is at the top of each file
      export default class Foo {};
      export type MyObject: {};
      // https://flow.org/en/docs/types/modules/
      export interface MyInterface {}
      // in some other file
      import type Foo, { MyObject, MyInterface } from './poop.mjs';

    // importing & exporting values
    // the type of values using flows typeof operator
      // @flow <-- ensuer this is at the top  of the file
      const myNumber = 42;
      export defualt myNumber;
      export class MyClass {};
      // in some other file
      import typeof myNumber form './poop.mjs';
      import typeof { MyClass } from './poop.mjs';

  // $Exports<T>
  // automatically import the types from a module
    // the following are equivalent
    import typeof * as T from 'my-module';
    type T = $Exports<'my-module'>;
    // however, $Exports allows you to export th type
    // ^ on the same line
    export type T = $Exports<'my-module'>;



```

#### comment types

```js
// Comment types
// use flow with plain javascript code
// enables type checking without having to compile your files

// type includes
// includes the code ito the syntax tat flow sees
// add the double colon to the start of the comment
/*:: <-- the double colon
    type MyAlias = {
      foo: number,
      bar: boolean,
      baz: string,
    };
    */
class MyClass {
  /*:: prop: string; */
}
// alternative to double colon is flow-include
class MyClass {
  /*flow-include prop: string; */
}

// type annotation
// does not support optional function params
function method(value /*: MyAlias */) /*: boolean */ {
  return value.bar;
}
```

#### utility types

```js
// utility types
// $Keys<T>
// use the following keys as a type
const countries = {
  US: "United States",
  IT: "Italy",
  FR: "France",
};
// equivalent to type Country = 'US' | 'IT' | 'FR';
type Country = $Keys<typeof countries>;
// use it
const italy: Country = "IT";
const nope: Country = "nope"; // 'nope' is not a Country

// $Values<T>
// use the following values as a type
type Props = {
  name: string,
  age: number,
};
// The following two types are equivalent:
type PropValues = string | number;
type Prop$Values = $Values<Props>;

const name: Prop$Values = "Jon"; // OK
const age: Prop$Values = 42; // OK
const fn: Prop$Values = () => {}; // Error! function is not part of the Prop (i.e. Prop$Values) union type

// $NonMaybeType<T>
// converts a type T to a non-maybe type
// i.e. the values of $NonMaybeType<T>
// + are the values of T except for null and undefined
type MaybeName = ?string;
type Name = $NonMaybeType<MaybeName>;

("Gabriel": MaybeName); // Ok
(null: MaybeName); // Ok
("Gabriel": Name); // Ok
(null: Name); // Error! null can't be annotated as Name because Name is not a maybe type

// $ObjMap<T, F>
// calls the function F on every property (at the type level) of T
// usecases: expressing the return type of functions that manipulate ojects values
// ^ e.g. to provide the return type of blurdbirds Promise.props fn
// and returns the resulting object
// run: takes an object of thunks as input
// ^ purpose is to run all the thunks and return an object made of values
// also note the very clever way of using Object.assign
function run<O: { [key: string]: Function }>(o: O) {
  return Object.keys(o).reduce(
    (acc, k) => Object.assign(acc, { [k]: o[k]() }),
    {}
  );
}
// ^the keys are the same, but the values are no longer thunks
// let's write a function type that takes a `() => V` and returns a `V` (its return type)
type ExtractReturnType = <V>(() => V) => V;

declare function run<O: { [key: string]: Function }>(
  o: O
): $ObjMap<O, ExtractReturnType>;

const o = {
  a: () => true,
  b: () => "foo",
};

(run(o).a: boolean); // Ok
(run(o).b: string); // Ok
// $ExpectError
(run(o).b: boolean); // Nope, b is a string
// $ExpectError
run(o).c; // Nope, c was not in the original object

// $OjMapi<T, F>
// similar to ObjMap<T,F >
// + but fn F will be called with both the key and value types of the object type T
const o = {
  a: () => true,
  b: () => "foo",
};
type ExtractReturnObjectType = <K, V>(K, () => V) => { k: K, v: V };

declare function run<O: Object>(o: O): $ObjMapi<O, ExtractReturnObjectType>;

(run(o).a: { k: "a", v: boolean }); // Ok
(run(o).b: { k: "b", v: string }); // Ok
// $ExpectError
(run(o).a: { k: "b", v: boolean }); // Nope, a.k is "a"
// $ExpectError
(run(o).b: { k: "b", v: number }); // Nope, b.v is a string
// $ExpectError
run(o).c; // Nope, c was not in the original object

// $TupleMap<T, F>
// takes an iterable type (e.g. Tuple|Array)
// and returns the iterable type obtained by mapping
// ^ the type of each value in the iterable with the
// ^^ provided fn type
// analogous to js fn Map
// e.g. if the aforementioned run fn takes an array
// ^ of fns instead of an obj of fns
// Function type that takes a `() => V` and returns a `V` (its return type)
type ExtractReturnType = <V>(() => V) => V;

function run<A, I: Array<() => A>>(iter: I): $TupleMap<I, ExtractReturnType> {
  return iter.map((fn) => fn());
}

const arr = [() => "foo", () => "bar"];
(run(arr)[0]: string); // OK
(run(arr)[1]: string); // OK
(run(arr)[1]: boolean); // Error

// $Call<F, T...>
// represents te result of calling fn F with 0/more
// ^ arguments T
// analogous to calling Function.prototype.call
// ^ but at the type level
// ^ i.e. that function type calls happen statically
// ^^ i.e. not at runtime
// usecases
// ^ make calls in type-land that you would otherwise have to do at runtime
// ^^ the type-land calls happen statically and will be erased at runtime
// example 1
// Takes an object type, returns the type of its `prop` key
type ExtractPropType = <T>({ prop: T }) => T;
type Obj = { prop: number };
type PropType = $Call<ExtractPropType, Obj>; // Call `ExtractPropType` with `Obj` as an argument
type Nope = $Call<ExtractPropType, { nope: number }>; // Error: argument doesn't match `Obj`.

(5: PropType); // OK
(true: PropType); // Error: PropType is a number
(5: Nope); // Error
// example 2
// Takes a function type, and returns its return type
// This is useful if you want to get the return type of some function without actually calling it at runtime.
type ExtractReturnType = <R>(() => R) => R;
type Fn = () => number;
type ReturnType = $Call<ExtractReturnType, Fn>; // Call `ExtractReturnType` with `Fn` as an argument

(5: ReturnType); // OK
(true: ReturnType); // Error: ReturnType is a number
// example 3
// Extracting deeply nested types:
type NestedObj = {|
  +status: ?number,
  +data: ?$ReadOnlyArray<{|
    +foo: ?{|
      +bar: number,
    |},
  |}>,
|};

// If you wanted to extract the type for `bar`, you could use $Call:
type BarType = $Call<
  <T>({
    +data: ?$ReadOnlyArray<{
      +foo: ?{
        +bar: ?T,
      },
    }>,
  }) => T,
  NestedObj
>;

(5: BarType);
(true: BarType); // Error: `bar` is not a boolean
// example 4
// Getting return types:
function getFirstValue<V>(map: Map<string, V>): ?V {
  for (const [key, value] of map.entries()) {
    return value;
  }
  return null;
}

// Using $Call, we can get the actual return type of the function above, without calling it at runtime:
type Value = $Call<typeof getFirstValue, Map<string, number>>;

(5: Value);
(true: Value); // Error: Value is a `number`

// We could generalize it further:
type GetMapValue<M> = $Call<typeof getFirstValue, M>;

(5: GetMapValue<Map<string, number>>);
(true: GetMapValue<Map<string, boolean>>);
(true: GetMapValue<Map<string, number>>); // Error: value is a `number`
```

#### catchall

```js
  // deprecations
    $SuperType<T>
    $Subtype<T>
    (*) // existential type

  // refining maybe types
  function poop(value: ?number) {
    // this checks both null && undefined
    if (value != null) return value * 2;
    // or more readable but less expressive in my opinion
    if (typeof value === 'number') return * 2;
  }

  // *variance* examples
  // speghetti bless javascript: we can do what we want due to weak typing
  // InvariantOf does not exist, only for explanation, see flowdocs for more info
    // invariance
    function method(value: InvariantOf<City>) {...}
    method(new City());         // okay
    method(new Noun());         // error... no supertypes
    method(new SanFrancisco()); // error... no subtypes

    // covariance
    function method(value: CovariantOf<City>) {...}
    method(new City());         // okay
    method(new SanFrancisco()); // okay
    method(new Noun());         // error... no supertypes

    // contravariance
    function method(value: ContravariantOf<City>) {...}
    method(new Noun());         // okay
    method(new City());         // okay
    method(new SanFrancisco()); // error... no subtypes

    // bivariance
    function method(value: BivariantOf<City>) {...}
    method(new Noun());         // okay
    method(new City());         // okay
    method(new SanFrancisco()); // okay


  // cloning an object via any
  // you can only cast values to less specific types
  // so we clone via any, which allows to then assign any type
    // copypasta: demonstration purposes only
    function cloneObject(obj) {
      (obj: { [key: string]: mixed }); // << type validation on obj properties
      const clone = {};

      Object.keys(obj).forEach(key => {
        clone[key] = obj[key];
      });

      // fks up my markdown highlighting
      // return ((clone: any): typeof obj); // << type cast to any
    }

    // to validate the types coming in
      // this errs if any key is not a string
      // as the internal typeof obj also gets this annotation
      // which defeats the purpose of type casting to any
      function cloneObject(obj: { [key: string]: mixed }) { }

      // the correct way to annotate the cloneObject fn
      // you no longer need the internal type cast on object props
      function cloneObject<T: { [key: string]: mixed }>(obj: T): $Shape<T> {}

      // using clonedObject fn
      const clone = cloneObject({
        foo: 1,
        bar: true,
        baz: 'three'
      });

      (clone.foo: 1);       // Works!
      (clone.bar: true);    // Works!
      (clone.baz: 'three'); // Works!


```
