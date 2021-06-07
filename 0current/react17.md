# links 

## react specs, ref
  - [react top level api ref](https://reactjs.org/docs/react-api.html)


# best practices
  - **ALWAYS**
    - decompose components for reusability 
    - display names are only useful in *dev* for debugging, as they should be obsfucated in prod
    - only use state for data change changes over time that impact rendering/data flow
      - put other non-props variables as instance props
    - 
  
  - **NEVER**
    - dont use `create-react-class` as it autobinds methods which has a performance hit
      - instead use 
        - `class properties` which will do the autobinding when built
        - bind methods in the constructor (u lazy bum)
        - use are functions for event handlers 
          - and this is the only reason you need autobinding anyway
    - use mixins: react-team doesnt recommend it
    - copy props into state
  
  - **USE CASES*
    - use portals when rendering a child even when the parent has overflow hidden/z-index
      - e.g. dialogs, tooltips, modals, etc

# gotchas
  - defaultProps only used for undefined props; e.g. null props will still be null (and wont use the value assigned in defaultprops)
  - 

# terms 
  - pure components: never alter their inputs & are idempotent

# general
  - class components: have state and life cycle methods 
# top-level api
  - React.Component: have state and life cycle methods (PureComponent doesnt)
  - React.PureComponent: no state/life cycle methods but shallow compares new & old props automatically (i.e. implement shouldComponentUpdate)
  - Portals: render children into a dom node that exist outside the hierarchy of the parent component
  - 
  - 

```js
  // creating components
    React.Component
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