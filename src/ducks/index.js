import { combineReducers } from 'redux';
import example from './example/exampleReducers';
import userToken from './auth/authReducers';
import getPool from './getPool/getPoolReducers';
import newRule from './newRule/newRuleReducers';
import popUpState from './popUpState/popUpReducers';
import invite from './invite/inviteReducers';
import submitPayment from './submitPayment/submitPaymentReducers';

const reducers = combineReducers({
  example,
  userToken,
  newRule,
  getPool,
  popUpState,
  invite,
  submitPayment,
});

export default reducers;
