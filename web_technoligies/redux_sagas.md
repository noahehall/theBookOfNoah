# links
  - [saga tut](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
    - skipped:
      - `making our code testable`


# background
  - saga: a generator function

# system
  1. saga middleware: a redux middleware function that takes an array of sagas to run


# API
## core: `import { blah } from 'redux-saga'`
  - delay: `yield delay(1000)`
    - wait (block) X ms



## effects: `import { blah } from 'redux-saga/effects'`
  - When a middleware retrieves an Effect yielded by a Saga, the Saga is paused until the Effect is fulfilled.

## management
  - all: `yield all([ helloSaga(), watchIncrementAsync() ])`
    - used in your `rootSaga` generator function to start all sagas at once
## actions
  - put `yield put({ type: 'INCREMENT' })`
    - dispatch an action


## initializing tasks
  - call: `yield call(delay, 1000)`
    - instructs the middleware to call af unction with the given parameters
  - takeEvery: `yield takeEvery('INCREMENT_ASYNC', incrementAsync)`
    - runs a function concurrently everytime action X is dispatched
  - takeLatest: `yield takeLatest('FETCH_REQUESTED', fetchData)`
    - allows only the latest task to be run at any moment
    - if a previous task is still running when another is initialized, the previous task will be automatically cancelled

# examples
  ```js
    // setup saga middleware
      import createSagaMiddleware from 'redux-saga'
      const sagaMiddleware = createSagaMiddleware()
      const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
      )

    // after creating your store, start your saga(s)
      sagaMiddleware.run(helloSaga) // or a rootSaga
  ```
