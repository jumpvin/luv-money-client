const POP_UP_STATE = 'POP_UP_STATE';
const POP_UP_DATA = 'POP_UP_DATA';
const TRIGGER_POP_UP_FETCH = 'TRIGGER_POP_UP_FETCH';
const FETCH_SUCCESS = 'FETCH_SUCCESS';

const popUpState = (popUp) => ({
  type: POP_UP_STATE,
  popUp,
});

const triggerPopUpFetch = (data) => ({
  type: TRIGGER_POP_UP_FETCH,
  data,
});

export {
  POP_UP_STATE,
  popUpState,
  POP_UP_DATA,
  TRIGGER_POP_UP_FETCH,
  triggerPopUpFetch,
  FETCH_SUCCESS,
};
