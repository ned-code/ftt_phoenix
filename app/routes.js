import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from 'Root';
import NotFoundPage from 'Pages/NotFound';

import LoginPage from 'Pages/Login';

import Dashboard from 'Pages/Dashboard';
import List from 'Pages/List';
import Notifications from 'Pages/Notifications';
import Tree from 'Pages/Tree';
import User from 'Pages/User';

export default (
  <Route path='/' component={ Root }>
    <IndexRoute component={ Dashboard } />

    <Route path='/login' component={ LoginPage } />

    <Route path='/dashboard' component={ Dashboard } />
    <Route path='/list' component={ List } />
    <Route path='/notifications' component={ Notifications } />
    <Route path='/tree' component={ Tree } />
    <Route path='/user' component={ User } />

    <Route path='*' component={ NotFoundPage } status={ 404 } />
  </Route>
);


