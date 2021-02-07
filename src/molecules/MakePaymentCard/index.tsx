import React, {useState, useEffect}from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './make-payment-card.css';
import MakePaymentInfo from '../../atoms/MakePaymentInfo';
import poolSettings from '../../ducks/updateSettings/settingsReducers';
import { now } from 'moment';
import { triggerSubmitPayment } from '../../ducks/submitPayment/submitPaymentActions';
import { triggerGetBE } from '../../ducks/getPool/getPoolActions';
import { triggerNewExpense } from '../../ducks/newExpense/newExpenseActions'
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';



const MakePaymentCard = () => {

  const { newStatements, isLoading, userInfo, balanceInfo,poolInfo, path, pool, amount, poolRuleSettingsInfo, messageInfo, all, thisUser } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    userInfo: state.getPool.pool.userInfo,
    balanceInfo: state.getPool.pool.balanceInfo,
    poolInfo: state.getPool.pool,
    all: state.getPool,
    poolRuleSettingsInfo: state.getPool.pool.poolRuleSettingsInfo, 
    messageInfo: state.getPool.pool.messageInfo,
    thisUser: state.getPool.pool.thisUserInfo,
  })
  );  
  const dispatch = useDispatch();
  const [payment, setPayment] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [added, setAdded] = useState(false);



  const handleChange = (e) => {
    setPayment(e.target.value);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const updatedPayment={ updated_by_user:thisUser[0].id, date: new Date(),payment:payment, pool_id:poolRuleSettingsInfo[0].pool_id};
  //   await dispatch(triggerSubmitPayment(updatedPayment));
  //   setPayment('');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // poolRuleSettingsInfo.forEach((pool) => {
      
    // })
    const expense = { id: 1, statement_id: (parseInt(poolInfo.poolSettingsInfo[0].next_statement || poolInfo.poolSettingsInfo[0].current_statement)), pool_expense_id: 11, user_id: thisUser[0].id, name: 'Payment', date: new Date, amount: payment };
    console.log(expense, 'Payment');
    if (expense.user_id === 8) {
      expense.pool_expense_id = 11;
    }
    if (expense.user_id === 7) {
      expense.pool_expense_id = 10;
    }
    if (expense.user_id === 6) {
      expense.pool_expense_id = 9;
    }
    if (expense.user_id === 5) {
      expense.pool_expense_id = 8;
    }
    if (amount == '') {
      alert('Please fill all details')
    } else if (amount < '0') {
      alert ('please enter a positive amount')
    } else {
      await dispatch(triggerNewExpense(expense));
      setPayment('');
      setExpenseName('');
      setAdded(true);
    }
  }

  const userPoolBalance = (userId) => {
    for(let i = 0; i< balanceInfo.length; i++) {
      if ( userId === balanceInfo[i][0]) return balanceInfo[i][1];
    }
  };
  // useEffect(()=>{console.log('dispatch is working?');dispatch(triggerGetBE({ uid: 'y4Ac7s3VPddxkAnUOo5HA977d7x6' }))},[balanceInfo]);
  
  return (
  <div className='make-payment' >
    {
        isLoading ? 'Please Wait':
      userInfo.map((user, index) => (
        user.id===thisUser[0].id?
    <MakePaymentInfo pool={pool} amount={userPoolBalance(user.id)} />: null))}
    <form className='hold-column' onSubmit = {handleSubmit}>
        <TextInput type='text' name='Amount' value={payment} onChange={(e) => handleChange(e)} />
        <button type='submit' className='submit'>Submit</button>
    </form>
  </div>
  )
  }

export default MakePaymentCard;