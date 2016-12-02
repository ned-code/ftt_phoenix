export const createReducer = (handlers, initialState) => 
  (state = initialState, action = {}) => 
    !!handlers[action.name] && 'function' === typeof(handlers[action.name]) 
      ? handlers[action.name](state, action) 
      : state;
