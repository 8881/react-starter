'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _index = require('./containers/default/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./containers/test/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./containers/foo/index');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _index2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/test', component: _index4.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/foo', component: _index6.default })
  );
};

exports.default = Routes;
module.exports = exports['default'];