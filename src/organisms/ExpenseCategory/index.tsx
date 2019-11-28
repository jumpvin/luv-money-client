import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { userPhotoUrl } from '../../services/helpers';
import './expense-category.css';
import Card from '../../molecules/Card';
import ExpenseItem from '../../molecules/ExpenseItem';

interface ExpenseCategoryParams {
  category: string;
  expenses: object[];
}

const ExpsenseCategory = ({ category, expenses }: RouteComponentProps<ExpenseCategoryParams>) => {
  const userInfo = useSelector( state => state.getPool.pool.userInfo);

  return (
    <div className='expense-category hold-row'>
      <Card addClass ='expense'>
        <h2 className='category-header'>{ category }</h2>
        {
          expenses.map( (expense, index) => (
            <ExpenseItem
              key={index}
              path={userPhotoUrl(expense.user_id, userInfo)}
              name={expense.expense}
              date={moment(expense.date).format('MMM Do')}
              amount={expense.amount}
            />
          ))
        }
      </Card>
    </div>
  )
};

export default ExpsenseCategory;