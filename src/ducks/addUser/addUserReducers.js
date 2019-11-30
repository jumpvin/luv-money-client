import { ADD_USER_SUCCESS } from './addUserActions';

const invite = (state = { user: {} }, action) => {
  switch (action.type) {
    case ADD_USER_SUCCESS:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default invite;
