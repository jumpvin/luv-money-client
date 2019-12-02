const TRIGGER_ADD_POOL = 'TRIGGER_ADD_POOL';
const ADD_POOL_SUCCESS = 'ADD_POOL_SUCCESS';
const ADD_POOL_FAIL = 'ADD_POOL_FAIL';

const triggerAddPool = (payload) => ({
  type: TRIGGER_ADD_POOL,
  payload,
});

const addPoolSuccess = (pool) => ({
  type: ADD_POOL_SUCCESS,
  pool,
});

const addPoolFail = (err) => ({
  type: ADD_POOL_FAIL,
  err,
});

export {
  TRIGGER_ADD_POOL,
  ADD_POOL_SUCCESS,
  ADD_POOL_FAIL,
  triggerAddPool,
  addPoolSuccess,
  addPoolFail,
};
