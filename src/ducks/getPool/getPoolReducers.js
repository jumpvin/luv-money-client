import { GET_POOL_SUCCESS, GET_POOL_LOADING, ADD_RULE } from './getPoolActions';

const getPool = (state = { pool: {}, isLoading: true }, action) => {
  switch (action.type) {
    case GET_POOL_SUCCESS:
      return { ...state, pool: action.pool };
    case GET_POOL_LOADING:
      return { ...state, isLoading: action.isLoading };
    case ADD_RULE:
      return {...state, pool: { ...state.pool, poolRuleSettingsInfo: [action.updatedRule, ...state.pool.poolRuleSettingsInfo ]}}
    default:
      return state;
  }
};

export default getPool;
