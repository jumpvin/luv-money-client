import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerNewRule } from '../../ducks/newRule/newRuleActions';
import './style.css';
import RuleMember from '../../molecules/RuleMember';
import {popUpState} from '../../ducks/popUpState/popUpActions'
import get from 'lodash.get'

const StatementCard = ({data}) => {

  return (
    <div>
      <h1>This is where the statement data goes for statement # {get(data, '[0].id','loading')} </h1>

    </div>
    )
  }
  
export default StatementCard;