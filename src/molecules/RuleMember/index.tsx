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

  const handleinput = (e) => {
    if (e.target.value > 100 || e.target.value < 0) {
      e.target.value = 0;
      alert("Enter valid percentage");
    }
  }
  return (
  <Card className='ruleCard'>
    <UserFavicon path={photo}/>
    {name}
    <input type='number' min='0' max='100' required id={id} value={percent} onChange={handleChange} onKeyUp={handleinput} />
  </Card>
)};

export default RuleMember;