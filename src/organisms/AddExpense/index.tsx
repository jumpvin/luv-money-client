import React, { useState, useEffect }from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { popUpState } from '../../ducks/popUpState/popUpActions';
import { useSelector } from 'react-redux';
import { triggerNewExpense } from '../../ducks/newExpense/newExpenseActions';
import { triggerGetBE } from '../../ducks/getPool/getPoolActions';
import Header from '../../molecules/Header';
import TextInput from '../../atoms/TextInput';
import Select from '../../atoms/Select';


const AddExpense = () => {

  const { thisUserInfo, userInfo, balanceInfo, poolInfo, poolRuleSettingsInfo, newExpenses } = 
    useSelector( state => ({ 
      thisUserInfo: state.getPool.pool.thisUserInfo,
      userInfo: state.getPool.pool.userInfo,
      balanceInfo: state.getPool.pool.balanceInfo,
      poolInfo: state.getPool.pool,
      poolRuleSettingsInfo: state.getPool.pool.poolRuleSettingsInfo,
      newExpenses: state.newExpense.expense
    })
  );
  

  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState('');
  const [rule, setRule] = useState(poolRuleSettingsInfo[0]? poolRuleSettingsInfo[0].id: '');
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [added, setAdded] = useState(false);

  const handleDateChange = e => {
    setSelectedDate(e.target.value);
    setAdded(false);
  };

  const handleExpenseNameChange = ({ target }) => {
    console.log('expense',target.value);
    setExpenseName(target.value);
    setAdded(false);
  };

  const handleAmountChange = ({target}) => {
    setAmount(target.value);
    setAdded(false);
  };

  const handleRuleChange = event => {
    event.target.value === 'new' ? dispatch(popUpState('newRule')) :
      setRule(event.target.value);
      setAdded(false);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const expense = { id: 1, statement_id: (parseInt(poolInfo.poolSettingsInfo[0].next_statement || poolInfo.poolSettingsInfo[0].current_statement)), pool_expense_id: parseInt(rule), user_id: thisUserInfo[0].id, name: expenseName, date: selectedDate, amount: amount };
    if (expenseName == '' || amount == '' || selectedDate == '') {
      alert('Please fill all details')
    } else if (amount < '0') {
      alert ('please enter a positive amount')
    } else {
      await dispatch(triggerNewExpense(expense));
      setSelectedDate('');
      setAmount('');
      setExpenseName('');
      setAdded(true);
    }
  }

  useEffect(()=>{dispatch(triggerGetBE())},[newExpenses]);

  const payRegex = /Payment/;

  return (
    <div className='form hold-column'>
      <Header >
        Add Expense
      </Header>
      <form>
        <div>
         <TextInput required  name='Title' type='string' value={expenseName} onChange={handleExpenseNameChange} />
        </div>
        <div>
        <TextInput required  name='Amount' type='number' value={amount} onChange={handleAmountChange} />
        </div>
        <div>
        <TextInput required  name='' type='date' value={selectedDate} onChange={handleDateChange} />
        </div>
        <div>
          <Select value={rule} onChange={handleRuleChange}>
          {poolRuleSettingsInfo.map( rule => 
              <option key={rule.id} value={rule.id}>{rule.name}</option>
              )}
            <option value="new" >+Add new rule</option>
          </Select>
        </div>
        <div className='hold-column'>
          {added ?
            <div className='expense-message'>Expense Added!</div> : ''}
          <button className='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
    )
  }
  
export default AddExpense;