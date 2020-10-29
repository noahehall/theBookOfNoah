# bookmark
  - https://reactjs.org/docs/hooks-reference.html#useimperativehandle
   - https://reactjs.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render


# LINKS
  - [Main ref](https://reactjs.org/docs/react-api.html)
  - [React.Component API reference](https://reactjs.org/docs/react-component.html)
  - [Hooks tutorial](https://reactjs.org/docs/hooks-intro.html)
  - [hooks FAQ](https://reactjs.org/docs/hooks-faq.html)
  - [using the state hook](https://reactjs.org/docs/hooks-state.html)
  - [hook rules](https://reactjs.org/docs/hooks-rules.html)
  - [effect hook docs](https://reactjs.org/docs/hooks-effect.html)
  - [react hooks API reference](https://reactjs.org/docs/hooks-reference.html)
  - [context docs](https://reactjs.org/docs/context.html)
  - [render props](https://reactjs.org/docs/render-props.html)



## articles
  - [react.cloneelement vs children](https://stackoverflow.com/questions/37521798/when-should-i-be-using-react-cloneelement-vs-this-props-children/50441271#50441271)
  - [transforming elements in react](https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba)
  -
#  COMPONENTS
```js
  // React.Component
  // React.PureComponent
```

## DYNAMIC
```js
  // React.lazy
  // React.Suspense
```

# REFS
```js
  // React.createRef
  // React.forwardRef
1
```

# Hooks
  - use cases
    - extract stateful logic from a component so it
      - can be tested independently
      - reused between components without changing component hierarchy
    - provide access to imperative escape hatches
    -

  - why not classes
    - dont minify well
    - make hot reloading flaky and unreliable

  - gotchas
    - no equivalents to getSnapshotBeforeUpdate or componentDidCatch
    - Any function inside a component, including event handlers and effects, “sees” the props and state from the render it was created in.

  - react redux
    - support v7.1.0
    - exposes useDispatch and useSelector
  - react router
    - supports hooks since v5.1
  - react-dom/test-utils
    - provides { act }
  - eslint plugin exists
    - enforces rules of hooks to avoid bugs
    - [facebook eslint plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation)

## hooks: class migration
  - useRef
    - you can think of refs as similar to instance variables in a class.
    - Unless you’re doing lazy initialization, avoid setting refs during rendering — this can lead to surprising behavior.
    - Instead, typically you want to modify refs in event handlers and effects.
    - If you intentionally want to read the latest state from some asynchronous callback, you could keep it in a ref, mutate it, and read from it.
    - gotchas
      - an object ref doesn’t notify us about changes to the current ref value
        - use a callback ref instead

  - callback ref
    - to measure the position or size of a DOM node,
      - you can use a callback ref.
      - React will call that callback whenever the ref gets attached to a different node.
    - Using a callback ref ensures that even if a child component displays the measured node later (e.g. in response to a click), we still get notified about it in the parent component and can update the measurements.

  - getDerivedStateFromProps
    - schedule an update while rendering
  - shouldComponentUpdate
    - wrap a function component with React.memo to shallowly compare its props:

### hook rules
  - only call hooks at the top level of react functional components
    - never within loops, conditions, or nested functions
  - only call hooks from react functional components
    - i.e. never from regular javascript functions
    -


### hook best practices
    - use the  eslint plugin
    - declare functions needed by an effect inside of it
    - specify a list of dependencies as the last argument to
      - useEffect
      - useMemo
      - useCallback
      - useImperativeHandle
      - requirements
        - must include all values used inside the hook that participate in the react data flow
          - props
          - state
          - anything derived from them


  - notes
    - Both useState and useReducer Hooks bail out of updates if the next value is the same as the previous one. Mutating state in place and calling setState will not cause a re-render.
    - Hook calls can’t be placed inside loops.



## Hooks - types
  - custom Hooks
    - are just functions that use normal react hooks in the function body
    - these functions are then imported into functional components and used normally
      - make sure to pass in any props/values/etc that the function body requires


### useEffect
  - perform side effects (after each render) in functional components
    - the function passed to useEffect fires after layout and paint, during a deferred event.
    - react ensures the effect runs AFTER the DOM has been updated
    - accepts an anonymous function so that it never receives stale dependencies
      - i.e. the function is recreated each time, thus receiving the latest updates of all deps

  - use cases
    - setting up subscriptings
    - fetching data
    - manually modifying DOM

  - replaces lifecycle methods
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount
      - return a function from  your effect and it will get called when the component unmounts

  - basics
    - place inside a functional component to have access to all props/state/etc
    - usually runs on every render (first + updates)
    - The empty set of dependencies, [], means that the effect will only run once when the component mounts, and not on every re-render.
      - dependencies are shallow compared
      - if you include any dependencies you must include all dependencies
        - i.e. all props/values/whaatever that the effect relies on
    - react will invoke every effect in their lexical order

  - advanced
    - create an instance variable with useRef
    - If you need it, you can use a mutable ref to manually store a boolean value corresponding to whether you are on the first or a subsequent render, then check that flag in your effect. (If you find yourself doing this often, you could create a custom Hook for it.)
    - create functions inside the effect
      - if unable to
        - move function outside of the component
          - guaranteed not to reference any props/state
          - doesnt need to be on list of deps
        - if its a pure computation and safe to call while rendering
          - call it outside of the effect
          - make the effect depend on the return value
        - add the function to effect deps but wrap its definition into the useCallback hook
          - ensures it doesnt change on every render

```js
  // Only re-run the effect if count changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);


  // Only run the effect on mount & unmount
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, []);
1
```


### useReducer
  - alternative to `useState`
    - preferred when you have complex state logic that involes multiple subvalues or when the next state depends on the previous one
    - you can pass the dispatch function down to child components
  - syntax is  almost identical to redux
  - pass an init function as the third argument for lazy initialization


```js
  // syntax examples
    const [state, dispatch] = useReducer(
      reducer,
      {count: initialCount}
    );

  // full example
    const initialState = {count: 0};

    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
    }

    function Counter() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
      );
    }

  // lazy initialization of state
  // also shows how to reset the state
    function init(initialCount) {
      return {count: initialCount};
    }

    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        case 'reset':
          return init(action.payload);
        default:
          throw new Error();
      }
    }

    function Counter({initialCount}) {
      const [state, dispatch] = useReducer(reducer, initialCount, init);
      return (
        <>
          Count: {state.count}
          <button
            onClick={() => dispatch({type: 'reset', payload: initialCount})}>

            Reset
          </button>
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
      );
    }
1
```

### useState
  - basics
    - pass a function to the setState function to receive the previous state value
    - pass a function to the useState hook for expensive  calculations
      - this function is only called on the initial render
      - subsequent renders use setState function returned from useState

```js
    // simple use state hook
    import React, { useState } from 'react';

    function Example() {
      // Declare a new state variable, which we'll call "count"
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
1
```


### useContext
  - accepts a context object (the return of `React.createContext`) and returns the current context value for that context
    - the current context value is determined by the value prop of the nearest `MyContext.Provider` above the calling component  in the component tree
  - only lets you read  the context and subscrib e to its changes
    - you still need a `MyContext.Provider` above the tree to provide the value for this context


```js
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

  const ThemeContext = React.createContext(themes.light);

  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }

  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  function ThemedButton() {
    const theme = useContext(ThemeContext);

    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
1
```


### useCallback
  - returns a memoized version of some arbitrary callback version
    - i.e. only is invoked if one of the dependencies has changed
    - useful when implementing shouldComponent in some childComponent that rely on reference equality

```js
  const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b], // only called  if one of these  are changed
  );

1
```


### useMemo
  - returns a memoized value
  - pass a function and a list  of dependencies
    - the function will only be invoked if the dependencies change
      - if an empty list is passed the function will be invoked on every render
    - the function is invoked DURING RENDERING
      - so dont do any side effects


```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
1
```


### useRef
  - returns a mutable ref object whose `.current` property is initialized to the passed argument
  - the returned object will persist for the full lifetime of the component
  - is alike a box that can hold a mutavle value in its `.current property`
  - basics
    - doenst notify you when its context changes
    - mutating the .current property does NOT cause a rerender
    - use a `callback ref` to run some code when react attaches/detaches a ref to a DOM node
      - i.e. to be notified when the ref content changes

  - use cases
    - to create a handle for a child component
    - creating mutable instance properties for funcctional components
      - i.e. anologous to class component instant memthods

```js
  function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
1
```

### useImperativeHandle
  - make a ref to a function component
  - expose a method to a parent component


### useLayoutEffect
  - identical function signature as `useEffect`


### useDebugValue

### wtf does this belong to?

```js
  // create an instance variable
    function Timer() {
        const intervalRef = useRef();

        useEffect(() => {
          const id = setInterval(() => {
            // ...
          });
          intervalRef.current = id;
          return () => {
            clearInterval(intervalRef.current);
          };
        });

      // ...
    }
  // get prev props/state
      function Counter() {
        const [count, setCount] = useState(0);

        const prevCountRef = useRef();
        useEffect(() => {
          prevCountRef.current = count;
        });
        const prevCount = prevCountRef.current;

        return <h1>Now: {count}, before: {prevCount}</h1>;
      }
  // get previous props/state with custom hook
      function Counter() {
        const [count, setCount] = useState(0);
        const prevCount = usePrevious(count);
        return <h1>Now: {count}, before: {prevCount}</h1>;
      }

      function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }
  // force a rerender by incrementing a counter
  // avoid this if possible
      const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

       function handleClick() {
         forceUpdate();
       }

  // measure a dom node
    function MeasureExample() {
      const [height, setHeight] = useState(0);

      const measuredRef = useCallback(node => {
        if (node !== null) {
          setHeight(node.getBoundingClientRect().height);
        }
      }, []);

      return (
        <>
          <h1 ref={measuredRef}>Hello, world</h1>
          <h2>The above header is {Math.round(height)}px tall</h2>
        </>
      );
    }

  // reusable hook to measure a dom node
      function MeasureExample() {
        const [rect, ref] = useClientRect();
        return (
          <>
            <h1 ref={ref}>Hello, world</h1>
            {rect !== null &&
              <h2>The above header is {Math.round(rect.height)}px tall</h2>
            }
          </>
        );
      }

      function useClientRect() {
        const [rect, setRect] = useState(null);
        const ref = useCallback(node => {
          if (node !== null) {
            setRect(node.getBoundingClientRect());
          }
        }, []);
        return [rect, ref];
      }
  // example specifying dependencies
      function ProductPage({ productId }) {
        const [product, setProduct] = useState(null);

        useEffect(() => {
          // By moving this function inside the effect, we can clearly see the values it uses.
          async function fetchProduct() {
            const response = await fetch('http://myapi/product' + productId);
            const json = await response.json();
            setProduct(json);
          }

          fetchProduct();
        }, [productId]); // ✅ Valid because our effect only uses productId
        // ...
      }

  // use a flag to specify when to fetch
      useEffect(() => {
        let ignore = false;
        async function fetchProduct() {
          const response = await fetch('http://myapi/product/' + productId);
          const json = await response.json();
          if (!ignore) setProduct(json);
        }

        fetchProduct();
        return () => { ignore = true };
      }, [productId]);

  // useEffect  + useCallback hook
    function ProductPage({ productId }) {
      // ✅ Wrap with useCallback to avoid change on every render
      const fetchProduct = useCallback(() => {
        // ... Does something with productId ...
      }, [productId]); // ✅ All useCallback dependencies are specified

      return <ProductDetails fetchProduct={fetchProduct} />;
    }

    function ProductDetails({ fetchProduct }) {
      useEffect(() => {
        fetchProduct();
      }, [fetchProduct]); // ✅ All useEffect dependencies are specified
      // ...
    }

  // use react.memo to shallow compare props
  // similar to shouldComponentUpdate
      const Button = React.memo((props) => {
        // your component
      });

  // useMemo
  // if a,b doesnt change, it returns previous known value
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  // skip rerendering of child component
      function Parent({ a, b }) {
        // Only re-rendered if `a` changes:
        const child1 = useMemo(() => <Child1 a={a} />, [a]);
        // Only re-rendered if `b` changes:
        const child2 = useMemo(() => <Child2 b={b} />, [b]);
        return (
          <>
            {child1}
            {child2}
          </>
        )
      }

  // avvoid creating an object until its required
      function Image(props) {
        const ref = useRef(null);

        // ✅ IntersectionObserver is created lazily once
        function getObserver() {
          if (ref.current === null) {
            ref.current = new IntersectionObserver(onIntersect);
          }
          return ref.current;
        }

        // When you need it, call getObserver()
        // ...
      }
1
```