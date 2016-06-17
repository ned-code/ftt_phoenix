import path from 'path'
import Express from 'express'
import favicon from 'serve-favicon';
import compression from 'compression';

import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import createHistory from 'react-router/lib/createMemoryHistory';

import Config from '../config';
import getRoutes from './routes';
import Html from './helpers/Html';
import ApiClient from './helpers/ApiClient';
import { createStore } from './redux'

const app = Express()
const port = Config.get('app.port'); 

import { App } from './containers';

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) { 
   // Init ApiClient
   const client = new ApiClient(req);

   // Create a new Redux store instance
   const store = createStore(memoryHistory, client, {});

   const memoryHistory = createHistory(req.originalUrl);
   const history = syncHistoryWithStore(memoryHistory, store);

   match({ history, routes: getRoutes(store), location: req.originalUrl }, (err, redirect, renderProps) => {
      if (err) {
        res.status(500).send(error.message)
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search)
      } else if (renderProps) {
        loadOnServer({...renderProps, store, helpers: {client}}).then(() => {

          const component = (
            <Provider store={store} key="provider">
              <ReduxAsyncConnect {...renderProps} />
            </Provider>
          );

          res.status(200);
          res.send('<!doctype html>\n' + renderToString(<Html html={component} store={store}/>));
        }); 
      } else {
        res.status(404).send('Not found');
      };
    });
};

app.listen(port, ()=> console.log(`Server started on port  ${port}`));

