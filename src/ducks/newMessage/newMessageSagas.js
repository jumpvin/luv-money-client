import { put, call, takeLatest } from 'redux-saga/effects';
import { newMessage } from '../../services/api';

import {
  TRIGGER_NEW_MESSAGE,
  NEW_MESSAGE_SUCCESS,
  NEW_MESSAGE_LOADING,
  NEW_MESSAGE_FAIL,
} from './newMessageActions';

function* sagaNewMessage({ updatedMessage }) {
  try {
    console.log(updatedMessage);
    let isLoading = true;
    yield put({ type: NEW_MESSAGE_LOADING, isLoading });
    const message = yield call(newMessage, updatedMessage);
    yield put({ type: NEW_MESSAGE_SUCCESS, message });
    isLoading = false;
    yield put({ type: NEW_MESSAGE_LOADING, isLoading });
  } catch (err) {
    put({ type: NEW_MESSAGE_FAIL, err });
  }
}

function* watchNewMessage() {
  yield takeLatest(TRIGGER_NEW_MESSAGE, sagaNewMessage);
}

export default watchNewMessage;
