import React from 'react';
import { useSelector } from 'react-redux';
import { firstName } from '../../services/helpers';
import './dashboard.css';
import Header from '../../molecules/Header';
import WelcomeHeader from '../../atoms/WelcomeHeader';
import OweCard from '../../organisms/OweCardList';
import Card from '../../molecules/Card';

const Dashboard = () => {
  const { isLoading, name, user, members } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    name: state.getPool.pool.userInfo[0].name,
    user: state.getPool.pool.balanceInfo.length > 0 ? state.getPool.pool.balanceInfo[0][1] : 0,
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
      { members.length > 0?
      <OweCard />:
      <Card addClass='one-member'>
       It looks like your the only member in your pool at this time.  Invite other members in the Pool Settings area.  
      </Card>
       }
    </div>
  )
};

export default Dashboard;
