import React from 'react';
import './footer.css';
import NavIcon from '../../atoms/NavIcon';

const Footer = () => (
    <footer>
      <NavIcon path='/' src='/logo192.png' />
      <NavIcon path='/expense-details' src='/logo192.png' />
      <NavIcon path='/payment' src='/logo192.png' />
      <NavIcon path='/settings' src='/logo192.png' />
      <NavIcon path='/pool-settings' src='/logo192.png' />
    </footer>
);

export default Footer;