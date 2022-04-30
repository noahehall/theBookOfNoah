# react

- a complete react17 cheatsheet
- old azz hell, and fell apart via updating
- see react.md for react18 stuff
  - this file will eventually be deleted as im moving relavant stuff into react.md

## react examples

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
