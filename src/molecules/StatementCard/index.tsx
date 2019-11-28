import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './statement-card.css';
import UserFavicon from '../../atoms/UserFavicon';
import StatementInfo from '../../atoms/StatementInfo';
import PaymentLogo from '../../molecules/PaymentLogo';
import Card from '../Card';

interface StatementCardParams { 
  path: string;
  pool: string; 
  amount: number; 
}

const StatementCard = ({ path, pool, amount}: RouteComponentProps<StatementCardParams>) => (
  <Card addClass='statement' >
    <StatementInfo pool={pool} amount={amount} />
  </Card>
);

export default StatementCard;