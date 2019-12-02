import React, {useState}from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Messages() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('')
  const { isLoading, userInfo, balanceInfo,poolInfo, path, pool, amount, poolRuleSettingsInfo } = 
  useSelector( state => ({ 
    isLoading: state.getPool.isLoading,
    userInfo: state.getPool.pool.userInfo,
    balanceInfo: state.getPool.pool.balanceInfo,
    poolInfo: state.getPool.pool,
    all: state.getPool,
    poolRuleSettingsInfo: state.getPool.pool.poolRuleSettingsInfo, 
  })
  );  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newMessage={ sender_id:, receiver_id: ,message:, photourl:,statement_id:, created_on:};
  //   await dispatch(triggerSubmitPayment(newMessage));
  //   setMessage('');
  // };
  // const handleChange = (e) => {
  //   setMessage(e.target.value);
  // }

  return (
    <div>
      <form>
        <textarea name='amount' value={message}></textarea>
        <button type='submit' value='Submit'>Send Luv</button>
      </form>
    </div>
  )
}

export default Messages

