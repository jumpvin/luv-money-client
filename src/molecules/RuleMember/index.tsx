import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './settings-item.css'
import UserFavicon from '../../atoms/UserFavicon';
import Card from '../Card';
import { userInfo } from 'os';

interface RuleMemberParams {
  name: string,
  value: number,
  photo: string,
  id: string
}



const RuleMember = ({ photo, name, handle, id }: RouteComponentProps<RuleMemberParams>) => {
  
  const [percent, setPercent] = useState("");

  const handleChange = (e) => {
    setPercent(e.target.value);
    handle(e);
  }

  return (
  <Card className='ruleCard'>
    <UserFavicon path={photo}/>
    {name}
    <input type='number' id={id} value={percent} onChange={handleChange} />
  </Card>
)};

export default RuleMember;