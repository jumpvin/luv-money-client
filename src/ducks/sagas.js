import { all } from 'redux-saga/effects';
import watchExample from './example/exampleSagas';

export default function* startForman() {
  yield all([
    watchExample,
  ]);
}
