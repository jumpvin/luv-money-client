import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './settings-item.css'
import UserFavicon from '../../atoms/UserFavicon';
import Card from '../Card';

interface SettingsGroupParams {
  name: string
}

const SettingsGroup = ({ name }: RouteComponentProps<SettingsGroupParams>) => (
  <Card className='settingsCard'>
    {name}
  </Card>
);

export default SettingsGroup;