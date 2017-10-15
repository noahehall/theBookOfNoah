import './index.scss';
import { ConnectedRouter } from 'react-router-redux'
import {
  Button,
  Grid,
} from 'react-bootstrap';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import About from 'components/About';
import createHistory from 'history/createBrowserHistory';
import Footer from 'components/Footer';
import Home from 'components/Home';
import Navigation from './Navigation';
import React from 'react';
import storeCreator from 'store';

const history = createHistory();
const store = storeCreator(history);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div id='page'>
            <header>
              <div>hello</div>
            </header>
            <main>
              <Grid>
                <Navigation />
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
              </Grid>
            </main>
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}
