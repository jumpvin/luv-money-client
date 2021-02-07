import { put, call, takeLatest } from 'redux-saga/effects';
import { newPayment } from '../../services/api';

import {
  TRIGGER_SUBMIT_PAYMENT,
  SUBMIT_PAYMENT_SUCCESS,
  SUBMIT_PAYMENT_LOADING,
  SUBMIT_PAYMENT_FAIL,
} from './submitPaymentActions';

function* sagaSubmitPayment({ paymentInfo }) {
  try {
    let isLoading = true;
    yield put({ type: SUBMIT_PAYMENT_LOADING, isLoading });
    const payment = yield call(newPayment, paymentInfo);
    yield put({ type: SUBMIT_PAYMENT_SUCCESS, payment });
    isLoading = false;
    yield put({ type: SUBMIT_PAYMENT_LOADING, isLoading });
  } catch (err) {
    put({ type: SUBMIT_PAYMENT_FAIL, err });
  }
}

function* watchSubmitPayment() {
  yield takeLatest(TRIGGER_SUBMIT_PAYMENT, sagaSubmitPayment);
}

export default watchSubmitPayment;
