import { put, call, takeLatest } from 'redux-saga/effects';
import { getPool, getBE } from '../../services/api';
import { NEW_EXPENSE_SUCCESS } from '../newExpense/newExpenseActions';
import { SUBMIT_PAYMENT_SUCCESS } from '../submitPayment/submitPaymentActions';

import {
  TRIGGER_GET_POOL,
  GET_POOL_SUCCESS,
  GET_POOL_LOADING,
  GET_POOL_FAIL,
  TRIGGER_GET_BE,
  GET_BE_SUCCESS,
  GET_BE_FAIL,
} from './getPoolActions';

function* sagaGetPool({ userId }) {
  try {
    let isLoading = true;
    yield put({ type: GET_POOL_LOADING, isLoading });
    const pool = yield call(getPool, userId);
    yield put({ type: GET_POOL_SUCCESS, pool });
    isLoading = false;
    yield put({ type: GET_POOL_LOADING, isLoading });
  } catch (err) {
    put({ type: GET_POOL_FAIL, err });
  }
}
function* sagaGetBE({ userId }) {
  try {
    const pool = yield call(getBE, userId);
    console.log('is is running', pool);
    yield put({ type: GET_BE_SUCCESS, pool });
  } catch (err) {
    put({ type: GET_BE_FAIL, err });
  }
}

function* watchGetPool() {
  yield takeLatest(TRIGGER_GET_POOL, sagaGetPool);
  yield takeLatest(NEW_EXPENSE_SUCCESS, sagaGetBE);
  yield takeLatest(SUBMIT_PAYMENT_SUCCESS, sagaGetBE);
}
function* watchGetBE() {
  yield takeLatest(TRIGGER_GET_BE, sagaGetBE);
}

export { watchGetPool, watchGetBE };
