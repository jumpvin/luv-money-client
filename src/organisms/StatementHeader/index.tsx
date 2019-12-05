import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Card from '../../molecules/Card';
import PaymentIcon from '../../atoms/PaymentIcon/Index';
import moment from 'moment';
import './statement-header.css';

interface StatementHeaderParams { 
  path: string;
  who: string; 
  amount: number; 
}

const StatementHeader = ({ info, balance }: RouteComponentProps<StatementHeaderParams>) => (
  <Card addClass='statement' >

  {(balance<0)?`You're owed $${-balance} ${moment(info[0].due_date).fromNow()}. While waiting, attach a message or send some love!`:`You owe $${balance} ${moment(info[0].due_date).fromNow()} - want to settle up now?`}

  <PaymentIcon/>

    {/* {(statement[0].status==='1')?
      <div className = 'statementReady'>{`Your statement is ready! Please settle up your $${statement[0].amount} owed by ${moment(statement[0].due_date).format('ll')}.`}</div>:''}
    {(statement[0].status==='2')?
      <div className = 'statementEarly'>{`You've got ${moment(statement[0].due_date).fromNow()} until you need to settle up. Your current balance is $${statement[0].amount}.`}</div>:''}
    {(statement[0].status==='3')?
      <div className = 'statementSettled'>{`You're all settled up for this period! 🙌🏼.`}</div>:''}
    {(statement[0].status==='4')?
      <div><div>❗️❗️</div>
      <div className = 'statementOverdue'>{`Uh-oh - looks like you're a little late to pay pack your friends. Please pay your previous $${statement[0].amount} balance ASAP.`}</div>
      <div>❗️❗️</div></div>:''} */}
  </Card>
);

export default StatementHeader;