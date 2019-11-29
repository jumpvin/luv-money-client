import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { triggerPopUp } from '../../ducks/newRule/newRuleActions';
import Header from '../../molecules/Header';
import Card from '../../molecules/Card';
import './pool-settings.css'
import AddButton from '../../atoms/AddButton';
import moment from 'moment';
import AddRule from '../../organisms/AddRule';


const PoolSettings = () => {

  const dispatch = useDispatch();

  const {poolSettingsInfo, userInfo, poolRuleSettingsInfo, statementInfo, newRules} = 
    useSelector (state => ({
      poolSettingsInfo: state.getPool.pool.poolSettingsInfo,
      userInfo: state.getPool.pool.userInfo,
      poolRuleSettingsInfo: state.getPool.pool.poolRuleSettingsInfo,
      statementInfo: state.getPool.pool.statementInfo,
      newRules: state.newRule.newRules
    })
  );
  
  return (
  <div className='hold-column'>
    <Header>
    {poolSettingsInfo[0].name} Settings
    </Header>

    <Card addClass='settingsGroup'>
      <div className='left'>
        <div className='settingsTitle'>Your Pool</div>
        <div className='settingsItem'>
          <div>Members</div>
          <div>{userInfo.length}</div>
        </div>
      <div className='settingsItem'>
        <div>Frequency</div>
        <div>{poolSettingsInfo[0].frequency}</div>
      </div>
      <div className='settingsItem'>
        <div>Grace Period</div>
        <div>{poolSettingsInfo[0].grace_period}</div>
      </div>
      
      <div className='settingsItem'>
        <div>Next Statement Due</div>
        <div>{moment(poolSettingsInfo[0].statement_date).format("MMM Do YYYY")}</div>
      </div>
    </div>
    </Card>
    <AddRule/>
    <Card addClass='settingsGroup'>
    <div className='left'>
      <div className='settingsTitle'>
        <div>Your Expense Rules</div>
        <button>
        <AddButton/>
        </button>
      </div>
      
      {newRules
        ?newRules.map((rule) => (
          <div className='settingsItem'>
           <div>{rule.name}</div>
            <div>Edit</div>
          </div>
        ))
        :''
      }
      {poolRuleSettingsInfo.map((rule) => (
      <div className='settingsItem'>
        <div>{rule.name}</div>
        <div>Edit</div>
      </div>
      ))}
    </div>
    </Card>
    <Card addClass='settingsGroup'>
    <div className='left'>
      <div className='settingsTitle'>Statements</div>
      {statementInfo.map((statement) => (
      <div className='settingsItem'>
        <div>{moment(statement.statement_date).format("MMM Do YYYY")}</div>
        <div>View</div>
      </div>
      ))}
    </div>
    </Card>
  </div>
);
  };

export default PoolSettings;