import { createStore, compose, applyiddleware } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import DevTools from 'DevTools/DevTools';
import reducers from 'redux/modules/reducers';
import clientMiddleware from 'redux/middlewares/clientMiddleware';

export const configurateStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    compose(
      applyiddleware(
        clientMiddleware(),
        thunk,
        routerMiddleware(browserHistory),
        createLogger({ collapsed: true })
      ),
      DevTools.instrument()
    )
  );
}


