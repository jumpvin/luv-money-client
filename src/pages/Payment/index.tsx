
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { popUpState } from '../../ducks/popUpState/popUpActions'
import './payment.css';
import SmallOweInfo from '../../molecules/SmallOweInfo';
import Card from '../../molecules/Card';
import StatementInfo from '../../atoms/StatementInfo'
import Button from '../../atoms/Button';


const Payment = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  
  const { isLoading, userInfo, balanceInfo,poolInfo, path, pool, amount, thisUser } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    userInfo: state.getPool.pool.userInfo,
    balanceInfo: state.getPool.pool.balanceInfo,
    poolInfo: state.getPool.pool,
    all: state.getPool,
    thisUser: state.getPool.pool.thisUserInfo,
  })
  );
  const onClick =(value)=>{
    dispatch(popUpState('message'));
    history.push(`/message/${value}`)
}
  const userPoolBalance = (userId) => {
    for(let i = 0; i< balanceInfo.length; i++) {
      if ( userId === balanceInfo[i][0]) return balanceInfo[i][1];
    }
  };
  console.log(balanceInfo);
  return (
    <div>
    <div className='statement-card'>
      {
        isLoading ? 'Please Wait':
      userInfo.map((user, index) => (
        user.id===thisUser[0].id?
          <StatementInfo 
            key= {user.id} 
            amount={(balanceInfo.length <= 0) ? 0 : balanceInfo[1][1]} />  :null
        ))
      }
    </div>
    <div className='small-owe-container'>
    {
        isLoading ? 'Please Wait':
      userInfo.map((user, index) => (
        user.id!==thisUser[0].id?
        <SmallOweInfo
        key={user.id}
        amount={userPoolBalance(user.id)}
        path={user.photourl}
        onClick={({target})=>{onClick(target.value)} }
        receiverId={user.id}
        />
      : ''
      ))
      }
    </div>   
        <Button onClick={()=>dispatch(popUpState('makePayment'))} className='submit'> Pay </Button>  
  </div>
  )
};



export default Payment;

