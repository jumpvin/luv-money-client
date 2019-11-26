const TRIGGER_GET_OWE_CARD = 'TRIGGER_GET_OWE_CARD';
const GET_OWE_CARD_LOADING = 'GET_OWE_CARD_LOADING';
const GET_OWE_CARD_SUCCESS = 'GET_OWE_CARD_SUCCESS';
const GET_OWE_CARD_FAIL = 'GET_OWE_CARD_FAIL';

const triggerGetOweCard = () => ({
  type: TRIGGER_GET_OWE_CARD,
});

const getOweCardLoading = (isLoading) => ({
  type: GET_OWE_CARD_LOADING,
  isLoading,
});

const getOweCardSuccess = (oweCards) => ({
  type: GET_OWE_CARD_SUCCESS,
  oweCards,
});

const getOweCardFail = (err) => ({
  type: GET_OWE_CARD_FAIL,
  err,
});

export {
  TRIGGER_GET_OWE_CARD,
  GET_OWE_CARD_LOADING,
  GET_OWE_CARD_SUCCESS,
  GET_OWE_CARD_FAIL,
  triggerGetOweCard,
  getOweCardLoading,
  getOweCardSuccess,
  getOweCardFail,
};
