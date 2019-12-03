import {
  GET_POOL_SUCCESS,
  GET_POOL_LOADING,
  ADD_RULE,
  GET_BE_SUCCESS,
  ADD_PAYMENT,
} from './getPoolActions';

const getPool = (state = { pool: {}, isLoading: true }, action) => {
  switch (action.type) {
    case GET_POOL_SUCCESS:
      return { ...state, pool: action.pool };
    case GET_POOL_LOADING:
      return { ...state, isLoading: action.isLoading };
    case GET_BE_SUCCESS:
      return {
        ...state,
        pool: { ...state.pool, ...action.pool },
      };
    case ADD_RULE:
      return {
        ...state,
        pool: {
          ...state.pool,
          poolRuleSettingsInfo: [
            action.updatedRule,
            ...state.pool.poolRuleSettingsInfo,
          ],
        }
      };  
    case ADD_PAYMENT:
      return {
        ...state,
        pool: {
          ...state.pool, 
          balanceInfo: action.pool.balanceInfo, poolInfo: action.pool.poolInfo,
        },
        balanceInfo:
      [action.updatedPayment, ...state.pool.balanceInfo],
      };
    default:
      return state;
  }
};

export default getPool;
