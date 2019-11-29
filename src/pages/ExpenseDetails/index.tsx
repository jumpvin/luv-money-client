import React from 'react';
import { useSelector } from 'react-redux';
import './expense-details.css';
import Header from '../../molecules/Header';
import ExpenseCategory from '../../organisms/ExpenseCategory';

const ExpsenseDetails = () => {
  const { categories, poolName } = useSelector( state => ({ 
    categories: state.getPool.pool.poolInfo,
    poolName: state.getPool.pool.poolSettingsInfo[0].name, }));

  const arrayOfCatNames = () => {
    const allCats: object[] = [];
    categories.forEach(
      (cat) => {
        if (!allCats.includes(cat.category)) allCats.push(cat.category);
      },
    );
  
    return allCats;
  };

  const catExpenses = (category) => {
    const expenses: object[] = [];
    categories.forEach( (expense) => {
      if( category === expense.category) expenses.push(expense);
    });
    return expenses;
  };

  return (
    <div className='expense-details hold-column'>
      <Header>
        {poolName} Expenses
      </Header>
 
       {
         arrayOfCatNames().map( (name, index) => (
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
