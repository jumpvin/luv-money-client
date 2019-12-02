import React from 'react';
import { useSelector } from 'react-redux';
import { firstName } from '../../services/helpers';
import Header from '../../molecules/Header';
import WelcomeHeader from '../../atoms/WelcomeHeader';
import OweCard from '../../organisms/OweCardList';
import StatementHeader from '../../organisms/StatementHeader';

const Dashboard = () => {
  const { isLoading, name, user, members, statement } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    name: state.getPool.pool.userInfo[0].name,
    user: state.getPool.pool.balanceInfo[0][1],
    members: state.getPool.pool.balanceInfo,
    statement: state.getPool.pool.statementInfo
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
      <StatementHeader statement={statement}/>
      <OweCard />
    </div>
  )
};

export default Dashboard;
