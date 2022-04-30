# react

- a complete react 18 cheetsheat

- todos
  - [react & webcomponents](https://reactjs.org/docs/web-components.html)

## links

- react
  - [react docs](https://reactjs.org/docs/getting-started.html)
  - [react top level api ref](https://reactjs.org/docs/react-api.html)
  - [handling events](https://reactjs.org/docs/handling-events.html)
  - [synthetic events](https://reactjs.org/docs/events.html)
  - [forms](https://reactjs.org/docs/forms.html)
  - [why not to use event delegation in react < 17](https://github.com/facebook/react/issues/13635)
  - [should i use event delegation in react](https://dev.to/thawsitt/should-i-use-event-delegation-in-react-nl0)
  - [discussion about event delegation github issue](https://github.com/reactjs/reactjs.org/issues/3543)

## best practices

### always

- decompose components for reusability
- _displayName_ is only useful in _dev_ for debugging, as they should be obsfucated in prod
- only use state for data that changes over time that impact rendering/data flow
- ^ set everything else as instance props/outside the component deinition
- compare changes if a method receives newProps & nextProps: a risk of an infinite loop exists without the comparison
- cancel fetches & subscriptions: never FETCH or subscribe without companion logic to cancel
- keep render logic pure and idempotent
- render a fallback UI when an error occurs
  - prefer _static getDerivedStateFromError_ over _componentDidCatch_
    - _componentDidCatch_ should never be used for fallback UI
- reading state values after update
  - prefer componentDidUpdate over setState w/ callback over setState regular
    - setStage regular is asynchronous, not guaranteed to have latest
    - setState with callback works, but is a one-off
    - aggregate all your logic related after update state values into _componentDidUpate_
- bind event handlers in the constructor or use class fields syntax with an arrow function

  - never use arrow functions directly in the callback as
    - the component receives a new fn each time,
    - if passed to child components, will cause axtra rerenders

### generally

- prefer _PureComponent_ over _shouldComponentUpdate_ for auto shallow comparisons
- import namespaces, [who the fk knows if it hinders/helps treeshaking?](https://github.com/airbnb/javascript/issues/1487)
- add a _useDebugValue_ inside custom hook definitions to support dev experience but _ALWAYS_ add a second formatting param to defer expensive operations unless the hook is inspected
  - react doesnt recommend it for _EVERY_ custom hook, but when did we ever follow directions?
- use the setState + updator syntax if next props & state relies on prev props & state
  - or use a reducer for complex/advanced situations
- when performing side effects (e.g. fetching, animation, etc)
  - after a component has been updated
    - prefer _componentDidUpdate_ over _static getDerivedStateFromProps_
  - before a copmonent has been updated
    - useEffect|useLayoutEffect
- recompute data when props change
  - prefer any of the memoization options over controlled/uncontrolled with a key over _static getDerivedStateFromProps_
- catching errors for logging

  - _componentDidCatch_ > _static getDerivedStateFromEror_

### with caution

- calling _setState_ inside _componentDidMount_
  - ONLY things like modals/tooltips need to measure other DOM nodes before rendering

### never

- dont use `create-react-class` as it autobinds methods which has a performance hit
  - instead use
    - `class properties` which will do the autobinding when built
    - bind methods in the constructor (u lazy bum)
    - use functions for event handlers
      - and this is the only reason you need autobinding anyway
- use mixins: react-team doesnt recommend it
- copy props into state
- use deep equality checks/JSON.stringify for comparisons
  - use _immutability-helper_ pkg instead
- use _constructor_ when not binding instance methods (for event handlers) or initializing state
- use error boundaries for control flow
  - only for recovery

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

## events

- evenhandlers receive instances of `SyntheticEvnet`
- cross-browser wrapper around the UA native event

## component types

### root component

- creates a react root: a dom hierarchy managed by react

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello, world!</h1>);
```

### class components

- have state and life cycle methods

```js
// React.Component
```

#### lifecycle methods (in order)

- mounting: component instance is being created and inserted into the DOM
  - _constructor_
    - when being created & before mounting
    - usescases: initialize state, bind instance methods for event handlers
  - _static getDerivedStateFromError_
    - invoked after an error is thrown in a child component
    - no side effects allowed (e.g. fetches)
    - for updating state
  - _static getDerivedStateFromProps_
    - right before the render method on initial and subsequent updates
      - fired on every render! use with caution
    - return an object to update state or null
    - doesnt have access to the component instance
      - move shared logic outside the class definition
    - usecases: when state depends on changes in props over time (e.g. deciding if a component should be animated in and out)
  - _render_
    - only required method
    - return null to render nothing
  - _componentDidMount_
    - after component is rendered to the DOM
    - usecases: timers, async shit, interactionn with the browser
- updating: when a component instance is being rerendered; caused by a change to state/props/forceUpdate
  - _render_: see mounting section
  - _static getDerivedStateFromProps_: see mounting section
  - _getSnapshotBeforeUpdate_
    - invoked before component updates are flushed to the dom
    - sends captured values to _componentDidUpdate_ as third param
      - return null if nothing has changed
    - usecases: capture dom info (e.g. scroll position)
  - _shouldComponentUpdate_
    - performance enhancement
    - receives cur + new props to be compared
    - not called for initial render OR after _forceUpdate_
    - does NOT prevent child components from rendering when THEIR props/state changes
  - _componentDidUpdate_
    - immediately after update occurs
    - not called for the initial render
    - usecases: operate on the DOM, network requests AFTER comparing current & next props requires a new fetch
    - receives a third prop if _getSnapshotBeforeUpdate_ is used
- unmounting: when a component is being removed from the DOM and destroyed
  - _componentWillUnmount_
    - before being destroyed
    - usescases: remove timers, canceling shit (e.g. fetches/subscriptions)
  - _componentDidCatch_
    - after an error has been thrown by a child component
    - called during commit phase & allows side effects
      - for logging errors (e.g. console|another system)
    - in dev
      - errors bubble up to window and can be handled by window.onerror/addeventListener
    - in prod
      - errors **DO NOT** bubble and you must catch them for logging

#### instance props & methods

- _setState_
  - informs react state has changed & to asynchronously flush these changes to the DOM
  - queues a rerender for the calling component & its descendants
  - update the UI in response to events
  - react batches updates for performance; this is a **REQUSTE**
  - call setState **ONLY** when it differes from the previous state
- _forceUpdate_
  - use when the render method depends on data external to props/state
  - skips any checks in _shouldComponentUpdate_ in the component and the components descendants
    - forces the entire component hierarchy to rerender
- _defaultProps_
- _displayName_
- _props_
- _state_
- _super(props)_
  - MUST be first line in the constructor else props will be undefined/random bugs n shit

### pure components

- never alter their inputs & are idempotent
- no state/life cycle methods but shallow compares new & old props automatically (i.e. implement shouldComponentUpdate)

```js
// React.PureComponent
```

### functional components

#### hooks

- provide react.component lifecycle features
- only at the top level of functional components
  - i.e. cant be within loops, conditions or nested functions
- react tracks hooks via the order they are invoked

##### useState

- add local state to functional copmonents
- doesnt shallow merge old & new state like setstate
  - it _REPLACES_ the entire state!
- can & should be declared multiple times to keep state simple when using this hook
- pass a fn to setState fn if
  - _new_ state depends on the _prev_ state
  - initial state is the result of an expensive computation

##### useReducer

- alternative to _useState_ for:
  - complex objects
  - lazy initialization of state
  - advanced initialization of state
  - when next state depends on prev state
  - optimizing performance for components that trigger deep updates by passing a _dispatch_ function instead of callbacks

##### useEffect

- for data fetching, subscriptions, changing dom elements, i.e any side asynchronous side effect
  - runs on every render so make sure to:
    - add used vars in the dependency array
    - use an if condition before invoking side effect logic
    - always return a function to handle cleanup when the component unmounts
    - use multiple effect hooks for each side effect
  - usecases:
    - any side effect, e.g. mutations, timers, logging, etc
    - _componentDidMount_
    - _componentDidUpdate_
    - _componentWillUpdate_

##### useLayoutEffect

- synchronous version of _useEffect_ that fires synchronously after all DOM mutations but before the browser has a chance to paint
  - in comparison to _useEffect_ that fires asynchronously
  - allows you to memoize effects but requires all dependent variables used inside the effect hook to be listed as a dep
  - prefer _useEffect_ as this hook blocks visual updates (because its sync and when it fires)
  - usecases:
    - see _useEffect_
    - _componentDidMount_, _componentDidUpdate_
    - read layout information from the DOM and synchronously re-render (e.g. updating scroll position)

##### useContext

- for global state thats accessible to any child component
  - forcibly rerenders all child components on update
  - can be at multiple levels and the first context.provider can intercept & handle it
    - think of the normal event bubbling logic

##### useCallback

- returns a memoized callback to calculate a new value when its dependencies change
  - alternative to _useMemo_ which provide the memoized value instead
  - usecases:
    - a child component needs the dispatch because it controls the dependency values

##### useMemo

- returns a memoized value when its dependencies change
  - runs during rendering
    - so **NO** side effects

##### useRef

- returns a mutable ref object that exist sfor the lifetime of the component
  - gives you the _SAME_ ref via _Object.is_ logic
  - usecases:
    - needing to access a child imperetively; e.g. a dom node to set focus
    - keeping any mutable value around across renders
      - as it doesnt trigger a rerender when its value is mutated

##### useImperativeHandle

- customizes the instance value expsosed to parent components when using _ref_
- should be used with _forwardRef_ when exporting _ANY_ component that implements this hook
  - permits any consuming component to call `poop.current\* to get a handle to the ref created in the component definition
- react generally recommends staying away from this hook
- usescases: whenever you need to write imperative code related to a _ref_ object, e.g. a handle on a input dom element to handle focus

##### useDebugValue

- todo

### portals

- use portals when rendering a child even when the parent has overflow hidden/z-index
  - e.g. dialogs, tooltips, modals, etc

### error boundaries

- for catching errors in their children and displaying recovery (fallback) content
  - any component can be an error boundary by defining either _static getDerivedStateFromError_ or _componentDidCatch_

## React top level api

- for members of the React object not covered elseware

```js
// todo
// - _React.children_
// - _cloneElement_
// - _isValidElement_
// - _React.Fragment_
// - _React.createRef_
// - _React.forwardRef_
// - _React.lazy_
// - _React.Suspense_
```

## ReactDOM top level api

- todo: intermix this with the other sections
- and indicate when one comes from React pkg vs ReactDOM pkg
  - rarely will you use one without the other
  - and having them together makes sense from a consumers perspective

```js
// todo
// - _render_
// - _hydrate_
// - _unmountComponentAtNode_
// - _findDOMNode_
// - _createPortal_
// - _ReactDOM.createPortal_: render children into a dom node that exist outside the hierarchy of the parent component
//   - event bubbling still occurs in the parent components hierarchy regardless of where the child element exists in the brownser DOM hierarchy
```

## ReactDOMServer top level api

- todo: intermix this with the other sections
- and indicate when one comes from React pkg vs ReactDOMServer pkg
  - rarely will you use one without the other
  - and having them together makes sense from a consumers perspective

```js
// todo
// - _renderToString_
// - _renderToStaticMarkup_
// - _renderToNodeStream_
// - _renderToSTaticNodeStream_
```
