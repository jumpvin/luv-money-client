import { POP_UP_STATE, FETCH_SUCCESS } from './popUpActions';

const popUpState = (state = { popUp: 'none', data: {} }, action) => {
  switch (action.type) {
    case POP_UP_STATE:
      return { ...state, popUp: action.popUp };
    case FETCH_SUCCESS:
      return { ...state, data: action.fetch };
    default:
      return state;
  }
};

export default popUpState;
