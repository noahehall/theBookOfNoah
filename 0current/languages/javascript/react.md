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
    - use are functions for event handlers
      - and this is the only reason you need autobinding anyway
- use mixins: react-team doesnt recommend it
- copy props into state
- use deep equality checks/JSON.stringify for comparisons
  - use _immutability-helper_ instead
- use _constructor_ if when not binding instance methods (for event handlers) or initializing state
- use the callback in _setState_; move that logic to _componentDidUpdate_ as react recommends
- use error boundaries for control flow
  - only for recovery
