import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import React from 'react';
import storeCreator from 'store';

const history = createHistory();
const store = storeCreator(history);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          {this.props.children}
        </ConnectedRouter>
      </Provider>
    )
  }
}
