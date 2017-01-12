import { createReducer } from 'Helpers/redux/createReducer';

const initialState = {};

/* REDUCER */
export default createReducer({
  [ 'INIT' ]: (state, action) => {
    return state;
  }
}, initialState); 

/* SELECTORS */
