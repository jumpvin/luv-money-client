import { put, call, takeLatest } from 'redux-saga/effects';
import { postUser } from '../../services/api';

import {
  TRIGGER_ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from './addUserActions';

function* sagaAddUser({ payload }) {
  try {
    const user = yield call(postUser, payload);
    yield put({ type: ADD_USER_SUCCESS, user });
    return;
  } catch (err) {
    put({ type: ADD_USER_FAIL, err });
  }
}

function* watchAddUser() {
  yield takeLatest(TRIGGER_ADD_USER, sagaAddUser);
}

export default watchAddUser;
