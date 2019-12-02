import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerNewRule } from '../../ducks/newRule/newRuleActions';
import './style.css';
import RuleMember from '../../molecules/RuleMember';
import {popUpState} from '../../ducks/popUpState/popUpActions'


const AddRule = () => {

  const {userInfo, poolRuleSettingsInfo} = useSelector(state => ({
    userInfo: state.getPool.pool.userInfo,
    poolRuleSettingsInfo: state.getPool.pool.poolRuleSettingsInfo
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
    const updatedRule={id:'',pool_id:poolRuleSettingsInfo[0].pool_id,name:rule,rule:tempVal};
    await dispatch(triggerNewRule(updatedRule));
    console.log('BEFORE', updatedRule);
    dispatch({type:'ADD_RULE', updatedRule});
    console.log('After', updatedRule);
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
      ))}
      <button type='submit' onClick={() => setTimeout(()=>dispatch(popUpState('none')),10)}>Submit</button>
      </form>
      
    </div>
    )
  }
  
export default AddRule;