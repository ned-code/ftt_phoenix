import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from 'Root';
import NotFoundPage from 'Pages/NotFound';

import HomePage from 'Pages/Home';
import LoginPage from 'Pages/Login';

export default (
  <Route path='/' component={ Root }>
    <IndexRoute component={ HomePage } />

    <Route path='/login' component={ LoginPage } />

    <Route path='*' component={ NotFoundPage } status={ 404 } />
  </Route>
);


