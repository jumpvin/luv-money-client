import { put, call, takeLatest } from 'redux-saga/effects';
import { popUpFetch } from '../../services/api';

import {
  TRIGGER_POP_UP_FETCH,
  FETCH_SUCCESS,
} from './popUpActions';

function* sagaPopUpFetch({ data }) {
  try {
    const fetch = yield call(popUpFetch, data);
    yield put({ type: FETCH_SUCCESS, fetch });
  } catch (err) {
    console.log('err');
  }
}
function* watchPopUpFetch() {
  yield takeLatest(TRIGGER_POP_UP_FETCH, sagaPopUpFetch);
}

export default watchPopUpFetch;
