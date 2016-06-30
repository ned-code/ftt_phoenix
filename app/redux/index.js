import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect'

import app from './modules/app/app';
import user from './modules/user/user'; 
import staticData from './modules/staticData/staticData'; 

const rootReducer = combineReducers({
  reduxAsyncConnect,
  app,
  user,
  staticData
});

export default rootReducer;
