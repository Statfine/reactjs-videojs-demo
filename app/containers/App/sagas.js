/*
 * App sagas
 */
import { call, put } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import appRequest from './api';

import {
  USERINFO_REQUESTING, LOGOUT,
} from './constants';

import {
  userinfoRequestSuccess,
  userinfoRequestError,
} from './actions';

export function* requestUserInfo() {
  yield takeEvery(USERINFO_REQUESTING, function* () {
    try {
      const userInfo = yield call(appRequest.userinfoRequest);
      yield put(userinfoRequestSuccess(userInfo));
      localStorage.setItem('user_type', userInfo.policy.user_type);
      if (browserHistory.getCurrentLocation().pathname === '/') {
        yield put(push('/home'));
      }
    } catch (error) {
      const msg = error.message ? error.message : error;
      yield put(userinfoRequestError(msg));
    }
  });
}

function* logoutSaga() {
  yield* takeLatest(LOGOUT, function* () {
    try {
      yield call(appRequest.userLogout);
      const localStorage = global.window.localStorage;
      localStorage.removeItem('pre_url');
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_in');
      localStorage.removeItem('refresh_token');
      window.location.href = window.location.origin;
    } catch (error) {
      console.log(error);
    }
  });
}

export default [
  requestUserInfo,
  logoutSaga,
];
