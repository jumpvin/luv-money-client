import { put, call, takeLatest } from 'redux-saga/effects';
import { newRule } from '../../services/api';

import {
  TRIGGER_NEW_RULE,
  NEW_RULE_SUCCESS,
  NEW_RULE_LOADING,
  NEW_RULE_FAIL,
} from './newRuleActions';

function* sagaNewRule({updatedRule}) {
  try {
    console.log(updatedRule);
    let isLoading = true;
    yield put({ type: NEW_RULE_LOADING, isLoading });
    const rule = yield call(newRule, updatedRule);
    yield put({ type: NEW_RULE_SUCCESS, rule });
    isLoading = false;
    yield put({ type: NEW_RULE_LOADING, isLoading });
  } catch (err) {
    put({ type: NEW_RULE_FAIL, err });
  }
}

function* watchNewRule() {
  yield takeLatest(TRIGGER_NEW_RULE, sagaNewRule);
}

export default watchNewRule;
