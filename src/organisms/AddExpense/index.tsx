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
  const [rule, setRule] = useState('equal');

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleRuleChange = event => {
    event.target.value = 'new' ? dispatch(popUpState('newRule')):
    setRule(event.target.value);
  };
  
  console.log(poolRuleSettingsInfo);
   ;
  
  return (
    <div className='form'>
      <form >
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
          />
        </div>
        <div>
          <TextField
          required
          label='Amount'
          margin='normal'
          name='amount'
          type='number'
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
                <MenuItem value={rule.id}>{rule.name}</MenuItem>
              )}
          {/* <MenuItem value='equal' > Split Equally</MenuItem> */}
          <Button style={{backgroundColor:'orange'}} >+<MenuItem value='new' >Add New Rule</MenuItem></Button>
        </Select>
      </FormControl>
        </div>
        <div>
        <Button variant="contained">Submit</Button>
        </div>
      </form>
      
    </div>
    )
  }
  
export default AddExpense;