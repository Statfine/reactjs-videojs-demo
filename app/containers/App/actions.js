import {
  GLOBAL_ERROR, CHANGE_PROMPT_INFO, LOGOUT,
  USERINFO_REQUESTING, USERINFO_REQUEST_SUCCESS, USERINFO_REQUEST_ERROR,
  SET_AUTH,
} from './constants';

export function setAuth(newAuthState) {
  return { type: SET_AUTH, newAuthState };
}

export function globalError(code) {
  return { type: GLOBAL_ERROR, code };
}

export function changePromptInfo(val) {
  return {
    type: CHANGE_PROMPT_INFO,
    val,
  };
}

export function userinfoRequest() {
  return { type: USERINFO_REQUESTING };
}

export function userinfoRequestSuccess(userInfo) {
  return { type: USERINFO_REQUEST_SUCCESS, userInfo };
}

export function userinfoRequestError(error) {
  return { type: USERINFO_REQUEST_ERROR, error };
}

export function logout() {
  return { type: LOGOUT };
}
