/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const LOGOUT = 'ad/App/LOGOUT';

export const SET_AUTH = 'ad/App/SET_AUTH';
export const GLOBAL_ERROR = 'ad/App/GLOBAL_ERROR';

export const CHANGE_PROMPT_INFO = 'easub/App/CHANGE_PROMPT_INFO';

export const USERINFO_REQUESTING = 'easub/App/USERINFO_REQUESTING';
export const USERINFO_REQUEST_SUCCESS = 'easub/App/USERINFO_REQUEST_SUCCESS';
export const USERINFO_REQUEST_ERROR = 'easub/App/USERINFO_REQUEST_ERROR';
