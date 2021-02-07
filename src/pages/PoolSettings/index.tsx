import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../molecules/Header';
import Card from '../../molecules/Card';
import './pool-settings.css'
import AddButton from '../../atoms/AddButton';
import moment from 'moment';
import AddRule from '../../organisms/AddRule';
import {popUpState, triggerPopUpFetch} from '../../ducks/popUpState/popUpActions'





const PoolSettings = () => {

  const dispatch = useDispatch();

  const {poolSettingsInfo, userInfo, poolRuleSettingsInfo, statementInfo, messageInfo} = 
    useSelector (state => ({
      poolSettingsInfo: state.getPool.pool.poolSettingsInfo,
      userInfo: state.getPool.pool.userInfo,
      poolRuleSettingsInfo: state.getPool.pool.poolRuleSettingsInfo,
      statementInfo: state.getPool.pool.statementInfo,
      messageInfo: state.getPool.pool.messageInfo
    })
  );
  
  return (
  <div className='hold-column'>
    <Header>
    {poolSettingsInfo ? poolSettingsInfo[0].name: ''} Settings
    </Header>

    <Card addClass='settingsGroup'>
      <div className='left'>
        <div className='settingsHeader'>
          <div className='settingsTitle'>Your Pool</div>
          <div>
            <button onClick={ () => dispatch(popUpState('invite'))}>Invite</button>
          </div>
        </div>
        <div className='settingsItem'>
          <div>Members</div>
          <div>{userInfo ? userInfo.length: ''}</div>
        </div>
      <div className='settingsItem'>
        <div>Frequency</div>
        <div>{poolSettingsInfo ? poolSettingsInfo[0].frequency: ''}</div>
      </div>
      <div className='settingsItem'>
        <div>Grace Period</div>
        <div>{poolSettingsInfo ? poolSettingsInfo[0].grace_period: ''}</div>
      </div>
      
      <div className='settingsItem'>
        <div>Next Statement Due</div>
        <div>{poolSettingsInfo ? moment(poolSettingsInfo[0].statement_date).format("MMM Do YYYY"): ''}</div>
      </div>
    </div>
    </Card>
    <Card addClass='settingsGroup'>
    <div className='left'>
      <div className='settingsTitle'>
        <div>Your Expense Rules</div>
        <button onClick={ () => dispatch(popUpState('newRule'))}>
        <AddButton/>
        </button>
      </div>
      {poolRuleSettingsInfo? poolRuleSettingsInfo.map((rule) => (
      <div className='settingsItem'>
        <div>{rule.name}</div>
        <button 
          onClick={ () => {
              dispatch(triggerPopUpFetch({id:userInfo[0].id,rule_id:rule.id,
              type: 'rule'}));
              dispatch(popUpState('editRule'))
            }}
        >Edit</button>
      </div>
      )) : ''}
    </div>
    </Card>
    <Card addClass='settingsGroup'>
    <div className='left'>
      <div className='settingsTitle'>Statements</div>
      {statementInfo ? statementInfo.map((statement) => (
      <div className='settingsItem'>
        <div>{moment(statement.statement_date).format("MMM Do YYYY")}</div>
        <button onClick={ () => {
          dispatch(triggerPopUpFetch({id:userInfo[0].id, statement_id:statement.id,
          type: 'statement'}));
          dispatch(popUpState('statement'))
          }}>View</button>
      </div>
      )) : ''}
    </div>
    </Card>
    <Card addClass='settingsGroup'>
    <div className='left'>
      <div className='settingsTitle'>Messages</div>
      {messageInfo ? messageInfo.map((message) => (
      <div className='settingsItem'>
        <div>{moment(message.message_date).format("MMM Do YYYY")}</div>
        <button onClick={ () => {
          dispatch(triggerPopUpFetch({id:userInfo[0].id, message_id:message.id,
          type: 'message'}));
          dispatch(popUpState('message'))
          }}>View</button>
      </div>
      )) : ''}
    </div>
    </Card>
  </div>
);
  };

export default PoolSettings;