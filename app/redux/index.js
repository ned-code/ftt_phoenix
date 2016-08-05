import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { routerReducer } from 'react-router-redux';

import user from 'redux/modules/user';

const rootReducer = combineReducers({
  reduxAsyncConnect,
  user,
  routing: routerReducer
});

export default rootReducer;
