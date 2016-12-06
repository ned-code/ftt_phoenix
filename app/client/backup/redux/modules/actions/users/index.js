import { 
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL
} from 'redux/modules/constants/users';

export function load() {
  return {
    actions: [ LOAD, LOAD_SUCCESS, LOAD_FAIL ],
    promise: (server) => server.api.get('/users/load')
  };
}
