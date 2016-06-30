import { createStore, applyMiddleware, compose } from 'redux';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom';
import createLogger from 'redux-logger';
import rootReducer from '../';

import clientMiddleware from '../middleware/clientMiddleware';
import ApiClient from '../utils/ApiClient';


const __PRODUCTION__ = __PRODUCTION__ || process.env.NODE_ENV === 'production'; // eslint-disable-line

const logger = createLogger({
  collapsed: true,
  predicate: () =>
    process.env.NODE_ENV === 'development',
});

const client = new ApiClient();
const middlewares = [
  clientMiddleware(client),
  !__PRODUCTION__ && logger,
].filter(Boolean);

let finalCreateStore;
if (__DEVELOPMENT__ && __DEVTOOLS__) {
  const { persistState } = require('redux-devtools');
  const DevTools = require('../../components/DevTools/DevTools').default;
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
} else {
  finalCreateStore = applyMiddleware(...middlewares)(createStore);
}

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState, batchedSubscribe(batchedUpdates));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../', () => {
      const nextRootReducer = require('../index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
