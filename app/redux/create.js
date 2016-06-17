/*
import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from './middleware/clientMiddleware';
import { routerMiddleware } from 'react-router-redux';

export default function createStore(history, client, data) {
  const reduxRouterMiddleware = routerMiddleware(history);

  //const middleware = [createMiddleware(client), reduxRouterMiddleware];
  const middleware = [reduxRouterMiddleware];

  const finalCreateStore = applyMiddleware(...middleware)(_createStore);

  const reducer = require('./reducer');

  const store = finalCreateStore(reducer, data);

  return store;
}
*/

import { createStore as _createStore } from 'redux';

export default function createStore(history, client, data){

    const reducer = require('./reducer');
    const store = _createStore(reducer, {});

    //console.log('store: ', store);

    return store;
};
