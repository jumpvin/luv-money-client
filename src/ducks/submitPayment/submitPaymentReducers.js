import { SUBMIT_PAYMENT_SUCCESS, SUBMIT_PAYMENT_LOADING, UPDATE_BALANCE_STATE } from './submitPaymentActions';

const submitPayment = (state = { submitPayments: [], isLoading: true }, action) => {
  switch (action.type) {
    case UPDATE_BALANCE_STATE:
      return { ...state, submitPayments: [...action.payment] };
    case SUBMIT_PAYMENT_SUCCESS:
      return { ...state, submitPayments: [...action.payment] };
    case SUBMIT_PAYMENT_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default submitPayment;
