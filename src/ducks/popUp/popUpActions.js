const TRIGGER_POPUP = 'TRIGGER_POPUP';
const GET_POOL_LOADING = 'GET_POOL_LOADING';
const GET_POOL_SUCCESS = 'GET_POOL_SUCCESS';
const GET_POOL_FAIL = 'GET_POOL_FAIL';

const triggerPopUp = (type) => ({
  type: TRIGGER_POPUP,
  type
});

// const getPoolLoading = (isLoading) => ({
//   type: GET_POOL_LOADING,
//   isLoading,
// });

// const getPoolSuccess = (pool) => ({
//   type: GET_POOL_SUCCESS,
//   pool,
// });

// const getPoolFail = (err) => ({
//   type: GET_POOL_FAIL,
//   err,
// });

export {
  TRIGGER_POPUP,
  // GET_POOL_LOADING,
  // GET_POOL_SUCCESS,
  // GET_POOL_FAIL,
  triggerPopUp,
  // getPoolLoading,
  // getPoolSuccess,
  // getPoolFail,
};
