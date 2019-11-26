import React from 'react';
import './expense-category.css';
import Card from '../../molecules/Card';
import ExpenseItem from '../../molecules/ExpenseItem';

const ExpsenseCategory = () => (
  <div className='expense-category hold-row'>
    <Card addClass ='expense'>
      <h2>Groceries</h2>
      <ExpenseItem 
       path='https://avatars3.githubusercontent.com/u/47696364?s=460&v=4'
       name='Consume'
       date='12/5/19'
       expense='$27.09'
       owed='$27.09'
      />
      <ExpenseItem 
        path='https://avatars3.githubusercontent.com/u/31024648?s=460&v=4'
        name='Netflix'
        date='12/5/19'
        expense='$7.09'
        owed='$7.09'
      />
    </Card>
  </div>
);

export default ExpsenseCategory;