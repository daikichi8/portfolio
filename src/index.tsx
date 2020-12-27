import React from 'react';
import ReactDOM from 'react-dom';
import './Index.scss';
import App from './App';
import * as serviceWorker from './ServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
