
import React from 'react';
import AddExpense from '../../organisms/AddExpense/index';
import { useState, useEffect } from 'react';
import { getPool } from '../../services/api'
import StatementBlock from '../../organisms/StatementBlock'



const Payment = () => {
  return (
  <div className='hold-column'>
    {/* <AddExpense/>
    Payment */}
    <StatementBlock/>
  </div>
  )
};

export default Payment;