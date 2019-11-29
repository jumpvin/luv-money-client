import React, { useState, useEffect }from 'react';
import './style.css';
import TextInput from '../../atoms/TextInput';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';



const AddExpense = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [rule, setRule] = useState('equal');

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleRuleChange = event => {

    
    setRule(event.target.value);
  };

  // useEffect(() => { 
  // console.log(rule);
  
  // }, [rule])
  
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
          <MenuItem value='equal' > Split Equally</MenuItem>
          <MenuItem value='new' >Add New Rule</MenuItem>
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