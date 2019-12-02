const TRIGGER_EDIT_RULE = 'TRIGGER_EDIT_RULE';
const EDIT_RULE_LOADING = 'EDIT_RULE_LOADING';
const EDIT_RULE_SUCCESS = 'EDIT_RULE_SUCCESS';
const EDIT_RULE_FAIL = 'EDIT_RULE_FAIL';

const triggerEditRule = (ruleInfo) => ({
  type: TRIGGER_EDIT_RULE,
  ruleInfo
});

const editRuleLoading = (isLoading) => ({
  type: EDIT_RULE_LOADING,
  isLoading,
});

const editRuleSuccess = (rule) => ({
  type: EDIT_RULE_SUCCESS,
  rule,
});

const editRuleFail = (err) => ({
  type: EDIT_RULE_FAIL,
  err,
});

export {
  TRIGGER_EDIT_RULE,
  EDIT_RULE_LOADING,
  EDIT_RULE_SUCCESS,
  EDIT_RULE_FAIL,
  triggerEditRule
};
