import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import './statement-info.css';

interface StatementInfoParams { 
  pool: string; 
  amount: number; 
}

const StatementInfo = ({ pool, amount }: RouteComponentProps<StatementInfoParams>) => (
  <div className='statement-info-container'>
      <h1>Settle Up Luver</h1>
      <div className= 'balance-container'>
        <div className='statement-info-img-container'>
          <img src={require('../../images/pink-card.png')} alt='debit-card-image'></img>
        </div>
        <div className='balance-info'>
          {amount}
          <h5>Current Balance</h5>
        </div>
      </div>
      <div className='payment-container'>
      </div>
  </div>
);

export default StatementInfo;