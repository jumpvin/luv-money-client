import React  from 'react';
import './style.css';
import creditCards from '../../assests/payments/credit cards.png';
import paypal from '../../assests/payments/paypal.png';
import bankTrasnfer from '../../assests/payments/bank transfer.png';
const PaymentMethods = () => {

  let a = 1

  return (
    <div className='payment'>
      <div>
        <h1>Payment Methods</h1>
      </div>
      <div className='payment-link'>  
        <div>
          <img src={creditCards} className='img-long' alt='creditcards'></img>
        </div>
        <div>
          <img src={paypal} className='img' alt='paypal'></img>
        </div>
        <div>
          <img src={bankTrasnfer} className='img' alt='bank'></img>
        </div>
      </div>
  </div>
  )
}

export default PaymentMethods;