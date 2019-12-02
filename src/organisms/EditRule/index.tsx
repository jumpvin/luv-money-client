import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerEditRule } from '../../ducks/editRule/editRuleActions';
import './style.css';
import RuleMember from '../../molecules/RuleMember';
import {popUpState} from '../../ducks/popUpState/popUpActions'
import get from 'lodash.get'

const EditRule = ({data}) => {

  const {userInfo} = useSelector(state => ({
    userInfo: state.getPool.pool.userInfo
  }))


  const [rule, setRule] = useState('');
  const [tempVal, setTempVal] = useState({});
  
  const handleFormInputs = (e) => {
    const updated = Object.assign(tempVal, {[e.target.id]: e.target.value});
    setTempVal(updated);    
  }

  const handleChange = ({target}) => {
    setRule(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(triggerEditRule({id: data.id, name:rule, amounts:tempVal}));
    setRule('');
  }

  const dispatch = useDispatch();

  
  return (
    <div>
      <form onSubmit = {handleSubmit}>
      <h1>EDIT AN EXISTING RULE</h1>
      Name <input onChange={handleChange} value={data.name} type='text'></input>
      {userInfo.map((user) => (
        <RuleMember 
          name={user.name}
          id={user.id}
          photo={user.photourl}
          handle={handleFormInputs}
          rule={data.rule}
          />
        // <div>
        //   <div>{user.name}</div>
        //   <input type='number' name={user.name} value={rule} onChange={handleChange}></input>%
        // </div>
      ))}
      <button type='submit' onClick={() => setTimeout(()=>dispatch(popUpState('none')),10)}>Update</button>
      </form>
      
    </div>
    )
  }
  
export default EditRule;