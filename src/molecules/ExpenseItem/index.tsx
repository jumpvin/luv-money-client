import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './expense-item.css'
import UserFavicon from '../../atoms/UserFavicon';

interface ExpenseItemParams {
  path: string;
  name: string;
  date: string;
  expense: number;
  owed: number;
}

const ExpenseItem = ({ path, name, date, expense, owed }: RouteComponentProps<ExpenseItemParams>) => (
  <div className='expense-item'>
        <UserFavicon path={path} />
        <div>{name}</div>
        <div>{date}</div>
        <div>{expense}</div>
        <div>{owed}</div>
      </div>
);

export default ExpenseItem;