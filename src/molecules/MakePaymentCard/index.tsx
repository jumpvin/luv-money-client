import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './make-payment-card.css';
import MakePaymentInfo from '../../atoms/MakePaymentInfo';
import Card from '../Card';

interface MakePaymentCardParams { 
  path: string;
  pool: string; 
  amount: number; 
}

const MakePaymentCard = ({ path, pool, amount}: RouteComponentProps<MakePaymentCardParams>) => (
  <Card addClass='make-payment' >
    <MakePaymentInfo pool={pool} amount={amount} />
    <form>
        <input type='text' name='amount' value={amount}></input>
        <input type='submit' value='Submit'></input>
    </form>
  </Card>
);

export default MakePaymentCard;