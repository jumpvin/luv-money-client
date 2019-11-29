const TRIGGER_NEW_RULE = 'TRIGGER_NEW_RULE';
const NEW_RULE_LOADING = 'NEW_RULE_LOADING';
const NEW_RULE_SUCCESS = 'NEW_RULE_SUCCESS';
const NEW_RULE_FAIL = 'NEW_RULE_FAIL';

const triggerNewRule = (ruleInfo) => ({
  type: TRIGGER_NEW_RULE,
  ruleInfo
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

export {
  TRIGGER_NEW_RULE,
  NEW_RULE_LOADING,
  NEW_RULE_SUCCESS,
  NEW_RULE_FAIL,
  triggerNewRule,
  newRuleLoading,
  newRuleSuccess,
  newRuleFail,
};
