import React from 'react';
import AddExpense from '../../organisms/AddExpense/index';
import { useState, useEffect } from 'react';
import { getPool } from '../../services/api'
import StatementBlock from '../../organisms/StatementBlock'



const Payment = () => {
  return (
<<<<<<< HEAD
  <div className='hold-column'>
    <AddExpense/>
    Payment
    <StatementCard
      pool={"LuvMoneyPool"}
      amount="Balance Connection"
    ></StatementCard>
=======
  <div>
    {/* <AddExpense/>
    Payment */}
    <StatementBlock/>
>>>>>>> development
  </div>
  )
};

export default Payment;