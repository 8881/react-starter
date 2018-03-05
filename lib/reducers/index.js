'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _admin = require('./admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  config: function config() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state;
  },
  test: _test2.default,
  login: _login2.default,
  admin: _admin2.default
});

exports.default = rootReducer;
module.exports = exports['default'];