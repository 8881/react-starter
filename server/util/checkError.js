'use strict';

module.exports = check;

function check(res) {
  return res instanceof Error || res.affectedRows === 0;
}
