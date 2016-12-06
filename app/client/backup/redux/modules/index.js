import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from 'redux/modules/reducers/app';
import users from 'redux/modules/reducers/users';

export const reducers = combineReducers({
  app,
  users,
  routing
});

