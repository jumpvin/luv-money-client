const TRIGGER_NEW_EXPENSE = 'TRIGGER_NEW_EXPENSE';
// const NEW_RULE_SUCCESS = 'NEW_RULE_SUCCESS';
// const NEW_RULE_FAIL = 'NEW_RULE_FAIL';

const triggerNewExpense = (expense) => ({
  type: TRIGGER_NEW_EXPENSE,
  expense
});

// const newRuleSuccess = (rule) => ({
//   type: NEW_RULE_SUCCESS,
//   rule,
// });

// const newRuleFail = (err) => ({
//   type: NEW_RULE_FAIL,
//   err,
// });

export {
  TRIGGER_NEW_EXPENSE,
  // NEW_RULE_SUCCESS,
  // NEW_RULE_FAIL,
  triggerNewExpense,
  // newRuleSuccess,
  // newRuleFail,
};
