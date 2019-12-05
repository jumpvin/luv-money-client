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
      <div className='pop-up-title'>Your payment's Due</div>
      <div className= 'balance-container'>
        <div className='make-payment-info-img-container'>
        </div>
        <div className='balance-info'>
          Current Balance: <strong>{amount || 0}</strong>
        </div>
      </div>
      <div className='payment-container'>
      </div>
      
  </div>
);

export default MakePaymentInfo;