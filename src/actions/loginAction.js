import { LOGIN } from '../actionTypes';
import fetch from '../utils/fetch';
import config from '../config';

export const update = (payload) => ({
  type: LOGIN,
  payload,
});

export const change = (key, value) => (dispatch) => {
  dispatch(update({
    [key]: value,
  }));
};

export const submit = (username, password) => async (dispatch, getState) => {
  const { username, password } = getState().login;
  console.log(username, password);
  if (!username || !password) {
    return false;
  }
  const res = await fetch({
    method: 'POST',
    url: `${config.host}/api/auth/login`,
    param: {
      username, password,
    }
  }).catch(ex => console.error(ex));
  if (res.code === 200) {
    localStorage.setItem('token', res.data);
    location.replace('/admin');
  } else {
    alert('登录失败');
  }
};
