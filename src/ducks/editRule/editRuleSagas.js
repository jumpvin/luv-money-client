import { put, call, takeLatest } from 'redux-saga/effects';
import { editRule } from '../../services/api';

import {
  TRIGGER_EDIT_RULE,
  EDIT_RULE_SUCCESS,
  EDIT_RULE_LOADING,
  EDIT_RULE_FAIL,
} from './editRuleActions';

function* sagaEditRule({ruleInfo}) {
  try {
    console.log('editing rule', ruleInfo);
    let isLoading = true;
    yield put({ type: EDIT_RULE_LOADING, isLoading });
    const rule = yield call(editRule, ruleInfo);
    yield put({ type: EDIT_RULE_SUCCESS, rule });
    isLoading = false;
    yield put({ type: EDIT_RULE_LOADING, isLoading });
  } catch (err) {
    put({ type: EDIT_RULE_FAIL, err });
  }
}

function* watchEditRule() {
  yield takeLatest(TRIGGER_EDIT_RULE, sagaEditRule);
}

export default watchEditRule;
