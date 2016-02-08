'use strict';

const co = require('co');
const amqpConn = require('../config/mq');

module.exports = function () {

  return co(function* () {

    // throw "Splode'd!";

    const q = 'hello';
    const msg = 'Message in a bottle.';

    const channel = yield amqpConn().createConfirmChannel();
    yield channel.assertQueue(q);
    channel.sendToQueue(q, new Buffer(msg));
    yield channel.waitForConfirms();
    channel.close();

    return `Sent ${msg}`;


  }).catch(err => {
    return `Error: ${err}`;
  });

}