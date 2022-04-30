# react

- a complete react17 cheatsheet
- old azz hell, and fell apart via updating
- see react.md for react18 stuff
  - this file will eventually be deleted as im moving relavant stuff into react.md

### Concurrent Mode

### instance props & methods

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

## React; top-level api

- _React.Component_: have state and life cycle methods (PureComponent doesnt)
- _React.PureComponent_: no state/life cycle methods but shallow compares new & old props automatically (i.e. implement shouldComponentUpdate)
- _React.children_
- _cloneElement_
- _isValidElement_
- _React.Fragment_
- _React.createRef_
- _React.forwardRef_
- _React.lazy_
- _React.Suspense_

## hooks

- let you into react life cycle features from a functional component
- dont work inside classes
- only at the top level of functional components
- dont call inside loops, conditions or nested functions
- react tracks hooks via the order they are invoked
- _useState_
  - add local state to functional copmonents
  - doesnt shallow merge old & new state like setstate
    - it _REPLACES_ the entire state!
  - can & should be declared multiple times to keep state simple when using this hook
  - pass a fn to setState fn if
    - _new_ state depends on the _prev_ state
    - initial state is the result of an expensive computation
- _useEffect_
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
- _useLayoutEffect_
  - synchronous version of _useEffect_ that fires synchronously after all DOM mutations but before the browser has a chance to paint
    - in comparison to _useEffect_ that fires asynchronously
  - allows you to memoize effects but requires all dependent variables used inside the effect hook to be listed as a dep
  - prefer _useEffect_ as this hook blocks visual updates (because its sync and when it fires)
  - usecases:
    - see _useEffect_
    - _componentDidMount_, _componentDidUpdate_
    - read layout information from the DOM and synchronously re-render (e.g. updating scroll position)
- _useContext_
  - for global state thats accessible to any child component
  - forcibly rerenders all child components on update
  - can be at multiple levels and the first context.provider can intercept & handle it
    - think of the normal event bubbling logic
- _useReducer_
  - alternative to _useState_ for:
    - complex objects
    - lazy initialization of state
    - advanced initialization of state
    - when next state depends on prev state
    - optimizing performance for components that trigger deep updates by passing a _dispatch_ function instead of callbacks
- _useCallback_
  - returns a memoized callback to calculate a new value when its dependencies change
  - alternative to _useMemo_ which provide the memoized value instead
  - usecases:
    - a child component needs the dispatch because it controls the dependency values
- _useMemo_
  - returns a memoized value when its dependencies change
  - runs during rendering
    - so **NO** side effects
- _useRef_
  - returns a mutable ref object that exist sfor the lifetime of the component
  - gives you the _SAME_ ref via _Object.is_ logic
  - usecases:
    - needing to access a child imperetively; e.g. a dom node to set focus
    - keeping any mutable value around across renders
      - as it doesnt trigger a rerender when its value is mutated
- _useImperativeHandle_
  - customizes the instance value expsosed to parent components when using _ref_
  - should be used with _forwardRef_ when exporting _ANY_ component that implements this hook
    - permits any consuming component to call `poop.current\* to get a handle to the ref created in the component definition
  - react generally recommends staying away from this hook
  - usescases: whenever you need to write imperative code related to a _ref_ object, e.g. a handle on a input dom element to handle focus
- _useDebugValue_

## ReactDOM: top level api

- _render_
- _hydrate_
- _unmountComponentAtNode_
- _findDOMNode_
- _createPortal_
- _ReactDOM.createPortal_: render children into a dom node that exist outside the hierarchy of the parent component
  - event bubbling still occurs in the parent components hierarchy regardless of where the child element exists in the brownser DOM hierarchy

## ReactDOMServer: top level api

- _renderToString_
- _renderToStaticMarkup_
- _renderToNodeStream_
- _renderToSTaticNodeStream_

## react examples

### ReactDOM

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello, world!</h1>);
```

### events

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

### class component

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    // only required for event handlers
    // so you can refrain from <button onClick={e => this.handler(e)}>
    // and jsut do onClick={this.handler}
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  eventHandler = () => 'class fields syntax'

  unboundHandler () {
    // can bind in event handler
  }
  tick() { this.setState({date: new Date()    });  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
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

### functional components

```js
    React.PureComponent
    React.memo



  // rendering
    React.Fragment
      <></>

  // refs
    React.createRef
    React.forwardRef


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

### top level API

```js
// Transforming components
React.cloneElement;
React.isValidElement;
React.children;

// lazyLoading
React.lazy;
React.Suspense;
```
