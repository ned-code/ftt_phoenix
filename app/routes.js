import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/Root';

import NotFound from './components/Pages/NotFound';

export default (
  <Route path='/' component={ Root }>
    <IndexRoute component={ NotFound } />

    <Route path='*' component={ NotFound } status={ 404 } />
  </Route>
);
