import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './statement-block.css';
import StatementCard from '../../molecules/StatementCard';
import SmallOweInfo from '../../molecules/SmallOweInfo';

const StatementCardList = () => {
  const { isLoading, userInfo, balanceInfo,poolInfo } = 
    useSelector( state => ({ 
      isLoading: state.getPool.isLoading,
      userInfo: state.getPool.pool.userInfo,
      balanceInfo: state.getPool.pool.balanceInfo,
      poolInfo: state.getPool.pool,
      all: state.getPool
    })
  );

  const userPoolBalance = (userId) => {
    for(let i = 0; i< balanceInfo.length; i++) {
      if ( userId === balanceInfo[i][0]) return balanceInfo[i][1];
    }
  };
  console.log(poolInfo)
  return (
    <div>
      <div className='statement-card'>
        {
          isLoading ? 'Please Wait':
        userInfo.map((user, index) => (
        index === 0 ? 
        <StatementCard 
            key={index}
            who={user.name}
            amount={userPoolBalance(user.id)}
          />
          : null
          ))
        }
      </div>
      <div className='small-owe-container'>
      {
          isLoading ? 'Please Wait':
        userInfo.map((user, index) => (
        index === 0 ? null :
        <SmallOweInfo
        key={index}
        who={user.name}
        amount={userPoolBalance(user.id)}
        path={user.photourl}
        ></SmallOweInfo>
        ))
        }
      </div>
      <Link to={'/makePayment'}>
          <button>Pay</button>
      </Link>
        
    </div>
  )
};

export default StatementCardList;