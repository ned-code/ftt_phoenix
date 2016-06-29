import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/Root';

import Landing from './components/Pages/Landing';
import NotFound from './components/Pages/NotFound';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Landing} />
    <Route path="/landing" component={Landing} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
