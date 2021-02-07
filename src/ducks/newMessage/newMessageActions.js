const TRIGGER_NEW_MESSAGE = 'TRIGGER_NEW_MESSAGE';
const NEW_MESSAGE_LOADING = 'NEW_MESSAGE_LOADING';
const NEW_MESSAGE_SUCCESS = 'NEW_MESSAGE_SUCCESS';
const NEW_MESSAGE_FAIL = 'NEW_MESSAGE_FAIL';
const UPDATE_MESSAGES_STATE = 'UPDATE_MESSAGES_STATE';

const triggerNewMessage = (updatedMessage) => ({
  type: TRIGGER_NEW_MESSAGE,
  updatedMessage,
});

const newMessageLoading = (isLoading) => ({
  type: NEW_MESSAGE_LOADING,
  isLoading,
});

const newMessageSuccess = (updatedMessage) => ({
  type: NEW_MESSAGE_SUCCESS,
  updatedMessage,
});

const newMessageFail = (err) => ({
  type: NEW_MESSAGE_FAIL,
  err,
});

const updateMessagesState = (state) => ({
  type: UPDATE_MESSAGES_STATE,
  state,
});

export {
  TRIGGER_NEW_MESSAGE,
  NEW_MESSAGE_LOADING,
  NEW_MESSAGE_SUCCESS,
  NEW_MESSAGE_FAIL,
  UPDATE_MESSAGES_STATE,
  triggerNewMessage,
  newMessageLoading,
  newMessageSuccess,
  newMessageFail,
  updateMessagesState,
};
