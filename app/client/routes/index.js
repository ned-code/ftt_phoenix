import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import MainApp from 'Containers/MainApp';

import {
  Dashboard,
  Calendar,
  Members,
  Family,

  Login,

  NotFound
} from 'Pages';

export const createRoutes = (store) => {
  
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path='/' component={MainApp}>
        <IndexRoute component={Dashboard} />
        <Route path='dashboard' component={Dashboard} />
        <Route path='calendar' component={Calendar} />
        <Route path='members' component={Members} />
        <Route path='family' component={Family} />

        <Route path="login" component={Login} />

        <Route path='*' component={NotFound} status={404} />
      </Route>
    </Router>

  );
}; 
