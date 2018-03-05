'use strict';

require('es5-shim');

require('es5-shim/es5-sham');

require('core-js/fn/object/assign');

require('core-js/es6/promise');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

require('normalize.css');

require('./global.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ErrorBoundary from './components/ErrorBoundary';

var store = (0, _configureStore2.default)({ config: _config2.default });

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_routes2.default, null)
  )
), document.getElementById('root'));