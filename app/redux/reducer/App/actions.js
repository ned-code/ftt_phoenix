const LOAD = 'app/LOAD';
const LOAD_SUCCESS = 'app/LOAD_SUCCESS';
const LOAD_FAIL = 'app/LOAD_FAIL';

export function load(globalState){
  return {
    type: LOAD
  }
}
