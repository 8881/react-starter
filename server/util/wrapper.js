'use strict';

const res = {
  code: 200,
  data: {},
  msg: ''
};

module.exports = wrapper;

function wrapper(data = {}) {
  if (data instanceof Error) {
    return Object.assign({}, res, {
      code: 403,
      msg: data.message || '网络异常.',
    });
  } else {
    return Object.assign({}, res, {
      data,
    });
  }
}
