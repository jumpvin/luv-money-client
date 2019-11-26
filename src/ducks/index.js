import { combineReducers } from 'redux';
import example from './example/exampleReducers';
import recieveOweCard from './getOweCard/getOweCardReducers';

const reducers = combineReducers({
  example,
  recieveOweCard,
});

export default reducers;
