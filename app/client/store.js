import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import clientMiddleware from 'Helpers/redux/clientMiddleware';
import { reducers } from 'Client/reducers';

import Server from 'Services/Server';

const server = new Server();

export const configurateStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(
      clientMiddleware(server),
      thunk,
      createLogger({ collapsed: true })
    )
  );
}


