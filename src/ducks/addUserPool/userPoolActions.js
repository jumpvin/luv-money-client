const TRIGGER_USER_POOL = 'TRIGGER_USER_POOL';
const USER_POOL_SUCCESS = 'USER_POOL_SUCCESS';
const USER_POOL_FAIL = 'USER_POOL_FAIL';

const triggerUserPool = (payload) => ({
  type: TRIGGER_USER_POOL,
  payload,
});

const UserPoolSuccess = (user) => ({
  type: USER_POOL_SUCCESS,
  user,
});

const UserPoolFail = (err) => ({
  type: USER_POOL_FAIL,
  err,
});

export {
  TRIGGER_USER_POOL,
  USER_POOL_SUCCESS,
  USER_POOL_FAIL,
  triggerUserPool,
  UserPoolSuccess,
  UserPoolFail,
};
