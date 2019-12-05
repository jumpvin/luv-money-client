import React from 'react';
import { useDispatch } from 'react-redux';
import { popUpState } from '../../ducks/popUpState/popUpActions';
import { ReactComponent as Logo } from '../../assests/logo/Luv Logo.svg';
import './style.css';





function PaymentIcon () {
  const dispatch=useDispatch();
  return (
    <div onClick={()=>dispatch(popUpState('payment'))} >
     <div className='logo'><Logo/></div>
    </div>
  )
  };

export default PaymentIcon;
