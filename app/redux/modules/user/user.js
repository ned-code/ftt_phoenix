import { createReducer } from '../../utils/createReducer';

const LOAD = "user/LOAD_USER";
const LOAD_SUCCESS = "user/LOAD_USER_SUCCESS";
const LOAD_FAIL = "user/LOAD_USER_FAIL";

const initialState = {
  statuses: {}
};

export default createReducer({
  [LOAD]: state => state.set('data', {}),
  [LOAD_FAIL]: state => state.set('data', {}), 
  [LOAD_SUCCESS]: (state, action) => state.set('data', action.result),
}, initialState);

export const getStatuses = () => {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) =>client.get('/api/user') 
  }
};
