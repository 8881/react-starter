'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = require('../actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  data: []
};

var test = function test() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === _actionTypes.TEST) {
    return (0, _extends3.default)({}, state, action.payload);
  }
  return state;
};

exports.default = test;
module.exports = exports['default'];