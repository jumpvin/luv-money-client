import { combineReducers } from 'redux';
import example from './example/exampleReducers';
import userToken from './auth/authReducers';
import getPool from './getPool/getPoolReducers';
import popUpState from './popUp/popUpReducers';

const reducers = combineReducers({
  example,
  userToken,
  getPool,
  popUpState,
});

export default reducers;
