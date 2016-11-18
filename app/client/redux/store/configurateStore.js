import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import { reducers } from 'redux/modules';

import clientMiddleware from 'redux/middlewares/clientMiddleware';

import ApiClient from 'redux/utils/api';

const client = new ApiClient();

export const configurateStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(
      clientMiddleware(client),
      thunk,
      routerMiddleware(browserHistory),
      createLogger({ collapsed: true })
    )
  );
}


