import { EDIT_RULE_SUCCESS, EDIT_RULE_LOADING } from './editRuleActions';

const editRule = (state = { newRules: [], isLoading: true }, action) => {
  switch (action.type) {
    case EDIT_RULE_SUCCESS:
      return { ...state, newRules: [...action.rule]};
    case EDIT_RULE_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default Rule;
