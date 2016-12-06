import React from 'react';
import { BrowserRouter as Router, Match, Miss } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import SubMatch from './submatch';

import Landing from 'kit/components/Landing';


export const createRoutes = (store) => {
  //const history = syncHistoryWithStore(browserHistory, store);
  /*
        <Match pattern='dashboard' component={Dashboard} />
        <Match pattern='calendar' component={Calendar} />
        <Match pattern='members' component={Members} />
        <Match pattern='family' component={Family} />

        <Match exactly pattern='/' component={Landing} />
        <Match pattern='/login' component={Login} />
        <Match pattern='/v1' component={MainApp} />
        <Miss component={NotFound} />
  */

  return (
    <Router>
      <div>
        <Match exactly pattern='/' component={Landing} />
        <Match pattern='/login' component={Landing} />
        <SubMatch pattern='/app' component={Landing}>
          <Match pattern='/app/dashboard' render={()=>(<div>dashboard</div>)} />
          <Match pattern='/app/calendar' render={()=>(<div>calendar</div>)} />
          <Match pattern='/app/members' render={()=>(<div>members</div>)} />
          <Match pattern='/app/family' render={()=>(<div>family</div>)} />
        </SubMatch>
      </div>
    </Router>
  );

}; 
