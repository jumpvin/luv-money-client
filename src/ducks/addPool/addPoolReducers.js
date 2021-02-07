import { ADD_POOL_SUCCESS } from './addPoolActions';

const addPool = (state = { addPool: {} }, action) => {
  switch (action.type) {
    case ADD_POOL_SUCCESS:
      return { ...state, addPool: action.addPool };
    default:
      return state;
  }
};

export default addPool;
