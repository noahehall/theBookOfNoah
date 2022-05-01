# react

- a complete react 18 cheetsheat
- you should review EACH ACCESSIBILITY link in the links section in the link section below
- on new releases always review the changelog (see link)
- bookmark: https://reactjs.org/docs/code-splitting.html

- todos/skipped
  - [react & webcomponents](https://reactjs.org/docs/web-components.html)
  - [programmatically managing focus](https://reactjs.org/docs/accessibility.html#programmatically-managing-focus)
  - [mouse and pointer events](https://reactjs.org/docs/accessibility.html#mouse-and-pointer-events)
    - i skipped this and everything after it
    - but i did grab all the links (see below) to wai-aria & wcag etc
      - up until the color contrast section
  - [packages used by create-react-app](https://github.com/facebook/create-react-app/tree/main/packages)
    - may be useful to install some of the packages they use
    - ^ e.g. react-cripts, react-dev-utils, cra-template-typescript are pretty good to install as devDeps
    - ^ or just review how facebook team does it

## links

- react
  - [version changelog](https://reactjs.org/versions)
  - [react docs](https://reactjs.org/docs/getting-started.html)
  - [react top level api ref](https://reactjs.org/docs/react-api.html)
  - [handling events](https://reactjs.org/docs/handling-events.html)
  - [synthetic events](https://reactjs.org/docs/events.html)
  - [forms](https://reactjs.org/docs/forms.html)
  - [why not to use event delegation in react < 17](https://github.com/facebook/react/issues/13635)
  - [should i use event delegation in react](https://dev.to/thawsitt/should-i-use-event-delegation-in-react-nl0)
  - [discussion about event delegation github issue](https://github.com/reactjs/reactjs.org/issues/3543)
  - [reconnciliation](https://reactjs.org/docs/reconciliation.html)
  - [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
  - [thinking in react](https://reactjs.org/docs/thinking-in-react.html)
  - [accessibility](https://reactjs.org/docs/accessibility.html)
- ecosystem
  - [formik: easy form components](https://formik.org/docs/overview)
- other stuff
  - [w3c ui events](https://www.w3.org/TR/uievents/)
  - [javascript tc39 finished proposals by release](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
  - [a11y](https://en.wikipedia.org/wiki/Accessibility)
  - [cool react examples](https://github.com/mrdulin/react-examples)
- accessibility (a11y)
  - [wcag2](https://www.w3.org/WAI/standards-guidelines/wcag/)
  - [wcag checklist](https://www.wuhcag.com/wcag-checklist/)
  - [webaims wcag 2 checklist](https://webaim.org/standards/wcag/checklist)
  - [a11y project](https://www.a11yproject.com/checklist/)
  - [wai-aria overview](https://www.w3.org/WAI/standards-guidelines/aria/)
  - [semantic html: mdn element list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
  - [w3 how to label controls](https://www.w3.org/WAI/tutorials/forms/labels/)
  - [webaim how to label controls](https://webaim.org/techniques/forms/controls)
  - [explanation of labeling & accessible names](https://www.tpgi.com/what-is-an-accessible-name/)
  - [user notificaitons](https://www.w3.org/WAI/tutorials/forms/notifications/)
  - [form validatoin & error recovery](https://webaim.org/techniques/formvalidation/)
  - [keyboard navigation](https://webaim.org/techniques/keyboard/)
  - [skip navigation](https://webaim.org/techniques/skipnav/)
  - [landmarks](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
  - [keyboard navigable javascript widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - [aria roles](https://www.w3.org/TR/wai-aria/#roles)
  - [aria states and props](https://www.w3.org/TR/wai-aria/#states_and_properties)
  - [aria design patterns and widgets](https://www.w3.org/TR/wai-aria-practices/#aria_ex)
  - [practical aria examples](https://heydonworks.com/article/practical-aria-examples/)
  - [inclusive component design](https://inclusive-components.design/)
  - [screen reader language selection (e.g. english vs spanish)](https://webaim.org/techniques/screenreader/#language)
  - [react document title component (stale but good example)](https://github.com/gaearon/react-document-title)
  - [understanding document title](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)

## best practices

### always

- if something can be derived from either props or state, it probably shouldn’t be in the state.
- There should be a single “source of truth” for any data that changes in a React application.
  - Usually, the state is first added to the component that needs it for rendering.
  - if other components also need it, you can lift it up to their closest common ancestor.
  - you should rely on the top-down data flow instead of syncing state between props
- use curly braces when embedding user input into JSX
  - the {someVar} is fully escaped to prevent injection attacks
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

- At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
  - i.e. always use Props and composition to customize a component’s look and behavior in an explicit and safe way
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

- sharing state is accomplished by moving it up to the closest common ancestor of the components that need it.
  - This is called “lifting state up”
- Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods
- array elements and keys
  - keys are not needed if each item is a component
  - keys are needed if created the item in an array (e.g. via a [].map)
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

- a11y: i.e. accessibility; Numeronym presenting accessibility as "a" followed by 11 more letters, followed by "y".

## events

- evenhandlers receive instances of `SyntheticEvent`
  - React events are named using camelCase, rather than lowercase.
  - you pass a function as the event handler, rather than a string.
  - cannot return false to prevent default behavior (must call preventDefault)
- cross-browser wrapper around the UA native event

```js

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

```

## code splitting

- see lazy components section
- bundling: creating a single file out of a hierarchy of files related through import statements
- code splitting: creates multiple bundles that can be dynamically loaded at runtime
- use cases
  - route based code splitting: users expect page transitions taking some amount of time to load

```js
// webpack will automatically code-split dynamically imported modules
const Something = await imporT("./poop");

/** example route based code splitting */
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```

## component types

- All React components must act like pure functions with respect to their props.
- ^ i.e. props are readonly
- state & props flows down to child components; This is commonly called a “top-down” or “unidirectional” data flow.
- not all of the below sections are technically different react components
  - however the use case and context of each section make them conceptually distinct component types
    - IMO of course

### root component

- a dom hierarchy managed by react
- you may have as many isolated root DOM nodes as you like

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
// are immutable, cant be changed after creation
// in order to rerender this element, you have to create a new instance
const element = <h1>Hello, world!</h1>;

root.render(element);
```

### class components

- have state and life cycle methods

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    // only required for event handlers to make `this` work in the callback
    // so you can refrain from <button onClick={e => this.handler(e)}>
    // and jsut do onClick={this.handler}
    // ^ can also use class fields syntax with arrow fn
    this.eventHandler = this.eventHandler.bind(this);

    // Create a ref to store the textInput DOM element
    // can be passed to child elements as props
    this.textInput = React.createRef();
  }

  // setup your side effects
  // runs after the component output has been rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // remove your side effects to free up resources
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // @see https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
  // is included in @babel/preset-env in ES2022
  eventHandler = () => 'class fields syntax'

  unboundHandler () {
    // can bind in event handler (but never do it)
    // prefer to bind in the constructor
  }

  // state updates are shallow merged (not replaced)
  // thus you can update the state properties independently
  updateState() {
    // async state update, best performance
    this.setState({ first: 1 }) // doesnt change this.state.second

    // only way to reliably sync state with props
    // curProps: props at the time the update is applied
    this.setState((prevState, curProps) => ({
      counter: prevState.poop + curProps.increment
    }));
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        // both event handlers do the same thing
        // this.deleteRow will receive (id, e) in both instances
        <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        // e is automatically forwarded to deleteRow after id (see above comment)
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        // be careful: falsy expressions render 0
        { ifThisIsTrueRenderElseDont && (
          <SomeComponent />
        )}
        // returning null is likely what you want, it renders nothing
        { ifThisIsTrueRenderElseDont
            ? <SomeComponent />
            : null
        }
        // works but dont do it, move the arrayOfLiElements into a component
        // always assign key={someID} to each el
        // only use {index.toString()} as keys if the order of els in the arr dont change
        // ^ else it negatively impacts perf and causes issues with comp state
        <ul>{arrayOfLiElements}</ul>

        // Use the `ref` callback to store a reference to the text input DOM  // element in an instance field (for example, this.textInput).
        <input
          type="text"
          ref={this.textInput}
          />
      </div>
    );
  }
}

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



          poop = 'flush'
          render () {
            return (
              <button onClick={this.unboundHandler.bind(this, this.poop)} />
            )
          }
        }
      }
```

#### lifecycle methods (in order)

- error handling occurs: during rendering, within a lifecycle method, or in the constructor of any child component
  - _static getDerivedStateFromError_
    - invoked after an error is thrown in a child component
    - no side effects allowed (e.g. fetches)
    - for updating state
  - _componentDidCatch_
    - after an error has been thrown by a child component
    - called during commit phase & allows side effects
      - for logging errors (e.g. console|another system)
    - in dev
      - errors bubble up to window and can be handled by window.onerror/addeventListener
    - in prod
      - errors **DO NOT** bubble and you must catch them for logging
- mounting: component instance is being created and inserted into the DOM
  - _constructor_
    - when being created & before mounting
    - usescases: initialize state, bind instance methods for event handlers
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
  - _static getDerivedStateFromProps_: see mounting section
  - _shouldComponentUpdate_
    - performance enhancement
    - receives cur + new props to be compared
    - not called for initial render OR after _forceUpdate_
    - does NOT prevent child components from rendering when THEIR props/state changes
  - _render_: see mounting section
  - _getSnapshotBeforeUpdate_
    - invoked before component updates are flushed to the dom
    - sends captured values to _componentDidUpdate_ as third param
      - return null if nothing has changed
    - usecases: capture dom info (e.g. scroll position)
  - _componentDidUpdate_
    - immediately after update occurs
    - not called for the initial render
    - usecases: operate on the DOM, network requests AFTER comparing current & next props requires a new fetch
    - receives a third prop if _getSnapshotBeforeUpdate_ is used
- unmounting: when a component is being removed from the DOM and destroyed
  - _componentWillUnmount_
    - before being destroyed
    - usescases: remove timers, canceling shit (e.g. fetches/subscriptions)

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

- must accept a single object (props) and return a react element

```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// the ref comes from the parent
// enables the parent to manage the associate DOM element created by this component
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />{" "}
    </div>
  );
}
```

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

- Refs provide a way to access DOM nodes or React elements created in the render method.
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

##### useDeferredValue

- todo

##### useTranssition

- todo

##### useId

- todo

##### useSyncExternalStore

- todo

##### useInsertionEffect

- todo

### fragments

- reduces the need to create a container when rendering multiple sibling elements

```js
// only benefit of React.Fragment is to add keys= to the children
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

// same as above but <> doesnt accept keys/props
render() {
  return (
    <>
      /* html elements*/
    </>
  )
}

```

### children

- generic/reusable components like Sidebars / Headers / Heros should render props.children
  - this lets other components pass arbigrary children to

```js
// using children
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}{" "}
    </div>
  );
}

// using props to render multiple slots
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left} </div>
      <div className="SplitPane-right">{props.right} </div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
```

### controlled components

- generally used with form elements that accept user input
- these elements should receive their values via component state
- the submit button should not submit the form, instead use form.onSubmit handler

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // works for input, select, and textarea
  // make sure to set a name= attribute on each
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // set value to undefined or null to make it an uncontrolled component
    // ^ the user will be able to edit it directly as a normal html component
    // ^ i.e. never set a controlled components value= to undefined/null
    this.setState({[name]: value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        // textarea use value attribute in react
        <textarea value={this.state.value} onChange={this.handleChange} />
        // the select.value is used instead of option.selected in react
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        // can also used ina multi-select select
        <select multiple={true} value={['B', 'C']}>
        // clicking submit triggers form.onSubmit
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

### uncontrolled components

- todo

### portals

- use portals when rendering a child even when the parent has overflow hidden/z-index
  - e.g. dialogs, tooltips, modals, etc

### error boundaries

- for catching errors in their children and displaying recovery (fallback) content
  - any component can be an error boundary by defining either _static getDerivedStateFromError_ or _componentDidCatch_

### accessible components

- you should review EACH ACCESSIBILITY link in the links section at the top of this doc
- all `aria-POOP` attributes should never be camelcased
- Semantic HTML is the foundation of accessibility in a web application.
- Every HTML form control, such as <input> and <textarea>, needs to be labeled accessibly.
  - We need to provide descriptive labels that are also exposed to screen readers.
- the current element should always have an outline
  - use `outline: 0` to remove the default but remember to provide your own
- use refs to set focus to an element
  - set initial focus on the cancel button (preventing the keyboard user from accidentally activating the success action)
  - trap keyboard focus inside the modal
  - resets focus back to the element that initially triggered the modal.

```js
// using aria-* attributes
<input
  type="text"
  aria-label={labelText}
  aria-required="true"
  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>

// for= attribute is htmlFor in react
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/>
```

### HoC: Higher-Order components

- todo

### Profiler components

- todo

### strict mode components

- todo

### lazy components

- see code-splitting section
- lets you render a dynamic import as a regular component
- ensure your bundler is setup for code-splitting

```js
/** example lazy loading components */
import React, { Suspense, lazy } from "react";

// will load the bundle containing this component when its first rendered
// OtherComponent must resolve to a default exporting containing a React component
const Comments = lazy(() => import("./Comments"));
const Photos = lazy(() => import("./Photos"));

function MyComponent() {
  const [tab, setTab] = React.useState("photos");

  // will show the glimmer component when a user switches tabs
  // i.e. will immediately switch to glimmer, then to the newly seleted tab
  // i.e. no transition
  function handleTabSelect(tab) {
    setTab(tab);
  }

  // will show the existing UI until the new one is ready
  // i.e. will transition to the new UI, and not show the fallback component
  // i.e. this isnt an urgen update
  function handleTabSelect(tab) {
    startTransition(() => {
      setTab(tab);
    });
  }

  // all lazy components must be rendered via Suspense HoC
  // can place the Suspense component anywhere above the lazy component
  // can wrap multiple lazy components with a single Suspense component.
  // an ErrorBoundary should be used in case the lazy component fails
  const RenderableComponent = (
    <MyErrorBoundary>
      <Suspense fallback={<Glimmer />}>
        {tab === "photos" ? <Photos /> : <Comments />}
      </Suspense>
    </MyErrorBoundary>
  );

  return (
    <div>
      <Tabs onTabSelect={handleTabSelect} />
      <RenderableComponent />
    </div>
  );
}
```

### web components & react

- todo

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
// React.memo
// React.createRef
// React.forwardRef
```

## ReactDOM

- [docs](https://reactjs.org/docs/react-dom.html)
- The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.

## ReactDOMClient

- [docs](https://reactjs.org/docs/react-dom-client.html)
- The react-dom/client package provides client-specific methods used for initializing an app on the client. Most of your components should not need to use this module.

## ReactDOMServer

- [docs](https://reactjs.org/docs/react-dom-server.html)
- The ReactDOMServer object enables you to render components to static markup. Typically, it’s used on a Node server:
