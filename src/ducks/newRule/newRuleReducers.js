import { NEW_RULE_SUCCESS, NEW_RULE_LOADING, UPDATE_RULES_STATE } from './newRuleActions';

const newRule = (state = { newRules: [], isLoading: true }, action) => {
  switch (action.type) {
    case UPDATE_RULES_STATE:
      return { ...state, newRules: [action.state] };
    case NEW_RULE_SUCCESS:
      return { ...state, newRules: [...action.rule] };
    case NEW_RULE_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default newRule;
