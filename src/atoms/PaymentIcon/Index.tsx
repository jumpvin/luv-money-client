import React from 'react';
import { useDispatch } from 'react-redux';
import { popUpState } from '../../ducks/popUpState/popUpActions';
import LuvMoneyLogo from '../LuvMoneyLogo';




function PaymentIcon () {
  const dispatch=useDispatch();
  return (
    <div onClick={()=>dispatch(popUpState('payment'))} >
      <LuvMoneyLogo></LuvMoneyLogo>
    </div>
  )
  };

export default PaymentIcon;
