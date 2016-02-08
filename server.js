'use strict';

var app = require('koa')();
var router = require('koa-router')();

const send = require('./lib/send');

router.get('/', function* (next) {
  this.body = 'Home';
});

router.get('/send', function* (next) {
  this.body = yield send();
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
