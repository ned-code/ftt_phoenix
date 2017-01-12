export const createReducer = (handlers, initialState) => 
  (state = initialState, action = {}) => 
    !!handlers[action.type] && 'function' === typeof(handlers[action.type]) 
      ? handlers[action.type](state, action) 
      : state;
