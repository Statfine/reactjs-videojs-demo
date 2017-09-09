/*
 * App request
 */

import { API_BASE_V2 } from 'common/constants';
import request from 'utils/request';
import 'whatwg-fetch';

const appRequest = {
  userinfoRequest() {
    return request(`${API_BASE_V2}/users/info`)
      .then((data) => {
        const userInfo = data.data;
        return userInfo;
      })
      .catch(() => {
        throw new Error('获取用户信息失败');
      });
  },

  userLogout() {
    return request(`${API_BASE_V2}/auth/logout`, {
      method: 'DELETE',
    });
  },
};
export default appRequest;
