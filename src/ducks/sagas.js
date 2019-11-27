import { all } from 'redux-saga/effects';
import watchExample from './example/exampleSagas';
import watchGetOweCard from './getOweCard/getOweCardSagas';
import watchGetPool from './getPool/getPoolSagas';

export default function* startForman() {
  yield all([
    watchExample(),
    watchGetOweCard(),
    watchGetPool(),
  ]);
}
