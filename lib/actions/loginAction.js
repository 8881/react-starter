'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submit = exports.change = exports.update = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _actionTypes = require('../actionTypes');

var _fetch = require('../utils/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var update = exports.update = function update(payload) {
  return {
    type: _actionTypes.LOGIN,
    payload: payload
  };
};

var change = exports.change = function change(key, value) {
  return function (dispatch) {
    dispatch(update((0, _defineProperty3.default)({}, key, value)));
  };
};

var submit = exports.submit = function submit(username, password) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState$login, username, password, res;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState$login = getState().login, username = _getState$login.username, password = _getState$login.password;

              console.log(username, password);

              if (!(!username || !password)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt('return', false);

            case 4:
              _context.next = 6;
              return (0, _fetch2.default)({
                method: 'POST',
                url: _config2.default.host + '/api/auth/login',
                param: {
                  username: username, password: password
                }
              }).catch(function (ex) {
                return console.error(ex);
              });

            case 6:
              res = _context.sent;

              if (res.code === 200) {
                localStorage.setItem('token', res.data);
                location.replace('/admin');
              } else {
                alert('登录失败');
              }

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};