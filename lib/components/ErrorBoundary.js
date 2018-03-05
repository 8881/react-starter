'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function (_Component) {
  (0, _inherits3.default)(_default, _Component);

  function _default(props) {
    (0, _classCallCheck3.default)(this, _default);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).call(this, props));

    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }

  (0, _createClass3.default)(_default, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error, errorInfo: errorInfo
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.error) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Error Occur'
          ),
          _react2.default.createElement(
            'details',
            { style: { whiteSpace: 'pre-wrap' } },
            this.state.error && this.state.error.toString(),
            _react2.default.createElement('br', null),
            this.state.errorInfo.componentStack
          )
        );
      }
      return this.props.children;
    }
  }]);
  return _default;
}(_react.Component); /* eslint react/prefer-stateless-function:0, react/prop-types:0 */

exports.default = _default;
module.exports = exports['default'];