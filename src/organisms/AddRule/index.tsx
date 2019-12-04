import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerNewRule } from '../../ducks/newRule/newRuleActions';
import './style.css';
import RuleMember from '../../molecules/RuleMember';
import {popUpState} from '../../ducks/popUpState/popUpActions'


const AddRule = () => {

  const {userInfo, poolSettingsInfo} = useSelector(state => ({
    userInfo: state.getPool.pool.userInfo,
    poolSettingsInfo: state.getPool.pool.poolSettingsInfo
  }))

  const [rule, setRule] = useState('');
  const [tempVal, setTempVal] = useState({});
  
  const handleFormInputs = (e) => {
    const updated = Object.assign(tempVal, { [e.target.id]: e.target.value });
    setTempVal(updated);    
  }

  const handleChange = ({target}) => {
    setRule(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRule = { id: '', pool_id: poolSettingsInfo[0].id, name: rule, rule: tempVal };
    const sum: Number = Number(Object.values(tempVal).reduce((a, b) => { return Number(a) + Number(b) },0));

    if (rule == '') {
      alert ('please provide a rule name')
    } else if (rule == 'new') {
      alert ('rule name cannot be new')
    } else if (sum !== 100) {
      alert('sum should be equal to 100')
  
    } else if ( sum == 100) {
      await dispatch(triggerNewRule(updatedRule));
      await dispatch({ type: 'ADD_RULE', updatedRule });
      setRule('');
      setTimeout(()=>dispatch(popUpState('none')),10)
    }

  }
  const dispatch = useDispatch();

  return (
    <div>
      <form >
      <h1>Create a new rule</h1>
      Name <input required onChange={handleChange} value={rule} type='text'></input>
      {userInfo.map((user) => (
        <RuleMember 
          name={user.name}
          id={user.id}
          photo={user.photourl}
          handle={handleFormInputs}
          />
      ))}
      <button type='submit' 
      onClick={handleSubmit}
      
      >Submit</button>
      </form>
      
    </div>
    )
  }
  
export default AddRule;