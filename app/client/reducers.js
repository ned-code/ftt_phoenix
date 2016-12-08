import { combineReducers } from 'redux';

import dashboard from 'Modules/Dashboard/reducer';
import members from 'Modules/Members/reducer';

import { routerReducer } from 'Modules/ReactRouterRedux';

export const reducers = combineReducers({
  dashboard,
  members,

  routing: routerReducer
});

