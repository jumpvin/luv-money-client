import { all } from 'redux-saga/effects';
import watchExample from './example/exampleSagas';
import watchGetPool from './getPool/getPoolSagas';

export default function* startForman() {
  yield all([
    watchExample(),
    watchGetPool(),
  ]);
}
