import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

console.log('inside app')
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={styles.app}>
fdsaasfasdasdfasdfasdf
        </div>
      </BrowserRouter>
    )
  }
}
