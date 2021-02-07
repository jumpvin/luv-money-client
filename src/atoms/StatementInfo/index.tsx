import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import './statement-info.css';

interface StatementInfoParams { 
  amount: number; 
}

const StatementInfo = ({ amount }: RouteComponentProps<StatementInfoParams>) => (
  <div className='statement-info-container hold-column'>
      <div className='pop-up-title'> Settle Up</div>
      <div className= 'balance-container'>
        <div className='balance-info'>
          Current Balance: <strong>{ Math.abs(amount) || 0 }</strong>
        </div>
      </div>
      <div className='payment-container'>
      </div>
  </div>
);

export default StatementInfo;