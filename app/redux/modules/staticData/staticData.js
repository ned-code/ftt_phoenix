import { createReducer } from '../../utils/createReducer';

const LOAD = "LOAD_STATIC_DATA";
const LOAD_SUCCESS = "LOAD_STATIC_DATA_SUCCESS";
const LOAD_FAIL = "LOAD_STATIC_DATA_FAIL";


const initialState = {
  data: {}
};

export default createReducer({
  ['LOAD_STATIC_DATA']: state => state.set('data', {}),
  ['LOAD_STATIC_DATA_FAIL']: state => state.set('data', {}), 
  ['LOAD_STATIC_DATA_SUCCESS']: (state, action) => state.set('data', action.result),
}, initialState);

export const loadStaticData = () => {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) =>client.get('/staticData/load') 
  }
};

