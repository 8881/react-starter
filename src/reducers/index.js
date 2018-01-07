import { combineReducers } from 'redux';

import test from './test';
import login from './login';
import admin from './admin';

const rootReducer = combineReducers({
  config: (state = {}) => state,
  test,
  login,
  admin,
});

export default rootReducer;
