import React from 'react';
import { useSelector } from 'react-redux';
import { arrayOfCatNames } from '../../services/helpers';
import './expense-details.css';
import Header from '../../molecules/Header';
import ExpenseCategory from '../../organisms/ExpenseCategory';

const ExpsenseDetails = () => {
  const categories = useSelector( state => state.getPool.pool.poolInfo);
  const categoryNames = arrayOfCatNames(categories);

  const catExpenses = (category) => {
    const expenses: object[] = [];
    categories.forEach( (expense) => {
      if( category === expense.category) expenses.push(expense);
    });
    return expenses;
  };

  return (
    <div className='expense-details'>
      <Header>
        All Roomie Pool Expenses
      </Header>
 
       {
         categoryNames.map( (name, index) => (
           <ExpenseCategory 
           key={index}
           category={name} 
           expenses={catExpenses(name)}
           />
           )
         )
      }
    </div>
  )
};

export default ExpsenseDetails;
