import React from 'react';
import { useSelector } from 'react-redux';
import { firstName } from '../../services/helpers';
import Header from '../../molecules/Header';
import WelcomeHeader from '../../atoms/WelcomeHeader';
import OweCard from '../../organisms/OweCardList';

const Dashboard = () => {
  const { isLoading, name, user, members } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    name: state.getPool.pool.userInfo[0].name,
    user: state.getPool.pool.balanceInfo[0][1],
    members: state.getPool.pool.balanceInfo
  })
);

let amount =-user;
members.forEach(el=>amount+=el[1]);

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
