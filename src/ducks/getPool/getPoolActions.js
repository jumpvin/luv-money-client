const TRIGGER_GET_POOL = 'TRIGGER_GET_POOL';
const GET_POOL_LOADING = 'GET_POOL_LOADING';
const GET_POOL_SUCCESS = 'GET_POOL_SUCCESS';
const GET_POOL_FAIL = 'GET_POOL_FAIL';

const triggerGetPool = (userId) => ({
  type: TRIGGER_GET_POOL,
  userId,
});

const getPoolCardLoading = (isLoading) => ({
  type: GET_POOL_LOADING,
  isLoading,
});

const getPoolCardSuccess = (oweCards) => ({
  type: GET_POOL_SUCCESS,
  oweCards,
});

const getPoolCardFail = (err) => ({
  type: GET_POOL_FAIL,
  err,
});

export {
  TRIGGER_GET_POOL,
  GET_POOL_LOADING,
  GET_POOL_SUCCESS,
  GET_POOL_FAIL,
  triggerGetPool,
  getPoolCardLoading,
  getPoolCardSuccess,
  getPoolCardFail,
};
