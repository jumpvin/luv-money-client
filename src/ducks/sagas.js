import { all } from 'redux-saga/effects';
import watchExample from './example/exampleSagas';
import { watchGetPool, watchGetBE } from './getPool/getPoolSagas';
import watchNewRule from './newRule/newRuleSagas';
import watchEditRule from './editRule/editRuleSagas';
import watchPopUpFetch from './popUpState/popUpSagas';
import watchNewExpense from './newExpense/newExpenseSagas';
import watchInvite from './invite/inviteSagas';
import watchAddUser from './addUser/addUserSagas';
import watchSubmitPayment from './submitPayment/submitPaymentSagas';
import watchAddPool from './addPool/addPoolSagas';


export default function* startForman() {
  yield all([
    watchExample(),
    watchGetPool(),
    watchGetBE(),
    watchNewExpense(),
    watchNewRule(),
    watchEditRule(),
    watchPopUpFetch(),
    watchInvite(),
    watchAddUser(),
    watchSubmitPayment(),
    watchAddPool(),
  ]);
}
