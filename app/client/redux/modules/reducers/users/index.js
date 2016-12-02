import { createReducer } from 'redux/utils/reducer';

import { 
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL
} from 'redux/modules/constants/users';

const initialState = {
  status: null,
  data: null
};

/* REDUCER */
export default createReducer({
  [LOAD]: (state, action) => {
    return { ...state, status: 'load' };
  },
  [LOAD_SUCCESS]: (state, action) => {
    return { ...state, status: 'success', data: action.result };
  },
  [LOAD_FAIL]: (state, action) => {
    return { ...state, status: 'fail' };
  }
}, initialState); 

/* SELECTORS */
