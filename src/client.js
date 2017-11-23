import 'es5-shim';
import 'es5-shim/es5-sham';
import 'core-js/fn/object/assign';
import 'core-js/es6/promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import config from './config';
import configure from './store/configureStore';
import 'normalize.css';

// import ErrorBoundary from './components/ErrorBoundary';

const store = configure({ config, });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{routes}</BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
