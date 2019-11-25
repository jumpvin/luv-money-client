import React from 'react';
import './owe-card-list.css';
import UserFavicon from '../../atoms/UserFavicon';
import OweInfo from '../../atoms/OweInfo';
import PaymentLogo from '../../molecules/PaymentLogo';
import OweCard from '../../molecules/OweCard';

const OweCardList = () => (
  <div className='owe-card-list'>
    <OweCard 
      path='https://avatars3.githubusercontent.com/u/31024648?s=460&v=4'
      who='James'
      amount={3}
      what='Netflix'
    />
    <OweCard 
      path='https://avatars3.githubusercontent.com/u/47696364?s=460&v=4'
      who='Briana'
      amount={-14}
      what='Food'
    />
  </div>
);

export default OweCardList;