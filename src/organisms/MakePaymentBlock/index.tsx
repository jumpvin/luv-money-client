import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './make-payment-block.css';
import MakePaymentCard from '../../molecules/MakePaymentCard';

const MakePaymentBlock = () => {
  const { isLoading, userInfo, balanceInfo,poolInfo, thisUser } = 
    useSelector( state => ({ 
      isLoading: state.getPool.isLoading,
      userInfo: state.getPool.pool.userInfo,
      balanceInfo: state.getPool.pool.balanceInfo,
      poolInfo: state.getPool.pool,
      all: state.getPool,
      thisUser: state.getPool.pool.thisUserInfo,

    })
  );

  const userPoolBalance = (userId) => {
    for(let i = 0; i< balanceInfo.length; i++) {
      if ( userId === balanceInfo[i][0]) return balanceInfo[i][1];
    }
  };
  return (
    <div>
      <div className='statement-card'>
        {
          isLoading ? 'Please Wait':
          userInfo.map((user, index) => (
            user.id===thisUser[0].id ?
        <MakePaymentCard/>
          : null
          ))
        }
      </div>
     
        
    </div>
  )
};

export default MakePaymentBlock;