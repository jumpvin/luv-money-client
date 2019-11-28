import React from 'react';
// import './expense-category.css';
import Card from '../../molecules/Card';
import SettingsGroup from '../../molecules/SettingsItem';

const SettingsList = () => (
  <div className='expense-category hold-row'>
    <Card addClass ='expense'>
      <h2>Your Pool</h2>
      <SettingsGroup 
       name='Consume'
      />
    </Card>
  </div>
);

export default SettingsList;