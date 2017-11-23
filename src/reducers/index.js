import { combineReducers } from 'redux';

import test from './test';

const rootReducer = combineReducers({
  config: (state = {}) => state,
  test,
});

export default rootReducer;
