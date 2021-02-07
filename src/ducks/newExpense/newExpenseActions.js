const TRIGGER_NEW_EXPENSE = 'TRIGGER_NEW_EXPENSE';
const NEW_EXPENSE_SUCCESS = 'NEW_EXPENSE_SUCCESS';
// const NEW_RULE_FAIL = 'NEW_RULE_FAIL';

const triggerNewExpense = (expense) => ({
  type: TRIGGER_NEW_EXPENSE,
  expense
});

const newExpenseSuccess = (expense) => ({
  type: NEW_EXPENSE_SUCCESS,
  expense,
});

// const newRuleFail = (err) => ({
//   type: NEW_RULE_FAIL,
//   err,
// });

export {
  TRIGGER_NEW_EXPENSE,
  NEW_EXPENSE_SUCCESS,
  // NEW_RULE_FAIL,
  triggerNewExpense,
  newExpenseSuccess,
  // newRuleFail,
};
