import { INVITE_SUCCESS } from './inviteActions';

const invite = (state = { res: '' }, action) => {
  switch (action.type) {
    case INVITE_SUCCESS:
      return { ...state, res: action.res };
    default:
      return state;
  }
};

export default invite;
