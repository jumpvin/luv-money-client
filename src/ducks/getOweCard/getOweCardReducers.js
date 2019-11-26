import { GET_OWE_CARD_SUCCESS, GET_OWE_CARD_LOADING } from './getOweCardActions';

const recieveOweCards = (state = { oweCards: [], isLoading: true }, action) => {
  switch (action.type) {
    case GET_OWE_CARD_SUCCESS:
      return { ...state, oweCards: action.oweCards };
    case GET_OWE_CARD_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default recieveOweCards;
