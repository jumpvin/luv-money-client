import React from 'react';
import { useSelector } from 'react-redux';
import { firstName } from '../../services/helpers';
import './dashboard.css';
import Header from '../../molecules/Header';
import WelcomeHeader from '../../atoms/WelcomeHeader';
import OweCardList from '../../organisms/OweCardList';
import StatementHeader from '../../organisms/StatementHeader';
import Card from '../../molecules/Card';

const Dashboard = () => {
  const { isLoading, thisUser, user, members, balances, statement } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    thisUser: state.getPool.pool.thisUserInfo[0],
    members: state.getPool.pool.userInfo,
    balances: state.getPool.pool.balanceInfo,
    statement: state.getPool.pool.statementInfo,
    user: state.getPool.pool.balanceInfo.length > 0 ? state.getPool.pool.balanceInfo[0][1] : 0,
    // members: state.getPool.pool.balanceInfo
  })
);

let amount = 0;
if (balances!=[]){
let amount = -balances.find(el => el[0]===thisUser.id)||0;
members.forEach(el=>amount+=el[1]);
amount -= thisUser[1];
};

  return (
    <div className='dashboard hold-column'>
      <Header>
        <WelcomeHeader 
          name={firstName(thisUser.name)}
          amount={Math.abs(amount)}
        />
      </Header>
      {statement.length > 0 ? <StatementHeader statement={statement}/>: ''}
      { members.length > 1?
      <OweCardList />:
      <Card addClass='one-member'>
       It looks like your the only member in your pool at this time.  Invite other members in the Pool Settings area.  
      </Card>
       }
    </div>
  )
};

export default Dashboard;
