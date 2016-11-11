export default clientMiddleware = () => {
  return ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      };

      if (!!action.request) {
        const { types, request, ...rest } = action;
        const [ REQUEST, SUCCESS, FAILURE ] = types;
        next( { ...rest, type: REQUEST });

        const actionPromise = request(client);
        actionPromise.then(
          (result) => next({ ...rest, result, type: SUCCESS }),
          (error) => next({ ...rest, error, type: FAILURE })
        );

      } else if (!!action.emit) {
        const { type, cb, ...rest } = action;

        next({ ...rest, type });

        socket.emit(type, cb);

      } else if (!!action.requests) {
        const { requests, ...rest } = action;

        const promise = new Promise((resolve, reject) => resolve());

        requests.forEach(item => {
          promise.then((...data) => {
            return dispatch(item(Object.assign(rest, data)));
          });
        });

      } else {
        return next(action);
      };

    }
  }
}
