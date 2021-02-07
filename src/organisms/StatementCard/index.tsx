import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerNewRule } from '../../ducks/newRule/newRuleActions';
import './style.css';
import RuleMember from '../../molecules/RuleMember';
import {popUpState} from '../../ducks/popUpState/popUpActions'
import get from 'lodash.get';
import moment from 'moment';
import ExpenseItem from '../../molecules/ExpenseItem';

const StatementCard = ({data}) => {

  const {statementInfo, isLoaded} = 
    useSelector (state => ({
      statementInfo: state.popUpState.data,
      isLoaded: state.popUpState.isLoaded
    })
  );
  

  return (
    <div>
      <h1>Statement for {moment(get(data, '[0].statement_date','loading')).format('ll')} </h1>
      {
      isLoaded ?
      data.map((expense)=> (
        <ExpenseItem 
          name={expense.name}
          date={moment(expense.date).format('ll')}
          amount={expense.amount}
          path={expense.photourl}
          ></ExpenseItem>

      )) : <div>loading</div>
      }

    </div>
    )
  }
  
export default StatementCard;