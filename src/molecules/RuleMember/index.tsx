import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import "./settings-item.css";
import UserFavicon from "../../atoms/UserFavicon";
import Card from "../Card";
import { userInfo } from "os";
import { popUpState } from "../../ducks/popUpState/popUpActions";

interface RuleMemberParams {
  name: string;
  value: number;
  photo: string;
  id: string;
  rule: number;
}

const RuleMember = ({
  photo,
  name,
  handle,
  id,
  rule
}: RouteComponentProps<RuleMemberParams>) => {
  const { userPercent } = useSelector(state => ({
    userPercent: state.popUpState.data.rule
  }));

  const [percent, setPercent] = useState(rule);

  const handleChange = e => {
    setPercent(e.target.value);
    handle(e);
  };

  useEffect(() => {
    if(rule && rule.length){
      let userPercent = rule.find(([userId]) => {
        return userId === id;
       });
       if (!userPercent) userPercent=[0,0];
       setPercent(userPercent[1])
    }
  },rule);

  const handleinput = (e) => {
    if (e.target.value > 100 || e.target.value < 0) {
      e.target.value = '';
      alert("Enter valid percentage");
    }
  }
  return (
  <Card className='ruleCard'>
    <UserFavicon path={photo}/>
    {name}
    <input type='number' min='0' max='100' placeholder="value" required id={id} value={percent} onChange={handleChange} onKeyUp={handleinput} />
  </Card>
)};

export default RuleMember;
