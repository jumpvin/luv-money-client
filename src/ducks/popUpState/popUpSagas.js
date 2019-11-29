import { put, call, takeLatest } from 'redux-saga/effects';
import { statementFetch } from '../../services/api';

import {
  TRIGGER_POP_UP_FETCH,
  FETCH_SUCCESS
} from './popUpActions';

function* sagaPop_Up_Fetch({data}) {
  try {
    const fetch = yield call(statementFetch, data);
    yield put({ type: FETCH_SUCCESS, fetch });
  } catch (err) {
    console.log('err')
    // put({ type: NEW_RULE_FAIL, err });
  }
}

function* watchPopUpFetch() {
  yield takeLatest(TRIGGER_POP_UP_FETCH, sagaPop_Up_Fetch);
}

export default watchPopUpFetch;
