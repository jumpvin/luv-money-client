import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerNewRule } from '../../ducks/newRule/newRuleActions';
import './style.css';
import RuleMember from '../../molecules/RuleMember';


const AddRule = () => {

  const {userInfo} = useSelector(state => ({
    userInfo: state.getPool.pool.userInfo
  }))

  const [rule, setRule] = useState('');
  const [tempVal, setTempVal] = useState({});
  

  const saveTempValues = ({values}) => {

  }

  const handleFormInputs = (e) => {
    console.log(e.target);
    const updated = Object.assign(tempVal, {[e.target.name]: e.target.value,});
    setTempVal(updated);
    /*    setTempVal({...tempVal,
      [e.target.name]: e.target.value,
    }) */
    
  }

  const handleChange = ({target}) => {
    setRule(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tempVal)
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
        <RuleMember 
          name={user.name}
          photo={user.photourl}
          save={saveTempValues}
          handle={handleFormInputs}
          />
        // <div>
        //   <div>{user.name}</div>
        //   <input type='number' name={user.name} value={rule} onChange={handleChange}></input>%
        // </div>
      ))}
      <button type='submit'>Submit</button>
      </form>
      
    </div>
    )
  }
  
export default AddRule;