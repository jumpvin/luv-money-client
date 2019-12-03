import React, { useState, useEffect }from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { popUpState } from '../../ducks/popUpState/popUpActions';
import { useSelector } from 'react-redux';
import { triggerNewExpense } from '../../ducks/newExpense/newExpenseActions'
import { triggerGetBE } from '../../ducks/getPool/getPoolActions'


const AddExpense = () => {

  const { userInfo, balanceInfo,poolInfo, poolRuleSettingsInfo, newExpenses } = 
    useSelector( state => ({ 
      userInfo: state.getPool.pool.userInfo,
      balanceInfo: state.getPool.pool.balanceInfo,
      poolInfo: state.getPool.pool,
      poolRuleSettingsInfo: state.getPool.pool.poolRuleSettingsInfo,
      newExpenses: state.newExpense.expense
    })
  );
  

  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState('');
  const [rule, setRule] = useState(poolRuleSettingsInfo[0].id);
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');

  const handleDateChange = e => {
    setSelectedDate(e.target.value);
  };

  const handleExpenseNameChange = ({target}) => {
    setExpenseName(target.value);
  };

  const handleAmountChange = ({target}) => {
    setAmount(target.value);
  };

  const handleRuleChange = event => {
    event.target.value === 'new' ? dispatch(popUpState('newRule')) :
      setRule(event.target.value);
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expense = { id: '1', pool_expense_id: rule, user_id: userInfo[0].id, name: expenseName, date: selectedDate, amount: amount };
    if (expenseName == '' || amount == '' || selectedDate == '') {
      alert('Please fill all details')
    } else if (amount < '0') {
      alert ('please enter a positive amount')
    } else {
      await dispatch(triggerNewExpense(expense));
    }
  }

  useEffect(()=>{dispatch(triggerGetBE())},[newExpenses]);

console.log(rule);
  return (
    <div className='form'>
      <form>
        <div>
          <h1>Add Expense</h1>
        </div>
        <div>
         Title: <input required  name='title' type='string' value={expenseName} onChange={handleExpenseNameChange} />
        </div>
        <div>
        Amount: <input required name='amount' type='number' value={amount} onChange={handleAmountChange} />
        </div>
        <div>
        Pick a date:<input type='date' value={selectedDate} onChange={handleDateChange} />
        </div>
        <div>
        <select value={rule} onChange={handleRuleChange}>
              {poolRuleSettingsInfo.map( rule =>               
              <option key={rule.id} value={rule.id}>{rule.name}</option>
              )}
            <option value="new" >+Add new rule</option>
        </select>
        </div>
        <div>
        <button onClick = {handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
    )
  }
  
export default AddExpense;