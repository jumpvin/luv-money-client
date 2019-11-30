import { put, call, takeLatest } from 'redux-saga/effects';
import { sendInvite } from '../../services/api';

import {
  TRIGGER_INVITE,
  INVITE_SUCCESS,
  INVITE_FAIL,
} from './inviteActions';

function* sagaInvite({ params }) {
  try {
    const res = yield call(sendInvite, params);
    yield put({ type: INVITE_SUCCESS, res });
  } catch (err) {
    put({ type: INVITE_FAIL, err });
  }
}

function* watchInvite() {
  yield takeLatest(TRIGGER_INVITE, sagaInvite);
}

export default watchInvite;
