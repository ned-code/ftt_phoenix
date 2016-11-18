import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from 'redux/modules/app/reducer';

export const reducers = combineReducers({
  app,
  routing
});

