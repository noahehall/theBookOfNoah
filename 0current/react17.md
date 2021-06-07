# links 

## react specs, ref
  - [react top level api ref](https://reactjs.org/docs/react-api.html)


# best practices
  - decompose components for reusability 
  - dont use `create-react-class` as it autobinds methods which has a performance hit
    - instead use 
      - `class properties` which will do the autobinding when built
      - bind methods in the constructor (u lazy bum)
      - use are functions for event handlers 
        - and this is the only reason you need autobinding anyway

# terms 
  - pure components: never alter their inputs & are idempotent

# general
  - class components: have state and life cycle methods 
# top-level api
  - React.Component: have state and life cycle methods (PureComponent doesnt)
  - React.PureComponent: no state/life cycle methods but shallow compares new & old props automatically (i.e. implement shouldComponentUpdate)
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