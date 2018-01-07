import { ADMIN } from '../actionTypes';

const initialState = {
  user: {}
};

const admin = (state = initialState, action) => {
  if (action.type === ADMIN) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default admin;
