import { TEST } from '../actionTypes';

const initialState = {
  data: [],
};

const test = (state = initialState, action) => {
  if (action.type === TEST) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default test;
