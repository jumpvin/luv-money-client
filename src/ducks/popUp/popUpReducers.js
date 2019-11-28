import { POP_UP_STATE } from './popUpActions';

const popUpState = (state = { popUp: 'none' }, action) => {
  switch (action.type) {
    case POP_UP_STATE:
      return { ...state, popUp: action.popUp };
    default:
      return state;
  }
};

export default popUpState;
