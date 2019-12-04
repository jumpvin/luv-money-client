import React, {useState, useEffect}from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './make-payment-card.css';
import MakePaymentInfo from '../../atoms/MakePaymentInfo';
import poolSettings from '../../ducks/updateSettings/settingsReducers';
import { now } from 'moment';
import { triggerSubmitPayment } from '../../ducks/submitPayment/submitPaymentActions';
import { triggerGetBE } from '../../ducks/getPool/getPoolActions';


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

  const handleChange = (e) => {
    setPayment(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPayment={ updated_by_user:thisUser[0].id, date: new Date(),payment:payment, pool_id:poolRuleSettingsInfo[0].pool_id};
    await dispatch(triggerSubmitPayment(updatedPayment));
    setPayment('');
  };
  // useEffect(()=>{console.log('dispatch is working?');dispatch(triggerGetBE({ uid: 'y4Ac7s3VPddxkAnUOo5HA977d7x6' }))},[balanceInfo]);
  
  return (
  <div className='make-payment' >
    <MakePaymentInfo pool={pool} amount={balanceInfo.length <= 0 ? 0 : balanceInfo[0][1]} />
    <form onSubmit = {handleSubmit}>
        <input onChange ={(e) => handleChange(e)} type='text' name='amount' value={payment}></input>
        <button type='submit' value='Submit'>Submit</button>
    </form>
  </div>
  )
  }

export default MakePaymentCard;