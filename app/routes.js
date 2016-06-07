import React from 'react';
import {IndexRoute, Route} from 'react-router';

import {
  App,
  Landing,
  Profile,
  BulletinBoard,
  FamilyTree,
  NotFound
  } from './containers';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>

      <Route path="profile" component={Profile}/>
      <Route path="bulletinboard" component={BulletinBoard}/>
      <Route path="familytree" component={FamilyTree}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};

