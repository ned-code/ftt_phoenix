import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from 'Containers/App';

import {
  Dashboard,
  Members,

  Login,

  NotFound
} from 'Pages';

export const createRoutes = (store) => {
  
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="members" component={Members} />

        <Route path="login" component={Login} />

        <Route path='*' component={NotFound} status={404} />
      </Route>
    </Router>

  );
}; 
