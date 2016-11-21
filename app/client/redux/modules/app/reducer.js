import { createReducer } from 'redux/utils/reducer';

const initialState = {};

/* REDUCER */
export default createReducer({
  ['INIT']: () => console.log('INIT')
}, initialState); 

/* SELECTORS */
