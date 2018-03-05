'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require('whatwg-fetch');

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var credentials = 'same-origin';
// import { Toast } from 'antd-mobile';

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(args) {
    var p, f, jsonRes;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            p = (0, _extends3.default)({
              method: 'get',
              url: '',
              param: {},
              headers: {},
              loading: true
            }, args);

            // if (p.loading) {
            //   Toast.loading('loading...', 9999999999, f => f, false);
            // }

            _context.prev = 1;
            f = void 0;

            if (!(p.method.toLowerCase() === 'get')) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return fetch(p.url + '?' + _querystring2.default.stringify(p.param), {
              credentials: credentials,
              headers: headers
            });

          case 6:
            f = _context.sent;
            _context.next = 16;
            break;

          case 9:
            if (!(p.method.toLowerCase() === 'post')) {
              _context.next = 15;
              break;
            }

            _context.next = 12;
            return fetch(p.url, {
              method: 'POST',
              headers: (0, _extends3.default)({
                'Content-Type': 'application/json'
              }, p.headers),
              redirect: 'follow',
              body: (0, _stringify2.default)(p.param),
              credentials: credentials
            });

          case 12:
            f = _context.sent;
            _context.next = 16;
            break;

          case 15:
            return _context.abrupt('return', false);

          case 16:
            _context.next = 18;
            return f.json().catch(function (err) {
              return console.log(err);
            });

          case 18:
            jsonRes = _context.sent;
            return _context.abrupt('return', jsonRes);

          case 22:
            _context.prev = 22;
            _context.t0 = _context['catch'](1);

            console.log('%c[' + p.method + ' fail] ' + p.url, 'color:#f24040;font-weight:600;');
            console.log('%c' + _context.t0, 'color:#f24040;font-weight:600;');
            // Toast.offline('Network Error.');

          case 26:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 22]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = exports['default'];