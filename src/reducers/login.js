import { LOGIN } from '../actionTypes';

const initialState = {
  username: '',
  password: '',
};

const login = (state = initialState, action) => {
  if (action.type === LOGIN) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default login;
