import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import user from './modules/user/user'; 

const rootReducer = combineReducers({
  reduxAsyncConnect,
  user
});

export default rootReducer;
