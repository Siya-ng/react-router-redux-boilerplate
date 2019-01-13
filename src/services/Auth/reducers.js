import * as types from '../types';

export const DEFAULT_STATE = {
  isLoading : false,
  error: null,
  isAuthenticated: localStorage.getItem('jwt-token') ? true : false,
  user: {},
}

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case types.AUTH_LOGIN: return {
      ...state,
      isLoading: true,
      error: null, 
      isAuthenticated: false,
      user: {},
    };
    case types.AUTH_LOGIN_SUCCESS: return {
      ...state,
      isLoading: false,
      isAuthenticated: true,
      user: action.payload,
    };
    case types.AUTH_LOGIN_FAILURE: return {
      ...state,
      isLoading: false,
      error: true, 
    };
    case types.AUTH_REGISTER: return {
      ...state,
      isLoading: true,
      user: action.payload,
    };
    case types.AUTH_SIGNOUT: return {
      ...state,
      isLoading: false,
      isAuthenticated: false,
      user: {},
    };
    default: return state;
  }
};