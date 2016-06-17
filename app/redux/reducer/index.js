import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import App from './App';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  App
});
