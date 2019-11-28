import { put, call, takeLatest } from 'redux-saga/effects';
import { getExamples } from '../../services/api';
import {
  TRIGGER_EXAMPLE,
  EXAMPLE_SUCCESS,
  EXAMPLE_FAIL,
} from './exampleActions';

function* sagaExample() {
  try {
    const examples = yield call(getExamples);
    yield put({ type: EXAMPLE_SUCCESS, examples });
  } catch (err) {
    put({ type: EXAMPLE_FAIL, err });
  }
}

function* watchExample() {
  yield takeLatest(TRIGGER_EXAMPLE, sagaExample);
}

export default watchExample;
