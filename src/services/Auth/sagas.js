import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from '../api';
import isEmpty from 'lodash/isEmpty';
import jwtDecode from 'jwt-decode';

import * as types from '../types';

const loginWithToken = (token) => {
  if (!token) {
    return null;
  }
  const user = jwtDecode(token);
  // save in local storage here
  localStorage.setItem('jwt-token', JSON.stringify(token));
  return user;
}

function* login(action) {
  try {
    const credentials = action.payload;
    const helperLogin = (cred ) => axios.post(API_URL.login, cred).then((resp) => {
      return resp.data
    }).catch((error) => {
      throw error;
    })

    const data = yield call(helperLogin, credentials);
    if (!data || !data.token) {
      throw new Error('Failed to get access token');
    }
    const user = loginWithToken(data.token)
    if (isEmpty(user)) {
      throw new Error('Failed to login');
    } else {
      yield put({
        type: types.AUTH_LOGIN_SUCCESS,
        payload: user,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: types.AUTH_LOGIN_FAILURE,
      payload: error,
    });
  }
}


function* register(action) {
  try {

    const credentials = action.payload;
    const helperRegister = (cred ) => axios.post(API_URL.register, cred).then((resp) => {

      return resp.data
    }).catch((error) => {
      throw error;
    })
    const data = yield call(helperRegister, credentials);
    if (!data || !data.token) {
      throw new Error('Failed to get access token');
    }
    const user = loginWithToken(data.token)

    // const user = yield call(loginWithToken, data.token);
    if (isEmpty(user)) {
      throw new Error('Failed to register');
    } else {
      yield put({
        type: types.AUTH_LOGIN_SUCCESS,
        payload: user,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: types.AUTH_LOGIN_FAILURE,
      payload: error,
    });
  }
}

export default function* () {
  yield takeLatest(types.AUTH_LOGIN, login);
  yield takeLatest(types.AUTH_REGISTER, register);
}
