import React from 'react';
import './style.css';
import TextInput  from '../../atoms/TextInput';


const AddExpense = () => {

  // const hi = "hi";
  return (
    <div className='form'>
      <form >
        <div>
          <h1>Add Expense</h1>
        </div>
        <div>
          Title<TextInput name='text' />
        </div>
        <div>
          Amount<input type='number'></input>
        </div>
        <div>
          Date<input type='date'></input>
        </div>
        <div>
          Rule<select name='rule'>
                <option value='equal'>Split Equally</option>
                <option value='custom'>Add a rule</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      
    </div>
    )
  }
  
export default AddExpense;