/*
 * App reducer
 */
import { fromJS } from 'immutable';

import { combineReducers } from 'redux-immutable';
import {
  USERINFO_REQUESTING,
  USERINFO_REQUEST_SUCCESS,
  USERINFO_REQUEST_ERROR,
  GLOBAL_ERROR,
  CHANGE_PROMPT_INFO,
  LOGOUT,
  SET_AUTH,
} from './constants';

import {
  TOKEN_ERROR,
} from './errors';

const initialState = fromJS({
  userInfo: {
    email: '',
    name: '',
  },
  libraries: [],
  loggedIn: localStorage.access_token && Date.now() < localStorage.expires_in,
  promptInfo: {
    promptOpen: false,
    promptMsg: '默认提示信息',
    promptType: 0,
  },
  userInfoRequesting: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return state.set('loggedIn', action.newAuthState);
    case USERINFO_REQUESTING:
      return state.set('userInfoRequesting', true);
    case USERINFO_REQUEST_SUCCESS:
      return state.mergeDeep(fromJS({ userInfo: action.userInfo }))
        .setIn(['userInfo', 'socials'], fromJS(action.userInfo.socials))
        .set('userInfoRequesting', false);
    case USERINFO_REQUEST_ERROR:
      return state.setIn(['userInfo', 'error'], action.error)
        .set('userInfoRequesting', false);
    case LOGOUT: {
      return state;
    }
    case GLOBAL_ERROR:
      switch (action.code) {
        case TOKEN_ERROR:
          window.location.href = window.location.origin;
          break;
        default:
          break;
      }
      return state;
    case CHANGE_PROMPT_INFO:
      return state.mergeDeep(fromJS({ promptInfo: action.val }));
    default:
      return state;
  }
}

export default combineReducers({
  appReducer,
});
