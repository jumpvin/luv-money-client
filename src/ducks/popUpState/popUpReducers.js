import { POP_UP_STATE, FETCH_SUCCESS } from './popUpActions';

const popUpState = (state = { popUp: 'none', data: {}, isLoaded: false }, action) => {
  switch (action.type) {
    case POP_UP_STATE:
      return { ...state, popUp: action.popUp, isLoaded: false };
    case FETCH_SUCCESS:
      return { ...state, data: action.fetch, isLoaded: true };
    default:
      return state;
  }
};

export default popUpState;
