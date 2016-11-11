const socketMiddleware = (socket) => {
  return ({ dispatch, getState }) => next => action => {
    if(typeof action === 'object' && !!action.socket){
      console.log('socket.io'); 
    } else {
      next(action);
    }
  }
}

export default socketMiddleware; 
