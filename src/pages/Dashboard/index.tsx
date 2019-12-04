import React from 'react';
import { useSelector } from 'react-redux';
import { firstName } from '../../services/helpers';
import './dashboard.css';
import Header from '../../molecules/Header';
import WelcomeHeader from '../../atoms/WelcomeHeader';
import OweCardList from '../../organisms/OweCardList';
import StatementHeader from '../../organisms/StatementHeader';
import Card from '../../molecules/Card';
import PaymentIcon from '../../atoms/PaymentIcon/Index';

const Dashboard = () => {
  const { isLoading, thisUser, user, members, balances, settings, statement } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    thisUser: state.getPool.pool.thisUserInfo[0],
    members: state.getPool.pool.userInfo,
    balances: state.getPool.pool.balanceInfo,
    statement: state.getPool.pool.statementInfo,
    settings: state.getPool.pool.poolSettingsInfo,
    user: state.getPool.pool.balanceInfo.length > 0 ? state.getPool.pool.balanceInfo[0][1] : 0,
    // members: state.getPool.pool.balanceInfo
  })
);

let totalAmount;
(balances)?totalAmount = balances.find(el => el[0]===thisUser.id):totalAmount = [0,0];
let amount=0;
// (balances)?amount = totalAmount[1]||0:0;


  return (
    <div className='dashboard hold-column'>
      <Header>
        <WelcomeHeader 
          name={firstName(thisUser.name)}
          amount={Math.abs(amount)}
        />
      </Header>
      {settings.length > 0 ? <StatementHeader balance={amount} info={settings}/>: ''}
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
