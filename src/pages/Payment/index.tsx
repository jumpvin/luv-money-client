
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { popUpState } from '../../ducks/popUpState/popUpActions'
import './payment.css';
import SmallOweInfo from '../../molecules/SmallOweInfo';
import Card from '../../molecules/Card';
import StatementInfo from '../../atoms/StatementInfo'


const Payment = () => {
  const dispatch = useDispatch();

  const { isLoading, userInfo, balanceInfo,poolInfo, path, pool, amount } = 
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
        <Card> 
          <StatementInfo 
            key= {user.id} 
            amount={balanceInfo[0][1]} />
        </Card> :null
        ))
      }
    </div>
    <div className='small-owe-container'>
    {
        isLoading ? 'Please Wait':
      userInfo.map((user, index) => (
      index === 0 ? null :
      <Card>
        <SmallOweInfo
        key={user.id}
        amount={userPoolBalance(user.id)}
        path={user.photourl}/>
      </Card>
      ))
      }
    </div>
        <button onClick={()=>dispatch(popUpState('makePayment'))}>Pay</button>       
  </div>
  )
};

export default Payment;

