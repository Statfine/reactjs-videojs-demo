/*
 * app constants api
 */

let apiHost = window.location.origin;
apiHost = apiHost.indexOf('localhost') !== -1 ? 'http://livebeta.easub.com' : apiHost;
apiHost = 'http://livebeta.easub.com';
export const API_BASE = `${apiHost}/api/v1`;
export const API_BASE_V2 = `${apiHost}/api/v2`;
