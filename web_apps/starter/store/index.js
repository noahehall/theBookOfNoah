import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ConnectedRouter, routerReducer as router, routerMiddleware, push } from 'react-router-redux';
import blah from './reducers/blah';
import { initialState } from './initialState';
import thunk from 'redux-thunk';

export default function storeCreator(history) {
  /** setup redux devtools browser extension */
  const composeEnhancers = (
    typeof window !== 'undefined'
    && ['production', 'test'].indexOf(process.env.NODE_ENV) === -1
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
  )
   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
   : compose;

  return createStore(
    combineReducers({
      blah,
      router,
    }),
    initialState,
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}
