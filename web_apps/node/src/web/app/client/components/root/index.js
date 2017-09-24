import React from 'react'
import { render } from 'react-dom'
import App from './App';

function renderApp(THIS_APP = App) {
  if (typeof document !== 'undefined') return render(
  	<THIS_APP />,
    document.querySelector('#app')
  );

  console.log('hello')
}

renderApp();
