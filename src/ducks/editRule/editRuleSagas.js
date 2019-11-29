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

function* watchNewRule() {
  yield takeLatest(TRIGGER_EDIT_RULE, sagaEditRule);
}

export default watchNewRule;
