import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerNewRule } from '../../ducks/newRule/newRuleActions';
import './style.css';
import RuleMember from '../../molecules/RuleMember';
import {popUpState} from '../../ducks/popUpState/popUpActions'
import TextInput from '../../atoms/TextInput';


const AddRule = () => {

  const {userInfo, poolSettingsInfo} = useSelector(state => ({
    userInfo: state.getPool.pool.userInfo,
    poolSettingsInfo: state.getPool.pool.poolSettingsInfo
  }))

  const [rule, setRule] = useState('');
  const [tempVal, setTempVal] = useState({});
  
  const handleFormInputs = (id, value) => {
    const updated = Object.assign(tempVal, { [id]: value });
    setTempVal(updated);    
  }

  const handleChange = ({target}) => {
    setRule(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRule = { id: '', pool_id: poolSettingsInfo[0].id, name: rule, rule: tempVal };
    const sum: Number = Number(Object.values(tempVal).reduce((a, b) => { return Number(a) + Number(b) },0));
    console.log(sum);
    if (rule == '') {
      alert ('Please provide a rule name')
    } else if (rule == 'new') {
      alert ('Rule name cannot be new')
    } else if (sum !== 100) {
      alert('Sum should be equal to 100')
  
    } else if ( sum == 100) {
      await dispatch(triggerNewRule(updatedRule));
      await dispatch({ type: 'ADD_RULE', updatedRule });
      setRule('');
      setTimeout(()=>dispatch(popUpState('none')),10)
    }

  }
  const dispatch = useDispatch();

  return (
    <div className='hold-column'>
      <form className='hold-column'>
      <div className='pop-up-title'>Create A New Rule</div >
      <TextInput required  name='Rule Name' type='text' value={rule} onChange={handleChange} />
      {userInfo.map((user) => (
        <RuleMember 
          key={user.id}
          name={user.name}
          id={user.id}
          photo={user.photourl}
          handle={handleFormInputs}
          />
      ))}
      <button className='submit' type='submit' 
      onClick={handleSubmit}
      
      >Submit</button>
      </form>
      
    </div>
    )
  }
  
export default AddRule;