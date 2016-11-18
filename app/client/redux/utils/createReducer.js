export const createReducer = (handlers, initialState) => (state = initialState, action = {}) => handlers[action.type](state, action); 
