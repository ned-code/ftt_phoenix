import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/Root';

import Landing from './components/Pages/Landing';
import Profile from './components/Pages/Profile';
import Dashboard from './components/Pages/Dashboard';
import FamilyTree from './components/Pages/FamilyTree';

import NotFound from './components/Pages/NotFound';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Landing} />
    <Route path="/profile" component={Profile} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/familytree" component={FamilyTree} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
