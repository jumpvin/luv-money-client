import { EXAMPLE_SUCCESS } from './exampleActions';

const example = (state = { example: [] }, action) => {
  switch (action.type) {
    case EXAMPLE_SUCCESS:
      return { ...state, examples: action.examples };
    default:
      return state;
  }
};

export default example;
