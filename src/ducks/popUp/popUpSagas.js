import { put, call, takeLatest } from 'redux-saga/effects';
import { getPool } from '../../services/api';

import {
  TRIGGER_GET_POOL,
  GET_POOL_SUCCESS,
  GET_POOL_LOADING,
  GET_POOL_FAIL,
} from '../getPool/getPoolActions';

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

function* watchGetPool() {
  yield takeLatest(TRIGGER_GET_POOL, sagaGetPool);
}

export default watchGetPool;
