/*
 * app errors
 */

const TOKEN_ERROR = 9001;

const GLOBAL_ERRORS = {};
GLOBAL_ERRORS[TOKEN_ERROR] = 'token失效';

export {
  TOKEN_ERROR,
  GLOBAL_ERRORS,
};
