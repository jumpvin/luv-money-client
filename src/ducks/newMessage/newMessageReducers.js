import { NEW_MESSAGE_SUCCESS, NEW_MESSAGE_LOADING } from './newMessageActions';

const newMessage = (state = { updatedMessage: [] }, action) => {
  switch (action.type) {
    case NEW_MESSAGE_SUCCESS:
      return { ...state, updatedMessage: [...action.updatedMessage] };
    case NEW_MESSAGE_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default newMessage;
