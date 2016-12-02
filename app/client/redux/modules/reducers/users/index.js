import { createReducer } from 'redux/utils/reducer';

import { 
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL
} from 'redux/modules/constants/users';

const initialState = {};

/* REDUCER */
export default createReducer({
  [LOAD]: (...rest) => console.log('LOAD', rest),
  [LOAD_SUCCESS]: () => console.log('LOAD_SUCCESS'),
  [LOAD_FAIL]: () => console.log('LOAD_FAIL')
}, initialState); 

/* SELECTORS */
