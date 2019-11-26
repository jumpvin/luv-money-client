import { all } from 'redux-saga/effects';
import watchExample from './example/exampleSagas';
import watchGetOweCard from './getOweCard/getOweCardSagas';

export default function* startForman() {
  yield all([
    watchExample(),
    watchGetOweCard(),
  ]);
}
