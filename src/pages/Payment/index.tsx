import React from 'react';
import AddExpense from '../../organisms/AddExpense/index';
import StatementCard from '../../molecules/StatementCard';
import { useState, useEffect } from 'react';
import { getPool } from '../../services/api'



const Payment = () => {
  // const [pool, setPool] = useState([]);
  // useEffect(() => {
  //   getPool()
  // }, []);

  return (
  <div className='hold-column'>
    <AddExpense/>
    Payment
    <StatementCard
      pool={"LuvMoneyPool"}
      amount="Balance Connection"
    ></StatementCard>
  </div>
  )
};

export default Payment;