import { put, call, takeLatest } from 'redux-saga/effects';
import { postPool } from '../../services/api';

import {
  TRIGGER_ADD_POOL,
  ADD_POOL_SUCCESS,
  ADD_POOL_FAIL,
} from './addPoolActions';

function* sagaAddPool({ payload }) {
  try {
    const pool = yield call(postPool, payload);
    yield put({ type: ADD_POOL_SUCCESS, pool });
  } catch (err) {
    put({ type: ADD_POOL_FAIL, err });
  }
}

function* watchAddPool() {
  yield takeLatest(TRIGGER_ADD_POOL, sagaAddPool);
}

export default watchAddPool;