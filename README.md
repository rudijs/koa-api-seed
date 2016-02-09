# koa-api-seed
KoaJS HTTP with RabbitMQ API Seed Starter

## Prequisites

- Node.js
- [docker-compose](https://docs.docker.com/compose/install/)

## Install

- `git clone git@github.com:rudijs/koa-api-seed.git`
- `cd koa-api-seed`
- `npm install`

## Usage

- `sudo docker-compose up -d`
- `node server.js`
- `curl localhost:3000`
- `curl localhost:3000/send`
- `http://localhost:15672/#/queues`

## Shutdown

- `sudo docker-compose stop`

## Notes

Sending a message to RabbitMQ has two options.

1. Send to a Queue direct.
2. Send to an Exchange with a Routing Key.

Send to a Queue direct is convenient, but it's an Anti Pattern.

When a message producer, we only care about sending the message to the right exchange with the right routing key.

There is a place where "send to queue" being valuable in a system design, it is there for a reason.

The vast majority of cases, you should avoid "send to queue" in favor of publishing a message to an exchange.

Send to an Exchange with a Routing Key also has two options.

The sender can assert the exchange, the queue and the binding of the queue to the exchange.

It's better to not do this and just publish to and exchange with a routing key.

Configuring the exhange, queue and binding should be done in the DevOps code.

Examples of all the options discussed here are in the code, non preferred methods are commented out.
