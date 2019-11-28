import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './expense-category.css';
import Card from '../../molecules/Card';
import ExpenseItem from '../../molecules/ExpenseItem';

interface ExpenseCategoryParams {
  category: string;
  expenses: object[];
}

const ExpsenseCategory = ({ category, expenses }: RouteComponentProps<ExpenseCategoryParams>) => {
  const categories = useSelector( state => state.getPool.pool.poolInfo);
console.log(category, expenses);
  return (
    <div className='expense-category hold-row'>
      <Card addClass ='expense'>
        <h2>{ category }</h2>
        {
          expenses.map( (expense, index) => (
            <ExpenseItem
              key={index}
              path='https://avatars3.githubusercontent.com/u/31024648?s=460&v=4'
              name={expense.expense}
              amount={expense.amount}
            />
          ))
        }
      </Card>
    </div>
  )
};

export default ExpsenseCategory;