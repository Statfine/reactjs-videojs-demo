/*
 * token manager
 */

import { API_BASE_V2 } from 'common/constants';
import { setAuth } from 'containers/App/actions';
import request from './request';

let globalStore;
export function injectStoreToken(store) {
  globalStore = store;
}

export function watchNRefreshToken() {
  // refresh token in 3 hours; page refresh token in 3.5 hours
  if (global.window.localStorage.refresh_token) {
    setInterval(refreshToken, 10800000);
  }
}

export function refreshToken() {
  const localStorage = global.window.localStorage;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      refresh_token: localStorage.refresh_token,
    }),
  };

  localStorage.expires_in = Date.now() + 14400000; // 避免未返回之前重复执行
  return request(`${API_BASE_V2}/auth/refresh_token`, options)
    .then((body) => {
      localStorage.refresh_token_error = ''; // bug跟踪
      localStorage.access_token = body.data.access_token;
      localStorage.expires_in = Date.now() + (body.data.expires_in * 1000);
      localStorage.refresh_token = body.data.refresh_token;
      globalStore.dispatch(setAuth(true));
      return true;
    });
}

export function clearToken() {
  const localStorage = global.window.localStorage;
  localStorage.access_token = '';
  localStorage.refresh_token = '';
  localStorage.expires_in = '';
}
