import { USER_TOKEN } from './authActions';

const userToken = (state = { token: '' }, action) => {
  switch (action.type) {
    case USER_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default userToken;
