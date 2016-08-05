import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import configureStore from 'redux/store/configureStore';
import routes from './routes';

if (__DEVELOPMENT__) {
  window.Perf = require('react-addons-perf');
}

let initialState = {};

export const store = configureStore(initialState);
export const history = syncHistoryWithStore(browserHistory, store);

const dest = document.getElementById('root');
const component = (
  <Router render={(props) =>
        <ReduxAsyncConnect {...props} filter={item => !item.deferred} />
      } history={history}>
    {routes}
  </Router>
);

if (__DEVELOPMENT__ && __DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('devtools/DevTools/DevTools');
  ReactDOM.render(
    <Provider store={store} key='provider'>
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    dest 
  );
} else {
  ReactDOM.render(
    <Provider store={store} key='provider'>
      {component}
    </Provider>,
    dest
  );
}
