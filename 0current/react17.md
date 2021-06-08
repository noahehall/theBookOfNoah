# links 

## react specs, ref
  - [react top level api ref](https://reactjs.org/docs/react-api.html)


# best practices
  - **ALWAYS**
    - decompose components for reusability 
    - display names are only useful in *dev* for debugging, as they should be obsfucated in prod
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
  
  - **GENERALLY**
    - *PureComponent* > *shouldComponentUpdate* for auto shallow comparisons
    
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

# gotchas
  - defaultProps only used for undefined props; e.g. null props will still be null (and wont use the value assigned in defaultprops)
  - 

# terms 
  - pure components: never alter their inputs & are idempotent
  - error boundaries 
    - copmonents for catching errors in their children and dispplaying fallback content
    - any component can be an error boundary by defining either *static getDerivedStateFromError* or *componentDidCatch*
  - error handling: exceptions thrown during rendering, life cycle methhods, or constructor call


# general
  - class components: have state and life cycle methods 


# lifecycle methods (in order)
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


# instance props & methods 
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
# top-level api
  - *React.Component*: have state and life cycle methods (PureComponent doesnt)
  
  - *React.PureComponent*: no state/life cycle methods but shallow compares new & old props automatically (i.e. implement shouldComponentUpdate)
  
  - *ReactDOM.createPortal*: render children into a dom node that exist outside the hierarchy of the parent component
    - event bubbling still occurs in the parent components hierarchy regardless of where the child element exists in the brownser DOM hierarchy
    - 
  
  - 
  - 

```js
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