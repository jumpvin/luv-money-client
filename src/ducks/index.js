import { combineReducers } from 'redux';
import example from './example/exampleReducers';
import userToken from './auth/authReducers';
import getPool from './getPool/getPoolReducers';
import newRule from './newRule/newRuleReducers';
import popUpState from './popUpState/popUpReducers';

const reducers = combineReducers({
  example,
  userToken,
  newRule,
  getPool,
  popUpState,
});

export default reducers;
