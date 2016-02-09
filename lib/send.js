'use strict';

const co = require('co');
const amqpConn = require('../config/mq');

module.exports = function () {

  return co(function* () {

    // throw "Splode'd!";

    const msg = 'Message in a bottle.';

    const channel = yield amqpConn().createConfirmChannel();

    // not recommended - sent to queue direct
    // const q = 'hello';
    // yield channel.assertQueue(q);
    // channel.sendToQueue(q, new Buffer(msg));

    // recommended - publish to exchange with routing key
    // dev code: exchange, queue and bind queue - preferred to do this in the devops code
    // yield channel.assertExchange('rocks', 'direct');
    // yield channel.assertQueue('rockqueue');
    // yield channel.bindQueue('rockqueue', 'rocks', 'thrower');
    // publish to and exchange with a routing key
    channel.publish('rocks', 'thrower', new Buffer(msg));

    yield channel.waitForConfirms();
    channel.close();

    return `Sent ${msg}`;

  }).catch(err => {
    return `Error: ${err}`;
  });

}
