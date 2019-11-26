import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './owe-card.css';
import UserFavicon from '../../atoms/UserFavicon';
import OweInfo from '../../atoms/OweInfo';
import PaymentLogo from '../../molecules/PaymentLogo';
import Card from '../Card';

interface OweCardParams { 
  path: string;
  who: string; 
  amount: number; 
  what:string
}

const OweCard = ({ path, who, amount, what}: RouteComponentProps<OweCardParams>) => (
  <Card addClass='owe' >
    <UserFavicon path={path} />
    <OweInfo who={who} amount={amount} what={what} />
    <PaymentLogo />
  </Card>
);

export default OweCard;