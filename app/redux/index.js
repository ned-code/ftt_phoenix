import { combineReducers } from 'redux';

import app from './modules/app/app';
import user from './modules/user/user';

const rootReducer = combineReducers({
  app,
  user,
});

export default rootReducer;
