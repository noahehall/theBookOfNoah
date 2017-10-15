import App from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom';

function render(Component) {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
}

render(App);

if (module && module.hot) {
    module.hot.accept("components/App", function() {
        var App = require('components/App').default;
        render(App)
    });
}
