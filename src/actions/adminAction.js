import { ADMIN } from '../actionTypes';
import fetch from '../utils/fetch';
import config from '../config';

export const update = (payload) => ({
  type: ADMIN,
  payload,
});

export const change = (key, value) => (dispatch) => {
  dispatch(update({
    [key]: value,
  }));
};

export const check = (username, password) => async (dispatch) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }

  const res = await fetch({
    method: 'POST',
    url: `${config.host}/api/auth/check`,
    headers: {
      authorization: token,
    }
  }).catch(ex => console.error(ex));
  if (res.code === 200) {
    dispatch(update({ user: res.data }));
  } else {
    location.replace('/login');
  }
};

export const logout = () => () => {
  localStorage.removeItem('token');
  location.replace('/login');
};
