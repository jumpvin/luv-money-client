import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './owe-info.css';

interface OweInfoParams { 
  who: string; 
  amount: number; 
}

const OweInfo = ({ who, amount }: RouteComponentProps<OweInfoParams>) => (
  <div className='owe-info'>
      <div className='owe-who'> 
        { amount < 0 ? `${who} is owed`: `${who} owes`}
      </div>
      <div className={amount < 0 ? `owe-amount`: `owe-amount owe-positive`}>
        {`$${Math.abs(amount||0)}`}
      </div>
    </div>
);

export default OweInfo;