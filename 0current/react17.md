# links 

## react specs, ref
  - [react top level api ref](https://reactjs.org/docs/react-api.html)


# best practices
  - **ALWAYS**
    - decompose components for reusability 
    - display names are only useful in *dev* for debugging, as they should be obsfucated in prod
    - only use state for data change changes over time that impact rendering/data flow
      - put other non-props variables as instance props
    - compare changes if a method receives newProps & nextProps
      - usually you receive the old props because a risk of an infinite loop exists without the comparison
    - cancel fetches & subscriptions
      - never FETCH or subscribe without companion logic to cancel
    - keep render logic pure and idempotent
  
  - **GENERALLY**
    - *PureComponent* > *shouldComponentUpdate* for auto shallow comparisons
    - use the setState + updator syntax if next props & state relies on prev props & state
      - or use a reducer for complex/advanced situations

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
  
  - **USE CASES**
    - use portals when rendering a child even when the parent has overflow hidden/z-index
      - e.g. dialogs, tooltips, modals, etc

# gotchas
  - defaultProps only used for undefined props; e.g. null props will still be null (and wont use the value assigned in defaultprops)
  - 

# terms 
  - pure components: never alter their inputs & are idempotent


# general
  - class components: have state and life cycle methods 


# lifecycle methods (in order)
  - mounting: component instance is being created and inserted into the DOM
    - *constructor*
      - when being created & before mounting
      - usescases: initialize state, bind instance methods for event handlers
    - *static getDerivedStateFromProps*
    - *render*
      - only required method
      - return null to render nothing
    - *componentDidMount*
      - after component is rendered to the DOM
      - usecases: timers, async shit, interactionn with the browser
      
    
  - updating: when a component instance is being rerendered; caused by a change to state/props/forceUpdate
    - *render*: see mounting section
    - *static getDerivedStateFromProps*: see mounting section
    
    - *getSnapshotBeforeUpdate*
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
  
  - error handling: exception during rendering, life cycle methhods, or constructor call
    - *static getDerivedStateFromError*
    - *componentDidCatch*

# instance props & methods 
  - *setState*
    - informs react state has changed & to asynchronously flush these changes to the DOM
  - *forceUpdate*
  - *defaultProps*
  - *displayName*
  - *props*
  - *state*
  - *super(props)*
    - MUST be first line in the constructor else props will be undefined/random bugs n shit
# top-level api
  - React.Component: have state and life cycle methods (PureComponent doesnt)
  - React.PureComponent: no state/life cycle methods but shallow compares new & old props automatically (i.e. implement shouldComponentUpdate)
  - Portals: render children into a dom node that exist outside the hierarchy of the parent component
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