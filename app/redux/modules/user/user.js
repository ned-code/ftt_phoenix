import { createReducer } from '../../utils/createReducer';
import Immutable from 'immutable';

const initialState = {
  auth: false,
  data: []
};

// For async components
export default createReducer({
  ['GET_USER_REQUEST']: (state, { payload }) => state.set('data', []),

  ['GET_USER_SUCCESS']: (state, { payload }) => { 
    return state 
      .set('data', Immutable.fromJS(payload.data))
      .set('auth', true); 
  },

  ['GET_USER_FAILURE']: (state, { payload }) => console.log('error'),
}, initialState);

export const apiGetUser = () => ({
  mode: 'GET', // GET, POST
  type: 'GET_USER', // see: createReducer in this file
  url: 'user', // => api/user (see in /api/routes/user.js)
  data: {
    id: 1,
  },
  onSuccess: (res, dispatch) => { },
  onFailure: (res, dispatch) => { },
  callback: (res, dispatch) => { },
});
