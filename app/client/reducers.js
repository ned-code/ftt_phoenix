import { combineReducers } from 'redux';

import Dashboard from 'Modules/Dashboard/reducer';

import { routerReducer } from 'Modules/ReactRouterRedux';

export const reducers = combineReducers({
  Dashboard,
  routing: routerReducer
});

