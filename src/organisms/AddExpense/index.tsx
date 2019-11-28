import React from 'react';
import './style.css';


const AddExpense = () => {

  const hi = "hi";
  return (
    <div>
      <form>
      <h1>Add Expense</h1>
      Title<input type='text'></input><br/>
      Amount<input type='number'></input><br />
      Date<input type='date'></input><br />
      Rule<select name='rule'>
        <option value='default'>Default</option>
        <option value='equal'>Split Equally</option>
        <option value='custom'>Custom</option>
      </select><br/>
      <button>Submit</button>
      </form>
      
    </div>
    )
  }
  
export default AddExpense;