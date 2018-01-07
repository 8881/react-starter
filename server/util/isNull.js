'use strict';

module.exports = isNull;

function isNull(any) {
  return Object.prototype.toString.call(any) === '[object Null]';
}
