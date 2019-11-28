import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerNewRule } from '../../ducks/newRule/newRuleActions';
import './style.css';


const AddRule = () => {

  const {userInfo} = useSelector(state => ({
    userInfo: state.getPool.pool.userInfo
  }))

  const [rule, setRule] = useState('');

  const handleChange = ({target}) => {
    setRule(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(triggerNewRule({name:rule}));
    setRule('');
  }


  const dispatch = useDispatch();


  return (
    <div>
      <form onSubmit = {handleSubmit}>
      <h1>Create a new rule</h1>
      Name <input onChange={handleChange} value={rule} type='text'></input>
      {userInfo.map((user) => (
        <div>
          <div>{user.name}</div>
          <input type='number' onChange={handleChange}></input>%
        </div>
      ))}
      <button type='submit'>Submit</button>
      </form>
      
    </div>
    )
  }
  
export default AddRule;