import React from 'react';
import { useSelector } from 'react-redux';
import { firstName } from '../../services/helpers';
import Header from '../../molecules/Header';
import WelcomeHeader from '../../atoms/WelcomeHeader';
import OweCard from '../../organisms/OweCardList';

const Dashboard = () => {
  const { isLoading, name, amount } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    name: state.getPool.pool.userInfo[0].name,
    amount: state.getPool.pool.balanceInfo[0][1],
  })
);

  return (
    <div className='dashboard hold-column'>
      <Header>
        <WelcomeHeader 
          name={firstName(name)}
          amount={Math.abs(amount)}
        />
      </Header>
      <OweCard />
    </div>
  )
};

export default Dashboard;
