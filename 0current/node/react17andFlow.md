bookmark: <https://flow.org/en/docs/types/utilities/#toc-readonly>
  start at the example

reference1: <https://github.com/facebook/react/blob/main/packages/shared/ReactTypes.js>
reference2: <https://flow.org/en/docs/react/types/>

# TODOz

- [enabling indexed access types](https://flow.org/en/docs/types/indexed-access/)
  - i generally dislike prettier, but im not going to fight this battle
    - required: flow, flow-parser, prettier, @babel/parser
  - review and categorize`best practices`
- try to find the differences between the awesome `flowtype` and the less-spectacular `typescript`

# links

- other
  - [meaning of set difference](https://mathworld.wolfram.com/SetDifference.html)
  - [complement set, identical to set difference](https://mathworld.wolfram.com/ComplementSet.html)

- react
  - [react docs](https://reactjs.org/docs/getting-started.html)
  - [react top level api ref](https://reactjs.org/docs/react-api.html)
  - [handling events](https://reactjs.org/docs/handling-events.html)
  - [synthetic events](https://reactjs.org/docs/events.html)
  - [forms](https://reactjs.org/docs/forms.html)
  - [why not to use event delegation in react < 17](https://github.com/facebook/react/issues/13635)
  - [should i use event delegation in react](https://dev.to/thawsitt/should-i-use-event-delegation-in-react-nl0)
  - [discussion about event delegation github issue](https://github.com/reactjs/reactjs.org/issues/3543)

- flow
  - [remove typescript via babel](https://babeljs.io/docs/en/babel-preset-typescript)
  - [eslint-plugin-fb-flow](https://www.npmjs.com/package/eslint-plugin-fb-flow)
  - [getting started](https://flow.org/en/docs/getting-started/)
  - [library definitions](https://flow.org/en/docs/libdefs/)
  - [linting](https://flow.org/en/docs/linting/)
  - [types-first](https://flow.org/en/docs/lang/types-first/)
  - [react types](https://flow.org/en/docs/react/types/)
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

# TLDR

- a complete react17 study guide
- a complete flowtype study guide
- often required when switching context
- pairs well with
  - [frontendtech accessibility referece](./frontendtech_accessibility.md)
  - [web technologies directory](../web_technologies)
  - [javascript reference](../programming_languages/javascript)

-

# react

## best practices

- **ALWAYS**
  - decompose components for reusability
  - *displayName* are only useful in *dev* for debugging, as they should be obsfucated in prod
  - only use state for data that changes over time that impact rendering/data flow
    - put other non-props variables as instance props
  - compare changes if a method receives newProps & nextProps
    - usually you receive the old props because a risk of an infinite loop exists without the comparison
  - cancel fetches & subscriptions
    - never FETCH or subscribe without companion logic to cancel
  - keep render logic pure and idempotent
  - render a fallback UI when an error occurs
    - *static getDerivedStateFromError* > *componentDidCatch*
      - the latter should never be used for fallback UI
  - reading state values after update
    - componentDidUpdate > setState w/ callback > setState regular
      - setStage regular is asynchronous, not gauranted to have latest
      - setState with callback works, but is a one-off
      - aggregate all your logic related after update state values into *componentDidUpate*
  - bind event handlers in the constructor or use class fields syntax with an arrow function
    - never use arrow functions directly in the callback as
      - the component receives a new fn each time,
      - if passed to child components, will cause axtra rerenders

- **GENERALLY**
  - *PureComponent* > *shouldComponentUpdate* for auto shallow comparisons
  - import namespaces, [who the fk knows if it hinders/helps treeshaking?](https://github.com/airbnb/javascript/issues/1487)
    - [but it supremely saves us type with flow](https://flow.org/en/docs/react/types/)
  - You don’t need to annotate the return type of either your render() method or a stateless functional component

  - add a *useDebugValue* inside custom hook definitions to support dev experience but *ALWAYS* add a second formatting parm to defer expensive operations unless the hook is inspected
    - react doesnt recommend it for *EVERY* custom hook, but when did we ever follow directions?

  - use the setState + updator syntax if next props & state relies on prev props & state
    - or use a reducer for complex/advanced situations

  - when performing side effects (e.g. fetching, animation, etc)
    - after a component has been updated
      - *componentDidUpdate* > *static getDerivedStateFromProps*
    - before a copmonent has been updated
      - useEffect|useLayoutEffect
    -

  - recompute data when props change
    - any of the memoization options > controlled/uncontrolled with a key > *static getDerivedStateFromProps*

  - catching errors for logging
    - *componentDidCatch* > *static getDerivedStateFromEror*

- **WITH CAUTION**
  - call *setState* inside *componentDidMount* ONLY modals/tooltips need to measure other DOM nodes before rendering

- **NEVER**
  - dont use `create-react-class` as it autobinds methods which has a performance hit
    - instead use
      - `class properties` which will do the autobinding when built
      - bind methods in the constructor (u lazy bum)
      - use are functions for event handlers
        - and this is the only reason you need autobinding anyway

  - use mixins: react-team doesnt recommend it

  - copy props into state

  - use deep equality checks/JSON.stringify for comparisons
    - use *immutability-helper* instead

  - use *constructor* if when not binding instance methods (for event handlers) or initializing state

  - use the callback in *setState*; move that logic to *componentDidUpdate* as react recommends

  - use error boundaries for control flow
    - only for recovery

- **USE CASES**
  - use portals when rendering a child even when the parent has overflow hidden/z-index
    - e.g. dialogs, tooltips, modals, etc

## gotchas

- defaultProps only used for undefined props; e.g. null props will still be null (and wont use the value assigned in defaultprops)
- react events are camelCase and not lowercase
  - e.g. `onclick` === `onClick`
  - cannot return false to prevent default behavior
    - must call `preventDefault` explicitly
- by default all event handlers are trigged in the `bubbling` phase
  - to register event handlers for the capture phase, append `Capture`
    - e.g. `onClick` === `onClickCapture`
- pointer events are
  - not cross-browser compatible (like a normal SyntheticEvent)
  - not polyfilled
  - recommended to only be used via a third party pointer event polyfill

## terms

- pure components: never alter their inputs & are idempotent
- error boundaries
  - copmonents for catching errors in their children and dispplaying fallback content
  - any component can be an error boundary by defining either *static getDerivedStateFromError* or *componentDidCatch*
- error handling: exceptions thrown during rendering, life cycle methhods, or constructor call

## general

- class components: have state and life cycle methods

### DOM elements

### SyntheticEvent

- evenhandlers receive instances of `SyntheticEvnet`
- cross-browser wrapper around the UA native event

### Concurrent Mode

### Testing

## lifecycle methods (in order)

- mounting: component instance is being created and inserted into the DOM
  - *constructor*
    - when being created & before mounting
    - usescases: initialize state, bind instance methods for event handlers

  - *static getDerivedStateFromError*
    - invoked after an error is thrown in achild component
    - no side effects allowed (e.g. fetches)
    - for updating state

  - *static getDerivedStateFromProps*
    - right before the render method on initial and subsequent updates
      - fired on every render! use with caution
    - return an object to update state or null
    - doesnt have access to the component instance
      - move shared logic outside the class definition
    - usecases: when state depends on changes in props over time (e.g. deciding if a component should be animated in and out)
    -

  - *render*
    - only required method
    - return null to render nothing
  - *componentDidMount*
    - after component is rendered to the DOM
    - usecases: timers, async shit, interactionn with the browser

- updating: when a component instance is being rerendered; caused by a change to state/props/forceUpdate
  - *render*: see mounting section
  - *static getDerivedStateFromProps*: see mounting section
  -

  - *getSnapshotBeforeUpdate*
    - invoked before component updates are flushed to the dom
    - sends captured values to *componentDidUpdate* as third param
      - return null if nothing has changed
    - usecases: capture dom info (e.g. scroll position)
    -
  - *shouldComponentUpdate*
    - performance enhancement
    - receives cur + new props to be compared
    - not called for initial render OR after *forceUpdate*
    - does NOT prevent child components from rendering when THEIR props/state changes
    -

  - *copmonentDidUpdate*
    - immediately after update occurs
    - not called for the initial render
    - usecases: operate on the DOM, network requests AFTER comparing current & next props requires a new fetch
    - receives a third prop if *getSnapshotBeforeUpdate* is used

- unmounting: when a component is being removed from the DOM and destroyed
  - *componentWillUnmount*
    - before being destroyed
    - usescases: remove timers, canceling shit (e.g. fetches/subscriptions)

  - *componentDidCatch*
    - after an error has been thrown by a child component
    - called during commit phase & allows side effects
      - for logging errors (e.g. console|another system)
    - in dev
      - errors bubble up to window and can be handled by window.onerror/addeventListener
    - in prod
      - errors **DO NOT** bubble and you must catch them for logging

## instance props & methods

- *setState*
  - informs react state has changed & to asynchronously flush these changes to the DOM
  - queues a rerender for the calling component & its descendants
  - update the UI in response to events
  - react batches updates for performance; this is a **REQUSTE**
  - call setState **ONLY** when it differes from the previous state

- *forceUpdate*
  - use when the render method depends on data external to props/state
  - skips any checks in *shouldComponentUpdate* in the component and the components descendants
    - forces the entire component hierarchy to rerender

- *defaultProps*
- *displayName*
- *props*
- *state*
- *super(props)*
  - MUST be first line in the constructor else props will be undefined/random bugs n shit

## React; top-level api

- *React.Component*: have state and life cycle methods (PureComponent doesnt)

- *React.PureComponent*: no state/life cycle methods but shallow compares new & old props automatically (i.e. implement shouldComponentUpdate)

- *React.children*
- *cloneElement*
- *isValidElement*
- *React.Fragment*
- *React.createRef*
- *React.forwardRef*
- *React.lazy*
- *React.Suspense*

-

## hooks

- let you into react life cycle features from a functional component
- dont work inside classes
- only at the top level of functional components
- dont call inside loops, conditions or nested functions
- react tracks hooks via the order they are invoked

- *useState*
  - add local state to functional copmonents
  - doesnt shallow merge old & new state like setstate
    - it *REPLACES* the entire state!
  - can & should be declared multiple times to keep state simple when using this hook
  - pass a fn to setState fn if
    - *new* state depends on the *prev* state
    - initial state is the result of an expensive computation

- *useEffect*
  - for dat afetching, subscriptions, changing dom elements, i.e any side asynchronous side effect
  - runs on every render soo make sure to:
    - add used vars in the dependency array
    - use an if condition before invoking side effect logic
    - always return a function to handle cleanup when the component unmounts
    - use multiple effect hooks for each side effect
  - usecases:
    - any side effect, e.g. mutations, timers, logging, etc
    - *componentDidMount*
    - *componentDidUpdate*
    - *componentWillUpdate*
  -

- *useLayoutEffect*
  - synchronous version of *useEffect* that fires synchronously after all DOM mutations but before the browser has a chance to paint
    - in comparison to *useEffect* that fires asynchronously
  - allows you to memoize effects but requires all dependent variables used inside the effect hook to be listed as a dep
  - prefer *useEffect* as this hook blocks visual updates (because its sync and when it fires)
  - usecases:
    - see *useEffect*
    - *componentDidMount*, *componentDidUpdate*
    - read layout information from the DOM and synchronously re-render (e.g. updating scroll position)

- *useContext*
  - for global state thats accessible to any child component
  - forcibly rerenders all child components on update
  - can be at multiple levelsand the frist context.provider can intercept & handle it
    - think of the normal event bubbling logic

- *useReducer*
  - alternative to *useState* for:
    - complex objects
    - lazy initialization of state
    - advanced initialization of state
    - when next state depends on prev state
    - optimizing performance for components that trigger deep updates by passing a *dispatch* function instead of callbacks

- *useCallback*
  - returns a memoized callback to calculate a new value when its dependencies change
  - alternative to *useMemo* which provide the memoized value instead
  - usecases:
    - a child component needs the dispatch because it controls the dependency values
    -

- *useMemo*
  - returns a memoized vlaue when its dependencies change
  - runs during rendering
    - so **NO** side effects
  -

- *useRef*
  - returns a mutable ref object that exist sfor the lifetime of the component
  - gives you the *SAME* ref via *Object.is* logic
  - usecases:
    - needing to access a child imperetively; e.g. a dom node to set focus
    - keeping any mutable value around across renders
      - as it doesnt trigger a rerender when its value is mutated
  -

- *useImperativeHandle*
  - customizes the instance value expsosed to parent components when using *ref*
  - should be used with *forwardRef* when exporting *ANY* component that implements this hook
    - permits any consuming component to call `poop.current* to get a handle to the ref created in the component definition
  - react generally recommends staying away from this hook
  - usescases: whenever you need to write imperative code related to a *ref* object, e.g. a handle on a input dom element to handle focus

- *useDebugValue*

## ReactDOM: top level api

- *render*
- *hydrate*
- *unmountComponentAtNode*
- *findDOMNode*
- *createPortal*

- *ReactDOM.createPortal*: render children into a dom node that exist outside the hierarchy of the parent component
  - event bubbling still occurs in the parent components hierarchy regardless of where the child element exists in the brownser DOM hierarchy

  -

## ReactDOMServer: top level api

- *renderToString*
- *renderToStaticMarkup*
- *renderToNodeStream*
- *renderToSTaticNodeStream*

-

## react examples

  ```js
    /**
    * React
    */

    // synthetic events
      // contract
        eventHandler = e => {
          e.bubbles
          e.cancelable
          e.currentTarget // DOMEventTarget
          e.defaultPrevented
          e.eventPhase
          e.isDefaultPrevented()
          e.isPropagationStopped()
          e.isTrusted
          e.nativeEvent // DOMEvent
          e.persist() // deprecated in 17
          e.preventDefault()
          e.stopPropagation()
          e.target // DOMEventTarget
          e.timeStamp
          e.type
        }
      // types
        // clipboard events
          onCopy|Cut|Paste
            .clipboardData
        // composition events
          onCopisitionEnd|Start|Update
            .data
        // keyboard events
          onKeyDown|Press|Up
            .altKey|charCode|ctrlKey|
            .getModifierStatE(key)
            .key // acepts any values in the DOM level 3 Events spec
            .keyCode|locale|location|metaKey
            .repeat|shiftKey|which
        // focus events
          // called when the parent/descendant receives/loses focus
          onFocus|Blur
            .relatedTarget
        // form events
          onChange|Input|Invalid|Reset|Submit
          // TODO: see forms link
        // generic events
          onError|Load
        // mouse events
          onClick|ContextMenu|DoubleClick|Drag|DragEnd|DragEnter
          onDragExit|DragLeave|DragOver|DragStart|Drop|MouseDown
          onMouseEnter|MouseLeave|MouseMove|MouseOut|MouseOver|MouseUp
            .altKey|button|buttons|clientX|clientY|ctrlKey|
            .getModifierState(key)
            .metaKey|pageX|pageY|relatedTarget
            .screenX|screenY|shiftKey
        // pointer events 1
          // propagate from el.exited > el.entering
          // no capture phase
          onPointerEnter|Leave
        // pointer events 2
          onPointerDown|Move|Up|Cancel|Over|Out
          onGotPointerCapture
          onLostPointerCapture
            .pointerId|width|height|pressure|tangentialPressure
            .tiltX|tiltY|twist|pointerType|isPrimary
        // selection events
          onSelect
        // touch events
          onTouchCancel|End|Move|Start
            .altKey|changedTouches|ctrlKey
            .getModiferState(key)
            .metaKey|shiftKey|targetTouches|touches
        // ui events
          onScroll // does not bubble in react 17 to match UA behavior
            .detail|view
        // wheel events
          onWheel
            .deltaMode|X|Y|Z
        // media events
          onAbort|CanPlay|CanPlayThrough|DurationChange|Emptied
          onEncrypted|Ended|Error|LoadedData|LoadedMetadata|LoadStart
          onPause|Play|Playing|Progress|RateChange|Seeked|Seeking
          onStalled|Suspend|TimeUpdate|VolumeChange|Waiting
        // image events
          onLoad|Error
        // animation events
          onAnimationStart|End|Iteration
            .animationName|pseudoElement|elapsedTime
        // transition events
          onTransitionEnd
            .propertyName|pseudoElement|elapsedTime
        // other events
          onToggle



      // examples
        // detecting whether the element, or one of its decendents
        // received/lost focus
          onFocus={(e) => {
            if (e.currentTarget === e.target) {
              console.log('focused self');
            } else {
              console.log('focused child', e.target);
            }
            if (!e.currentTarget.contains(e.relatedTarget)) {
              // Not triggered when swapping focus between children
              console.log('focus entered self');
            }
          }}
          onBlur={(e) => {
            if (e.currentTarget === e.target) {
              console.log('unfocused self');
            } else {
              console.log('unfocused child', e.target);
            }
            if (!e.currentTarget.contains(e.relatedTarget)) {
              // Not triggered when swapping focus between children
              console.log('focus left self');
            }
          }}


    // instance methods
      // shallow merge a single prop into state
        setState({onlyUpdateThis: 'withThis'})
        setState((prevState, prevProps) => {
          // update if change
          if (prevState.poop !== this.state.poop) console.log('changed!')
          if (prevProps.flush !== this.state.flush) console.log('changed'!)

          // dont update
          return;
        })

    // creating components
      // React.Component
        class Poop extends React.Component {
          constructor(props) {
            super(props)

            this.state = {}

            // only required for event handlers
            // so you can refrain from <button onClick={e => this.handler(e)}>
            // and jsut do onClick={this.handler}
            this.eventHandler = this.eventHandler.bind(this);
            eventHandler = () => 'class fields syntax'

            unboundHandler () {
              // can bind in event handler
            }

            poop = 'flush'
            render () {
              return (
                <button onClick={this.unboundHandler.bind(this, this.poop)} />
              )
            }
          }
        }

      React.PureComponent
      React.memo

    // Transforming components
      React.cloneElement
      React.isValidElement
      React.children

    // rendering
      React.Fragment
        <></>

    // refs
      React.createRef
      React.forwardRef

    // lazyLoading
      React.lazy
      React.Suspense

    // Hooks - common
      React.useState
      React.useEffect
      React.useContext

    // Hooks - supplemental
      React.useReducer
      React.useCallback
      React.useMemo
      React.useRef
      React.useImperativeHandle
      React.useLayoutEffect
      React.useDebugValue

  ```

# FLOW

- flow has 99% the benefits of typescript with 0 of the limitations

## best practices

- always
  - fk mutations, use a immutable helper library
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
    - as a `type` alias for exporting, e.g. in tests
    - as an `opaque` for internal use

  - to document external data
    - use super type for ALL of the params they contain
    - use opaque type subclass for the values you use
      - I hate not knowing both sets of values, ignorance is not bliss
    - get the union of all the types out of the object via `externalTypes = ExternalTypes[$Keys<ExternalTypes>]`;
    - use flows inferred type of the value to create a type, e.g. `type thisType: typeof externalData = 56` // if externalData is inferred to be a number
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

- sometimes
  - may be appropriate, but not generally

- never
  - use anonymouse interfaces - just dont or die and go to hell where they code java with JSP

## gotchas

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

## flow usage

- `// @flow` typecheck this file
- `// @noflow` do not typecheck this file
- ignore the next line strategies
  - `// FlowFixMe` for type errors yo uintend to fix later
  - `// $FlowIssue` for type errors you think are flows fault
  - `// @FlowExpetedError` when you expect a type error
  - `// @FlowIgnore` when you want to ignore your code
  - `// $ExpectError` when you expect a type error, but not sure if it will be thrown or not

## flow config

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

## examples

### quickies

```js
  const ComponentProps = {
    children: ElementReact$,
  }

  // exporting behaves as expected
  export opaque type NumberAlias = number;
  export type OtherType = string;
  export opaque type ID: string = string; // subtyping constraint
  // you need to import both keyword `type` and the specific type( i.g. numberalias) ?
  import type { NumberAlias, OtherType } from './exports';
```

### errors and react types

  ```js
    // handling errors
      // $FlowFixMe
      // $FlowIssue[incompatible-type]
      /* $FlowIgnore[prop-missing] some other text here */
      /* $FlowFixMe[incompatible-cast] this
          is a multi-line
          comment */
      { /* $FlowIssue this is how you suppress errors inside JSX */ }
      someCode('with errors, all previous lines apply only to this line')

    // React type reference
    // this is how facebook does it, follow their lead or create your own framework
    // and namespaces should no longer hinder treeshaking
      import * as React from 'react';

    // any node that can be rnedered in a react application
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

### basic JS types

  ```js
    // modifiers
      // append to propName function params and object members
      // prepend ? to type to make it optional (type|void)
        // i.e. maybe types
        // ?number === number|undefined
        // { propertyName?: string } == {poop: undefined} but not { poop:null}
      // prepend ! to type to make it not nullable (type|void)

    // list of types
      // number
      // string
      // boolean
      // null for null
      // void for undefined
      // Array<subtype> subtype[] e.g. string[]
      // symbol for Symbol
      // mixed for anything (but must be refined...see elseware for clarity)
      // { propName: type }
      // { propName?: type }
      // { propName!: type }

    // union types: as one/more from a set of types
      const x: number | string = 'hello';
      const literalType: 'sucess' | 'warnning' | 'success';

    // variables and types
      const a: number = 42;
      const b: string = 'hello';
      const c: boolean = true;
      const e: number | undefined = 10;
      const f: Array<number> = [1, 2, 3];
      const g: mixed = z; // you must refine this type via typeof or some other checker before usig
      const h: any = 1; // op out of all type checking,  refrain from this as best you can
        // ^ very careful when using this with an object, as all of obj props will now be any (leak!)
        // ^ guard against this by declaring the obj.prop values to a type for assignment
      const d: ?number = null; // ? == maybe type, can be the declared|null|undefined


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

    // type combinations
      type a: number;
      type b: string
      type c: a | b;
      type d: a & b

  ```

### function typing

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

### class typig & interface typing

  ```js
  // Class
    // this inside the class doesnt require type annotation
    // ^ but if a type is provided, it must be one of:
    // ^^ super type of the class
    // ^^ class type (for static methods)
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

### object typing

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

### array/tuple typing

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

### union typing

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

### intersection typing

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

### aliase and opaque alias types

  ```js
  // type aliases
    // for creating reusable types use the `type` keyword
      type someType = {
        foo: number,
        // ...etc
      }
      const someThing: someType = {}

    // generic type aliases
      type someType<A,B,C> = {
        foo: A,
        bar: C,
        baz: C
      }
      const someThing: someType<number, string, boolean> = {
        foo: 1,
        bar: true,
        bax: 'three',
      }

  // opaque type aliases
    // do not allow access ot their underlying type
    // outside the file their defined (but they still can be exported)
      opaque type someType = {}
      // can have a super type, super useful
      opaque type someType: SuperType = {}
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
          (0: NumberAlias) // Error: 0 is not a NumberAlias!
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

### generic types catchall

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

### indexed access types

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

### typeof types

  ```js
    // typeof types
    // inherit the behavior of flows inference
    // you take the results of flows inference and asserting it as a type
    let ThisThing: typeof Otherthing = 'foo': // works if Flow infers OtherThing as string

  ```

### type casting expressions

  ```js
    // note: everything commented as it breaks syntax highlighting
    // type casting expressions
    // asserting and casting values to different types
    // can appear anywhere an expression can appear
    // values can only be casted
      (value: Type); // value is now Type
      // let obj = { prop: (value: Type) };
      // let arr = ([ (value:Type), (value: Type) ]: Array<Type>);
      (2 + 2: number)

    // you can assert type of value via type assertions
      let value = 42;
      (value: 42); // works
      (value: number); // works
      (value: string); // Error. because values can only be casted to less specific types
      let newValue = (value: number);
      (newValue: 42); // Error: new value is less specific number
      ((newValue: any): string); // Works; first casting to any allows you to subseqently cast to anything





  ```

### module types

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

### comment types

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

### utility types

  ```js
    // utility types
    // $Keys<T>
      // use the following keys as a type
      const countries = {
        US: "United States",
        IT: "Italy",
        FR: "France"
      };
      // equivalent to type Country = 'US' | 'IT' | 'FR';
      type Country = $Keys<typeof countries>;
      // use it
      const italy: Country = 'IT';
      const nope: Country = 'nope'; // 'nope' is not a Country

    // $Values<T>
      // use the following values as a type
      type Props = {
        name: string,
        age: number,
      };
      // The following two types are equivalent:
      type PropValues = string | number;
      type Prop$Values = $Values<Props>;

      const name: Prop$Values = 'Jon';  // OK
      const age: Prop$Values = 42;  // OK
      const fn: Prop$Values = () => {};  // Error! function is not part of the Prop (i.e. Prop$Values) union type

    // $NonMaybeType<T>
    // converts a type T to a non-maybe type
    // i.e. the values of $NonMaybeType<T>
    // + are the values of T except for null and undefined
      type MaybeName = ?string;
      type Name = $NonMaybeType<MaybeName>;

      ('Gabriel': MaybeName); // Ok
      (null: MaybeName); // Ok
      ('Gabriel': Name); // Ok
      (null: Name); // Error! null can't be annotated as Name because Name is not a maybe type

    // $ObjMap<T, F>
    // calls the function F on every property (at the type level) of T
    // usecases: expressing the return type of functions that manipulate ojects values
    // ^ e.g. to provide the return type of blurdbirds Promise.props fn
    // and returns the resulting object
      // run: takes an object of thunks as input
      // ^ purpose is to run all the thunks and return an object made of values
      // also note the very clever way of using Object.assign
      function run<O: {[key: string]: Function}>(o: O) {
        return Object.keys(o).reduce((acc, k) => Object.assign(acc, { [k]: o[k]() }), {});
      }
      // ^the keys are the same, but the values are no longer thunks
        // let's write a function type that takes a `() => V` and returns a `V` (its return type)
        type ExtractReturnType = <V>(() => V) => V;

        declare function run<O: {[key: string]: Function}>(o: O): $ObjMap<O, ExtractReturnType>;

        const o = {
          a: () => true,
          b: () => 'foo'
        };

        (run(o).a: boolean); // Ok
        (run(o).b: string);  // Ok
        // $ExpectError
        (run(o).b: boolean); // Nope, b is a string
        // $ExpectError
        run(o).c;            // Nope, c was not in the original object

    // $OjMapi<T, F>
    // similar to ObjMap<T,F >
    // + but fn F will be called with both the key and value types of the object type T
      const o = {
        a: () => true,
        b: () => 'foo'
      };
      type ExtractReturnObjectType = <K, V>(K, () => V) => { k: K, v: V };

      declare function run<O: Object>(o: O): $ObjMapi<O, ExtractReturnObjectType>;

      (run(o).a: { k: 'a', v: boolean }); // Ok
      (run(o).b: { k: 'b', v: string });  // Ok
      // $ExpectError
      (run(o).a: { k: 'b', v: boolean }); // Nope, a.k is "a"
      // $ExpectError
      (run(o).b: { k: 'b', v: number });  // Nope, b.v is a string
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
      type ExtractReturnType = <V>(() => V) => V

      function run<A, I: Array<() => A>>(iter: I): $TupleMap<I, ExtractReturnType> {
        return iter.map(fn => fn());
      }

      const arr = [() => 'foo', () => 'bar'];
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
        type ExtractPropType = <T>({prop: T}) => T;
        type Obj = {prop: number};
        type PropType = $Call<ExtractPropType, Obj>;  // Call `ExtractPropType` with `Obj` as an argument
        type Nope = $Call<ExtractPropType, {nope: number}>;  // Error: argument doesn't match `Obj`.

        (5: PropType); // OK
        (true: PropType);  // Error: PropType is a number
        (5: Nope);  // Error
      // example 2
        // Takes a function type, and returns its return type
        // This is useful if you want to get the return type of some function without actually calling it at runtime.
        type ExtractReturnType = <R>(() => R) => R;
        type Fn = () => number;
        type ReturnType = $Call<ExtractReturnType, Fn> // Call `ExtractReturnType` with `Fn` as an argument

        (5: ReturnType);  // OK
        (true: ReturnType);  // Error: ReturnType is a number
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
                +bar: ?T
              },
            }>,
          }) => T,
          NestedObj,
        >;

        (5: BarType);
        (true: BarType);  // Error: `bar` is not a boolean
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
        (true: Value);  // Error: Value is a `number`


        // We could generalize it further:
        type GetMapValue<M> =
          $Call<typeof getFirstValue, M>;

        (5: GetMapValue<Map<string, number>>);
        (true: GetMapValue<Map<string, boolean>>);
        (true: GetMapValue<Map<string, number>>);  // Error: value is a `number`









  ```

### catchall

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