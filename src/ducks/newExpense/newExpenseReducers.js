import { NEW_EXPENSE_SUCCESS } from './newExpenseActions';

const newExpense = (state = { expense: [] }, action) => {
  switch (action.type) {
    case NEW_EXPENSE_SUCCESS:
      return {...state, expense:[action.expense]};
    default:
      return state;
  }
};

export default newExpense;
