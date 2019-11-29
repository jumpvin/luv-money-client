import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerNewRule } from '../../ducks/newRule/newRuleActions';
import './style.css';
import RuleMember from '../../molecules/RuleMember';
import {popUpState} from '../../ducks/popUpState/popUpActions'


const AddRule = () => {

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
    dispatch(triggerNewRule({name:rule, amounts:tempVal}));
    setRule('');
  }

  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit = {handleSubmit}>
      <h1>Create a new rule</h1>
      Name <input onChange={handleChange} value={rule} type='text'></input>
      {userInfo.map((user) => (
        <RuleMember 
          name={user.name}
          id={user.id}
          photo={user.photourl}
          handle={handleFormInputs}
          />
        // <div>
        //   <div>{user.name}</div>
        //   <input type='number' name={user.name} value={rule} onChange={handleChange}></input>%
        // </div>
      ))}
      <button type='submit' onClick={() => setTimeout(()=>dispatch(popUpState('none')),10)}>Submit</button>
      </form>
      
    </div>
    )
  }
  
export default AddRule;