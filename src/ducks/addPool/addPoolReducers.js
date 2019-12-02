import { ADD_POOL_SUCCESS } from './addPoolActions';

const addPool = (state = { pool: {} }, action) => {
  switch (action.type) {
    case ADD_POOL_SUCCESS:
      return { ...state, pool: action.pool };
    default:
      return state;
  }
};

export default addPool;
