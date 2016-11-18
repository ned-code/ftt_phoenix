import { createReducer } from 'redux/utils/reducer';

const initialState = {};

/* REDUCER */
export default createReducer({
  ['INIT']: () => console.log('INIT')
  //[LOAD]:(state)=>state,
  //[LOAD_FAIL]:(state)=>state,
  /*
  [LOAD_SUCCESS]:(state, action)=> { 
    const res = action.result;
    return state.set(res.shotId, res.data); 
  }
  */
}, initialState); 

/* SELECTORS */
export const is = () => true;
