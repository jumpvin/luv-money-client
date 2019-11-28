import React from 'react';
import './footer.css';
import NavIcon from '../../atoms/NavIcon';

const Footer = () => (
    <footer>
      <NavIcon path='/' src='/icons/dashboard.png' />
      <NavIcon path='/expense-details' src='/icons/pool.png' />
      <NavIcon path='/payment' src='/logo192.png' />
      <NavIcon path='/settings' src='/icons/profile.png' />
      <NavIcon path='/pool-settings' src='/icons/info.png' />
    </footer>
);

export default Footer;