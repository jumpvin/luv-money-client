import { combineReducers } from 'redux';
import example from './example/exampleReducers';
import userToken from './auth/authReducers';
import getPool from './getPool/getPoolReducers';

const reducers = combineReducers({
  example,
  userToken,
  getPool,
});

export default reducers;
