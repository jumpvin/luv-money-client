import { combineReducers } from 'redux';
import example from './example/exampleReducers';
import userToken from './auth/authReducers';
import getPool from './getPool/getPoolReducers';
import newRule from './newRule/newRuleReducers';
import popUpState from './popUpState/popUpReducers';
import invite from './invite/inviteReducers';
import addUser from './addUser/addUserReducers';
import newExpense from './newExpense/newExpenseReducers';
import submitPayment from './submitPayment/submitPaymentReducers';
import addPool from './addPool/addPoolReducers';

const reducers = combineReducers({
  example,
  userToken,
  newExpense,
  newRule,
  getPool,
  popUpState,
  invite,
  addUser,
  submitPayment,
  addPool,
});

export default reducers;
