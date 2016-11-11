const apiMiddleware = (api) => {
  return ({ dispatch, getState }) => next => action => {
    if(typeof action === 'object' && !!action.api){
      console.log('api request'); 
    } else {
      next(action);
    }
  }
}

export default apiMiddleware; 
