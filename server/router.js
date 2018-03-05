'use strict';

const Router = require('koa-router');
const api = require('./api/index');
const view = require('./view/index');

const router = new Router();

// rest api 服务
router.all('/api*', api);

// server render
router.get('*', view);

module.exports = router;
