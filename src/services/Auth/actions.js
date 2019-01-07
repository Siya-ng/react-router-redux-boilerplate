import * as types from '../types';

export function login(params){
  return {
    type: types.AUTH_LOGIN,
    payload: {
      email : params.email,
      password: params.password,
    }
  }
};

export function register (params) {
  return {
    type: types.AUTH_REGISTER,
    payload: {
      email: params.email,
      password: params.password,
      firstName: params.firstName,
      lastName: params.lastName,
      contactNumber: params.contactNumber,
    }
  }
}