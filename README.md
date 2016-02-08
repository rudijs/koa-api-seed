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
