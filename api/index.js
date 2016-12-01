import express from 'express';
import bodyParser from 'body-parser';

import http from 'http';

import { mapUrl } from './helpers/url.js';
import * as actions from './actions/index.js';

import SocketIo from 'socket.io';

const app = express();
const server = new http.createServer(app);

const io = new SocketIo(server);
io.path('/ws');

app.use(bodyParser.json());

app.use((req, res) => {
  const splittedUrlPath = req.url.split('?')[0].split('/').slice(1);

  const {action, params} = mapUrl(actions, splittedUrlPath);

  if (action) {
    action(req, params)
      .then((result) => {
        if (result instanceof Function) {
          result(res);
        } else {
          res.json(result);
        }
      }, (reason) => {
        if (reason && reason.redirect) {
          res.redirect(reason.redirect);
        } else {
          console.error('API ERROR:', pretty.render(reason));
          res.status(reason.status || 500).json(reason);
        }
      });
  } else {
    res.status(404).end('NOT FOUND');
  }
});


const runnable = server.listen(4000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:4000/');
});

io.on('connection', socket => {
  console.log('io connection');
});

io.listen(runnable);
