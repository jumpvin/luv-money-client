const TRIGGER_SUBMIT_PAYMENT = 'TRIGGER_SUBMIT_PAYMENT';
const SUBMIT_PAYMENT_LOADING = 'SUBMIT_PAYMENT_LOADING';
const SUBMIT_PAYMENT_SUCCESS = 'SUBMIT_PAYMENT_SUCCESS';
const SUBMIT_PAYMENT_FAIL = 'SUBMIT_PAYMENT_FAIL';
const UPDATE_BALANCE_STATE = 'UPDATE_BALANCE_STATE';

const triggerSubmitPayment = (paymentInfo) => ({
  type: TRIGGER_SUBMIT_PAYMENT,
  paymentInfo,
});

const submitPaymentLoading = (isLoading) => ({
  type: SUBMIT_PAYMENT_LOADING,
  isLoading,
});

const submitPaymentSuccess = (payment) => ({
  type: SUBMIT_PAYMENT_SUCCESS,
  payment,
});

const submitPaymentFail = (err) => ({
  type: SUBMIT_PAYMENT_FAIL,
  err,
});

const updateBalanceState = (state) => ({
  type: UPDATE_BALANCE_STATE,
  state,
});

export {
  TRIGGER_SUBMIT_PAYMENT,
  SUBMIT_PAYMENT_LOADING,
  SUBMIT_PAYMENT_SUCCESS,
  SUBMIT_PAYMENT_FAIL,
  UPDATE_BALANCE_STATE,
  triggerSubmitPayment,
  submitPaymentLoading,
  submitPaymentSuccess,
  submitPaymentFail,
  updateBalanceState,
};
