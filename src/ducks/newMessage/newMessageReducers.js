import { NEW_MESSAGE_SUCCESS, NEW_MESSAGE_LOADING, UPDATE_MESSAGES_STATE } from './newMessageActions';

const newMessage = (state = { newMessages: [], isLoading: true }, action) => {
  switch (action.type) {
    case UPDATE_MESSAGES_STATE:
      return { ...state, newMessages: [action.state] };
    case NEW_MESSAGE_SUCCESS:
      return { ...state, newMessages: [...action.message] };
    case NEW_MESSAGE_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default newMessage;
