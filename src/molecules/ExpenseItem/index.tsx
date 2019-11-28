import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './expense-item.css'
import UserFavicon from '../../atoms/UserFavicon';

interface ExpenseItemParams {
  path: string;
  name: string;
  date: string;
  amount: number;
}

const ExpenseItem = ({ path, name, date, amount }: RouteComponentProps<ExpenseItemParams>) => (
  <div className='expense-item'>
        <UserFavicon path={path} />
        <div>{name}</div>
        <div>{date}</div>
        <div>${amount}</div>
      </div>
);

export default ExpenseItem;