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

  const { userInfo, balanceInfo,poolInfo, poolRuleSettingsInfo } = 
    useSelector( state => ({ 
      userInfo: state.getPool.pool.userInfo,
      balanceInfo: state.getPool.pool.balanceInfo,
      poolInfo: state.getPool.pool,
      poolRuleSettingsInfo: state.getPool.pool.poolRuleSettingsInfo
    })
  );
  

  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [rule, setRule] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleExpenseNameChange = ({target}) => {
    setExpenseName(target.value);
  };

  const handleAmountChange = ({target}) => {
    setAmount(target.value);
  };

  const handleRuleChange = event => {
    event.target.value === 'new' ? dispatch(popUpState('newRule')):
    setRule(event.target.value);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const expense={id:'1',pool_expense_id:'1', user_id:'1', name:expenseName, date:selectedDate, amount:amount};
    await dispatch(triggerNewExpense(expense));
    await dispatch(triggerGetBE({ uid: 'y4Ac7s3VPddxkAnUOo5HA977d7x6' }));
  }


  return (
    <div className='form'>
      <form>
        <div>
          <h1>Add Expense</h1>
        </div>
        <div>
          <TextField
          required
          label='Title'
          margin='normal'
          name='title'
          type='string'
          value={expenseName}
          onChange={handleExpenseNameChange}
          />
        </div>
        <div>
          <TextField
          required
          label='Amount'
          margin='normal'
          name='amount'
          type='number'
          value={amount}
          onChange={handleAmountChange}
          />
        </div>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
              label = 'Pick a Date'
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div>
        <FormControl style={{minWidth:150}} required>
        <InputLabel>Rule</InputLabel>
        <Select
          value={rule}
          onChange={handleRuleChange}
            >
              {poolRuleSettingsInfo.map(rule => 
                <MenuItem value={rule.name}>{rule.name}</MenuItem>
              )}
          <Button value='new' style={{backgroundColor:'orange'}} >+<MenuItem >Add New Rule</MenuItem></Button>
        </Select>
      </FormControl>
        </div>
        <div>
        <Button onClick = {handleSubmit}variant="contained">Submit</Button>
        </div>
      </form>
      
    </div>
    )
  }
  
export default AddExpense;