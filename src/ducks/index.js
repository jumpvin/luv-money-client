import { combineReducers } from 'redux';
import example from './example/exampleReducers';
import recieveOweCard from './getOweCard/getOweCardReducers';
import userToken from './auth/authReducers';
import getPool from './getPool/getPoolReducers';

const reducers = combineReducers({
  example,
  recieveOweCard,
  userToken,
  getPool,
});

export default reducers;
