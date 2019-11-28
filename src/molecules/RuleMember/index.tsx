import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './settings-item.css'
import UserFavicon from '../../atoms/UserFavicon';
import Card from '../Card';
import { userInfo } from 'os';

interface RuleMemberParams {
  name: string,
  value: number,
  photo: string
}



const RuleMember = ({ photo, name, handle }: RouteComponentProps<RuleMemberParams>) => {
  
  const [percent, setPercent] = useState("");

  const handleChange = (e) => {
    setPercent(e.target.value);
    handle(e);
  }

  return (
  <Card className='ruleCard'>
    <UserFavicon path={photo}/>
    {name}
    <input type='number' name={name} value={percent} onChange={handleChange}/>
  </Card>
)};

export default RuleMember;