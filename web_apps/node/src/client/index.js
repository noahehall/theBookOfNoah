import React from 'react'
import { render } from 'react-dom'
import App from './components/App';

console.log('render app')
render(
  <App />,
  document.querySelector('#app')
);
