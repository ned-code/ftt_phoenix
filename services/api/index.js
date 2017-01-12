console.log('Api Server start'); // eslint-disable-line

import Express, { Router } from 'express';
import { Server } from 'http';
import socket from 'socket.io';
import middleware from './middleware';
import setRoutes from './routes';
import bodyParser from 'body-parser';

import validation, { validationErrorHandler } from './core/validation';

const app = new Express();
const http = Server(app);
const io = socket(http);

const router = new Router();

setRoutes(router, middleware, validation);
app.use(bodyParser.json());

app.use('/api', router);

io.on('connection', socket => {
  console.log('io connection'); // eslint-disable-line

  socket.on('request', ({ url, method, headers, data }, fn) => {
    const res = {
      req: { method, url, headers },
      json: data => res.req.next(data),
      ws: true
    };

    if (method === 'GET') {
      res.req.query = data;
    } else if (method === 'DELETE') {
      res.req.query = data;
    } else if (method === 'POST') {
      res.req.body = data;
    } else if (method === 'PUT') {
      res.req.body = data;
    }
    router.handle(res.req, res, out => fn(null, out));
  });

  socket.on('disconnect', () => {});
});

app.use(validationErrorHandler);

http.listen(4000, () => {
  console.log('Api Server: listening on *:4000'); // eslint-disable-line
});
