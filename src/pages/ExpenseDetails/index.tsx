import React from 'react';
import './expense-details.css';
import Header from '../../molecules/Header';
import ExpenseCategory from '../../organisms/ExpenseCategory';


const ExpsenseDetails = () => (
  <div className='expense-details'>
    <Header>
      All Roomie Pool Expenses
    </Header>
    <ExpenseCategory />
  </div>
);

export default ExpsenseDetails;
