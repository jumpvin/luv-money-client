import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerEditRule } from '../../ducks/editRule/editRuleActions';
import './style.css';
import RuleMember from '../../molecules/RuleMember';
import {popUpState} from '../../ducks/popUpState/popUpActions'
import get from 'lodash.get'
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';

const EditRule = ({data}) => {

  const {userInfo, ruleInfo} = useSelector(state => ({
    userInfo: state.getPool.pool.userInfo,
    ruleInfo: state.getPool.pool.poolRuleSettingsInfo
  }))


  const [rule, setRule] = useState('');
  const [tempVal, setTempVal] = useState({});
  
  const handleFormInputs = (id, value ) => {
    const updated = Object.assign(tempVal, {[id]: value});
    setTempVal(updated);    
  }

  const handleChange = ({target}) => {
    setRule(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRule = { id: data.id, name: rule, amounts: tempVal };
    console.log(updatedRule);
    const sum: Number = Number(Object.values(tempVal).reduce((a, b) => { return Number(a) + Number(b) }, 0));
    
    if (rule == '') {
      alert ('Please provide a rule name')
    } else if (rule == 'new') {
      alert ('Rule name cannot be new')
    } else if (sum !== 100) {
      alert('Sum should be equal to 100')
    } else if ( sum == 100) {
      await dispatch(triggerEditRule(updatedRule));
      setRule('');
      setTimeout(()=>dispatch(popUpState('none')),10)
    }
    
  }

  const dispatch = useDispatch();

  
  return (
    <div className='hold-column'>
      <form onSubmit = {handleSubmit} className='hold-column'>
      <div className='pop-up-title'>Edit An Existing Rule</div>
      {console.log(data)}
      <TextInput required  name='Rule Name' type='text' value={data.name} onChange={handleChange} />
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
      <Button type='submit' onClick={handleSubmit} className='submit-button'>Update</Button>
      </form>
      
    </div>
    )
  }
  
export default EditRule;