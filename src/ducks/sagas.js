import { all } from 'redux-saga/effects';
import watchExample from './example/exampleSagas';
import watchGetPool from './getPool/getPoolSagas';
import watchNewRule from './newRule/newRuleSagas';

export default function* startForman() {
  yield all([
    watchExample(),
    watchGetPool(),
    watchNewRule()
  ]);
}
