export default function clientMiddleware (server) {
  return ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, type, names, ...rest } = action; // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }

      const [ REQUEST, SUCCESS, FAILURE ] = names;
      next({ ...rest, name: REQUEST });

      const actionPromise = promise(server);
      actionPromise.then(
        (result) => next({ ...rest, result, name: SUCCESS }),
        (error) => next({ ...rest, error, name: FAILURE })
      )
      .catch((error)=> {
        next({ ...rest, error, name: FAILURE });
      });

      return actionPromise;
    };
  };
}
