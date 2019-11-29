const TRIGGER_GET_POOL = 'TRIGGER_GET_POOL';
const GET_POOL_LOADING = 'GET_POOL_LOADING';
const GET_POOL_SUCCESS = 'GET_POOL_SUCCESS';
const GET_POOL_FAIL = 'GET_POOL_FAIL';
const ADD_RULE = 'ADD_RULE';

const triggerGetPool = (userId) => ({
  type: TRIGGER_GET_POOL,
  userId,
});

const getPoolLoading = (isLoading) => ({
  type: GET_POOL_LOADING,
  isLoading,
});

const getPoolSuccess = (pool) => ({
  type: GET_POOL_SUCCESS,
  pool,
});

const getPoolFail = (err) => ({
  type: GET_POOL_FAIL,
  err,
});

const addRule = (updatedRule) => ({
  type: ADD_RULE,
  updatedRule
})

export {
  TRIGGER_GET_POOL,
  GET_POOL_LOADING,
  GET_POOL_SUCCESS,
  GET_POOL_FAIL,
  ADD_RULE,
  addRule,
  triggerGetPool,
  getPoolLoading,
  getPoolSuccess,
  getPoolFail,
};
