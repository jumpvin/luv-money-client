import React from 'react';
import './footer.css';
import NavIcon from '../../atoms/NavIcon';
import LuvMoneyLogo from '../../atoms/LuvMoneyLogo';
import { useDispatch } from 'react-redux';
import { popUpState } from '../../ducks/popUpState/popUpActions'
import PaymentIcon from '../../atoms/PaymentIcon/Index';

const Footer = () => {
  
  return(

    <footer>
      <NavIcon path='/' >
        <LuvMoneyLogo />
      </NavIcon>
      <NavIcon path='/expense-details'>
        <LuvMoneyLogo />
      </NavIcon>
      {/* <PaymentIcon> */}
      <NavIcon path='expense'>
      <LuvMoneyLogo />
      </NavIcon>
      <NavIcon path='/pool-settings' >
        <LuvMoneyLogo />
      </NavIcon>
      <NavIcon path='/settings' >
        <LuvMoneyLogo />
      </NavIcon>
    </footer>
  )
  };

export default Footer;

