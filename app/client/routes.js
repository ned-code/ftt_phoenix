import React from 'react';
import { BrowserRouter as Router, Match, Miss } from 'react-router';

import createHistory from 'history/createBrowserHistory';

import App from 'Modules/App';

import Landing from 'Modules/Landing';
import Login from 'Modules/Login';

import Layout from 'Modules/Layout';

import Dashboard from 'Modules/Dashboard';
import Calendar from 'Modules/Calendar';
import Members from 'Modules/Members';
import Family from 'Modules/Family';

import NotFound from 'Modules/NotFound';

const history = createHistory();

export const createRoutes = (store) => {

  return (
    <Router>
      <App pattern='/'>
        <Landing pattern='/' exactly />  
        <Login pattern='/login' />  
        <Layout pattern='/v1' history={history}>
          <Dashboard pattern='/v1/dashboard'  />
          <Calendar pattern='/v1/calendar' />
          <Members pattern='/v1/members' />
          <Family pattern='/v1/family' />
        </Layout>
        
        <NotFound />
      </App>
    </Router>
  );
}; 
