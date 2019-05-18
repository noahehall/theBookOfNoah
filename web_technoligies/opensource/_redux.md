# bookmarks
  - https://redux-docs.netlify.com/basics/data-flow


# links
  - [basic tutorial](https://redux-docs.netlify.com/basics/actions)



## actions
  - payloads of information that send data from your application to the store
    - represent the 'facts' about what happened
    - only source of information for the store
    - send them to the store using `store.dispatch()`;
  - action.type: indicates the type of action being performed
  - best practices
    - pass as little information to the action as necessary
    - store action types in a separate CONST file to reduce boilerplate


  - example
    ```js
      const ADD_TODO = 'ADD_TODO'


      {
        type: ADD_TODO,
        text: 'Build my first Redux app'
      }
    ```

### action creators
  - functions that create actions
  - example
    ```js
      // define an action creator
      function addTodo(text) {
        return {
          type: ADD_TODO,
          text
        }
      }

      // dispatch the action by passing the result
      // of the action creator to dispatch
      dispatch(addTodo(text))

      // or create a bound action creator that automatically dispatches
      const boundAddTodo = text => dispatch(addTodo(text))
    ```

    # components
    ## store
      ```js
        store.dispatch(someAction)

      ```

## reducers
  - specify how the application's state changes in response to actions sent to the store
    - are pure functions
      - never:
        - mutate arguments
        - perform side effects like API calls and routing transitions
        - calling non-pure functions, e.g. `Date.now()` or `Math.random()`
  - application state: all the application state is stored as a single object
  - handling actions
  - combine reducers: allows you to split reducers into multiple functions, then combine then into a single state shape for creating the store
    - { STATE_KEY: REDUCER_FUNCTION }
  - best practice
    - keep data, and UI state in separate branches of the state tree
    - at times different state entities need to reference each other
      - keep your state as normalized as possible without any nesting
      - keep every entity in an object stored with an ID as a key, and use IDs to reference it from other initities or lists
      -

## store
  - the object that brings actions and reducers together
    - holds application state
    - allows access to state via `getState()`
    - allows state to be updated via `dispatch(action)`
    - registers listeners via subscribe(listener)
    - handles unregistering of listeners via the functin returned by subscribe(listener)

    ```js


      import { createStore } from 'redux'
      import todoApp from './reducers'
      const store = createStore(todoApp /*, WINDOW.initialStateFromServer)
    ```

## connect