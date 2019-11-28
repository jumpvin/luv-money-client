import React from 'react';
import { useSelector } from 'react-redux';
import './owe-card-list.css';
import OweCard from '../../molecules/OweCard';

const OweCardList = () => {
  const { isLoading, userInfo, balanceInfo } = 
    useSelector( state => ({ 
      isLoading: state.getPool.isLoading,
      userInfo: state.getPool.pool.userInfo,
      balanceInfo: state.getPool.pool.balanceInfo,
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
          who={user.name}
          amount={userBalance(user.id)}
          what='Netflix'
        />
      ))
      }
    </div>
  )
};

export default OweCardList;