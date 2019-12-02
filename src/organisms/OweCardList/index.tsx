import React from 'react';
import { useSelector } from 'react-redux';
import { firstName } from '../../services/helpers';
import './owe-card-list.css';
import OweCard from '../../molecules/OweCard';

const OweCardList = () => {
  const { isLoading, userInfo, balanceInfo,poolInfo } = 
    useSelector( state => ({ 
      isLoading: state.getPool.isLoading,
      userInfo: state.getPool.pool.userInfo,
      balanceInfo: state.getPool.pool.balanceInfo,
      poolInfo: state.getPool.pool
    })
  );

  const userBalance = (userId) => {
    for(let i = 0; i< balanceInfo.length; i++) {
      if ( userId === balanceInfo[i][0]) return balanceInfo[i][1];
    }
  };
  return (
    <div className='owe-card-list hold-column'>
      {
        isLoading ? 'Please Wait':
      userInfo.map((user, index) => (
       index === 0 ?'' : 
       <OweCard 
          key={index}
          path={user.photourl}
          who={firstName(user.name)}
          amount={userBalance(user.id)}
        />
      ))
      }
    </div>
  )
};

export default OweCardList;