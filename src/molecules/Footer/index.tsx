import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './footer.css';
import NavIcon from '../../atoms/NavIcon';
import LuvMoneyLogo from '../../atoms/LuvMoneyLogo';
import { useSelector, useDispatch } from 'react-redux';
import { popUpState } from '../../ducks/popUpState/popUpActions'

interface LuvMoneyLogoParams {
  onClick: any; 
}
const Footer = ({onClick}: RouteComponentProps<LuvMoneyLogoParams>) => {
  const dispatch = useDispatch();
  
  return(

    <footer>
      <NavIcon path='/' >
        <LuvMoneyLogo />
      </NavIcon>
      <NavIcon path='/expense-details'>
        <LuvMoneyLogo />
      </NavIcon>
      <NavIcon path='/payment'> 
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

