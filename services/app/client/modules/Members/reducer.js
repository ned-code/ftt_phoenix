import { createReducer } from 'Helpers/redux/createReducer';

import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from './actions';

const initialState = {
  users: [],
};

/* REDUCER */
export default createReducer({
  [LOAD]: (state, action) => state,
  [LOAD_SUCCESS]: (state, action) => {
    return { ...state, users: action.result }
  },
  [LOAD_FAIL]: (state, action) => state
}, initialState); 

/* SELECTORS */
