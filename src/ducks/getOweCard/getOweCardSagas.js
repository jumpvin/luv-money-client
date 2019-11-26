import { put, call, takeLatest } from 'redux-saga/effects';
import { getOweCards } from '../../services/api';
import {
  TRIGGER_GET_OWE_CARD,
  GET_OWE_CARD_SUCCESS,
  GET_OWE_CARD_LOADING,
  GET_OWE_CARD_FAIL,
} from './getOweCardActions';

function* sagaGetOweCard() {
  try {
    let isLoading = true;
    yield put({ type: GET_OWE_CARD_LOADING, isLoading });
    const oweCards = yield call(getOweCards);
    yield put({ type: GET_OWE_CARD_SUCCESS, oweCards });
    isLoading = false;
    yield put({ type: GET_OWE_CARD_LOADING, isLoading });
  } catch (err) {
    put({ type: GET_OWE_CARD_FAIL, err });
  }
}

function* watchGetOweCard() {
  yield takeLatest(TRIGGER_GET_OWE_CARD, sagaGetOweCard);
}

export default watchGetOweCard;
