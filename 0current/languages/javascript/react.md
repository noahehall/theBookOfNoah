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

### class components

- have state and life cycle methods

#### lifecycle methods (in order)

- mounting: component instance is being created and inserted into the DOM
  - _constructor_
    - when being created & before mounting
    - usescases: initialize state, bind instance methods for event handlers
  - _static getDerivedStateFromError_
    - invoked after an error is thrown in achild component
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

### pure components

- never alter their inputs & are idempotent

### functional components

### portals

- use portals when rendering a child even when the parent has overflow hidden/z-index
  - e.g. dialogs, tooltips, modals, etc

### error boundaries

- for catching errors in their children and displaying recovery (fallback) content
  - any component can be an error boundary by defining either _static getDerivedStateFromError_ or _componentDidCatch_
