import { put, call, takeLatest } from 'redux-saga/effects';
import { postUserPool } from '../../services/api';

import {
  TRIGGER_USER_POOL,
  USER_POOL_SUCCESS,
  USER_POOL_FAIL,
} from './userPoolActions';

function* sagaUserPool({ payload }) {
  try {
    const user = yield call(postUserPool, { user_id: payload.userId, pool_id: payload.poolId });
    yield put({ type: USER_POOL_SUCCESS, user });
  } catch (err) {
    put({ type: USER_POOL_FAIL, err });
  }
}

function* watchUserPool() {
  yield takeLatest(TRIGGER_USER_POOL, sagaUserPool);
}

export default watchUserPool;
