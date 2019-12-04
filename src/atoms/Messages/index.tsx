import React, {useState, useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import './make-payment-card.css';
import MakePaymentInfo from '../../atoms/MakePaymentInfo';
import poolSettings from '../../ducks/updateSettings/settingsReducers';
import { now } from 'moment';
import { triggerNewMessage } from '../../ducks/newMessage/newMessageActions';
import { triggerGetBE } from '../../ducks/getPool/getPoolActions';


const Messages = () => {

  const { poolSettingsInfo, isLoading, userInfo, balanceInfo,poolInfo, path, pool, amount, poolMessageInfo, thisUser,statementInfo } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    userInfo: state.getPool.pool.userInfo,
    balanceInfo: state.getPool.pool.balanceInfo,
    poolInfo: state.getPool.pool,
    all: state.getPool,
    poolMessageInfo: state.getPool.pool.poolMessageInfo,
    statementInfo: state.getPool.pool.statementInfo,
    thisUser: state.getPool.pool.thisUserInfo,
    poolSettingsInfo: state.getPool.pool.poolSettingsInfo

  })
  );  
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const { pathname } = useLocation();
  const receiverId = parseInt((pathname.split('/')[2]), 10);
  // console.log('R', receiverId)
  

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newMessage={ sender_id: thisUser[0].id, receiver_id: receiverId, message: message, photourl:'http:/inoknow', statement_id:statementInfo.length <= 0 ? 1 : statementInfo[0].id, created_on:new Date(), pool_id:poolSettingsInfo[0].id}; //need to get the uid of whoever is logged in
    await dispatch(triggerNewMessage(newMessage));
    console.log(newMessage)
    setMessage('');
  };
  // useEffect(()=>{console.log('dispatch is working?');dispatch(triggerGetBE({ uid: 'y4Ac7s3VPddxkAnUOo5HA977d7x6' }))},[poolMessageInfo]);

  return (
  <div className='make-message' >
    <form onSubmit = {handleSubmit}>
        <textarea onChange ={(e) => handleChange(e)}  name='amount' value={message} ></textarea>
        <button type='submit' value='Submit'>Submit Message</button>
    </form>
  </div>
  )
  }

export default Messages;

