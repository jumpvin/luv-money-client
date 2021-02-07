import { USER_POOL_SUCCESS } from './userPoolActions';

const userPool = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_POOL_SUCCESS:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default userPool;
