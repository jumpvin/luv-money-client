import React from 'react';
import StatementCard from '../../molecules/StatementCard';
import { useState, useEffect } from 'react';
import { getPool } from '../../services/api'



const Payment = () => {
  // const [pool, setPool] = useState([]);
  // useEffect(() => {
  //   getPool()
  // }, []);

  return (
  <div>
    Payment
    <StatementCard
      pool={"LuvMoneyPool"}
      amount="Balance Connection"
    ></StatementCard>
  </div>
  )
};

export default Payment;