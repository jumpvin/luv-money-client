const TRIGGER_NEW_RULE = 'TRIGGER_NEW_RULE';
const NEW_RULE_LOADING = 'NEW_RULE_LOADING';
const NEW_RULE_SUCCESS = 'NEW_RULE_SUCCESS';
const NEW_RULE_FAIL = 'NEW_RULE_FAIL';
const UPDATE_RULES_STATE = 'UPDATE_RULES_STATE';

const triggerNewRule = (updatedRule) => ({
  type: TRIGGER_NEW_RULE,
  updatedRule,
});

const newRuleLoading = (isLoading) => ({
  type: NEW_RULE_LOADING,
  isLoading,
});

const newRuleSuccess = (rule) => ({
  type: NEW_RULE_SUCCESS,
  rule,
});

const newRuleFail = (err) => ({
  type: NEW_RULE_FAIL,
  err,
});

const updateRulesState = (state) => ({
  type: UPDATE_RULES_STATE,
  state,
});

export {
  TRIGGER_NEW_RULE,
  NEW_RULE_LOADING,
  NEW_RULE_SUCCESS,
  NEW_RULE_FAIL,
  UPDATE_RULES_STATE,
  triggerNewRule,
  newRuleLoading,
  newRuleSuccess,
  newRuleFail,
  updateRulesState,
};
