'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configure;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nextReducer = require('../reducers');

function configure(initialState) {
  var create = window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore;

  var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(create);

  var store = createStoreWithMiddleware(_reducers2.default, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', function () {
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
module.exports = exports['default'];