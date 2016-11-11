import { createStore, compose, applyiddleware } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import DevTools from 'DevTools/DevTools';
import reducers from 'redux/modules/reducers';

import { apiMiddleware, socketMiddleware } from 'redux/middlewares';
import { api, socket } from 'redux/api';

export const store = createStore(
  reducers,
  {},
  compose(
    applyiddleware(
      apiMiddleware(api),
      socketMiddleware(socket),
      thunk,
      routerMiddleware(browserHistory),
      createLogger({ collapsed: true })
    ),
    DevTools.instrument()
  )
);

