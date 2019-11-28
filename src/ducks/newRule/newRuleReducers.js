import { NEW_RULE_SUCCESS, NEW_RULE_LOADING } from './newRuleActions';

const newRule = (state = { newRules: [], isLoading: true }, action) => {
  switch (action.type) {
    case NEW_RULE_SUCCESS:
      console.log(action.rule);
      return { ...state, newRules: [...action.rule]};
    case NEW_RULE_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default newRule;
