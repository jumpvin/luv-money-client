import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import './make-payment-info.css';

interface MakePaymentInfoParams { 
  pool: string; 
  amount: number;
  path: string;
}

const MakePaymentInfo = ({ pool, amount, path }: RouteComponentProps<MakePaymentInfoParams>) => (
  <div className='make-payment-info-container'>
      <h3>Your payment's Due</h3>
      <div className= 'balance-container'>
        <div className='make-payment-info-img-container'>
        </div>
          <h5>Current Balance</h5>
        <div className='balance-info'>
          {amount}
        </div>
      </div>
      <div className='payment-container'>
      </div>
      
  </div>
);

export default MakePaymentInfo;