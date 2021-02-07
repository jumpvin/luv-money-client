const TRIGGER_GET_BE = 'TRIGGER_GET_BE';
const TRIGGER_GET_POOL = 'TRIGGER_GET_POOL';
const GET_POOL_LOADING = 'GET_POOL_LOADING';
const GET_POOL_SUCCESS = 'GET_POOL_SUCCESS';
const GET_POOL_FAIL = 'GET_POOL_FAIL';
const ADD_RULE = 'ADD_RULE';
const GET_BE_SUCCESS = 'GET_BE_SUCCESS';
const GET_BE_FAIL = 'GET_BE_FAIL';
const ADD_PAYMENT = 'ADD_PAYMENT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const triggerGetPool = (userId) => ({
  type: TRIGGER_GET_POOL,
  userId,
});

const triggerGetBE = (userId) => ({
  type: TRIGGER_GET_BE,
  userId,
});

const getBESuccess = (pool) => ({
  type: GET_BE_SUCCESS,
  pool,
});

const getBEFail = (err) => ({
  type: GET_BE_FAIL,
  err,
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
  updatedRule,
});

const addPayment = (newPayment) => ({
  type: ADD_PAYMENT,
  newPayment,
});

const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  newMessage,
});


export {
  TRIGGER_GET_POOL,
  TRIGGER_GET_BE,
  GET_POOL_LOADING,
  GET_POOL_SUCCESS,
  GET_POOL_FAIL,
  GET_BE_SUCCESS,
  GET_BE_FAIL,
  ADD_RULE,
  ADD_PAYMENT,
  ADD_MESSAGE,
  addMessage,
  addPayment,
  addRule,
  triggerGetPool,
  triggerGetBE,
  getPoolLoading,
  getPoolSuccess,
  getPoolFail,
  getBESuccess,
  getBEFail,
};
