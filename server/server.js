'use strict';

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}

const Koa = require('koa');
const kcors = require('kcors');
const KoaBody = require('koa-body');
const favicon = require('koa-favicon');
const router = require('./router');

const app = new Koa();

app.use(KoaBody());
app.use(kcors());
app.use(favicon(__dirname + '/lib/images/favicon.ico'));
app.use(router.routes());

module.exports = app;
