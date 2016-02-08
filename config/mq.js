'use strict';

const amqp = require('amqplib');

let amqpConn = null;

module.exports = () => {
  return amqpConn;
}

if (!amqpConn) {
  connect();
}

function connect() {
  amqp.connect('amqp://localhost')
    .then(conn => {

      conn.on("error", err => {
        console.error("[AMQP] conn error: ", err.message);
        // if (err.message !== "Connection closing") {
        //   console.error("[AMQP] conn error", err.message);
        // }
      });

      conn.on("close", () => {
        console.error("[AMQP] reconnecting");
        return setTimeout(connect, 1000);
      });

      console.log("[AMQP] connected");
      amqpConn = conn;
    })
    .catch(err => {
      console.warn('[AMQP] connect error: ', err);
      return setTimeout(connect, 1000);
    });
};
