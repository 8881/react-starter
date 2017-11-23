import { TEST } from '../actionTypes';

export const update = (payload) => ({
  type: TEST,
  payload,
});

export const getData = () => async (dispatch, getState) => {
  dispatch({
    data: [1, 2, 3]
  });
};
