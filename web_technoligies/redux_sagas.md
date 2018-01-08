# links
  - [saga tut](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
    - skipped:
      - `making our code testable`
      - `declarative effects` the testing part
  - [the task interface](https://redux-saga.js.org/docs/api/index.html#task)
  - [channel](https://redux-saga.js.org/docs/api/index.html#channel)
  - [sequencing sagas](https://redux-saga.js.org/docs/advanced/SequencingSagas.html)
  - [task cancelletion](https://redux-saga.js.org/docs/advanced/TaskCancellation.html)
    - skipped:
      - `testing generators with fork effect`
  -  [testing sagas](https://redux-saga.js.org/docs/advanced/Testing.html)
    - skipped this entire thing
  - [using runSaga](https://redux-saga.js.org/docs/advanced/UsingRunSaga.html)
    - skipped this entire thing
  - [using channels](https://redux-saga.js.org/docs/advanced/Channels.html)
    - skipped
      - `use event channels to pass WebSocket events into your saga`
      - `Using channels to communicate between Sagas`


# TODO: https://redux-saga.js.org/docs/api/
  - take.maybe
  - put.resolve
  - cps(fn, ..args)
  - join(task)
  - select(selector, ...args)
  - flush(channel)
  - getContext(prop)
  - runSaga(options, saga, ...args)
  - cloneableGenerator(generatorFunc)
  -

# background
  - saga: a generator function
  - task: the task interface specifies the result of running a saga using `fork`, `middleware.run` or `runSaga`
  - channel: object used to send and receive messages between tasks
    - TODO: finish this
  - yield: yielding from tasks is great for representing asynchronous control flow in linear (non-parallel) style
    - i.e. executing async tasks sequentially
  - yield*: compose multiple sagas sequently, great for executing macro-tasks ina procedural style
## patterns
  - watch-and-fork:
    - use a `while(true)` loop to `take` a specifc action
    - on each action, `yield fork(...)` to run the task in the background and begin waiting for the next one
  -




# best practices
  - don't import dispatch within sagas; use `put` instead
    - you want your sagas to be isolated to be easily testable
  - only yield effects withhin sagas (never promises)
    - again, this makes it easier to test
  - dont use the built-in `yield*` for sequencing sagas
    - instead use the more generic middleware composition mechanism
  - use try-catch blocks when appropriate (thinking about performance)
    - for forked tasks, put the try-catch block in the task definition
      - you can't catch errors from forked tasks. A failure in an attached fork will cause the forking parent to abort (Just like there is no way to catch an error inside a parallel Effect, only from outside by blocking on the parallel Effect).
  - always sanitize your event sources when creating eventChannels
    - never pass null/undefined
    - always structure your event channel data like redux actions `{ number }` > `number`




# system
  1. saga middleware: a redux middleware function that takes an array of sagas to run


# API
## other
  ```js
    // task interface
      `task.isRunning()` //	true if the task hasn't yet returned or thrown an error
      `task.isCancelled()`	// true if the task has been cancelled
      `task.result()` //	task return value. `undefined` if task is still running
      `task.error()`	// task thrown error. `undefined` if task is still running
      `task.done` //	a Promise which is either resolved with task's return value or  rejected with task's thrown error
      `task.cancel()` //	Cancels the task (If it is still running)

  ```


## core: `import { blah } from 'redux-saga'`
  - delay: `yield delay(1000)`
    - wait (block) X ms



## [effects](https://redux-saga.js.org/docs/api/): `import { blah } from 'redux-saga/effects'`
  -  an object that contains some information to be interpreted by the middleware
  - When a middleware retrieves an Effect yielded by a Saga, the Saga is paused until the Effect is fulfilled.
  - blocking effects: the generator is paused and cannot perform/handle anything else until the effect is terminated/resolved
  - non-blocking calls: starts a task in the background allowing for a generator to continue executing other LOC


### dispatching actions
  - put `yield put({ type: 'INCREMENT' })`
    - dispatch an action

### responding to actions
  - take: `const action = yield take('*')`
    - take effects are resolved by dispatching actions
    - suspends (blocks) the Generator until a matching action is dispatched, i.e. blocks until the action is dispatched and then runs the function
    - this allows you to implement complex control flows as opposed to `takeEvery`
  - takeEvery:
    - allows multiple saga tasks to be forked concurrently
    - `yield takeEvery('INCREMENT_ASYNC', incrementAsync)`
      - will pull the action and run the function
    - `yield take(['LOGOUT', 'LOGIN_ERROR'])`
      - will pull the first dispatched action then terminate without running the other action(s)
    - runs a function concurrently (non blocking) everytime action X is dispatched
  - takeLatest: `yield takeLatest('FETCH_REQUESTED', fetchData)`
    - allows only the latest task to be run at any moment
      - useful to handle ajax requests where we want to only have the response to the latest request
    - if a previous task is still running when another is initialized, the previous task will be automatically cancelled

### initializing tasks
#### non-blocking
  - notes
    - attached vs detatched non-blocking tasks
      - Attached forks remains attached to their parent task by the following rules
        - completion: a saga terminates only after it finishes execution or all attached (child) forks are terminated
          - i.e. all blocking/non-blocking code within a parent saga must terminate (whether resolve/reject) but not error
        - error propagation: the saga terminates when any of its attached (child) sagas raise uncaught errors or its main body of instructions throws an error
          - any unterminated (i.e. pending) tasks will be cancelled
    - detached forks live in their own execution context
      - a parent doesn't wait for detached forks to terminate
      - cancelling a parent doesn't automatically cancel detched forks
        - you need to cancel them explicitly
  - fork: `yield fork(authorize, user, password)`
    - create attached forks
    - starts a task in the background (non-blocking), passing its arguments to the function
  - spawn: `yield spawn(authorize, user, password)`
    - create detached forks that behave like top-level tasks
  - throttle: `yield throttle(500, 'INPUT_CHANGED', handleInput)`
    - throttle a sequence of dispatched actions
      - i.e. ignore subsequent dispatched actions for X-time after the previous one
  - debounce (see `examples: recipies`)
    - cancel current tasks if a new action is dispatched within X-time since the previos one


#### sequential
  - call: `yield call(delay, 1000)`
    - instructs the middleware to call a function with the given parameters and wait (blocking) for it to return


#### parallel
  - all: `yield all([ helloSaga(), watchIncrementAsync() ])`
    - the generator is blocked until all effects are resolved or as soon as one is rejected
      - behaves just like `Promise.all`
    - used in your `rootSaga` generator function to start all sagas in parallel
    - used to initialize tasks in parallel (as opposed to call which is sequential)
  - race: `const {blah, bloop} = yield race({ blah: fn1(), bloop: fn2() })`
    - execute tasks in parallel and cancel the remaining upon the first task resolving/rejecting

### cancelling tasks
  - notes
    - caller vs callee contract
      - remember `Cancellation` propogates downward
      - remember returned values and uncaught errors propagates upward
      - the caller (which invokes the async operation)
      - the callee (the invoked operation)
      - The callee is responsible for performing the operation. If it has completed (either success or error) the outcome propagates up to its caller and eventually to the caller of the caller and so on. That is, callees are responsible for completing the flow.
  - cancel:
    - `const task = yield fork(authorize, user, password)`
    - `yield cancel(task)`
    - cancels a forked task, and if the task definition includes a try-catch with a `finally` block, will force it execute it's `finally` block
    - use in combination with `cancelled`
  - cancelled: `if (yield cancelled()) {...}`
    - returns true if it's task is cancelled, usually specified in a `finally` block within a try-catch
    -


### channels
  - notes
    - generalize take & puts (input/output) effects
      - to communicate with external event sources (e.g. responding to a a DOM event)
      - connect two/more sagas
      - queue/buffer specific actions
  - actionChannel: `const requestChan = yield actionChannel('REQUEST')`
    - queues tasks in a channel that will be pushed to a `yield take(requestChannel)` if none are being executed or once the current one is terminated
      - be default buffers all requests by default
      - use with `buffers` or create your own for different strategy
    - workflow
      0. create an action channel listening for specific actions to be dispatched
      1. take (pull) dispatched action payloads from the actionchannel
      2. initiate a blocking request (e.g. call) to any subsequent actions in the channel are queued until the current one terminates
  - buffer: `const requestChan = yield actionChannel('ACTION', buffers.sliding(5))`
    - `buffer.none()`: no buffering, new messages will be lost if no pending takers
    - `buffers.fixed(#)`: new messages will be buffered up to `#`, overflow will raise error
    - `buffers.expanding(#)`: like fixed but overflow will cause the buffer to expand dynamically
    - `buffers.dropping(#)`: same as fixed but overflow will silently drop messages
    - `buffers.sliding(#)`: same as fixed but overflow will insert new message at the end and drop the oldest message in queue
#### responding to events:  import { eventChannel, END } from 'redux-saga'
  - effectChannel: `eventChannel(subscriber = emitter => {...})`
    - a factory function for creating channels that buffer event sources (DOM Events, web sockets, etc)(not redux store)
    - subscriber function: initialize external event source and routes all incoming events from the source to the channel utilizing the `emitter` argument
  - END: `emitter(END)`
    - notify any `eventChannel` consumer that the channel is closed, i.e. no other messages will be delivered
    - closing a channel will terminate all sagas blocked on a `take` from that channel and move the saga to its `finally` block (if it exists)


# examples
## basic
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

    // catch all actions - e.g. to create a logger
    // the '*' catches all dispatched actions
      yield takeEvery('*', function* logger(action) {
        const state = yield select()

        console.log('action', action)
        console.log('state after', state)
      })

  ```

## control flow
  ```js
    // control flow: run a task only when a dispatched action is pulled from the store
      function* watchAndLog() {
        while (true) {
          const action = yield take('*')
          const state = yield select()

          console.log('action', action)
          console.log('state after', state)
        }
      }

    // dispatch an action ONLY AFTER 3 other actions are pulled
      function* watchFirstThreeTodosCreation() {
        for (let i = 0; i < 3; i++) {
          const action = yield take('TODO_CREATED')
        }
        yield put({type: 'SHOW_CONGRATULATION'})
      }

    // action B is only permitted after action A
      function* loginFlow() {
        while (true) {
          yield take('LOGIN')
          // ... perform the login logic
          yield take('LOGOUT')
          // ... perform the logout logic
        }
      }

    // execute tasks in parallel and cancel the remaining upon the first resolving/rejecting
      function* fetchPostsWithTimeout() {
        const {posts, timeout} = yield race({
          posts: call(fetchApi, '/posts'),
          timeout: call(delay, 1000)
        })

        if (posts)
          put({type: 'POSTS_RECEIVED', posts})
        else
          put({type: 'TIMEOUT_ERROR'})
      }

    // sequence multiple sagas (dont do this, use middleware composition instead)
      function* playLevelOne() { ... }

      function* playLevelTwo() { ... }

      function* playLevelThree() { ... }

      function* game() {
        const score1 = yield* playLevelOne()
        yield put(showScore(score1))

        const score2 = yield* playLevelTwo()
        yield put(showScore(score2))

        const score3 = yield* playLevelThree()
        yield put(showScore(score3))
      }

    // sequence multiple sagas using composition
      function* fetchPosts() {
        yield put(actions.requestPosts())
        const products = yield call(fetchApi, '/products')
        yield put(actions.receivePosts(products))
      }

      function* watchFetch() {
        while (yield take(FETCH_POSTS)) {
          //  When yielding a call to a generator, the Saga will wait for the generator to terminate before progressing, then resume with the returned value (or throws if an error propagates from the subtask).
          yield call(fetchPosts) // waits for the fetchPosts task to terminate
        }
      }

    // get all the results from multple sagas
      function* mainSaga(getState) {
        // start all the sub-generators in parallel, wait for them to finish, then resume with all the results
          const results = yield all([call(task1), call(task2), ...])
          yield put(showResults(results))
      }


    // require a task to be completed with X time before initializing some other task
      function* game(getState) {
        let finished
        while (!finished) {
          // has to finish in 60 seconds
          const {score, timeout} = yield race({
            score: call(play, getState),
            timeout: call(delay, 60000)
          })

          if (!timeout) {
            finished = true
            yield put(showScore(score))
          }
        }
      }
  ```

## channels
  ```js
    // queue tasks in an action channel
      function* watchRequests() {
        // 1- Create a channel for request actions
        const requestChan = yield actionChannel('REQUEST')
        while (true) {
          // 2- take from the channel
          const {payload} = yield take(requestChan)
          // 3- Note that we're using a blocking call
          yield call(handleRequest, payload)
        }
      }

      function* handleRequest(payload) { ... }

    // create an event channel from an interval
      // this creates the eventChannel
        function countdown(secs) {
          return eventChannel(emitter => {
              const iv = setInterval(() => {
                secs -= 1
                if (secs > 0) {
                  emitter(secs)
                } else {
                  // this causes the channel to close
                  emitter(END)
                }
              }, 1000);
              // The subscriber must return an unsubscribe function
              return () => {
                clearInterval(iv)
              }
            }
          )
        }

      // consume the eventChannel
        export function* saga() {
        const chan = yield call(countdown, value)
        try {
          while (true) {
            // take(END) will cause the saga to terminate by jumping to the finally block
            let seconds = yield take(chan)
            console.log(`countdown: ${seconds}`)
          }
        } finally {
          if (yield cancelled()) {
            chan.close()
            console.log('countdown cancelled')
          }
        }
      }
  ```

## recipes
  ```js
    // throttle input events
      function* handleInput(input) {
        // ...
      }
      function* watchInput() {
        yield throttle(500, 'INPUT_CHANGED', handleInput)
      }

    // debounce input events
      function* handleInput({ input }) {
        // debounce by 500ms
        yield call(delay, 500)
        ...
      }

      // this method uses takeLatest to auto-cancel the current task
        function* watchInput() {
          // will cancel current running handleInput task
          yield takeLatest('INPUT_CHANGED', handleInput);
        }
      // this logic uses take + loop to cancel current task
        function* watchInput() {
          let task
          while (true) {
            const { input } = yield take('INPUT_CHANGED')
            if (task) {
              yield cancel(task)
            }
            task = yield fork(handleInput, input)
          }
        }

    // retry an ajax request after Y-TIME if error occurs, exit after X failures
      function* updateApi(data) {
        // use for-loop and remove catch-if statement for unlimited retries
        for(let i = 0; i < 5; i++) {
          try {
            const apiResponse = yield call(apiRequest, { data });
            return apiResponse;
          } catch(err) {
            if(i < 4) {
              // inform user of error
              yield put({
                type: 'UPDATE_RETRY',
                error
              })

              yield call(delay, 2000);
            }
          }
        }
        // attempts failed after 5 attempts
        throw new Error('API request failed');
      }

      export default function* updateResource() {
        while (true) {
          // use takeLatest to only retry the last request
          const { data } = yield take('UPDATE_START');
          try {
            const apiResponse = yield call(updateApi, data);
            yield put({
              type: 'UPDATE_SUCCESS',
              payload: apiResponse.body,
            });
          } catch (error) {
            yield put({
              type: 'UPDATE_ERROR',
              error
            });
          }
        }
      }
  ```
