import React from 'react';
import Header from '../../molecules/Header';
import Card from '../../molecules/Card';
import './pool-settings.css'
import AddButton from '../../atoms/AddButton';

const PoolSettings = () => (
  <div>
    <Header>
      LuvMoney Settings
    </Header>

    <Card addClass='settingsGroup'>
      <div className='settingsTitle'>Your Pool</div>
      <div className='settingsItem'>
        <div>Members</div>
        <div>4</div>
      </div>
      <div className='settingsItem'>
        <div>Notifications</div>
        <div>On</div>
      </div>
      <div className='settingsItem'>
        <div>Frequency</div>
        <div>Monthly</div>
      </div>
      <div className='settingsItem'>
        <div>Grace Period</div>
        <div>5 Days</div>
      </div>
      <div className='settingsItem'>
        <div>Next Statement Due</div>
        <div>December 12th, 2019</div>
      </div>
    </Card>
    <Card addClass='settingsGroup'>
      <div className='settingsTitle'>
        <div>Your Expense Rules</div>
        <AddButton/>
      </div>
      <div className='settingsItem'>
        <div>Groceries</div>
        <div>Edit</div>
      </div>
      <div className='settingsItem'>
        <div>Entertainment</div>
        <div>Edit</div>
      </div>
    </Card>
    <Card addClass='settingsGroup'>
      <div className='settingsTitle'>Previous Statements</div>
      <div className='settingsItem'>
        <div>November 12th, 2019</div>
        <div>View</div>
      </div>
      <div className='settingsItem'>
        <div>October 12th, 2019</div>
        <div>View</div>
      </div>
    </Card>
  </div>
);

export default PoolSettings;
