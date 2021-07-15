bookmark: https://flow.org/en/docs/types/classes/


# links
  - react
    - [react docs](https://reactjs.org/docs/getting-started.html)
    - [react top level api ref](https://reactjs.org/docs/react-api.html)
    - [handling events](https://reactjs.org/docs/handling-events.html)
    - [synthetic events](https://reactjs.org/docs/events.html)
    - [forms](https://reactjs.org/docs/forms.html)
 
  - flow
    - [getting started](https://flow.org/en/docs/getting-started/)
    - [library definitions](https://flow.org/en/docs/libdefs/)
    - [linting](https://flow.org/en/docs/linting/)
    - [types-first](https://flow.org/en/docs/lang/types-first/)
    - [react types](https://flow.org/en/docs/react/types/)
    - [how to type styled components](https://medium.com/maxime-heckel/https-medium-com-maximeheckel-how-to-efficiently-type-your-styled-components-with-flow-f43930a0dd2b)
    - [HOC](https://flow.org/en/docs/react/hoc/#toc-supporting-defaultprops-with-react-elementconfig)
    - [context](https://flow.org/en/docs/react/context/)
    - [children](https://flow.org/en/docs/react/children/)
    - [event handling](https://flow.org/en/docs/react/events/)
    - [use exact-by-default object type syntax](https://medium.com/flow-type/how-to-upgrade-to-exact-by-default-object-type-syntax-7aa44b4d08ab)
    - [utility types, definitely want to read this!](https://flow.org/en/docs/types/utilities/)
    - [generics](https://flow.org/en/docs/types/generics/)
  
  - [vscodium > vscode](https://github.com/VSCodium/vscodium/releases)
  - [disable unused builting extensions](https://stackoverflow.com/questions/48852007/type-aliases-can-only-be-used-in-a-ts-file/51034421) 
  - [components](https://flow.org/en/docs/react/components/)
  - 


# TLDR
  - a complete react17 study guide
  - often required when switching context
  - pairs well with [our frontendtech accessibility referece](./frontendtech_accessibility.md) and our *todo: updated javascript reference*


# react
## best practices
  - **ALWAYS**
    - decompose components for reusability 
    - *displayName* are only useful in *dev* for debugging, as they should be obsfucated in prod
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
    - bind event handlers in the constructor or use class fields syntax with an arrow function 
      - never use arrow functions directly in the callback as 
        - the component receives a new fn each time, 
        - if passed to child components, will cause axtra rerenders
  
  - **GENERALLY**
    - *PureComponent* > *shouldComponentUpdate* for auto shallow comparisons
    - import namespaces, [who the fk knows if it hinders/helps treeshaking?](https://github.com/airbnb/javascript/issues/1487)
      - [but it supremely saves us type with flow](https://flow.org/en/docs/react/types/)
    - You don’t need to annotate the return type of either your render() method or a stateless functional component
    
    - add a *useDebugValue* inside custom hook definitions to support dev experience but *ALWAYS* add a second formatting parm to defer expensive operations unless the hook is inspected
      - react doesnt recommend it for *EVERY* custom hook, but when did we ever follow directions?
    
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

## terms 
  - pure components: never alter their inputs & are idempotent
  - error boundaries 
    - copmonents for catching errors in their children and dispplaying fallback content
    - any component can be an error boundary by defining either *static getDerivedStateFromError* or *componentDidCatch*
  - error handling: exceptions thrown during rendering, life cycle methhods, or constructor call


## general
  - class components: have state and life cycle methods 

### DOM elements

### SyntheticEvent
  - evenhandlers receive instances of `SyntheticEvnet`
  - cross-browser wrapper around the UA native event 
    

### Concurrent Mode

### Testing


## lifecycle methods (in order)
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


## instance props & methods 
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

## React; top-level api
  - *React.Component*: have state and life cycle methods (PureComponent doesnt)
  
  - *React.PureComponent*: no state/life cycle methods but shallow compares new & old props automatically (i.e. implement shouldComponentUpdate)
  
  
  - *React.children*
  - *cloneElement*
  - *isValidElement*
  - *React.Fragment*
  - *React.createRef*
  - *React.forwardRef*
  - *React.lazy*
  - *React.Suspense*
  - 


## hooks 
  - let you into react life cycle features from a functional component
  - dont work inside classes
  - only at the top level of functional components 
  - dont call inside loops, conditions or nested functions
  - react tracks hooks via the order they are invoked

  - *useState*
    - add local state to functional copmonents
    - doesnt shallow merge old & new state like setstate
      - it *REPLACES* the entire state!
    - can & should be declared multiple times to keep state simple when using this hook
    - pass a fn to setState fn if 
      - *new* state depends on the *prev* state
      - initial state is the result of an expensive computation
  
  - *useEffect*
    - for dat afetching, subscriptions, changing dom elements, i.e any side asynchronous side effect
    - runs on every render soo make sure to:
      - add used vars in the dependency array
      - use an if condition before invoking side effect logic
      - always return a function to handle cleanup when the component unmounts
      - use multiple effect hooks for each side effect
    - usecases:
      - any side effect, e.g. mutations, timers, logging, etc
      - *componentDidMount*
      - *componentDidUpdate*
      - *componentWillUpdate*
    -  
  
  - *useLayoutEffect*
    - synchronous version of *useEffect* that fires synchronously after all DOM mutations but before the browser has a chance to paint
      - in comparison to *useEffect* that fires asynchronously
    - allows you to memoize effects but requires all dependent variables used inside the effect hook to be listed as a dep
    - prefer *useEffect* as this hook blocks visual updates (because its sync and when it fires)
    - usecases:
      - see *useEffect*
      - *componentDidMount*, *componentDidUpdate*
      - read layout information from the DOM and synchronously re-render (e.g. updating scroll position)

  - *useContext*
    - for global state thats accessible to any child component
    - forcibly rerenders all child components on update
    - can be at multiple levelsand the frist context.provider can intercept & handle it
      - think of the normal event bubbling logic
  
  - *useReducer*
    - alternative to *useState* for:
      - complex objects
      - lazy initialization of state 
      - advanced initialization of state
      - when next state depends on prev state
      - optimizing performance for components that trigger deep updates by passing a *dispatch* function instead of callbacks
  
  - *useCallback*
    - returns a memoized callback to calculate a new value when its dependencies change 
    - alternative to *useMemo* which provide the memoized value instead 
    - usecases:
      - a child component needs the dispatch because it controls the dependency values
      - 
  
  - *useMemo*
    - returns a memoized vlaue when its dependencies change 
    - runs during rendering
      - so **NO** side effects 
    - 
  
  - *useRef*
    - returns a mutable ref object that exist sfor the lifetime of the component 
    - gives you the *SAME* ref via *Object.is* logic
    - usecases:
      - needing to access a child imperetively; e.g. a dom node to set focus
      - keeping any mutable value around across renders
        - as it doesnt trigger a rerender when its value is mutated
    - 
  
  - *useImperativeHandle*
    - customizes the instance value expsosed to parent components when using *ref*
    - should be used with *forwardRef* when exporting *ANY* component that implements this hook
      - permits any consuming component to call `poop.current* to get a handle to the ref created in the component definition
    - react generally recommends staying away from this hook
    - usescases: whenever you need to write imperative code related to a *ref* object, e.g. a handle on a input dom element to handle focus

  - *useDebugValue*


## ReactDOM: top level api
  - *render*
  - *hydrate*
  - *unmountComponentAtNode*
  - *findDOMNode*
  - *createPortal*
  
  - *ReactDOM.createPortal*: render children into a dom node that exist outside the hierarchy of the parent component
    - event bubbling still occurs in the parent components hierarchy regardless of where the child element exists in the brownser DOM hierarchy
    - 


## ReactDOMServer: top level api
  - *renderToString*
  - *renderToStaticMarkup*
  - *renderToNodeStream*
  - *renderToSTaticNodeStream*
  - 

## react examples
  ```js
    /**
    * React
    */

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
            eventHandler = () => 'class fields syntax'

            unboundHandler () {
              // can bind in event handler 
            }

            poop = 'flush'
            render () {
              return (
                <button onClick={this.unboundHandler.bind(this, this.poop)} />
              )
            }
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

# FLOW!
  - flow has all the benefits of typescript with 0 of the limitations
  - fk typescript 

## best practices
  - fk mutations, use a immutable helper library
  - when using an object as a map, always use flows `indexer property`
    - it allows reads and writes using any key that matches the indexer key type


## gotchas
  - the `?` before the type marks the type as maybe, i.e. null|undefined|type
  - the `?` before the `:` in an object prop definition marks the prop as optional, i.e. can be missing from the object
    - `someObj = { optionalProp?: ?number}`
      - the prop is optional and can be missing
      - the value can be null|undefined|number
  - when you assign a type to a mutable variable (i.e. let|var)
    - you can only mutate the value to a compatible type
  - when you dont assign a type to a mutable variable (i.e. let|var)
    - flow tracks all previously assigned types to its type
      - `let foo = 42, foo = 'hello;` 
      - `let isOneOf: number | string = foo` <-- is true because of the previous assignments
  - arrow functions may not have a this parameter annotation, as these functions bind their this parameter at the definition site, rather than the call site.
  - Classes operate as values & types
    - i.e. you can use a class name wherever you would a type definition


## terms
  - refinement: the ability for a static type checker to be able to tell the type of variable a mixed/any/etc type is. usually occurs within an if/case statement before use of the variable
  - covariant: a type that is more specific that another type
  - invariant: 
  - tuple: a list with a limited set of items
    - tuples always have a fixed length based on its length when instantiated
    - are not a subtype of arrays, thus cant be used where one is expected & vice versa
    - only posses immutable array methods

## flow usage
  - `// @flow` typecheck this file
  - `// @noflow` do not typecheck this file
  - ignore the next line strategies
    - `// FlowFixMe` for type errors yo uintend to fix later
    - `// $FlowIssue` for type errors you think are flows fault
    - `// @FlowExpetedError` when you expect a type error
    - `// @FlowIgnore` when you want to ignore your code


## flow config
  - [include]
    - a path per line, accepts `*` and `**` globs
    - including a parent directory includes all child descendant directories
  - [ignore]
    - a path per line, accepts OCaml regular expressoins
    - match against absolute paths so start each path with `.*`
      - <PROJECT_ROOT> === the project root, use in `ignore` section and dont use `.*`
    - processed after & override anything in `[include]` section
    - any file ignored must be `import|require`ed using `flow-typed`
      - instead add these to files to `untyped|declarations` section
  - [untyped]
    - a path per line
    - matched against absolute paths so start each with `.*`
    - files to not typecheck, but still make requireable and importable
    - throw away types and treat modules as `any`
    - 
  - [libs]
    - a path per line
    - each pointing to type definitions
  - [lints]
    - TODO: see linting link
  - [options]
    - 1 option per line
    - omitted options use their default values
  - [version]
    - specify support flow version
  - [declarations]
    - path per line
    - use type information from thirdparty libraries without typing checking their contents
    - does not typecheck files
    - uses the signatures of all function, classes, etc. when checking other code


## examples
### errors and react types
  ```js
    // handling errors
      // $FlowFixMe
      // $FlowIssue[incompatible-type]
      /* $FlowIgnore[prop-missing] some other text here */
      /* $FlowFixMe[incompatible-cast] this
          is a multi-line
          comment */
      { /* $FlowIssue this is how you suppress errors inside JSX */ }
      someCode('with errors, all previous lines apply only to this line')

    // React type reference
    // this is how facebook does it, follow their lead or create your own framework
    // and namespaces should no longer hinder treeshaking
      import * as React from 'react';

    // any node that can be rnedered in a react application
    // use this and move on with your life
    React.Node
      // i.e.
        type Node = React.ChildrenArray<void | null | boolean | string | number | React.Element<any>>;
      // class component
        class MyComponent extends React.Component<{}> {
          render(): React.Node { /*render here */}
        }
      // fn component
        function MyComponent(props: {}): React.Node { /* some code... */}

    // the type of jsx element
    // e.g. returned from React.createElement()
    React.Element
      const element: React.Element<'div'> = <div />;


    //can be a single/nested array to any level
    React.ChildrenArray<T> 
      const children: React.ChildrenArray<number> = 42;
      const children: React.ChildrenArray<number> = [[1, 2], 3, [4, 5]];
      const array: Array<number> = React.Children.toArray(children); // flatten the array

    // need a better example
    // this is the ost abstract representation of a react component
    // useful for HOCs and library definitions
    React.AbstractComponent<Config, Instance> 


    // alwys use for  class/fns that receive/return react components
    // doesnt include strings, @see React.ElementType
    React.ComponentType<Props>
      const StyledAnchor: React.ComponentType<any> = styled(Clickable)`css declarations`
      // i.e.
      type ComponentType<Props> =
        | React.StatelessFunctionalComponent<Props>
        | Class<React.Component<Props, any>>;

    // same as React.ComponentType but includes renderable strings
    React.ElementType
      // i.e.
      type ElementType = | string | React.ComponentType<any>;

    // the most general type of all react elmenets
    // similar to `mixed` for all values
    React.MixedElement
      const element: React.MixedElement = <div />;
      // i.e.
        React.Element<React.ElementType>

    // type of a react stateless fn component
    React.StatelessFunctionalComponent<Props>
      // i.e.
        type StatelessFunctionalComponent<Props> = (props: Props) => React.Node;

    // key props
    React.Key
      type Key = string | number;

    // type of ref prop on rect elments, i.e. string/fn
    React.Ref<typeof Component>
      // i.e.
      type Ref<C> =
        | string
        | (instance: React.ElementRef<C> | null) => mixed;

    React.ElementProps<typeof Component>
    React.ElementConfig<typeof Component>
    React.ElementRef<typeof Component>
    React.Config<Props, DefaultProps>



  ```


### basic JS types
  ```js
    // modifiers
      // append to propName instead for function params and object props
      // prepend ? to type to make it optional
      // prepend ! to type to make it not nullable

    // list of types
      // number
      // string
      // boolean
      // null for null
      // void for undefined
      // Array<subtype>
      // symbol for Symbol
      // { propName: type }
      // { propName?: type }
      // { propName!: type }

    // union types: as one/more from a set of types
      const x: number | string = 'hello';
      const literalType: 'sucess' | 'warnning' = 'success';

    // variables and types
      const a: number = 42;
      const b: string = 'hello';
      const c: boolean = true;
      const e: number | undefined = 10;
      const f: Array<number> = [1, 2, 3];
      const g: mixed = z; // you must refine this type via typeof or some other checker before usig
      const h: any = 1; // op out of all type checking,  refrain from this as best you can
        // ^ very careful when using this with an object, as all of obj props will now be any (leak!)
        // ^ guard against this by declaring the obj.prop values to a type for assignment
      const d: ?number = null; // ? == maybe type, can be the declared|null|undefined


    // verifying types
      const x: symbol | number = Symbol();
      if (typeof x === 'symbol')
        const y: symbol = x;
      else
        const y: number = x;

    // basic function 
      function method(str: string, bool?: boolean, ...nums: Array<number>): void {}
      let method = (str: string, bool?: boolean, ...nums: Array<number>): void => {}
      function add(a: number, b: number): number {}
      // optional params can their set type, void, but NOT null
      function add(a?: number, b?: number): number | void {}
      // with default values, can be their set type, void, but NOT null
      function add(a: number = 2) {}
      // the return type is the same as whatever is passed into the function
      function identity<T> (value: T): T {}
      // required obj.value but but the value maybe null|undefined but must be declared
      // i.e. you have to pass the obj with value.type === numer|null|undefined
      function({ value }: { value: ?number })
      // to get around the issue, make the object.value optional, as well its type being the 'maybe'
      // lol dont let this catch u up bro!
      function({ value }: { value?: ?number })
      // the mixed type, use sparingly as it accepts anything!
      // you must 'refine' the type before returning a value else it throws
      function whatever(value: mixed) {
        switch (typeof value) {
          case 'string':
          // ...etc
        }

        // or like this
        if (Array.isArray(value))
        else if (value instanceof Event))
        // ...etc

        // or refine objects
        type A = { type: 'A' }
        type B = { type: 'B' }
        function blah(value: A | B ) {
          if (value.type === 'A')
          else // must be B
          // be careful when passing a refined type to another function
          // without types
          // it will invalidate the refinement ai the other function doesnt verify type
          // instead store the value before passing to silence flow errs if they occur
        }

        // save prop after refinement else flow throws err
        function method(value: { prop?: string }) {
          if (value.prop) {
            var prop = value.prop; // without this
            otherMethod(); // because of this 
            prop.charAt(0); // <-- throws err here 
          }
        }
      }


    // object properties
      // optional props can be their set type, void, but NOT null
      { propName: type, optionalProp?: type }
    
  ```

### function typing
  ```js
    // types
      // general types are capitlized
      // the below can be used to annotate a function, that has a .bar property
      type CallableObj = {
        (number, number): number,
        bar: string,
      }

    // function types
      (str: string, bool?: boolean, ...nums: Array<number>) => void
      // same thing but without names
      (string, boolean | void, Array<number>) => void
      // using it for a callback type
      function method(callback: (error: Error | null, value: string | null) => void) {}


    // functions with params
      // a function that accepts arbitrary functions
      function method(func: (...args: Array<any>) => any) {
        // func() can be called here with anything,
      }

      function method(param1: string, param2: boolean) {}
      // optional param ad ?: == missing|undefined|type but not null
      function method(optionalValue?: string) {}
    
    // rest params
      function method(...args: Array<number>) {}
    
    // function return type goes before the open braces
    // enforces that every branch of your function returns the same type
      function method(): string {} 
      // async implies promise, so must always return a promise
      async function method(): Promise<number> {}

    // function this context
      // the first param must be this, and must have a type
      function method<T>(this: { x: T }) : T {
        return this.x;
      }

    // predicate functions
      // useful when for utility functions, e.g. that run assertions on params
      // the body must be expressions, i.e. no variable declarations
      // but may call other predicate functions
      function truthy(a, b): boolean %checks {
        return !!a && !!b;
      }
      
    

    // type combinations
      type a: number;
      type b: string
      type c: a | b;
      type d: a & b

  ```

### class typing
  ```js
    // Class
    // this inside the class doesnt require type annotation
    // ^ but if a type is provided, it must be one of:
    // ^^ super type of the class
    // ^^ class type (for static methods)
    class MyClass {
      method(this: interface{ x: string}) void {} // errors since x is not defined in the class
      prop: number;
      meth2() { this.prop = 42 }

      static someNum: number;
      static func: (number) => number;

      // must be typed within the class
      // even tho the definition is added outside the class
      static definedElseware: (number) => number;
      evenOnPrototype: number => number;

    }
    MyClass.definedElseware = someOtherFuncMatchingTypeDefinition;
    MyClass.prototype.evenOnPrototype = anotherFuncMatchingTypeDefinition;

    const myInstance: MyClass = new MyClass()

    // class methods cannot be unound/rebound from the class on which they are defined
    const c = new MyClass();
      c.method; // ers
      const { method } = c; // errs
      c.method.bind({}); // errs

    // generics are parameterize for classes
    // you must pass a value for each parameeter
    class MyClass<A, B, C> {
      propA: A;
      method(val: B): C {}

      // or more likely
      constructor(a: A, b: B, c: C) {}
    }
    const myInstance2: MyClass<number, string, boolean> = new MyClass(1, '2', true);

  ```

### object typing
  ```js
    // objects
    // accessing a prop undefined on an object usually returns undefined, it flow it throws
      // in flow it throws
      const obj1: {
        prop1: string, // required
        prop2?: number, // optional prop: missing|undefined|type
        prop3: ?number, // optional value: prop is required, but value undefined|null|type

        // ..etc
      } = {
        prop1: 'hello',

        // ...etc
      }

      // generic object type
      const someObj: {}
      const someObj: {[key: string]: any}
      // example fn that accepts an object, e.g. props in react
        function method(props: {}) {};
        function method(props: {[key: string]: any }) {};

      // objects with methods
      const obj2: {
        meth1: (string, number) => string
      } = {
        // this can be redefined later
        meth1: (a, b) => a,
        // this cannot be redefined due to using method syntax
        meth1(a, b) { return a },
      }

      // objects created with properties are sealed objects, so you cant add props after creation
      const obj3 = { a, b}
      // objects created without properties are unsleaed objects
      const obj4 = {}

      // exact object types cannot be used to annotate objects with extra propreties
      type ExactObject: {| foo: string, bar: number |}
      // inact object types can be used to annotate objects with extra properties
      type InExactObject: { foo: string, bar: number }
      type InExactObject: { foo: string, ...} // preferred as its explicit we expect additional props
        const objError: ExactObject = { foo, bar, extraProp }
        const objOk: InExactObject = { foo, bar, extraProp }

      type obj1: {| foo: string |}
      type obj2: {| bar: string |}
      type objErr1: obj1 & obj2; // throws, use spread instead
      type obj3: {| ...obj1, ...obj2 |} // always do this for object intersectinos

    // indexer property
    // use whenever you dont know what the key name will be
    // but expect heavy i/o
    // be careful there is no type checking on indexer property values!
      // string is the indexer property
      // permits i/o on any key that is a string, and its value is a number
      const someObj: { [string]: number } = {}
        someObj['a'] = 1;
        someObj['b'] = 2;
      // you can optional label the indexer key for documentation purposes
      const someObj: = [i: number]: string } = {}
        someObj[0] = 'a'
        someObj[1] = 'b'

  ```


### array/tuple typing
  ```js
    // arrays
    // array type is just an array of any type
    // can be empty or not
      const arr: Array<number | string boolean> = [] // i like this one better, or wtf use flow for?
      const arr: Array<mixed> = ['a', 1, false] // be more specific when you can, see above
    // shorthand
      const arr: number[] = [1, 2, 3]
      // optional array, but array elements cannot be null, while the the array itself can be
        const arr: ?number[] = [] 
          const arr: ?Array<number> = [] // same as above
      // array cannot be null, but its elements can be
        const arr: (?number)[] = []
          const arr: Array<?number> = [] // same as above,
    
    // $ReadOnlyArray<T>
    // supertype of all arrays, tuples
    // a readonly array is a type that cannot be modified, but can be passed around!
    // generally use $ReadOnlyArray<T> wherever you appreciate immutability
    // as you dont have to refine the type when passing it around (i.e. manually check for type)
      const readonlyArray: $ReadOnlyArray<{x: number}> = [{x: 1}];
        readonlyArray[0] = {x: 42}; // Error!
        readonlyArray[0].x = 42; // OK

    // tuples
    // any array defined as [type, type, type] is a tuple
    // if you mutate the tuple, the new value must match the index type
      let tup1: [number] = [1];
      let tup2: [number, boolean] = [1, 2]
        // etc with up to 3 items
  ```


### catchall 
  ```js
    // refining maybe types
    function poop(value: ?number) {
      // this checks both null && undefined
      if (value != null) return value * 2;
      // or more readable but less expressive in my opinion
      if (typeof value === 'number') return * 2;
    }

  ```