import { GET_OWE_CARD_SUCCESS } from './getOweCardActions';

const recieveOweCards = (state = { oweCards: [] }, action) => {
  switch (action.type) {
    case GET_OWE_CARD_SUCCESS:
      return { ...state, oweCards: action.oweCards };
    default:
      return state;
  }
};

export default recieveOweCards;
