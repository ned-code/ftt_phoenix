import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from 'Root';
import NotFound from 'Pages/NotFound';

import Home from 'Pages/Home';

export default (
  <Route path='/' component={ Root }>
    <IndexRoute component={ Home } />

    <Route path='/home' component={ Home } />
    <Route path='*' component={ NotFound } status={ 404 } />
  </Route>
);
