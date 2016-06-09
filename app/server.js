import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import Config from '../config';
import { Reducer } from './redux'
import { App } from './containers';

const app = Express()
const port = Config.get('app.port'); 

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) { 
  // Create a new Redux store instance
  const store = createStore(Reducer);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const initialState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState))
};

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>FamilyTreeTop Project</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

app.listen(port, ()=> console.log(`Server started on port  ${port}`));

