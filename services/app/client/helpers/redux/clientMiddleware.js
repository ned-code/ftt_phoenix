export default function clientMiddleware (server) {
  return ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, actions, ...rest } = action; // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }

      const [ REQUEST, SUCCESS, FAILURE ] = actions;
      next({ ...rest, type: REQUEST });

      const actionPromise = promise(server);
      actionPromise.then(
        (result) => next({ ...rest, result, type: SUCCESS }),
        (error) => next({ ...rest, error, type: FAILURE })
      )
      .catch((error)=> {
        next({ ...rest, error, type: FAILURE });
      }); 

      return actionPromise;
    };
  };
}
