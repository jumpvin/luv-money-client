import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './small-owe-info.css';
import UserFavicon from '../../atoms/UserFavicon';
import LuvMoneyLogo from '../../atoms/LuvMoneyLogo';


interface SmallOweInfoParams { 
  amount: number; 
  path: string
}

const SmallOweInfo = ({amount, path }: RouteComponentProps<SmallOweInfoParams>) => (
  <div className='small-owe-info'>
      <div className={amount < 0 ? `small-owe-amount`: `small-owe-amount small-owe-positive`}>
        {`$${Math.abs(amount)}`}
      </div>
      <UserFavicon path={path} />
      <div className='actions'>
        <LuvMoneyLogo></LuvMoneyLogo>
      </div>


  </div>
);

export default SmallOweInfo;