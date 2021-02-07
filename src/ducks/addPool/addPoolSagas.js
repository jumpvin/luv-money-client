import { put, call, takeLatest } from 'redux-saga/effects';
import {
  postPool, getUser, getOnePool, postUserPool, getPool,
} from '../../services/api';

import {
  TRIGGER_ADD_POOL,
  ADD_POOL_SUCCESS,
  ADD_POOL_FAIL,
} from './addPoolActions';

import { GET_POOL_SUCCESS } from '../getPool/getPoolActions';

function* sagaAddPool({ payload }) {
  try {
    const addPool = yield call(postPool, payload);
    const userId = yield call(getUser, { uid: payload.admin_id });
    const poolId = yield call(getOnePool, { admin_id: payload.admin_id });
    yield call(postUserPool, { user_id: userId, pool_id: poolId });
    yield put({ type: ADD_POOL_SUCCESS, addPool });
    const pool = yield call(getPool, { uid: payload.admin_id });
    yield put({ type: GET_POOL_SUCCESS, pool });
    return;
  } catch (err) {
    put({ type: ADD_POOL_FAIL, err });
  }
}

function* watchAddPool() {
  yield takeLatest(TRIGGER_ADD_POOL, sagaAddPool);
}

export default watchAddPool;
