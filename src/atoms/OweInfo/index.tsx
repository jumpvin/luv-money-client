import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './owe-info.css';

interface OweInfoParams { 
  who: string; 
  amount: number; 
  what:string
}

const OweInfo = ({ who, amount, what }: RouteComponentProps<OweInfoParams>) => (
  <div className='owe-info'>
      <div className='owe-who'> 
        { amount < 0 ? `You owe ${who}`: `${who} owes You`}
      </div>
      <div className={amount < 0 ? `owe-amount`: `owe-amount owe-positive`}>
        {`$${Math.abs(amount)}`}
      </div>
      <div className='owe-what'>
        {`For ${what}`}
      </div>
    </div>
);

export default OweInfo;