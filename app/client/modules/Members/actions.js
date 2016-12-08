export const LOAD = 'members/LOAD';
export const LOAD_SUCCESS = 'members/LOAD_SUCCESS';
export const LOAD_FAIL = 'members/LOAD_FAIL';

export const load = () => {
  return {
    actions: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: server => server.api.get('/users/load')
  }
}
