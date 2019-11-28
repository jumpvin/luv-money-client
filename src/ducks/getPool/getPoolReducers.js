import { GET_POOL_SUCCESS, GET_POOL_LOADING } from './getPoolActions';

const getPool = (state = { pool: {}, isLoading: true }, action) => {
  switch (action.type) {
    case GET_POOL_SUCCESS:
      return { ...state, pool: action.pool };
    case GET_POOL_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default getPool;
