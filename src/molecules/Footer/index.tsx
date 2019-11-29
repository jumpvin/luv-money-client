import React from 'react';
import './footer.css';
import NavIcon from '../../atoms/NavIcon';
import LuvMoneyLogo from '../../atoms/LuvMoneyLogo';

const Footer = () => (
    <footer>
      <NavIcon path='/' >
        <LuvMoneyLogo />
      </NavIcon>
      <NavIcon path='/expense-details'>
        <LuvMoneyLogo />
      </NavIcon>
      <NavIcon path='/payment' >
        <LuvMoneyLogo />
      </NavIcon>
      <NavIcon path='/pool-settings' >
        <LuvMoneyLogo />
      </NavIcon>
      <NavIcon path='/settings' >
        <LuvMoneyLogo />
      </NavIcon>
    </footer>
);

export default Footer;