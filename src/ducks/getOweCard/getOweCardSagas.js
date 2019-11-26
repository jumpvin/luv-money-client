import { put, call, takeLatest } from 'redux-saga/effects';
import { getOweCards } from '../../services/api';
import {
  TRIGGER_GET_OWE_CARD,
  GET_OWE_CARD_SUCCESS,
  GET_OWE_CARD_FAIL,
} from './getOweCardActions';

function* sagaGetOweCard() {
  try {
    const oweCards = yield call(getOweCards);
    yield put({ type: GET_OWE_CARD_SUCCESS, oweCards });
  } catch (err) {
    put({ type: GET_OWE_CARD_FAIL, err });
  }
}

function* watchGetOweCard() {
  yield takeLatest(TRIGGER_GET_OWE_CARD, sagaGetOweCard);
}

export default watchGetOweCard;
