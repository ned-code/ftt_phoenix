import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { match } from 'react-router'
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';

import Config from '../config';
import Routes from './routes';
import Html from './helpers/Html';
import { Reducer } from './redux'

const app = Express()
const port = Config.get('app.port'); 

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) { 
   // Create a new Redux store instance
   const store = createStore(Reducer);
   match({ routes: Routes(store), location: req.url }, (err, redirect, renderProps) => {
      if (err) {
        res.status(500).send(error.message)
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search)
      } else if (renderProps) {
        loadOnServer({...renderProps, store })
        .then(() => {
          const component = (
            <Provider store={store} key="provider">
              <ReduxAsyncConnect {...renderProps} />
            </Provider>
          );

          res.status(200);
          res.send('<!doctype html>\n' + renderToString(<Html html={component} store={store}/>));
        }); 
      };
    });
};

app.listen(port, ()=> console.log(`Server started on port  ${port}`));

