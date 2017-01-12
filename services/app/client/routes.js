import React from 'react';

/* MODULES */
import App from 'Modules/App';

import Landing from 'Modules/Landing';
import Login from 'Modules/Login';

import Layout from 'Modules/Layout';

import Dashboard from 'Modules/Dashboard';
import Calendar from 'Modules/Calendar';
import Members from 'Modules/Members';
import Family from 'Modules/Family';

import NotFound from 'Modules/NotFound';

import { ConnectedRouter } from 'Modules/ReactRouterRedux';

export const createRoutes = (store) => {
  return (
    <ConnectedRouter>
      <App pattern='/'>
        <Landing pattern='/' exactly />  
        <Login pattern='/login' />  
        <Layout pattern='/v1' >
          <Dashboard pattern='/v1/dashboard'  />
          <Calendar pattern='/v1/calendar' />
          <Members pattern='/v1/members' />
          <Family pattern='/v1/family' />
        </Layout>
        <NotFound />
      </App>
    </ConnectedRouter>
  );
}; 
