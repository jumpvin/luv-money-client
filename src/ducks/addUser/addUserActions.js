const TRIGGER_ADD_USER = 'TRIGGER_ADD_USER';
const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
const ADD_USER_FAIL = 'ADD_USER_FAIL';

const triggerAddUser = (payload) => ({
  type: TRIGGER_ADD_USER,
  payload,
});

const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  user,
});

const addUserFail = (err) => ({
  type: ADD_USER_FAIL,
  err,
});

export {
  TRIGGER_ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  triggerAddUser,
  addUserSuccess,
  addUserFail,
};
